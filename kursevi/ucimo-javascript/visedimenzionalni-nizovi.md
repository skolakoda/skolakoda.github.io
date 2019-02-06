---
title: Višedimenzionalni nizovi
layout: lekcija-js
permalink: /javascript-visedimenzionalni-nizovi
---

**Višedimenzionalni nizovi su nizovi koji sadrže druge nizove. Najčešći su dvodimenzinalni nizovi, koji se nazivaju matrice ili tabele.**

Ovako pravimo niz od nekoliko elemenata, koji su takođe nizovi:

```js
const matrica = [
  [1, 2, 3], 
  [4, 5, 6],
  [7, 8, 9]
]
```

Prvi element pod indeksom `0` je prvi niz `[1, 2, 3]`. Da bismo pristupili elementu u ugnežđenom nizu, koristimo dva para uglastih zagrada sa indeksima, na sledeći način:

{:.ulaz}
```js
const matrica = [
  [1, 2, 3], 
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matrica[0][0])  // prvi element prvog niza
console.log(matrica[1][2])  // treci element drugog niza
```

Kada pristupamo matrici, prve zagrade predstavljaju red, a druge kolonu.