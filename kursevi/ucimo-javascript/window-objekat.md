---
title: "Globalni <code>window</code> objekat"
layout: lekcija-js
permalink: /window-objekat
image: /images/koncepti/web/bom.jpg
---

![]({{page.image}})

**Kad se JavaScript izvršava u okruženju pregledača, dostupan nam je globalni `window` objekat.** 

Osim što služi kao objekat na koji se kače globalne varijable i funkcije, `window` služi i za pristup svojstvima i metodama pregledača. Objektni model pregledača (*Browser Object Model*, **BOM**) predstavlja niz objekata ugnježdenih u `window`, kojima pristupamo pregledaču, ekranu, lokaciji i istoriji. 

Postoji `window` za svaki tab, okvir (*frame*), i-okvir (*iframe*) i iskačući prozor.

## Globalni opseg

Možemo da deklarišemo globalnu promenljivu, izvan bilo kog bloka, na sledeći način:

```js
var a = 1
```
Zatim, možemo da pristupimo promenljivoj na različite načine:

- kao promenljivoj `a`
- kao svojstvu globalnog objekta: `window['a']` ili `window.a`

Na primer, možemo ukucati u konzolu:

```
> a
1
> window.a
1
```

Još jedan način za pristup globalnom objektu je da rezervisanu reč `this` koristimo u globalnom imenskom prostoru, izvan bilo koje funkcije:

```
> this.a
1
```

{:.ideja.uokvireno}
Upotreba globalnih promenljivih je generalno loša praksa, koju treba izbegavati. Dobra praksa je zatvarati promenljive u odgovarajuće opsege.

## Ugrađene funkcije

Sve ugrađene JavaScript funkcije su metodi globalnog objekta. Na primer:

{:.izraz}
```js
parseInt('123a456')
```

Je identično sa:

{:.izraz}
```js
window.parseInt('123a456')
```
