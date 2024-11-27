---
title: Delta vreme
layout: lekcija-razvoj-igara
permalink: /delta-vreme
---

**Delta vreme (*delta time*) predstavlja trajanje jednog kadra iliti interval između dva uzastopna kadra u igri. U razvoju igara koristi se za ujednačenje pokreta, bez obzira na brzinu osvežavanja ekrana (FPS).**

Tako, ako se kadar brže menja, onda predmet pomoću delta vremena pomeramo sporije, i obratno. 

## Objašnjenje

Delta vreme se obično koristi na sledeći način:

```js
noviPolozaj = polozaj + brzina * deltaVreme
``` 

Ako je brzina ekrana 60 kadrova po sekundi, onda je delta vreme 60-ti deo sekunde:

```
deltaVreme = 1s / 60 
           = 0.016 s
```

Ako je brzina ekrana 30 frejmova po sekundi, onda je delta vreme 30-ti deo sekunde:

```
deltaVreme = 1s / 30 
           = 0.033 s
```

Tako predmet uvek ide istom brzinom, bez obzira na brzinu ekrana.

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
