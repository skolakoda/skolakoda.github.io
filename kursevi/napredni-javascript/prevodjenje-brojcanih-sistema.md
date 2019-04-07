---
title: Prevođenje između brojčanih sistema u Javaskriptu
layout: lekcija-napredni-js
permalink: /javascript-prevodjenje-brojcanih-sistema
---

**Ponekad je potrebno prevesti brojeve iz binarnog ili heksadecimalnog formata, koji koristi računar, u dekadni, koji ljudi koriste.**

## Prevođenje binarnih brojeva u dekadne

Funkcija `parseInt()`, kada joj se prosledi binarni broj unutar strune i 2 kao baza, vraća dekadni broj. Na primer:

{:.izraz}
```js
parseInt('101', 2)
```

Od ES6 verzije možemo samo dodati prefiks `Ob` za prevođenje binarnih brojeva:

{:.izraz}
```js
0b101
```

## Prevođenje heksadecimalnih brojeva u dekadne

Takođe, možemo koristiti prefiks `0x` za prevođenje heksadecimalnih vrednosti. Na primer:

{:.izraz}
```js
0xff
```

## Prevođenje dekadnih brojeva u binarne

Metoda `x.toString(2)`, kada se prosledi 2 kao baza, vraća binarni broj unutar strune. Na primer:

{:.izraz}
```js
5..toString(2)  // moraju dve tačke ili zagrada oko broja
```
