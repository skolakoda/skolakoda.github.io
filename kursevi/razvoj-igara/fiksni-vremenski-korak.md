---
title: Fiksni vremenski korak
layout: lekcija-razvoj-igara
permalink: /fiksni-vremenski-korak
---

**Fiksni vremenski korak (*fixed timestep*) je tehnika koja se koristi za ažuriranje fizike u igrama.**

Potrebno je da se fizika u igrama ažurira tek kada prođe određeno realno vreme. Delta vreme, koje koristimo za animacije, zavisno je od brzine ekrana i netačno za fiziku. Stoga koristimo fiksni vremenski razmak (npr. 0.016 sekundi) za stabilno izvršenje fizike, ali to zahteva interpolaciju za glatke animacije.

## Primer

```js
const fps = 60
const dt = 1 / fps                        // fiksni vremenski korak
let accumulator = 0
let frameStart = getCurrentTime()

mainLoop() {
  const currentTime = getCurrentTime()
  accumulator += currentTime - frameStart // dodaje vreme proteklo od prošlog kadra
  frameStart = currentTime                // čuva početak ovog kadra

  while(accumulator > dt) {               // ako je proteklo više od fiksnog koraka
    updatePhysics(dt)
    accumulator -= dt
    renderGame()      
  }
}
```

Međutim, šta ako ažuriranje fizike traje predugo i akumulator sve više raste u svakoj petlji? Ovo se zove *spirala smrti*. Da bi se rešilo, treba ređe ažurirati fiziku ako akumulator postane previsok. Jednostavan način je zakucati akumulator ispod neke proizvoljne vrednosti.

Pre `while` petlje dodajemo ovaj red, da bismo izbegli spiralu smrti:

```js
if (accumulator > 0.2) accumulator = 0.2
```
