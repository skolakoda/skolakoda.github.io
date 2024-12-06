---
title: Otkrivanje sudara kutijom
layout: lekcija-razvoj-igara
permalink: /sudar-kutija
---

![](/images/razvoj-igara/aabb_test.png)

**Otkrivanje sudara kutijom je osnovni metod za 2D i 3D predmete, prost za primenu i jeftin za računanje, sve dok nema rotacije.**

Granična kutija poravnata po osi (*axis aligned bounding box*, skraćeno AABB) je pravougaonik kojim omeđimo predmet igre radi otkrivanja sudara. Sudar dve nerotirane kutije može se proveriti samo logičkim poređenjima, dok rotirane kutije zahtevaju trigonometrijske operacije, koje su sporije.

Postoji nekoliko različitih načina da se predstavi AABB. Najprostije je pamtiti gornji levi i donji desni ugao. Da utvrdimo je li se dve kutije seku, koristimo teoremu razdvajajuće ose (*separating axis theorem*), koja kaže ako možemo povući liniju koja razdvaja dva poligona, oni se ne sudaraju. 

## Primer: detekcija sudara kutija

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class Box {
  constructor(position, width = 60, height = 40, color = 'black') {
    this.position = position
    this.width = width
    this.height = height
    this.color = color
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

function intersect(a, b) {
  return (
    a.position.x < b.position.x + b.width &&
    a.position.x + a.width > b.position.x &&
    a.position.y < b.position.y + b.height &&
    a.position.y + a.height > b.position.y
  )
}

const box1 = new Box({ x: 100, y: 100 })
const box2 = new Box({ x: 200, y: 200 })

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  box1.color = box2.color = intersect(box1, box2) ? 'red' : 'black'
  box1.draw()
  box2.draw()
}

draw()

canvas.addEventListener('mousemove', e => {
  box1.position.x = e.offsetX - box1.width / 2
  box1.position.y = e.offsetY - box1.height / 2
  draw()
})
```

Ova logika se lako može proširiti na 3D dodavanjem još jedne ose. 

## Prednosti i mane

Iako jednostavan, ovaj metod je za neka tela neprecizan i dovodi do lažnih sudara:

![](/images/razvoj-igara/lazna-kolizija.png)

## Sistem sudara sa više kutija

Sistem sudara sa više kutija (*bounding box collision with multiple boxes*) nije skup i lako se implementira. Razbijamo *sprite* na manje pravougaonike i prolazimo kroz njih da vidi seku li pravougaonik koji nas zanima.

![](/images/razvoj-igara/multiple-boxes.png)
