---
layout: kurs
title: Učimo HTML
github: ucimo-web-dizajn
image: /images/kursevi/html.gif
desc: Na ovom kursu pravimo funkcionalne stranice sa tekstom, slikama, vezama, multimedijom, formularima i učimo temelje web razvoja.
---

![]({{page.image}})

## Učimo HTML
# Uvod u web

**{{page.desc}}**

***Kurs je za apsolutne početnike.***

<a href="/kursevi/prijava?kurs=1" class="btn float-right">Prijavi se</a>

### Uvod

- [Čemu služi HTML?](/ucimo-html/uvod) <a href="https://youtu.be/BFc_YPAxQcg"><img src="/images/ui/ikonice/youtube.svg" class="ikonica-manja" alt="play-video"></a>
- Služenje stranica i HTTP protokol
- Konvencija imenovanja fajlova i foldera

### Moja prva stranica

- [HTML elementi](/ucimo-html/elementi)
  - [Oznake za formatiranje teksta](/ucimo-html/formatiranje-teksta)
  - [Gneždenje elemenata](/ucimo-html/gnezdenje)
  - `inline` i `block` elementi
- [HTML atributi](/ucimo-html/atributi)
  - [Navodnici i polunavodnici](/ucimo-html/navodnici)
- Postavljanje projekta na Github
- Vežba: napravi stranicu o sebi
- Vežba: proveri da li su elementi block ili inline (`span`, `div`, `main`, `header`, `i`, `b`, `h1`)

### Struktura stranice

- Validna struktura HTML-a
- [HTML stablo](/ucimo-html/stablo)
  - Glava stranice, tj. metapodaci
  - Telo stranice, tj. sadržaj
- Vežba: postavi osnovnu strukturu stranice
- Vežba: proveri [validnost stranica](https://validator.w3.org/)

### Liste

- Liste (`li`)
  - Redne liste (`ol`) i bez redosleda (`ul`)
  - Ugnježdene liste
- Vežba: napravi TODO listu

### Navigacija

- Navigacija (`nav`)
  - pravljenje navigacije pomoću linkova
  - pravljenje navigacije pomoću liste
- HTML simboli i navigacija
- Vežba: napravi navigaciju i poveži stranice
- Vežba: dodaj simbole za navigaciju

### Linkovi i putanje

- Relativne i apsolutne putanje
- Unutrašnji linkovi ka delu stranice
- Otvaranje veze u novom prozoru (`target` atribut)
- Vežba: napravi sadržaj knjige povezan sa poglavljima

### Slike

- Rad u Gimp-u
- optimizacija slika za web
- web formati: jpg, png, gif, svg
- `src`, `alt` i `title` atributi
- uključenje spoljašnjih slika ([commons.wikimedia.org](https://commons.wikimedia.org/)) i zabrana uključenja ([pixabay.com](https://pixabay.com/))
- upotreba `picture` elementa za prilagodljive slike
- Vežba: dodaj sliku sa drugog domena
- Vežba: dodaj sliku sa raznim veličinama
- Vežba: dodaj `favicon` ikonicu
- Vežba: napravi fotogaleriju

### Formulari

- Kako rade formulari?
- Standardna polja
  - Unosna polja (`input`) i tipovi (`text`, `number`, `email`, `url`, `tel`)
  - Polje za više redova teksta (`textarea`)
  - Padajuci meni (`select`)
  - `checkbox` i `radio` dugmad
- Dodavanje labele (`label`) i njena funkcija
- Validacija formi:
  - po tipu polja
  - `required` (obavezno polje)
  - `pattern` ([regularni izraz](/regularni izraz))
- URL parametri (*[query string](https://en.wikipedia.org/wiki/Query_string)*)
- Slanje formulara serveru i traženje odgovora od servera (`POST` i `GET` metoda)
- Vežba: validiraj vrste unosa i odredi obavezna polja
- Vežba: zatraži Google pretragu sa GET metodom

### Dinamički dodaci za statične stranice

- Komentari za statične sajtove (*[Disqus](https://disqus.com/)*)
- Dumgići za deljenje (*[HTML Share Buttons](https://simplesharebuttons.com/html-share-buttons/)*)
- [Kako napraviti kontakt formu bez bekenda?](/kontakt-forma-bez-bekenda)
- Vežba: dodaj komentare na stranicu
- Vežba: dodaj dugmiće za deljenje
- Vežba: pošalji kontakt formu sa POST metodom (koristi [formspree.io](https://formspree.io/))

### Audio i video sadržaj

- dodavanje `<audio>` elementa
- dodavanje `<video>` elementa
- ugradivanje video i audio sadržaja sa drugih stranica
- Vežba: dodaj sopstveni video ili audio
- Vežba: dodaj spoljašnji video ili audio

### Tabele
- Elementi tabele (redovi i kolone)
- Vežba: prikaži podatke tabelarno

### Srodni jezici
- XML, HTML i SVG
- Sopstvene HTML oznake
- Vežba: napravi svoje tagove

### SEO optimizacija

- Identifikacija ključnih reči
- Sređivanje sadržaja, naslova, linkova, titlova, meta opisa...
- Optimizacija slika (jasni nazivi fajlova, alt i title atributi)
- Dodavanje struktuiranih podataka (*structured data*)
- *PageRank*: dodavanje veza ka sajtu (društvene mreže, Github, Youtube, blog)
- Čitljive URL adrese
- Vežba: Optimizuj svoje stranice i nađi još neku foru

### Optimizacija brzine učitavanja

- Merenje brzine učitavanja ([PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/))
- Optimizacija brzine učitavanja
  - Optimizacija slika
  - Minifikacija koda
  - Uklanjanje ostalih prepreka

### Mrežni protokoli

- Protokol za transfer fajlova (`ftp`)
- Protokol za transfer mejlova (`SMTP`)
- Protokol za transfer teksta (`http`)
  - Sigurni protokol za transfer teksta (`https`)
  - Najčešći zahtevi: `GET` i `POST`
  - Ređi zahtevi: `PUT`, `DELETE`
  - Statusni kodovi (`200`, `404` i ostali)
