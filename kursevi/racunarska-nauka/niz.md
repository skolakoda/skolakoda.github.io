---
title: Niz ili polje  (<i>array</i>)
layout: lekcija-racunarstvo
permalink: /niz
image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Las_filas_003.jpg/640px-Las_filas_003.jpg
---

![polje]({{page.image}})

Struktura polja vrlo se često upotrebljava. Na poljima se jednostavno primjenjuju operacije prolaza, pretraživanja i sortiranja, stoga se polja koriste za pohranu relativno permanentnih (statičnih) skupova podataka. S druge strane, u situacijama gdje se veličina strukture ili sami podaci konstantno mijenjaju, povezane liste su pogodnije strukture od polja.

## Skladištenje

Polje zauzima sekvencijalni niz memorijskih lokacija, a elementima polja pristupa se preko indeksa, dakle fizički redoslijed memorijskih lokacija određuje povezanost elemenata polja.

## Nedostaci

Osnovni nedostaci polja su slijedeći:
* teško je dodavati i brisati elemente nakon što se elementima pridruže vrijednosti
* u većini jezika problematično je povećati alokaciju memorije za elemente polja

Zbog navedenih nedostataka polja se smatraju statičkim strukturama podataka.

## Algoritam obilaska

Algoritam "pristupa i obrade" (eng. *traversing*) svih elemenata polja vrlo često se koristi, npr. kod učitavanja ili ispisa elemenata polja ili kao dio drugih algoritama:
1. postavi brojač na početnu vrijednost jednaku indeksu početnog elementa polja
2. ponavljaj korake 3 i 4 tako dugo dok je brojač manji od indeksa krajnjeg elementa polja
3. pristupi elementu polja i primjeni željenu obradu na njemu
4. povećaj vrijednost brojača za 1


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
