---
title: Kako organizovati frontend projekat koji raste?
layout: lekcija-razvoj
author: damjan
permalink: /kako-organizovati-frontend-projekat
image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bau_MSW_%281%29.jpg/1280px-Bau_MSW_%281%29.jpg
---

<img class="full" src="{{page.image}}" alt="arhitektura">

Pre nego što počnemo, bitno je upoznati neke konvencije:

* `src` - direktorij u kome se nalaze izvorni fajlovi (pisani rukom)
* `build` ili `dist` - direktorij u kome se nalaze prevedeni fajlovi, bilo da je u pitanju kompajliranje, pakovanje, minifikacija (automatski generisani)
* `libs` ili `vendor` - direktorij u kome se nalaze biblioteke koje koristimo na projektu

Veoma je bitno ove stvari držati odvojenim.

## Korak 1: Osnovna struktura

U početku naš projekat ima samo jedan nivo dubine, tj. svi folderi su na istom niovou:

```
css/
  main.css
js/
  main.js
fonts/
images/
libs/             // sve biblioteke idu ovde
```

Veoma je važno da na samom početku projekta sav kod "treće strane" (biblioteke koje nismo mi pisali) smestimo u poseban direktorij, kako se ne bi mešalo sa našim kodom. Obično se za biblioteke korisi konvencija `libs`, `vendor` i slično.

## Korak 2: Kreiranje podfoldera i razlaganje

Već u startu neke stvari možemo svrstati zajedno, na primer fontove i slike u `assets` folder, a neke fajlove (css, js) razložiti na manje celine:

```
assets/
  fonts/
  images/
css/              // razdvajamo css na manje fajlove
  colors.css
  header.css
  main.css
  footer.css
js/               // razdvajamo js na manje fajlove
  header.js
  main.js
  footer.js
libs/
```

Imajte na umu da se preveliki CSS i Javaskript fajlovi smatraju veoma lošom praksom. Čim fajl pređe 200-injak linija koda (okvirni orjentir), trebalo bi da ga razložimo.

## Korak 3: Uvođenje build procesa

Ako je projekat zaista velik, neophodno je uvesti automatizaciju, odnosno build proces. Sada naš izvorni kod pišemo isključivo u `src` folderu, potom se on kompajlira (spaja, čisti, minifikuje) u `dist` ili `build` folder. Za build automatizaciju potrebno je instalirati i podesiti `Gulp`, `Grunt`, `Webpack` ili nešto slično.

Takođe, brigu o bibliotekama preuzima neki paket menadžer (`npm`, `bower`, `yarn`. `jspm`…). Više ne skidamo fajlove sa interneta ručno, već samo dodajemo željenu biblioteku na spisak, a paket menadžer je sam nalazi, skida i ažurira. U zavisnosti od toga koji paket menadžer koristimo, folder će biti nazvan `node_modules`, `bower_components` i slično.

```
assets/
  fonts/
  pictures/
  logos/
src/                // ovde su izvorni fajlovi na kojima radimo
  css/
    colors.css
    header.css
    main.css
    footer.css
  js/
    header.js
    main.js
    footer.js
dist/               // ovde idu izbildovani fajlovi
  css/
    style.min.css
  js/
    script.min.js
node_modules/       // npm preuzima brigu o bibliotekama
```

Ako ste iskusniji, možete odmah postaviti celu strukturu, ali u početku je bolje da stvari idu polako. Naravno, vaša struktura uopšte ne mora izgledati ovako, ali bitno je da sve vreme brinete o rastu i arhitekturi.
