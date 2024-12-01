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
const circle = {x:100, y:290, r:10}
const rect = {x:100, y:100, w:40, h:100}

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

http://jsfiddle.net/m1erickson/n6U8D/
