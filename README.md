# escape-html

Escape html special characters.

## Install

```
npm install escape-html --save
```

## Usage

```js
import escapeHTML from 'escape-html';
// or `var escapeHTML = require('escape-html').default;`

escapeHTML(` & < > " `);
// => ` &amp; &lt; &gt; &quot; `
```
