---
title: Promenljive i nepromenljive u Javaskriptu
layout: lekcija-js
author: damjan
permalink: /promenljive-i-nepromenljive-u-javaskriptu
image: /images/koncepti/varijable/let-vs-const.png
---

![]({{page.image}})

***Promenljive i nepromenljive su uvedene u moderni Javaskript 2015. godine. Veliki broj programera ih još uvek ne koristi, ali mi ćemo odmah učiti po važećem standardu.***

## Promenljive

**Promenljive** (ili **varijable**) su nešto što se menja, varira, dok sve ostalo oko njih ostaje isto.

Najbolje ćemo zapamtiti preko primera iz života. Na primer:

{:.ulaz}
```js
let sampion = "Djoka"
sampion = "Mika"
sampion = "Pera"

console.log(`Ovogodišnju titulu osvojio je ${sampion}`)
```

## Nepromenljive

Nasuprot njima imamo **nepromenljive** (iliti **konstante**). One su uvek iste, dok se sve oko njih menja.

```js
const crno = '#000'
const belo = '#fff'
const PI = 3.14
```

Za razliku od varijabli, konstante nakon icijalne dodele vrednosti ne dozvoljavaju ponovno dodeljivanje. Svaki sličan pokušaj će uroditi greškom:

{:.ulaz}
```js
const PI = 3.14
PI = 2.14 // na ovom redu puca program
```

## Favorizovanje nepromenljivih

Što manje imamo promenljivih, to je lakše voditi računa o programu i manja je mogućnost greške. U modernom Javaskriptu postoji tendencija ka nepromenljivosti podataka i treba favorizovati nepromenljive.

Mudri programeri tvrde da ljudski mozak ne može pratiti više od sedam promenljivih vrednosti istovremeno, u istom opsegu. Ukoliko imamo više od toga vreme je da podelimo fajl ili funkciju na više delova.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MIOz5i_AwQ4" frameborder="0" allowfullscreen></iframe>
