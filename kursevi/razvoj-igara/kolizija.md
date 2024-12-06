---
title: Sudari u igrama
layout: lekcija-razvoj-igara
permalink: /kolizija
---

**Prilikom sudara, dva tela deluju jedno na drugo. Nakon sudara, njihovo kretanje se menja.**

Treba praviti razliku između detekcije kolizije (sudara) i odgovora na koliziju.

## Primer: sudar sa zidom

U ovom primeru imamo prost sudar kocke sa zidom, uz implementaciju bazične fizike:

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const gravity = 0.5
const position = { x: 100, y: 175 }
const velocity = { x: 4, y: 0 }
let onGround = false

window.addEventListener("mousedown", () => {
    if (!onGround) return
    velocity.y = -12
    onGround = false
})

window.addEventListener("mouseup", () => {
    if (velocity.y < -6) velocity.y = -6
})

const update = () => {
    velocity.y += gravity
    position.y += velocity.y
    position.x += velocity.x

    if (position.y > 175) {
        position.y = 175
        velocity.y = 0
        onGround = true
    }

    if (position.x < 10 || position.x > 290) 
      velocity.x *= -1
}

const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(0, 175)
    ctx.lineTo(300, 175)
    ctx.rect(position.x - 10, position.y - 20, 20, 20)
    ctx.stroke()
}

const loop = () => {
    update()
    render()
    setTimeout(loop, 33)
}
loop()
```

Pritisni miša za skakanje!

## Sistem kolizije

U razvoju igara, zbog velikog broja predmeta koji se sudaraju, obično imamo neki sistem kolizije. Svaki sistem kolizije bi trebalo da radi nekoliko osnovnih stvari: 
- da izveštava o događajima kolizije
- da izvodi *raycast* i *shapecast*
- da rukuje fantomskim objektima

Događaj sudara (*collision event*) treba da vrati bar sledeće podatke: 
- dva objekta koja su u sudaru
- zbir normalnih vektora sudara
- silu sudara

{:.uokvireno}
Organizujte predmete u grupe, to optimizuje sistem kolizije. Na primer, sanduci na prvom spratu ne mogu da se sudare sa sanducima na drugom spratu, jer su fizički odvojeni.

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