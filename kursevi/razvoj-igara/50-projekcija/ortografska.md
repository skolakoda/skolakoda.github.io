---
title: Ortografska projekcija
layout: lekcija-razvoj-igara
permalink: /ortografska-projekcija
---

**Ortografska (paralelna) projekcija je vrlo jednostavna projekcija. Kada projektuje pod pravim uglom, ona jednostavno odbacuje koordinatu koja je normalna na površinu.**

Ljudsko oko ne vidi svet putem ortografske projekcije, jer joj nedostaje perspektiva.

## Matrice projekcije

Prosta ortografska projekcija na ravan može se definisati sledećom matricom, koja transformiše 3D koordinate u 2D tako da `z` koordinata nestaje:

```
[ 1 0 0  
  0 1 0  
  0 0 1 ]
```

U računarskoj grafici, često je praktičnije koristiti homogene koordinate, što omogućava da se projekcija lakše integriše sa drugim transformacijama (kao što su rotacija, translacija itd.). Gornja transformacija može se predstaviti pomoću homogenih koordinata:

```
[ 1 0 0 0  
  0 1 0 0  
  0 0 1 0  
  0 0 0 1 ]
```

## Elevacije

![](/images/razvoj-igara/elevations.gif)

Elevacije su prikazi objekta iz fiksiranih pravaca. Tri najčešće elevacija su:

- Prednja elevacija: prikaz objekta sa prednje strane.
- Bočna elevacija: prikaz objekta sa jedne bočne strane (levo ili desno).
- Gornja elevacija: prikaz objekta sa gornje strane.

Glave paralelne projekcije predstavljene funkcijama izgledaju ovako:

```js
prednjaStrana = (x,y,z) => (x,z)  
bocnaStrana = (x,y,z) => (y,z)  
gornjaStrana = (x,y,z) => (x,y)
```
