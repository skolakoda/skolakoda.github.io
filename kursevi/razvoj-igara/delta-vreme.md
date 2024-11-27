---
title: Delta vreme
layout: lekcija-razvoj-igara
permalink: /delta-vreme
---

**Delta vreme (*delta time*) predstavlja vremenski interval između dva uzastopna kadra (frejma) u igri. U razvoju igara koristi se za ujednačene pokrete, bez obzira na brzinu osvežavanja ekrana (FPS).**

Delta vreme se obično koristi na sledeći način:

```js
polozaj += brzina * deltaVreme
``` 

Ako se kadar brže menja, predmet se pomera sporije, i obratno. Ako je brzina ekrana 60 kadrova po sekundi:

```
deltaVreme = 1s / 60 
           = 0.016 s
```

Ako je brzina ekrana 30 kadrova po sekundi:

```
deltaVreme = 1s / 30 
           = 0.033 s
```

Tako predmet uvek ide istom brzinom, bez obzira na brzinu ekrana.

## Glavna petlja sa delta vremenom

```js
let then = Date.now();

const mainLoop = () => {
	requestAnimationFrame(mainLoop);
	const now = Date.now();
	const delta = now - then;
	update(delta / 1000);
	render();
	then = now;
}
```

We get the modifier to send to update by dividing by 1000 (the number of milliseconds in one second).

```js
const update = (dt) => {
	hero.x -= hero.speed * dt;
}
```

Modifier is a time-based number based on 1. If exactly one second has passed, the value will be 1 and the hero's speed will be multiplied by 1. If one half of a second has passed, the value will be 0.5 and the hero will have moved half of his speed, and so forth. This function gets called so rapidly that the modifier value will typically be very low, but using this pattern will ensure that the hero will move the same speed no matter how fast the script is running.

## Merenje brzine

You typically aim for a target of 30-60 frames per second, which means game loop must fit within 33-16 milliseconds.

![](/images/razvoj-igara/petlja.gif)

![](/images/razvoj-igara/potrosnja.gif)

http://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
