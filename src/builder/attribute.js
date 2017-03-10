import {isFunction, isUndefined, isNull} from '../helper/types.js';
import {result, assign} from '../helper/objects.js';
import {toCamelCase} from '../helper/converters.js';
import Builder from './Builder';

/**
 * Get the value from an attribute.
 * @param {!HTMLElement} el an HTML element
 * @param {!string} attrName the name of the attribute
 * @param {!boolean} isBoolean true is the returned value should be a boolean
 * @returns {string|boolean}
 */
export function getAttValue(el, attrName, isBoolean) {
    if (isBoolean) {
        return el.hasAttribute(attrName);
    }
    return el.getAttribute(attrName);
}

/**
 * Set the value of an attribute.
 * @param {!HTMLElement} el an HTML element
 * @param {!string} attrName the name of the attribute
 * @param {!boolean} isBoolean true is the value should be a boolean
 * @param {string|boolean} value the value to set
 */
export function setAttValue(el, attrName, isBoolean, value) {
    if (isBoolean) {
        // Handle boolean value
        if (value && !el.hasAttribute(attrName)) {
            el.setAttribute(attrName, '');
        } else if (!value && el.hasAttribute(attrName)) {
            el.removeAttribute(attrName);
        }
    } else {
        // Handle none boolean value
        if ((isUndefined(value) || isNull(value)) && el.hasAttribute(attrName)) {
            // There is no value, so the attribute must be removed
            el.removeAttribute(attrName);
        } else if (!isUndefined(value) && !isNull(value) && el.getAttribute(attrName) !== value) {
            // Sync the attribute value with value
            el.setAttribute(attrName, value);
        }
    }
}

function getterFactory(attrName, isBoolean) {
    return function () {
        return getAttValue(this, attrName, isBoolean);
    };
}

function setterFactory(attrName, isBoolean, attSetter) {
    return function (value) {
        const attValue = isFunction(attSetter) ? attSetter.call(this, this, value) : value;
        return setAttValue(this, attrName, isBoolean, attValue);
    };
}

const DEFAULT_DATA = {
    bound: true,
    getterFactory,
    setterFactory,
    getAttValue: getAttValue,
    setAttValue: setAttValue
};

/**
 * The attribute builder.
 * Its goal is to provide a way to define an attribute.
 */
export class AttributeBuilder extends Builder {

    /**
     * @param {!string} attrName the name of the attribute
     */
    constructor(attrName) {
        super();
        /**
         * @ignore
         */
        this.data = assign({
            attrName,
            propName: toCamelCase(attrName),
            listeners: []
        }, DEFAULT_DATA);
    }

    /**
     * To handle the attribute/property value as a boolean:
     * Attribute is present when true and missing when false.
     * @returns {AttributeBuilder} the builder
     */
    boolean() {
        this.data.boolean = true;
        return this;
    }

    /**
     * To hide the property name when using <code>Object.keys()</code>.
     * @returns {PropertyBuilder} the builder
     */
    hidden() {
        this.data.enumerable = false;
        return this;
    }

    /**
     * To skip the link between the attribute and its property
     * @returns {AttributeBuilder} the builder
     */
    unbound() {
        this.data.bound = false;
        return this;
    }

    /**
     * To override the property name.
     * @param {!string} propName the property name
     * @returns {AttributeBuilder} the builder
     */
    property(propName) {
        this.data.propName = propName;
        return this;
    }

    /**
     * To set a default value.
     * @param {*} value the default value
     * @returns {PropertyBuilder} the builder
     */
    value(value) {
        this.data.value = value;
        return this;
    }

    /**
     * To be notified when the attribute is updated.
     * @param {function(el: HTMLElement, oldVal: string, newVal: string)} listener the listener function
     * @returns {AttributeBuilder} the builder
     */
    listen(listener) {
        this.data.listeners.push(listener);
        return this;
    }

    /**
     * Logic of the builder.
     * @param {!ElementBuilder.context.p} proto the prototype
     * @param {!ElementBuilder.on} on the method on
     */
    build(proto, on) {
        let data = this.data,
            defaultValue = result(this.data, 'value'),
            descriptor = {
                enumerable: this.data.enumerable,
                configurable: false,
                get: this.data.getterFactory(this.data.attrName, this.data.boolean),
                set: this.data.setterFactory(this.data.attrName, this.data.boolean)
            };

        if (data.bound) {
            Object.defineProperty(proto, data.propName, descriptor);
        }

        on('after:createdCallback').invoke(el => {
            if (data.bound) {
                let attrValue = getAttValue(el, data.attrName, data.boolean);
                if (data.boolean) {
                    el[data.propName] = !!defaultValue ? defaultValue : attrValue;
                } else if (!isNull(attrValue) && !isUndefined(attrValue)) {
                    el[data.propName] = attrValue;
                } else if (!isUndefined(defaultValue)) {
                    el[data.propName] = defaultValue;
                }
            }
            if (data.listeners.length > 0) {
                let oldValue = data.boolean ? false : null;
                let setValue = el[data.propName];
                if (oldValue !== setValue) {
                    data.listeners.forEach(listener => listener.call(el, el, oldValue, setValue));
                }
            }
        });

        on('before:attributeChangedCallback').invoke((el, attName, oldVal, newVal) => {
            // Synchronize the attribute value with its properties
            if (attName === data.attrName) {
                if (data.bound) {
                    let newValue = data.boolean ? newVal === '' : newVal;
                    if (el[data.propName] !== newValue) {
                        el[data.propName] = newValue;
                    }
                }
                if (data.listeners.length > 0) {
                    let oldValue = data.boolean ? oldVal === '' : oldVal;
                    let setValue = data.boolean ? newVal === '' : newVal;
                    if (oldValue !== setValue) {
                        data.listeners.forEach(listener => listener.call(el, el, oldValue, setValue));
                    }
                }
            }
        });
    }

}

/**
 * Get a new attribute builder.
 * @param {!string} attrName the name of the attribute
 * @returns {AttributeBuilder} the attribute builder
 */
export function attribute(attrName) {
    return new AttributeBuilder(attrName);
}
