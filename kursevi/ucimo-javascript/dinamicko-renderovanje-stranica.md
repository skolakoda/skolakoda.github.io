---
title: Dinamičko renderovanje stranica
layout: lekcija-js-frontend
permalink: /dinamicko-renderovanje
---

## Primer: Baza filmova

Sledeći primer učitava podatke u JSON formatu iz API-ja i renderuje ih na stranici. 

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

Podaci su niz objekata koji imaju atribute: `naziv`, `godina` i `slika`.
