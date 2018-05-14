---
title: Asimptotska notacija
layout: lekcija-algoritmi
permalink: /asimptotska-notacija
author: damjan
---

**Za opis složenosti algoritma se koristi asimptotska notacija, koja predstavlja aproksimaciju za veliki red veličina.**

Na primer, u funkciji `n => n^2 + 3n`, kako `n` postaje veće, izraz `3n` postaje manje bitan u odnosu na `n^2`. Zato kažemo da je funkcija *asimptotski* jednaka `n^2`, kako se `n` bliži beskonačnosti.

U asimptotskoj notaciji se koriste:

- Veliko O: `O()`
- Veliko Teta: `Θ()`
- Veliko Omega: `Ω()`

## Veliko O (gornja granica)

Veliko O notacija se koristi za procenu gornje granice algoritma, odnosno maksimalnog vremena trajanja. Na primer, ukoliko algoritam zahteva `O(n)` operacija, to znači da će najviše trajati toliko, iako se može izvršiti i znatno brže.

Veliko O notacija je dobila ime od "*order of*" iliti "reda veličine".

## Veliko Teta (stroga granica)

Veliko Teta daje strogu granicu, koja omeđuje algoritam datim redom veličine. Algoritam koji zahteva `Θ(n)` će trajati najmanje `n` i ne više od `n`, što znači da u sebi uključuje i gornju (O) i donju granicu (Ω).

Veliko Teta tvrdi da je algoritam sa obe strane omeđen datom funkcijom, i da nikada neće biti značajno brži niti sporiji.

Sve što je `Θ(n)` ujedno je i `O(n)` i `Ω(n)`, ali ne važi i obratno.

## Veliko Omega (donja granica)

Veliko Omega se koristi za procenu donje granice, odnosno minimalnog vremena trajanja. Algoritam koji zahteva `Ω(n)` će uzeti najmanje `n` operacija, ne postavljajući gornju granicu trajanja.

{:.uokvireno.ideja}
Postoji jednostavan trik da upamtite ove tri notacije. Omega `Ω` je donja granica, i ima crtu na dnu. Teta `Θ` je tačna granica, i ima crtu po sredini. Veliko `O` je gornja granica, a pisano O ima crtu na vrhu.
