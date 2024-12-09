---
title: Rekurzivno drvo
layout: lekcija-razvoj-igara
permalink: /rekurzivno-drvo
---

![](/images/razvoj-igara/drvo.png)

**Jedan od prostijih primera rekurzivne grafike je binarno stablo. Sastoji se od osnovnog obrasca, stabla, koji iz sebe reprodukuje dva umanjena.**

## Prost primer

Crtamo osnovnu granu koja se deli na dve manje pod određenim uglovima, ponavljajući proces dok ne postigne zadatu dubinu.

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

## Primer sa bojama

<iframe width="100%" height="600" src="//jsfiddle.net/mudroljub/x1bzmq7s/embedded/js,result/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<iframe width="100%" height="600" src="//jsfiddle.net/mudroljub/x1bzmq7s/embedded/result,js/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>
