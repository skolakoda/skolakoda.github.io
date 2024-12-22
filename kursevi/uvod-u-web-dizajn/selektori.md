---
title: Osnovni selektori u CSS-u
layout: lekcija-html
permalink: css-selektori
---

**Tri glavna selektora u CSS-u su selektor taga, selektor klase i id selektor. U praksi, uglavnom koristimo prva dva, dok se upotreba id selektora ne preporučuje.**

## Selektor taga (za osnovne stilove)

Svaki HTML tag može služiti kao selektor u CSS-u, a pravila primenjena na njega će važiti za sve iste tagove. Na primer, možemo promeniti boju svih pasusa na stranici, na sledeći način:

```css
p {
  color: crimson;
}
```

Tag selektor služi za definisanje osnovnih stilova na projektu.

## Selektor klase (najčešće se koristi)

Svi HTML tagovi podržavaju atribut `class`, koji se koristi za klasifikovanje elemenata. Kada selektujemo klasu u CSS-u, dodajemo tačku ispred njenog naziva. Na primer, ako imamo ovakav HTML:

```html
<p>Ja se ni po čemu ne ističem.</p>
<p>Ja se ni po čemu ne ističem.</p>
<p class="istaknuto">Ja se ni po čemu ne ističem.</p>
```

napisaćemo pravilo na sledeći način:

```css
.istaknuto { 
  font-style: italic;
}
```

Svaki element sa klasom `istaknuto` biće prikazan crvenim podebljanim slovima.

## ID selektor (izbegavati)

`id` atribut se koristi za dodelu jedinstvenog identifikatora HTML elementu, na sledeći način:

```html
<p>Ja nisam jedinstven.</p>
<p>Ja nisam jedinstven.</p>
<p id="pera">Ja sam jedinstven.</p>
```

Kada selektujemo id u CSS-u, potrebno je da ispred naziva dodamo znak `#` odnosno tarabu:

```css
#pera { 
  color: lime;
}
```

ID selektor se koristi samo za specifične slučajeve i njegovu upotrebu u CSS-u treba izbegavati:
- stilovi napisani za ID selektor nisu višekratno upotrebljivi, a suština dizajna je da definišemo elemente koji se višekratno koriste.
- `id` atribut u HTML-u se uglavnom koristi za Javascript. Ako ga takođe koristimo za CSS, nakon uklanjanja stila za određeni element, logično je ukloniti i njegov `id`, nakon čega će aplikacija prestati da radi.

## Grupno selektovanje

Preko grupnog selektora možemo dodati stil za više elemenata istovremeno. Na primer:

```css
h1, 
h2, 
h3 { 
  font-weight: normal;
}
```

Prethodno pravilo je kraći način da napišemo sledeće:

```css
h1 { 
  font-weight: normal;
}

h2 { 
  font-weight: normal;
}

h3 { 
  font-weight: normal;
}
```
