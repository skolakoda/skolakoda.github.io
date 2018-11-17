---
title: Dobre CSS prakse
layout: lekcija-html
author: damjan
permalink: /css-dobre-prakse
redirect_from: /css-saveti
image: /images/kursevi/css.png
---

![]({{page.image}})

Ako se ozbiljno baviš frontendom, verovatno već slediš dobre CSS prakse, to jest:
- [ne koristiš !important](https://github.com/CSSLint/csslint/wiki/Disallow-!important)
- [izbegavaš ID selektore](https://github.com/CSSLint/csslint/wiki/Disallow-IDs-in-selectors)
- [izbegavaš float](https://github.com/CSSLint/csslint/wiki/Disallow-too-many-floats) i slično

Pored tih osnovnih pravila, postoji još puno stvari na koje treba obratiti pažnju kako bi se pisao kvalitetan i održiv CSS.

### Ne gazi prethodne stilove

![gazenje](/images/koncepti/gazenje.png)

Do višestrukih redefinicija, odnosno **gaženja**, dolazi svaki put kada iznova definišemo stil za isti HTML element. Višestruke redefinicije su loše iz nekoliko razloga:

* povećava se veličina fajla, i vreme učitavanja
* smanjuje se preglednost
* drugi developeri su prinuđeni da koriste tvrde metode, kao `important!`

Ukoliko ti neke definicije ne trebaju, nemoj ih gaziti, ukloni ih. Ako koristiš Bootstrap, ne moraš gaziti podrazumevane stilove biblioteke, postoji [mogućnost prilagođavanja](//getbootstrap.com/customize/).

### Jedna klasa jedna odgovornost

Ovaj princip objektno orjentisanog programiranja može se sasvim lepo primeniti na CSS. Ukoliko na elementu postoje dve klase koje imaju jasno određene namene, na primer: `align-center` i `text-padding`, pogrešno je koristiti ih u druge svrhe, npr. za bojenje:

```css
.align-center.text-padding {
  color: red;
}
```

Ovo posebno važi kada se još oslanjamo i na slučajnu kombinaciju klasa. Ako se kasnije kombinacija promeni, nestaće i boja. Umesto toga, napravi novu klasu koja ima jasno određenu namenu:

```css
.primary-color {
  color: red;
}
```

### Ne ubijaj HTML funkcionalnost

Jedan slučaj, koji me je naročito začudio, bilo je korišćenje `strong` taga u HTML-u, koji služi za podebljanje slova:

```html
<strong>Zdravo Svete</strong>
```

A potom njegovo poništenje u CSS-u:

```css
.main-page strong {
  font-weight: normal;
}
```

Na ovaj način se ubija prirodna HTML funkcionalnost, što je veoma pogrešno. Umesto toga, dovoljno je zameniti `strong` tag sa `span`-om:

```html
<span>Zdravo Svete</span>
```

i podebljana slova će nestati. U ovom slučaju, uopšte nema potrebe za CSS-om.

### Uskladi naziv i ponašanje

Jednom prilikom sam u kodu naišao na klasu koja definitivno ne radi ono što govori:

```css
.dark-gray-border {
  padding-bottom: 40px;
}
```

Bio sam radoznao da ispitam kako je došlo do takvog raskoraka. U istoriji izmena nađoh da je klasa izvorno zbilja služila dodavanju sive ivice, ali je nakon promene dizajna siva ivica uklonjena, a dodata margina. Nekog je jednostavno mrzelo da napravi novu klasu, koja radi ono što govori:

```css
.big-padding-bottom {
  padding-bottom: 40px;
}
```

I jedna i druga klasa prolaze linter (formalno nema greške), ali kod takođe pišemo za koleginice i kolege.

### Uskladi naziv i prilagodljivo ponašanje

Nekad imamo klasu za tekstualno poravnanje desno, ali nam na mobilnom treba poravnanje levo. Ovo je primer pogrešnog rešavanja tog problema:

```css
.text-right {
  text-align: right;
}

@media (max-width: 767px) {
  .text-right {
    text-align: left;
  }
}
```

Ovako redefinisana klasa obesmišljuje semantiku, i radi potpuno suprotno od onoga što tvrdi. Umesto toga, napravi novu klasu za prilagodljivo poravnanje:

```css
@media (min-width: 768px) {
  .responsive-align {
    text-align: right;
  }
}

@media (max-width: 767px) {
  .responsive-align {
    text-align: left;
  }
}
```

Na ovaj način, niko od saradnika neće biti doveden u zabunu - iz naziva je očigledno da poravnanje zavisi od veličine uređaja.

### Koristi tačke preloma dosledno

Na nekim projektima možemo videti da se tačke preloma (*breakpoints*) za prilagodljivi dizajn koriste nedosledno, odnosno za svaki element se izmišljaju različite:

```css
@media screen and (min-width: 500px) {
  .navigation {
    /* neke direktive */
  }
}

@media screen and (min-width: 544px) {
  .sidebar {
    /* neke direktive */
  }
}

@media screen and (min-width: 550px) {
  header {
    /* neke direktive */
  }
}
```

Bitno je koristiti tačke preloma dosledno, da bi čitava stranica prešla iz jednog u drugi prikaz istovremeno (npr. iz mobilnog u tablet):

```css
@media screen and (min-width: 544px) {
  header {
    /* neke direktive */
  }
  .navigation {
    /* neke direktive */
  }
  .sidebar {
    /* neke direktive */
  }
}
```

Ukoliko se na projektu koristi neki frejmvork, treba se držati njegovih tačaka preloma (vidi [Bootstrap media queries](//getbootstrap.com/css/#grid-media-queries), [Foundation media queries](//foundation.zurb.com/sites/docs/v/5.5.3/media-queries.html)), kako se naš sistem i sistem biblioteke ne došli u raskorak. Bitno je napomenuti da se i Bootstrapov sistem razlikuje između verzija.

### Piši prilagodljiva pravila po komponentama

Česta je praksa da sva prilagodljiva pravila trpamo u jedan fajl, koji veoma brzo postane nepregledan. Responzivnu logiku ne treba pisati u jednom fajlu, već grupisati po komponentama. Na primer:

```css
profile-pic {
  float: left;
  width: 250px;
}
@media screen and (max-width: 768px) {
  .profile-pic {
    width: 100px;
    float: none;
  }
}
@media screen and (min-width: 1200px) {
  .profile-pic {
    float: right;
  }
}
```

Ova [ustaljena praksa](//thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32) `Sass`-a olakšava održavanje projekta i čini komponente nezavisnijim.
