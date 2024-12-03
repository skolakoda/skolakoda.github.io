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

## Matrica identiteta

Identitetska (ili jedinična) matrica je matrica kojoj su na glavnoj dijagonali jedinice, a ostalo nule. Ona u množenju ne menja druge matrice, slično kao broj 1.

2D identitetska matrica:
```
1 0
0 1
```

3D identitetska matrica:
```
1 0 0
0 1 0
0 0 1
```
