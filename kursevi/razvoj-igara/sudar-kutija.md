---
title: Otkrivanje sudara kutijom
layout: lekcija-razvoj-igara
permalink: /sudar-kutija
---

![](/images/razvoj-igara/aabb_test.png)

**Otkrivanje sudara kutijom je osnovni metod za 2D i 3D predmete, prost za primenu i jeftin za računanje, sve dok nema rotacije.**

Granična kutija poravnata po osi (*axis aligned bounding box*, skraćeno AABB) je pravougaonik kojim omeđimo predmet igre radi otkrivanja sudara. Sudar dve nerotirane kutije može se proveriti samo logičkim poređenjima, dok rotirane kutije zahtevaju trigonometrijske operacije, koje su sporije.

Postoji nekoliko različitih načina da se predstavi AABB. Najprostije je pamtiti gornji levi i donji desni ugao. Da utvrdimo je li se dve kutije seku, koristimo teoremu razdvajajuće ose (*separating axis theorem*), koja kaže ako možemo povući liniju koja razdvaja dva poligona, oni se ne sudaraju. 

## Primer: otkrivanje sudara kutijom 2D

{:.ulaz}
```js
class AABB {
  constructor(min, max) {
    this.min = min
    this.max = max
  }
}

function AABBvsAABB(a, b) {
  if (a.max.x < b.min.x || a.min.x > b.max.x) return false
  if (a.max.y < b.min.y || a.min.y > b.max.y) return false

  return true
}

const box1 = new AABB({ x: 0, y: 0 }, { x: 5, y: 5 })
const box2 = new AABB({ x: 3, y: 3 }, { x: 8, y: 8 })
const box3 = new AABB({ x: 6, y: 6 }, { x: 10, y: 10 })

console.log(AABBvsAABB(box1, box2))
console.log(AABBvsAABB(box1, box3))
```

## Primer: otkrivanje sudara kutijom 3D

{:.ulaz}
```js
class AABB {
  constructor(min, max) {
    this.min = min
    this.max = max
  }
}

function AABBvsAABB(a, b) {
  if (a.max.x < b.min.x || a.min.x > b.max.x) return false
  if (a.max.y < b.min.y || a.min.y > b.max.y) return false
  if (a.max.z < b.min.z || a.min.z > b.max.z) return false

  return true
}

const box1 = new AABB({ x: 0, y: 0, z: 0 }, { x: 5, y: 5, z: 5 })
const box2 = new AABB({ x: 3, y: 3, z: 3 }, { x: 8, y: 8, z: 8 })
const box3 = new AABB({ x: 6, y: 6, z: 6 }, { x: 10, y: 10, z: 10 })

console.log(AABBvsAABB(box1, box2))
console.log(AABBvsAABB(box1, box3))
```

Iako jednostavan, ovaj metod je neprecizan i dovodi do lažnih sudara:

![](/images/razvoj-igara/lazna-kolizija.png)

## Sistem sudara sa više kutija

Sistem sudara sa više kutija (*bounding box collision with multiple boxes*) nije skup i lako se implementira. Razbijamo *sprite* na manje pravougaonike i prolazimo kroz njih da vidi seku li pravougaonik koji nas zanima.

![](/images/razvoj-igara/multiple-boxes.png)
