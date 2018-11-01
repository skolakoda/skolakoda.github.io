---
title: Validacija korisničkog unosa
layout: lekcija-js-frontend
permalink: /javascript-validacija-formulara
--- 

**Za validaciju korisničkog unosa možemo koristiti prirodnu HTML validaciju, koja se oslanja na funkcionalnost pregledača, ili implementirati *custom* Javascript validaciju.**

## Prirodna validacija pregledača 

Prirodna validacija pregledača može biti prilično napredna, jer prima brojne atribute, uključujući `type`, `required`, `minlength`, `maxlength`, kao i moćni `pattern` atribut za regularne izraze:

{:.html-ulaz}
```html
<form>
    <h3>Sva polja su obavezna</h3>

    <p>Mora da bude broj</p>
    <input id="broj" type="number" required><br><br>

    <p>Mora da bude email</p>
    <input id="email" pattern="\S+@\S+\.\S+" required><br><br>

    <p>Mora najmanje 5, a najviše 144 karaktera</p>
    <textarea id="poruka" minlength="5" maxlength="144" required></textarea><br><br>

    <button>Pošalji</button>
</form>
```

{:.uokvireno}
U HTML-u postoji input polje tipa "email", ali proverava samo da li unos sadrži `@`, pa koristimo regularni izraz za strožiju proveru.

## Validacija putem Javaskripta

Nekad je potrebno "ubiti" HTML funkcionalnost, i vršiti validaciju isključivo pomoću Javascripta. Na primer, tako možemo ispisivati korisniku poruke kakve želimo, nasuprot podrazumevanih poruka pregledača. 

Sledeća skripta je način da uradimo validaciju iz gornjeg primera isključivo putem Javascripta: 

```js
const $ = selektor => document.querySelector(selektor)

const jeValidanBroj = broj =>
    !isNaN(broj) && broj.length > 0

const jeValidanMejl = email =>
    /\S+@\S+\.\S+/.test(email)

const jeValidnaPoruka = poruka =>
    poruka.length >= 5 && poruka.length <= 144


$('form').addEventListener('submit', function(e) {
    e.preventDefault()

    if (!jeValidnoIme($('#ime').value))
      return alert('nevalidno ime')
    if (!jeValidanBroj($('#broj').value))
      return alert('nevalidan broj')
    if (!jeValidanMejl($('#email').value))
      return alert('nevalidan email')
    if (!jeValidnaPoruka($('#poruka').value))
      return alert('nevalidna poruka')

    this.submit()
})
```

{:.uokvireno.ideja}
Skriptu možeš isprobati tako što je prikačiš za gornji HTML kod, prekopiran u zaseban fajl. Sa input polja možeš ukloniti sve atribute za validaciju, kako bi se provera vršila isključivo preko Javascripta.
