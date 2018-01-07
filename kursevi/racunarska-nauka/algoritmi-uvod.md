---
title: Uvod u algoritme
layout: lekcija-racunarstvo
permalink: /algoritmi-uvod
redirect_from:
  - /agoritmi-uvod
image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2010-10-30_Geeste%2C_Moormuseum_032_%285207510676%29.jpg/1024px-2010-10-30_Geeste%2C_Moormuseum_032_%285207510676%29.jpg
---

![]({{page.image}})

***Pojam algoritma osnovni je temelj računalnog programiranja, stoga je potrebno posvetiti posebnu pažnju analizi i razumijevanju algoritama.***

## Pojam algoritma

U početku upotrebe pojma algoritma, tako su se nazivala samo pravila računanja s brojevima, kasnije i pravila obavljanja ostalih zadataka u matematici. U XX stoljeću, pojavom računala,
pojam se proširuje na računalstvo, a zatim i na druga područja.

Primjer Euklidovog algoritma za traženje najvećeg zajedničkog djelitelja dva cijela broja `m` i `n`:
1. Odrediti ostatak od dijeljenja: podijeli m sa n, i odredi ostatak od dijeljenja r, 0 <= r < n
2. Da li je ostatak jednak nuli? Ako jest, algoritam završava, n je traženi odgovor.
3. Ako ostatak nije jednak nuli, napravi zamjenu: postavi m = n, n = r i vrati se na početni korak

Neke od varijacija definicije algoritma:
* Algoritam je precizan opis svih pravila i postupaka potrebnih za postizanje željenog rezultata.
* Algoritam je konačni skup pravila koja daju redoslijed operacija za rješavanje specifičnog problema.
* Algoritam je procedura (postupak) koji do posljednjeg detalja opisuje sve aktivnosti i njihov redoslijed, potreban da se obradom ulaznih podataka dođe do izlaznih podataka, odnosno rješenja.

## Značajke algoritma

Osim što mora biti skup pravila algoritam mora posjedovati i slijedeća važna svojstva:
* konačnost – mora uvijek završiti nakon konačnog broja koraka
* definiranost – svaki korak algoritma mora biti precizno definiran – akcije koje treba poduzeti moraju biti u svakom slučaju rigorozno i nedvosmisleno (nedvojbeno) specificirane
* ulaz - algoritam može ali i ne mora imati ulazne veličine koje su dane inicijalno prije početka algoritma
* izlaz – algoritam ima jednu ili više izlaznih veličina koje su u specificiranom odnosu sa ulzanim veličinama
* efikasnost – se očekuje od svakog algoritma

## Učinkovitost algoritma

Od algoritma se očekuje i da bude efikasan (učinkovit). To znači da sve operacije koje se obavljaju u algoritmu moraju biti dovoljno jednostavne tako da se mogu obaviti točno i u konačnom vremenu koristeći olovku i papir. Euklidov algoritam koristi samo operacije dijeljenja pozitivnih cijelih brojeva, provjere da li je broj jednak nuli, te dodjeljivanja vrijednosti jedne varijable drugoj. Navedene operacije su efikasne jer se cijeli brojevi mogu prikazati na papiru u
konačnom obliku i jer postoji algoritam dijeljenja cijelih brojeva. Na primjer zbrajanje cijelih brojeva je učinkovito, ali zbrajanje realnih brojeva nije jer se može pojaviti broj s beskonačno mnogo znamenki.

Algoritam koji bi izabirao potez igrača šaha tako da ispita sve moguće posljedice poteza, zahtijevao bi milijarde godina na najbržem zamislivom računalu.

## Računalna procedura i računalni program

Postupak koji ima sva svojstva kao i algoritam, ali ne mora završiti u konačnom broju koraka jest računalna procedura. Primjeri za proceduru su operacijski sustav računala, uređivač teksta i sl. Vrijeme izvođenja procedure mora biti "razumno".

Računalni program je opis algoritma koji u nekom programskom jeziku jednoznačno određuje što računalo treba napraviti.
Programirati znači naučiti sintaksu nekog programskog jezika i steći osnovna intuitivna znanja glede algoritmizacije problema opisanog riječima. Navesti ćemo ovdje mnogo puta citiranu izreku Niklausa Wirtha koji je koncipirao programske jezike Pascal i Modulu:

> Algoritmi + strukture podataka = PROGRAMI

Programiranje na neki način možemo smatrati i vještinom i to vještinom koju nije lako naučiti. Potrebno je mnogo mukotrpnog rada (učenja) i stjecanja iskustva (vježbanja) počevši od izrade jednostavnih prema kompleksnijim programima da bi se postalo "produktivnim" programerom. Nisu svi jednako talentirani u tom području, jer programiranje bi mogli okarakterizirati i kao "umjetnost razmišljanja i planiranja".

Temeljni problemi programiranja su:
* kako osmisliti algoritme
* kako strukturirati podatke
* kako formulirati algoritme
* kako verificirati korektnost algoritama
* kako analizirati algoritme
* kako provjeriti (testirati) program

Postupci izrade algoritama nisu jednoznačni te često zahtijevaju i veliku dozu kreativnosti. Ne postoje čvrsta pravila za definiranje algoritama. Od prvih programskih jezika nastoje se razviti metode i alati za formaliziranje algoritama. Napori su urodili različitim metodologijama prikaza problema i modela koji se koriste pri razvoju složenih programskih sustava.

## Prikaz algoritma

Razvoj i prikaz algoritma preduvjet je izrade programa. Algoritmi se mogu prikazati na različite načine:
* opisno, rečenicama
* grafički, dijagramom toka
* u nekom jeziku koji je blizak čovjeku (pseudokod)
* nekim strogo formaliziranim programskim jezikom

Međutim, program koji je zaista u računalu i po kojemu se izvodi neki konkretan postupak, uvijek je samo u binarnom (strojnom) obliku.

Stoga postoji potreba, da se na određeni uobičajeni način prikaže program tako da ima logičku ispravnost, ali i da je blizak i razumljiv čovjeku. Takav način prikaza je pseudokod, koji nije ovisan niti o računalu niti o programskom jeziku, a značajan je stoga jer program napisan pseudokodom predstavlja zapravo model programa i najvažniji je rezultat rada u programskom inženjerstvu.


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi, skripta I*, Zagreb, 2005.
