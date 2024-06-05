---
title: HTML atributi
layout: lekcija-html
permalink: /html-atributi
---

**HTML elementi mogu imati atribute ili svojstva. Atributi pružaju dodatne informacije o elementu.**

Atributi obično imaju naziv i vrednost, u formatu `naziv="vrednost"`. Između naziva i vrednosti atributa uvek ide `=` (operator dodele). Na primer, ako pasusu želimo dodati klasu "lead", pišemo:

```html
<p class="lead">Dobrodošli</p>
```

**Neki elemenati su neupotrebljivi bez atributa.** Na primer link (`a`) mora imati putanju (`href`) kuda vodi, a slika (`img`) mora imati izvor (`src`) odakle vuče sliku.

**Za druge elemente atributi su opcioni.** Na primer titlovi (`title`) se pojavljuju kada nadnesemo miš nad neki element, kao dodatna informacija.

Specifikacija jezika propisuje imena atributa, i koji tag može imati koje atribute. U jednom tagu može biti više atributa. Spisak atributa po pripadnosti tagovima možete naći [ovde](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

## Vežba: Dodaj atribute tagovima

Svi tagovi imaju prazne atribute. Dodaj sledeće vrednosti atributima:

- `href` atributu dodaj vrednost `https://skolakoda.github.io`
- `title` atributu dodaj vrednost `O Školi koda`
- `src` atributu dodaj vrednost `http://lorempixel.com/400/200/`

{:.html-ulaz}
```html
<a href="">Škola koda</a>

<p title="">Škola koda je grupa prijatelja koje povezuje ljubav prema pisanju koda. Zajedno učimo HTML, CSS, Javascript, PHP, Python i druge jezike. </p>

<img src="">
```

Pokušaj da zaključiš čemu koji atribut služi. Probaj da ukloniš navodnike i vidiš hoće li raditi bez njih.

{:.uokvireno.ideja}
Nadnesi miš iznad pasusa da bi se pojavio titl.
