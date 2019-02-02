---
title: "Ključna reč <code>this</code> u Javascriptu"
layout: lekcija-js-frontend
permalink: /javascript-this
---

**U Javascriptu, ključna reč `this` unutar funkcije ukazuje na objekat kojem ona pripada. Ako funkcija nije prikačena ni za jedan objekat, onda pripada globalnom `window` objektu.**

Vrednost `this` se može dinamički menjati zavisno od toga kako je funkcija pozvana (na primer, događaji menjaju `this`). Leksički opseg važenja je opseg unutar koga je funkcija definisana, a dinamički unutar kog je pozvana. Pomoću metode `bind()` možemo fiksirati vrednost `this`, bez obzira kako se funkcija poziva.

Streličaste funkcije se bitno razlikuju od običnih jer nemaju svoj `this`.

## `this` u funkciji

Unutar samostalne funkcije, `this` označava globalni `window` objekat:

{:.ulaz}
```js
function klasicnaFunkcija(){
  console.log(this)
}

klasicnaFunkcija()
```

## `this` u metodi objekta

Unutar metode, `this` označava pripadajući objekat:

{:.ulaz}
```js
const radnik = {
  ime: 'Alija Sirotanović',
  predstaviSe () {
    console.log(this.ime)
  }
}

radnik.predstaviSe()
```

## `this` u povratnoj funkciji

{:.ulaz}
```js
const radnik = {
  ime: 'Alija Sirotanović',
  predstaviSe () {
    setTimeout(function() { // funkcija menja this u window
      console.log(this.ime)
    }, 100)
  }
}

radnik.predstaviSe()
```

Ovde je `this` promenjeno u `window`, a svojstvo `ime` je nedefinisano na `window` objektu.

## `this` u streličastoj povratnoj funkciji

Važan aspekt streličastih funkcija je da one nemaju `this`, pa vrednost `this` ostaje kao što je bila:

{:.ulaz}
```js
const radnik = {
  ime: 'Alija Sirotanović',
  predstaviSe () {
    setTimeout(() => { // ova funkcija ne menja this
      console.log(this.ime)
    }, 100)
  }
}

radnik.predstaviSe()
```

## `this` u povratnoj funkciji događaja

Kada događaj inicira povratnu funkciju, pregledač vezuje njen `this` za element koji je bio okidač. Na primer, ako je klik na dugme iniciralo funkciju, njen `this` će postati HTML element dugme.

{:.html-ulaz}
```html
<button id="dugme">Ne klikći</button>

<script>
const dugme = document.getElementById('dugme')

dugme.addEventListener('click', function() {
  alert(this)
})
</script>
```

## `this` u streličastoj povratnoj funkciji događaja

Streličasta funkcija nema sopstveni `this`. Kada imamo streličastu funkciju kao *callback*, događaj ne može vezati `this`, a vrednost `this` ostaje kao i da nema streličaste funkcije:

{:.html-ulaz}
```html
<button id="dugme">Proveri</button>

<script>
const dugme = document.getElementById('dugme')
dugme.addEventListener('click', () => {  
  alert(this)
})
</script>
```

Ovo može biti izvor problema ako očekujemo da `this` bude okinuti element.

## `this` u metodi prosleđenoj događaju

Promena vrednosti `this` u metodi prosleđenoj događaju može biti izvor problema, ako očekujemo da `this` ukazuje na objekat. U narednom primeru, `this` umesto vlasnika metode postaje HTML dugme:

{:.html-ulaz}
```html
<button id="dugme">Proveri</button>

<script>
const komponenta = {
  stanje: "zatvoreno",
  javiStanje() {
    alert(this.stanje)  // this unutar događaja postaje dugme, a this.stanje nedefinisano
  }
}

const dugme = document.getElementById('dugme')
dugme.addEventListener('click', komponenta.javiStanje)
</script>
```

Ovo je standardan problem u `React`-u, i zato koristimo `bind`, odnosno vezujemo vrednost `this` u metodi koja će biti prosleđena događaju:

```js
this.handleClick.bind(this, this.handleClick)
```

## `this` u funkciji u strogom modu

U strogom modu, `this` unutar funkcije više nije `window` nego `undefined`:

{:.ulaz}
```js
const klasicnaFunkcija = function(){
  "use strict"
  console.log(this)
}

klasicnaFunkcija()
```

U ES6 modulima podrazumevano važi strogi mod.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
