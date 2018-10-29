---
title: Validacija korisničkog unosa
layout: lekcija-js-frontend
permalink: /javascript-validacija-formulara
--- 

## Prirodna validacija pregledača 

Za proveru korisničkog unosa možemo koristiti prirodnu (*native*) validaciju pregledača, koja može biti prilično napredna, jer prima regularne izraze u `pattern` atribut input elementa:

{:.html-ulaz}
```html
<form>
    <h3>Sva polja su obavezna</h3>

    <p>Mora da bude string</p>
    <input id="ime" pattern="^\w+$" required><br><br>

    <p>Mora samo broj</p>
    <input id="broj" type="number" required><br><br>

    <p>Najviše 144 karaktera</p>
    <textarea id="poruka" maxlength="144" required></textarea><br><br>

    <button>Pošalji</button>
</form>
```

## Validacija putem Javaskripta

Međutim, u nekim slučajeva, usled zahteva klijenata ili dizajna, neophodno je "ubiti" prirodnu HTML funkcionalnost, te vršiti validaciju isključivo pomoću Javascripta.

```js
const $ = selektor => document.querySelector(selektor)

const jeValidnoIme = ime =>
    typeof ime == 'string' && ime.length > 0

const jeValidanBroj = broj =>
    !isNaN(broj) && broj.length > 0

const jeValidnaPoruka = poruka =>
    poruka.length > 0 && poruka.length <= 144


$('form').addEventListener('submit', function(e) {
    e.preventDefault()

    if (!jeValidnoIme($('#ime').value))
      return console.log('nevalidno ime')
    if (!jeValidanBroj($('#broj').value))
      return console.log('nevalidan broj')
    if (!jeValidnaPoruka($('#poruka').value))
      return console.log('nevalidna poruka')

    this.submit()
})
```
