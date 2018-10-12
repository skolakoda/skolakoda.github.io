---
title: Menjanje nepromenljivih u Javaskriptu
layout: lekcija-js
author: damjan
permalink: /menjanje-nepromenljivih-u-javaskriptu
---

Konstantama se ne može iznova dodeliti vrednost (dodela se vrši znakom `=`), ali ***složene nepromenljive vrednosti se mogu menjati***.

Dakle ako imamo neki složeni tip, poput niza ili objekta, njemu možemo dodavati nove članove, odnosno svojstva. On će biti poput čoveka, koji se stalno menja (dobija nova svojstva, gubi stara), ali je neraskidivo vezan svojim identitetom.

{:.ulaz}
```js
const covek = {
  ime: 'Azra',
  visina: 175
}

covek.ime = 'Mirko'

console.log(covek.ime)
```

Za razliku od složenih tipova, proste nepromenljive vrednosti, poput broja i teksta, se ne mogu menjati. One su kao najmanje nedeljive čestice i ne postoji svojstvo koje im može biti pridodato ili uzeto.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iQ62GxboWgY" frameborder="0" allowfullscreen></iframe>
