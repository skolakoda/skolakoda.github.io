---
title: Otkrivanje tačke u telu
layout: lekcija-razvoj-igara
permalink: /tacka-u-telu
---

**Otkrivanje da li se tačka nalazi unutar nekog tela je problem koji se često sreće u računarskoj grafici.**

## Tačka u sferi

Jedna od prostijih provera je da li se tačka nalazi unutar sfere:

{:.ulaz}
```js
const sphere = { center: { x: 100, y: 100, z: 0 }, radius: 50 }
const point1 = { x: 100, y: 80, z: 2 }
const point2 = { x: 60, y: 50, z: 0 }

function isPointInsideSphere(point, sphere) {
    const dx = point.x - sphere.center.x
    const dy = point.y - sphere.center.y
    const dz = point.z - sphere.center.z
    return dx**2 + dy**2 + dz**2 < sphere.radius**2
}

// 2D vizuelizacija
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.arc(sphere.center.x, sphere.center.y, sphere.radius, 0, Math.PI * 2)
ctx.stroke()

ctx.fillStyle = 'red'
ctx.fillRect(point1.x, point1.y, 4, 4)

ctx.fillStyle = 'green'
ctx.fillRect(point2.x, point2.y, 4, 4)

console.log(isPointInsideSphere(point1, sphere))
console.log(isPointInsideSphere(point2, sphere))
```

## Tačka u 3D kutiji

Provera da li se tačka nalazi unutar kutije je prilično jednostavna — potrebno je samo proveriti da li koordinate tačke padaju unutar okvira, razmatrajući svaku osu zasebno.

{:.ulaz}
```js
function isPointInsideBox(point, box) {
  return (point.x >= box.minX && point.x <= box.maxX) &&
         (point.y >= box.minY && point.y <= box.maxY) &&
         (point.z >= box.minZ && point.z <= box.maxZ)
}

const point = { x: 5, y: 5, z: 5 };
const box = { minX: 0, maxX: 10, minY: 0, maxY: 10, minZ: 0, maxZ: 10 }

console.log(isPointInsideBox(point, box))

const point2 = { x: 15, y: 5, z: 5 }
console.log(isPointInsideBox(point2, box))
```

## Tačka u poligonu

Otkrivanje tačke u poligonu (*point in polygon*) je problem koji se često sreće u računarskoj grafici, a suština je određivanje da li se neka tačka nalazi na površini obuhvaćenoj mnogouglom. 

U računarskoj grafici postoje dva uobičajena pristupa ovom problemu: bacanje zraka i sabiranje uglova.

### Bacanje zraka (ray casting)

Metod zraka polazi od činjenice da zrak pri svakom presecanju granice mnogougla ili ulazi ili izlazi iz njega:
* Neparan broj preseka: tačka je u mnogouglu
* Paran broj preseka: tačka je van mnogougla

Algoritam Jordanove krive (*Jordan curve theorem*) može biti opisan sledećim pseudokodom:

```
bool isInside(point p, polygon P)
choose an arbitrary direction
build ray r based on p and the direction
initialize count to zero
for each edge
      test ray-segment
      if crossed
            increase count
      end if
end for
return count is odd
```

Cena algoritma je `O(n)`. To znači da se algoritam izvršava proporcionalno broju ivica u poligonu, jer za svaku ivicu treba proveriti da li preseca zamišljeni zrak iz tačke koju testiramo. Za 3D, prošireni algoritam je složeniji, ali i dalje ima linearnu složenost u odnosu na broj objekata u prostoru.