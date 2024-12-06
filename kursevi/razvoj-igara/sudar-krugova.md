---
title: Otkrivanje sudara krugom
layout: lekcija-razvoj-igara
permalink: /sudar-krugova
---

![kolizija-kruznica](/images/razvoj-igara/kolizija-kruznica.png)

**Otkrivanje sudara krugom (ili sferom u 3D) se vrši tako što se centar kruga postavi u centar predmeta, pa se meri rastojanje poluprečnikom.** Ova metoda je neprecizna i ne odgovara za sve predmete.

Bitna prednost krugova je što jednako dobro rade i sa rotiranim predmetima.

## Primer

Provera seku li se dva kruga je jednostavna: proverimo je li zbir dva poluprečnika veći od udaljenosti dva centra. 

Razdaljina dve koordinate se računa pomoću Pitagorine teoreme (`d = Math.sqrt(a**2 + b**2)`). Važna optimizacija koju možemo uraditi je uklanjanje korenovanja:

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class Circle {
  constructor(position, radius = 30, color = 'black') {
    this.position = position
    this.radius = radius
    this.color = color
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}

function intersect(a, b) {
  const r = (a.radius + b.radius) ** 2
  const dx = a.position.x - b.position.x
  const dy = a.position.y - b.position.y
  return r > dx ** 2 + dy ** 2
}

const circle1 = new Circle({ x: 100, y: 100 })
const circle2 = new Circle({ x: 200, y: 200 })

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  circle1.color = circle2.color = intersect(circle1, circle2) ? 'red' : 'black'
  circle1.draw()
  circle2.draw()
  requestAnimationFrame(draw)
}

draw()

canvas.addEventListener('mousemove', e => {
  circle1.position.x = e.offsetX
  circle1.position.y = e.offsetY
})
```
