---
layout: kurs
title: Učimo CSS
github: ucimo-web-dizajn
image: /images/kursevi/css.png
kurs: web-dizajn
---

![web-design]({{page.image}})

## Učimo CSS [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/{{page.github}})

# Uvod u web dizajn

**Nauči da ulepšavaš stranice, koristeći prilagodljivi dizajn, tipografiju, boje i animacije. Već nakon par časova imaćeš svoj prvi sajt online.**

***Web dizajn kurs je za apsolutne početnike.***

<a href="/kursevi/prijava?kurs=1" class="btn float-right">Prijavi se</a>

### Uvod
- [Čemu služi CSS?](/ucimo-css/uvod) <a href="https://youtu.be/BFc_YPAxQcg"><img src="/images/ui/ikonice/youtube.svg" class="ikonica-manja" alt="play-video"></a>
- Razdvajanje briga i nastanak CSS-a
- Podrazumevani stilovi browsera

### Upoznavanje alata

- Instalacija editora (Notepad++, [Atom](https://atom.io/), [Brackets](//brackets.io/), [Sublime](https://www.sublimetext.com/), [Code](https://code.visualstudio.com/)...)
- Instalacija dodataka
  - bojenje koda
  - ulepšavanje koda
  - otkrivanje grešaka u kucanju

### Dodavanje CSS-a
- Unutar HTML-a
- Kao poseban fajl

### Selektori
- `tag` (za podrazumevane stilove)
- `#id` (samo za specifične slučajeve, izbegavati)
- `.klasa` (najčešće se koristi)
- `[atribut]` (samo za specifične slučajeve)

### Boje
- Osnovna paleta i teorija boja ([primeri](https://color.adobe.com/explore/))
- [Heksadecimalni brojevi](/heksadecimalni-brojevi)
- Menjanje boje slova i boje pozadine
- Pravljenje pomoćnih klasa za boje
- Vežba: definiši osnovnu paletu
- Vežba: promeni boju zaglavlja i podnožja
- Vežba: utvrdi da li deca nasleđuju boju od roditelja?

### Razvojni alati pregledača
- Korišćenje razvojnih alata browsera
- Vežba: promeni boju pozadine na tuđim stranicama

### Tipografija
- [Tipografija i web development](/tipografija-i-web-development)
- Glavne porodica fontova (sa kvačicama i bez kvačica)
- Razmaci (između redova, između slova, margine i pading)
- Poravnanje (levo, desno, centar i ravnomerno)
- Upotreba Google fontova
- Vežba: menjaj razmake i veličinu slova
- Vežba: menjaj veličinu i debljinu naslova
- Vežba: izaberi porodice fontova za naslove i tekst

### Merne jedinice

- Pikseli `px` (veličina jedne tačke)
- Emovi `em` (veličina jednog slova)
- Procenti `%` (u odnosu na roditelja)
- Viewport jedinice `vw` i `vh` (u odnosu na veličinu ekrana)

### Pozicioniranje
- Statična, fiksirana, relativna i apsolutna pozicija
- Plutanje i čišćenje elemenata (`float` i `clear`)
- Promena redosleda slojeva (`z-index`)
- Vežba: sredi visinu roditelja koji sadrži plutajuće elemente
- Vežba: napravi fiksirano zaglavlje

### Box model

- Box model (sadržaj, pading, granice, margine)
- Unutrašnje praznine (`padding`) i širina elementa
- Granice (*border*)
  - Debljina, boja i vrsta granica
  - Zaobljene granice
- Granice i širina elementa
- Vežba: promeni `box-sizing` elemenata u `border-box`, menjaj pading, uporedi razliku

### Osnovni prikazi (`display`)

- `block`, `inline`, `inline-block`, `none`
- Razlika između `display: none` i `visibility: hidden`
- Vežba: lagano pojavljivanje/nestajanje na hover

### Fleksibilni prikaz (`flex`)

- Fleksibilni prikaz (`display: flex`)
- Horizontalno i vertikalno centriranje
- Razmak između elemenata
- Deformisanje proporcije elemenata
- Prelamanje u novi red
- Vežba: fleksibilno prikaži navigaciju
- Vežba: fleksibilno prikaži krugove

### Pozadinska slika
- Veličina
- Centriranje
- Menjanje
- Vežba: menjanje slike na hover

### Prilagodljivi dizajn
- Izvorna prilagodljivost HTML-a
- Fiksiranje dizajna i tačke preloma (*breakpoints*)
- CSS `@media` upiti (*queries*)
- Prvo mobilni dizajn (*mobile first*)
- Bootstrap biblioteka
- Vežba: napravi dva prikaza navigacije, za mobilni i desktop
- Vežba: prilagodi prikaz stranica za razne uređaje

### Stanja
- `hover`, `focus`, `active`, `visited`, `checked`
- Vežba: dodaj drugačiju boju granica na aktivni element forme
- Vežba: povećaj sliku u fotogaleriju na `hover`

### Napredni selektori
- Naslednici (`div div`) i direktna deca (`div > div`)
- Blizanački selektori: *adjacent sibling* (`+`) i *general sibling* (`~`)
- n-to dete i n-ti tip
- Vežba: oboj svaki drugi red
- Vežba: napravi otvaranje i zatvaranje navigacije samo sa CSS-om
- Primer: [otvaranje padajućeg menija na klik](https://jsfiddle.net/mudroljub/turLhuy9/)
- Primer: [otvaranje navigacije na klik](https://codepen.io/mudroljub/pen/JrJqxp)

### CSS animacije
- Tranzicije i animacije
- Vežba: animiraj HTML element
- Primer: [animirani meni](https://github.com/mudroljub/animirani-meni)
- Primer: [avionče (animacija sa rotacijom)](https://jsfiddle.net/mudroljub/x5Ljzcky/)

### Stilizovanje SVG-a
- [Rad sa SVG-om](/svg-na-webu)
- Vežba: ukljuci `SVG` ikonicu direktno u HTML i dodaj tranziciju na hover

### Kodni standard i dobre prakse
- [Dobre CSS prakse](/css-saveti)
- upotreba `!important` kao loša praksa
- skraćene direktive i opasnost od gaženja
- Vežba: proveri kod sa [CSSlint](//csslint.net/)-om

### Organizacija koda
- Vežba: organizuj kod u logične celine
- Vežba: podeli CSS u manje fajlove i uvezi ih u glavni fajl

### Završni rad

- Prevođenje dizajna u kod
- Izrada Wordpress teme

### Bonus: CSS grid

- Šta je CSS grid?
- [Learn CSS grid](//learncssgrid.com/)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [An Introduction to the CSS Grid Layout](https://www.sitepoint.com/introduction-css-grid-layout-module/)
- Primer: [https://codepen.io/mor10/pen/QvmLpd](Standardna struktura sajta u gridu)
