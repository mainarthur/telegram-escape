# telegram-escape

Lightwieght Javascript utility zero-dependecy library for Telegram Bots developers for escaping user input

Installation

```bash
npm i telegram-escape
```

Usage examples

```js
const { HTML } = require("telegram-escape");

const firstName = "<My Cool Name>";

await bot.sendMessage(chatId, HTML`<b>${firstName}</b>`, {
  parse_mode: "HTML",
});
```

```js
const { md } = require("telegram-escape");

const firstName = "*My Cool Name*";

await bot.sendMessage(chatId, md`_${firstName}_`, {
  parse_mode: "MarkdownV2",
});
```
