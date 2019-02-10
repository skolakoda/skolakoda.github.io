---
title: Bitovni operatori u Javaskriptu
layout: lekcija-napredni-js
author: damjan
permalink: /bitovni-operatori-javaskript
image: /images/fore/bitovni-operatori.svg
---

![]({{page.image}})

{:.uvuceno}
*Za detaljno objašnjenje koncepta vidi [Bitovni operatori](/bitovni-operatori)*

**Iako se bitovski operatori uglavnom koriste u jezicima nižeg nivoa, mogu imati par korisnih primena u Javaskriptu. U tim slučajevima, oni su uglavnom brža alternativa drugim operacijama.**

## Prevođenje binarnih brojeva

Da bismo radili sa bitovskim operatorima, prvo da vidimo kako prevodimo binarne brojeve u obične. Funkcija `parseInt()`, kada joj se prosledi binarni broj unutar strune i 2 kao baza, vraća dekadni broj. Na primer:

{:.izraz}
```js
parseInt('110', 2)
```

Nasuprot tome, metoda `x.toString(2)`, kada se prosledi 2 kao baza, vraća binarni broj unutar strune. Na primer:

{:.izraz}
```js
6..toString(2)  // dve tačke ili zagrada oko broja
```

## Provera jel broj paran / neparan

Provera jel broj neparan se može izvršiti pomoću bitovskog i (`&`). Na primer, ovako proveravamo jel broj 7 neparan:

{:.izraz}
```js
7 & 1
```

Za broj 4 dobićemo drukčiji rezultat:

{:.izraz}
```js
4 & 1
```

Objašnjenje:

```js
// 7 & 1
00000111 // 7
00000001 // 1
--------
00000001 // 1 (neparan)

// 4 & 1
00000100 // 4
00000001 // 1
--------
00000000 // 0 (paran)
```

## Zamena vrednosti varijabli

Pomoću ekskluzivnog ili (`^`) možemo zameniti vrednosti dve varijable, bez pomoći treće.

{:.ulaz}
```js
let a = 97, b = 98

a = a ^ b
b = b ^ a
a = a ^ b

console.log(a, b)
```

Može i skraćeno:

{:.ulaz}
```js
let a = 97, b = 98

a ^= b
b ^= a
a ^= b

console.log(a, b)
```

Objašnjenje:

```js
// a = 97 (1100001)
// b = 98 (1100010)

// a ^= b
1100001 // 97 (a)
1100010 // 98 (b)
-------
0000011 // 3 (a)

// b ^= a
1100010 // 98 (b)
0000011 // 3 (a)
-------
1100001 // 97 (b)

// a ^= b
0000011 // 3 (a)
1100001 // 97 (b)
-------
1100010 // 98 (a)
```

## Zaokruživanje brojeva

Dvostruka bitovska negacija (`~~`) i bitovsko pomeranje (`>>` ili `<<`) nam mogu služiti za brzo zaokruživanja brojeva.

### Zaokruživanje pozitivnih brojeva

Dvostruka negacija pozitivnih brojeva može zameniti `Math.floor()` funkciju:

{:.izraz}
```js
~~(5.3)
```

Zaokruživanje se može vršiti i pomoću "lažnog" bitovskog pomeranja (pomera za nula mesta ulevo ili udesno, zapravo menja samo tip):

{:.izraz}
```js
5.3 >> 0
```

{:.izraz}
```js
5.3 << 0
```

### Zaokruživanje negativnih brojeva

Dvostruka bitovska negacija negativnih brojeva može zameniti `Math.ceil()`:

{:.izraz}
```js
~~(-5.3)
```

Bitovsko pomeranje takođe radi za negativne brojeve:

{:.izraz}
```js
-5.3 >> 0
```

{:.izraz}
```js
-5.3 << 0
```

## Množenje i deljenje sa dva

Pomoću bitovnih pomeranja možemo brzo množiti i deliti brojeve sa osnovom dva. Na primer, delimo broj napola jedanput:

{:.izraz}
```js
8 >> 1
```

Deli broj napola dva puta:

{:.izraz}
```js
8 >> 2
```

Ili množimo broj sa dva jedanput:

{:.izraz}
```js
8 << 1
```

Množimo broj sa dva dva puta:

{:.izraz}
```js
8 << 2
```

Objašnjenje:

```js
// 8 >> 1
00001000 // 8
00000100 // 4

// 8 >> 2
00001000 // 8
00000010 // 2

// 8 << 1
00001000 // 8
00010000 // 16

// 8 << 2
00001000 // 8
00100000 // 32
```

## Konverzija tipa

Pomoću bitovnih operacija možemo vršiti efikasnu konverziju prostih tipova u broj. Npr. uz pomoć disjunkcije:

{:.izraz}
```js
"3" | 0
```

{:.izraz}
```js
true | 0
```

Ili pomoću "lažnog" pomeranja:

{:.izraz}
```js
"5" >> 0
```

{:.izraz}
```js
true >> 0
```

## Obrtanje vrednosti

Pomoću bitovnog isključivog ili (`^`) možemo obrtati vrednost između 0 i 1.

{:.izraz}
```js
let stanje = 0
stanje ^= 1
```

I obratno:

{:.izraz}
```js
let stanje = 1
stanje ^= 1
```
