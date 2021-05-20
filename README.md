# telegram-escape

Lightweight Javascript utility zero-dependecy library for Telegram Bots developers for escaping user input with [formatting options](https://core.telegram.org/bots/api#formatting-options)

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

await bot.sendMessage(chatId, HTML`<b>${"2 < 3"}</b>`, {
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

## Functions

<dl>
<dt><a href="#HTML">HTML`template_${string}`</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#md">md`template_${string}`</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#mdv1">mdv1`template_${string}`</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#escapeHTML">escapeHTML(text)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#escapeMarkdown">escapeMarkdown(text)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#escapeMarkdownV1">escapeMarkdownV1(text)</a> ⇒ <code>String</code></dt>
<dd></dd>
</dl>
<dl>
</dl>

<a name="HTML"></a>

## HTML : [<code>TagEscapeFunction</code>](#TagEscapeFunction)

**Kind**: global function  
<a name="md"></a>

## md : [<code>TagEscapeFunction</code>](#TagEscapeFunction)

**Kind**: global function  
<a name="mdv1"></a>

## mdv1 : [<code>TagEscapeFunction</code>](#TagEscapeFunction)

**Kind**: global function  
<a name="escapeHTML"></a>

## escapeHTML(text) ⇒ <code>String</code>

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| text  | <code>String</code> |

<a name="escapeMarkdown"></a>

## escapeMarkdown(text) ⇒ <code>String</code>

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| text  | <code>String</code> |

<a name="escapeMarkdownV1"></a>

## escapeMarkdownV1(text) ⇒ <code>String</code>

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| text  | <code>String</code> |
