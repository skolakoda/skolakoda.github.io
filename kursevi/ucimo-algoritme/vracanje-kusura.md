---
title: Algoritam za vraćanje kusura
layout: lekcija-algoritmi
permalink: /vracanje-kusura
---

**Algoritam za vraćanje kusura koristi rečnik kao pomoćnu strukturu podataka.**

## Problem

Ulaz u bioskop je 25 dolara. Ljudi u redu drže novčanice od 100, 50 i 25. Kasa je inicijalno prazna. Izračunaj da li ćeš moći svima da vratiš imaKusura.

## Rešenje

{:.ulaz}
```js
function imaKusura(novcanice) {
  const kasa = {
    50: 0,
    25: 0
  }
  for (const novcanica of novcanice) {
    kasa[novcanica]++
    if (novcanica == 50) kasa[25]--
    if (novcanica == 100) {
      kasa[25]--
      if (kasa[50]) kasa[50]--
      else kasa[25] -= 2
    }
    if (kasa[25] < 0) return 'NE'
  }
  return 'DA'
}

console.log(imaKusura([25, 25, 25, 50, 75]))
console.log(imaKusura([25, 25, 100]))
```

Izvor: [codewars.com](https://www.codewars.com/kata/vasya-clerk/train/javascript)