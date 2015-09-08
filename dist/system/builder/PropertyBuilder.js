System.register(['./Builder.js', '../utils.js'], function (_export) {
    'use strict';

    var Builder, isFunction, isUndefined, result, assign, DEFAULT_DATA, PropertyBuilder;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_BuilderJs) {
            Builder = _BuilderJs.Builder;
        }, function (_utilsJs) {
            isFunction = _utilsJs.isFunction;
            isUndefined = _utilsJs.isUndefined;
            result = _utilsJs.result;
            assign = _utilsJs.assign;
        }],
        execute: function () {
            DEFAULT_DATA = {
                enumerable: true,
                immutable: false,
                descriptorValue: true
            };

            /**
             * The property builder.
             * Its goal is to provide a way to define a property.
             * @extends {Builder}
             */

            PropertyBuilder = (function (_Builder) {
                _inherits(PropertyBuilder, _Builder);

                /**
                 * @param {!string} propName the name of the property
                 */

                function PropertyBuilder(propName) {
                    _classCallCheck(this, PropertyBuilder);

                    _get(Object.getPrototypeOf(PropertyBuilder.prototype), 'constructor', this).call(this);
                    /**
                     * @ignore
                     */
                    this.data = assign({ propName: propName }, DEFAULT_DATA);
                }

                /**
                 * To make an immutable property.
                 * @returns {PropertyBuilder} the builder
                 */

                _createClass(PropertyBuilder, [{
                    key: 'immutable',
                    value: function immutable() {
                        this.data.immutable = true;
                        return this;
                    }

                    /**
                     * To hide the property name when using <code>Object.keys()</code>.
                     * @returns {PropertyBuilder} the builder
                     */
                }, {
                    key: 'hidden',
                    value: function hidden() {
                        this.data.enumerable = false;
                        return this;
                    }

                    /**
                     * To set a default value.
                     * @param {*} value the default value
                     * @returns {PropertyBuilder} the builder
                     */
                }, {
                    key: 'value',
                    value: function value(_value) {
                        this.data.value = _value;
                        return this;
                    }

                    /**
                     * To set a getter function.
                     * @param {function(el: HTMLElement): *} fn the getter function
                     * @returns {PropertyBuilder} the builder
                     */
                }, {
                    key: 'getter',
                    value: function getter(fn) {
                        this.data.descriptorValue = false;
                        this.data.getter = fn;
                        return this;
                    }

                    /**
                     * To set a setter function.
                     * @param {function(el: HTMLElement, value: *)} fn the setter function
                     * @returns {PropertyBuilder} the builder
                     */
                }, {
                    key: 'setter',
                    value: function setter(fn) {
                        this.data.descriptorValue = false;
                        this.data.setter = fn;
                        return this;
                    }

                    /**
                     * @ignore
                     */
                }, {
                    key: 'build',
                    value: function build(proto, on) {
                        var _this = this;

                        var data = this.data,
                            defaultValue = result(this.data, 'value'),
                            descriptor = {
                            enumerable: this.data.enumerable
                        };

                        if (this.data.immutable) {
                            descriptor.configurable = false;
                            descriptor.writable = false;
                        } else if (isFunction(this.data.getter) || isFunction(this.data.setter)) {
                            descriptor.configurable = false;
                            descriptor.get = function () {
                                return data.getter.call(this, this);
                            };
                            descriptor.set = function (value) {
                                return data.setter.call(this, this, value);
                            };
                        } else {
                            descriptor.configurable = true;
                            descriptor.writable = true;
                        }

                        if (this.data.descriptorValue) {
                            descriptor.value = defaultValue;
                        }

                        Object.defineProperty(proto, this.data.propName, descriptor);

                        on('after:createdCallback').invoke(function (el) {
                            if (!_this.data.descriptorValue && !isUndefined(defaultValue)) {
                                el[data.propName] = defaultValue;
                            }
                        });
                    }
                }]);

                return PropertyBuilder;
            })(Builder);

            _export('PropertyBuilder', PropertyBuilder);
        }
    };
});