---
title: Navodnici u HTML-u
layout: lekcija-html
permalink: /ucimo-html/navodnici
---

**Uvek stavljaj vrednost HTML atributa u navodnike.**

Vrednost HTML atributa nekad radi i bez navodnika, kao u slučaju:

```html
<a href=https://skolakoda.github.io>
```

Međutim, navodnici su neophodni ukoliko vrednost atributa sadrži praznine. Na primer, ovaj titl će pući:

```html
<p title=O Školi koda>
```

Stoga, World Wide Web Konzorcijum (W3C) preporučuje upotrebu navodnika u HTML standardu. Takođe, navodnici su neopodni za striktnije tipove dokumenata, kao XHTML.

{:.uokvireno.ideja}
Upotreba navodnika je dobra praksa. U Školi koda uvek stavljamo vrednost atributa u navodnike.

## Navodnici ili polunavodnici

Vrednost atributa možemo smestiti unutar običnih (`"`) ili polunavodnika (`'`). No, ukoliko stavimo iste navodnike jedne unutar drugih, tekst će pući.

Ako želimo navodnike unutar navodnika, možemo kombinovati obične i polunavodnike. Tako na primer pišemo:

```html
<p title='Aerodrom "Nikola Tesla"'>
```

Ili obrnuto:

```html
<p title="Aerodrom 'Nikola Tesla'">
```

## Vežba: Popravi navodnike

U prvom pasusu, titlovi su slomljeni zbog gneždenja navodnika. U drugom, slomljeni su zbog nedostatka navodnika.

Popravi slomljene navodnike:

{:.html-ulaz}
```html
<p title="Aerodrom "Nikola Tesla"">Stavi miš iznad teksta da saznaš koji se aerodrom nalazi 12 km zapadno od centra Beograda, na teritoriji beogradske opštine Surčin. </p>

<p title=O Školi koda>Škola koda je grupa prijatelja koje povezuje ljubav prema pisanju koda.</p>
```

{:.uokvireno.ideja}
Ne možemo imati iste navodnike jedne unutar drugih, jer pregledač nakon prvog zatvorenog para prekida tekst.
