---
title: Slike u HTML-u
layout: lekcija-html
permalink: /html-slike
---

**Slike u HTML-u se dodaju preko `<img>` oznake. Neophodan atribut `img` taga je `src`, što označava izvor, odnosno putanju do slike.**

## Putanje

Da bismo označili sliku u istom direktorijumu, možemo koristiti sledeći tag:

```html
<img src="slika.png">
```

Za sliku koja se nalazi u direktorijumu iznad trenutnog direktorijuma:

```html
<img src="../slika.png">
```

Možemo uključiti i slike koje se nalaze na udaljenim serverima:

```html
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/2012-bb-jackal-1.jpg/320px-2012-bb-jackal-1.jpg">
```

Nekad to nije moguće, jer neki serveri imaju zabranu uključenja slika sa tuđih domena.

## Promena veličine

Ne treba menjati i visinu i širinu, jer možemo poremetiti razmeru slike. Ako podesimo samo jednu vrednost, visinu ili širinu, a drugu izostavimo, pregledač će je izračunati proporcionalno.

Smanjivanje veličine slika pomoću svojstava `height` i `width` u HTML-u ili CSS-u čini samo da se slike prikazuju manje, ali se učitava originalna veličina fajla. Da bismo optimizovali učitavanje, potrebno je pripremiti smanjene slike za web.

## Dodavanje alternativnog opisa

Ponekad slike neće biti prikazane na stranici. Možda posetilac sa ošteće­nim vidom posećuje stranicu pomoću čitača ekrana ili posetilac sa mobilnim uređa­jem ima sporu internet konekciju. Dobra praksa je koristiti `alt` atribut za alternativni opis, koji se prikazuje kada sliku nije moguće prikazati.

```html
<img src="zeleznicka-stanica.jpg" alt="Slika železničke stanice">
```

Razlika `alt` i `title` atributa je što `title` postoji uporedo sa slikom, a `alt` se prikazuje samo ako nema slike.

## Pravila o korišćenju slika

Postoje mnoge sjajne slike širom weba koje možemo slobodno koristiti: ikonice, fotografije, crteže i mnoge druge. Bitno je samo paziti odakle ih uzimamo, kako ne bismo imali problema sa kršenjem prava autora.

Jedna od najvećih kolekcija slobodnih slika na netu je [Wikimedijina ostava](http://commons.wikimedia.org/), sa preko 50 miliona fotografija. Slike se mogu pretraživati po kategorijama, a postoje i visokokvalitetne slike dana koje bira zajednica.

{:.uokvireno.ideja}
Nemojte uzimati nasumične slike sa Google-a, jer se dešava da fotografi tuže sajtove za kršenje autorskih prava i neovlašteno preuzimanje njihovih fotografija.