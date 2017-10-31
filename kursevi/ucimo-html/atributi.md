---
layout: lekcija-html
permalink: /ucimo-html/atributi
---

# HTML atributi

**HTML elementi mogu imati atribute.**

- Atributi pružaju dodatne informacije o HTML elementu.
- Atributi obično imaju neku vrednost, u formatu `naziv="vrednost"`

**Neki elemenati su neupotrebljivi bez atributa.** Na primer link (`a`) mora imati putanju (`href`) kuda vodi, a slika (`img`) mora imati izvor (`src`) odakle vuče sliku.

**Za druge elemente atributi su opcioni.** Na primer titlovi (`title`) se pojavljuju kada nadnesemo miš nad neki element, kao dodatna informacija.

## Vežba

Dodaj vrednosti atributima:

- `href` atributu dodaj vrednost `http://skolakoda.org`
- `title` atributu dodaj vrednost `O Školi koda`
- `src` atributu dodaj vrednost `http://lorempixel.com/400/200/`

Pokušaj da zaključiš čemu koji atribut služi. Probaj da ukloniš navodnike i vidiš hoće li raditi bez njih.

<textarea id="editor-ulaz">
<a href="">Škola koda</a>

<p title="">Škola koda je grupa prijatelja koje povezuje ljubav prema pisanju koda. Zajedno učimo HTML, CSS, Javascript, PHP, Python i druge jezike. </p>

<img src="">
</textarea>

{% include tablet.html %}

Nadnesi miš iznad pasusa da bi se pojavio titl.

## Uvek koristi navodnike

Vrednost atributa nekad radi i bez navodnika, kao u slučaju:

```html
<a href=http://skolakoda.org>
```

Međutim, navodnici su neophodni ukoliko vrednost sadrži praznine:

```html
<p title=O Školi koda>
```

Stoga, World Wide Web Konzorcijum (W3C) preporučuje upotrebu navodnika u HTML standardu. Takođe, navodnici su neopodni za striktnije tipove dokumenata, kao XHTML.

Upotreba navodnika je dobra praksa. U Školi koda uvek stavljamo vrednost atributa u navodnike.
