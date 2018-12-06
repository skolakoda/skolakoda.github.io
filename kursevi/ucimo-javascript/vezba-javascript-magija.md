---
title: "Vežba: Javascript magija"
layout: lekcija-js-frontend
permalink: /vezba-javascript-magija
--- 

Napravi JavaScript animaciju koja crta krugove nasumične boje i veličine na ekranu.

## Pomoć

Prvo nacrtaj jedan krug na `canvas`-u da isprobaš kako radi. 

Zatim pomoću funkcije `setInterval` svakih 100-ak milisekundi crtaj krug na nasumičnim koordinatama. Nasumične koordinate treba da budu unutar visine i širine `canvas`-a.

Nakon toga, nasumično menjaj boju svakog kruga. Možeš imati pripremljen niz boja ili potpuno random.

Bonus: zaustavi animaciju kada iscrta određen broj krugova.

{:.html-ulaz.resenje}
```html
<canvas id="platno" width="800" height="600"></canvas>

<script>
const paleta = ['#701206', '#B36330', '#FFC861', '#96FFC9', '#276344']
const platno = document.getElementById('platno')
platno.style.backgroundColor = paleta[0]
const podloga = platno.getContext('2d')
podloga.lineWidth = 10

let brojac = 0

const crtaj = () => {
  const krugX = Math.random() * platno.width
  const krugY = Math.random() * platno.height
  const poluprecnik = Math.random() * 100
  const random = Math.ceil(Math.random() * (paleta.length - 1))

  podloga.beginPath()
  podloga.arc(krugX, krugY, poluprecnik, 0, 2 * Math.PI)
  podloga.closePath()
  podloga.strokeStyle = paleta[random]
  podloga.stroke()

  if (++brojac == 100) clearInterval(animacija)
}

const animacija = setInterval(crtaj, 100)
</script>
```