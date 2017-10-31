---
title: Promenljive i nepromenljive u Javaskriptu
layout: lekcija-js
author: damjan
permalink: /promenljive-i-nepromenljive-u-javaskriptu
image: /images/koncepti/let-vs-const.png
---

![]({{page.image}})

***Promenljive i nepromenljive su uvedene u moderni Javaskript 2015. godine. Veliki broj programera ih još uvek ne koristi, ali mi ćemo odmah učiti po važećem standardu.***

## Promenljive

**Promenljive** (ili **varijable**) su nešto što se menja, varira, dok sve ostalo oko njih ostaje isto.

Najbolje ćemo zapamtiti preko primera iz života. Na primer:

```js
let sampion = "Djoka"
sampion = "Mika"
sampion = "Pera"

console.log(`Ovogodisnju titulu osvojio je ${sampion}`)
```

## Nepromenljive

Nasuprot njima imamo **nepromenljive** (iliti **konstante**). One su uvek iste, dok se sve oko njih menja.

```js
const crno = '#000'
const belo = '#fff'
const PI = 3.14
```

Za razliku od varijabli, konstante nakon icijalne dodele vrednosti ne dozvoljavaju ponovno dodeljivanje. Svaki sličan pokušaj će uroditi greškom:

```js
const PI = 3.14
PI = 2.14 // na ovom redu puca program
```

## Opseg važenja

`let` i `const` imaju svoj opseg važenja, odnosno važe samo u bloku u kom su definisane. Njihov opseg važenja je omeđen vitičastim zagradama `{ ... }`

Stare varijable (`var`) su bile omeđene samo opsegom funkcije, a mogle su važiti i izvan bloka u kome su definisane. Za razliku od njih, `let` i `const` ne mogu važiti izvan vitičastih zagrada.


```js
const a = 10;
// b je unutar bloka
{
  const b = 20;
}

console.log(a)  // a je dostupno
console.log(b)  // b je nedostupno i izbacuje grešku
```

Nakon uvođenja ES standarda 2015, upotreba `let` i `const` se preporučuje jer vrednosti ne cure u vanjski opseg.

## Favorizovanje nepromenljivih

Što manje imamo promenljivih, to je lakše voditi računa o programu i manja je mogućnost greške. U modernom Javaskriptu postoji tendencija ka nepromenljivosti podataka i treba favorizovati nepromenljive.

Mudri programeri tvrde da ljudski mozak ne može pratiti više od sedam promenljivih vrednosti istovremeno, u istom opsegu. Ukoliko imamo više od toga vreme je da podelimo fajl ili funkciju na više delova.

## Menjanje nepromenljivih

Nepromenljive se ne mogu iznova dodeliti (znakom `=`), ali ***složene nepromenljive vrednosti se mogu menjati***.

Dakle ako imamo neki složeni tip, poput niza ili objekta, njemu možemo dodavati nove članove, odnosno svojstva. On će biti poput čoveka, koji se stalno menja (dobija nova svojstva, gubi stara), ali je neraskidivo vezan sa svojim imenom.

Za razliku od složenih tipova, proste nepromenljive vrednosti, poput broja i teksta, se ne mogu menjati. One su kao najmanje nedeljive čestice i ne postoji svojstvo koje im može biti pridodato ili uzeto.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MIOz5i_AwQ4" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/iQ62GxboWgY" frameborder="0" allowfullscreen></iframe>
