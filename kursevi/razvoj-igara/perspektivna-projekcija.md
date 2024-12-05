---
title: Perspektivna projekcija
layout: lekcija-razvoj-igara
permalink: /perspektivna-projekcija
---

<!-- ![](/images/razvoj-igara/perspektiva.gif) -->

<!-- ![perspektiva](/images/razvoj-igara/perspektiva.png) -->

![](/images/razvoj-igara/ViewFrustum.svg)

**3D svet se najbolje predstavlja projekcijom na 2D ravan uz primenu perspektive. Što je predmet dalje od kamere to deluje manje na slici, kao što i oči prirodno vide.**

Oblik 3D perspektivne projekcije se naziva **frustum**, odnosno piramida čiji je vrh odsečen pomoću ravni koja je paralelna njenoj osnovi.

Za razliku od paralelne projekcije, perspektivna projekcija se oslanja na koncept **fokalne tačke**. 

## Matrica projekcije

Najjednostavnija matrica perspektivne projekcije:

```
[ 1  0  0  0
  0  1  0  0
  0  0  1  0
  0  0 -1  0 ]
```

## 2D projekcija

![](/images/razvoj-igara/PerspDiagram.svg)

Da bismo razumeli 3D projekciju, razmotrimo 2D projekciju:

- P je tačka koju projektujemo 
- zelena linija je projekcijska ravan, na odstojanju Ez u odnosu na tačku oka (0,0,0)
- R je projektovana tačka
- imamo dva slična pravougaona trougla: manji (E, R i Ez) i veći (E, P i Pz) 

Da bismo našli položaj R, koristimo formulu:

```
R = P * (Ez / Pz)
```

Ova formula jednako radi u 2D i 3D. Perspektivna projekcija je samo primena ove formule na svaki vrh.

## Primer: 3D projekcija kocke

Implementacija perspektivna projekcije u kodu:

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// x, y, z
const vertices = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], // zadnja strana
  [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]      // prednja strana
]

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 0], // zadnja strana
  [4, 5], [5, 6], [6, 7], [7, 4], // prednja strana
  [0, 4], [1, 5], [2, 6], [3, 7]  // veze između
]

function project([x, y, z]) {
  const scale = 200 / (z + 4)
  return [canvas.width / 2 + x * scale, canvas.height / 2 - y * scale]
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  edges.forEach(([start, end]) => {
    const [x1, y1] = project(vertices[start])
    const [x2, y2] = project(vertices[end])
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  })
}

void function update() {
  vertices.forEach(v => {
    v[0] = v[0] * Math.cos(0.01) - v[2] * Math.sin(0.01)
    v[2] = v[0] * Math.sin(0.01) + v[2] * Math.cos(0.01)
  })
  draw()
  requestAnimationFrame(update)
}()
```

U primeru možete zameniti neke od vrednosti da vidite kako se ponaša.

## Objašnjenje

Perspektivna projekcija suštinski pomera vrhove prema oku, na osnovu njihovog položaja. Vrhovi koji su dalje u `z` pomeraju se manje nego oni koji su bliže oku. Formula za skaliranje:

```js
const scale = 200 / (z + 4) 
```

određuje koliki će predmet biti na ekranu, na osnovu njegove dubine (`z`). 200 je osnovni skalar. Kako `z` raste (predmet je dalje od posmatrača), veličina predmeta se smanjuje. Dodavanje `+ 4` sprečava da predmet postane previše mali ili beskonačno veliki kada je blizu posmatrača.

## Literatura

- Etay Meiri, [*Perspective projection*](https://ogldev.org/www/tutorial12/tutorial12.html)