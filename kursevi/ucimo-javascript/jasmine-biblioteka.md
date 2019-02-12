---
title: Jasmine biblioteka
layout: lekcija-js
permalink: /jasmine-biblioteka
---

***Jasmine* je popularna biblioteka za testiranje u Javascriptu.**

Nalazi se na sledećoj adresi: [jasmine.github.io](https://jasmine.github.io/)

## Primer

Testiraćemo jednostavnu funkciju koja prima string i vraća string sa svim velikim slovima:

```js
function capitalizeName(name) {
  return name.toUpperCase()
}
```

Koristićemo *Jasmine* kao okruženje. Naša specifikacija testa je sledeća:

```js
describe("Test String Utilities", function() {
  it("converts to capital", function() {
    expect(capitalizeName("albert")).toBe("ALBERT")
  })
  it("can handle undefined", function() {
    expect(capitalizeName(undefined)).toBeUndefined()
  })
})
```

## Objašnjenje

*Jasmine* biblioteka ima razne funkcije, između ostalog `describe`, `it` i `expect`.

`describe()` opisuje jedinicu koda koju testiramo. 

Unutar nje pozivamo funkciju `it()`, kojoj prosleđujemo opis specifikacije i funkciju koja proverava stconstni test slučaj. Test slučajeve formulišemo pomoću `expect()` funkcije, kojom izražavamo očekivanja da će program raditi po specifikaciji. Vrednosti koje navodimo kao deo oče­kivanja se uparuju pomoću uparivača.

Ako su sva očekivanja tačna, znači da je program napisan u skladu sa specifikacijom. U našem primeru, funkcija neće zadovoljiti drugo očekivanje.

## *Jasmine* uparivači

*Jasmine* sadrži mnoštvo uparivača (*matchers*) koji pokrivaju standardne slučajeve. Neki od njih su:

### `toBe`

Proverava da li su dve vrednosti identične (`===`). Na primer:

```js
const poz = 'zdravo'

expect(poz).toBe('zdravo')
```

### `toEqual`

Proverava da li su dve vrednosti jednake, koristeći dubinsko poređenje.

```js
const a = {value: 1}
const b = {value: 1}

expect(a).toBe(b) // failure
expect(a).toEqual(b) // success
```

### `not` 

Možemo da negiramo uparivanje pomoću prefiksa `not`. Na primer:

```js
expect(1).not.toEqual(2)
```

će negirati uparivanje koje je izvršio uparivač `toEqual`.

### `toContain` 

Proverava da li je element član niza. Na primer:

```js
expect([1, 2, 3]).toContain(3)
```

### `toBeDefined` i `toBeUndefined` 

Ova dva uparivača su korisna kada se proverava da li je promenljiva `undefined` ili ne.

### `toBeNull` 

Proverava da li je vrednost `null`.

### `toBeGreaterThan` i `toBeLessThan` 

Ovi uparivači vrše poređenje. Na primer:

```js
expect("a").toBeLessThan("b")
```

Za kompletan spisak uparivača vidi *Jasmine* [dokumentaciju](https://jasmine.github.io/).

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
