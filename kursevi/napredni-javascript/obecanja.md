---
title: Obećanja u Javascriptu
layout: lekcija-napredni-js
permalink: /obecanja
---

**Obećanja (*promise*) su uvedena u Javascript kao alternativa povratnim pozivima.** Povratni pozivi nisu adekvatni za upravljanje asinhronim tokom programa, usled previše nivoa gnježdenja (tzv. *callback hell*).

Kao i povratni pozivi, obećanja se koriste za obradu rezultata asinhrone funkcije. Kao što naziv ukazuje, obećanja mogu biti ispunjena ili odbijena. Obećanja se ponašaju kao čuvari mesta za krajnji rezultat. 

Obećanja imaju tri uzajamno isključiva stanja:
1. **čekanje** pre nego što je rezultat spreman.
2. **ispunjeno** kada je rezultat spreman.
3. **odbijeno** ako ima greške.

## Upotreba obećanja

Svrha obećanja je da omoguće bolju sintaksu za kontinuirano prosleđivanje (*continuation-passing style*). Asinhronu funkciju koja prima *callback* koristimo na sledeći način:

```js
uradiNesto(argument, rezultat => {
  // uporebi rezultat
})
```

Asinhronu funkciju koja vraća obećanje koristimo na sledeći:

```js
uradiNesto(argument)
  .then(rezultat => {
    // uporebi rezultat
})
```

Povratna funkcija unutar metoda `then()` se poziva kada je rezul­tat spreman. Zavisno od uspešnosti obećanja, poziva se povratna funkcija prosleđena metodu `then()` ili `catch()`:

```js
uradiNesto(argument)
  .then(rezultat => { /* obećanje ispunjeno */ })
  .catch(greska => { /* obećanje odbijeno */ })
```

## Ulančavanje obećanja

Ako bismo hteli da nastavimo asinhronu logiku, morali bismo da ugnjezdimo još jednu povratnu funkciju unutar prethodne. 

```js
uradiNesto(argument, rezultat => {
  uradiNestoDrugo(rezultat, (err, podatak) => {
    // uporebi podatak
  })
})
```

Međutim, obećanja možemo ulančavati, ako povratna funkcija unutar `then()` vraća obećanje. Na primer:

```js
uradiNesto(argument)
  .then(rezultatA => {
    return uradiNestoDrugo(rezultatA)
  })
  .then(rezultatB => {
    // uporebi rezultatB
  })
```

## Primer: fetch metoda

{:.ulaz}
```js
fetch('https://randomuser.me/api/?results=10')
  .then(response => {
    // vraca novo obecanje
    return response.json()
  })
  .then(data => {
    // koristimo podatak
    data.results.map(user => console.log(user.name.first))
  })
  .catch(err => console.log(err))
```

Ako dođe do greške u toku mrežnog poziva, biće izvršena povratna funkcija samo unutar `catch()` metode.

