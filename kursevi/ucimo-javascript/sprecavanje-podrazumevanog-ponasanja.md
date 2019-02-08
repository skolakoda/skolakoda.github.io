---
title: Sprečavanje podrazumevanog ponašanja
layout: lekcija-js
permalink: /sprecavanje-podrazumevanog-ponasanja
---

**Neki HTML elementi imaju podrazumevano ponašanje na događaje, određeno njihovom namenom. Na primer, pregledač otvara URL adresu kad kliknemo link ili šalje podatke serveru na `submit` forme.**

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

Neki sajtovi iritiraju posetioce koji kliknu na link pitanjem: „*Da li ste sigurni da želite da pratite ovaj link?*“. To se implementira na sledeći način:

```js
const allLinks = document.getElementsByTagName('a')
for (let i = 0 i < allLinks.length i++) {
  allLinks[i].addEventListener('click', function(e) {
    if (!confirm('Želite li da pratite link?')) e.preventDefault()
  })
}
```

Ugrađena funkcija `confirm` vraća `true` ili `false`, zavisno od izbora. Samo u slučaju da posetilac odbije, poziva se metod `preventDefault()`, koji sprečava otvaranje linka. 