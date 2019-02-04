---
title: Logički operatori
layout: lekcija-js
author: damjan
permalink: /logicki-operatori
---

U programiranju, logičke operatore koristimo za spajanje više logičkih vrednosti u složeni izraz. Glavni logički operatori su:

* **i** (`&&`)
* **ili** (`||`)
* **ne** (`!`)

Kao i u govornom jeziku, `i` i `ili` su veznici, a `ne` je negacija. Njihova upotreba je dosta intuitivna:

* Kupi hleb i mleko i jaja (mora sve)
* Kupi hleb ili mleko ili jaja (mora bar jedno)

<iframe width="560" height="315" src="https://www.youtube.com/embed/_rpKqyeAU5M" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

## Veznik i (`&&`)

Ako je više izraza povezano veznikom *i*, svaki od njih mora biti ispunjen. Na primer, veznikom `&&` proveravamo da li je korisnik punoletan i prihvatio je uslove korištenja i platio:

{:.izraz}
```js
godine = 19
platio = true
prihvatio = true

godine >=18 && platio && prihvatio
```

## Veznik ili (`||`)

Ako je više izraza povezano veznikom *ili*, bar jedan mora biti ispunjen. Na primer, veznikom `||` možemo proveriti da li korisnik pripada nekoj od povlaštenih kategorija za javni prevoz:

{:.izraz}
```js
student = false
penzioner = false
invalid = false
nezaposlen = true

student || penzioner || invalid || nezaposlen
```

## Prioritet operatora

Logički operator `!` ima najveći prioritet, pa se prvi izvršava. Prema prioritetu, sledi `&&` i na kraju `||`.

Zagrade mogu menjati prioritet operatora. Takođe se često dodaju radi preglednosti, jer olakšavaju čitanje i razumevanje koda. Sledeća dva izraza su ista:

{:.izraz}
```js
false && false || true && true
```

I drugi sa zagradama:

{:.izraz}
```js
(false && false) || (true && true)
```

Preporučeno je kod složenih izraza koristiti zagrade, umesto oslanjanja na prioritet operatora.

## Istinosne tablice

Logički operatori se formalno predstavljaju pomoću istinosnih tablica, koje popisuju sve moguće ulaze i njihove ishode.

{:.small-table}
| p | q | p && q  | p \|\| q | ! p |
|---|---|---------|----------|-----|
| T | T | T       | T        | F   |
| T | F | F       | T        | F   |
| F | T | F       | T        | T   |
| F | F | F       | F        | T   |
