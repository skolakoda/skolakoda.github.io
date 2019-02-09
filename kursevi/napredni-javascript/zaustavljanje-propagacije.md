---
title: Zaustavljanje propagacije događaja
layout: lekcija-napredni-js-frontend
permalink: /zaustavljanje-propagacije
---

Ako želimo zaustaviti propagaciju događaja, pozivamo metod `stopPropagation()` sa objekta događaja unutar povratne funkcije, na sledeći način:

{:.html-ulaz}
```html
<p id="p">Klikni me!</p>

<script>
document.getElementById('p').addEventListener('click' , function(e) {
  alert('Klik na pasus')
  e.stopPropagation()
})
document.body.addEventListener('click', function() {
  alert('Klik na telo dokumenta')
})
document.addEventListener('click', function() {
  alert('Klik na dokument')
})
window.addEventListener('click', function() {
  alert('Klik na prozor')
})
</script>
```

Kada kliknemo na pasus, videćemo samo jednu poruku, zato što se događaj ne propagira dalje.

Objekat događaja se po konvenciji označava slovom `e`, što je skraćeno od *event*.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- MDN, [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)