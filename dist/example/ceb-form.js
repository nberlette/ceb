webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(32);

	__webpack_require__(35);

	__webpack_require__(34);

	__webpack_require__(33);

	__webpack_require__(175);

	__webpack_require__(176);

	__webpack_require__(177);

	var _jquery = __webpack_require__(21);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _cebForm = __webpack_require__(309);

	var _cebForm2 = _interopRequireDefault(_cebForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)(function () {
	  return (0, _jquery2.default)(_cebForm2.default).appendTo((0, _jquery2.default)('body'));
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isFunction = isFunction;
	exports.isUndefined = isUndefined;
	exports.isNull = isNull;
	exports.isString = isString;
	exports.isArray = isArray;
	// obviously close to underscorejs and lodash ;)

	/**
	 * Checks if value is a Function object.
	 * @param [value] the value to check
	 * @return {boolean} true if value is a function, else false.
	 */
	function isFunction(value) {
	  return Object.prototype.toString.call(value) === '[object Function]';
	}

	/**
	 * Checks if value is undefined.
	 * @param [value] the value to check
	 * @return {boolean} true if value is undefined, else false.
	 */
	function isUndefined(value) {
	  return value === undefined;
	}

	/**
	 * Checks if value is null.
	 * @param [value] the value to check
	 * @return {boolean} true if value is null, else false.
	 */
	function isNull(value) {
	  return value === null;
	}

	/**
	 * Checks if value is a string.
	 * @param [value] the value to check
	 * @return {boolean} true if value is a string, else false.
	 */
	function isString(value) {
	  return Object.prototype.toString.call(value) === '[object String]';
	}

	/**
	 * Checks if value is an array.
	 * @param [value] the value to check
	 * @return {boolean} true if value is an array, else false.
	 */
	function isArray(value) {
	  return Object.prototype.toString.call(value) === '[object Array]';
	}

/***/ },

/***/ 3:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArray = toArray;
	exports.toCamelCase = toCamelCase;
	// obviously close to underscorejs and lodash ;)

	/**
	 * Converts value to an array.
	 * @param [value] the value to convert
	 * @returns {Array} the converted array
	 */
	function toArray(value) {
	  return Array.prototype.slice.call(value);
	}

	/**
	 * Converts string to camel case.
	 * @param {string} [string=''] the string to convert
	 * @return {string} the camel cased string
	 */
	function toCamelCase() {
	  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	  return string.toLowerCase().split('-').map(function (part, index) {
	    return index ? part.charAt(0).toUpperCase() + part.slice(1) : part;
	  }).join('');
	}

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.partial = partial;
	exports.bind = bind;
	exports.noop = noop;

	var _converter = __webpack_require__(3);

	/**
	 * Partially apply a function by filling in any number of its arguments, without changing its dynamic this value.
	 * @param {!Function} fn the function to partially apply arguments to
	 * @param {...} args the arguments to be partially applied
	 * @returns {Function} the new partially applied function
	 */
	function partial(fn) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    return function () {
	        return fn.apply(this, args.concat((0, _converter.toArray)(arguments)));
	    };
	}

	/**
	 * Creates a function that invokes fn with context the context ctx.
	 * @param {!Function} fn the function to bind
	 * @param ctx the context
	 * @returns {Function} the new bound function
	 */
	// obviously close to underscorejs and lodash ;)

	function bind(fn, ctx) {
	    return function () {
	        return fn.apply(ctx, (0, _converter.toArray)(arguments));
	    };
	}

	/**
	 * An empty function doing nothing.
	 * @returns {Function} a new function doing nothing
	 */
	function noop() {
	    return function () {};
	}

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.result = result;
	exports.assign = assign;

	var _type = __webpack_require__(1);

	/**
	 * Resolve the value of propName into object.
	 * If the value is a function, it will be executed.
	 * @param {!Object} object the object
	 * @param {!string} propName the property name
	 * @return the resolved value.
	 */
	function result(object, propName) {
	    var value = object[propName];
	    return (0, _type.isFunction)(value) ? value() : value;
	}

	/**
	 * Assigns own enumerable properties of source object(s) to the destination object.
	 * @param {!Object} destination the destination object
	 * @param {...Object} [sources] the source objects
	 * @returns {Object} the destination object
	 */
	// obviously close to underscorejs and lodash ;)

	function assign(destination) {
	    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        sources[_key - 1] = arguments[_key];
	    }

	    return [destination].concat(sources).reduce(function (target, source) {
	        return Object.keys(Object(source)).reduce(function (target, key) {
	            target[key] = source[key];
	            return target;
	        }, target);
	    });
	}

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _element = __webpack_require__(27);

	Object.defineProperty(exports, 'element', {
	  enumerable: true,
	  get: function get() {
	    return _element.element;
	  }
	});

	var _property = __webpack_require__(12);

	Object.defineProperty(exports, 'property', {
	  enumerable: true,
	  get: function get() {
	    return _property.property;
	  }
	});

	var _attribute = __webpack_require__(11);

	Object.defineProperty(exports, 'attribute', {
	  enumerable: true,
	  get: function get() {
	    return _attribute.attribute;
	  }
	});
	Object.defineProperty(exports, 'getAttValue', {
	  enumerable: true,
	  get: function get() {
	    return _attribute.getAttValue;
	  }
	});
	Object.defineProperty(exports, 'setAttValue', {
	  enumerable: true,
	  get: function get() {
	    return _attribute.setAttValue;
	  }
	});

	var _delegate = __webpack_require__(26);

	Object.defineProperty(exports, 'delegate', {
	  enumerable: true,
	  get: function get() {
	    return _delegate.delegate;
	  }
	});

	var _method = __webpack_require__(28);

	Object.defineProperty(exports, 'method', {
	  enumerable: true,
	  get: function get() {
	    return _method.method;
	  }
	});

	var _template = __webpack_require__(30);

	Object.defineProperty(exports, 'template', {
	  enumerable: true,
	  get: function get() {
	    return _template.template;
	  }
	});
	Object.defineProperty(exports, 'applyTemplate', {
	  enumerable: true,
	  get: function get() {
	    return _template.applyTemplate;
	  }
	});

	var _on = __webpack_require__(29);

	Object.defineProperty(exports, 'on', {
	  enumerable: true,
	  get: function get() {
	    return _on.on;
	  }
	});

	var _array = __webpack_require__(13);

	Object.defineProperty(exports, 'flatten', {
	  enumerable: true,
	  get: function get() {
	    return _array.flatten;
	  }
	});
	Object.defineProperty(exports, 'invoke', {
	  enumerable: true,
	  get: function get() {
	    return _array.invoke;
	  }
	});

	var _converter = __webpack_require__(3);

	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _converter.toArray;
	  }
	});
	Object.defineProperty(exports, 'toCamelCase', {
	  enumerable: true,
	  get: function get() {
	    return _converter.toCamelCase;
	  }
	});

	var _function = __webpack_require__(4);

	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _function.bind;
	  }
	});
	Object.defineProperty(exports, 'noop', {
	  enumerable: true,
	  get: function get() {
	    return _function.noop;
	  }
	});
	Object.defineProperty(exports, 'partial', {
	  enumerable: true,
	  get: function get() {
	    return _function.partial;
	  }
	});

	var _object = __webpack_require__(5);

	Object.defineProperty(exports, 'assign', {
	  enumerable: true,
	  get: function get() {
	    return _object.assign;
	  }
	});
	Object.defineProperty(exports, 'result', {
	  enumerable: true,
	  get: function get() {
	    return _object.result;
	  }
	});

	var _event = __webpack_require__(31);

	Object.defineProperty(exports, 'dispatchCustomEvent', {
	  enumerable: true,
	  get: function get() {
	    return _event.dispatchCustomEvent;
	  }
	});
	Object.defineProperty(exports, 'dispatchMouseEvent', {
	  enumerable: true,
	  get: function get() {
	    return _event.dispatchMouseEvent;
	  }
	});

	var _type = __webpack_require__(1);

	Object.defineProperty(exports, 'isArray', {
	  enumerable: true,
	  get: function get() {
	    return _type.isArray;
	  }
	});
	Object.defineProperty(exports, 'isFunction', {
	  enumerable: true,
	  get: function get() {
	    return _type.isFunction;
	  }
	});
	Object.defineProperty(exports, 'isNull', {
	  enumerable: true,
	  get: function get() {
	    return _type.isNull;
	  }
	});
	Object.defineProperty(exports, 'isString', {
	  enumerable: true,
	  get: function get() {
	    return _type.isString;
	  }
	});
	Object.defineProperty(exports, 'isUndefined', {
	  enumerable: true,
	  get: function get() {
	    return _type.isUndefined;
	  }
	});

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AttributeBuilder = undefined;
	exports.getAttValue = getAttValue;
	exports.setAttValue = setAttValue;
	exports.attribute = attribute;

	var _type = __webpack_require__(1);

	var _object = __webpack_require__(5);

	var _converter = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Get the value from an attribute.
	 * @param {!HTMLElement} el an HTML element
	 * @param {!string} attrName the name of the attribute
	 * @param {!boolean} isBoolean true is the returned value should be a boolean
	 * @returns {string|boolean}
	 */
	function getAttValue(el, attrName, isBoolean) {
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
	function setAttValue(el, attrName, isBoolean, value) {
	    if (isBoolean) {
	        // Handle boolean value
	        if (value && !el.hasAttribute(attrName)) {
	            el.setAttribute(attrName, '');
	        } else if (!value && el.hasAttribute(attrName)) {
	            el.removeAttribute(attrName);
	        }
	    } else {
	        // Handle none boolean value
	        if (((0, _type.isUndefined)(value) || (0, _type.isNull)(value)) && el.hasAttribute(attrName)) {
	            // There is no value, so the attribute must be removed
	            el.removeAttribute(attrName);
	        } else if (!(0, _type.isUndefined)(value) && !(0, _type.isNull)(value) && el.getAttribute(attrName) !== value) {
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
	        var attValue = (0, _type.isFunction)(attSetter) ? attSetter.call(this, this, value) : value;
	        return setAttValue(this, attrName, isBoolean, attValue);
	    };
	}

	var DEFAULT_DATA = {
	    bound: true,
	    getterFactory: getterFactory,
	    setterFactory: setterFactory,
	    getAttValue: getAttValue,
	    setAttValue: setAttValue
	};

	/**
	 * The attribute builder.
	 * Its goal is to provide a way to define an attribute.
	 * @extends {PropertyBuilder}
	 */

	var AttributeBuilder = (function () {

	    /**
	     * @param {!string} attrName the name of the attribute
	     */

	    function AttributeBuilder(attrName) {
	        _classCallCheck(this, AttributeBuilder);

	        /**
	         * @ignore
	         */
	        this.data = (0, _object.assign)({
	            attrName: attrName,
	            propName: (0, _converter.toCamelCase)(attrName),
	            listeners: []
	        }, DEFAULT_DATA);
	    }

	    /**
	     * To handle the attribute/property value as a boolean:
	     * Attribute is present when true and missing when false.
	     * @returns {AttributeBuilder} the builder
	     */

	    _createClass(AttributeBuilder, [{
	        key: 'boolean',
	        value: function boolean() {
	            this.data.boolean = true;
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
	         * To skip the link between the attribute and its property
	         * @returns {AttributeBuilder} the builder
	         */

	    }, {
	        key: 'unbound',
	        value: function unbound() {
	            this.data.bound = false;
	            return this;
	        }

	        /**
	         * To override the property name.
	         * @param {!string} propName the property name
	         * @returns {AttributeBuilder} the builder
	         */

	    }, {
	        key: 'property',
	        value: function property(propName) {
	            this.data.propName = propName;
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
	         * To be notified when the attribute is updated.
	         * @param {function(el: HTMLElement, oldVal: string, newVal: string)} listener the listener function
	         * @returns {AttributeBuilder} the builder
	         */

	    }, {
	        key: 'listen',
	        value: function listen(listener) {
	            this.data.listeners.push(listener);
	            return this;
	        }

	        /**
	         * Logic of the builder.
	         * @param {!ElementBuilder.context.proto} proto the prototype
	         * @param {!ElementBuilder.on} on the method on
	         */

	    }, {
	        key: 'build',
	        value: function build(proto, on) {
	            var _this = this;

	            var defaultValue = (0, _object.result)(this.data, 'value'),
	                descriptor = {
	                enumerable: this.data.enumerable,
	                configurable: false,
	                get: this.data.getterFactory(this.data.attrName, this.data.boolean),
	                set: this.data.setterFactory(this.data.attrName, this.data.boolean)
	            };

	            if (this.data.bound) {
	                Object.defineProperty(proto, this.data.propName, descriptor);
	            }

	            on('after:createdCallback').invoke(function (el) {
	                if (_this.data.bound) {
	                    var attrValue = getAttValue(el, _this.data.attrName, _this.data.boolean);
	                    if (_this.data.boolean) {
	                        el[_this.data.propName] = !!defaultValue ? defaultValue : attrValue;
	                    } else if (!(0, _type.isNull)(attrValue) && !(0, _type.isUndefined)(attrValue)) {
	                        el[_this.data.propName] = attrValue;
	                    } else if (!(0, _type.isUndefined)(defaultValue)) {
	                        el[_this.data.propName] = defaultValue;
	                    }
	                }
	                if (_this.data.listeners.length > 0) {
	                    (function () {
	                        var oldValue = _this.data.boolean ? false : null;
	                        var setValue = el[_this.data.propName];
	                        if (oldValue !== setValue) {
	                            _this.data.listeners.forEach(function (listener) {
	                                return listener.call(el, el, oldValue, setValue);
	                            });
	                        }
	                    })();
	                }
	            });

	            on('before:attributeChangedCallback').invoke(function (el, attName, oldVal, newVal) {
	                // Synchronize the attribute value with its properties
	                if (attName === _this.data.attrName) {
	                    if (_this.data.bound) {
	                        var newValue = _this.data.boolean ? newVal === '' : newVal;
	                        if (el[_this.data.propName] !== newValue) {
	                            el[_this.data.propName] = newValue;
	                        }
	                    }
	                    if (_this.data.listeners.length > 0) {
	                        (function () {
	                            var oldValue = _this.data.boolean ? oldVal === '' : oldVal;
	                            var setValue = _this.data.boolean ? newVal === '' : newVal;
	                            if (oldValue !== setValue) {
	                                _this.data.listeners.forEach(function (listener) {
	                                    return listener.call(el, el, oldValue, setValue);
	                                });
	                            }
	                        })();
	                    }
	                }
	            });
	        }
	    }]);

	    return AttributeBuilder;
	})();

	/**
	 * Get a new attribute builder.
	 * @param {!string} attrName the name of the attribute
	 * @returns {AttributeBuilder} the attribute builder
	 */

	exports.AttributeBuilder = AttributeBuilder;
	function attribute(attrName) {
	    return new AttributeBuilder(attrName);
	}

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PropertyBuilder = undefined;
	exports.property = property;

	var _type = __webpack_require__(1);

	var _object = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DEFAULT_DATA = {
	    enumerable: true,
	    immutable: false,
	    descriptorValue: true
	};

	/**
	 * The property builder.
	 * Its goal is to provide a way to define a property.
	 * @extends {Builder}
	 */

	var PropertyBuilder = (function () {

	    /**
	     * @param {!string} propName the name of the property
	     */

	    function PropertyBuilder(propName) {
	        _classCallCheck(this, PropertyBuilder);

	        /**
	         * @ignore
	         */
	        this.data = (0, _object.assign)({ propName: propName }, DEFAULT_DATA);
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
	         * Logic of the builder.
	         * @param {!ElementBuilder.context.proto} proto the prototype
	         * @param {!ElementBuilder.on} on the method on
	         */

	    }, {
	        key: 'build',
	        value: function build(proto, on) {
	            var _this = this;

	            var data = this.data,
	                defaultValue = (0, _object.result)(this.data, 'value'),
	                descriptor = {
	                enumerable: this.data.enumerable
	            };

	            if (this.data.immutable) {
	                descriptor.configurable = false;
	                descriptor.writable = false;
	            } else if ((0, _type.isFunction)(this.data.getter) || (0, _type.isFunction)(this.data.setter)) {
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
	                if (!_this.data.descriptorValue && !(0, _type.isUndefined)(defaultValue)) {
	                    el[data.propName] = defaultValue;
	                }
	            });
	        }
	    }]);

	    return PropertyBuilder;
	})();

	/**
	 * Get a new property builder.
	 * @param {!string} propName the name of the property
	 * @returns {PropertyBuilder} the property builder
	 */

	exports.PropertyBuilder = PropertyBuilder;
	function property(propName) {
	    return new PropertyBuilder(propName);
	}

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.flatten = flatten;
	exports.invoke = invoke;

	var _type = __webpack_require__(1);

	/**
	 * Flattens a nested array.
	 * @param {!Array} array the array to flatten
	 * @returns {Array} the new flattened array
	 */
	function flatten(array) {
	    return array.reduce(function (a, b) {
	        return (0, _type.isArray)(b) ? a.concat(flatten(b)) : a.concat(b);
	    }, []);
	}

	/**
	 * For each objects, invoke the method called methName with the arguments args.
	 * @param {!Array<Object>} objects the objects
	 * @param {!string} methName the name of the method
	 * @param {...*} args the arguments to invoke the method with
	 * @return {Array} the array of results
	 */
	// obviously close to underscorejs and lodash ;)

	function invoke(objects, methName) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	    }

	    if ((0, _type.isArray)(objects)) {
	        return objects.filter(function (obj) {
	            return (0, _type.isFunction)(obj[methName]);
	        }).map(function (obj) {
	            return obj[methName].apply(obj, args);
	        });
	    }
	    return [];
	}

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DelegateBuilder = undefined;
	exports.delegate = delegate;

	var _type = __webpack_require__(1);

	var _converter = __webpack_require__(3);

	var _attribute = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The delegate builder.
	 * Its goal is to provide a way to delegate methods, properties and attributes.
	 * @extends {Builder}
	 */

	var DelegateBuilder = exports.DelegateBuilder = (function () {

	    /**
	     * @param {!PropertyBuilder|AttributeBuilder|MethodBuilder} fieldBuilder the field builder
	     */

	    function DelegateBuilder(fieldBuilder) {
	        _classCallCheck(this, DelegateBuilder);

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
	            if (!(0, _type.isUndefined)(propName)) {
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
	            if (!(0, _type.isUndefined)(attrName)) {
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
	            if (!(0, _type.isUndefined)(methName)) {
	                this.data.methName = methName;
	            } else {
	                this.data.methName = this.fieldBuilder.data.methName;
	            }
	            return this;
	        }

	        /**
	         * Logic of the builder.
	         * @param {!ElementBuilder.context.proto} proto the prototype
	         * @param {!ElementBuilder.on} on the method on
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
	                    return function () {
	                        var target = this.querySelector(data.selector);
	                        if (target) {
	                            return targetedAttrName ? (0, _attribute.getAttValue)(target, targetedAttrName, isBoolean) : target[targetedPropName];
	                        }
	                    };
	                };
	                fieldBuilderData.setterFactory = function (attrName, isBoolean) {
	                    return function (value) {
	                        var target = this.querySelector(data.selector),
	                            attrValue = value;
	                        if (target) {
	                            if (targetedAttrName) {
	                                (0, _attribute.setAttValue)(target, targetedAttrName, isBoolean, attrValue);
	                            } else {
	                                target[targetedPropName] = attrValue;
	                            }
	                            (0, _attribute.setAttValue)(this, attrName, isBoolean, attrValue);
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
	                    return (0, _type.isFunction)(fieldGetter) ? fieldGetter.call(el, el, targetValue) : targetValue;
	                };
	                fieldBuilderData.setter = function (el, value) {
	                    var target = el.querySelector(data.selector),
	                        targetValue = (0, _type.isFunction)(fieldSetter) ? fieldSetter.call(el, el, value) : value;
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
	                    if ((0, _type.isFunction)(target[targetedMethName])) {
	                        var args = (0, _converter.toArray)(arguments);
	                        args.shift();
	                        return target[targetedMethName].apply(target, args);
	                    }
	                };
	            }

	            this.fieldBuilder.build(proto, on);
	        }
	    }]);

	    return DelegateBuilder;
	})();

	/**
	 * Get a new delegate builder.
	 * @param {!PropertyBuilder|AttributeBuilder|MethodBuilder} builder a property, attribute or method builder
	 * @returns {DelegateBuilder} the delegate builder
	 */

	function delegate(builder) {
	    return new DelegateBuilder(builder);
	}

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ElementBuilder = undefined;
	exports.element = element;

	var _type = __webpack_require__(1);

	var _function = __webpack_require__(4);

	var _converter = __webpack_require__(3);

	var _array = __webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LIFECYCLE_CALLBACKS = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];

	var LIFECYCLE_EVENTS = (0, _array.flatten)(LIFECYCLE_CALLBACKS.map(function (name) {
	    return ['before:' + name, 'after:' + name];
	}));

	function applyLifecycle(context, name) {
	    var proto = context.proto,
	        original = proto[name],
	        beforeFns = context.events['before:' + name],
	        afterFns = context.events['after:' + name];

	    proto[name] = function () {
	        var _this = this;

	        var args = [this].concat((0, _converter.toArray)(arguments));

	        beforeFns.forEach(function (fn) {
	            return fn.apply(_this, args);
	        });

	        if ((0, _type.isFunction)(original)) {
	            original.apply(this, args);
	        }

	        afterFns.forEach(function (fn) {
	            return fn.apply(_this, args);
	        });
	    };
	}

	/**
	 * The custom element builder.
	 * Its goal is to provide a user friendly way to do it by some else (i.e. dedicated builders).
	 */

	var ElementBuilder = (function () {

	    /**
	     */

	    function ElementBuilder() {
	        _classCallCheck(this, ElementBuilder);

	        var proto = Object.create(HTMLElement.prototype),
	            builders = [],
	            events = LIFECYCLE_EVENTS.reduce(function (a, b) {
	            a[b] = [];
	            return a;
	        }, {
	            'before:builders': [],
	            'after:builders': [],
	            'before:registerElement': [],
	            'after:registerElement': []
	        });
	        /**
	         * @type {Object}
	         * @property {!Object} proto - the prototype
	         * @property {!string} extends - the name of a native element
	         * @desc the context of the builder
	         */
	        this.context = { proto: proto, builders: builders, events: events };
	    }

	    /**
	     * To extend a native element.
	     * @param {!string} value the name of the element
	     * @returns {ElementBuilder} the builder
	     */

	    _createClass(ElementBuilder, [{
	        key: 'extend',
	        value: function extend(value) {
	            this.context.extend = value;
	            return this;
	        }

	        /**
	         * To override the default prototype.
	         * @param {!Object} value the prototype
	         * @returns {ElementBuilder} the builder
	         */

	    }, {
	        key: 'proto',
	        value: function proto(value) {
	            this.context.proto = value;
	            return this;
	        }

	        /**
	         * To apply the given builders during the build process.
	         * @param {...Builder} builders the builders
	         * @returns {ElementBuilder} the builder
	         */

	    }, {
	        key: 'builders',
	        value: function builders() {
	            var _this2 = this;

	            for (var _len = arguments.length, _builders = Array(_len), _key = 0; _key < _len; _key++) {
	                _builders[_key] = arguments[_key];
	            }

	            _builders.forEach(function (builder) {
	                return _this2.context.builders.push(builder);
	            });
	            return this;
	        }

	        /**
	         * To register call back on events.
	         * @param {!string} event the event name
	         * @returns {Object} the on builder.
	         * @property {function(callback: function)} invoke - to register the callback
	         */

	    }, {
	        key: 'on',
	        value: function on(event) {
	            var _this3 = this;

	            var invoke = function invoke(cb) {
	                _this3.context.events[event].push(cb);
	                return _this3;
	            };
	            return { invoke: invoke };
	        }

	        /**
	         * To register the custom element.
	         * @param {!string} name the name of the cutsom element
	         * @returns {Element} the custom element Type
	         */

	    }, {
	        key: 'register',
	        value: function register(name) {
	            var _this4 = this;

	            this.context.events['before:builders'].forEach(function (fn) {
	                return fn(_this4.context);
	            });

	            (0, _array.invoke)(this.context.builders, 'build', this.context.proto, (0, _function.bind)(this.on, this));

	            this.context.events['after:builders'].forEach(function (fn) {
	                return fn(_this4.context);
	            });

	            LIFECYCLE_CALLBACKS.forEach((0, _function.partial)(applyLifecycle, this.context));

	            var options = { prototype: this.context.proto };

	            if ((0, _type.isString)(this.context.extend)) {
	                options.extends = this.context.extend;
	            }

	            this.context.events['before:registerElement'].forEach(function (fn) {
	                return fn(_this4.context);
	            });

	            var CustomElement = document.registerElement(name, options);

	            this.context.events['after:registerElement'].forEach(function (fn) {
	                return fn(CustomElement);
	            });

	            return CustomElement;
	        }
	    }]);

	    return ElementBuilder;
	})();

	/**
	 * Get a new custom element builder.
	 * @returns {ElementBuilder} the custom element builder
	 */

	exports.ElementBuilder = ElementBuilder;
	function element() {
	    return new ElementBuilder();
	}

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MethodBuilder = undefined;
	exports.method = method;

	var _type = __webpack_require__(1);

	var _function = __webpack_require__(4);

	var _converter = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The method builder.
	 * Its goal is to provide a way to define a method.
	 * @extends {Builder}
	 */

	var MethodBuilder = exports.MethodBuilder = (function () {

	    /**
	     * @param {!string} methName the name of the method
	     */

	    function MethodBuilder(methName) {
	        _classCallCheck(this, MethodBuilder);

	        /**
	         * @ignore
	         */
	        this.data = { methName: methName, wrappers: [] };
	    }

	    /**
	     * To do something when invoked.
	     * @param {!function(el: HTMLElement, args: ...*)} fn the method's logic
	     * @returns {MethodBuilder} the builder
	     */

	    _createClass(MethodBuilder, [{
	        key: 'invoke',
	        value: function invoke(fn) {
	            if ((0, _type.isFunction)(fn)) {
	                this.data.invoke = fn;
	            }
	            return this;
	        }

	        /**
	         * To do something around the invocation.
	         * @param {...function(el: HTMLElement, args: ...*)} wrappers a set of wrappers
	         * @returns {MethodBuilder} the builder
	         */

	    }, {
	        key: 'wrap',
	        value: function wrap() {
	            for (var _len = arguments.length, wrappers = Array(_len), _key = 0; _key < _len; _key++) {
	                wrappers[_key] = arguments[_key];
	            }

	            this.data.wrappers = this.data.wrappers.concat(wrappers);
	            return this;
	        }

	        /**
	         * Logic of the builder.
	         * @param {!ElementBuilder.context.proto} proto the prototype
	         * @param {!ElementBuilder.on} on the method on
	         */

	    }, {
	        key: 'build',
	        value: function build(proto, on) {
	            var data = this.data;

	            if (data.invoke) {
	                proto[data.methName] = function () {
	                    return data.invoke.apply(this, [this].concat((0, _converter.toArray)(arguments)));
	                };
	            }

	            if (data.wrappers.length) {
	                on('before:createdCallback').invoke(function (el) {
	                    if ((0, _type.isFunction)(el[data.methName])) {
	                        (function () {
	                            var lastIndex = data.wrappers.length - 1,
	                                original = el[data.methName],
	                                target = function target() {
	                                var args = (0, _converter.toArray)(arguments);
	                                args.shift();
	                                original.apply(el, args);
	                            };
	                            el[data.methName] = data.wrappers.reduce(function (next, current, index) {
	                                if (index === lastIndex) {
	                                    return (0, _function.bind)((0, _function.partial)(current, next, el), el);
	                                }
	                                return (0, _function.bind)((0, _function.partial)(current, next), el);
	                            }, target);
	                        })();
	                    }
	                });
	            }
	        }
	    }]);

	    return MethodBuilder;
	})();

	/**
	 * Get a new method builder.
	 * @param {!string} methName the name of the method
	 * @returns {MethodBuilder} the method builder
	 */

	function method(methName) {
	    return new MethodBuilder(methName);
	}

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.OnBuilder = undefined;
	exports.on = on;

	var _type = __webpack_require__(1);

	var _function = __webpack_require__(4);

	var _converter = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The on builder.
	 * Its goal is to provide a way to listen events coming from the custom element.
	 * @extends {Builder}
	 */

	var OnBuilder = exports.OnBuilder = (function () {

	    /**
	     * @param {!string} events a list of tuple 'event target' separated by comas, the target is optional
	     */

	    function OnBuilder(events) {
	        _classCallCheck(this, OnBuilder);

	        /**
	         * @ignore
	         */
	        this.data = { events: events, invoke: _function.noop };
	    }

	    /**
	     * To do something when events occurred.
	     * The target argument is by default the custom element.
	     * When the delegate feature is used, target is the matched element.
	     * @param {!function(el: HTMLElement, evt: DOMEvent, target: HTMLElement)} fn the event's logic
	     * @returns {OnBuilder} the builder
	     */

	    _createClass(OnBuilder, [{
	        key: 'invoke',
	        value: function invoke(fn) {
	            if ((0, _type.isFunction)(fn)) {
	                this.data.invoke = fn;
	            }
	            return this;
	        }

	        /**
	         * To attach the event on the capture phase insteadof of on the bubble phase.
	         * @returns {OnBuilder} the builder
	         */

	    }, {
	        key: 'capture',
	        value: function capture() {
	            this.data.capture = true;
	            return this;
	        }

	        /**
	         * To delegate the event.
	         * @param {!string} selector the selector
	         * @returns {OnBuilder} the builder
	         */

	    }, {
	        key: 'delegate',
	        value: function delegate(selector) {
	            this.data.selector = selector;
	            return this;
	        }

	        /**
	         * To prevent the default behavior.
	         * @returns {OnBuilder} the builder
	         */

	    }, {
	        key: 'prevent',
	        value: function prevent() {
	            this.data.preventDefault = true;
	            return this;
	        }

	        /**
	         * To stop the event propagation.
	         * @returns {OnBuilder} the builder
	         */

	    }, {
	        key: 'stop',
	        value: function stop() {
	            this.data.stopPropagation = true;
	            return this;
	        }

	        /**
	         * To prevent the default behavior and to stop the event propagation.
	         * @returns {OnBuilder} the builder
	         */

	    }, {
	        key: 'skip',
	        value: function skip() {
	            return this.prevent().stop();
	        }

	        /**
	         * Logic of the builder.
	         * @param {!ElementBuilder.context.proto} proto the prototype
	         * @param {!ElementBuilder.on} on the method on
	         */

	    }, {
	        key: 'build',
	        value: function build(proto, on) {
	            var events = this.data.events.split(',').map(function (event) {
	                return event.trim().split(' ');
	            }),
	                capture = !!this.data.capture,
	                invoke = this.data.invoke,
	                selector = this.data.selector,
	                stopPropagation = this.data.stopPropagation,
	                preventDefault = this.data.preventDefault;

	            on('before:createdCallback').invoke(function (el) {
	                el._cebOnHandlers = [];
	            });

	            on('before:attachedCallback').invoke(function (el) {
	                var listener = function listener(evt) {
	                    if (selector) {
	                        var target = (0, _converter.toArray)(el.querySelectorAll(selector)).filter(function (el) {
	                            return el === evt.target || el.contains(evt.target);
	                        })[0];
	                        if (target) {
	                            if (stopPropagation) {
	                                evt.stopPropagation();
	                            }
	                            if (preventDefault) {
	                                evt.preventDefault();
	                            }
	                            invoke(el, evt, target);
	                        }
	                    } else {
	                        if (stopPropagation) {
	                            evt.stopPropagation();
	                        }
	                        if (preventDefault) {
	                            evt.preventDefault();
	                        }
	                        invoke(el, evt, el);
	                    }
	                };

	                el._cebOnHandlers = events.map(function (_ref) {
	                    var _ref2 = _slicedToArray(_ref, 2);

	                    var name = _ref2[0];
	                    var target = _ref2[1];
	                    return [name, target ? el.querySelector(target) : el];
	                }).filter(function (_ref3) {
	                    var _ref4 = _slicedToArray(_ref3, 2);

	                    var name = _ref4[0];
	                    var target = _ref4[1];
	                    return !!target;
	                }).map(function (_ref5) {
	                    var _ref6 = _slicedToArray(_ref5, 2);

	                    var name = _ref6[0];
	                    var target = _ref6[1];

	                    target.addEventListener(name, listener, capture);
	                    return [target, name, listener, capture];
	                });

	                el._cebOnHandlers.forEach(function (_ref7) {
	                    var _ref8 = _slicedToArray(_ref7, 4);

	                    var target = _ref8[0];
	                    var name = _ref8[1];
	                    var listener = _ref8[2];
	                    var capture = _ref8[3];
	                    return target.addEventListener(name, listener, capture);
	                });
	            });

	            on('before:detachedCallback').invoke(function (el) {
	                el._cebOnHandlers.forEach(function (_ref9) {
	                    var _ref10 = _slicedToArray(_ref9, 4);

	                    var target = _ref10[0];
	                    var name = _ref10[1];
	                    var listener = _ref10[2];
	                    var capture = _ref10[3];
	                    return target.removeEventListener(name, listener, capture);
	                });
	            });
	        }
	    }]);

	    return OnBuilder;
	})();

	/**
	 * Get a new on builder.
	 * @param {!string} events a list of tuple 'event target' separated by comas, the target is optional
	 * @returns {OnBuilder} the on builder
	 */

	function on(events) {
	    return new OnBuilder(events);
	}

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TemplateBuilder = undefined;
	exports.applyTemplate = applyTemplate;
	exports.template = template;

	var _type = __webpack_require__(1);

	var _property = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The counter is used to generate unique DOM's id.
	 * @type {number}
	 */
	var counter = 0;

	/**
	 * The attribute name hosting the old light node id.
	 * @type {string}
	 */
	var OLD_CONTENT_ID_ATTR_NAME = 'ceb-old-content-id';

	/**
	 * Regex to detect the *ceb-content* attributes.
	 * @type {RegExp}
	 */
	var CONTENT_ATTR_REG_EX = /ceb\-content/im;

	/**
	 * Regex to detect the *content* element.
	 * @type {RegExp}
	 */
	var CONTENT_NODE_REG_EX = /<content><\/content>/im;

	/**
	 * @param {!string} html the HTML template
	 * @returns {boolean} true if the HTML template handle a light DOM node
	 */
	function hasContent(html) {
	    return html.search(CONTENT_ATTR_REG_EX) !== -1 || html.search(CONTENT_NODE_REG_EX) !== -1;
	}

	/**
	 * Update or replace an eventual content flag according to the given id.
	 * @param {!string} html the HTML template
	 * @param {!string} newCebContentId the new content node id
	 * @returns {string} the updated HTML template
	 */
	function replaceContent(html, newCebContentId) {
	    return html.replace('<content></content>', '<ceb-lightdom ceb-content></ceb-lightdom>').replace('ceb-content', newCebContentId);
	}

	/**
	 * Try to find a light DOM node
	 * @param {!HTMLElement} el the custom element
	 * @returns {HTMLElement} the light DOM node if found otherwise it's the given HTML Element
	 */
	function findContentNode(el) {
	    if (!el) {
	        return;
	    }
	    var oldCebContentId = el.getAttribute(OLD_CONTENT_ID_ATTR_NAME);
	    if (oldCebContentId) {
	        return findContentNode(el.querySelector('[' + oldCebContentId + ']')) || el;
	    }
	    return el;
	}

	/**
	 * Remove and return the children of the light DOM node.
	 * @param {!HTMLElement} el the custom element
	 * @returns {DocumentFragment} the light DOM fragment
	 */
	function cleanOldContentNode(el) {
	    var oldContentNode = el.lightDom,
	        lightFrag = document.createDocumentFragment();
	    while (oldContentNode.childNodes.length > 0) {
	        lightFrag.appendChild(oldContentNode.removeChild(oldContentNode.childNodes[0]));
	    }
	    return lightFrag;
	}

	/**
	 * Add the given DOM nodes list to the given element.
	 * @param {!HTMLElement} el the custom element
	 * @param {DocumentFragment} lightFrag the light DOM fragment
	 */
	function fillNewContentNode(el, lightFrag) {
	    el.lightDom.appendChild(lightFrag);
	}

	/**
	 * Apply the template given by the property cebTemplate.
	 * @param {!HTMLElement} el the custom element
	 * @param {!string} tpl the template
	 */
	function applyTemplate(el, tpl) {
	    var lightFrag = [],
	        handleContentNode = hasContent(tpl);

	    if (handleContentNode) {
	        var newCebContentId = 'ceb-content-' + counter++;
	        lightFrag = cleanOldContentNode(el);

	        tpl = replaceContent(tpl, newCebContentId);

	        el.setAttribute(OLD_CONTENT_ID_ATTR_NAME, newCebContentId);
	    }

	    el.innerHTML = tpl;

	    if (handleContentNode) {
	        fillNewContentNode(el, lightFrag);
	    }
	}
	/**
	 * The template builder.
	 * Its goal is to provide a way to fill the content of a custom element.
	 * @extends {Builder}
	 */

	var TemplateBuilder = exports.TemplateBuilder = (function () {

	    /**
	     * @param {!string|function(el: HTMLElement)} tpl the template as a string or a function
	     */

	    function TemplateBuilder(tpl) {
	        _classCallCheck(this, TemplateBuilder);

	        /**
	         * @ignore
	         */
	        this.data = { tpl: tpl };
	    }

	    /**
	     * Logic of the builder.
	     * @param {!ElementBuilder.context.proto} proto the prototype
	     * @param {!ElementBuilder.on} on the method on
	     */

	    _createClass(TemplateBuilder, [{
	        key: 'build',
	        value: function build(proto, on) {
	            var data = this.data;

	            new _property.PropertyBuilder('lightDom').getter(function (el) {
	                return findContentNode(el);
	            }).build(proto, on);

	            on('before:createdCallback').invoke(function (el) {
	                applyTemplate(el, (0, _type.isFunction)(data.tpl) ? data.tpl(el) : data.tpl);
	            });
	        }
	    }]);

	    return TemplateBuilder;
	})();

	/**
	 * Get a new template builder.
	 * @param {!string|Function} tpl the string or function template
	 * @returns {TemplateBuilder} the template builder
	 */

	function template(tpl) {
	    return new TemplateBuilder(tpl);
	}

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dispatchCustomEvent = dispatchCustomEvent;
	exports.dispatchMouseEvent = dispatchMouseEvent;

	var _object = __webpack_require__(5);

	var CUSTOM_EVENT_ARG_NAMES = ['bubbles', 'cancelable', 'detail'];

	var MOUSE_EVENT_ARG_NAMES = ['bubbles', 'cancelable', 'view', 'detail', 'screenX', 'screenY', 'clientX', 'clientY', 'ctrlKey', 'altKey', 'shiftKey', 'metaKey', 'button', 'relatedTarget'];

	var DEFAULT_CUSTOM_EVENT_OPTIONS = {
	    bubbles: true,
	    cancelable: true,
	    detail: null
	};

	var DEFAULT_MOUSE_EVENT_OPTIONS = {
	    bubbles: true,
	    cancelable: true,
	    view: window,
	    detail: 0,
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    ctrlKey: false,
	    altKey: false,
	    shiftKey: false,
	    metaKey: false,
	    button: 0,
	    relatedTarget: null
	};

	/**
	 * Create and dispatch a custom event.
	 * @param {!HTMLElement} el the element where the event will be dispatched
	 * @param {!string} eventType the event type
	 * @param {Object} [options] the options
	 * @returns {boolean} false if at least one of the event handlers which handled this event called Event.preventDefault(). Otherwise it returns true.
	 */
	function dispatchCustomEvent(el, eventType, options) {
	    var event = undefined,
	        args = (0, _object.assign)({}, DEFAULT_CUSTOM_EVENT_OPTIONS, options);
	    if (typeof CustomEvent === 'function') {
	        event = new CustomEvent(eventType, args);
	    } else {
	        event = document.createEvent('CustomEvent');
	        event.initCustomEvent.apply(event, [eventType].concat(CUSTOM_EVENT_ARG_NAMES.map(function (name) {
	            return args[name];
	        })));
	    }
	    return el.dispatchEvent(event);
	}

	/**
	 * Create and dispatch a mouse event (click, mouseover, etc.).
	 * @param {!HTMLElement} el the element where the event will be dispatched
	 * @param {!string} eventType the event type
	 * @param {Object} [options] the options
	 * @returns {boolean} false if at least one of the event handlers which handled this event called Event.preventDefault(). Otherwise it returns true.
	 */
	function dispatchMouseEvent(el, eventType, options) {
	    var event = undefined,
	        args = (0, _object.assign)({}, DEFAULT_MOUSE_EVENT_OPTIONS, options);
	    if (typeof MouseEvent === 'function') {
	        event = new MouseEvent(eventType, args);
	    } else {
	        event = document.createEvent('MouseEvents');
	        event.initMouseEvent.apply(event, [eventType].concat(MOUSE_EVENT_ARG_NAMES.map(function (name) {
	            return args[name];
	        })));
	    }
	    return el.dispatchEvent(event);
	}

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.JquerifyBuilder = undefined;
	exports.jquerify = jquerify;

	var _jquery = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var $ = (0, _jquery.noConflict)();

	var JquerifyBuilder = exports.JquerifyBuilder = (function () {
	    function JquerifyBuilder() {
	        _classCallCheck(this, JquerifyBuilder);
	    }

	    _createClass(JquerifyBuilder, [{
	        key: 'build',
	        value: function build(proto, on) {
	            on('before:createdCallback').invoke(function (el) {
	                el.$ = $;
	                el.$el = $(el);
	            });
	        }
	    }]);

	    return JquerifyBuilder;
	})();

	function jquerify() {
	    return new JquerifyBuilder();
	}

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ceb = __webpack_require__(7);

	var _jquerify = __webpack_require__(123);

	exports.default = (0, _ceb.element)().proto(Object.create(HTMLButtonElement.prototype)).extend('button').builders((0, _jquerify.jquerify)(), (0, _ceb.attribute)('meaning').value('default').listen(function (el, oldValue, newValue) {
	    return el.$el.removeClass('btn-' + oldValue).addClass('btn-' + newValue);
	}), (0, _ceb.method)('createdCallback').invoke(function (el) {
	    el.$el.addClass('btn');
	})).register('ceb-button');

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ceb = __webpack_require__(7);

	var _jquerify = __webpack_require__(123);

	exports.default = (0, _ceb.element)().builders((0, _jquerify.jquerify)(), (0, _ceb.template)('<content></content>'), (0, _ceb.property)('messages').value({
	    required: 'The field is required.',
	    maxlength: function maxlength(data) {
	        return 'The value must be lower than ' + data.maxlength + ' characters.';
	    },
	    minlength: function minlength(data) {
	        return 'The value must be higher than ' + data.minlength + ' characters.';
	    }
	}), (0, _ceb.method)('createdCallback').invoke(function (el) {
	    el.$el.addClass('form-group').css('display', 'block');
	}), (0, _ceb.on)('valid').invoke(function (el) {
	    el.$el.removeClass('has-error').find('.help-block.errors').remove();
	}), (0, _ceb.on)('invalid').invoke(function (el, evt) {
	    var errors = evt.detail.errors;
	    var messages = Object.keys(errors).map(function (key) {
	        var message = el.messages[key];
	        if (typeof message === 'function') {
	            message = message(errors[key]);
	        }
	        return message;
	    }).join(', ');
	    el.$el.find('.help-block.errors').remove();
	    el.$el.addClass('has-error').append('<p class="help-block errors">' + messages + '</p>');
	})).register('ceb-field');

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addRule = addRule;

	var _ceb = __webpack_require__(7);

	var _jquerify = __webpack_require__(123);

	var CHECKABLE_INPUT_TYPES = ['checkbox', 'radio'];

	var SELECTABLE_FORM_CONTROLS = ['select'];

	var BUILTIN_RULES = [{
	    name: 'required',
	    filter: function filter(el) {
	        return el.hasAttribute('required');
	    },
	    apply: function apply(el) {
	        if (CHECKABLE_INPUT_TYPES.indexOf((el.type || '').toLowerCase()) > -1) {
	            return !el.checked;
	        }
	        if (SELECTABLE_FORM_CONTROLS.indexOf((el.tagname || '').toLowerCase()) > -1) {
	            return el.selectedOptions.length < 1;
	        }
	        if ('value' in el) {
	            return el.value.trim().length < 1;
	        }
	        return false;
	    }
	}, {
	    name: 'minlength',
	    filter: function filter(el) {
	        return el.hasAttribute('minlength');
	    },
	    apply: function apply(el) {
	        var minlength = parseInt(el.getAttribute('minlength')) || 0;
	        if ('value' in el && el.value) {
	            return el.value.trim().length < minlength ? { minlength: minlength } : false;
	        }
	        return false;
	    }
	}, {
	    name: 'maxlength',
	    filter: function filter(el) {
	        return el.hasAttribute('maxlength');
	    },
	    apply: function apply(el) {
	        var maxlength = parseInt(el.getAttribute('maxlength')) || 0;
	        if ('value' in el && el.value) {
	            return el.value.trim().length > maxlength ? { maxlength: maxlength } : false;
	        }
	        return false;
	    }
	}];

	var EXTERNAL_RULES = [];

	function addRule(name) {
	    var filter = arguments.length <= 1 || arguments[1] === undefined ? function () {
	        return false;
	    } : arguments[1];
	    var apply = arguments.length <= 2 || arguments[2] === undefined ? function () {
	        return false;
	    } : arguments[2];

	    EXTERNAL_RULES.push({ name: name, filter: filter, apply: apply });
	}

	function parseStringEventList(string) {
	    return (string || '').split(',').map(function (name) {
	        return name.toLowerCase();
	    }).filter(function (name) {
	        return name;
	    });
	}

	exports.default = (0, _ceb.element)().proto(Object.create(HTMLFormElement.prototype)).extend('form').builders((0, _jquerify.jquerify)(), (0, _ceb.attribute)('prevent-submit').boolean(), (0, _ceb.property)('validateOn').getter(function (el) {
	    return parseStringEventList(el.getAttribute('validate-on'));
	}), (0, _ceb.property)('validateControlsOn').getter(function (el) {
	    return parseStringEventList(el.getAttribute('validate-controls-on'));
	}), (0, _ceb.property)('rules').getter(function (el) {
	    return BUILTIN_RULES.concat(EXTERNAL_RULES).concat(el._rules);
	}), (0, _ceb.property)('elementsAsArray').getter(function (el) {
	    return (0, _ceb.toArray)(el.elements);
	}), (0, _ceb.method)('createdCallback').invoke(function (el) {
	    el.setAttribute('novalidate', '');
	    el._rules = [];
	}), (0, _ceb.method)('checkFormControlValidity').invoke(function (el, control) {
	    var errors = el.rules.filter(function (rule) {
	        return rule.filter(control);
	    }).reduce(function (result, rule) {
	        result[rule.name] = rule.apply(control);
	        return result;
	    }, {});

	    var controlIsInvalid = Object.keys(errors).reduce(function (invalid, key) {
	        return invalid ? invalid : errors[key];
	    }, false);

	    return {
	        element: control,
	        valid: !controlIsInvalid,
	        invalid: controlIsInvalid,
	        errors: errors
	    };
	}), (0, _ceb.method)('checkValidity').invoke(function (el) {
	    var controls = el.elementsAsArray;

	    var controlStates = controls.map(el.checkFormControlValidity, el);

	    var formIsValid = controlStates.reduce(function (valid, state) {
	        return valid && state.valid;
	    }, true);

	    var formState = {
	        valid: formIsValid,
	        invalid: !formIsValid,
	        controls: controlStates
	    };

	    (0, _ceb.dispatchCustomEvent)(el, formIsValid ? 'valid' : 'invalid', { detail: formState });
	    controlStates.forEach(function (state) {
	        return (0, _ceb.dispatchCustomEvent)(state.element, state.valid ? 'valid' : 'invalid', { detail: state });
	    });

	    return formState;
	}), (0, _ceb.method)('reportValidity').invoke(function (el) {
	    var formState = el.checkValidity();
	    if (formState.invalid) {
	        var firstInvalidControl = el.elementsAsArray.filter(function (state) {
	            return state.invalid;
	        })[0];
	        if (firstInvalidControl) {
	            firstInvalidControl.element.focus();
	        }
	    }
	}), (0, _ceb.method)('addRule').invoke(function (el, name) {
	    var filter = arguments.length <= 2 || arguments[2] === undefined ? function () {
	        return false;
	    } : arguments[2];
	    var apply = arguments.length <= 3 || arguments[3] === undefined ? function () {
	        return false;
	    } : arguments[3];

	    el.rules.push({ name: name, filter: filter, apply: apply });
	}), (0, _ceb.on)('reset').invoke(function (el) {
	    var controlStates = el.elementsAsArray.map(function (control) {
	        return {
	            element: control,
	            valid: true,
	            invalid: false,
	            errors: {}
	        };
	    });

	    var formState = {
	        valid: true,
	        invalid: false,
	        controls: controlStates
	    };

	    (0, _ceb.dispatchCustomEvent)(el, 'valid', { detail: formState });
	    controlStates.forEach(function (state) {
	        return (0, _ceb.dispatchCustomEvent)(state.element, 'valid', { detail: state });
	    });
	}), (0, _ceb.on)('submit').invoke(function (el, evt) {
	    if (el.preventSubmit) {
	        evt.preventDefault();
	    }
	    if (el.validateOn.indexOf('submit') > -1) {
	        el.reportValidity();
	    }
	}), (0, _ceb.on)('change, input').invoke(function (el, evt) {
	    var formControl = evt.target;
	    var noValidateOn = parseStringEventList(formControl.getAttribute('no-validate-on'));
	    var validateOn = parseStringEventList(formControl.getAttribute('validate-on')).concat(el.validateControlsOn).filter(function (name) {
	        return noValidateOn.indexOf(name) < 0;
	    });

	    if (validateOn.indexOf(evt.type) > -1) {
	        var state = el.checkFormControlValidity(formControl);
	        (0, _ceb.dispatchCustomEvent)(state.element, state.valid ? 'valid' : 'invalid', { detail: state });
	    }
	})).register('ceb-form');

/***/ },

/***/ 309:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n\n    <p>\n        The following form is based on an extion of the native HTMLFormElement.\n        This extension taking the validation of the underlying form elements, even without HTML5.\n    </p>\n\n    <hr>\n\n    <form name=\"order\"\n          is=\"ceb-form\"\n          prevent-submit\n          validate-on=\"submit\"\n          validate-controls-on=\"change,input\">\n\n        <fieldset>\n            <legend>input[type=text]</legend>\n            <div class=\"row\">\n                <ceb-field class=\"col-sm-4\">\n                    <label for=\"inputTextRequired\" class=\"control-label\">\n                        required\n                    </label>\n                    <input id=\"inputTextRequired\"\n                           type=\"text\"\n                           name=\"input[text]\"\n                           class=\"form-control\"\n                           required\n                           title=\"The field is required.\">\n                </ceb-field>\n                <ceb-field class=\"col-sm-4\">\n                    <label for=\"inputTextMinLength\" class=\"control-label\">\n                        minlength\n                        <small>is 5</small>\n                    </label>\n                    <input id=\"inputTextMinLength\"\n                           type=\"text\"\n                           name=\"input[text]\"\n                           class=\"form-control\"\n                           minlength=\"5\">\n                </ceb-field>\n                <ceb-field class=\"col-sm-4\">\n                    <label for=\"inputTextMaxLength\" class=\"control-label\">\n                        maxlength\n                        <small>is 5</small>\n                    </label>\n                    <input id=\"inputTextMaxLength\"\n                           type=\"text\"\n                           name=\"input[text]\"\n                           class=\"form-control\"\n                           value=\"more than five characters\"\n                           maxlength=\"5\">\n                </ceb-field>\n            </div>\n        </fieldset>\n\n        <p>\n            <button type=\"submit\" is=\"ceb-button\" meaning=\"primary\">\n                <i class=\"glyphicon glyphicon-check\"></i>\n                Save\n            </button>\n            <button type=\"reset\" is=\"ceb-button\" meaning=\"warning\">\n                <i class=\"glyphicon glyphicon-erase\"></i>\n                Reset\n            </button>\n        </p>\n    </form>\n\n</div>\n"

/***/ }

});