---
title: Podrazumevani izvoz i uvoz
layout: lekcija-napredni-js
permalink: /podrazumevani-izvoz-i-uvoz
---

Unutar fajla možemo imati najviše jedan podrazumevani izvoz. Sintaksa je sledeća:

```js
// ---------------- User.js ----------------

export default class User {
  // telo klase
}
```

Podrazumevani izvoz se u drugom fajlu uvozi bez vitičastih zagrada:

```js
// -------------- app.js ----------------

import User from './User.js'

const mirko = new User()
```

Kada postoji podrazumevani izvoz, ne moramo uvoziti klasu pod istim imenom pod kojim je izvezena, iako je to konvencija. Prilikom uvoza, možemo dati bilo koje ime podrazumevanom izvozu:

```js
// -------------- app.js ----------------

import Korisnik from './User.js'

const mirko = new Korisnik()
```
