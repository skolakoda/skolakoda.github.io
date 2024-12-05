---
title: Sudari u igrama
layout: lekcija-razvoj-igara
permalink: /kolizija
---

**Prilikom sudara (ili kolizije), dva tela deluju jedno na drugo. Nakon sudara, njihovo kretanje se menja.**

Treba praviti razliku između detekcije kolizije i odgovora na koliziju.

## Sistem kolizije

U razvoju igara, svaki sistem kolizije bi trebalo da radi nekoliko osnovnih stvari: 
- da izveštava o događajima kolizije
- da izvodi *raycast* i *shapecast*
- da rukuje fantomskim objektima

Događaj sudara (*collision event*) treba da vrati bar sledeće podatke: 
- dva objekta koja su u sudaru
- zbir normalnih vektora sudara
- silu sudara

{:.uokvireno}
Svrstajte predmete u grupe, to optimizuje sistem kolizije. Na primer, sanduci na prvom spratu ne mogu da se sudare sa sanducima na drugom spratu, jer su fizički odvojeni.

## Primer: reagovanje na razne vrste sudara

Prilikom sudara različitih tela, na osnovu tipa tela se poziva odgovarajuća funkcija:

{:.ulaz}
```js
const collisionCallback = {
  AABB: {
    AABB: (A, B) => {
      console.log('Sudario se AABB vs AABB');
    },
    Circle: (A, B) => {
      console.log('Sudario se AABB vs Circle');
    }
  },
  Circle: {
    AABB: (A, B) => {
      console.log('Sudario se Circle vs AABB');
    },
    Circle: (A, B) => {
      console.log('Sudario se Circle vs Circle');
    }
  }
};

collisionCallback['AABB']['Circle']()
collisionCallback['AABB']['AABB']()
```

Ovde primenjujemo [strateški obrazac](/obrazac-strategija) koji omogućava izbor različitih strategija (algoritama) u zavisnosti od tipa objekata koji učestvuju u interakciji.

## Literatura

- Daniel Branicki, [*Basic 2D Platformer Physics, Part 1*](https://gamedevelopment.tutsplus.com/basic-2d-platformer-physics-part-1--cms-25799t)
- Daniel Branicki, [*Basic 2D Platformer Physics, Part 5: Object vs. Object Collision Detection*](https://gamedevelopment.tutsplus.com/basic-platformer-physics-part-5-object-vs-object-collision-detection--cms-27594t)