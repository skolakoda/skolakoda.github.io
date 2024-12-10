---
title: Lopta koja odskače
layout: lekcija-razvoj-igara
permalink: /skacuca-loptica
---

**Zamislimo loptu u slobodnom padu, na koju djeluje samo gravitacija.** Kada je pustimo, početna brzina lopte je nula, ali njezino ubrzanje nije – ono je približno 9.81 m/s², što znači da će brzina lopte rasti. 

Za svaki frejm koristimo formulu za izračunavanje brzine u tom trenutku:

```
v(i+1)(t) = v(i) + t * (0, -9.81)
```

gde je:
- `t` vremenski interval između dva trenutka
- `i` indeks koji predstavlja trenutni korak
- `v(i)` brzina u datom trenutku
- `v(i+1)` brzina u narednom trenutku

## Implementacija u JS-u

U ovom primeru animiramo nekoliko loptica u slobodnom padu:

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const gravity = 0.2
const friction = 0.8
const balls = []

class Ball {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`
        this.dy = Math.random() * 2 + 2
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    update() {
        if (this.y + this.radius + this.dy > canvas.height)
            this.dy = -this.dy * friction
        else
            this.dy += gravity
        this.y += this.dy
        this.draw()
    }
}

function createBalls() {
    for (let i = 0; i < 10; i++) {
        const radius = Math.random() * 10 + 5
        const x = Math.random() * (canvas.width - radius * 2) + radius
        const y = Math.random() * canvas.height / 2
        balls.push(new Ball(x, y, radius))
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    balls.forEach(ball => ball.update())
    requestAnimationFrame(animate)
}

createBalls()
animate()
```

Kao i u drugim primerima, možete menjati parametre da vidite razliku.