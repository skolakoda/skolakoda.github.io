---
title: Matrica struganja
layout: lekcija-razvoj-igara
permalink: /matrica-struganja
---

![](/images/razvoj-igara/shearing.png)

**Matrica struganja (*shear*) služi za promenu oblika predmeta ili prostora tako da se njegova geometrija iskrivi u jednoj ili više osa, bez promene zapremine.**

Budući da utječe na kutove predmeta, ne koristi se često.

## 2D struganje

![](/images/razvoj-igara/shear.jpg)

Struganje duž x ose, naziva se vertikalnim, jer pomera y:

```
1 k
0 1
```

Struganje duž y ose, naziva se horizontalnim, jer pomera x:

```
1 0
k 1
```

## 3D struganje

Struganje duž x-ose (pomera y i z):

```  
1  ky  kz  
0   1   0  
0   0   1  
```

Struganje duž y-ose (pomera x i z):

```  
1   0   0  
kx  1  kz  
0   0   1  
```

Struganje duž z-ose (pomera x i y):

```  
1   0  0  
0   1  0  
kx  ky 1  
```
