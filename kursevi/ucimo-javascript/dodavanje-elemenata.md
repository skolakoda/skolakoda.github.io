---
title: Dodavanje elemenata u DOM
layout: lekcija-js-frontend
permalink: /dodavanje-elemenata
---

**DOM elementi se mogu dinamički kreirati i dodavati na razne načine.**

## Primer: `innerHTML` atribut

Primer dodavanja elemenata pomoću [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) atributa:

{:.html-ulaz}
```html
<div id="drzac"></div>

<script>
  const drzac = document.getElementById('drzac')
  drzac.innerHTML = `
    <div>
      <h2>Zdravo Svete</h2>
    </div>
  `
</script>
```

Ovo je najprostiji način dodavanja HTML-a, a glavni nedostatak je što unutrašnjim elementima ne možemo dodavati događaje.

## Primer: `appendChild` metoda

Primer dodavanja elemenata pomoću [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) metode, na klik:

{:.html-ulaz}
```html
<style>
  .kvadrat {
    background-color: red;
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 5px;
    text-align: center;
  }
</style>

<button id="dugme">Dodaj kvadrat</button>
<div id="drzac"></div>

<script>
  const drzac = document.getElementById('drzac')
  const dugme = document.getElementById('dugme')
  let brojac = 1

  function dodajKvadrat() {
    const kvadrat = document.createElement('div')
    kvadrat.setAttribute('class', 'kvadrat')
    kvadrat.innerText = brojac
    kvadrat.addEventListener('click', () => alert('zdravo ' + kvadrat.innerText))
    drzac.appendChild(kvadrat)
    brojac++
  }

  dugme.addEventListener('click', dodajKvadrat)
</script>
```

Glavna prednost ove metode je mogućnost dodavanja slušače događaja na novokreirani element. 

## Primer: `insertAdjacentHTML` metoda

Primer dodavanja elemenata pomoću [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) metode:

{:.html-ulaz}
```html
<h2 id="naslov">Dodavanje elementa u DOM</h2>

<script>
  const naslov = document.getElementById('naslov')
  const sablon = `
    <div>
      <h3>Slika dana</h3>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG/320px-Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG'>
      <p>Wikimedia Commons je izvor besplatnih, legalnih i visokokvalitetnih slika.</p>
    </div>
  `
  naslov.insertAdjacentHTML('afterend', sablon) 
</script>
```

Glavna prednost ove metode je mogućnost pravljenja kompleksnih elemenata pomoću HTML oznaka i višelinijskih struna.


{:.ideja.uokvireno}
Bitna razlika između različitih načina dodavanja elemenata je što u nekim slučajevima možemo dodavati slušače događaja na elemente, a u nekim ne. 
