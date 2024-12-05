---
title: Mapiranje pločica
layout: lekcija-razvoj-igara
permalink: /mapiranje-plocica
---

**Mapiranje pločica (*tile mapping*) je tehnika kompresije koja nam omogućava da kreiramo lepe svetove u igri uz malo memorije. Mapiranje pločica se koristilo u bezbroj klasičnih igara i koristi se i danas.**

Ključna ideja je da podelimo nivo igre na skup pločica. Svaka pločica je kvadrat, koji kombinujemo sa drugim pločicama da bismo nacrtali nivo. Na pločice obično mapiramo teksture.

Istu teksturu možemo ponavljati, ali je čuvamo u memoriji samo jednom.

## Primer

{:.ulaz}
```js
const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

const tileSize = 50
const imgTileSize = 96 // veličina pločice u fajlu

const levelMap = [
  [3, 1, 1, 1, 1, 3],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 2, 2, 0, 1],
  [1, 0, 2, 2, 0, 1],
  [1, 1, 1, 1, 1, 1]
]

const drawMap = () => {
  for (let i = 0; i < levelMap.length; i++)
    for (let j = 0; j < levelMap[i].length; j++) {
      const tileType = levelMap[i][j]
      const x = (tileType % 4) * imgTileSize  // 4 pločice po redu u fajlu
      const y = Math.floor(tileType / 4) * imgTileSize
      ctx.drawImage(tiles, x, y, imgTileSize, imgTileSize, j * tileSize, i * tileSize, tileSize, tileSize)
  }
}

const tiles = new Image()
tiles.src = '/images/razvoj-igara/tilemap.png'
tiles.onload = drawMap
```

## Literatura

- [*An Introduction to Creating a Tile Map Engine*](https://gamedevelopment.tutsplus.com/tutorials/an-introduction-to-creating-a-tile-map-engine--gamedev-10900)
