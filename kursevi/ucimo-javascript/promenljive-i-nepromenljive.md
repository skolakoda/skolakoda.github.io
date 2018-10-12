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

**Promenljive** (ili **varijable**) su nešto što se menja, varira, odnosno identifikatori čija vrednost može biti ponovno dodeljena tokom izvršenja programa.

Najbolje ćemo zapamtiti preko primera iz života. Na primer:

{:.ulaz}
```js
// promenljive se mogu ponovo dodeljivati

let promenljivaOdluka = "Danas ću naučiti nešto novo!"
promenljivaOdluka = "Ipak neću danas ništa učiti"

console.log(promenljivaOdluka)
```

## Nepromenljive

Nasuprot njima imamo **nepromenljive** (iliti **konstante**). One su uvek iste, dok se sve oko njih menja. Za razliku od varijabli, konstante nakon inicijalne dodele vrednosti ne dozvoljavaju ponovnu dodelu. Svaki sličan pokušaj će uroditi greškom:

{:.ulaz}
```js
// nepromenljive se ne mogu ponovo dodeljivati

const nepromenljivaOdluka = "Danas ću naučiti nešto novo!"
nepromenljivaOdluka = "Ipak neću danas ništa učiti"  // ovde puca program

console.log(nepromenljivaOdluka)
```

## Favorizovanje nepromenljivih

Što manje imamo promenljivih, to je lakše voditi računa o programu i manja je mogućnost greške. U modernom Javaskriptu postoji tendencija ka nepromenljivosti podataka u toku izvršenja programa i treba favorizovati nepromenljive.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MIOz5i_AwQ4" frameborder="0" allowfullscreen></iframe>

{:.uokvireno}
Mudri programeri tvrde da ljudski mozak ne može pratiti više od sedam promenljivih vrednosti istovremeno. Ukoliko imamo više od toga vreme je da neke pretvorimo u nepromenljive, ili podelimo fajl na više delova.
