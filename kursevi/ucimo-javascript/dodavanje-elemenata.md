---
title: Dodavanje elemenata u DOM
layout: lekcija-js-frontend
permalink: /dodavanje-elemenata
---

**DOM elementi se mogu dinamički kreirati i dodavati na razne načine.**

Bitna razlika između različitih načina dodavanja elemenata je što u nekim slučajevima možemo dodavati slušače događaja na elemente, a u nekim ne. 

## Kreiranje DOM objekata

Da bismo kreirali nove čvorove, možemo koristiti `document` metode `createElement()` i `createTextNode()`. Nakon što kreiramo nove čvorove, možemo ih dodati u DOM stablo pomoću metoda `appendChild()`, `insertBefore()` ili `replaceChild()`.

Glavna prednost ove metode je mogućnost dodavanja slušače događaja na novokreirani element. 

### Dodavanje preko `appendChild` metode

Pomoću [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) metode možemo dodati novi čvor DOM stablu. Kad ovaj metod pozovemo sa nekog DOM elementa, biće mu kreiran još jedan „potomak“.

Na primer, ovako kreiramo elemenat i dodajemo ga pomoću `appendChild` metode, na klik:

{:.html-ulaz}
```html
<style>
  .kvadrat {
    background-color: red;
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 5px;
  }
</style>

<button id="dugme">Dodaj kvadrat</button>
<div id="drzac"></div>

<script>
  const drzac = document.getElementById('drzac')
  const dugme = document.getElementById('dugme')

  function dodajKvadrat() {
    const kvadrat = document.createElement('div')
    kvadrat.setAttribute('class', 'kvadrat')
    kvadrat.addEventListener('click', () => alert('zdravo'))
    drzac.appendChild(kvadrat)
  }

  dugme.addEventListener('click', dodajKvadrat)
</script>
```

Za veću kontrolu nad tačnom lokacijom postoji metod [`insertBefore()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore), koji umeće novi čvor pre tačno određenog elementa. 

## Kreiranje HTML tagova unutar strune

Prednost ovog pristupa je mogućnost pravljenja kompleksnih HTML oznaka pomoću višelinijskih struna, a nedostatak je što elementima ne možemo dodavati događaje.

### Dodavanje preko `innerHTML` atributa

Svojstvo [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) vraća ili postavlja HTML nekog elementa. 

Na primer, možemo dodati HTML praznom elementu:

{:.html-ulaz}
```html
<div id="drzac"></div>

<script>
const drzac = document.getElementById('drzac')
drzac.innerHTML = '<h2>Zdravo Svete</h2>'
</script>
```

### Dodavanje preko `insertAdjacentHTML` metode

HTML elemente u stringu takođe možemo dodati pomoću [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) metode:

{:.html-ulaz}
```html
<h2 id="naslov">Dodavanje elementa u DOM</h2>

<script>
  const naslov = document.getElementById('naslov')
  const sablon = `
    <div>
      <h3>Slučajna slika</h3>
      <img src='http://lorempixel.com/400/200/'>
      <p>Lorem Pixel je sajt za uključenje nasumičnih slika.</p>
    </div>
  `
  naslov.insertAdjacentHTML('afterend', sablon) 
</script>
```

