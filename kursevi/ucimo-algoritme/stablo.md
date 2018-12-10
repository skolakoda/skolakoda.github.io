---
title: Stablo (<i>tree</i>)
layout: lekcija-algoritmi
permalink: /stablo
image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Buddhisme.jpg/503px-Buddhisme.jpg
---

![stablo]({{page.image}})

Za razliku od prethodno razmatranih linearnih struktura, **stablo je nelinearna struktura koja se koristi za prikaz hijerarhijskih odnosa između elemenata.**

Primjer strukture stabla koju koristimo u svakodnevnom radu je struktura direktorija, odnosno organizacija datotečnog sustava na računalu. Strukture stabla se sastoje od **čvorova** (eng. *nodes*) i veza između njih koje zovemo **grane**. Stabla imaju jedan početni čvor na vrhu hijerarhije. Npr. u strukturi direktorija to je tzv. korijenski direktorij (eng. *root directory*).

## Binarno stablo

![](https://www.tutorialspoint.com/data_structures_algorithms/images/binary_tree.jpg)

Binarno stablo (en. *binary tree*) je struktura podataka koja se sastoji od čvorova koji su međusobno povezani kao što je prikazano na slici. U binarnom stablu svaki čvor ima najviše dva sledbenika ili samo jednog ili nijednog sledbenika.

Svaki **čvor** sadrži neki podatak plus može imati levo i desno podstablo. Svi čvorovi osim korenskog imaju "roditelja", to je čvor iz koga polazi veza ka posmatranom čvoru. **Korenski element** nema roditelja, a posebnu vrstu čvorova čine **listovi** stabla, to su čvorovi kojima je i levo i desno podstablo prazno. Prazno stablo ne sadrži ni jedan čvor.

Jedna od primena strukture binarnog stabla je prikaz aritmetičkog izraza koji se koristi u procesu prevođenja programa u strojni jezik. Korištenje tri paralelna niza jedan je od načina prikaza binarnog stabla u memoriji.

## Gomila ili hrpa (*heap*)

Gomila je vrsta strukture stabla koja se koristi u jednom od algoritama sortiranja. Struktura gomile je binarno stablo u kojem za svaki čvor vrijedi slijedeće: vrijednost u čvoru je veća ili jednaka od vrijednosti svih čvorova ispod njega (svih sljedbenika).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/500px-Max-Heap.svg.png)

### Vidi još

- [Binarno stablo pretrage](/binarno-stablo-pretrage)

### Literatura

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- *Uvod u programiranje - Računarski fakultet*, [Struktura podataka binarno stablo](https://petlja.org/BubbleBee/r/lekcije/uvod-u-programiranje/nedelja_12)
