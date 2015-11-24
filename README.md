# ceb: custom-element-builder

[![Circle CI](https://circleci.com/gh/tmorin/ceb.svg?style=svg)](https://circleci.com/gh/tmorin/ceb)
[![Dependency Status](https://david-dm.org/tmorin/ceb.svg)](https://david-dm.org/tmorin/ceb)
[![devDependency Status](https://david-dm.org/tmorin/ceb/dev-status.svg)](https://david-dm.org/tmorin/ceb#info=devDependencies)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/customelementbuilder.svg)](https://saucelabs.com/u/customelementbuilder)

ceb is just a set of builders, natively scalable and designed for FRP

- [Home page](http://tmorin.github.io/ceb)

## Dependencies

Even if _custom-element-builder_ is transpilled from es6 to es5 with babel, the babel polyfill is not necessary. 

About, not evergreen browsers (those not implementing `document.registerElement()`) the following polyfills can be used:
 - [webcomponents.js](https://github.com/webcomponents/webcomponentsjs)
 - [document-register-element](https://github.com/WebReflection/document-register-element)

## Install

From ES6;
```javascript
import {ceb} from 'ceb/src/ceb'
```

From ES5:
```javascript
var ceb = require('ceb');
```

From AMD:
```javascript
require(['pathOfDistDir/amd/ceb'], function (ceb) {
    // ...
});
```

From SystemJs:
```javascript
System.import('pathOfDistDir/systemjs/ceb.js').then(function (ceb) {
    // ...
});
```

From UMD (Global):

```html
<script src="pathOfDistDir/umd/utils.js"></script>
<script src="pathOfDistDir/umd/builder/Builder.js"></script>
<script src="pathOfDistDir/umd/builder/PropertyBuilder.js"></script>
<script src="pathOfDistDir/umd/builder/AttributeBuilder.js"></script>
<script src="pathOfDistDir/umd/builder/DelegateBuilder.js"></script>
<script src="pathOfDistDir/umd/builder/MethodBuilder.js"></script>
<script src="pathOfDistDir/umd/builder/OnBuilder.js"></script>
<script src="pathOfDistDir/umd/builder/TemplateBuilder.js"></script>
<script src="pathOfDistDir/umd/builder/CustomElementBuilder.js"></script>
<script src="pathOfDistDir/umd/ceb.js"></script>
<!-- or -->
<script src="pathOfDistDir/standalone/ceb.js"></script>
<!-- or -->
<script src="pathOfDistDir/standalone/ceb.min.js"></script>
```

```javascript
(function (global) {
    var ceb = global.ceb;
}(this));
```

## npm tasks

Clean working directory
```shell
npm run clean
```

Lint JavaScript source files
```shell
npm run lint
```

Build distributions files
```shell
npm run build
```

Launch karma against PhantomJS
```shell
npm run test:local
```

Launch karma against PhantomJS with hot reload
```shell
npm run test:local:watch
```

Launch karma against saucelab browsers
```shell
npm run test
```

Zip sources files
```shell
npm run zip
```

Start webpack dev server with hot reload
```shell
npm start
```

Release (version + tag + npm) the project
```shell
npm release:[pre|patch|minor|major]
```
