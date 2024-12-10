---
title: Glavna petlja
layout: lekcija-razvoj-igara
permalink: /glavna-petlja
---

![game-loop](/images/razvoj-igara/game-loop-fixed.png)

**Za razliku od običnih programa, igra nakon pokretanja neprestano ide, čak iako igrač ne radi ništa. Zato u svim igrama postoji glavna petlja ili petlja igre. *Game loop*** je centralni obrazac u razvoju igara.

Ključna ideja petlje igre je da konstantno obrađuje korisnički unos, ali bez čekanja. Svi predmeti u igri se nastavljaju kretati i bez korisnikovog unosa.

## Struktura glavne petlje

Svaki put kada se izvrši petlja, program čita korisnički unos, ažurira stanje igre i prikazuje ga korisniku, odnosno iscrtava na ekranu. Ovako izgleda osnovna struktura glavne petlje:

```js
const glavnaPetlja = () => {
  handleInput()
  update()
  render()
}
```

Svaka petlja igre je drugačija i prilagođena za konkretnu igru.

## Prost primer

Ovako izgleda prost primer glavne petlje (bez korisničkog unosa):

{:.ulaz}
```js
const canvas = document.getElementById('canvas')
const cx = canvas.getContext('2d')

let bX = 30, bY = 30, mX = 10, mY = 20

function render() {
   cx.clearRect(0, 0, canvas.width, canvas.height)
   cx.beginPath()
   cx.fillStyle = 'red'
   cx.arc(bX, bY, 20, 0, Math.PI * 2)
   cx.fill()
}

function update() {
   if (bX >= canvas.width || bX <= 0) mX *= -1
   if (bY >= canvas.height || bY <= 0) mY *= -1
   bX += mX
   bY += mY
}

function gameLoop() {
   update()
   render()
}

setInterval(gameLoop, 33)
```

U `render` fazi ide i `audio`, tj. muzika i zvučni efekti. Bitno je da `render()` ide nakon `update()`, da bi ekran oslikavao stanje igre. U `update` fazi obavljaju se sva računanja vezana za logiku igre, na primer:

```js
const update = () => {
  runAI()
  moveEnemies()
  resolveCollisions()
}
```

Za igre sa fizikom, glavna petlja će izgledati ovako:

```js
const glavnaPetlja = () => {
  input()
  update()
  simulatePhysics()
  render()
}
```

Sve ove operacije se dešavaju u jednoj ogromnoj petlji koja ne traje duže od 33 ms po iteraciji (30 puta u sekundi), ili 16.6 ms po iteraciji (60 puta u sekundi).

## Podela glavne petlje

U pravim igrama glavne petlje teže da postanu prilično velike. Velika glavna petlja može biti podeljena na dve petlje: `update` i `render`.

### Update

Update petlja može izgledati ovako u pseudokodu:

```
Player update
   Sense Player input
   Compute restrictions
   Update player state
World update
   Passive elements
      Pre-select active zone for engine use
   Logic-based elements
      Sort according to relevance
      Execute control mechanism
      Update state
   AI based elements
      Sort according to relevance
      Sense internal state and goals
      Sense restrictions
      Decision engine
      Update world
```

### Render

Render loop može izgledati ovako:

```
World presentation
   Select visible subset (graphics)
      Clip
      Cull
      Occlude
   Select resolution
   Pack geometry
   Render world geometry
   Select audible sound sources (sound)
      Pack audio data
      Send to audio hardware
NPC presentation
   Select visible subset
   Animate
   Pack
   Render NPC data
Player presentation
   Animate
   Pack
   Render
```

Jedan od problema sa renderovanjem je taj što CPU većinu vremena provodi čekajući da video kartica obradi ono što joj je poslato. Odvajanjem render sistema na zasebnu nit, oslobađamo CPU dok GPU radi svoju magiju.

## Literatura

- Zvonimir Šimunović, [*Programiranje video igara u biblioteci SFML*](https://zir.nsk.hr/islandora/object/pmf%3A8448) (diplomski rad), 2019.
