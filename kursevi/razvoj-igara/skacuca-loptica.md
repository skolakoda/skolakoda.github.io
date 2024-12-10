---
title: Lopta koja odskače
layout: lekcija-razvoj-igara
permalink: /skacuca-loptica
---

**Zamislimo loptu u slobodnom padu, na koju djeluje samo gravitacija.** 

## Opis simulacije

Kada ispustimo loptu, njezina početna brzina je nula, ali ubrzanje nije – ono je jednako gravitaciji, što znači da će brzina lopte rasti. Za svaki frejm koristimo formulu za izračunavanje brzine u tom trenutku:

```
nova_brzina = stara_brzina + (0, -9.81) * dt
```

gde je:
- `dt` vremenski interval između dva frejma

Nakon što prepoznamo sudar, odnosno udarac lopte u tlo, loptica mijenja vektor brzine. U slučaju savršeno elastičnog sudara vektor brzine samo će promijeniti predznak.

## Implementacija u JS-u

U ovom primeru animiramo nekoliko loptica u slobodnom padu:

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const gravity = 0.981
const friction = 0.75
const balls = []
let lastTime = 0

class Ball {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`
        this.dy = 0
    }

    update(dt) {
        if (this.y + this.radius + this.dy > canvas.height)
            this.dy = -this.dy * friction
        else
            this.dy += gravity * dt
        this.y += this.dy
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }
}

function createBalls() {
    for (let i = 0; i < 10; i++) {
        const radius = Math.random() * 10 + 5
        const x = Math.random() * (canvas.width - radius * 2) + radius
        const y = Math.random() * canvas.height / 2 - canvas.height / 2
        balls.push(new Ball(x, y, radius))
    }
}

function animate(timestamp) {
    const deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    balls.forEach(ball => ball.update(deltaTime / 1000))
    balls.forEach(ball => ball.draw())
    requestAnimationFrame(animate)
}

createBalls()
animate(0)
```

Kao i u drugim primerima, možete menjati parametre da vidite razliku.

## Izvori

- Kristian Golubić, [*Primjena matematike u izradi računalnih igara*](https://urn.nsk.hr/urn:nbn:hr:217:939160) (diplomski rad), 2014.