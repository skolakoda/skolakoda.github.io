---
title: Glavna petlja (<i>main loop</i>)
layout: lekcija-razvoj-igara
permalink: /glavna-petlja
---

![game-loop](/images/razvoj-igara/game-loop-fixed.png)

**Za razliku od običnih programa, igra nakon pokretanja, čak i ako igrač ništa ne radi, neprestano ide. Zato u svim igrama postoji glavna petlja ili *game loop*.** 

Tipična glavna petlja će primiti i obraditi unos igrača, ažurirati logiku igre i iscrtati scenu. Svaka glavna petlja je drugačija i prilagođena za konkretnu igru.

## Prost primer

Ovako izgleda najprostiji primer glavne petlje:

```js
const glavnaPetlja = () => {
  handleInput()
  update()
  render()
}
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
