---
title: Dinamičko renderovanje stranica
layout: lekcija-js-frontend
permalink: /dinamicko-renderovanje
---

**Učitavanje podataka preko mreže i dinamičko *renderovanje* (iscrtavanje) HTML stranica je rutina Front-end programera.**

To je ujedno glavni razlog nastanka poznatih Javascript frejmvorka, među kojima su Angular, React i VueJS.

## Primer: Baza filmova API

Učitavamo podatke u JSON formatu sa javnog API-ja i dinamički kreiramo HTML.

Podaci su niz objekata koji imaju svojstva: `naziv`, `godina` i `slika`. 

Za više detalja vidi [Baza filmova API](https://github.com/skolakoda/baza-filmova-api).

### Primer sa `http` i `for` petljom

{:.html-ulaz}
```html
<div id="okvir"></div>

<script>

  const okvir = document.querySelector("#okvir")
  const http = new XMLHttpRequest()

  http.open("GET", "https://baza-filmova.herokuapp.com/filmovi/")
  http.send()
  http.onload = function() {
    const filmovi = JSON.parse(http.responseText)
    let html = ""
    for (let i = 0; i < filmovi.length; i++) {
      html += `
      <div class="film">
        <h3>${filmovi[i].naziv}</h3>
        <img src="${filmovi[i].slika}" alt="${filmovi[i].naziv}">
        <p>Godina: ${filmovi[i].godina}</p>
      </div>
      `
    }
    okvir.insertAdjacentHTML("beforeend", html)
  }

</script>
```

### Primer sa `fetch` i `map` metodom

{:.html-ulaz}
```html
<div id="okvir"></div>

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
