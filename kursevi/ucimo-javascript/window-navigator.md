---
title: "<code>navigator</code> objekat"
layout: lekcija-js
permalink: /window-navigator
---

**Glovalni objekat `navigator` je svojstvo `window` objekta koje sadrži informacije o pregledaču i njegovim mogućnostima.**

## Identifikacija pregledača

`navigator.userAgent` je string za identi­fikaciju pregledača i operativnog sistema. U trenutnom pregledaču, `userAgent` ima sledeću vrednost:

{:.izraz}
```js
navigator.userAgent
```

Pošto pregledači imaju različite mogućnosti, koristimo `userAgent` da bismo identifikovali pregledač i pokrenuli različite verzije programa. Na primer, ovako proveravamo da li posetilac koristi *Internet Explorer*:

```js
if (navigator.userAgent.includes('MSIE'))
  // ovo je IE
} else {
  // nije IE
}
```

## Geolokacija

`navigator` objekat sadrži i svojstvo `geolocation`, koje ima metod `getCurrentPosition` za dobijanje geolokacije korisnika:

{:.ulaz}
```js
function handleSuccess(position) {
  const coords = position.coords
  console.log('Tvoja trenutna pozicija je:')
  console.log(`Latituda: ${coords.latitude}`)
  console.log(`Longituda: ${coords.longitude}`)
  console.log(`Moguce odstupanje: ${coords.accuracy} metara.`)
}

function handleError(err) {
  console.log(`Greska ${err.code}: ${err.message}`)
}

navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
```