---
title: Moduli u Javascriptu
layout: lekcija-napredni-js
permalink: /javascript-moduli
---

**Moduli su jedinice koda zatvorenog opsega, što znači da varijable proglašene u modulu nisu vidljive u drugim fajlovima.**

JavaScript je tradicionalno korišćen u pregledačima, a skripte su uglavnom bile male, pa nije bilo problema oko organizacije. Međutim, JavaScript projekti su postajali sve veći, a bez efikasnog sistema modula, upravljanje kodom je postajalo noćna mora.

Moduli su u Javascript zvanično uvedeni 2015 godine. Pre verzije ES6, moduli su mogli da se koriste pomoću biblioteka, a postojale su dve glavne sintakse - `CommonJS`, koju je usvojio Node.js, i `AMD` (*Asynchronous Module Definition*), za upotrebu u pregledaču.

Javascript moduli su organizovani po fajlovima. Ne postoji rezervisana reč za modul, već `js` fajl automatski postaje modul kada upotrebimo ključnu reči `export` ili `import`.

## Osobine ES6 modula

ES6 moduli prate sledeće smernice:
- Moduli mogu da se uvezu iz drugih modula.
- Moduli su singularni. Modul se uvozi samo jednom, čak i kada pokušamo da ga uvezemo nekoliko puta.
- Modul ima pristup podacima unutar njega. Samo deklaracije označene rečju `export` su dostupne za uvoz izvan modula.

Prilikom uvoza iz modula:
- Možemo da koristimo relativne putanje. Na primer, koristimo putanju `"../lib/server"` ako uvozimo u fajl `project/src/app.js`, a modul je smešten u `project/lib/server.js`.
- Možemo da koristimo apsolutne putanje.
- Možemo da izostavimo ekstenziju `.js` kada uvozimo modul.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
