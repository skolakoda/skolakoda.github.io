---
layout: kurs
title: Napredni Javascript
image: /images/ljudi/ibm.jpg
kurs: napredni-js
---

**Nauči objektno orjentisanu paradigmu, module i asinhrono programiranje. Nauči napredne koncepte jezika, strukture podataka i algoritme.**

***Preporučeni preduslov za uspešno praćenje kursa je bar 2 godine programiranja.***

<!-- <a href="/prijava?kurs=5" class="btn float-right">Prijavi se</a> -->

### Objektno orijentisani Javascript

- [Objektno orjentisan pristup](/objektno-orijentisano-programiranje)
- Modelovanje klase
- [Nasleđivanje klasa](/nasledjivanje-klasa)
  - Apstrakcija i neponavljanje koda
  - [Polimorfizam](/polimorfizam)
  - Otvoren/zatvoren princip (otvoren za proširenje, zatvoren za menjanje)
- Čemu služe `constructor` i `super`?
- Pristupne `get` i `set` metode (geteri i seteri)
- Statične (`static`) metode
- Provera pretka sa `instanceof`
- Vežba: napravi likove za igru (klasa Junak i naslednici Vilenjak i Ork)

### Moduli i modularnost

- Moduli kao jedinice koda zatvorenog opsega
  - Princip jedne odgovornosti
  - Ekapsulacija, skrivanje informacija i izlaganje interfejsa
  - Jaka unutarnja kohezija i labava međusobna vezanost
- Učitavanje modula (prirodno, *Babel* i *Webpack*)
- Imenovani izvoz i uvoz (`export`, `import`)
- Podrazumevani izvoz i uvoz
- Izvoz funkcija, klasa, konstanti i objekata
- Uvoz iz starih skripti koje nemaju izvoz

### Moć funkcija
- Funkcija kao objekat (sa svojstvima i metodama)
- Funkcija kao argument (povratna funkcija)
- [Funkcija koja vraća funkciju](/javascript-zatvaranje#funkcija-koja-vraća-funkciju)
- [Funkcija koja poziva sebe (rekurzija)](/rekurzija)
- Čiste i nečiste funkcije
- [Višestruko vraćanje vrednosti](/visestruko-vracanje-vrednosti)
- Deklaracija funkcije i dizanje (_hoisting_)
- [Zatvaranje (_closure_)](/javascript-zatvaranje) i modularni obrazac
- Samoizvršne anonimne funkcije i `void` operator
- Podrazumevani argumenti
- Streličaste funkcije
- Generator funkcije (`function*`)
  - Pauziranje generator funkcije sa `yield`
  - Nastavak izvršenja sa `next()`
- [Imperativno vs. funkcionalno programiranje](/imperativno-vs-funkcionalno-programiranje)

### Kontekst izvršenja (`this`)
- Vrednost `this` i kontekst izvršenja (funkcije, metode, klase, povratne funkcije)
- Promena konteksta sa `call`, `aply` i `bind`
- `this` i streličaste funkcije
- Vežba: proveri `this` unutar obične i streličaste povratne funkcije (`addEventListener` i `setTimeout`)
- Vežba: proveri `this` unutar klasa i objekata

### Šablonske strune (\` \`) [<img src="/images/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-sablonske-strune)

- Čemu služe šablonske strune?
  - Višelinijski tekst
  - Slobodna upotreba navodnika
  - Evaluacija izraza unutar strune
- Slučajevi upotrebe
  - Evaluacija HTML-a
  - HTML u Javaskriptu
- Prosleđivanje funkciji (*tagged template literals*)
- Vežba: generisanje HTML-a iz JS-a

### Nizovi i njihove metode
- `map`, `filter`, `reduce`
- `for of` (iterira nizove, objekte, strune, mape, skupove, liste dom elemenata...)
- Pretvaranje nizolikih predmeta u nizove (`Array.from()`)
- Kopiranje nizova razlaganjem `[...items]`

### Prototipska priroda jezika

- [Šta je prototip?](/javascript-prototip)
- [Konstruktorske funkcije](/konstruktor-funkcije)
- [Svojstvo prototype](/svojstvo-prototype)
- [Prototipski lanac](/prototipski-lanac)
- [Ispitivanje prototipa](/ispitivanje-prototipa) (`isPrototypeOf`, `getPrototypeOf`)
- [Prototipsko nasleđivanje](/prototipsko-nasledjivanje)
- [Proširenje ugrađenih objekata](/prosirenje-ugradjenih-objekata)
- Vežba: napraviti alias za `addEventListener`

### Asinhrono programiranje

- Asinhrono učitavanje resursa
- Gneždenje povratnih funkcija
- Pakao povratnih funkcija (*callback hell*)
- [Obećanja](/obecanja)
- [Observable](https://jsbin.com/pitaxuv/edit?js,console)
- Asinhrone funkcije (`async/await`)
- AJAX zahtev: uvođenje `fetch()` umesto `new XMLHttpRequest()`
- Vežba: izvršenje povratne funkcije po učitanju svih slika

### Strukture podataka
- [Strukture podataka](/strukture-podataka)
- Nove strukture podataka u Javascriptu
  - Skupovi (`sets`)
  - Mape (`maps`)
  - Tipski nizovi (`typed arrays`)

### Destrukturiranje
- razlaganje (destrukturiranje) nizova i objekata
- širenje (`spread `) i ostatak (`rest`)
- neodređen broj argumenata funkcije (`Math.max(...niz)`)
- spajanje nizova razlaganjem (`[...niz, 4, 5, 6]`)

### Bonus

- [Bitovski operatori u Javaskriptu](/bitovni-operatori-javaskript)
