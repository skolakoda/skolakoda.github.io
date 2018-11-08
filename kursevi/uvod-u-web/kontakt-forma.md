---
title: Kontakt forma u HTML-u
layout: lekcija-html
permalink: /kontakt-forma
---

**Kontakt forma (`<form>`) je standardan način da posetilac pošalje podatke vlasniku sajta. Obično se sastoji od nekoliko `input` polja, sa podacima koje korisnik unosi, i dugmeta za potvrdu slanja.**

Validacija se prvenstveno vrši preko tipa polja, i `required` atributa. Postoji više tipova `<input>` polja: tekst, broj, email, url, datum i slično. Ukoliko ne navedemo tip, podrazumeva se tekst. Za unos više redova teksta, koristi se `<textarea>`.

Veoma je bitno da svako polje ima `name` atribut, preko kojeg se vrednosti šalju serveru.

## Prost primer forme

Sledeći formular ima tri polja za unos. Sva tri imaju atribut `required`, što ih čini obaveznima, i `name`, bez kojeg ne bi radila. Forma ima atribut `action`, sa adresom prihvatne stranice, i `method`, sa vrstom HTTP zahteva.

{:.html-ulaz}
```html
<form action="https://formspree.io/tvojmail@gmail.com" method="POST">

  Ime i prezime:<br>
  <input name="ime" required><br>

  Email:<br>
  <input name="email" type="email" required><br>

  Ostavite poruku:<br>
  <textarea name="poruka" cols="30" rows="10" required></textarea><br>

  <button>Pošalji</button>
</form>
```

{:.uokvireno.ideja}
Ukoliko na kraju adrese u `action` atributu uneseš svoj mejl, forma će raditi.

## Kompleksan primer forme

- id je potreban da bi radila labela
- `value` i `placeholder` atributi
- Dodavanje labele (`label`) i njena funkcija
  
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
