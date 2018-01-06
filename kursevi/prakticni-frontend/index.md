---
layout: kurs
title: Praktični Frontend
github: shank-app
image: /images/kursevi/frontend.png
kurs: frontend
---

![front-end]({{page.image}})

## Praktični Frontend
# Priprema za rad u firmama

**Razvijamo realne aplikaciju preko Githuba, po taskovima i pod pritiskom. Koristimo Node i NPM, Webpack, Sass, Angular, React i ostale moderne frontend alatke.**

***Za kurs je neophodno predznanje HTML, CSS i JS-a.***

<a href="/kursevi/prijava?kurs=4" class="btn float-right">Prijavi se</a>

### Uvod

- Kako postati upotrebljiv?
- Praksa kao teret IT firmama
- Jaz između pravljenja stranica i razvoja softvera

### Git i Github

- Kontrola verzija koda i zajednički rad
- Samostalni rad sa gitom
  - Inicijalizacija projekta: `git init`
  - Trenutno stanje: `git status`
  - Dodavanje fajlova: `git add`
  - Uknjiženje izmena: `git commit`
  - Poništenje izmena: `git checkout` i `git stash`
- [Rad sa gitom u kolektivu](/rad-sa-gitom)
  - Kloniranje
  - Pravljenje grana i spajanje
  - Vučenje i guranje (`git pull` i `git push`)
  - Kodni standard i pregled koda
- Git konfiguracija

### Node.js i NPM (*Node Package Manager*) [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-nodejs)
- Čemu služi Node.js?
  - Rad sa fajlovima
  - Sinhrone i asinhrone operacije
- Čemu služi upravljač paketa?
  - Lična karta projekta: `package.json` fajl
  - Globalna i lokalna instalacija biblioteka
