---
title: Razlika null i undefined
layout: lekcija-napredni-js
permalink: /javascript-null-i-undefined
---

Nepostojeće vrednosti su izvor [zabune](https://www.lucidchart.com/techblog/2015/08/31/the-worst-mistake-of-computer-science/) u mnogim programskim jezicima. Javascript ima dve nepostojeće vrednosti - `null` i `undefined`.

## `null` (prazno)

Vrednost `null` se koristi da označimo da je varijabla prazna. Obično `null` inicijalno dodelimo varijabli koja kasnije dobija pravu vrednost. Vrednost `null` je tipa objekat:

```
> typeof null
"object"
```

## `undefined` (nedefinisano)

Ako pokušamo da upotrebimo nepostojeću promenljivu, dobićemo grešku:

```
> x
ReferenceError: x is not defined
```

Ali ako upotrebimo `typeof` operator na nepostojeću promenljivu, dobićemo `"undefined"` (string):

```
> typeof x
"undefined"
```

Nedefinisana vrednost se podrazumevano dodeljuje varijablama bez vrednosti. Ako deklarišemo promenljivu bez dodele vrednosti, JavaScript je inicijalizuje pomoću vrednosti `undefined` (bez navodnika):

```
> let x
> x
undefined
```

Kada ispitamo tip promenljive koja ima vrednost `undefined`, dobićemo string `"undefined"`:

```
> let x
> typeof x
"undefined"
```

Takođe, ako ispitamo samu primitivnu vrednost `undefined` dobićemo isti rezultat:

```
> typeof undefined
"undefined"
```

## Primer

Poređenje sa `"undefined"` možemo koristiti da proverimo je li promenljiva definisana:

```js
if (typeof x !== "undefined") {
  // uradi nesto
}
```

Ovo jednako važi ako promenljiva `x` ne postoji, ili ako je deklarisana bez dodele vrednosti.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
