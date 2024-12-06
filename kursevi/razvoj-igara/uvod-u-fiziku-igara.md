---
title: Uvod u fiziku igara
layout: lekcija-razvoj-igara
permalink: /uvod-u-fiziku-igara
---

**Da bismo imali "ukus" fizike u igrama, ne moramo imati simulaciju fizike, dovoljno je primeniti prostu detekciju sudara.**

Međutim, za razvijen fizički sistem u igri potrebno je mnogo više od toga, uključujući osnovno poznavanje zakona fizike, sila i vektora, čemu ćemo se posvetiti u narednim poglavljima.

## Ukus fizike u JS-u

U ovom primeru kreiramo nekoliko loptica, animiramo njihovo kretanje naniže, a kada stignu do tla menjamo im smer.

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const gravity = 0.45
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