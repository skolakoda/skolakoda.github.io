---
title: Imenovanje fajlova i foldera
layout: lekcija-html
permalink: /imenovanje-fajlova-i-foldera
---

**Na webu fajlove i foldere uvek imenujemo malim slovima.**

Potrudite se da nazivi fajlova ne sadrže razmake ni čudne znakove. Koristite samo slova, srednju crtu (`-`), donju crtu (`_`) i brojeve. Posebno vodite računa da naziv svakog fajla bude smislen.

Operativni sistem Windows ne razlikuje mala i velika slova u nazivu fajlova, dok Linux i Mac razlikuju. Ako stranice napravimo na Windows računaru, a objavimo na serveru koji ima Linux, može se desiti da neki linkovi puknu (npr. `About.html`). Zato je najbolje u nazivima fajlova i foldera koristiti samo mala slova.

## `index.html` fajl

**Početna stranica svakog sajta treba da se zove `index.html`.**

Serveri obično serviraju podrazumevan indeksni fajl kada URL adresa vodi do foldera, umesto do samog fajla. Većina servera će prvo potražiti da li postoji `index.html` stranica, koju servira kao podrazu­mevanu.

Kad koristimo podrazumevani indeksni fajl adresa je kraća, jer ne moramo pisati naziv fajla. Na primer, URL adresa može biti `skolakoda.org/kursevi/`, umesto  `skolakoda.org/kursevi/index.html`.

{:.uokvireno}
Ako ne dodamo indeksni fajl, neki serveri će izlistati posetiocima sadržaj foldera. Ako ne želite da neko „zaviruje" u vaše fajlove, treba da dodate `index.html` ili podesite kontrole pristupa.
