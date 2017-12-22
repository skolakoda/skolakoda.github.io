---
title: Kako napraviti prilagodljivi grid sistem u Sass-u?
author: damjan
layout: lekcija-frontend
permalink: /kako-napraviti-grid-sistem
image: https://cdn.tutsplus.com/webdesign/uploads/2013/08/web.jpg
---

![]({{page.image}})

U nekoliko prostih koraka napravićemo sistem rešetki (*grid*), sličan onom koji koristi Bootstrap. Grid sistem zapravo simulira tabelu, koja nam omogućava napredno pozicioniranje HTML elementa. Kao i svaka tabela, sastoji se od redova i kolona.

## Priprema terena

Po defaultu, CSS uračunava unutrašnji razmak (*padding*) u širinu elementa. Mi želimo da menjamo unutrašnji razmak po potrebi, a da širina elementa ostaje ista. Zato svima dodajemo `box-sizing: border-box`:

```css
* {
  box-sizing: border-box;
}
```
## Definisanje varijabli

Prvo, definišemo broj kolona i razmak između njih:

```scss
$columns: 12;
$spacing: 20px;
```

Možemo imati kolona koliko hoćemo, ali ljudi često biraju 12 jer je deljivo sa mnogim brojevima (6, 4, 3).

## Pravljenje grida

Kolonama podešavamo `float: left`, kako bi se poređale jedna pored druge. Podrazumevana širina će im biti 100%, za najmanje uređaje. Pored toga, daćemo `padding-right` radi razmaka, svakoj koloni osim poslednje:

```scss
[class*='col-'] {
  float: left;
  width: 100%;
  &:not(:last-of-type) {
    padding-right: $spacing;
  }
}
```

Pošto sve kolone unutar reda imaju `float`, red mora imati `overflow: auto` da bi sačuvao svoju visinu:
```css
.row {
  overflow: auto;
}
```

Funkcija `grid` prima željenu veličinu i pravi sve kolone za tu veličinu. Grid pravimo tako što broj kolona podelimo sa širinom stranice, i svakoj damo odgovarajuću širinu:

```scss
@mixin grid($size, $breakpoint) {
  @media (min-width: $breakpoint) {
    @for $i from 1 through $columns {
      .col-#{$size}-#{$i} {
        width: (100% / $columns) * $i;
      }
    }
  }
}
```

Konačno, pozivamo funkciju prosleđujući joj tačke preloma koje želimo:

```scss
@include grid('sm', 544px);
@include grid('md', 768px);
@include grid('lg', 1200px);
```

## Upotreba

Prilagodljivi grid sada možemo koristiti na sledeći način:

```html
<div class="row">
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
  <div class="col-sm-6 col-md-4 col-lg-1">Hello World</div>
</div>
```

Ovo znači da će naš sadržaj:

* na malim uređajima zauzimati 6 kolona od 12 (pola ekrana)
* na srednjim uređajima 4 kolone od 12 (trećinu ekrana)
* a na velikim uređajima 1 kolonu od 12 (dvanaestina ekrana)

Na najmanjim uređajima će zauzimati punu širinu.

Ceo primer i izvorni kod možete naći [ovde](https://jsfiddle.net/mudroljub/tjrbdjq8/).

<script async src="//jsfiddle.net/mudroljub/tjrbdjq8/embed/result/"></script>
