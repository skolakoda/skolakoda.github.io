---
title: 3D transformacione matrice
layout: lekcija-razvoj-igara
permalink: /3d-transformacione-matrice
---

## Rotacija

Matrice za rotaciju po x, y i z osi:

Za rotaciju oko x-ose:

```
1    0       0    0  
0   cosθ  -sinθ   0  
0   sinθ   cosθ   0  
0    0       0    1
```

Za rotaciju oko y-ose:

```
cosθ   0   sinθ   0  
0      1      0    0  
-sinθ  0   cosθ   0  
0      0      0    1
```

Za rotaciju oko z-ose:

```
cosθ  -sinθ   0    0  
sinθ   cosθ   0    0  
0      0      1    0  
0      0      0    1
```

## Primeri

Osnovne transformacije pomoću matrica u Three.js-u:

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
  mesh.verticesNeedUpdate = true
}

function scale(mesh, param) {
  matrix.set(
    param.x, 0, 0, 0,
    0, param.y, 0, 0,
    0, 0, param.z, 0,
    0, 0, 0, 1
  )
  mesh.geometry.applyMatrix4(matrix)
  mesh.geometry.verticesNeedUpdate = true
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
  mesh.geometry.verticesNeedUpdate = true
}
```
