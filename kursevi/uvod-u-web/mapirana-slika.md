---
title: Mapirana slika
layout: lekcija-html
permalink: /mapirana-slika
---

**Mapirana slika može imati oblike kao linkove. Da bismo napravili mapiranu sliku, koristimo `<map>` tag, unutar kojeg dodajemo željene oblike.**

Koordinate oblika možemo odrediti ručno ili korišćenjem programa za mapiranje slika.

## Oblici

Oblici i njihove koordinate su atributi `<area>` taga. Na primer, ovako definišemo pravougaonik:

```html
<area shape="rect" coords="41,16,101,32" href="proba.html">
```

Atribut `shape`može imati sledeće vrednosti: `rect`, `poly`, `circle` i `default`. Koordinate upisujemo u `coords`, a link stavljamo u `href`.

### Krug (`circle`)

Potrebno je zadati koordinate za centar kruga (`x,y`) i poluprečnik u piskelima. Centar kruga se određuje u odnosu na gornji levi ugao slike. Sintaksa je sledeća:

```html
<area shape="circle" coords="x,y,poluprecnik" href="krug.html" >
```

### Pravougaonik (`rect`)

Za pravougaonik je potrebno zadati parove koordinata za gornji levi i donji desni ugao pravougaonika:

```html
<area shape="rect" coords="x1,y1,x2,y2" href="pravougaonik.html">
```

### Poligon (`poly`)

Poligon može biti bilo koji nepravilan oblik definisan uzastopnim parovima koordinata, na sledeći način:

```html
<area shape="poly" coords="x1,y1,x2,y2,x3,y3,...,xN,yN" href="neki-oblik.html">
```

Svaki par `x,y` predstavlja tačku poligona. Ako prva i poslednja tačka nisu iste, pregledač će sam zatvoriti poligon.

### Ostatak (`default`)

Oblik `default` nema koordinate, već zahvata svu preostalu površinu, pored postojećih oblika.

## Povezivanje slike i oblika

Da bismo sliku povezali sa mapom, dodajemo joj `usemap` atribut, koji ima vrednost identičnu `id`-u mape, plus tarabu (`#`) kao prefiks. Na primer:

```html
<img src="slika.png" usemap="#mapaid">
```

## Prost primer

{:.html-ulaz}
```html
<img src="https://www.w3schools.com/tags/planets.gif" width="145" height="126" alt="planete" usemap="#planete">

<map id="planete">
  <area shape="rect" coords="0,0,82,126" alt="Sunce" href="https://sh.wikipedia.org/wiki/Sunce">
  <area shape="circle" coords="90,58,3" alt="Merkur" href="https://sh.wikipedia.org/wiki/Merkur">
  <area shape="circle" coords="124,58,8" alt="Venera" href="https://sh.wikipedia.org/wiki/Venera">
</map>
```

Preuzeto sa [w3schools](https://www.w3schools.com/tags/tag_map.asp).

## Složen primer

{:.html-ulaz}
```html
<img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/JoshuaReynoldsParty.jpg" usemap="#vecera" width="720" height="523">

<map id="vecera">
  <area href="https://en.wikipedia.org/wiki/Samuel_Johnson" shape="poly" coords="133,343,124,287,159,224,189,228,195,291,222,311,209,343,209,354,243,362,292,466,250,463" title="Samuel Johnson – Dictionary writer">
  <area href="https://en.wikipedia.org/wiki/James_Boswell" shape="poly" coords="76,224,84,255,43,302,62,400,123,423,121,361,137,344,122,290,111,234,96,225" title="Boswell – Biographer">
  <area href="https://en.wikipedia.org/wiki/Joshua_Reynolds" shape="poly" coords="190,276,208,240,229,228,247,238,250,258,286,319,282,323,223,323,220,301,200,295" title="Sir Joshua Reynolds – Host">
  <area href="https://en.wikipedia.org/wiki/David_Garrick" shape="poly" coords="308,317,311,270,328,261,316,246,320,228,343,227,357,240,377,274,366,284,352,311,319,324" title="David Garrick – actor">
  <area href="https://en.wikipedia.org/wiki/Edmund_Burke" shape="poly" coords="252,406,313,343,341,343,366,280,383,273,372,251,378,222,409,228,414,280,420,292,390,300,374,360,359,437,306,418,313,391,272,415" title="Edmund Burke – statesman">
  <area href="https://en.wikipedia.org/wiki/Pasquale_Paoli" shape="rect" coords="418,220,452,287" title="Pasqual Paoli – Corsican patriot">
  <area href="https://en.wikipedia.org/wiki/Charles_Burney" shape="poly" coords="455,238,484,253,505,303,495,363,501,377,491,443,429,439,423,375,466,352" title="Charles Burney – music historian">
  <area href="https://en.wikipedia.org/wiki/Thomas_Warton" shape="poly" coords="501,279,546,237,567,239,572,308,560,326,537,316,530,300,502,289" title="Thomas Warton – poet laureate">
  <area href="https://en.wikipedia.org/wiki/Oliver_Goldsmith" shape="poly" coords="572,453,591,446,572,373,603,351,562,325,592,288,573,260,573,248,591,243,615,254,637,280,655,334,705,396,656,419,625,382,609,391,613,453" title="Oliver Goldsmith – writer">
  <area href="https://en.wikipedia.org/wiki/Joshua_Reynolds" shape="rect" coords="450,86,584,188" title="Joshua Reynolds' painting ''The Infant Academy'' (1782)">
  <area href="https://en.wikipedia.org/wiki/Joshua_Reynolds" shape="rect" coords="286,87,376,191" title="Joshua Reynolds' painting ''Puck'' (1789)">
  <area href="https://en.wikipedia.org/wiki/Joshua_Reynolds" shape="circle" coords="100,141,20" title="An unknown portrait">
  <area href="https://en.wikipedia.org/wiki/Francis_Barber" shape="poly" coords="503,192,511,176,532,176,534,200,553,219,554,234,541,236,525,261,506,261,511,220,515,215" title="servant – poss. Francis Barber">
</map>
```

Preuzeto sa [Wikipedije](https://en.wikipedia.org/wiki/The_Club_(dining_club)).
