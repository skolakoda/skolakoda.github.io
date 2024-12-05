---
title: Ortografska projekcija
layout: lekcija-razvoj-igara
permalink: /ortografska-projekcija
---

**Ortografska (paralelna) projekcija je vrlo jednostavna projekcija. Kada projektuje pod pravim uglom, ona jednostavno odbacuje koordinatu koja je normalna na površinu.**

Ljudsko oko ne vidi svet putem ortografske projekcije, jer joj nedostaje perspektiva.

## Matrice projekcije

Prosta ortografska projekcija na ravan može se definisati sledećom matricom, koja transformiše 3D koordinate u 2D tako da `z` koordinata nestaje:

```
[ 1 0 0  
  0 1 0  
  0 0 1 ]
```

U računarskoj grafici, često je praktičnije koristiti homogene koordinate, što omogućava da se projekcija lakše integriše sa drugim transformacijama (kao što su rotacija, translacija itd.). Gornja transformacija može se predstaviti pomoću homogenih koordinata:

```
[ 1 0 0 0  
  0 1 0 0  
  0 0 1 0  
  0 0 0 1 ]
```

## Elevacije

![](/images/razvoj-igara/elevations.gif)

Elevacije su prikazi objekta iz fiksiranih pravaca. Tri najčešće elevacija su:

- Prednja elevacija: prikaz objekta sa prednje strane.
- Bočna elevacija: prikaz objekta sa jedne bočne strane (levo ili desno).
- Gornja elevacija: prikaz objekta sa gornje strane.

Glave paralelne projekcije predstavljene funkcijama izgledaju ovako:

```js
prednjaStrana = (x,y,z) => (x,z)  
bocnaStrana = (x,y,z) => (y,z)  
gornjaStrana = (x,y,z) => (x,y)
```


## Primer: 3D projekcija kocke

Implementacija ortografske projekcije u kodu:

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
  return [canvas.width / 2 + x * 100, canvas.height / 2 - y * 100]
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
