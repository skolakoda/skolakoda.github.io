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

## Skaliranje

![](/images/razvoj-igara/scaling-2D.png)

2D skaliranje:

```
kx 0
0  ky
```

3D skaliranje:
```
kx 0  0
0  ky 0
0  0  kz
```


Na primer, skaliranje koeficijentom 3 po x i y osi:

```
3 0
0 3
```

### Stiskanje (*squeeze*) ili neujednačeno skaliranje

<!-- ![](/images/razvoj-igara/squeeze.png) -->

Ako skaliramo ose neujednačeno, to se naziva stiskanjem. Na primer:

```
3  0
0  2
```

### Istezanje (*stretching*)

Istezanje je skaliranje samo jedne ose. Matrica za istezanje koeficijentom `k` duž x ose:

```
k 0
0 1
```

Matrica za istezanje koeficijentom `k` duž y ose:

```
1 0
0 k
```

## Rotacija

![](/images/razvoj-igara/rotacija.jpg)

2D rotacija oko ishodišta u smeru kazaljke:

```
[cos(θ), -sin(θ)]
[sin(θ),  cos(θ)]
```

2D rotacija oko ishodišta u smeru suprotnom od kazaljke:

```
[ cos(θ) sin(θ)]
[-sin(θ) cos(θ)]
```

### 3D rotacija:

3D rotacija oko x ose:

```
[1,      0,       0]
[0, cos(θ), -sin(θ)]
[0, sin(θ),  cos(θ)]
```

3D rotacija oko y ose:

```
[cos(θ),  0, sin(θ)]
[0,       1,      0]
[-sin(θ), 0, cos(θ)]
```

3D rotacija oko z ose:

```
[cos(θ), -sin(θ), 0]
[sin(θ),  cos(θ), 0]
[0,       0,      1]
```

### Pamtljive rotacije:

- rotacija 90°: (x, y) => (-y, x)
- rotacija 180°: (x, y) => (-x, -y)
- rotacija 270°: (x, y) => (y, -x)

**Objašnjenje**: kada je ugao 90° imamo:

- cos(90°) = 0
- sin(90°) = 1

Kada zamenimo vrednosti u matrici dobijemo:

```
R(90°) = [0, -1]
         [1,  0]
```

Množenje ove matrice sa (x, y) daje (-y, x).

## Odraz (refleksija)

![](/images/razvoj-igara/reflection.png)

Odraz preko x ose (horizontalna refleksija):

```
[1,  0]
[0, -1]
```

Odraz preko y ose (vertikalna refleksija):

```
[-1, 0]
[ 0, 1]
```

Odraz preko dijagonale y = x:

```
[ 0,  1]
[ 1,  0]
```

Odraz preko dijagonale y = -x:

```
[ 0, -1]
[-1,  0]
```

### 3D refleksija


Odraz preko Z ose (u ravni XY):

```
[1,  0,  0]
[0,  1,  0]
[0,  0, -1]
```

Odraz preko Y ose (u ravni XZ):

```
[1,  0,  0]
[0, -1,  0]
[0,  0,  1]
```

Odraz preko X ose (u ravni YZ):

```
[-1,  0,  0]
[0,  1,  0]
[0,  0,  1]
```

## Struganje (*shearing*)

![](/images/razvoj-igara/shearing.png)

Struganje paralelno x osi:

```
1 k
0 1
```

Struganje paralelno y osi:

```
1 0
k 1
```

Horizontalno striganje sa k = 1.5:

```
1 1.5
0 1
```

![](/images/razvoj-igara/VerticalShear.png)


## Obrtanje (inverzija)

Ako je matrica A:

```
a b
c d
```

Njena inverzija je:

![](/images/razvoj-igara/inverzija.gif)

`a * d - b * c` se naziva determinanta matrice.

## Identitet

Identitetska (ili jedinična) matrica je kvadratna matrica kojoj su brojevi na glavnoj dijagonali jedinice, a ostalo nule. Ona u množenju ne menja druge matrice, slično kao broj 1.

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

## Izvori

- [*Matrix Transformations*](https://vitaminac.github.io/Matrices-in-Computer-Graphics/)