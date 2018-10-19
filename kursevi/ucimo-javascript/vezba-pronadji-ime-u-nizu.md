---
title: "Vežba: pronađi ime u nizu"
layout: lekcija-js
permalink: /vezba-pronadji-ime-u-nizu
---

Dat je niz imena:

```js
["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]
```

Traži od korisnika da unese ime, i proveri da li se ono nalazi u nizu.

## Rešenje

Rešenje uz pomoć zastavice:

{:.ulaz.resenje}
```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]
const trazenoIme = prompt("Unesi ime")
let nadjeno = false

for (let i = 0; i < imena.length; i++) {
  if (imena[i] === trazenoIme) nadjeno = true
}

if (nadjeno) 
  console.log("Nasli smo ime: " + trazenoIme)
else 
  console.log("Nismo nasli ime")
```

Bonus: optimizuj rešenje da obustavi iteraciju nakon što nađe ime.