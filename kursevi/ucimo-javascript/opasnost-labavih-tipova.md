---
title: Opasnost labavih tipova
layout: lekcija-js-frontend
permalink: /opasnost-labavih-tipova
---

**Budući da je JavaScript slabo tipiziran jezik, ista funkcija može primati različite tipove podataka.**

Na primer, naredna funkcija se može legitimno pozivati sa brojevima i sa znacima:

{:.ulaz}
```js
const saberi = (x, y) => x + y

console.log(saberi(3, 4))
console.log(saberi('Zdravo', 'Svete'))
```

Jedini zahtev je da operacija ima smisla za odabrani tip podataka.

## Meštanje struna i brojeva

No, možemo dobiti i neočekivane rezultate. Ako pokušamo da saberemo brojeve koje smo dobili putem korisničkog unosa, dobićemo nadovezane strune, jer korisnički unos je uvek string:

{:.ulaz}
```js
const saberi = (x, y) => x + y

x = prompt('Unesi prvi broj') // unesi 2
y = prompt('Unesi drugi broj') // unesi 3

console.log(saberi(x, y)) // rezultat je 23
```

Da bismo osigurali očekivani rezultat, moramo primeniti eksplicitnu konverziju tipova:

```js
saberi(Number(x), Number(y))
```

## Meštanje struna i bulovih vrednosti

Ako vrednosti `true` ili `false` stavimo pod navodnike, postaje stringovi. Na primer:

{:.ulaz}
```js
var bul = "true"

console.log(typeof bul)
```

Ovo se može desiti kada selektujemo bulove atribute HTML elemenata, koji nam mogu doći kao string.