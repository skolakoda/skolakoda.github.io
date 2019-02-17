---
title: Funkcije u Javascriptu
layout: lekcija-js
permalink: /javascript-funkcije
---

**Funkcije u Javascriptu, kao i u ostalim jezicima, imaju nekoliko osnovnih namena.**

Prvo, funkcija odlaže izvršenje koda za kasnije. Pored toga, funkcije nam pomažu da organizujemo kod u smislene celine, kao i da više puta izvršimo isti blok koda, bez kopiranja.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MO9WKt7CRI8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Sintaksa funkcije

Najprostija sintaksa JS funkcije je sledeća:

```js
function ime(parametri){
  // telo funkcije, koje sadrži izraze ili naredbe
}
```

Dodavanje parametara funkciji je opciono. 

## Parametri funkcije

Svaka funkcija, po potrebi, može imati parametre, koje koristimo na sledeći način:

{:.ulaz}
```js
function pozdrav(ime){
  console.log("Zdravo " + ime)
}

pozdrav("Ana")
pozdrav("Marko")
```

{:.uokvireno.ideja}
U gornjem primeru, `ime` je parametar funkcije, a vrednosti `"Ana"` i `"Marko"` prosleđujemo kao argumente.

## Osnovne namene funkcije

### Obrada podataka

Na primer, želimo da istu operaciju primenimo na različitim ulaznim podacima:

{:.ulaz}
```js
function dupliraj(x) {
  return x * 2
}

console.log(dupliraj(4))
console.log(dupliraj(16))
```

### Odlaganje izvršenja

Sledeći kod, ako je napisan direktno u fajlu, će se odmah izvršiti:

{:.ulaz}
```js
console.log("Zdravo Svete")
```

S druge strane, ako ga stavimo u funkciju, neće odmah biti izvršen:

{:.ulaz}
```js
function pozdrav(){
  console.log("Zdravo Svete")
}
```

Blok koda unutar funkcije će biti izvršen tek kada pozovemo funkciju po imenu, na sledeći način: `pozdrav()`.


### Neponavljanje koda

Kopiranje koda je veoma loša praksa. Funkcije, između ostalog, služe da bismo isti blok koda mogli da izvršimo više puta, bez kopiranja.

Na primer, recimo da imamo sledeću listu naredbi za ispis:

{:.ulaz}
```js
console.log("Zdravo Svete")
console.log("Danas učimo Javascript")
console.log("Nećemo gubiti vreme sa glupostima")
```

Ako bismo hteli da ih ispišemo više puta, mogli bismo da prekopiramo sve redove:

{:.ulaz}
```js
console.log("Zdravo Svete")
console.log("Danas učimo Javascript")
console.log("Nećemo gubiti vreme sa glupostima")

console.log("Zdravo Svete")
console.log("Danas učimo Javascript")
console.log("Nećemo gubiti vreme sa glupostima")

console.log("Zdravo Svete")
console.log("Danas učimo Javascript")
console.log("Nećemo gubiti vreme sa glupostima")
```

S druge strane, pravi način da ovo rešimo je upotreba funkcije, koju možemo pozivati više puta:

{:.ulaz}
```js
function ispisi() {
  console.log("Zdravo Svete")
  console.log("Danas učimo Javascript")
  console.log("Nećemo gubiti vreme sa glupostima")
}

ispisi()
ispisi()
ispisi()
```
