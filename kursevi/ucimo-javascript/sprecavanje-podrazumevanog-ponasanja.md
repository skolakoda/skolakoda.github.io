---
title: Sprečavanje podrazumevanog ponašanja
layout: lekcija-js
permalink: /sprecavanje-podrazumevanog-ponasanja
---

**Neki HTML elementi imaju podrazumevano ponašanje na događaje, određeno njihovom namenom. Tako link otvara URL na klik, a forma šalje podatke serveru na `submit`.**

Možemo sprečiti podrazumevanu reakciju HTML elementa na neki događaj, pomoću metode `preventDefault()`. Ova metoda pripada `event` objektu, koji je dostupan u povratnoj funkciji.

## Primer: sprečavanje slanja forme

U narednom primeru, selektujemo `form` element i dodajemo funkciju koja će biti izvršena kada `submit` bude okinut. Unutar te funkcije se sprečava podrazumevano ponašanje, odnosno slanje forme na `submit`:

```js
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
})
```

`preventDefault` se redovno koristi kada ne želimo da se refrešuje stranica prilikom slanja forme, kao i kada želimo dodatnu validaciju podataka pre slanja.

{:.uokvireno.ideja}
Ukoliko sprečimo podrazumevano slanje forme putem HTML-a, onda podatke moramo poslati putem Javascripta.

## Primer: sprečavanje otvaranja linka

U narednom primeru selektujemo `a` element i kažemo mu da na klik ne uradi ništa:

```js
document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault()
})
```

Ovo se veoma retko koristi u praksi.
