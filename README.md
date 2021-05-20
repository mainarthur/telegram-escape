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
}); // bold "<My Cool Name>"

await bot.sendMessage(chatId, HTML`<b>${`2 < 3`}</b>`, {
  parse_mode: "HTML",
}); // bold "2 < 3"
```

```js
const { md } = require("telegram-escape");

const firstName = "*My Cool Name*";

await bot.sendMessage(chatId, md`_${firstName}_`, {
  parse_mode: "MarkdownV2",
}); // italic "*My Cool Name*"
```