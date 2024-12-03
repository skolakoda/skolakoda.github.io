---
title: Transformacione matrice
layout: lekcija-razvoj-igara
permalink: /transformacione-matrice
---

**Transformacione matrice opisuju linearne transformacije.** One opisuju kako se predmeti pomeraju, rotiraju, skaliraju, reflektuju ili na drugi način preobražuju. Osnovne matrice su:

- translacija
- skaliranje
- rotacija
- odraz (refleksija)
- struganje (*shearing*)
- identitet  

Da bismo primenili neku transformaciju, biramo željenu matricu i množimo je sa originalnim vektorom da bismo dobili nov, transformisan vektor: 

```
transformisan vektor = vektor x transformaciona matrica
```

Transformacione matrice omogućuju lako kombinovanje transformacija množenjem matrica.

## Primer upotrebe

Primer osnovnih transformacija pomoću matrica u Three.js-u:

```js
const matrix = new THREE.Matrix4()

function translate(mesh, param) {
  matrix.set(
    1, 0, 0, param.x,
    0, 1, 0, param.y,
    0, 0, 1, param.z,
    0, 0, 0, 1
  )
  mesh.applyMatrix4(matrix)
}

function scale(mesh, param) {
  matrix.set(
    param.x, 0, 0, 0,
    0, param.y, 0, 0,
    0, 0, param.z, 0,
    0, 0, 0, 1
  )
  mesh.geometry.applyMatrix4(matrix)
}

function rotateY(mesh, param) {
  const cos = Math.cos(param.theta)
  const sin = Math.sin(param.theta)
  matrix.set(
    cos, 0, sin, 0,
    0, 1, 0, 0,
    -sin, 0, cos, 0,
    0, 0, 0, 1
  )
  mesh.geometry.applyMatrix4(matrix)
}
```
