---
title: "Propagacija događaja naviše (<i>bubbling</i>)"
layout: lekcija-napredni-js-frontend
permalink: /javascript-bubbling
---

**Propagacija događaja naviše (dizanje ili *bubbling*), je druga faza propagacije događaja kroz stranicu, tokom koje se događaj propagira od ciljanog elementa ka roditeljima.**

Ako [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) metodi prosledimo `false`, slušač događaja će biti pozvan u fazi dizanja. U tom slučaju, klik na dugme će prvo okinuti povratnu funkciju na samom dugmetu, pa tek onda na dokumentu.

## Primer

U narednom primeru imamo slušače događaja na dugmetu, telu dokumenta, dokumentu i prozoru pregledača. Redosled dodavanja slušača nije bitan. 

Klikni dugme i vidi kojim se redom povratne funkcije pozivaju:


{:.html-ulaz}
```html
<button id="dugme">Klikni me!</button>

<script>

window.addEventListener('click', function() {
  alert('Klik na prozor')
}, false)

document.addEventListener('click', function() {
  alert('Klik na dokument')
}, false)

document.body.addEventListener('click', function() {
  alert('Klik na telo dokumenta')
}, false)

document.getElementById('dugme').addEventListener('click', function() {
  alert('Klik na dugme')
}, false)

</script>
```

Ako kliknemo dugme, videćemo četiri poruke za sledeće događaje:
- Klik na dugme
- Klik na telo dokumenta
- Klik na dokument
- Klik na prozor

{:.uokvireno.ideja}
`false` je podrazumevana vrednost trećeg parametra `addEventListener` metode, pa je možemo izostaviti.
