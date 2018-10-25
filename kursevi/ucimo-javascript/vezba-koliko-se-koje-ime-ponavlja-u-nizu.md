---
title: "Vežba: broj ponavljanja svakog imena u nizu"
layout: lekcija-js
permalink: /vezba-koliko-se-koje-ime-ponavlja-u-nizu
---

Dat je niz imena:

```js
["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]
```

Pronađi koliko se koje ime ponavlja u nizu.

Savet: problem se lako može rešiti pomoću rečnika kao strukture podataka.

Bonus: na ovaj način možeš analizirati frekventnost reči u nekom tekstu, knjizi, vestima.

{:.ulaz.resenje}
```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]

const recnik = {}

imena.map(ime => {
  if (recnik[ime]) recnik[ime]++
  else recnik[ime] = 1
})

for (const ime in recnik) console.log(ime, recnik[ime])
```
