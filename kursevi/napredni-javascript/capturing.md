---
title: "Propagacija događaja naniže (<i>capturing</i>)"
layout: lekcija-napredni-js-frontend
permalink: /javascript-capturing
---

**Propagacija događaja naniže, poznata kao hvatanje (*capturing*), je prva faza propagacije događaja kroz stranicu, tokom koje se događaj propagira od najopštijeg elementa ka ciljanom elementu.**

Ako [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) metodi prosledimo `true`, slušač događaja će biti pozvan u fazi hvatanja. U tom slučaju, klik na dugme će prvo okinuti povratnu funkciju na dokumentu, pa tek onda na samom dugmetu.

## Primer

U narednom primeru imamo slušače događaja na dugmetu, telu dokumenta, dokumentu i prozoru pregledača. Redosled dodavanja slušača nije bitan. 

Klikni dugme i vidi kojim se redom povratne funkcije pozivaju:

{:.html-ulaz}
```html
<button id="dugme">Klikni me!</button>

<script>

document.getElementById('dugme').addEventListener('click', function() {
  alert('Klik na dugme')
}, true)

document.body.addEventListener('click', function() {
  alert('Klik na telo dokumenta')
}, true)

document.addEventListener('click', function() {
  alert('Klik na dokument')
}, true)

window.addEventListener('click', function() {
  alert('Klik na prozor')
}, true)

</script>
```

Ako kliknemo dugme, videćemo četiri poruke za sledeće događaje:
- Klik na prozor
- Klik na dokument
- Klik na telo dokumenta
- Klik na dugme
