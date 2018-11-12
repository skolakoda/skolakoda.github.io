---
title: HTTP DELETE zahtev u Javascriptu
layout: lekcija-js
permalink: /javascript-delete-zahtev
---

**HTTP DELETE zahtev je standardan način da zahtevamo brisanje resursa sa servera.**

Obično je potrebno da budemo autentifikovani da bismo zahtevali brisanje.

## Fetch metoda

Prost primer DELETE zahteva bez autentifikacije:

```js
fetch('https://baza-filmova.herokuapp.com/obrisi-film/', {
  method: 'delete',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({id: '5bdb2fc70f0a326f856c0e65'})
})
  .then(response => response.text())
  .then(text => console.log(text))
```
