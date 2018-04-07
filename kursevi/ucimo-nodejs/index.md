---
layout: kurs
title: Učimo Node.js
github: ucimo-nodejs
image: /images/kursevi/nodejs-logo.jpg
kurs: nodejs
---

![nodejs]({{page.image}})

## Učimo Node.js [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-nodejs)

# Bekend kao servis

**Nauči Node.js i NPM ekosistem. Nauči da praviš backend API koji opslužuje Android, IOS i web aplikacije. Nauči da prikupljaš, obrađuješ i služiš podatke.**

***Preduslov za ovaj kurs je osnovno znanje Javaskripta.***

<a href="/kursevi/prijava?kurs=3" class="btn float-right">Prijavi se</a>

<!-- https://scotch.io/tutorials/building-and-securing-a-modern-backend-api -->

### Uvod u Node.js
- Čemu služi Node.js?
- Razlika od JS-a u pregledaču
  - nema globalne objekte `window` i `document`
  - ima globalne objekte `global` i `process`
- Sržni moduli (`fs`, `path`, `os`, `http`)

### NPM (*Node Package Manager*)
- Čemu služi upravljač paketima?
- Lična karta projekta: `package.json` fajl
- Globalna i lokalna instalacija biblioteka
- Razvojne NodeJS alatke
  - `nodemon`: automatsko restartovanje node aplikacije
  - [Linter, mali pomoćnik koji ispravlja tvoj kod](/linter)
- Uvoz i izvoz modula (alternativne sintakse `import` i `require`)

### Asinhrono programiranje
- Događaji i povratne funkcije (*callback*)
- Gneždenje povratnih funkcija
- Povratni pakao (*[callback hell](http://callbackhell.com/)*)
- Obećanja (*promises*)
- `async` / `await`
- vežba: [žongliranje](https://github.com/workshopper/learnyounode/blob/master/exercises/juggling_async/problem.md) (asinhrono učitavamo podatke sa raznih servera, prikazujemo ih željenim redom)

### Rad sa fajlovima
- Čitanje fajlova i direktorija (`fs` modul)
- Problem putanja za razne operativne sisteme (`path` modul)
- Globalne vrednosti `__dirname` i `__filename`
- Sinhrone ili asinhrone operacije
- Vežba: asinhrono čitanje i pisanje fajlova

### Žetva podataka (*web scraping*)
- Uvod u žetvu podataka
- Čitamo HTML stranice
  - `cheerio`: jQuery na serverskoj strani
- Čitamo API (programski interfejs aplikacija)
- Filtriramo podatke
- Čuvamo podatke

### Server i služenje podataka

- [Šta je server?](/server)
- [Šta su web servisi?](/web-servisi)
- Pokretanje servera
- Služenje podataka
- Zahtev i odgovor (`request` i `response`)
- [Autentifikacija korisnika pomoću tokena](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)
- Vežba: [pravimo bekend kao REST API servis](https://stormpath.com/blog/tutorial-build-rest-api-mobile-apps-using-node-js)

### Striming (tečenje) podataka
- [Šta je tečenje](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)?
- Strimovanje iz fajlova
- Povezivanje cevima (*pipes*)
- Događaji
- Upotreba bafera za binarne podatke

### *Express* za serverske aplikacije [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-express)
- Odgovor na `GET` i `POST` zahteve
- Rute
- Šabloni (`ejs`, Jade i Hilebars)
- Cross-origin resource sharing (CORS)

### *WebSocket* za aplikacije u realnom vremenu
- Dodavanje `Socket.io` u aplikaciju
- Emitovanje i slušanje događaja
- Vežba: chat aplikacija

### Rad sa bazama podataka
- Relacione baze podataka (MySQL)
- NoSQL baze podataka (MongoDB i Mongoose)
- Povezivanje sa bazom podataka
- Izvođenje CRUD operacija (CREATE, READ, UPDATE, DELETE)
- Pretvaranje korisničkih zahteva u web servise
  - Prihvatanje korisničkog unosa (`POST` zahtev)
  - Upisivanje korisničkih podataka u bazu
