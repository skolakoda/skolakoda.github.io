---
title: Niz (<i>array</i>)
layout: lekcija-algoritmi
permalink: /nizovi
image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Array1.svg/640px-Array1.svg.png
---

**Niz ili polje (en. *array*) je složen tip podataka koji se sastoji od više elemenata. Svaki element ima određenu poziciju u nizu i moguće mu je pojedinačno pristupiti korišćenjem jedinstvenog rednog broja (indeksa). Broj elemenata niza predstavlja dužinu niza. Niz mogu činiti elementi istog tipa ili različitih tipova.**

![]({{page.image}})

## Primena

Struktura niza vrlo se često upotrebljava. Niz nam omogućava da koristimo više vrednosti, bez potrebe da deklarišemo više promenljivih. Kako broj elemenata niza raste, ta prednost je izraženija.

Na nizovima se jednostavno primenjuju operacije prolaza, pretraživanja i sortiranja, stoga se koriste za pohranu relativno permanentnih (statičnih) skupova podataka. S druge strane, u situacijama gde se veličina strukture ili sami podaci konstantno menjaju, povezane liste su pogodnije.

## Skladištenje

Niz zauzima sekvencijalni niz memorijskih lokacija, a elementima se pristupa preko indeksa, dakle fizički redosled memorijskih lokacija određuje povezanost elemenata.

Kada je deklarisanje niza i alokacija (zauzeće) memorije za niz u pitanju, u programskim jezicima postoje dva načina da se to uradi: statička alokacija i dinamička alokacija. **Statička alokacija** podrazumeva da je u vreme pisanja programa poznata maksimalna dužina niza koja nam može biti potrebna, i u tom slučaju će program pri pokretanju rezervisati neophodan prostor za niz zahtevane veličine. Nasuprot tome, kod **dinamičke alokacije** maksimalan broj elemenata niza ne mora biti poznat u vreme pisanja programa, već je dovoljno znati ga u vreme izvršavanja programa. Kod ovog tipa alokacije, memorija za smeštanje niza se alocira tokom izvršavanja programa kada nam niz postane potreban.

Različiti programski jezici podržavaju jedan ili oba pristupa.

## Nedostaci

Osnovni nedostaci su sledeći:
* teško je dodavati i brisati elemente nakon što se elementima pridruže vrednosti
* u većini jezika problematično je povećati alokaciju memorije za elemente niza

Zbog navedenih nedostataka nizovi se smatraju statičkim strukturama podataka.

## Algoritam obilaska

Algoritam obilaska (eng. *traversing*):

1. postavi brojač na početnu vrednost jednaku indeksu početnog elementa niza
2. ponavljaj korake 3 i 4 sve dok je brojač manji od indeksa krajnjeg elementa
3. pristupi elementu niza i primeni željenu obradu na njemu
4. povećaj vrednost brojača za 1

{:.ulaz}
```js
niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < niz.length; i++) {
  console.log(niz[i])
}
```


Algoritam obilaska svih elemenata polja vrlo često se koristi, npr. kod učitavanja, ispisa elemenata ili kao deo drugih algoritama.

## Izvori

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- [*Nizovi*, petlja.org](https://petlja.org/BubbleBee/r/Lectures/osnovne-strukture-podataka)
