---
title: Matrica rotacije
layout: lekcija-razvoj-igara
permalink: /matrica-rotacije
---

![](/images/razvoj-igara/rotacija.png)

**Matrica rotacije služi za rotiranje predmeta ili celokupnog vektorskog prostora oko određene tačke ili ose.**

## 2D rotacije

2D rotacija oko ishodišta u smeru kazaljke:

```
cos(θ), -sin(θ)
sin(θ),  cos(θ)
```

2D rotacija oko ishodišta u smeru suprotnom od kazaljke:

```
 cos(θ) sin(θ)
-sin(θ) cos(θ)
```

### Pamtljive 2D rotacije

```
rotacija 90°  = (x, y) => (-y, x)
rotacija 180° = (x, y) => (-x, -y)
rotacija 270° = (x, y) => (y, -x)
```

**Objašnjenje**: Za ugao od 90° u matrici rotacije imamo sledeće vrednosti:

```
cos(90°) = 0
sin(90°) = 1
```

Kada zamenimo vrednosti u matrici dobijemo:

```
R(90°) = 0, -1
         1,  0
```

Množenje ove matrice sa (x, y) daje (-y, x).

## 3D rotacije

3D rotacija oko x ose:

```
1,      0,       0
0, cos(θ), -sin(θ)
0, sin(θ),  cos(θ)
```

3D rotacija oko y ose:

```
cos(θ),  0, sin(θ)
0,       1,      0
-sin(θ), 0, cos(θ)
```

3D rotacija oko z ose:

```
cos(θ), -sin(θ), 0
sin(θ),  cos(θ), 0
0,       0,      1
```

### Homogeni zapis

Matrica za rotaciju oko x-ose:

```
1    0       0    0  
0   cosθ  -sinθ   0  
0   sinθ   cosθ   0  
0    0       0    1
```

Matrica za rotaciju oko y-ose:

```
cosθ   0   sinθ   0  
0      1      0    0  
-sinθ  0   cosθ   0  
0      0      0    1
```

Matrica za rotaciju oko z-ose:

```
cosθ  -sinθ   0    0  
sinθ   cosθ   0    0  
0      0      1    0  
0      0      0    1
```
