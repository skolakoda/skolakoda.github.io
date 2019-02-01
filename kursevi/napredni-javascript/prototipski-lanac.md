---
title: Prototipski lanac
layout: lekcija-napredni-js
permalink: /prototipski-lanac
---

**Prvo ćemo ispitati kako svojstvo prototype funkcioniše, da bismo shvatili u čemu je razlika između sopstvenog svojstva i svojstva prototipa.**

Upotrebićemo konstruktor funkciju da napravimo novi objekat:

{:.ulaz}
```js
function Junak(ime, rasa) {
  this.ime = ime
  this.rasa = rasa
}

Junak.prototype.energija = 100

const gimli = new Junak('Gimli', 'patuljak')
console.log(gimli.ime)
console.log(gimli.energija)
```

Kada pokušamo da pristupimo nekom svojstvu objekta (na primer `gimli.ime`), JavaScript virtuelna mašina proverava sva svojstva objekta da bi pronašla svojstvo pod tim nazivom, nakon čega vraća njegovu vrednost.

Šta se dešava ako pokušamo da pristupimo svojstvu `energija`? JavaScript virtuelna mašina pregleda sva svojstva objekta `gimli` i ne nalazi svojstvo `energija`. Zatim, virtuelna mašina identifikuje `prototype` konstruktorske funkcije, i ako tu nađe svojstvo `energija`, vraća njegovu vrednost.

Vrednostima prototipa takođe možemo direktno pristupiti. Svaki objekat ima svoj­stvo `constructor`, koje predstavlja referencu na njegovu konstruktorsku funkciju. Na primer:

```js
gimli.constructor // Junak
```

Dakle, sinonim za `Junak.prototype.energija` bio bi:

```js
gimli.constructor.prototype.energija // 100
```

Pošto svaki objekat ima konstruktor, a `prototype` je objekat, on takođe mora da ima konstruktor, koji sadrži svojstvo `prototype`, što čini **prototipski lanac**. Na kraju prototipskog lanca je ugrađeni objekat `Object()`, element najvišeg nivoa. To znači da ćemo, ako upotrebimo metod `gimli.toString()` za objekat koji nema svoj metod `toString()`, na kraju dobiti ugrađeni metod objekta `toString()`:

```js
gimli.toString() // "[object Object]"
```

## Sopstveno svojstvo vs. svojstvo prototipa

Šta će se desiti ako objekat ima svoje svojstvo i ako prototip, takođe, ima svojstvo sa istim nazivom? Onda sopstveno ima prednost nad svojstvom prototipa. Na primer:

{:.ulaz}
```js
function Junak(ime) {
  this.ime = ime
}
Junak.prototype.ime = 'Spartak'

const legolas = new Junak('Legolas')
console.log(legolas.ime)
```

Možemo proveriti da li je svojstvo definisano, tako što ćemo upotrebiti metod `hasOwnProperty()`:

```js
legolas.hasOwnProperty('ime') // true
```

Ako izbrišemo svojstvo `ime` sa objekta, onda će se koristiti svojstvo prototipa:

```js
delete legolas.ime // true
legolas.ime // "Spartak"
legolas.hasOwnProperty('ime') // false
```

Možemo da koristimo metod `hasOwnProperty()` da bismo istražili odakle potiče određeno svojstvo. Na primer, možemo da vidimo odakle potiče metod `toString()`:

```js
legolas.toString() // "[object Object]"
legolas.hasOwnProperty('toString') // false
legolas.constructor.hasOwnProperty('toString') // false
legolas.constructor.prototype.hasOwnProperty('toString') // false
Object.hasOwnProperty('toString') // false
Object.prototype.hasOwnProperty('toString') // true
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
