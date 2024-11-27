---
title: Delta vreme
layout: lekcija-razvoj-igara
permalink: /delta-vreme
---

**Delta vreme (*delta time*) je vreme trajanja prethodnog kadra, iliti interval između dva uzastopna kadra u igri. Zavisi od brzina osvežavanja ekrana, jačine računara i količine računanja u tom trenutku.**

Obzirom da trajanje kadrova varira, animacija je brža kad su kadrovi kraći, a sporija kad su kadrovi duži. Stoga delta vreme koristimo kao korektor, da bi animacija bila nezavisna od učestalosti kadrova (*frame rate*). Sa delta vremenom, ako je kadar brži predmet u igri se kreće sporije, i obratno, ako je kadar sporiji predmet se kreće brže, kako bi vizuelni utisak ostao isti. 

Delta vreme se koristi kao korektor da bi animacija bila nezavisna od učestalosti kadrova (*frame rate*):

## Upotreba

Delta vreme se obično koristi na sledeći način:

```js
noviPolozaj = polozaj + brzina * deltaVreme
``` 

Što bi u JS kodu izgledalo otprilike ovako:

```js
mesh.position = mesh.position + new Vector3(speed * deltaTime, 0, 0)
```

Tako predmet uvek ide istom brzinom, bez obzira na brzinu ekrana.

## Vrednost delta vremena

Delta vreme ponajviše zavisi od brzine osvežavanja ekrana (FPS). Ako je brzina ekrana 60 kadrova po sekundi, onda je delta vreme 60-ti deo sekunde:

```
deltaVreme = 1s / 60 
           = 0.016 s
```

Ako je brzina ekrana 30 frejmova po sekundi, onda je delta vreme 30-ti deo sekunde:

```
deltaVreme = 1s / 30 
           = 0.033 s
```

## Glavna petlja sa delta vremenom

Pošto brzine u igrama često koriste sekunde kao osnovnu jedinicu, potrebno je delta vreme iz milisekundi prevesti u sekunde, što se postiže deljenjem sa 1000:

```js
let then = Date.now();

const mainLoop = () => {
   requestAnimationFrame(mainLoop);
   const now = Date.now();
   const delta = now - then; // ms
   update(delta / 1000);     // s
   render();
   then = now;
}
```

U `update` funkciji zatim koristimo *delta time* (dt) na sledeći način:


```js
const update = (dt) => {
   hero.x -= hero.speed * dt;
}
```

Brzina ekrana je obično 60 frejmova u sekundi, što znači da se sve operacije unutar glavne petlje moraju izvršiti u 16 milisekundi.
