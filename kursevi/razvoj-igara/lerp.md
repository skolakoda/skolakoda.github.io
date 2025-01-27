---
title: Linearna interpolacija
layout: lekcija-razvoj-igara
permalink: /lerp
---

U igrama, često treba naći neku tačku između dve tačke. Linearna interpolacija služi baš za to. Koristi se na sledeći način:

```js
rezultat = LERP(A, B, t)
```

A i B su tačke, a t interpolacioni faktor, tj. procenat od 0 do 1, koji određuje relativnu poziciju između njih. 

- ako je t = 0, rezultat je na tački A. 
- ako je t = 1, rezultat je na tački B. 
- inače je negde između, zavisno od vrednosti t. 

Geometrijski, rezultat je tačka koji se nalazi t procenata duž linije između A i B. Matematički, LERP funkcija je samo ponderisani prosek dva ulazna vektora, sa težinama (1 – t) i t. Težine se uvek sabiraju do 1.

## Formula

Ako želimo interpolaciju između dve proste vrednosti (na primer temperature, visine i slično), možemo koristiti formulu:

```
(1 - t) * start + t * end
```

## Primer: lerp funkcija 

Linearna interpolacija vektora u Javaskriptu izgleda ovako:

{:.ulaz}
```js
function lerp(a, b, t) {
  return {
    x: (1 - t) * a.x + t * b.x,
    y: (1 - t) * a.y + t * b.y,
    z: (1 - t) * a.z + t * b.z
  }
}

// upotreba
const a = { x: 0, y: 0, z: 0 }
const b = { x: 10, y: 10, z: 10 }
const t = 0.5

const result = lerp(a, b, t)
console.log(result)
```

## Primer: lerp animacija

U igrama, LERP se koristi za pomeranje predmeta od tačke A do tačke B. To se postiže pozivanjem funkcije `lerp` u redovnim intervalima i postepenim povećanjem faktora interpolacije. Na primer:

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const start = { x: 0, y: 0 }
const end = { x: 300, y: 100 }
const duration = 2000
const startTime = Date.now()

const lerp = (a, b, t) => ({
  x: a.x * (1 - t) + b.x * t,
  y: a.y * (1 - t) + b.y * t
})

function animate() {
    const elapsed = Date.now() - startTime
    const t = Math.min(elapsed / duration, 1)
    const value = lerp(start, end, t)

    ctx.fillRect(value.x, value.y, 2, 2)

    if (t < 1) requestAnimationFrame(animate)
}

animate()
```