---
title: Podrazumevani stilovi pregledača
layout: lekcija-html
permalink: /podrazumevani-stilovi-pregledaca
---

![](https://i.stack.imgur.com/E1ajW.png)

***Postoji dosta CSS-a koji se primenjuje na dokumente bez definisanih stilova, a sav taj kod je definisan u okviru samog pregledača.***

Podrazumevana veličina i font kojim se prikazuju naslovi, razmak između elemenata i linija teksta, stavke u listama i različita vrsta unosnih polja definišu se na osnovu podrazumevanih stilova.

Podrazumevani stilovi se razlikuju od pregledača do pregledača, zato što ne postoji specifikacija koja definiše inicijalne stilove dokumenata.

## CSS reset

Kao odgovor na to, određeni korisnici su razvili reset stilove, čiji je cilj da smanje brojne nekonzistentnosti eksplicitnim definisanjem vrednosti standardnih svojstava.

Najjednostavniji primer za to je ukidanje svih razmaka:

```css
* {
  margin: 0;
  padding: 0;
}
```

Nakon toga se razmaci moraju iznova definisati, u skladu sa dizajnom.


Izvor: Eric Meyer, *Smashing CSS: Profesionalne tehnike za dizajn savremenih web stranica*, Beograd 2012.
