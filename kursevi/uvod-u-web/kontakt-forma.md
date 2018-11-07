---
title: Kontakt forma
layout: lekcija-html
permalink: /kontakt-forma
---

- Unosna (`input`) polja
  - Tipovi unosa (`text`, `number`, `email`, `url`, `tel`)
  - Polje za više redova teksta (`textarea`)
  - Padajući meni (`select`)
  - `checkbox` polje i `radio` dugmad
  - `name`, `value` i `placeholder` atributi
- Dodavanje labele (`label`) i njena funkcija
- Validacija formi:
  - po tipu polja
  - `required` (obavezno polje)
  - `pattern` ([regularni izrazi](/regularni-izraz))
- Slanje formulara serveru (`POST` metoda)


name je ono što se šalje na server

id je potreban da bi radila labela

## Prost primer

{:.html-ulaz}
```html
<form action="https://formspree.io/tvojmail@gmail.com" method="POST">

  Ime i prezime:<br>
  <input name="ime" required><br>

  Email:<br>
  <input type="email" name="email" required><br>

  Ostavite poruku:<br>
  <textarea name="poruka" cols="30" rows="10" required></textarea><br>

  <button>Pošalji</button>
</form>
```

## Kompleksan primer

{:.html-ulaz}
```html
<style>
  label {
    display: block;
    margin-top: .8em;
  }
</style>


<form action="https://formspree.io/tvojmail@gmail.com" method="POST">

  <label for="ime">Ime i prezime *</label>
  <input type="text" name="ime" id="ime" placeholder="Unesite ovde" required>

  <label for="email">Email *</label>
  <input type="email" name="email" id="email" required>

  <label for="telefon">Telefon *</label>
  <input type="tel" placeholder="+381" name="telefon" id="telefon" minlength="9" required>

  <label for="sajt">Online portfolio</label>
  <input type="url" placeholder="http://www.example.com" name="sajt" id="sajt">

  <label for="datum">Datum rođenja</label>
  <input type="date" name="datum" id="datum">

  <label for="godine">Godine</label>
  <input type="number" min="7" max="107" name="godine" id="godine">

  <label for="usluga">Izaberite kurs</label>
  <select name="usluga" id="usluga">
    <option value=""></option>
    <option value="1">Javascript</option>
    <option value="2">Python</option>
    <option value="3">C/C++</option>
    <option value="4">PHP</option>
  </select>

  <label for="poruka">Ostavite poruku *</label>
  <textarea cols="30" rows="10" name="poruka" id="poruka" required></textarea><br>

  <button>Pošalji</button>
</form>
```
