---
title: HTML oznake i HTML elementi
layout: lekcija-html
permalink: /ucimo-html/elementi
---

**HTML stranica je sastavljena od HTML elemenata.**

HTML element obuhvata otvarajuću oznaku, zatvarajuću oznaku, i sadržaj između:

```html
<naziv>sadržaj</naziv>
```

Oznake se u pregledaču ne prikazuju, samo njihov efekat. Naziv oznake, koji se nalazi unutar uglastih zagrada, određuje kako će se sadržaj prikazati. Ovako se, na primer, označava naslov:

{:.ulaz}
```html
<h1>Zdravo svete</h1>
```

{:.uokvireno.ideja}
Pokušaj da promeniš broj oznake ili njen sadržaj.

## Uparene i neuparene oznake

HTML tagovi mogu biti upareni ili neupareni (samozatvarajući). Upareni imaju otvarajući i zatvarajući tag, i sadržaj između, na primer `<p>Zdravo svete</p>`. Funkcija koju tag obavlja počinje od mesta gde je tag otvoren i završava se mestom gde je zatvoren.

Neupareni imaju samo jednu oznaku, koja istovremeno i otvara i zatvara tag, na primer `<br/>` ili `<img />`.

## Velika i mala slova

HTML jezik nije osetljiv na velika i mala slova, što znači da se oznake mogu pisati i velikim i malim i kombinovanim veličinama slova (title = Title = tiTLe), ali **preporuka je da se koriste mala slova**.
