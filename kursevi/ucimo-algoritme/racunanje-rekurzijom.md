---
title: Računanje rekurzijom
layout: lekcija-algoritmi
permalink: /racunanje-rekurzijom
---

**Sva računanja koja možemo obaviti iterativno, možemo i rekurzivno.** 

Već smo obradili neke poznate primere:
- [Euklidov algoritam](/euklidov-algoritam)
- [Rusko množenje](/rusko-mnozenje)
- [Naivno množenje](/naivno-mnozenje)

## Primer: rekurzivno stepenovanje

{:.ulaz}
```js
function stepenuj(x, n) {
  if (n == 0) return 1
  return x * stepenuj(x, n - 1)
}

console.log(stepenuj(2, 8))
```

## Primer: rekurzivno sabiranje od 1 do n

{:.ulaz}
```js
function saberiDo(n) {
    if (n == 1) return 1
    return n + saberiDo(n - 1)
}

console.log(saberiDo(10))
```

## Primer: sabiranje cifara broja

Funkcija sabira cifre rekurzivno. Kada je `x` 0, vraća 0. Inače, uzima poslednju cifru (`x % 10`) i poziva samu sebe sa brojem bez poslednje cifre (`Math.floor(x / 10)`), sabirajući te cifre dok ne dođe do 0.

{:.ulaz}
```js
function saberiCifre(x) {
  if (x == 0) return 0
  return x % 10 + saberiCifre(Math.floor(x / 10))
}

console.log(saberiCifre (11231))
```
