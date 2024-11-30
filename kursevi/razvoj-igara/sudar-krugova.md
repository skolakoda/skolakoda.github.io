---
title: Otkrivanje sudara krugom
layout: lekcija-razvoj-igara
permalink: /sudar-krugova
---

![kolizija-kruznica](/images/razvoj-igara/kolizija-kruznica.png)

**Otkrivanje sudara krugom (ili sferom u 3D) se vrši tako što se centar kruga postavi u centar predmeta, pa se meri rastojanje poluprečnikom.** Ova metoda je neprecizna i ne odgovara za sve predmete.

Bitna prednost krugova je što jednako dobro rade i sa rotiranim predmetima.

## Primer

Krug je predstavljen poluprečnikom i tačkom. Provera seku li se dva kruga je jednostavna: saberemo poluprečnike dva kruga i proverimo je li zbir veći od udaljenosti centara. 

Razdaljina dve koordinate se računa pomoću Pitagorine teoreme (`d = Math.sqrt(a**2 + b**2)`). Važna optimizacija koju možemo uraditi je uklanjanje korenovanja:

{:.ulaz}
```js
class Circle {
  constructor(radius, position) {
    this.radius = radius
    this.position = position
  }
}

function intersectUnoptimized(a, b) {
  const r = a.radius + b.radius
  const dx = a.position.x - b.position.x
  const dy = a.position.y - b.position.y
  return r > Math.sqrt(dx ** 2 + dy ** 2)
}

function intersect(a, b) {
  const r = (a.radius + b.radius) ** 2
  const dx = a.position.x - b.position.x
  const dy = a.position.y - b.position.y
  return r > dx ** 2 + dy ** 2
}

const circle1 = new Circle(5, { x: 0, y: 0 })
const circle2 = new Circle(3, { x: 6, y: 0 })

console.log(intersectUnoptimized(circle1, circle2))
console.log(intersect(circle1, circle2))
```
