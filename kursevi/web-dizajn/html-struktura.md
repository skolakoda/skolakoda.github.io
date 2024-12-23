---
title: Osnovna HTML struktura
layout: lekcija-html
permalink: /html-struktura
---

**Jedina obavezna oznaka u HTML dokumentu je `<!DOCTYPE html>`. Sve ostale oznake, uljučujući `html`, `head`, i `body` su opcione.**

Iako HTML struktura nije obavezna, većina stranica ima veoma sličnu osnovnu strukturu:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Naslov stranice</title>
  </head>
  <body>
    Sadržaj stranice
  </body>
</html>
```

## `<!DOCTYPE html>`

Prvi red svake stranice mora sadržati identifikator `<!DOCTYPE html>`. On definiše verziju HTML-a sa kojom je usaglašena stranica. Tip dokumenta se pojavljuje pre tagova strukture stranice.

## Oznaka `<html>`

`<html>` je korenska oznaka, unutar koje se nalaze dve osnovne oznake: glava (`<head>`) i telo (`<body>`) dokumenta. Unutar glave i tela se nalaze svi ostali elementi.

## Glava dokumenta (`<head>`)

Unutar glave dokumenta se nalaze **metapodaci** o stranici, koje se ne prikazuju na samoj na stranici, ali su bitni za njeno funkcionisanje (npr. način kodiranja karaktera, prilagođavanje širine, opis stranice i slično).

### `<title>`

Za naslov stranice koji se prikazuje u tabu pregledača, koristimo oznaku `<title>`. Naslov treba da bude kratak i da opisuje sadržaj. Kada pretraživači indeksiraju stranice, naslov stranice se navodi u rezultatim a pretrage.

## Telo dokumenta (`<body>`)

Unutar tela dokumenta nalazi se sve ono što se prikazuje na ekranu: zaglavlja, pasusi, podeoci, slike, linkovi, liste i ostalo, ukratko sav **sadržaj** stranice.