- Razvojne JS alatke
  - [Linter, mali pomoćnik koji ispravlja tvoj kod](/linter)
  - [Live server, lokalni server sa automatskim osvežavanjem](https://youtu.be/CjbnqXSC5CA)
  - `localtunnel`, za isprobavanje lokalnog projekta preko neta
- Vežba: Pročitaj fajl i ispiši njegov sadržaj

### Razvoj softvera [<img src="/images/ui/ikonice/knjiga.svg" class="ikonica-velika">](/kursevi/razvoj-softvera/)

- [Uvod u softversko inženjerstvo](https://www.slideshare.net/DamjanPavlica/uvod-u-softversko-inenjerstvo)
  - [Objektno-orijentisano programiranje](/objektno-orijentisano-programiranje)
- [Ideje za aplikacije](/ideje-za-aplikacije)
- Analiza zahteva
  - Slučajevi korišćenja (*use cases*)
  - Korisničke priče (*user stories*)
  - Izrada specifikacije
- Projektovanje modela
  - Detektovanje elemenata sistema
  - [Izgrada dijagrama klasa](/dijagram-klasa)
- [Dobre prakse pisanja programa](/dobre-prakse)

### Postavljanje projekta

- Izbor tehnologija i biblioteka
- Izbor paket menadžera ([Bower](https://bower.io/), [NPM](https://www.npmjs.com/), [Yarn](https://yarnpkg.com))
- [Organizacija foldera i fajlova](/kako-organizovati-frontend-projekat)
  - Organizacija po tipu (js, css, slike...)
  - Organizacija po celinama (user, product, cart…)
- [Izrada stilskog vodiča](/stilski-vodic)
- Build automatizacija (`Gulp`, `Grunt`, `Webpack`)
  - Automatsko prevođenje, minifikacija i spajanje koda
  - Automatsko slanje koda na udaljeni server
  - Automatska analiza koda
- Postavljanje projekta na Github

### Komunikacija na projektu

- Alatke za komunikaciju (Skype, Slack i ostalo)
- Alatke za upravljanje projektom ([Jira](https://www.atlassian.com/software/jira) i [Redmine](//www.redmine.org/), [Trello](https://trello.com/) i druge)
- Komunikacija dizajnera i developera ([Zeplin](https://zeplin.io/))
- Redovni sastanci developera
- Pisanje dokumentacije
  - Markdown format (`md`)

### Bootstrap i prilagodljivi dizajn [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-bootstrap)

- [Šta je Bootstrap?](https://www.slideshare.net/DamjanPavlica/vodi-za-rad-sa-bootstrapom-69948458)
- Prvo mobilni pristup
- Dodavanje biblioteke
  - Prilagođena instalacija
- Osnovna `container` klasa
- Tačke preloma (*breakpoints*)
- Sistem rešetki (*grid*)
  - redovi (`row`) i kolone (`col-xs-`, `col-sm-`, `col-md-`, `col-lg-`)
  - različita širina kolona za različite veličine
  - dodavanje ofseta
- Glif ikonice
- jQuery dodaci: vrteška (*carousel*), harmonika (*accordion*), prozorče (*modal*)
- [Saveti za rad sa Bootstrapom](/rad-sa-bootstrapom)
- [Kako tretirati uređaje iste veličine prema dodirljivosti ekrana?](/kako-tretirati-klijentske-uredjaje)

### Sass [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-sass)

- Instalacija Sass-a
- Organizacija fajlova i foldera
- Definisanje veličina i tačaka preloma
- [Postavljanje sistema boja](/postavljanje-sistema-boja)
  - `complement`, `lighten` i `darken` metode
- Gneždenje selektora i `@media` upita
- Miksini (`@mixin`) i pozivanje (`@include`)
- Petlje (`@for`, `@while`, `@each`)
- Uslovi (`@if`, `@else`)
- [Kako napraviti prilagodljivi grid sistem u Sass-u?](/kako-napraviti-grid-sistem)
- Vežba: postavi sistem boja
- Vežba: prevedi CSS u SCSS
- Vežba: napravi grid sistem sa Sass-om

### SVG

- [Rad sa SVG-om](/svg-na-webu)
- [SVG kao slika](/svg-na-webu#svg-kao-slika)
- [SVG kao HTML element](/svg-na-webu#svg-kao-html)
  - [Stilizovanje SVG elementa](/svg-na-webu#stilizovanje)
  - [Skaliranje SVG elementa](/svg-na-webu#skaliranje)
- Vežba: Skaliraj SVG tag u HTML-u

### Komandna linija

- Čemu služi komandna linija?
  - Dovršavanje komandi (`tab`)
  - Copy (`ctrl+shift+c`) i paste (`ctrl+shift+v`)
  - Izlaz iz procesa (`ctrl+c`)
- Navigacija
  - Listaj (`ls`)
  - Promeni direktorij (`cd`)
  - Ako se izgubiš (`pwd`)
- Rad sa fajlovima
  - Pravi fajl (`touch`)
  - Prikaži fajl (`less`, `more`, `cat`)
  - Kopiraj fajl (`cp`)
  - Pomeri fajl (`mv`)
  - Obriši fajl (`rm`)
- Pretraga
  - `find` komanda
  - `grep` komanda
- Pravljenje aliasa
- Vežba: upiši sortiran spisak `.js` fajlova u `.txt` fajl

### Angular [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-angular)

- Uvod u Angular
  - Moderni web i jednostranične aplikacije (*Single Page Applications*)
  - MVC arhitektura iz Angular perspektive
  - Dvosmerno vezivanje podataka (*two-way data binding*)
- Kontroleri za kontrolu toka aplikacije
  - Pravljenje bazičnog kontrolera
  - Prosleđivanje zavisnosti (*dependency injection*)
- Servisi za dovlačenje podataka
  - Ugrađeni `$http` servis
  - Pravljenje servisa
- Prikaz u HTML-u
  - Evaluacija vrednosti u šablonu
  - Vezivanje prikaza za kontroler
  - Vezivanje prikaza za model (servis)
  - Dinamičko kreiranje listi sa `ng-repeat`
- Filteri
  - Built-in Filters
  - Creating Custom Filters
  - Tying filters together
- Rutiranje na frontendu
- Vežba: prikaži podatke iz JSON-a
- Vežba: napravi živu pretragu sa filterima

### React [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-react)

- JSX format
- Komponente
  - Pravljenje komponenti
  - Nasleđivanje React.Component
  - Render metoda
  - Pravljenje listi sa `map`
- Svojstva (`props`)
  - Interakcija komponenti preko `props`
  - Komponente koje renderuju druge komponente
  - Prosleđivanje svojstava
  - Prosleđivanje *handler* funkcije kao svojstva
- Stanje (`state`)
  - Inicijalizacija stanja
  - Ažuriranje stanja
  - Ažuriranje stanja roditelja
- Stilizovanje
  - `className` atribut
  - Dinamičke CSS klase
- React događaji
- Rutiranje
- Jednosmerni tok podataka
- Vežba: prikaži podatke iz JSON-a

### Typescript [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-typescript)

- Instalacija
- Tipovi
- Klase
- Interfejsi
- Vežba: prevedi `.js` fajl u `.ts`
- Vežba: prevedi projekat u Typescript

### CSS grid

- Šta je CSS grid?
- [Learn CSS grid](//learncssgrid.com/)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [An Introduction to the CSS Grid Layout](https://www.sitepoint.com/introduction-css-grid-layout-module/)
- Primer: [https://codepen.io/mor10/pen/QvmLpd](Standardna struktura sajta u gridu)

### Mobilne i desktop aplikacije

- [Electron za desktop softver sa Javaskriptom](/javaskript-desktop-softver)
- PhoneGap za hibridne mobilne aplikacije
- Ionic (Angular + Typescript) za mobilne aplikacije
- React Native za prirodne IOS i android aplikacije

<!-- ### Three.js [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-threejs)

- 3D grafika na webu
- Koordinatni sistem
- Postavljanje scene
  - Kamera
  - Geometrija
  - Svetlo
  - Renderovanje
- Učitavanje modela
- Animacije
  - Glavna petlja (`main loop`)
  - Animiranje sa `setInterval` i `requestAnimationFrame`
  - FPS (kadrova po sekundi)
  - Pomeranje predmeta
- Kontrole i interakcija
  - Kontrole kamere
  - Kontrole kretanja
- 3D tekst -->

### Van u divljini

- Snalaženje na postojećim projektima
  - Nađi projekat [na Školi koda](/radovi) ili Githubu
- Čitanje dokumentacije (ako postoji)
- Upoznavanje sa strukturom projekta
- Identifikovanje tehnologija i biblioteka
- Pravljenje nove grane i zahtev za izmenom (*pull request*)
- Zadatak: nalaženje i menjanje postojećeg projekta otvorenog koda
