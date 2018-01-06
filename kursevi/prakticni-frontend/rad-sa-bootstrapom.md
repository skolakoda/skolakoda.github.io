---
layout: post
title: Saveti za rad sa Bootstrapom
author: damjan
tags: [css, bootstrap, frontend, web-dizajn]
image: https://cdn-images-1.medium.com/max/1349/1*XK_dfIrxW0UyoDy2Ja9z-A.png
permalink: /rad-sa-bootstrapom
---

***Bootstrap je lako naučiti toliko da počnemo raditi u njemu. Teži deo je naučiti da radimo sa Bootstrapom na održiv način, koji neće praviti probleme našim koleginicama i kolegama.***

![]({{page.image}})

## Uzmi samo ono što ti treba

Nemoj uzimati celu Bootstrap biblioteku ako ćeš većinu stvari redefinisati. Time otežavaš učitavanje i taložiš gomilu suvišnog koda na projektu. Uzmi samo ono što ti treba.

Bootstrap je u potpunosti konfigurabilan. Na [ovoj strani](//getbootstrap.com/customize/) možeš izabrati delove Bootstrapa koji ti trebaju, i prilagoditi ga potrebama dizajna. Najbolje je sve na početku projekta podesiti - od osnovnog fonta, margina, naslova, boja, navigacije, grid sistema i svega ostalog.

## Pazi na rezervisane nazive

Ukoliko se pitaš zašto tvoja klasa `tooltip` ne radi ono što očekuješ, znaj da Bootstrap ima klasu istog naziva, i da je ona preuzela prioritet. Ovo je jedna od čestih začkoljica.

Upoznaj dobro Bootstrap biblioteku i ne koristi rezervisane nazive klasa, kao što su `tooltip`, `text-left` ili `text-right`. U slučaju dvojbe, proveri svaku klasu u inspektoru.

Ako nisi siguran koji su nazivi dozvoljeni, a koji nisu, možeš dodati prefikse svojim klasama i mirno spavati (na primer `xx-tooltip`).

## Ne redefiniši framework

Ukoliko nasilno pokušamo da ukinemo margine koje nam smetaju na klasi `row`:

```css
.row {
    margin: 0 !important;
}
```

napravićemo nenadane probleme na čitavom projektu. Ukidanje margina se ne rešava nasilnim redefinisanjem biblioteke, već dodavanjem specijalne nove klase na HTML element:

```css
.no-margin {
  margin: 0;
}
```

Ukoliko dodatna klasa nije dovoljna, nemoj koristi `!important`, jer to povlači nove probleme, već izbaci klasu koju pokušavaš da redefinišeš i napiši svoju. Na taj način ćeš sačuvati funkcionalnost biblioteke za druge developere, i dobiti višekratno upotrebljivu klasu.

## Ne proširuj Bootstrapove klase

Bootstrap ima `form-control` klasu, koja definiše veličinu i izgled polja formulara. Ukoliko želiš da promeniš boju polja, doći ćeš u iskušenje da uradiš nešto ovako:

```css
.form-control {
  color: red;
}
```

Nemoj proširivati globalnu Bootstrapovu klasu samo zato što ti je to trenutno potrebno. Umesto toga, napravi posebnu klasu u tu svrhu:

```css
.form-color {
  color: red;
}
```

Na taj način, ako sutra uklonimo originalnu klasu, naša boja će i dalje ostati. Takođe, ukoliko drugde želimo da koristimo izvornu klasu, ona će nam i dalje biti dostupna.

## Ne hakuj grid

Grid sistem je osnova Bootstrap-a, Foundation-a i drugih CSS biblioteka. Ukoliko želiš da prilagodiš određenu kolonu, nikada ne redefiniši grid na ovaj način:

```css
.col-md-4 .row .col-xs-2 {
  display: inline-block;
  float: none;
  padding: 0 0 15px 0;
}
```

jer ćeš time biblioteku učiniti nefunkcionanom za druge saradnike. Osim što menja grid, CSS se ovde oslanja isključivo na trenutnu kombinaciju klasa, što znači da će se raspasti čim neko promeni HTML.

Umesto toga, napravi posebnu klasu koja će služiti isključivo za prilagođavanje grida u posebnom slučaju:
```css
.adjust-collumn {
  display: inline-block;
  float: none;
  padding: 0 0 15px 0;
}
```

Ukoliko dodatna klasa nije dovoljna, ne koristi `!important`, već u potpunosti izbaci grid koji pokušavaš da redefinišeš i napiši svoj kod.

***Uvek imaj na umu da ono što tebi rešava stvari na lakši način, drugima pravi dodatan posao.***
