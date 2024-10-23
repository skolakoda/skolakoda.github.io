---
title: Niz (<i>array</i>)
layout: lekcija-algoritmi
permalink: /nizovi
image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Array1.svg/640px-Array1.svg.png
---

**Niz (en. *array*) je struktura podataka koja se sastoji od više elemenata smeštenih u uzastopnim memorijskim lokacijama. Svaki element ima određenu poziciju u nizu i moguće mu je pristupiti putem jedinstvenog rednog broja (indeksa). Broj elemenata predstavlja dužinu niza. Zavisno od jezika, niz mogu činiti elementi istog tipa ili različitih tipova.**

![]({{page.image}})

U nekim jezicima, nizovi moraju biti istog tipa, najčešće fiksne, unapred zadate veličine. Pored jednodimenzionalnih, postoje i višedimenzionalni nizovi, koji se sastoje od drugih nizova kao svojih elemenata.

## Primena

Struktura niza vrlo se često upotrebljava. Niz nam omogućava da koristimo više vrednosti, bez potrebe da deklarišemo više promenljivih. Kako broj elemenata niza raste, ta prednost je izraženija.

Umesto da definišemo više promenljivih na primer `broj0`, `broj1`, `broj2`, `broj3`, ... `broj99`, možemo definisati niz pod imenom `nizBrojeva` čiji su elementi brojevi. U tom slučaju elementima niza pristupamo sa `nizBrojeva[0]`, `nizBrojeva[1]`, ... `nizBrojeva[99]`. Brojevi u uglastoj zagradi nazivaju se indeksi. Prvi element niza ima indeks 0. Elementi niza mogu se u programu koristiti kao bilo koja druga promenljiva. Može im se dodeliti ili ispisati vrednost, mogu se koristiti kao operandi u operacijama, mogu se prosleđivati kao argumenti funkcija.

Na nizovima se jednostavno primenjuju operacije prolaza, pretraživanja i sortiranja, stoga se koriste za pohranu relativno permanentnih (statičnih) skupova podataka. S druge strane, u situacijama gde se veličina strukture ili sami podaci konstantno menjaju, povezane liste su pogodnije.

## Deklaracija niza

Niz se u jeziku C deklariše na sledeći način:

```
tip imeNiza [velicinaNiza];
```

Veličina niza se izražava pozitivnim celim brojem, i ne može bit nula. Tip predstavlja tip podataka člana niza i može biti bilo koji tip koji postoji u programskom jeziku C. Veličina niza označava koliko će se memorijskog prostora rezervisati za promenljivu i on je jednak proizvodu veličine niza i memorije potrebne za skladištenje tipa elementa niza.

Primer deklaracije niza veličine 10 čiji elementi su tipa `double`:

```c
double niz[10];
```

Ova deklaracija će rezervisati 10 X 8 = 80 bajtova memorije, jer je veličina tipa double je 8 bajtova.

## Inicijalizacija niza

Inicijalizacija niza predstavlja dodelu vrednosti elementima niza. Inicijalizacija se može vršiti na dva načina, dodela vrednosti svim elementima odjednom ili jednom po jednom elementu. U jeziku C, svim elementima niza vrednost se dodeljuje navođenjem vrednosti u vitičastim zagradama razdvojenih zarezom, kao na primer:

```c
double niz[5] = {100.0, 2.0, 5.0, 4.0, 6.0};
```

Broj elemenata u vitičastoj zagradi mora biti jednak ili manji od zadate veličine niza. Ukoliko je manji, na preostala mesta postavljaju se podrazumevane vrednosti koje zavise od tipa, na primer za `int` je to 0, za `float` i `double` 0.0.

Moguće je dodeliti elemente nizu bez zadavanje veličine niza:

```c
double niz[] = {100.0, 2.0, 5.0, 4.0, 6.0};
```

Ovom naredbom kreira se niz čija veličina odgovara broju dodeljenih elemenata.

Dodela vrednosti jednom elementu niza izgleda ovako:

```c
niz[4] = 23.0;
```

Ova naredba dodeljuje vrednost petom elementu niza (indeks uvek ide od 0).

Sledeći program dodeljuje vrednosti elementima niza pomoću petlje. Za obradu nizova najčešće se koristu `for` petlja sa brojačem `i`, koji redom uzima vrednosti indeksa niza, znači počinje od 0 i ide do veličine-1 (uslov je `i < velicinaNiza`):

```c
#include <stdio.h>

int main () {
   int niz[10]; // deklarisemo niz od 10 integera
   int i,j;
   for (i = 0; i < 10; i++) {
      niz[i] = i + 100; // dodela vrednosti i-tom elementu
   }
   return 0;
}
```

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

Algoritam obilaska (eng. *traversing*) se sastoji od sledećih koraka:

1. postavi brojač na početnu vrednost jednaku indeksu početnog elementa niza
2. ponavljaj korake 3 i 4 sve dok je brojač manji od indeksa krajnjeg elementa
3. pristupi elementu niza i primeni željenu obradu na njemu
4. povećaj vrednost brojača za 1

Sledi jednostavna primer obilaska niza u Javascriptu:

{:.ulaz}
```js
niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < niz.length; i++) {
  console.log(niz[i])
}
```

Algoritam obilaska svih članova polja vrlo često se koristi, npr. kod učitavanja, ispisa članova ili kao deo drugih algoritama.

## Literatura

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- [*Nizovi*, petlja.org](https://petlja.org/BubbleBee/r/Lectures/osnovne-strukture-podataka)
