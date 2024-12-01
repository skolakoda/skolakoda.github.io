---
title: Otkrivanje sudara kruga i kutije
layout: lekcija-razvoj-igara
permalink: /sudar-kruga-i-kutije
---

Testiranje sudara na uglu pravougaonika:  
* Zamislite liniju koja ide od centra pravougaonika do bilo kog njegovog ugla.  
* Produžite tu liniju za dužinu poluprečnika kruga.  
* Ako je centar unutar te linije, sudaraju se na tom uglu pravougaonika.  

Evo celog koda:

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const circle = {x:80, y:90, r:10}
const rect = {x:100, y:30, w:40, h:100}

ctx.fillStyle = 'red'
ctx.fillRect(rect.x, rect.y, rect.w, rect.h)

ctx.beginPath()
ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
ctx.fillStyle = 'blue'
ctx.fill()

function rectCircleColliding(circle,rect){
    const distX = Math.abs(circle.x - rect.x-rect.w/2)
    const distY = Math.abs(circle.y - rect.y-rect.h/2)

    if (distX > (rect.w/2 + circle.r)) return false
    if (distY > (rect.h/2 + circle.r)) return false

    if (distX <= rect.w/2) return true
    if (distY <= rect.h/2) return true

    const dx = distX - rect.w/2
    const dy = distY - rect.h/2
    return (dx*dx + dy*dy <= circle.r * circle.r)
}

console.log(rectCircleColliding(circle, rect))
```
