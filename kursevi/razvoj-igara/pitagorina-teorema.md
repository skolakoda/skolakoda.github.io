---
title: Pitagorina teorema
layout: lekcija-razvoj-igara
permalink: /pitagorina-teorema
---

![pitagorina-teorema-primena](/images/razvoj-igara/pitagorina-teorema-primena.jpg)

**Pitagorina teorema služi da izračunavanje nepoznate stranice u pravouglom trouglu.** Formula glasi:

```
a² + b² = c²
```

gde su `a` i `b` kraće stranice trougla a `c` je hipotenuza.

## Primer: rastojanje između dve tačke

Često u programiranju želimo da znamo rastojanje između dve tačke na ekranu.

![rastojanje](/images/razvoj-igara/rastojanje.png)

Najlakši način da to izračunamo je Pitagorina teorema.

![rastojanje-izmedju-tacaka](/images/razvoj-igara/distance.png)

Pravolinijska razdaljina između dve tačke se naziva Euklidskom razdaljinom. 

Primer u kodu:
```js
x = x1 - x2
y = y1 - y2
distance = Math.sqrt(a**2 + b**2)
```

3D primer uključuje i `z` osu:

```js
x = x2 - x1
y = y2 - y1
z = z2 - z1
distance = Math.sqrt(x**2 + y**2 + z**2)
```
