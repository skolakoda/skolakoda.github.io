---
title: Proširenje ugrađenih objekata
layout: lekcija-napredni-js
permalink: /prosirenje-ugradjenih-objekata
---

Objekti kreirani pomoću ugrađenih konstruktorskih funkcija, kao što su `Array`, `String`, `Object` i `Function`, mogu da se prošire pomoću prototipa. 

## Primer: proširenje `Array` prototipa

Na primer, možemo da dodamo nov metod u `Array` prototip, koji postaje dostupan svim nizovima:

{:.ulaz}
```js
Array.prototype.contains = function (element) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (this[i] === element) {
      return true
    }
  }
  return false;
}

const boje = ['crvena', 'zelena', 'plava']
console.log(boje.contains('crvena'))
console.log(boje.contains('zuta'))
```

Ova implementacija je dobra i jednostavna, ali već postoji ista metoda pod nazivom `includes` :)

## Primer: proširenje `String` prototipa

Zamislimo da program često mora da prikazuje reči unazad. Možemo `String` prototipu da dodamo metod `reverse()`, koji već postoji za nizove:

{:.ulaz}
```js
String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

console.log("Ana voli Milovana".reverse())
```

Ovde koristimo metod `split()` da bi kreirali niz iz strune, a zatim na njemu koristimo metod `reverse()`, koji ga obrće. Dobijeni niz se vraća nazad u strunu pomoću metoda `join()`.

## Prednosti i mane proširenja ugrađenih objekata

Proširivanje ugrađenih objekata pomoću prototipa je moćna tehnika, koju možemo koristiti da bismo oblikovali Javascript na način koji želimo. Ipak, modifikovanje osnovnih objekata može da zbuni kolege programere i dovede do neočekivanih grešaka.

Jezik Javascript se brzo razvija kako bi držao korak sa webom. Ono što je danas nedostajući metod koji smo dodali prototipu, već sutra je ugrađeni metod. Posebno, šta raditi ako naš program koristi sopstveni metod, drugačiji od novog ugrađenog metoda?

Najzastupljeniji način proširivanja ugrađenih svojstava je dodavanje
podrške za nove standardne metode u stare pregledače. Ova proširenja su poznata kao *polifili* ili podloške. 

Kada proširujemo prototip, potrebno je proveriti da li metod postoji pre nego što ga dodamo. U sledećem primeru dodajemo metod `trim()` za strune, koji nedo­staje u starim pregledačima:

{:.ulaz}
```js
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '')
  }
}

console.log("  zdravo ".trim())
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
