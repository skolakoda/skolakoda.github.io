---
title: Srednja vrednost uglova
layout: lekcija-algoritmi
permalink: /srednja-vrednost-uglova
---

**Za računanje srednje vrednosti ugla potrebno je koristiti trigonometriju, jer ugao u kružnici ne možemo prosečno računati kao obične brojeve.** 

## Problem

Imamo senzore na uređaju, koji neprestano mere trenutnu orijentaciju, ali iglu kompasa ne želimo ažurirati svaki put, kako ne bi previše skakala.

Naš program prima niz izmerenih uglova kružnice, između 0 i 360 stepeni. Od niza informacija dobijenih senzorom izračunaj srednju vrednost, kako bi stabilizovao iglu na kompasu.

## Rešenje

Prvo treba izračunati srednje vrednosti x i y komponenti, a zatim srednji ugao koristeći arktangens.

{:.ulaz}
```js
function izracunajSrednjiUgao(uglovi) {
  let x = 0
  let y = 0

  for (const ugao of uglovi) {
    x += Math.cos(ugao * Math.PI / 180)
    y += Math.sin(ugao * Math.PI / 180)
  }

  return Math.atan2(y, x) * 180 / Math.PI
}

console.log(izracunajSrednjiUgao([10, 20, 15, 25, 30]))
console.log(izracunajSrednjiUgao([350, 360, 5, 10, 20]))
```
