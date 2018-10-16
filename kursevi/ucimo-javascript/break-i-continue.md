---
title: Naredbe break i continue
layout: lekcija-js
permalink: /js-break-i-continue
---

**Nekad je poželjno izaći iz petlje ranije, pre ispunjenja glavnog uslova.** Naredba `break` osigurava trenutni izlaz, odnosno prekid vrtenja petlje.

Naredba `continue` preskače na sledeći krug, ali ne obustavlja rad petlje. `continue` se koristi samo u petljama, za razliku od `break` koji se koristi i kod `switch` skretnice.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8o-NvzDtwHU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Zaustavljanje petlje (`break`)

Možete izaći iz petlje u bilo kom trenutku, koristeći ključnu reč `break`. Ovo je korisno kada želite da petlja prestane da se vrti, jer je ono što ste tražili nađeno:

{:.ulaz}
```js
const korisnici = ['Milan', 'Mladen', 'Ivana', 'Marija', 'Selena', 'Haris', 'Ivan', 'Jura']

for (let i = 0; i < korisnici.length; i++) {
  console.log(i)
  if (korisnici[i] == 'Mladen') {
    console.log('Korisnik je pronadjen.')
    break
  }
}
```

Gornja petlja će napraviti samo dva kruga i nakon toga stati, jer je korisnik pronađen. Ovo može biti presudna tehnika optimizacije kada imamo milione korisnika.

## Preskakanje kruga (`continue`)

Ključnu reč `continue` koristimo da bi preskočili ostatak trenutnog kruga i počeli novi krug. Na primer, želimo da ispišemo imena svih korisnika, osim jednog, kog ćemo preskočiti:

{:.ulaz}
```js
const korisnici = ['Milan', 'Mladen', 'Ivana', 'Marija', 'Selena', 'Haris', 'Ivan', 'Jura']

for (let i = 0; i < korisnici.length; i++) {
  if (korisnici[i] == 'Mladen') continue
  console.log(korisnici[i])
}
```
