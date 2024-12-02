---
title: Konačni automat
layout: lekcija-razvoj-igara
permalink: /konacni-automat
---

![](/images/razvoj-igara/fsm_enemy_brain.png)

**Konačni automat ili mašina konačnih stanja (*finite-state machine*, FSM) je logički model koji se često koristi za ponašanje neprijatelja u igrama. Sastoji se od konačnog broja stanja i akcija koje ih povezuju.**

Kada pravimo automat konačnih stanja, stanja znamo unapred (jer su konačna). Samo jedno stanje može biti aktivno, pa mašina mora preći iz jednog stanja u drugo da bi izvršila različite radnje.

Velika prednost mašine stanja je ponovna upotreba za različita stvorenja. Na primer, stanja poput patroliranja ili napada, a uz određenu parametrizaciju, možemo koristiti za razne vrste stvorenja.

## Delovi

Konačni automat čine:
- **stanja** u kojima mašina može biti; istovremeno može biti u samo jednom.
- **ulazi** odnosno događaji koji se šalju mašini.
- **prelazi** koji su povezani sa ulazom i ukazuju na sledeće stanje.

![siege-tank](/images/razvoj-igara/siege-tank.jpg)

<small>U igri Starcraft, *siege tenk* ne može direktno preći iz opsade u kretanja. Prvo mora promeniti stanje.</small>

## Simuliranje neodređenosti

Većina igara je deterministička, što znači da znamo kako će neprijatelji reagovati. Ako ne vide igrača, patroliraju. Ako ga vide, napadaju. 

Možemo simulirati nepredvidivu logiku tako što ćemo promeniti stanje nasumično. Na primer, neprijatelj nekad može upotrebiti bombu a ne pištolj, ili odmah napasti ne čekajući alarm... Ova nasumičnost čini mašinu stanja nedeterminističkom, što znači da znamo sva stanja, ali ne i puteve između njih.

## Dijagram stanja

![dva-stanja](/images/razvoj-igara/dva-stanja.jpeg)

Konačni automat se najčešće prikazuje dijagramom stanja, odnosno grafikonom gde su čvorovi stanja, a ivice prelazi. Na slici imamo prostu mašinu sa:
- 2 stanja (upaljeno, ugašeno)
- 2 prelaza (paljenje, gašenje)

U realnim sistemima neretko imamo na desetine stanja koje je gotovo nemoguće pratiti bez odgovarajućeg grafičkog prikaza.

## Tablica prelaza stanja

![tablica-stanja](/images/razvoj-igara/tablica-stanja.png)

Mašina stanja takođe može biti predstavljena tabelarno. Tablica prelaza stanja (*state transition table*) služi za precizno definisanje konačnih stanja i njihovih promena zavisno od ulaznih događaja. Pomaže u dizajniranju složenih scenarija, kao što su igre i interfejsi sa višestrukim stanjima.

## Primer proste implementacije

![](/images/koncepti/oop/Basic-States.webp)

Primer proste implementacije mašine stanja u JS-u. Imamo neprijatelja koji može biti u dva stanja: `Patrol` i `Chase`. Neprijatelj inicijalno patrolira. Ako mu se igrač približi, prelazi u poteru:

{:.ulaz}
```js
class PatrolState {
  constructor(actor) {
    this.actor = actor
  }

  enter() {
    console.log('Neprijatelj prelazi u stanje patroliranja.')
  }

  update(player) {
    console.log('Neprijatelj patrolira...')
    const distance = Math.hypot(this.actor.x - player.x, this.actor.y - player.y)
    if (distance < 5) this.actor.changeState(new ChaseState(this.actor))
  }
}

class ChaseState {
  constructor(actor) {
    this.actor = actor
  }

  enter() {
    console.log('Neprijatelj prelazi u stanje potere.')
  }

  update(player) {
    console.log('Neprijatelj juri igrača!')
    const distance = Math.hypot(this.actor.x - player.x, this.actor.y - player.y)
    if (distance >= 5) this.actor.changeState(new PatrolState(this.actor))
  }
}

class Enemy {
  constructor() {
    this.state = new PatrolState(this)
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  changeState(newState) {
    this.state = newState
    this.state.enter()
  }

  update(player) {
    this.state.update(player)
  }
}

// primer
const player = { x: 0, y: 0 }
const enemy = new Enemy()
enemy.setPosition(10, 10)

console.log('Početno stanje:')
enemy.update(player)

player.x = player.y = 8
console.log('\nIgrač se približio:')
enemy.update(player)

player.x = player.y = 20
console.log('\nIgrač se udaljio:')
enemy.update(player)
```

## Literatura

- Fernando Bevilacqua, [*Finite-State Machines: Theory and Implementation*](https://code.tutsplus.com/finite-state-machines-theory-and-implementation--gamedev-11867t)
- David Lafreniere, [*State Machine Design in C++*](https://www.drdobbs.com/cpp/state-machine-design-in-c/184401236)
