---
title: Igra života
layout: lekcija-algoritmi
permalink: /igra-zivota
---

**Igra života (*game of life*) je simulacija života koju je razvio matematičar John Horton Conway.** 

Simulacija je zasnovana na prostim pravilima koja opisuju ponašanje ćelija. Svaka ćelija može biti živa ili mrtva, a njen status zavisi od broja živih suseda. Pravila su sledeća: 

- Živa ćelija sa 2 ili 3 živih suseda preživljava.
- Mrtva ćelija sa tačno 3 živih suseda oživljava.
- U svim drugim slučajevima, ćelija umire ili ostaje mrtva.

Simulacija se ponavlja u ciklusima, a prikaz se ažurira na osnovu stanja. Iako nema direktnu praktičnu primenu, algoritam je popularan kao simulacija u računarstvu i umetnosti.

## Implementacija u JS-u

U ovoj implementaciji početna matrica sa ćelijama se kreira slučajno.

{:.ulaz}
```js
const canvas = document.getElementById('c')
const ctx = canvas.getContext('2d')
ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)

const ceilSize = 8
const gridSize = 64
const cWidth = ceilSize * gridSize
const cHeight = ceilSize * gridSize

function draw(matrix) {
  ctx.clearRect(0, 0, cWidth, cHeight)
  matrix.forEach((row, x) => row.forEach((cell, y) => {
    ctx.beginPath()
    ctx.rect(x * ceilSize, y * ceilSize, ceilSize, ceilSize)
    if (cell) ctx.fill()
  }))
}

function countNeighbors(x, y, matrix) {
  let neighbors = 0
  for (let h = -1; h <= 1; h++)
    for (let v = -1; v <= 1; v++) {
      if (h === 0 && v === 0) continue
      if (matrix[x + h]?.[y + v]) neighbors++
    }

  return neighbors
}

function update(matrix) {
  const newMatrix = matrix.map((row, x) => row.map((cell, y) => {
    const neighbors = countNeighbors(x, y, matrix)
    return neighbors === 3 || (cell && neighbors === 2)
  }))
  draw(newMatrix)
  setTimeout(() => update(newMatrix), 100)
}

const matrix = Array(gridSize).fill().map(() =>
  Array(gridSize).fill().map(() => Math.random() >= 0.8)
)
update(matrix)
```
