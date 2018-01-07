---
title: Algoritmi sortiranja
layout: lekcija-racunarstvo
permalink: /algoritmi-sortiranja
redirect_from:
  - /agoritmi-sortiranja
image: /images/koncepti/algoritmi/sorting-algorithms.gif
---

![]({{page.image}})

**Algoritam sortiranja postavlja elemente neke liste u određeni redoslijed. Najčešće se sortira po numeričkom redoslijedu ili po abecedi (leksikografski redoslijed). Efikasni algoritmi sortiranja preduvjet su uspješnosti nekih drugih algoritama – npr. onih algoritama pretraživanja koji zahtijevaju sortiranu listu da bi u njoj mogli pronaći određeni član.**

Većina algoritama sortiranja zasniva se na metodologiji "podijeli i vladaj" – tj. ponavlja se postupak reduciranja složenog problema na više jednostavnijih (manjih) cjelina, odnosno veliki niz se dijeli na više manjih nizova koji se zasebno sortiraju. Takvi zasebno sortirani segmenti zatim se spajaju u konačno sortirani niz. Reduciranje niza se obično ponavlja na rekurzivan način. Algoritmi sortiranja najviše se razlikuju u načinima dijeljenja na podnizove i spajanja u konačno sortirani niz.

## "Bubble" sort

Ovo je jedna od najjednostavnijih metoda sortiranja koja efikasno funkcionira samo za relativno maleni broj elemenata koji se sortiraju. Za veći broj elemenata ova metoda je prespora. Stoga se ova metoda vrlo rijetko upotrebljava osim za edukacijske svrhe.

Najveći član u polju postavlja se na kraj polja, a u ostatku polja se na jednak način traži najveći član. Niz kojeg treba sortirati ima `n` članova. Osnovna je ideja premještanje najvećeg člana niza na posljednje mjesto, a zatim se postupak ponavlja za prvih `n-1` članova niza, jer je na n-toj poziciji već najveći član. Postupak premještanja određenog člana niza na njegovo mjesto sastoji se od sukcesivnih usporedbi susjednih članova niza. Ukoliko je određeni član niza manji od onog koji slijedi iza njega, izvršava se zamjena njihovog redoslijeda. Niz je nužno sortiran kada se postupak uspoređivanja (počevši od prvog člana niza do zadnjeg nesortiranog) ponovi `n-1` puta.

Prvi puta nužno je izvršiti `n-1` usporedbu, da bi najveći član došao na posljednje mjesto u nizu. U svakom će sljedećem prolazu kroz niz broj usporedbi biti manji za jedan.

Algoritam "bubble" sort metode u pseudokodu:
```
1. Učitati broj članova niza N
2. Učitati niz u jednodimenzionalno polje X
3. Petlja J = 1, N – 1
    petlja I = 1, N – J
      ako je X ( I ) > X ( I + 1) onda izvrši zamjenu
      sadržaja dva susjedna člana polja:
        Y = X ( I )
        X ( I ) = X ( I + 1 )
        X ( I + 1 ) = Y
4. Ispisati sortirani niz X.
```

## Sortiranje umetanjem

Ova metoda slična je prethodnoj, ali je ipak nešto efikasnija. Element niza uspoređuje se sa svim prethodnim elementima dok se ne pronađe slijedeći manji element. Na taj način element niza "umeće" se na svoju poziciju u sortiranom dijelu niza.

```
24 4 3 15 9 7
(-) ?
4 24 3 15 9 7
(--) ?
3 4 24 15 9 7
(----) ?
3 4 15 24 9 7
(-------) ?
3 4 9 15 24 7
(---------) ?
3 4 7 9 15 24
```

Sortiranje umetanjem daje dobre rezultate za male liste (do 30 elemenata).

## “Selection sort”

Ova metoda traži najmanji element u nesortiranom dijelu polja i stavlja ga na svoje mjesto.

```
4 9 3 15 24 7
(------------)
3 9 4 15 24 7
  (----------)
3 4 9 15 24 7
    (--------)
3 4 7 15 24 9
      (------)
3 4 7 9 24 15
        (----)
3 4 7 9 15 24
```

## "Heap" sortiranje

"Heap" sortiranje pripada u familiju "selekcijskih" algoritama sortiranja. Takvi algoritmi sortiranja određuju prvo najveći (ili najmanji) element u listi te ga postavljaju na kraj (ili početak) liste, te na isti način nastavljaju sa ostatkom liste. "Heapsort" izvršava ovaj zadatak korištenjem strukture podataka koja se zove gomila (eng. *heap*).

Struktura gomile je binarno stablo u kojem za svaki čvor vrijedi da je vrijednost u čvoru veća ili jednaka od vrijednosti svih njegovih sljedbenika. Lista se pretvara u gomilu, a korijenski čvor je sigurno najveći element liste. Korijenski čvor gomile se izuzima i stavlja se na kraj sortirane liste, tj. gomila se skraćuje za 1 element i ponovno podešava.

## "Shell" sort

Donald Shell objavio je ovu metodu 1959. To je zapravo unaprijeđena "bubble" metoda i metoda "umetanja" na način da se elementi pomiču u redoslijedu za više pozicija istovremeno.

Implementacija ove metode može se opisati kao "preslagivanje" liste (niza) u dvodimenzionalno polje i zatim sortiranje stupaca takvog polja metodom umetanja. I ova metoda nije efikasna za velike liste, ali je jedna od najbržih za liste reda veličine oko 1000 elemenata. Prednost je ove metode što ima male zahtjeve za memorijom.

## "Mergesort" (uparivanje i sortiranje)

Ovaj algoritam koristi strategiju "podijeli pa vladaj". Niz se rekurzivno dijeli u segmente koji se zasebno sortiraju, a zatim se sortirani segmenti spajaju u konačno sortirani niz.

## "Quicksort"

"Quicksort" je do sada najbrži poznati algoritam za sortiranje. I ovo je rekurzivni algoritam
zasnovan na strategiji "podijeli pa vladaj". Algoritam se sastoji od slijedećih koraka:
1. Odabir jednog člana niza, tzv. "pivot-a".
2. Raspodijeliti članove niza na taj način da sve elemente manje od pivot-a stavimo ispred njega (podniz 1), a sve članove veće od pivot-a stavimo iza njega (podniz 2). Nakon te raspodjele "pivot" se nalazi na svojoj konačnoj poziciji.
3. Rekurzivno sortirati svaki podniz na isti način.

Rekurzija se prekida na nizovima od jednog ili niti jednog elementa, koji su sami po sebi sortirani. "Quicksort" algoritam u svakoj iteraciji stavlja barem jedan element niza na njegovu konačnu poziciju. Izbor "pivot-a" nije jednoznačno određen, a nije niti jednoznačno određeno što učiniti s članovima polja jednakim "pivot-u", pa to postaje pitanje realizacije algoritma.

## Indirektno sortiranje

Ako treba sortirati velike strukture, npr. slogove koji sadrže više polja: matični broj studenta, prezime, ime, adresa, upisani predmeti i ocjene itd., tada nema smisla obavljati mnogo zamjena velikog broja podataka. Ako se slogovi sortiraju npr. po matičnom broju, tada se izdvoje u posebno polje matični brojevi s pripadnim pokazivačima na ostale podatke. Sortira se (bilo kojim od postupaka) samo takvo izdvojeno polje.


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi, skripta II*, Zagreb, 2005.
