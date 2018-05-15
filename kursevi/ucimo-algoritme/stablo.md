---
title: Stablo (<i>tree</i>)
layout: lekcija-algoritmi
permalink: /stablo
image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Buddhisme.jpg/503px-Buddhisme.jpg
---

![]({{page.image}})

Za razliku od prethodno razmatranih linearnih struktura, **stablo je nelinearna struktura koja se koristi za prikaz hijerarhijskih odnosa između elemenata.**

Primjer strukture stabla koju koristimo u svakodnevnom radu je struktura direktorija, odnosno organizacija datotečnog sustava na računalu. Strukture stabla koje ćemo ovdje razmatrati sastoje se od čvorova (eng. *nodes*) i veza između njih koje uobičajeno nazivamo grane. Takva stabla imaju jedan početni čvor na vrhu hijerarhije. Npr. u strukturi direktorija to je tzv. korijenski direktorij (eng. *root directory*).

## Binarno stablo

![](https://www.tutorialspoint.com/data_structures_algorithms/images/binary_tree.jpg)

Jedna od najvažnijih vrsta strukture stabla u računalstvu je tzv. binarno stablo (eng. *binary tree*). U binarnom stablu svaki čvor ima najviše dva sljedbenika ili samo jednog ili nijednog sljedbenika.

Jedna od primjena strukture binarnog stabla je prikaz aritmetičkog izraza koji se koristi u procesu prevođenja programa u strojni jezik. Korištenje tri paralelna polja jedan je od načina prikaza binarnog stabla u memoriji.

## Binarno stablo pretrage

Binarno stablo pretraživanja (*binary search tree*) jedna je od najvažnijih struktura podataka u računalnoj znanosti. Za svaki čvor ove strukture vrijedi: vrijednost u čvoru je veća od svih vrijednosti u lijevom podstablu i manja od svih vrijednosti u desnom podstablu.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/400px-Binary_search_tree.svg.png)

## Gomila ili hrpa (*heap*)

Gomila je vrsta strukture stabla koja se koristi u jednom od algoritama sortiranja. Struktura gomile je binarno stablo u kojem za svaki čvor vrijedi slijedeće: vrijednost u čvoru je veća ili jednaka od vrijednosti svih čvorova ispod njega (svih sljedbenika).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/500px-Max-Heap.svg.png)


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
