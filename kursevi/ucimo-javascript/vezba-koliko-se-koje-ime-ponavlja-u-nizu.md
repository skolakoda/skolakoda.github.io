---
title: "Vežba: koliko se koje ime ponavlja u nizu"
layout: lekcija-js
permalink: /vezba-koliko-se-koje-ime-ponavlja-u-nizu
---

Dat je niz imena:

```js
["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]
```

Pronađi koliko se koje ime ponavlja u nizu.

{:.ulaz.resenje}
```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]

const recnik = {}

imena.map(ime => {
  if (recnik[ime]) recnik[ime]++
  else recnik[ime] = 1
})

console.log(recnik)
```
