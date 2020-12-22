# CSSExtract
[js] Simple CSS selectors/rules extractor.

### Install
```
npm install kc-cssextract
```

### Use
```js
var obj = CSSExtract(`
    body { color: red; }
    #test > div { border: 0; }
`);
console.log(obj);
```
