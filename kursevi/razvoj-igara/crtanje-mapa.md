---
title: Crtanje mapa
layout: lekcija-razvoj-igara
permalink: /crtanje-mapa
---

**U igricama često pravimo mape. Najstarija i još uvek validna tehnika je pomoću matrica.**

## Model mape

Postavljanje proste mape koja razlikuje dve vrste terena (npr. `0` - zemlju i `1` - zid) u skoro svim jezicima izgleda ovako:

```js
[
  [1,1,1,1,1,1],
  [1,0,0,0,0,1],
  [1,0,0,0,0,1],
  [1,0,0,0,0,1],
  [1,0,0,0,0,1],
  [1,1,1,1,1,1]
]
```

Kada se oslika na ekranu, mapa izgleda ovako:

![](/images/razvoj-igara/2d-level-simple.png)

Možemo dodati i druge brojeve za zidine i kule po uglovima:

```js
[
  [3,2,2,2,2,3],
  [2,0,0,0,0,2],
  [2,0,0,0,0,2],
  [2,0,0,0,0,2],
  [2,0,0,0,0,2],
  [3,1,1,1,1,3]
]
```

## Primer: crtanje mape

Iscrtavanje mape u JS kodu:

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const tileSize = 50
const levelMap = [
  [3, 2, 2, 2, 2, 3],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [3, 1, 1, 1, 1, 3]
]
const colors = ['green', 'saddlebrown', 'lightgray', 'gray']

const drawRect = (x, y, color) => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, tileSize, tileSize)
    ctx.strokeStyle = 'black'
    ctx.strokeRect(x, y, tileSize, tileSize)
}

for (let i = 0; i < levelMap.length; i++) {
  for (let j = 0; j < levelMap[i].length; j++) {
    drawRect(j * tileSize, i * tileSize, colors[levelMap[i][j]])
  }
}
```

Ako je veličina pločice 50px, veličina cele mape je 300x300px. 

## Izometrijska projekcija

![](/images/razvoj-igara/isometric_grid.jpg)

Mapu je najlakše nacrtati iz ptičje perspektive, ali takođe možemo crtati bilo koju drugu projekciju, uključujući izometrijsku (odozgo postrance).

U video igrama, izometrijska projekcija je paralelna projekcija sa odnosom piksela 2:1 (širina je dvostruko veća od visine), gde je ugao gledanja blago rotiran, čime se stvara trodimenzionalni efekat.

Za izometrijsku perspektivu, petlja iz prethodnog primera ostaje, samo se menja render funkcija. Potrebno je izračunati izometrijske koordinate unutar petlje, umesto kartezijanskih.

## Primer: crtanje izometrijske mape

{:.ulaz}
```js
const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

const tileWidth = 50
const tileHeight = tileWidth / 2

const levelMap = [
  [3, 2, 2, 2, 2, 3],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [3, 1, 1, 1, 1, 3]
]
const colors = ['green', 'saddlebrown', 'lightgray', 'gray']

const drawRect = (x, y, color) => {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + tileWidth / 2, y + tileHeight)
    ctx.lineTo(x, y + tileHeight * 2)
    ctx.lineTo(x - tileWidth / 2, y + tileHeight)
    ctx.closePath()
    ctx.fill()
    ctx.strokeStyle = 'black'
    ctx.stroke()
}

for (let i = 0; i < levelMap.length; i++) {
  for (let j = 0; j < levelMap[i].length; j++) {
    const x = (j - i) * tileWidth / 2 + 150 // shiftX
    const y = (j + i) * tileHeight / 2
    drawRect(x, y, colors[levelMap[i][j]])
  }
}
```

## Primer izometrijske igre

Izometrijska mapa sa svega nekoliko različitih tipova terena može izgledati ovako:

![](/images/razvoj-igara/tile-map.png)
