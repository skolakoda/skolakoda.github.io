---
title: Rad sa SVG-om
author: damjan
layout: lekcija-frontend
permalink: /svg-na-webu
---

Poslednjih par godina, slike u vektorskom formatu su postale [opšte podržane](//caniuse.com/#feat=svg) na webu i redovno se koriste za ikonice, logoe i druge odgovarajuće namene. Kao što verovatno znate, SVG ne gubi kvalitet prilikom skaliranja, ali je pogodan uglavnom za geometriju (ne može zameniti fotografije).

SVG na stranici možemo tretirati kao sliku, ali ga takođe možemo tretirati kao bilo koji drugi HTML element, jer su SVG i HTML zapravo dva člana iste jezičke porodice.

![](//www.icons-land.com/images/products/Metro-SVG-Zodiac-Icons.png)

## SVG kao slika

Postavljanje ikonice u svg formatu je potpuno isto kao postavljanje bilo koje druge slike:

```html
<img src="logo.svg">
```

Tako uključen svg fajl se tretira kao slika, što ograničava široke mogućnosti ovog formata. Na primer, ne možemo praviti lagane tranzicije boja na `hover`, možemo samo zameniti jednu ikonicu drugom, što deluje prilično neprofesionalno.

## SVG kao HTML

Da bismo izvukli maksimum od SVG formata, potrebno ga je tretirati kao HTML, jer su SVG i HTML zapravo bliski rođaci. Ako otvorite SVG fajl sa bilo kojim tekst editorom videćete da se sastoji od uglastih tagova, isto kao HTML. Oba pripadaju [XML porodici jezika](https://en.wikipedia.org/wiki/List_of_XML_markup_languages).

Uzmimo bilo koji svg fajl, npr. [twitter ikonicu](//www.flaticon.com/free-icon/twitter-logo-silhouette_8800). SVG prvo treba očistiti od svega suvišnog, što nam nije potrebno u HTML-u. To je pre svega prvi red koji izgleda otprilike ovako:

```svg
<?xml version="1.0" encoding="iso-8859-1"?>
```

I još gomila suvišnih tagova koje ostavljaju programi za obradu slika. Čišćenje se može raditi ručno, ali preporučujem alatku [SVG Optimiser](//petercollingridge.appspot.com/svg-optimiser). Nakon čišćenja, naš fajl izgleda ovako:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
  <path fill="#010002" d="M612 116.3c-22.5 10-46.7 16.8-72.1 19.8 25.9-15.5 45.8-40.2 55.2-69.4 -24.3 14.4-51.2 24.8-79.8 30.5 -22.9-24.4-55.5-39.7-91.6-39.7 -69.3 0-125.6 56.2-125.6 125.5 0 9.8 1.1 19.4 3.3 28.6C197.1 206.3 104.6 156.3 42.6 80.4c-10.8 18.5-17 40.1-17 63.1 0 43.6 22.2 82 55.8 104.5 -20.6-0.7-39.9-6.3-56.9-15.8v1.6c0 60.8 43.3 111.6 100.7 123.1 -10.5 2.8-21.6 4.4-33.1 4.4 -8.1 0-15.9-0.8-23.6-2.3 16 49.9 62.3 86.2 117.3 87.2 -42.9 33.7-97.1 53.7-155.9 53.7 -10.1 0-20.1-0.6-29.9-1.7 55.6 35.7 121.5 56.5 192.4 56.5 230.9 0 357.2-191.3 357.2-357.2l-0.4-16.3C573.9 163.5 595.2 141.4 612 116.3z" />
</svg>
```

SVG tag možemo prekopirati u HTML, i on će postati običan element, kao `div`. Još je potrebno da uklonimo *inline* stilove, kao što je `fill="#010002"`, te dodamo CSS klasu elementu:

```html
<svg class="twitter" viewBox="0 0 612 612">
```

## Stilizovanje

Sada našu svg ikonicu možemo stilizovati u CSS-u, baš kao i svaki drugi HTML element. Na primer, možemo joj promeniti boju na hover:

```css
.twitter path {
  fill: #010002;
}

.twitter:hover path {
  fill: #4099FF;
}
```

Takođe možemo dodati i tranziciju, kako bi prelaz išao lagano:

```css
.twitter path {
  transition: fill 0.4s;
  transition-timing-function: ease-in;
}
```

## Skaliranje

Kada pokušamo smanjiti SVG element preko `width` ili `height` atributa, veličina uporno ostaje ista, ali deo slike biva isečen ivicama, što je jako učestao problem.

Da bismo promenili veličinu treba da skaliramo element, što je malo složenije, ali nije strašno. Za početak, treba da uklonimo `viewBox` atribut, a da umesto njega stavimo `width` i `height`, u koje upisujemo zadnja dva broja iz `viewBox`-a. Dakle, umesto:

```html
<svg class="twitter" viewBox="0 0 612 612">
```

Ostaje:
```html
<svg class="twitter" width="612" heigth="612">
```

Sada u CSS-u treba da podesimo novu, željenu visinu i širinu (u ovom slučaju su iste), i da na osnovu toga izračunamo faktor skaliranja. Na primer, ako želimo da nova širina bude `64`, onda podelimo novu širinu sa izvornom (`64 / 612`) i dobijemo `0.104`

Na kraju u CSS-u podesimo nove dimenzije i skaliranje:

```css
.twitter {
  height:64px;
  width: 64px;
}

.twitter path {
  transform: scale(0.104);
}
```

## Rezultat

Sada nad našom ikonicom imamo potpunu kontrolu i možemo je menjati po želji. Za početak, postavili smo laganu promenu boje na hover (izvorni kod možete videti na [fiddle](https://jsfiddle.net/mudroljub/owd6p8y7/)-u).

<script async src="//jsfiddle.net/mudroljub/owd6p8y7/embed/result/"></script>

U slučaju da se ikonica sastoji od više delova, možemo im dodavati različitu boju, providnost i slično. I naravno, ako otkrijete neku novu foru, slobodno podelite.

Srećno isprobavanje!
