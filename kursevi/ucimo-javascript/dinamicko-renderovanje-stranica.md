---
title: Dinamičko renderovanje stranica
layout: lekcija-js-frontend
permalink: /dinamicko-renderovanje
---

Učitavanje podataka preko mreže i dinamičko iscrtavanje (*renderovanje*) HTML-a na osnovu dobijenih podataka je čest zadatak Front-end programera. To je ujedno i glavni razlog nastanka poznatih JS frejmvorka, među kojima su Angular, React i VueJS.

## Primer: Baza filmova

Prost primer učitavanja podataka u JSON formatu i dinamičkog kreiranja HTML-a:

{:.html-ulaz}
```html
<style>
  .okvir {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .film {
    width: 300px;
  }

  .film img {
    width: 100%;
  }
</style>

<div id="okvir" class="okvir"></div>

<script>
  function toHtml(data) {
    return data.map(film => (`
      <div class="film">
        <h3>${film.naziv}</h3>
        <img src="${film.slika}" alt="${film.naziv}">
        <p>Godina: ${film.godina}</p>
      </div>
    `)).join('')
  }

  function render(s, html) {
    document.querySelector(s).innerHTML = html
  }

  fetch('https://baza-filmova.herokuapp.com/filmovi/')
    .then(response => response.json())
    .then(data => render('#okvir', toHtml(data)))
</script>
```

Dobijeni podaci su niz objekata koji imaju atribute: `naziv`, `godina` i `slika`. Za više detalja vidi [Baza filmova API](https://github.com/skolakoda/baza-filmova-api).
