---
title: Uzajamna rekurzija
layout: lekcija-algoritmi
permalink: /uzajamna-rekurzija
image: /images/koncepti/algoritmi/uzajamna-rekurzija.gif
---

![]({{page.image}})

***Rekurzivne funkcije obično pozivaju same sebe. Pored klasične rekurzije, postoji i mogućnost da se funkcije međusobno pozivaju i tako stvaraju uzajamnu rekurziju.***

Na ovaj način fukcija ne poziva samu sebe direktno, nego posredno preko druge funkcije.

## Primer: paran ili neparan broj

Naredni primer ilustruje dve funkcije koje se koriste u ispitivanju da li je parametar `n` (koji mora biti prirodan broj) paran broj.

{:.ulaz}
```js
function jelParan(n) {
  if (n==0) return true
  return jelNeparan(n-1)
}

function jelNeparan(n) {
  if (n==0) return false
  return jelParan(n-1)
}

console.log(jelParan(5))
```

Ovde primenjena logika je sledeća: broj je paran ako je broj-1 neparan. I ovde imamo trivijalni slučaj za broj=0, koja će u funkciji `jelParan` vratiti tačno (jer je 0 paran broj), a u funkciji `jelNeparan` netačno.
