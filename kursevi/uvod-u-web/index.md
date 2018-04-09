---
layout: kurs
title: Uvod u web
github: uvod-u-web
image: /images/kursevi/html.gif
opis: Nauči da praviš funkcionalne stranice sa tekstom, slikama, vezama, multimedijom. Nauči temelje web razvoja.
---

![web-design]({{page.image}})

## Učimo HTML i CSS [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/{{page.github}})

# Uvod u web

**Nauči da praviš funkcionalne stranice sa tekstom, slikama, vezama, multimedijom. Nauči da ulepšavaš stranice, koristeći prilagodljivi dizajn, tipografiju, boje i animacije. Nauči temelje web razvoja.**

***Kurs je za apsolutne početnike.***

<!-- <a href="/kursevi/prijava?kurs=1" class="btn float-right">Prijavi se</a> -->

### Uvod

- [Čemu služe HTML, CSS i Javascript?](https://youtu.be/BFc_YPAxQcg)
- [Uvod u HTML?](/uvod-u-web/uvod-html)
- [Uvod u CSS?](/uvod-u-web/uvod-css)
- [Kratka istorija weba](/kratka-istorija-weba)
- [Kratka istorija web dizajna](/kratka-istorija-web-dizajna)
- Konvencija imenovanja fajlova i foldera

### Instalacija alata

- Instalacija editora (Notepad++, [Atom](https://atom.io/), [Brackets](//brackets.io/), [Sublime](https://www.sublimetext.com/), [Code](https://code.visualstudio.com/)...)
- Instalacija dodataka za:
  - prepoznavanje koda
  - ulepšavanje koda
  - otkrivanje grešaka u kucanju
- Razvojni alati pregledača
- Brisanje keša i tvrdo osveženje (*hard refresh*)

### Moja prva stranica

- [Pravljenje HTML fajla](/pravljenje-html-fajla)
- [HTML elementi](/html-elementi)
  - [Osnovne HTML oznake](/osnovne-html-oznake) (`h1`, `p`, `img`, `a`)
  - Razlikovanje `block` i `inline` elemenata
  - [Gneždenje elemenata](/ucimo-html/gnezdenje)
- [HTML atributi](/html-atributi) (`src`, `href`)
  - [Upotreba navodnika](/ucimo-html/navodnici)
- Vežba: Napravi stranicu koja ima naslov, tekst, sliku i link
- Vežba: postavi stranicu na Github

### Stilizovanje stranice

- Dodavanje CSS-a
  - Unutar HTML-a (`style` tag)
  - Kao poseban fajl (`link` tag)
- Selektori
  - `tag` (za osnovne stilove)
  - `#id` (samo za specifične slučajeve, izbegavati)
  - `.klasa` (najčešće se koristi)
- Boje
  - Izbor osnovne palete ([primeri](https://color.adobe.com/explore/))
  - Pravljenje pomoćnih klasa za boje
  - [Heksadecimalni brojevi](/heksadecimalni-brojevi)
- [Podrazumevani stilovi pregledača](/podrazumevani-stilovi-pregledaca)
- Vežba: Promeni boju slova i pozadine
- Vežba: Otkrij ko ne nasleđuje boju od roditelja?

### Tipografija

- [Tipografija i web development](/tipografija-i-web-development)
  - Fontovi sa kvačicama (*serif*) i bez kvačica (*sans serif*)
  - Poravnanje (levo, desno, centar i ravnomerno)
  - Proredi između redova i slova
- Merne jedinice
  - Pikseli `px` (veličina jedne tačke)
  - Procenti `%` (u odnosu na roditelja)
  - [Upotreba ema za tipografiju](/em-jedinica-tipografija)
- Vežba: izaberi porodicu i veličinu slova za naslove i tekst

### HTML struktura

- [HTML struktura stabla](/ucimo-html/stablo)
  - Glava stranice, tj. metapodaci
  - Telo stranice, tj. sadržaj
- Obavezna `<!DOCTYPE html>` oznaka
- Opcione `html`, `head`, i `body` oznake
- Vežba: postavi osnovnu strukturu stranice
- Vežba: proveri [validnost stranica](https://validator.w3.org/)

### Liste i navigacija

- Liste (`li`)
  - Redne liste (`ol`) i bez redosleda (`ul`)
  - Ugnježdene liste
- Navigacija (`nav`)
  - pravljenje navigacije pomoću liste
  - pravljenje navigacije pomoću linkova
  - menjanje boje na hover

### Linkovi i putanje

- Veze (`a`)
  - [URL, jedinstvena adresa dokumenta](/url)
  - Relativne i apsolutne putanje
  - Unutrašnje veze ka delu stranice
  - Otvaranje u novom prozoru (`target` atribut)
- [Stilizovanje veza](/stilizovanje-veza)
- Vežba: napravi navigaciju i poveži stranice
- Vežba: napravi prilagodljivi dizajn navigacije

### Fleksibilni prikaz

- Fleksibilni prikaz (`display: flex`)
- Horizontalno poravnanje (`justify-content`)
- Vertikalno poravnanje (`align-items`)
- Razmak između elemenata (`space-around`, `space-between`)
- Prelamanje u novi red (`flex-wrap`)
- Deformisanje proporcije elemenata
- Vežba: fleksibilno prikaži navigaciju
- Vežba: fleksibilno prikaži krugove

### Prilagodljivi dizajn

- [Uvod u prilagodljivi dizajn](/prilagodljivi-dizajn)
- Izvorna prilagodljivost HTML-a ([motherfuckingwebsite.com](http://motherfuckingwebsite.com/))
- Fiksiranje dizajna i tačke preloma (*breakpoints*)
- CSS medija upiti (*media queries*)
- Prvo mobilni dizajn (*mobile first*)
- Bootstrap biblioteka
- Vežba: napravi dva prikaza navigacije, za mobilni i desktop
- Vežba: prilagodi prikaz stranica za razne uređaje

### Slike i fotogalerija

- Optimizacija slika za web
  - formati: jpg, png, gif, svg
- Razlika `alt` i `title` atributa
- Uključenje spoljašnjih slika ([Wikimedia Commons](https://commons.wikimedia.org/)) i zabrana uključenja
- Dodavanje pozadinske slike
- `picture` tag za istu sliku raznih veličina
- Vežba: dodaj više veličina slike
- Vežba: napravi fotogaleriju
- Vežba: promeni efekat slike na hover

### Box model

- Box model (sadržaj, pading, granice, margine)
- Unutrašnje praznine (`padding`) i širina elementa
- Granice (*border*) i širina elementa
  - Debljina, boja i vrsta granica
- Vežba: promeni `box-sizing` elemenata u `border-box`, menjaj pading, uporedi razliku

### Formulari i kontakt

- Unosna (`input`) polja
  - Tipovi unosa (`text`, `number`, `email`, `url`, `tel`)
  - Polje za više redova teksta (`textarea`)
  - Padajući meni (`select`)
  - `checkbox` polje i `radio` dugmad
  - `name`, `value` i `placeholder` atributi
- Dodavanje labele (`label`) i njena funkcija
- Validacija formi:
  - po tipu polja
  - `required` (obavezno polje)
  - `pattern` ([regularni izrazi](/regularni-izraz))
- Slanje formulara serveru (`POST` metoda)
- [Kako napraviti kontakt formu bez bekenda?](/kontakt-forma-bez-bekenda)
- Vežba: validiraj unos i odredi obavezna polja
- Vežba: pošalji kontakt formu (koristi [formspree.io](https://formspree.io/))

### Pozicioniranje elemenata

- Elementi fiksirani za ekran (`position: fixed`)
- Apsolutno pozicionirani elementi (u odnosu na prvog relativnog roditelja)
- Plutanje elemenata (`float`) kao loša praksa
- Promena redosleda slojeva (`z-index`)
- Vežba: napravi fiksirano zaglavlje
- Vežba: sredi visinu roditelja koji sadrži plutajuće elemente

### Dobre CSS prakse
- [Dobre CSS prakse](/css-saveti)
- Upotreba `!important` kao loša praksa
- Skraćene direktive i opasnost od gaženja
- Vežba: organizuj kod u logične celine
- Vežba: podeli CSS u manje fajlove i uvezi ih u glavni fajl

### Napredni selektori
- Naslednici (`div div`) i direktna deca (`div > div`)
- `[atribut]` selektor
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

### Mrežna komunikacija

- [Server](/server)
- [Portovi](/portovi)
- [Sistem imena domena](/sistem-imena-domena)
- [HTTP protokol](/http)
- HTTP metode
  - GET (čitanje resursa preko mreže)
  - POST (slanje resursa preko mreže)
- [URL parametri](/url)

### Optimizacija brzine
- Merenje brzine učitavanja ([PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/))
- Optimizacija brzine učitavanja
  - Optimizacija slika
  - Minifikacija koda
  - Uklanjanje ostalih prepreka

### SEO optimizacija

- Identifikacija ključnih reči
- Sređivanje sadržaja, naslova, linkova, titlova, meta opisa...
- Optimizacija slika (jasni nazivi fajlova, alt i title atributi)
- Dodavanje struktuiranih podataka (*structured data*)
- *PageRank* algoritam: dodavanje veza ka sajtu (društvene mreže, blog, Github)
- Čitljive URL adrese

### Završni rad

- Izbor zaršnog rada (ideje možete naći [ovde](https://trello.com/c/gMc2zPNn/1-ideje-za-sajtove-i-aplikacije))
- Osmišljavanje dizajna
- Prevođenje dizajna u kod ([InVision](https://www.invisionapp.com/))
- Postavljanje na server
