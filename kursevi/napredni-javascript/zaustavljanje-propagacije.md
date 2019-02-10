---
title: Zaustavljanje propagacije događaja
layout: lekcija-napredni-js-frontend
permalink: /zaustavljanje-propagacije
---

**Postoji scenario kada želimo da klik na dugme ne aktivira klik na roditeljskim elementima. U takvim situacijama možemo zaustaviti propagaciju događaja.**

## Primer

U naredno primeru imamo nekoliko slušača klik događaja, dodatih na različite elemente. Povratne funkcije se pozivaju po redosledu [propagacije naviše](/javascript-bubbling). Stoga, ako pozovemo `e.stopPropagation()` na ciljnom elementu, biće zaustavljena propagacija događaja na roditelje:

{:.html-ulaz}
```html
<button id="dugme">Klikni me!</button>

<script>

document.getElementById('dugme').addEventListener('click' , function(e) {
  alert('Klik na dugme')
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

Kada kliknemo na dugme, videćemo samo jednu poruku, zato što se događaj ne propagira dalje. Ako probamo isti primer bez `e.stopPropagation()`, videćemo da svi događaji rade.

Objekat događaja se po konvenciji označava slovom `e`, što je skraćeno od *event*.

{:.uokvireno.ideja}
Zaustavljanje propagacije smatra se [opasnom praksom](https://css-tricks.com/dangers-stopping-event-propagation/) i ne treba je koristiti bez jakog razloga.
