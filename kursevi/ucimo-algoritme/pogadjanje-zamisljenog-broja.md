---
title: Pogađanje zamišljenog broja
layout: lekcija-algoritmi
permalink: /pogadjanje-zamisljenog-broja
---

![](/images/koncepti/algoritmi/pogadjanje-zamisljenog-broja.jpg)

**Binarno pretraživanje se može koristiti u igri pogađanja zamišljenog broja.**

## Primer: pogađanje broja u intervalu

Prostiji način je pogađanje zamišljenog broja iz zadatog intervala. Jedan igrač treba da zamisli broj iz tog intervala, a drugi da pogodi broj, na osnovu što manjeg broja pitanja na koje prvi igrač odgovara sa da ili ne. Ako pretpostavimo da interval čine brojevi od 1 do 16 i ako je prvi igrač zamislio broj 11, onda igra može da se odvija na sledeći način:

```
Da li je zamišljeni broj veći od 8 ? da
Da li je zamišljeni broj veći od 12 ? ne
Da li je zamišljeni broj veći od 10 ? da
Da li je zamišljeni broj veći od 11 ? ne
```

Na osnovu dobijenih odgovora, drugi igrač može da zaključi da je zamišljeni broj 11. Broj pitanja potrebnih za određivanje intervala pretrage je O(log k), gde je k širina polaznog intervala.

## Primer: pogađanje broja bez ograničenja

Ukoliko u prethodnoj igri nije zadata gornja granica intervala, najpre treba odrediti jedan broj koji je veći od zamišljenog broja i onda primeniti binarno pretraživanje. Ako pretpostavimo da je prvi igrač zamislio broj 11, onda igra može da se odvija na sledeći način:

```
Da li je zamišljeni broj veći od 1 ? da
Da li je zamišljeni broj veći od 2 ? da
Da li je zamišljeni broj veći od 4 ? da
Da li je zamišljeni broj veći od 8 ? da
Da li je zamišljeni broj veći od 16 ? ne
```

Na osnovu dobijenih odgovora, drugi igrač može da zaključi da je zamišljeni broj u intervalu od 1 do 16 i da primeni binarno pretraživanje na taj interval. Broj pitanja potrebnih za određivanje intervala pretrage je O(log k), gde je k zamišljeni broj i ukupna složenost pogađanja je ponovo O(log k).

### Literatura

- Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
