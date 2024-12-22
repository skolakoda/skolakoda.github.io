---
title: Tačke preloma
layout: lekcija-html
permalink: /tacke-preloma
---

**Responzivne tačke preloma (*responsive breakpoints*) su zadate veličine na kojima menjamo dizajn.**

Tačka preloma je medija upit koji razdvaja stil na dva dela: na deo izvan upita i na deo unutar upita. Tačke preloma se obično zasnivaju na širini pregledača, ali možemo ih postaviti na bilo koju karakteristiku medija. 

Prilagodljivi web dizajn se implementira pomoću prelomnih tačaka. Tipični dizajn, sa dve tačke preloma, može imati jedan stubac za male ekrane, dva stupca za srednje i tri za velike.

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

{:.uokvireno.ideja}
Ovde, kao i u ostalim primerima, primenjujemo princip *mobile first*, tj. prvo idu stilovi za mobilne uređaje, a potom za sve ostale.

## Standardne tačke preloma

Standardne tačke preloma ne postoje. Njihov broj i vrednost zavisi od biblioteke koju koristimo, kao i samog dizajna. Na primer, Bootstrap biblioteka koristi 4 tačke preloma, što pokriva pet grupa uređaja:

```css
/* Ekstra mali uređaji (mobilni) su podrazumevani */

/* Mali uređaji (mobilni položeni, 576px naviše) */
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

{:.ideja.uokvireno}
**Otkrijte najbolje tačke preloma za vaš sajt.** Umesto da tražite standardne tačke preloma, otkrijte na kojoj širini vaša stranica ne izgleda dobro. Na primer, pri određenoj veličini jedan stubac može postati preširok. To je tačka u kojoj treba prelomiti dizajn i podeliti sadržaj na dve kolone.

## Razni pristupi

Postoji mnogo načina na koje možemo koristiti tačke preloma. Možemo imati:
- nekoliko fiksnih prikaza za razne kategorije uređaja;
- jedan fluidni prikaz za sve ekrane, bez tačaka preloma; 
- hibridni pristup, koji koristi tačke preloma za osnovni dizajn, a fluidne prelaze između;
