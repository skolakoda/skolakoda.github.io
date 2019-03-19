---
title: Propagacija događaja u Javascriptu
layout: lekcija-napredni-js
permalink: /javascript-propagacija-dogadjaja
image: /images/koncepti/web/spustanje-dizanje-dogadjaja.png
---

**Da li će pritisak na dugme prvo okinuti povratnu funkciju na samom dugmetu ili na telu dokumenta? Da bismo bili sigurni, potrebno je razumeti propagaciju događaja.**

Propagacija događaja kroz stranicu ima dve faze:

- [propagacija naniže (*capturing*)](/javascript-capturing)
- [propagacija naviše (*bubbling*)](/javascript-bubbling)

Događaj se prvo prenosi naniže, od roditelja do ciljanog elementa, a zatim naviše, od ciljanog elementa ka roditelju. 

## Redosled propagacije

Recimo da imamo dugme unutar diva:

```html
<div>
  <button>Klikni me!</button>
</div>
```
Kada kliknemo dugme, mi smo, ustvari, kliknuli i na div, na telo dokumenta i na dokument kao celinu (`html`). Propagacija događaja se odvija sledećim redom:

- html (hvatanje)
- body (hvatanje)
- div (hvatanje)
- button (cilj)
- div (dizanje)
- body (dizanje)
- html (dizanje)

Prilikom dodavanja slušača događaja, možemo podesiti u kojoj fazi će povratna funkcija biti pozvana. Slušači koji koriste fazu hvatanja neće biti pozvatni u fazi dizanja i obratno.

![]({{page.image}})

{:.uokvireno.ideja}
Svaki objekat događaja ima svojstvo `eventPhase`, koje sadrži trenutnu fazu.

## Slučajevi upotrebe

Propagaciju događaja možemo upotrebiti na sledeći način:
- Možemo da zaustavimo propagaciju događaja u „slušaču“ tako da nikada ne dođe do dokumenta. Da bismo to uradili, možemo da pozovemo metod `stopPropagation()` objekta događaja.
- Možemo da koristimo delegiranje događaja. Ako imamo 10 dugmadi unutar `div`-a, možemo da dodamo deset slušača događaja - po jedan za svako dugme. Međutim, bolje je da dodamo samo jedan slušač na
`div` i, kada događaj počne, proverimo koje je dugme ciljni element događaja.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- MDN, [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)