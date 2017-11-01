---
title: Navodnici i polunavodnici u HTML-u
layout: lekcija-html
permalink: /ucimo-html/navodnici
---

Vrednost atributa se može pisati unutar običnih (`"`) ili polunavodnika (`'`). Ako nam trebaju navodnici unutar navodnika, onda moramo kombinovati obične i polunavodnike. Tako na primer pišemo:

```html
<p title='Aerodrom "Nikola Tesla"'>
```

Ili obrnuto:

```html
<p title="Aerodrom 'Nikola Tesla'">
```

No, ukoliko stavimo iste navodnike jedne unutar drugih, tekst će pući, kao u sledećem primeru.

## Vežba

Popravi slomljenje navodnike:

<textarea id="editor-ulaz">
<p title="Aerodrom "Nikola Tesla"">Stavi miš iznad teksta da saznaš koji se aerodrom nalazi 12 km zapadno od centra Beograda, na teritoriji beogradske opštine Surčin. </p>
</textarea>

Postavi miš iznad teksta da vidiš rezultat:

{% include tablet.html %}

Ne možemo imati iste navodnike jedne unutar drugih, jer pregledač nakon prvog zatvorenog para prekida tekst.
