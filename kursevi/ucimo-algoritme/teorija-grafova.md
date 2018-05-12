---
title: Uvod u teoriju grafova
layout: lekcija-algoritmi
permalink: /teorija-grafova
---

## Osnovni pojmovi u teoriji grafova

Graf je struktura koja opisuje odnose između nekih objekata. Neformalno govoreći, grafove čine tačke (**čvorovi**), koje predstavljaju neke objekte, i linije između njih (**grane**), koje označavaju odnose između tih objekata. Proučavanjem grafova bavi se teorija grafova.

![](http://boljiprogramer.com/wp-content/uploads/2018/03/graf1.png)

Na slici 1 možemo vidjeti primjer grafa. Ovim grafom možemo predstaviti npr. gradove i puteve između njih, računare povezane u mrežu i slično. Dakle, grafovi nam služe da neki pojam iz stvarnog svijeta pojednostavimo i svedemo samo na ono što nam je bitno za određeni problem. U većini slučajeva, najbitnije nam je predstaviti objekte i odnose između njih.

Kao što smo rekli, graf se sastoji od čvorova i grana. Prema tome definisan skupom čvorova **V** (engl. *vertex*) i skupom grana **E** (engl. *edges*). Prema tome graf sa slike 1 možemo zapisati pomoću sljedeća dva skupa:

```
Skup čvorova: V = { A, B, C, D, E, F, G }
Skup grana: E = { AB, BC, CD, DE, EA, BE, AD, EF, EG, FG, FF }
```

Lako je primjetiti da imamo granu FF koja i počinje i završava se u čvoru F. Grana koja počinje i završava se u istom čvoru naziva se **petlja**.

## Vrste i podvrste grafova

![Potpun graf](http://boljiprogramer.com/wp-content/uploads/2018/03/graf2.png)

Graf koji nema petlje i višestruke grane između istih čvorova naziva se **jednostavan graf**, dok se graf koji ima petlje ili višestruke grane naziva **opšti graf**. Na primjer, graf sa slike 1 je opšti graf, dok su grafovi sa slika 2 i 3 jednostavni grafovi.

Graf u kojem postoji bar jedan put od svakog čvora do bilo kojeg drugog čvora naziva se **povezan graf**. Grafovi na slikama 1, 2 i 3 su povezani. Primjer nepovezanog grafa vidimo na slici 4.

Graf sa slike 2 je, takođe, **potpun graf**. Potpun graf je najgušći jednostavan graf (sa najvećim mogućim brojem grana), tj. graf koji ima granu između svaka dva čvora. Ako želimo da izračunamo broj grana nekog potpunog grafa koristimo formulu `E = V * (V – 1) / 2`, gdje je `E` traženi broj grana, a `V` broj čvorova u tom grafu. Prema tome, možemo zaključiti da graf na slici 2 ima 10 grana, jer ima 5 čvorova, tj. imamo izraz 5 * (5 – 1) / 2 = 10.

![Stablo](http://boljiprogramer.com/wp-content/uploads/2018/03/graf3.png)

Sa druge strane, najrjeđi povezani graf naziva se **stablo**. Dakle, stablo je povezani graf koji ima minimalan mogući broj grana.  Ako stablo ima V čvorova, broj grana u tom stablu je `E = V – 1`. Na slici 3 vidimo primjer stabla.

Svaki povezani graf sastoji se obavezno iz samo jedne povezane komponente, dok se svaki nepovezan graf sastoji iz više povezanih komponenti. Na slikama 1, 2 i 3 vidimo grafove koji se sastoje iz jedne povezane komponente (jer su povezani), dok se graf na slici 4 sastoji iz dvije povezane komponente.

Graf sa slike 4 je **nepovezan graf**. Vidimo da se taj graf sastoji iz dvije grupe čvorova (dvije povezane komponente). Prvu povezanu komponentu čine čvorovi A, B, C, D i E, dok drugu čine: F, G i H. Primjećujemo da između ove dvije komponente ne postoji nikakva grana koja ih spaja.

![Nepovezan graf](http://boljiprogramer.com/wp-content/uploads/2018/03/graf4.png)

Karakteristika povezanih grafova je da iz svakog čvora postoji barem jedan put do bilo kojeg drugog čvora, dok je kod nepovezanih grafova iz nekih čvorova nemoguće stići do nekih drugih čvorova (ti čvorovi se nalaze u različitim povezanim komponentama). Na primjer, vidimo da u grafu sa slike 4 nije moguće iz čvora A doći do čvora F. Sa druge strane, u grafovima sa slika 1, 2 i 3 moguće je iz svakog čvora stići preko njegovih grana do bilo kojeg drugog čvora.

## Kretanje kroz graf

Kroz graf se možemo kretati preko grana. Skup nekih grana preko kojih smo se kretali naziva se **staza**. U grafu na slici 4 iz čvora A možemo doći u čvor E preko staza: A – C – D – E ili A – B – C – D – E. U nekim slučajevima možemo ponavljati čvorove koristeći petlje. U slučaju da je u grafu sa slike 4 potrebno doći iz čvora H u čvor G to možemo uraditi pomoću staze H – F – G, ali takođe i pomoću staze H – H – F – G (ponavljamo dva puta čvor H pomoću petlje koja se nalazi na tome čvoru).

Staza koja ne ponavlja čvorove naziva se **put**. Prema tome postoje dva puta od A do E u grafu sa slike 4, a to su: A – C – D – E i A – B – C – D – E, dok staza A – C – B – A – C – D – E nije put, jer se čvorovi A i C obilaze po dva puta.

Primjećujemo da u prethodnom primjeru imamo dio staze koji počinje u čvoru A i završava se u čvoru A. To je dio staze: A – C – B – A. Ovakva staza (koja počinje i završava se u istom čvoru) naziva se **ciklus**.

U teoriji grafova često čujemo izraz **susjedni čvorovi**. Dakle, susjedni čvorovi su oni čvorovi koji su povezani granom, tj. moguće je iz jednog u drugi doći putem koji se sastoji samo od jedne grane (za takav put kažemo da ima dužinu 1).

## Usmjereni grafovi

![Usmjereni graf](http://boljiprogramer.com/wp-content/uploads/2018/03/graf5.png)

U dosadašnjem dijelu teksta govorili smo samo o neusmjerenim grafovima. Pored njih, postoje i **usmjereni grafovi**. Kod usmjerenih grafova svaka grana je usmjerena, što znači da, ako se grana prostire od čvora A do čvora B, nije moguće pomoću te grane preći iz čvora B u čvor A. Kod usmjerenih grafova nije isto kada napišemo da imamo granu AB ili granu BA. Pomoću grane AB krećemo se samo od A do B, a pomoću grane BA krećemo se od B do A.

Vidimo na slici 5 da je iz čvora A moguće doći u sve ostale čvorove, ali ni iz jednog drugog čvora nije moguće doći u čvor A. Sa druge strane, iz čvora D ne možemo doći ni u jedan drugi čvor. Iako su čvorovi A, B, C, D i E povezani i izgledaju nam kao ciklus, možemo primjetiti da oni ne čine ciklus, jer je graf usmjeren. Takođe, ni čvorovi A, F i E ne čine ciklus.

## Težinski grafovi

![Težinski graf](http://boljiprogramer.com/wp-content/uploads/2018/03/graf6.png)

Svi do sad pomenuti grafovi bili su bestežinski grafovi. Pored njih, postoje i **težinski grafovi**. Važno je naglasiti da svaka grana težinskog grafa ima određenu težinu.

Na slici 6 vidimo povezan, neusmjeren, težinski graf. Vidimo da na slici pored svake grane grafa imamo određenu vrijednost, što znači da je težina te grane jednaka broju koji je napisan pored nje. Ako bi graf sa slike predstavljao gradove u nekoj državi, onda bismo mogli reći da težine grana predstavljaju vrijeme potrebno za kretanje između tih gradova.

Česti problemi sa težinskim grafovima odnose se na pronalazak najkraćeg puta od nekog čvora do nekog drugog čvora. Ako nam u navedenom primjeru težine grana predstavljaju broj minuta za prelazak iz jadnog grada u drugi, možemo reći da je najkraći put od F do G put F – E – G. Zbir težina grana na ovom putu je 29. Ukoliko bismo išli od F direktno u G ukupna težina puta bila bi 35.


Izvor: [boljiprogramer.com](http://boljiprogramer.com/napredno-programiranje/algoritmi-sa-grafovima/uvod-u-teoriju-grafova/)
