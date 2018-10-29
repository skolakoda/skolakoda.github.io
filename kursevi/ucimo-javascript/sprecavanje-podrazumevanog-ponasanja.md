---
title: Sprečavanje podrazumevanog ponašanja
layout: lekcija-js
permalink: /sprecavanje-podrazumevanog-ponasanja
---

**Neki HTML elementi imaju podrazumevano ponašanje na događaje, određeno njihovom namenom. Tako link otvara URL na klik, a forma šalje podatke serveru na `submit`.**

Možemo sprečiti podrazumevanu reakciju HTML elementa na neki događaj, pomoću metode `preventDefault()`. Ova metoda pripada `event` objektu, koji je dostupan u povratnoj funkciji.

## Primer: sprečavanje slanja forme

```js
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
})
```

## Primer: sprečavanje otvaranja linka

```js
document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault()
})
```
