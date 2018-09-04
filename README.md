# escape-html

Escape html special characters.

## Install

```
npm install escape-html --save
```

## Usage

```js
import { escapeHTML, unescapeHTML } from 'escape-html';

escapeHTML(' & < > " ');
// => ' &amp; &lt; &gt; &quot; '

unescapeHTML(' &amp; &lt; &gt; &quot; ');
// => ' & < > " '
```
