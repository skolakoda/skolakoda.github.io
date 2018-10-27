---
title: Uvod u Javascript događaje
layout: lekcija-js
permalink: /javascript-dogadjaji
---

**Sa Javascriptom imamo mogućnost da učinimo stranice interaktivnim, odnosno da pozivamo određene funkcije kao odgovor na događaje (*events*), koji mogu biti akcije korisnika (npr. klik, mrdanje, kucanje, dodir) ili učitavanje resursa na stranicu (npr. slika ili podataka).**

Program sam po sebi neće pratiti sve događaje, već samo one za koje dodamo slušač događa (*event listener*). Na događaje možemo reagovati nekom povratnom funkcijom (*callback funkcija*).

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
