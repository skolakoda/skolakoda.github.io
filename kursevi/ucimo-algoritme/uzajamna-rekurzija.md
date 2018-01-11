---
title: Uzajamna rekurzija
layout: lekcija-algoritmi
permalink: /uzajamna-rekurzija
image: /images/koncepti/algoritmi/uzajamna-rekurzija.gif
---

![]({{page.image}})

***Rekurzivne funkcije obično pozivaju same sebe. Postoji i mogućnost da se funkcije međusobno pozivaju i tako stvaraju uzajamnu rekurziju.***

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

Funkcija `jelParan` rešava problem za vrednost `n` kada je `n > 0` primenom funkcije `jelNeparan` za vrednost `n − 1`. Funkcija `jelNeparan` za vrednost parametra `n` kada je `n > 0` poziva funkciju `jelParan` za vrednost `n − 1`.
