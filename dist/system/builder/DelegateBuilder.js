System.register(['../utils.js', './AttributeBuilder.js', './Builder.js'], function (_export) {

    /**
     * The delegate builder.
     * Its goal is to provide a way to delegate methods, properties and attributes.
     * @extends {Builder}
     */
    'use strict';

    var isUndefined, isFunction, toArray, getAttValue, setAttValue, Builder, DelegateBuilder;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_utilsJs) {
            isUndefined = _utilsJs.isUndefined;
            isFunction = _utilsJs.isFunction;
            toArray = _utilsJs.toArray;
        }, function (_AttributeBuilderJs) {
            getAttValue = _AttributeBuilderJs.getAttValue;
            setAttValue = _AttributeBuilderJs.setAttValue;
        }, function (_BuilderJs) {
            Builder = _BuilderJs.Builder;
        }],
        execute: function () {
            DelegateBuilder = (function (_Builder) {
                _inherits(DelegateBuilder, _Builder);

                /**
                 * @param {!PropertyBuilder|AttributeBuilder|MethodBuilder} fieldBuilder the field builder
                 */

                function DelegateBuilder(fieldBuilder) {
                    _classCallCheck(this, DelegateBuilder);

                    _get(Object.getPrototypeOf(DelegateBuilder.prototype), 'constructor', this).call(this);
                    /**
                     * @ignore
                     */
                    this.fieldBuilder = fieldBuilder;
                    /**
                     * @ignore
                     */
                    this.data = {};
                    if (fieldBuilder.data.attrName) {
                        this.data.attrName = fieldBuilder.data.attrName;
                    } else if (this.fieldBuilder.data.propName) {
                        this.data.propName = fieldBuilder.data.propName;
                    } else if (this.fieldBuilder.data.methName) {
                        this.data.methName = fieldBuilder.data.methName;
                    }
                }

                /**
                 * The target of the delegate.
                 * @param {!string} selector a valid css query
                 * @returns {DelegateBuilder} the builder
                 */

                _createClass(DelegateBuilder, [{
                    key: 'to',
                    value: function to(selector) {
                        this.data.selector = selector;
                        return this;
                    }

                    /**
                     * To force the delegation to a property.
                     * @param {string} [propName] the name of the property
                     * @returns {DelegateBuilder} the builder
                     */
                }, {
                    key: 'property',
                    value: function property(propName) {
                        this.data.attrName = null;
                        if (!isUndefined(propName)) {
                            this.data.propName = propName;
                        } else {
                            this.data.propName = this.fieldBuilder.data.propName;
                        }
                        return this;
                    }

                    /**
                     * To force the delegation to an attribute.
                     * @param {string} [attrName] the name of the attribute
                     * @returns {DelegateBuilder} the builder
                     */
                }, {
                    key: 'attribute',
                    value: function attribute(attrName) {
                        this.data.propName = null;
                        if (!isUndefined(attrName)) {
                            this.data.attrName = attrName;
                        } else {
                            this.data.attrName = this.fieldBuilder.data.attrName || this.fieldBuilder.data.propName;
                        }
                        return this;
                    }

                    /**
                     * To force the delegation to a method.
                     * @param {string} [methName] the name of the method
                     * @returns {DelegateBuilder} the builder
                     */
                }, {
                    key: 'method',
                    value: function method(methName) {
                        this.data.methName = null;
                        if (!isUndefined(methName)) {
                            this.data.methName = methName;
                        } else {
                            this.data.methName = this.fieldBuilder.data.methName;
                        }
                        return this;
                    }

                    /**
                     * @override
                     */
                }, {
                    key: 'build',
                    value: function build(proto, on) {
                        var data = this.data,
                            fieldBuilderData = this.fieldBuilder.data,
                            targetedPropName = this.data.propName,
                            targetedMethName = this.data.methName,
                            targetedAttrName = this.data.attrName,
                            fieldGetter = fieldBuilderData.getter,
                            fieldSetter = fieldBuilderData.setter;

                        if (fieldBuilderData.attrName) {
                            fieldBuilderData.getterFactory = function (attrName, isBoolean) {
                                return function (el) {
                                    var target = el.querySelector(data.selector);
                                    if (target) {
                                        return targetedAttrName ? getAttValue(target, targetedAttrName, isBoolean) : target[targetedPropName];
                                    }
                                };
                            };
                            fieldBuilderData.setterFactory = function (attrName, isBoolean, attSetter) {
                                return function (el, value) {
                                    var target = el.querySelector(data.selector),
                                        attrValue = isFunction(attSetter) ? attSetter.call(el, el, value) : value;
                                    if (target) {
                                        if (targetedAttrName) {
                                            setAttValue(target, targetedAttrName, isBoolean, attrValue);
                                        } else {
                                            target[targetedPropName] = attrValue;
                                        }
                                        setAttValue(el, attrName, isBoolean, attrValue);
                                    }
                                };
                            };
                        } else if (fieldBuilderData.propName) {
                            fieldBuilderData.descriptorValue = false;
                            fieldBuilderData.getter = function (el) {
                                var target = el.querySelector(data.selector),
                                    targetValue = undefined;
                                if (target) {
                                    if (targetedAttrName) {
                                        targetValue = target.getAttribute(targetedAttrName);
                                    } else {
                                        targetValue = target[targetedPropName];
                                    }
                                }
                                return isFunction(fieldGetter) ? fieldGetter.call(el, el, targetValue) : targetValue;
                            };
                            fieldBuilderData.setter = function (el, value) {
                                var target = el.querySelector(data.selector),
                                    targetValue = isFunction(fieldSetter) ? fieldSetter.call(el, el, value) : value;
                                if (target) {
                                    if (targetedAttrName) {
                                        target.setAttribute(targetedAttrName, targetValue);
                                    } else {
                                        target[targetedPropName] = targetValue;
                                    }
                                }
                            };
                        } else if (fieldBuilderData.methName) {
                            fieldBuilderData.invoke = function (el) {
                                var target = el.querySelector(data.selector);
                                if (isFunction(target[targetedMethName])) {
                                    var args = toArray(arguments);
                                    args.shift();
                                    return target[targetedMethName].apply(target, args);
                                }
                            };
                        }

                        this.fieldBuilder.build(proto, on);
                    }
                }]);

                return DelegateBuilder;
            })(Builder);

            _export('DelegateBuilder', DelegateBuilder);
        }
    };
});