---
title: Dodavanja Javascripta na stranicu
layout: lekcija-js
permalink: /dodavanje-javascripta
image: /images/jezici/moderni-js.gif
---

![]({{page.image}})

**Osnovni način dodavanja Javascripta na web stranicu je korišćenje `<script/>` taga. Ovaj element, koji je uvela kompanija Netscape, postao je deo HTML 3.2 specifikacije.**

Postoje dva načina za korišćenje `<script/>` elemenata:
- direktnim ugrađivanjem Javascripta u stranicu (*inline* kod);
- preko `src` atributa koji definiše odgovarajuću eksternu datoteku.

## Direktno ugrađivanje u stranicu

Da biste dodali inline kod na web stranicu, postavite kod između početnog i krajnjeg taga, što je prikazano u sledećem primeru:

```html
<script>
function ispisiPozdrav() {
  const poruka = "Zdravo Svete!"
  console.log(poruka)
}
ispisiPozdrav()
</script>
```

Pregledač zaustavlja učitavanje ostatka stranice kada pristupi `<script/>` elementu i izvršava kod pre obrade ostatka stranice.

## Uključenje zasebnog fajla

Prekucajte Javascript iz prethodnog primera (samo deo između `<script>` tagova) u novi fajl. Ekstenzija mora biti `.js`, a naziv nije bitan. Nakon toga, dodajte `src` atribut ka js fajlu, kao u sledećem primeru:

```html
<script src="main.js"></script>
```

Sada `<script/>` element referencira eksternu Javascript datoteku pod nazivom `main.js`. Isto kao u prethodnom slučaju, pregledač zaustavlja render HTML stranice kada pristupi `<script>` tagu. Tek pošto učita Javascript iz eksterne datoteke, nastavlja renderovanje.

Dobra praksa je koristiti zasebne Javascript fajlove iz nekoliko razloga:

- Mnogo su jednostavniji za održavanje u odnosu na skripte čiji se kod piše u HTML-u, posebno ako imate isti kod na više stranica (prilikom ažuriranja je dovoljno promeniti samo jednu datoteku).

- Zasebne skripte pregledač kešira isto kao slike i stilove. Pregledač preuzima fajl samo jednom i koristi ga na svim narednim stranicama koje ga uključuju. To povećava performanse, jer pregledač ne mora da preuzme isti kod više puta.

Gde se postavljaju `<script/>` tagovi na stranici veoma je važno - kod se podrazumevano učitava i izvršava redosledom kojim je dodat.

## Atributi `<script/>` taga

Neki od važnijih atributa `<script/>` elementa su:

- `src`: opcioni atribut. Sadrži eksternu datoteku sa skriptom koji će se izvršavati.

- `type`: opcioni atribut. Sadrži jezik koji se koristi, obično `"text/javascript"`. Svi pregledači pretpostavljaju da se koristi Javascript ukoliko vrednost  nije navedena.

- `async`: opcioni atribut. Dozvoljava učitavanje skripte u pozadini, bez blokiranja stranice. Skripta se izvršava onog trenutka kada je učitana, ne čekajući ostale elemente. Asinhrone skripte se izvršavaju bez obzira na redosled na stranici.

- `defer`: opcioni atribut. Dozvoljava učitavanje skripte u pozadini, bez blokiranja stranice. ali skripta se izvršava nakon što se učita HTML dokument. Skripte sa defer atributom se izvršavaju redom kojim su navedene.

- `charset` : opcioni atribut. Kodiranje karaktera eksterne datoteke, koja je definisana pomoću src atributa. Ovaj atribut se retko koristi.
