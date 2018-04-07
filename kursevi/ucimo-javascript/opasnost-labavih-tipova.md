---
title: Opasnost labavih tipova
layout: lekcija-js
permalink: /opasnost-labavih-tipova
---

Budući da je JavaScript slabo tipiziran jezik, ista funkcija može primati različite tipove podataka. Na primer, naredna funkcija se može legitimno pozivati sa brojevima i sa znacima:

{:.ulaz}
```js
const saberi = (x, y) => x + y

console.log(saberi(3, 4))
console.log(saberi('Zdravo', 'Svete'))
```

Jedini zahtev je da operacija ima smisla za odabrani tip podataka.

No, možemo dobiti i neočekivane rezultate. Ako upotrebimo funkciju za sabiranje korisničkog unosa, dobićemo neočekivani rezultat, jer JavaScript interpretira ulazne podatke kao strune te ih ulančava:

{:.ulaz}
```js
const saberi = (x, y) => x + y

x = prompt('Unesi prvi broj') // unesi 2
y = prompt('Unesi drugi broj') // unesi 3
console.log(saberi(x, y))
// rezultat je 23
```

Da bismo osigurali očekivani rezultat, moramo primeniti eksplicitnu konverziju tipova:

```js
saberi(Number(x), Number(y))
```
