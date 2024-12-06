---
title: Rekurzivni krugovi
layout: lekcija-razvoj-igara
permalink: /rekurzivni-krugovi
---

Crtamo rekurzivne koncentrične krugove na canvas-u. Krećemo iz centra sa velikim poluprečnikom, a svaki sledeći krug čini 75% prethodnika, sve dok ne postane manji od 2 piksela.

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
canvas.height = canvas.width = document.body.clientWidth * .66
const ctx = canvas.getContext('2d')

const drawCircle = (x, y, r) => {
  if (r < 2) return

  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.stroke()
  drawCircle(x, y, r * 0.75)
}

drawCircle(canvas.width/2, canvas.height/2, canvas.width/2)
```

## Modifikovan primer

Kod rekurzije, uz blagu modifikaciju dobijamo potpuno drugi efekat. Ovde počinjemo sa centralnim krugom, a potom rekurzivno crtamo dva upola manja kruga, levo i desno od centra. 

Ako početni poluprečnik promenimo na veću veličini dobijamo još zanimljiviji efekat.

{:.ulaz}
```js
const canvas = document.getElementById('canvas2')
canvas.height = canvas.width = document.body.clientWidth * .66
const ctx = canvas.getContext('2d')

const drawCircle = (x, y, r) => {
  if (r < 2) return

  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.stroke()
  drawCircle(x + r/2, y, r/2)
  drawCircle(x - r/2, y, r/2)
}

drawCircle(canvas.width/2, canvas.height/2, 2000)
```
