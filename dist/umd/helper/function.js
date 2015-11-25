'use strict';

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './converter.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./converter.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.converter);
        global._function = mod.exports;
    }
})(this, function (exports, _converter) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.partial = partial;
    exports.bind = bind;
    exports.noop = noop;

    function partial(fn) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        return function () {
            return fn.apply(this, args.concat((0, _converter.toArray)(arguments)));
        };
    }

    function bind(fn, ctx) {
        return function () {
            return fn.apply(ctx, (0, _converter.toArray)(arguments));
        };
    }

    function noop() {
        return function () {};
    }
});