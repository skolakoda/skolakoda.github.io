---
title: Vrste algoritama
layout: post
tags: [algoritmi, programiranje]
---

**Algoritmi se mogu klasificirati na mnogo različitih načina. Jedan način klasifikacije algoritama je prema metodologiji primjenjenoj u kreiranju algoritma.**

Moguće je razlučiti određen broj različitih metodologija (paradigmi):

* "Podijeli i vladaj" – ponavlja se postupak reduciranja složenog problema na više jednostavnijih (manjih) cjelina, dok cjeline ne postanu dovoljno male da bi bile lako rješive. Reduciranje se obično ponavlja na rekurzivan način.

* "Dinamičko programiranje" – pogodno je za probleme u kojima se cjelokupno rješenje može kreirati na način da se rješenja istih podproblema upotrijebe za rješavanje brojnih različitih instanci problema. Ovaj pristup nastoji izbjeći "rješavanje već riješenog".

* "Greedy" metoda – slična je dinamičkom programiranju, osim što u svim koracima nemamo rješenje podproblema, pa se u takvim slučajevima radi "greedy" izbor onoga što se čini najpogodnijim u tom trenutku.

* Linearno programiranje – Ovaj način rješavanja problema svodi se na kreiranje sustava linearnih nejednadžbi, nakon čega se nastoji maksimizirati ili minimalizirati ulazne veličine.

* Pretraživanje i enumeracija – mnogi problemi (npr. igranje šaha) mogu se modelirati pomoću grafova. Algoritmi specifikacije pravila za kretanje (pretraživanje) po strukturi grafa korisni su za ovakve probleme.

* Probabilistički i heuristički postupci ne odgovaraju u potpunosti definiciji algoritma, jer generiraju rješenja na temelju slučajnih odabira.

* Genetički algoritmi nastoje pronaći rješenje oponašanjem bioloških evolucijskih procesa - ciklusima slučajnih mutacija generiraju se sukcesivne "generacije rješenja".

![](http://web.stanford.edu/~cdebs/GameOfLife/img/glidergun.gif)

Drugi način klasifikacije algoritama je prema načinu implementacije. Rekurzivni algoritam poziva (referencira) samog sebe do trenutka ispunjenja određenog uvjeta, a takva metoda uobičajena je u tzv. funkcijskom programiranju. Algoritmi se uobičajeno razmatraju sa pretpostavkom da računalo izvodi jednu po jednu instrukciju, odnosno podrazumijeva se jednoprocesorska arhitektura. Takve algoritme zovemo serijski algoritmi za razliku od paralelnih algoritama koji koriste prednosti višeprocesorskih arhitektura računala.


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi, skripta II*, Zagreb, 2005.
