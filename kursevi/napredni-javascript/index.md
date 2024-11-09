---
layout: kurs
title: Napredni Javascript
image: /images/ljudi/ibm.jpg
kurs: napredni-js
---

**Nauči objektno orjentisanu paradigmu, module i asinhrono programiranje. Nauči napredne koncepte jezika, strukture podataka i algoritme.**

***Neophodan uslov za uspešno praćenje kursa je efektivna upotreba Javascripta.***

### Objektno orijentisani Javascript

- [Objektno-orijentisano programiranje](/objektno-orijentisano-programiranje)
- Modelovanje klase
- [Nasleđivanje klasa](/nasledjivanje-klasa)
  - Apstrakcija i neponavljanje koda
  - [Polimorfizam](/polimorfizam)
  - Otvoren/zatvoren princip (otvoren za proširenje, zatvoren za menjanje)
- Čemu služe `constructor` i `super`?
- Pristupne `get` i `set` metode (geteri i seteri)
- [Statične metode](/javascript-staticki-metodi)
- Provera pretka sa `instanceof`
- Vežba: napravi likove za igru (klasa Junak i naslednici Vilenjak i Ork)

### ES6 moduli

- [Moduli u Javascriptu](/javascript-moduli)
- [Imenovani izvoz i uvoz](/imenovani-izvoz-i-uvoz)
- [Podrazumevani izvoz i uvoz](/podrazumevani-izvoz-i-uvoz)

### Funkcionalno programiranje

- [Naredbe i izrazi](/naredbe-i-izrazi)
- [Imperativno vs. funkcionalno programiranje](/imperativno-vs-funkcionalno-programiranje)
- [Funkcionalno programiranje](/funkcionalno-programiranje)
- [Funkcije višeg reda](/funkcije-viseg-reda)

### Moć funkcija
- [Funkcija kao objekat](/javascript-funkcija-kao-objekat)
- [Funkcija kao argument (povratna funkcija)](/kako-rade-callback-funkcije)
- [Funkcija koja vraća funkciju](/funkcija-koja-vraca-funkciju)
- [Funkcija koja poziva sebe (rekurzija)](/rekurzija)
- Čiste i nečiste funkcije
- [Višestruko vraćanje vrednosti](/visestruko-vracanje-vrednosti)
- [Zatvorenost (_closure_)](/javascript-zatvorenost)
- [Samoizvršne anonimne funkcije](/samoizvrsne-anonimne-funkcije)
- Podrazumevani argumenti
- Streličaste funkcije

### Kontekst izvršenja (`this`)
- [Vrednost `this` i kontekst izvršenja](/javascript-this)
- [Pozajmljivanje metoda sa `call` i `aply`](/javascript-call-aply)
- Vezivanje konteksta sa `bind`
- `this` i streličaste funkcije
- Vežba: proveri `this` unutar obične i streličaste povratne funkcije (`addEventListener` i `setTimeout`)

### Projektni obrasci
- [Dobre prakse pisanja Javascripta](/javascript-dobre-prakse)

### Šablonske strune (\` \`) [<img src="/images/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-sablonske-strune)

- Čemu služe šablonske strune?
  - Višelinijski tekst
  - Evaluacija izraza unutar strune
- Slučajevi upotrebe
  - Evaluacija HTML-a
  - HTML u Javaskriptu
- Prosleđivanje funkciji (*tagged template literals*)
- Vežba: generisanje HTML-a iz JS-a

### Prototipska priroda jezika

- [Šta je prototip?](/javascript-prototip)
- [Konstruktorske funkcije](/konstruktor-funkcije)
- [Svojstvo prototype](/svojstvo-prototype)
- [Prototipski lanac](/prototipski-lanac)
- [Ispitivanje prototipa](/ispitivanje-prototipa) (`isPrototypeOf`, `getPrototypeOf`)
- [Prototipsko nasleđivanje](/prototipsko-nasledjivanje)
- [Proširenje ugrađenih objekata](/prosirenje-ugradjenih-objekata)
- [Vežba: napraviti alias za addEventListener](/vezba-alijas-za-dodavanje-dogadjaja)

### Asinhrono programiranje

- [Asinhrono programiranje](/asinhrono-programiranje)
- Pakao povratnih funkcija (*callback hell*)
- [Obećanja](/obecanja)
  - [Kreiranje obećanja](/kreiranje-obecanja)
  - [Niz obećanja](/niz-obecanja)
- [Observable](https://jsbin.com/pitaxuv/edit?js,console)
- Asinhrone funkcije (`async/await`)
- Vežba: izvršenje povratne funkcije po učitanju svih slika

### Podaci i strukture

- [Uvod u strukture podataka](/strukture-podataka)
- [Mapa](/javascript-mapa) (*Map*)
- [Skup](/javascript-skup) (*Set*)
- Tipski nizovi (*typed arrays*)
- [Ispitivanje tipa objekta](/ispitivanje-tipa-objekta)
- [Razlika null i undefined](/javascript-null-i-undefined)

### Destrukturiranje

- [Destrukturiranje objekata i nizova](/javascript-destrukturiranje)
- [Operator razdvajanja i parametar ostatka](/javascript-spread-i-rest) (`spread ` i `rest`)
- neodređen broj argumenata funkcije (`Math.max(...niz)`)
- spajanje nizova razlaganjem (`[...niz, 4, 5, 6]`)

### Iteratori i generatori

- [For...of petlja](/javascript-for-of-petlja)
- [Iteratori i iterable](/javascript-iteratori-i-iterable)
- [Generator funkcije](/javascript-generatori)
- [Iteracija generatora](/javascript-iteracija-generatora)

### Propagacija događaja

- [Propagacija događaja u Javascriptu](/javascript-propagacija-dogadjaja)
- [Propagacija događaja naniže (*capturing*)](/javascript-capturing)
- [Propagacija događaja naviše (*bubbling*)](/javascript-bubbling)
- [Zaustavljanje propagacije događaja](/zaustavljanje-propagacije)

### Refaktorisanje uslova

- Odvajanje uslova u funkciju
- Uklanjanje ugnježdenih uslova
- Refaktorisanje uslova do nestanka
- Logički zakoni za programere

## Razno

- [Prevođenje brojčanih sistema](/javascript-prevodjenje-brojcanih-sistema)
- [Bitovski operatori u Javaskriptu](/bitovni-operatori-javaskript)
- [Hvatanje grešaka](/javascript-hvatanje-gresaka)