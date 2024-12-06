---
title: Rekurzivno drvo
layout: lekcija-razvoj-igara
permalink: /rekurzivno-drvo
---

![](/images/razvoj-igara/drvo.png)

**Crtamo fraktalno drvo gde se svaka grana deli na dve manje pod određenim uglovima, ponavljajući proces dok ne postigne zadatu dubinu.**

## Primer u JS-u

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
canvas.height = canvas.width = 600
const ctx = canvas.getContext('2d')
const rad = Math.PI / 180

function drawTree(x, y, angle, depth, lw) {
  if (!depth) return

  ctx.lineWidth = lw
  const x2 = x + Math.cos(angle * rad) * depth * 10
  const y2 = y + Math.sin(angle * rad) * depth * 10
  ctx.stroke(new Path2D(`M${x},${y}L${x2},${y2}`))
  drawTree(x2, y2, angle - 20, depth - 1, lw / 2)
  drawTree(x2, y2, angle + 20, depth - 1, lw / 2)
}

drawTree(300, 500, -90, 9, 20)
```
