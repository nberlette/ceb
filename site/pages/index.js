// # Custom Elements Builder

// **ceb** is a builder to help the development of Custom Elements.
//
// - The project is hosted on [Github](https://github.com/tmorin/custom-element-builder)
// - Read the [documentation](doc.1.usage.html) for more details
// - Or the [commented source code](ceb.html)
// - Every use cases are tested and validated from this [test suite](./testsuite)
// - The source code is continuously built on [Travis](https://travis-ci.org/tmorin/custom-element-builder)
// - The test suite is automatically executed using [Sauce Labs](https://saucelabs.com/u/customelementbuilder)
// - The code coverage report is pushed to [coveralls](https://coveralls.io/r/tmorin/custom-element-builder)
// ***
// ## Compatibilities
// [![Sauce Test Status](https://saucelabs.com/browser-matrix/customelementbuilder.svg)](https://saucelabs.com/u/customelementbuilder)
//
// **ceb** should and will work without dependencies on evergreen browsers.
// To execute it with none evergreen browsers, you should need of:
// - Obviously [Custom Elements](http://www.w3.org/TR/custom-elements/) polyfill
//  - webcomponents-lite.js from [webcomponents.org](http://webcomponents.org/polyfills/)
//  - or [document-register-element](https://github.com/WebReflection/document-register-element)
// - ES5 and some features from ES6 [es6-shim](https://github.com/paulmillr/es6-shim)
// ***
// ## Downloads
// Distributed files can be found [there](https://github.com/tmorin/custom-element-builder/tree/master/dist)
// - [ceb.js](https://raw.githubusercontent.com/tmorin/custom-element-builder/master/dist/ceb.js) *commented*
// - [ceb.min.js](https://raw.githubusercontent.com/tmorin/custom-element-builder/master/dist/ceb.min.js) *minified*
// - [ceb.legacy.min.js](https://raw.githubusercontent.com/tmorin/custom-element-builder/master/dist/ceb.legacy.min.js) *shims, minified*
// - [ceb-feature-template.js](https://raw.githubusercontent.com/tmorin/custom-element-builder/master/dist/ceb-feature-template.js) *commented*
// - [ceb-feature-template.min.js](https://raw.githubusercontent.com/tmorin/custom-element-builder/master/dist/ceb-feature-template.min.js) *minified*
// ***
// ## Installation
// **ceb** is not yet released!
// - npm: `npm install ceb --save`
// - bower: `npm bower ceb --save`
// - component `component install tmorin/custom-element-builder`
// - amd: `require(['ceb', ...`

var template = '';
template += '<em ceb-ref="fromNode" class="from"><em> say hello to <em class="to"><em>!';
template += '<br>';
template += '<button>or to the world</button>';

var builder = ceb()
    .name('saying-hello')
    .feature(cebTemplateFeature, {
        template: template
    })
    .properties({
        from: {
            attribute: true
        },
        to: {
            attribute: true,
            delegate: {
                target: 'em.to'
            }
        }
    })
    .intercept('from', function (next, el, value) {
        return next(value.toUpperCase());
    })
    .intercept('to', function (next, el, value) {
        return next(value.toUpperCase());
    })
    .methods({
        sayHello: function (el, to) {
            return el.from + ' say hello to ' + (to || el.to) + '!';
        }
    })
    .wrap('sayHello', function (next, el, to) {
        var newArguments = [next, el, (to || '').toUpperCase()];
        var result = next(newArguments);
        console.log(result);
        return result;
    })
    .listen('click button', function (el) {
        el.sayHello('world');
    })
    .register();

var sayingHello = document.createElement('saying-hello');
element.setAttribute('from', 'I');
element.to = 'you';
document.body.appendChild(sayingHello);

element.sayHelloTo('world');