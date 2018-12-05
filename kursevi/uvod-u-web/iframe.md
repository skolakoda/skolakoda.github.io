---
title: "Umetnuti okvir (<i>iframe</i>)"
layout: lekcija-html
permalink: /iframe
---

**Pomoću umetnu­tih okvira (*iframe*) možemo u svoju stranicu uvr­stiti sadržaj neke druge stranice.** Na taj način možemo uključiti vesti, vremensku prognozu, video, mapu ili bilo koji drugi sadržaj. 

Oznaka `<iframe>` ima atribut `src`, za URL stranice koju uključujemo, kao i atri­bute `width` i `height`, za veličinu okvira. Sintaksa je sledeća:

{:.html-ulaz}
```html
<iframe src="http://www.politika.rs" width="600" height="400"></iframe> 
```

## Važni atributi

ATRIBUT | OPIS
--------|-----------
src | URL adresa HTML dokumenta koji treba da bude prikazan u okviru
width | Širina okvira u pikselima
height | Visina okvira u pikselima
srcdoc | HTML sadržaj koji treba da bude prikazan u okviru
sandbox | Bezbednosna ograničenja sadržaja okvira

### Atribut `sandbox`

HTML5 je uveo i bezbednosna ograničenja okvirima, preko atributa `sandbox`. Možete da okvir učitate uz sva ograničenja, tako što ćete uvrstiti ovaj atribut:

```html
<iframe src="frame.html" sandbox></iframe>
```

`sandbox` će dodati sledeća ograničenja uokvirenom sadržaju:

- Sadržaj će biti tretiran kao daje iz tuđeg domena, čak i ako to nije.
- Nije moguće poslati formulare koji se nalaze unutar okvira.
- Nije moguće izvršiti skripte u okviru.
- API-ji su onemogućeni.
- Linkovi ne mogu da koriste ugrađeni sadržaj pomoću `<object>` ili `<embed>` taga.
- Nije moguća navigacija sadržaja na glavni kontekst.
- Opcije za automatsko puštanje videa ili kontrolu fokusa obrasca su blokirane.

Ako pomoću okvira umećete tuđe stranice koje ne kontrolišete, treba koristiti `sandbox` atribut.

## Primer: dodavanje YouTube videa i Google mape

Mnogi servisi, kao što su Youtube i Google mape, nude mogućnost da njihov sadržaj lako uključimo u našu stranicu. HTML kod za umetanje okvira se obično nalazi u sekciji podeli (*share*).

{:.html-ulaz}
```html
<iframe width="600" height="400" src="https://www.youtube.com/embed/kHDkZQ4LGZA"></iframe>

<iframe width="600" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11325.698608385439!2d20.43764613769529!3d44.792533720187606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fe39d60e403%3A0x68e29209c6d94a44!2sBeogradski+sajam!5e0!3m2!1sen!2srs!4v1539707321677"></iframe>
```
