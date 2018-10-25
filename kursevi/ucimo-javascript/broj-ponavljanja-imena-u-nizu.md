---
title: "Vežba: broj ponavljanja traženog imena u nizu"
layout: lekcija-js
permalink: /broj-ponavljanja-imena-u-nizu
---

Imamo niz imena:

```js
["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]
```

Zatraži od korisnika da unese neko ime, a zatim pronađi broj ponavljanja tog imena u nizu.

{:.ulaz.resenje}
```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]
const trazenoIme = prompt("Unesi ime")
let nadjeno = 0

for (let i = 0; i < imena.length; i++) {
  if (imena[i] === trazenoIme) nadjeno ++
}

if (nadjeno) 
  console.log("Trazeno ime je nadjeno: " + nadjeno + " puta")
else 
  console.log("Nije nadjeno.")
```