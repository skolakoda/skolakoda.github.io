---
title: Kretanje kroz graf
layout: lekcija-strukture
permalink: /kretanje-kroz-graf
---

Kroz graf se možemo kretati preko grana. Skup nekih grana preko kojih smo se kretali naziva se **staza**. U nekim slučajevima možemo ponavljati čvorove koristeći **petlje**. 

Staza koja ne ponavlja čvorove naziva se **put**. 

Staza koja počinje i završava se u istom čvoru naziva se **ciklus**.

**Susjedni čvorovi** su oni čvorovi koji su povezani granom, tj. moguće je iz jednog u drugi doći putem koji se sastoji samo od jedne grane (za takav put kažemo da ima dužinu 1).

## Usmjereni grafovi

![Usmjereni graf](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Directed_graph_no_background.svg/300px-Directed_graph_no_background.svg.png)

Do sada smo govorili samo o neusmjerenim grafovima. Pored njih, postoje i usmjereni. Kod **usmjerenih grafova** svaka grana je usmjerena (jednosmerna), što znači da ako vodi od čvora A do čvora B, ne vodi iz čvora B u čvor A. Kod usmjerenih grafova nije isto kada napišemo da imamo granu AB ili granu BA. Pomoću grane AB krećemo se samo od A do B, a pomoću grane BA krećemo se od B do A.

## Težinski grafovi

![Težinski graf](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/CPT-Graphs-directed-weighted-ex1.svg/268px-CPT-Graphs-directed-weighted-ex1.svg.png)

Do sad pomenuti grafovi bili su bestežinski. Pored njih, postoje i **težinski grafovi**, gde svaka grana ima određenu težinu.

Na slici, vidimo da pored svake grane grafa imamo određenu vrijednost, što znači da je težina te grane jednaka broju koji je napisan pored nje. Ako bi graf sa slike predstavljao gradove u nekoj državi, onda bismo mogli reći da težine grana predstavljaju vrijeme potrebno za kretanje između tih gradova.

Česti problemi sa težinskim grafovima odnose se na pronalazak najkraćeg puta od nekog čvora do nekog drugog čvora.

## Izvori

- [Uvod u teoriju grafova](http://boljiprogramer.com/napredno-programiranje/algoritmi-sa-grafovima/uvod-u-teoriju-grafova/)
