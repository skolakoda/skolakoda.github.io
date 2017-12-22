---
title: Linter, mali pomoćnik koji ispravlja tvoj kod
author: damjan
layout: lekcija-frontend
permalink: /linter
---

> Otkad sam pre par godina otkrio Linter, više nijedan projekat ne počinjem bez njega!

**Lint** ili **linter** je alatka koja služi za otkrivanje grešaka u kodu, pre izvršenja. To se zove **statička analiza koda**, jer analizira program koji još nije pokrenut (još uvek ne može napraviti štetu). Linter je rana prevencija, a nakon njega dolaze druge linije odbrane, kao što su pregled koda, testiranje, debagovanje i slično.

Pored sintaksnih, linter otkriva i stilske greške, kao što su loša poravnanja, razmaci, mešani navodnici, i slično.

Linteri postoje za razne jezike, a za Javascript su najpoznatiji [JSLint](//www.jslint.com/), [JSHint](//jshint.com/) i [ESLint](https://eslint.org/). Uglavnom se mogu koristiti online, preko komandne linije ili kao dodatak za editor. Ovde ćemo opisati kako radi ESLint dodatak za [Atom](https://atom.io/) editor.

## Podešavanja

Potrebno je da prvo instalirate Atom i ESLint dodatak, a potom ga podesite. Instalaciju nećemo posebno opisivati, ima puno tutorijala na netu.

Nakon što ste instalirali ESLint za Atom, odete na njegova podešavanja, gde možete izabrati da li želite da uvek radi ili samo ako ima konfiguracioni fajl, i da li želite da automatski ispravlja kada sačuvate izmenu.

Ako ne želite da ispravlja na `save`, nego po komandi, postupak je malo složeniji. Pritisnete `ctrl + shift + p` i otvori vam se komandna paleta. Unutar nje ukucate `eslint` i dobijete ponuđene komande. Izaberete `Fix file` i to je to. Linter će srediti sve što može automatski ispraviti (verovatno ćete nešto morati i ručno).

Ispravljanje grešaka je korisno koliko i nalaženje, a posebno ako ima puno stilskih "grešaka" koje treba srediti. Linter podrazumevano primenjuje neki svoj stil, a moć konfiguracije je u tome što možete definisati pravila kakva želite.

Ako nemate konfiguracioni fajl za ESLint (`.eslintrc`), možete ga prekopirati sa [kodnog standarda](https://github.com/skolakoda/kodni-standard) Škole koda.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4kYL6SXHx2M" frameborder="0" allowfullscreen></iframe>
