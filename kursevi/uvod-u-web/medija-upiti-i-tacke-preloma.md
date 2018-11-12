---
title: CSS medija upiti i tačke preloma
layout: lekcija-html
permalink: /medija-upiti-i-tacke-preloma
---

**Medija upiti (*media queries*) služe da saznamo veličinu klijentskog uređaja, i tome prilagodimo stranicu. Promena dizajna na određenoj veličini naziva se tačka preloma (*breakpoint*).**

Prilagodljivi web dizajn se implementira pomoću prelomnih tačaka. 

## Prost primer

Sledeći primer će na svim ekranima širim od `800px` promeniti boju slova:

```css
body {
    color: black;
}

@media (min-width: 800px) {
  body {
      color: gray;
  }
}
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

Pomoću CSS-a zadajemo da elementi navigacije podrazumevano imaju prikaz `block` (za male uređaje), a zatim da imaju prikaz `inline-block` za uređaje veće od `800px`:

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

## Standardne tačke preloma (*responsive breakpoints*)

Tačke preloma su zadate veličine na kojima menjamo dizajn. Standardne tačke preloma ne postoje. Njihov broj i vrednost zavisi od biblioteke koju koristimo, kao i samog dizajna.

Na primer, Bootstrap biblioteka koristi 4 tačke preloma, što pokriva pet grupa uređaja:

```css
/* Ekstra mali uređaji (mobilni ispod 576px) su podrazumevani */

/* Mali uređaji (mobilni landscape, 576px naviše) */
@media (min-width: 576px) { 
    
}

/* Srednji uređaji (tableti, 768px naviše) */
@media (min-width: 768px) {
    
}

/* Veliki uređaji (desktop, 992px naviše) */
@media (min-width: 992px) {
    
}

/* Ekstra veliki uređaji (1200px naviše) */
@media (min-width: 1200px) {
    
}
```
