---
title: Skalarni proizvod vektora (dot proizvod)
layout: lekcija-razvoj-igara
permalink: /dot-proizvod
---
![](/images/razvoj-igara/dotsimple.jpg)

**Skalarni proizvod vektora (ili dot proizvod) je operacija koja za množenje dva vektora vraća realnu vrednost.** Proporcionalan je tome koliko se smer dva vektora poklapa. Kada vektori pokazuju u istom smeru dot proizvod je pozitivan, kada su normalni je nula, a kada su suprotnog smera negativan. 

Dot proizvod se piše pomoću tačke:  

```
u • v
```

Računa se na sledeći način:

```js
(u.x * v.x) + (u.y * v.y) + (u.z * v.z)
```

Skalarni proizvod dva jedinična vektora daje kosinus ugla između njih. Ako su vektori paralelni, cos(0°) = 1, a ako su vektori ortogonalni, cos(90°) = 0.

## Dot proizvod u igrama

Recimo da imamo stražara na poziciji `G` (1,3) koji gleda u smeru `D` (1,1), sa vidnim poljem od 180 stepeni. Imamo heroja koji se šunja na poziciji `H` (3,2). Je li on u vidnom polju stražara? 

Da bismo to otkrili, prvo računamo vektor smera `V` od stražara do heroja:

```
V = H-G = (3,2)-(1,3) 
        = (3-1, 2-3) 
        = (2, -1)
```

Konačno, računamo dot proizvod `D` (pogled stražara) i `V` (smer od stražara ka heroju), da saznamo njihovo poklapanje:

```
D•V = (1,1)•(2,-1) 
    = 1*2 + 1*-1 
    = 2-1 
    = 1
```

Pošto je rezultat pozitivan, heroj je u vidnom polju stražara!
