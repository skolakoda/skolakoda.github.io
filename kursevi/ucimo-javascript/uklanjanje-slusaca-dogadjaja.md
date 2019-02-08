---
title: Uklanjanje slušača događaja
layout: lekcija-js-frontend
permalink: /uklanjanje-slusaca-dogadjaja
---

Suprotnost metodu `addEventListener()` je metod `removeEventListener()`, koji prihvata iste parametre. 

Na primer, ovako bismo uklonili slušač `handleClick`, koji je prethodno dodat pasusu:

```js
pasus.removeEventListener('click', handleClick)
```

Da bismo uklonili slušač događaja, moramo da prosledimo istu imenovanu funkciju koju smo prethodno dodali. Ako ponovo napišemo anonimnu funkciju istog sadržaja, ne uklanjamo slušač događaja. 

Ovako nešto ne bi radilo:

```js
pasus.removeEventListener ('click', function () {
  // telo funkcije
})
```

