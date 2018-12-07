---
title: "Vežba: validacija formulara"
layout: lekcija-js-frontend
permalink: /vezba-js-validacija-formulara
---

Pomoću Javascripta implementiraj validaciju `input` polja za ime, email i lozinku. Kada korisnik klikne `submit` dugme, spreči podrazumevano slanje formulara, i validiraj podatke. Uslovi za validaciju su:
- ime mora biti duže od 3 a kraće od 30 karaktera.
- email mora sadržati `@`.
- lozinka mora sadržati malo slovo, veliko slovo, broj, specijalan znak i biti minimalne dužine 8 polja.

Ako je unos validan, dodaj `input` polju klasu `valid`, a ako nije, klasu `invalid`. Klase implementiraj u CSS-u da imaju crvenu ili zelenu ivicu. Samo ako su svi podaci valjani, pošalji formular.

Bonus: proveravaj valjanost podataka pri svakoj promeni input polja.

{:.html-ulaz.resenje}
```html
<style>
label {
  display: block;
}
.valid {
  border: 2px solid green;
}
.invalid {
  border: 2px solid red;
}
</style>

<form id="forma">
  <label>
    Ime: <input id="ime">
  </label>
  <label>
    Email: <input id="email">
  </label>
  <label>
    Lozinka: <input id="lozinka">
  </label>
  <button>Pošalji</button>
</form>

<script>
const forma = document.getElementById('forma')
const ime = document.getElementById('ime')
const email = document.getElementById('email')
const lozinka = document.getElementById('lozinka')

const lozinkaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{8,}$/
let sveoK = true

/* FUNKCIJE */

function proveriIme() {
  if (ime.value.length > 3 && ime.value.length < 30) {
    ime.classList.add('valid')
    ime.classList.remove('invalid')
  } else {
    ime.classList.add('invalid')
    ime.classList.remove('valid')
    sveoK = false
  }
}

function proveriEmail() {
  if (email.value.includes('@')) {
    email.classList.add('valid')
    email.classList.remove('invalid')
  } else {
    email.classList.add('invalid')
    email.classList.remove('valid')
    sveoK = false
  }
}

function proveriLozinku() {
  if (lozinkaRegex.test(lozinka.value)) {
    lozinka.classList.add('valid')
    lozinka.classList.remove('invalid')
  } else {
    lozinka.classList.add('invalid')
    lozinka.classList.remove('valid')
    sveoK = false
  }
}

/* DOGADJAJI */

ime.addEventListener('change', proveriIme)
email.addEventListener('change', proveriEmail)
lozinka.addEventListener('change', proveriLozinku)

forma.addEventListener('submit', (e) => {
  e.preventDefault()
  proveriIme()
  proveriEmail()
  proveriLozinku()
  if (sveoK) forma.submit()
})
</script>
```