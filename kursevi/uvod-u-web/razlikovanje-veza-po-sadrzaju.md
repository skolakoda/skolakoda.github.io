---
title: Razlikovanje linkova po sadržaju
layout: lekcija-html
permalink: /razlikovanje-veza-po-sadrzaju
---

**Nekad je teško razaznati vodi li link ka drugoj stranici na istom domenu ili ka sasvim drugom domenu. Često kliknemo link očekujući da će nas dovesti do druge stranice, a budemo prebačeni na drugi sajt.**

Da bi ovo riješili, mnogi sajtovi otvaraju vanjske veze u novom prozoru. Međutim, to nije dobra zamisao jer korisniku oduzima nadzor i potencijalno zasipa njegovu radnu površinu neželjenim prozorima.

Najbolje je rješenje nekako ukazati na vanjske veze, te dopustiti korisniku da sam odluči hoće li napustiti domen. To možemo postići dodavanjem male ikone pored vanjske veze, kao što već rade Wikipedija i drugi sajtovi.

## Isticanje vanjskih veza

**Selektori atributa omogućuju ciljanje elementa na temelju vrijednosti atributa.** Pomoću selektora atributa možemo utvrditi je li veza vanjska. Ovo radimo tako što ciljamo veze koje počinju sa `http:` koristeći selektor atributa u formi `[atribut^="vrednost"]` (kapica `^` znači počinje sa):

```css
a[href^="http:"] {
  background: url(https://skolakoda.org/images/ikonice/external-link.png) no-repeat right top;
  padding-right: .9em;
}
```

Link stilizujemo tako što napravimo prostora za ikonicu, sa malo popune s desne strane (`padding-right`), a zatim stavimo ikonicu kao pozadinsku sliku desno iznad veze. Pošto neke stranice koriste `http` a neke `https`, potrebno je pokriti oba slučaja:

{:.html-ulaz}
```html
<style>
a[href^="http:"],
a[href^="https:"] {
  background: url(https://skolakoda.org/images/ikonice/external-link.png) no-repeat right top;
  padding-right: .9em;
}
</style>

<a href="https://en.wikipedia.org">Poseti Wikipediju</a>
<a href="https://news.ycombinator.com/news">Poseti Hacker News</a>
```

Ovo će stilizovati sve vanjske veze. No, obuhvatiće i unutarnje veze koje koriste apsolutne umjesto relativnih putanja. Da bismo ovo rešili, moramo redefinisati stil veze ka našem domenu, uklanjanjem ikonice:

```css
a[href^="https://skolakoda.org/"] {
  background-image: none;
  padding-right: 0;
}
```

## Isticanje protokola

Pomoću selektora atributa možemo stilizovati bilo koji protokol, uključujući `skype`, `mailto` i `tel`:

{:.html-ulaz}
```html
<style>
a[href^="skype:"] {
  background: url(https://skolakoda.org/images/ikonice/skype.svg) no-repeat right top;
  padding-right: 1.2em;
}

a[href^="mailto:"] {
  background: url(https://skolakoda.org/images/ikonice/email.svg) no-repeat right top;
  padding-right: 1.2em;
}

a[href^="tel:"] {
  background: url(https://skolakoda.org/images/ikonice/phone.svg) no-repeat right top;
  padding-right: 1.2em;
}
</style>

<a href="skype:ludisesirdzija?chat">Započni chat</a>
<a href="mailto:posao@hakovanje.org">Pošalji email</a>
<a href="tel:+38160666999">Pozovi</a>
```

## Isticanje tipa dokumenata

Do još jedne uobičajene frustracije dolazi kada pritisnete vezu, misleći da će vas odvesti na stranicu, a umjesto toga započne preuzimanje `PDF` ili `Word` dokumenta. Srećom, CSS može razlikovati i ove tipove veza. To se postiže upotrebom selektora atributa u formi `[atribut$=vrednost]` (`$` znači završava sa), koji cilja veze koje završavaju određenom ekstenzijom, poput `.pdf` ili `.doc`:

{:.html-ulaz}
```html
<style>
a[href$=".pdf"] {
  background: url(https://skolakoda.org/images/ikonice/pdf.svg) no-repeat right top;
  padding-right: 1.2em;
}

a[href$=".doc"] {
  background: url(https://skolakoda.org/images/ikonice/doc.svg) no-repeat right top;
  padding-right: 1.2em;
}
</style>

<a href="istorija_weba.pdf">Preuzmi knjigu</a>
<a href="vazan_ugovor.doc">Preuzmi dokument</a>
```

Na ovaj način stilizujemo veze prema `.doc` ili `.pdf` dokumentima pomoću posebnih ikona, upozoravajući korisnike da su to veze za preuzimanje, a ne ka drugoj stranici. Takođe, dobra je praksa veze ka RSS kanalima (`.rss` i `.rdf`) istaknuti posebnom ikonom.

Sve ove tehnike poboljšavaju korisnički doživljaj naših stranica. Upozoravanjem korisnika na vanjske stranice ili preuzimanje dokumenata, obavještavamo ih što mogu očekivati kad pritisnu vezu te izbjeći nepotrebno vraćanje unatrag i frustracije.


Izvor: Andy Budd, *CSS Mastery: napredna Web rješenja* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.515541e78407453fb5fcc12ad8e9cbb1.css-mastery-napredna-web-rjesenja.aspx)), Zagreb 2006.

Priredio: Damjan Pavlica 2018.
