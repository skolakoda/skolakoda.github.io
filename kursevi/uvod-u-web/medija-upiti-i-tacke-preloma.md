---
title: CSS medija upiti i tačke preloma
layout: lekcija-html
permalink: /medija-upiti-i-tacke-preloma
---

**CSS medija upiti (*media queries*) služe da saznamo veličinu uređaja koji pregleda našu stranicu, i na osnovu toga primenimo zaseban stil.**

Sledeći primer će na svim ekranima širim od `800px` promeniti boju slova:

```css
body {
    color: #000;
}

@media (min-width: 800px) {
  body {
      color: #555;
  }
}
```

## Prelomne tačke (*responsive breakpoints*)

Prilagodljivi web dizajn se implementira pomoću prelomnih tačaka (*breakpoints*), kojima pravimo razliku između različitih veličina uređaja. Tačke preloma su zadate veličine na kojima menjamo dizajn. Standardne tačke preloma ne postoje. Njihov broj i vrednost zavisi od biblioteke koju koristimo, kao i samog dizajna.

Na primer, Bootstrap biblioteka koristi 4 tačke preloma, unutar kojih definišemo dizajn za razne uređaje:

```css
/* Ekstra mali uređaji (mobilni ispod 576px) */
/* Bez medija upita jer su podrazumevani */

/* Mali uređaji (mobilni landscape, 576px naviše) */
@media (min-width: 576px) { ... }

/* Srenji uređaji (tableti, 768px naviše) */
@media (min-width: 768px) { ... }

/* Veliki uređaji (desktop, 992px naviše) */
@media (min-width: 992px) { ... }

/* Ekstra veliki uređaji (1200px naviše) */
@media (min-width: 1200px) { ... }
```

## Primer: Prilagodljiva navigacija

U HTML-u imamo sledeću navigaciju:

```html
<nav>
    <a href="">Naslovna</a>
    <a href="">O nama</a>
    <a href="">Usluge</a>
    <a href="">Kontakt</a>
</nav>
```

Pomoću CSS-a ćemo postaviti da elementi navigacije podrazumevano imaju prikaz `block` (za male uređaje), a zatim promeniti da imaju prikaz `inline-block` za uređaje veće od `800px`:

```css
nav a {
    display: block;
}

@media (min-width: 800px) {
  nav a {
      display: inline;
  }
}
```

{:.uokvireno.ideja}
Ovde, kao i u ostalim primerima, primenjujemo princip *mobile first*, tj. podrazumevani stilovi su za male uređaje, a prilagođavamo ih za sve ostale.
