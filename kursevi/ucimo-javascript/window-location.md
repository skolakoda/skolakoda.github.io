---
title: "<code>location</code> objekat"
layout: lekcija-js
permalink: /window-location
---

**Globalni `location` objekat sadrži informacije o URL adresi stranice koja je trenutno učitana.**

Na primer, pomoću svojstva `href` dobijamo je punu URL adresu:

{:.izraz}
```js
location.href
```

A pomoću svojstva `hostname` samo domen:

{:.izraz}
```js
location.hostname
```

## Svojstva

Pomoću `for in` petlje možemo izlistati sva svojstava `location` objekta na sledeći način:

{:.ulaz}
```js
for (const key in location) {
  if (typeof location[key] === "string") {
    console.log(key + ': ' + location[key])
  }
}
```

## Metode

Objekat `location` ima sledeće metode: `reload()`, `assign()` i `replace()`. 

- `location.reload()` služi da bismo ponovo učitali istu stranicu. 
- `location.replace()` i `location.assign()` služe za prelazak na drugu stranicu. Razlika je u tome što `assign` ne kreira unos u listu istorije pregledača, kao što to radi `replace`.

Zanimljivo je da postoji mnogo različitih načina za prelazak na drugu stranicu. Ovo su neki od načina:

```
> window.location.href = 'https://skolakoda.github.io';
> location.href = 'https://skolakoda.github.io';
> location = 'https://skolakoda.github.io';
> location.assign('https://skolakoda.github.io');
> location.replace('https://skolakoda.github.io');
```

Za menjanje stranice preporučuje se upotreba predviđenih metoda.