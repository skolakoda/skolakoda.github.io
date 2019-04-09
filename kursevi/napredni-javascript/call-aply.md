---
title: Metodi call i apply
layout: lekcija-napredni-js
permalink: /javascript-call-aply
---

**[Objekti funkcije](/javascript-funkcija-kao-objekat) u Javascriptu imaju metode `call()` i `apply()`, koje omogućuju objektima da pozajme metode od drugih objekata i pozovu ih kao svoje.**

Ovo je lak i moćan način za ponovnu upotrebu koda. 

## Primer: objekat sa metodom

Na primer, objekat `ninja` ima metodu `pozdrav()`, koja koristi `this.nadimak` da se predstavi:

{:.ulaz}
```js
const ninja = {
  nadimak: 'Ninja',

  pozdrav(prijatelj) {
    console.log('Zdravo prijatelju ' + prijatelj + ', ja sam ' + this.nadimak)
  }
}

ninja.pozdrav('Betmen')
```

## `call`

Sad ćemo kreirati drugi objekat `guru`, koji sadrži svojstvo `nadimak`. On može pozvati metod `pozdrav()` objekta `ninja`, kao da je njegov. Ovo je moguće pomoću metoda `call()` sa funkcije objekta `pozdrav()`:

{:.ulaz}
```js
const ninja = {
  nadimak: 'Ninja',

  pozdrav(prijatelj) {
    console.log('Zdravo prijatelju ' + prijatelj + ', ja sam ' + this.nadimak)
  }
}

const guru = {
  nadimak: 'Javascript guru'
}

ninja.pozdrav('Betmen')
ninja.pozdrav.call(guru, 'Superhik')
```

{:.uokvireno}
**Šta se dođavalo desilo ovde?** Pozvali smo ugrađenu metodu `call()`, sa objekta funkcije `pozdrav()`, tako što smo prosledili dva parametra - objekat `guru` i strunu `'Superhik'`. Rezultat je da `this` sada ukazuje na objekat `guru`, a `this.nadimak` na `'Javascript guru'`.

## `apply`

Metod `apply()` radi isto što i `call()`, a razlika je u tome što se svi parametri nakon prvog prosleđuju kao niz. Sledeće dve linije koda su ekvivalentne:

```js
ninja.someMethod.apply(guru, ['a', 'b', 'c'])
ninja.someMethod.call(guru, 'a' , 'b', ' c' )
```

## Primer: pozajmljivanje map metode

`document.querySelectorAll` ne vraća niz (*array*) već listu čvorova (*nodeList*), koja nema `map` metodu. Međutim, možemo pozvati metodu niza `map` na listi čvorova, na sledeći način:

{:.ulaz}
```js
const pasusi = document.querySelectorAll("p")
Array.prototype.map.call(pasusi, x => x.innerText)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
