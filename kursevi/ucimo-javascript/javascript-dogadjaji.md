---
title: Uvod u Javascript događaje
layout: lekcija-js
permalink: /javascript-dogadjaji
---

**Događaji (*events*) u Javascriptu su najčešće izazvani nekom akcijom korisnika (npr. klikom, mrdanjem, kucanjem, dodirom) ili učitavanjem resursa na stranicu (npr. slika ili podataka).**

Program sam po sebi neće pratiti sve događaje, već samo one za koje dodamo slušač događa (*event listener*).

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
