# As a global variable

Using the [UMD] file from `dist/umd/`:

```html
<!-- not minified -->
<script src="dist/umd/ceb.js"></script>
```

```html
<!-- minified -->
<script src="dist/umd/ceb.min.js"></script>
```

`<ceb/>` is available from `window.ceb`:

```javascript
(function (global) {
    var ceb = global.ceb;
    ceb.element(
        ceb.property('foo'),
        ceb.attribute('bar')
    ).register('ceb-example');
}(this));
```

[UMD]: https://github.com/umdjs/umd
