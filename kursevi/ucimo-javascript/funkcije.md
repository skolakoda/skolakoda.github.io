---
title: Funkcije u Javascriptu
layout: lekcija-js
permalink: /javascript-funkcije
---

**Najprostije, [funkcija](/funkcije) je parče koda čije izvršenje odlažemo za kasnije.** 

Funkcije koje imaju ulaz i izlaz (*vraćaju vrednost*) nazivamo **funkcije u užem smislu**, dok one koje obavljaju niz radnji bez vraćanja vrednosti nazivamo **procedure**.

Osnovna karakteristika funkcije je da za jednu ulaznu vrednost vraća najviše jednu izlaznu vrednost.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MO9WKt7CRI8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Sintaksa

Najprostija sintaksa funkcije u Javascriptu je sledeća:

```js
function saberi(a, b){
  return a + b
}
```

Delovi funkcije su sledeći:
- ključna reč `function`
- naziv funkcije - u ovom slučaju `saberi`
- parametri funkcije - u ovom slučaju `a` i `b`. Funkcija može primati neograničen broj parametara ili nijedan.
- telo funkcije, odnosno blok koda unutra vitičastih zagrada
- naredba `return`. Funkcija uvek vraća vrednost. Ako eksplicitno ne vratimo vrednost, funkcija implicitno vraća `undefined`.

Funkcija može da vrati samo jednu vrednost. Ako je potrebno da vrati više vrednosti, može da vrati niz.

## Parametri vs. argumenti

Svaka funkcija, po potrebi, može imati parametre, koje koristimo na sledeći način:

{:.ulaz}
```js
function saberi(a, b){
  return a + b
}

console.log(saberi(2, 2))
console.log(saberi(432, 234))
```

Parametri i argumenti nisu isto, iako se često mešaju. Parametri se definišu zajedno sa funkcijom, dok se argumenti prosleđuju prilikom poziva. U prethodnom primeru, `a` i `b` parametri, a `2` i `2` argumenti.

Da pogledamo još jedan primer:

{:.ulaz}
```js
function pozdrav(ime){
  console.log("Zdravo " + ime)
}

pozdrav("Ana")
pozdrav("Marko")
```

U funkciji `pozdrav`, `ime` je parametar funkcije, a vrednosti `"Ana"` i `"Marko"` prosleđujemo kao argumente.

## Osnovne namene funkcije

Funkcija ima nekoliko osnovnih namena. Na primer:
- vrši obradu podataka
- odlaže izvršenje koda za kasnije
- pomaže da organizujemo kod u smislene celine
- omogućuje da više puta izvršimo isti blok koda, bez kopiranja

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
