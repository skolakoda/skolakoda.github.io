---
title: Posmatrač (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-posmatrac
redirect_from: /posmatrac
---

![](https://upload.wikimedia.org/wikipedia/commons/a/a8/Observer_w_update.svg)

**Pomoću obrasca posmatrača (*observer pattern*) razdvaja se prikaz stanja nekog objekta od samog objekta, i omogućuje postojanje više prikaza. Kad se stanje objekta promijeni, svi prikazi automatski se ažuriraju u skladu s novim stanjem.**

Ovaj obrazac može se koristiti u svim situacijama gdje se zahtijeva više od jednog formata prikaza za stanje i gdje objekt koji čuva informacije o stanju ne mora znati koji sve formati prikaza se koriste.

## Problem

U mnogim situacijama potrebno je osigurati više simultanih prikaza istih informacija o stanju, na primjer grafički prikaz i tabularni prikaz. Svi prikazi trebaju podržavati interakciju, dakle kad se stanje promijeni, svi prikazi moraju se ažurirati.

## Rešenje

Rešenje se zasniva na dvije apstraktne klase `Subject` i `Observer`, te na konkretnim klasama `ConcreteSubject` i `ConcreteObserver` koje nasljeđuju odgovarajuće apstraktne klase. Apstraktne klase sadrže općenite operacije koje su primjenjive u svim situacijama.

Stanje koje treba prikazivati sadržano je u objektu klase `ConcreteSubject`. Taj objekt nasljeđuje operacije od `Subject`, što mu omogućuje dodavanje ili uklanjanje `Observer`-a (svaki od njih odgovara jednom prikazu stanja) te slanje obavijesti da mu se stanje promijenilo.

Objekt iz klase `ConcreteObserver` čuva kopiju stanja `ConcreteSubject`-a i implementira apstraktnu operaciju `Update()` iz klase `Observer`. Time je omogućeno da se kopije stanja usklađuju, te da se prikazi obnavljaju kad god je došlo do promjene stanja.

## Posljedice

Subjekt zna samo za apstraktnog promatrača i ne zna detalje konkretnih klasa koje nasljeđuju tog apstraktnog promatrača. Zato među tim objektima postoji minimalna povezanost. S druge strane, zbog tog nedostatka znanja, ne mogu se izvesti optimizacije koje bi poboljšale performanse kod iscrtavanja prikaza. Promjene u subjektu mogle bi izazvati niz povezanih promjena u promatračima.


Izvor: Robert Manger, *Softversko inženjerstvo (skripta)*, Zagreb, 2012.
