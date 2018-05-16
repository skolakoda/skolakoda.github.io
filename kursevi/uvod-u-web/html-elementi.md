---
title: HTML elementi
layout: lekcija-html
permalink: /html-elementi
redirect_from:
  - /ucimo-html/elementi
---

**HTML stranica je sastavljena od HTML elemenata.**

HTML element obuhvata otvarajuću oznaku, zatvarajuću oznaku, i sadržaj između:

```html
<naziv>sadržaj</naziv>
```

Oznake se u pregledaču ne prikazuju, samo njihov efekat. Naziv oznake, koji se nalazi unutar uglastih zagrada, određuje kako će se sadržaj prikazati. Ovako se, na primer, označava naslov:

{:.html-ulaz}
```html
<h1>Zdravo svete</h1>
```

{:.uokvireno.ideja}
Pokušaj da promeniš broj oznake ili njen sadržaj.

## Uparene i neuparene oznake

HTML tagovi mogu biti upareni ili neupareni (samozatvarajući). Upareni imaju otvarajući i zatvarajući tag, i sadržaj između, na primer `<p>Zdravo svete</p>`. Funkcija koju tag obavlja počinje od mesta gde je tag otvoren i završava se mestom gde je zatvoren.

Neupareni imaju samo jednu oznaku, koja istovremeno i otvara i zatvara tag, na primer `<br/>` ili `<img />`.


## Uvek koristimo mala slova

Nazivi tagova su neosetljivi na velika i mala slova. Za naš pregledač, `<DIV>` je isto što i `<div>`.

Ipak, World Wide Web Konzorcijum (W3C) preporučuje upotrebu malih slova u HTML standardu. Takođe, mala slova su obavezna za strože tipove dokumenata, kao XHTML.

U Školi koda tagove uvek pišemo malim slovima.
