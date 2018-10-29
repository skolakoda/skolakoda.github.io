---
title: Uvod u Javascript događaje
layout: lekcija-js
permalink: /javascript-dogadjaji
---

**Sa Javascriptom imamo mogućnost da učinimo stranice interaktivnim, odnosno da reagujemo na događaje (*events*), koji predstavljaju akcije korisnika (npr. klik, mrdanje, kucanje, dodir) ili učitavanje resursa na stranicu (npr. slika ili podataka).**

Program sam po sebi neće osluškivati sve događaje, već samo one za koje dodamo slušač događa (*event listener*). Na događaje reagujemo povratnom (*callback*) funkcijom.

## Događaji miša 

Događaji miša su najčešći događaji na desktop računarima, jer se većina interakcije odvija preko miša. Neki od glavnih događaja miša su:

- `click`
- `dblclick` (dvoklik)
- `mousemove` (pomeranje miša)
- `mouseenter` (ulazak u element)
- `mouseleave` (napuštanje elementa)
- `mousedown` (stisak klika)
- `mouseup` (puštanje klika)

Na primer, sledeća linija ispisuje trenutne koordinate miša prilikom svakog pomeranja:

```js
document.onmousemove = e => console.log("x: " + e.clientX, "y: " + e.clientY)
```

Možete je isprobati u konzoli.

## Događaji tastature 

Dva glavna događaja tastature su pritiskanje i puštanje tipki:

- `keydown`
- `keyup`

Na primer, sledeća linija ispisuje brojčanu vrednost svakog pritisnutog znaka na tastaturi:

```js
document.onkeydown = e => console.log(e.keyCode)
```

Događaji tastature se često koriste za špijuniranje korisnika. Neke aplikacije za dopisivanje registruju svaku pritisnutu dirku i skladište te podatke, bilo da ste zaista poslali poruku ili ne. 

## Događaji formulara

- `focus` (ulazak u input polje)
- `blur` (napuštanje input polja)
- `change` (promena vrednosti polja)
- `submit` (slanje formulara)

## Globalni događaji 

- `DOMContentLoaded` (izgradnja DOM-a)
- `load` (učitavanje)
- `resize` (menjanje veličine)

{:.uokvireno.ideja}
Razlika između `DOMContentLoaded` i `window.onload` je veoma bitna. `DOMContentLoaded` znači da je HTML struktura učitana i pripadajući DOM objekat izgrađen, ali prikačeni resursi (slike, fontovi, skripte i ostalo) još nisu učitani, a `window.onload` reaguje kada su svi prikačeni resursi učitani.
