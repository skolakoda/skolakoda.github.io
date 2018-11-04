---
title: Dodavanje CSS-a
layout: lekcija-html
permalink: /dodavanje-css-a
---

CSS možemo pisati na tri načina:

- unutar HTML elementa (`style` atribut)
- unutar HTML stranice (`<style>` tag)
- u zasebnom CSS fajlu (`<link>` tag)

**Preporučen način je uključivanje zasebnog `css` fajla.**

## Pisanje unutar HTML elementa (`style` atribut)

Preko `style` atributa upisujemo CSS direktno u svaki HTML tag, na sledeći način:

```html
<p style="background: yellow; color: red;">Zdravo svete</p>
```

Glavne mane ovog pristupa su:
- nepregledno ređanje direktiva u jednom redu
- ne možemo stilizovati više elemenata istovremeno
- moramo ponavljati kod za svaki element
- *inline* stil ima prioritet važenja, i opire se zajedničkom stilu

Dobra praksa je ukloniti sav *inline* CSS iz HTML fajla.

## Pisanje unutar HTML stranice (`<style>` tag)

CSS možemo pisati unutar `<style>` taga, koji se obično stavlja u `<head>` dokumenta. Primer `<style>` taga:

```html
  <style>
    h1 {
      color: red;
    }
    p {
      color: purple;
    }
  </style>
```

Ovaj pristup je znatno bolji od prethodnog iz više razloga:

- pisanje direktiva je preglednije
- možemo stilizovati više elemenata istovremeno
- ne moramo ponavljati kod za svaki element
- grupišemo sav CSS na jednom mestu unutar HTML stranice

Međutim, i ovaj pristup ima nedostataka:

- ne možemo praviti zajednički dizajn za više stranica istovremeno
- mešamo više jezika u jedan fajl, što je obično loše

## Pisanje u zasebnom CSS fajlu (`<link>` tag)

Dodavanje zasebnog `.css` fajla je preporučen način pisanja CSS-a. CSS fajl se uključuje preko `link` taga, koji se stavlja u `<head>` dokumenta. Primer `link` taga:

```html
<link rel="stylesheet" href="style.css">
```

Ovaj metod ima niz prednosti, među kojima su:

- pisanje CSS-a je veoma pregledno
- možemo stilizovati više elemenata istovremeno
- možemo stilizovati više stranica istovremeno
- možemo koristiti alatke za proveru i formatiranje jezika
- imamo jasnu podelu odgovornosti između jezika

Pošto imamo objedinjen dizajn na jednom mestu, možemo praviti višekratno upotrebljive CSS teme, za Wordpress i druge platforme.

Jedini nedostatak ovog pristupa je nešto sporije učitavanje. Zaseban fajl troši dodatni HTTP zahtev, a kada sve imamo unutar istog fajla ne trošimo više HTTP zahtev-a.

{:.uokvireno.ideja}
Problem brzine učitavanja se standardno rešava tako što tokom **faze razvoja** imamo odvojene CSS fajlove, a na kraju, **u produkciji**, sve to spojimo, minifikujemo u ubacimo u HTML fajl.