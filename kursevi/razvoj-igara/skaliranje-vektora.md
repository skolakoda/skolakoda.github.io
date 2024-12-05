---
title: Skaliranje vektora
layout: lekcija-razvoj-igara
permalink: /skaliranje-vektora
---

**Kada množimo vektor sa skalarom, zapravo skaliramo njegovu dužinu, dok smer ostaje nepromenjen.**

Množenje vektora `v` skalarom `s` vršimo tako što sve pojedinačne komponente vektora množimo skalarom:

```js
s * v = (s * v.x, s * v.y, s * v.z)
```

U kodu:

```js
function skaliraj(v, s) {
  return {
    x: v.x * s,
    y: v.y * s,
    z: v.z * s
  }
}
```

## Skaliranje vektora u igrama

U igrama često množimo vektor skalarom. Na primer, možemo simulirati otpor vazduha množeći brzinu igrača sa 0.9 pri svakom kadru.

## Obrtanje smera

Skaliranjem sa -1 vektor obrće smer, odnosno menja glavu i rep. Na primer:

```
v = (3, -2, 5)
```

pomnožen sa -1 postaje:  

```
-v = (-3, 2, -5)
```
