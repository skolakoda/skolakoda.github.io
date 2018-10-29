---
title: Uslovi
layout: lekcija-js-frontend
permalink: /javascript-validacija-formulara
--- 

## Prirodna validacija pregledača 

{:.html-ulaz}
```html
<form>
    <h3>Sva polja su obavezna</h3>

    <p>Mora da bude string</p>
    <input id="ime" required pattern="^\w+$"><br><br>

    <p>Mora samo broj</p>
    <input id="broj" pattern="^\d+$"><br><br>

    <p>Najviše 144 karaktera</p>
    <textarea id="poruka"></textarea><br><br>

    <button>Pošalji</button>
</form>
```

## Validacija putem Javaskripta

```js
const $ = selektor => document.querySelector(selektor)

const validnoIme = ime =>
    typeof ime == 'string' && ime.length > 0

const validanBroj = broj =>
    !isNaN(broj) && broj.length > 0

const validnaPoruka = poruka =>
    poruka.length > 0 && poruka.length <= 144


$('form').addEventListener('submit', function(e) {
    e.preventDefault()

    if (!validnoIme($('#ime').value))
      return console.log('nevalidno ime')
    if (!validanBroj($('#broj').value))
      return console.log('nevalidan broj')
    if (!validnaPoruka($('#poruka').value))
      return console.log('nevalidna poruka')

    this.submit()
})
```