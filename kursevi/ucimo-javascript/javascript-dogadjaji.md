---
title: Uvod u Javaskript događaje
layout: lekcija-js
permalink: /javascript-dogadjaji
---

## Događaji miša 

- `click`
- `dblclick`
- `mousemove`
- `mouseenter`
- `mouseleave`
- `mousedown`
- `mouseup`

## Događaji tastature 

- `keydown`
- `keyup`

Događaji tastature se često koriste za špijuniranje korisnika. Neke aplikacije za dopisivanje registruju svaku pritisnutu dirku i skladište te podatke, bilo da ste zaista poslali poruku ili ne. 

### Primer

Pokreni program, otvori konzolu i kucaj bilo šta. U konzoli će biti ispisane brojčane vrednosti svakog znaka.

{:.ulaz}
```js
document.onkeydown = e => console.log(e.keyCode)
```

## Događaji formulara

- `focus`
- `blur`
- `change`
- `submit`

## Globalni događaji 

- `DOMContentLoaded`
- `load`
- `resize`

### Razlika između `DOMContentLoaded` i `window.onload`
