---
title: Automatsko pretvaranje tipova u Javi
layout: lekcija-java
permalink: /java-casting
---

Ako `int` podijelimo sa `int` dobijemo `int`. Ako `double` podijelimo sa `double` dobijemo `double`. Ako `int` podijelimo sa `double` ili `double` sa `double`, dobijemo `double` jer u slučaju nejednakosti tipova Java teži dodjeljivanju što šireg tipa kako se spriječilo gubljenje informacija.

## Pravila pretvaranja

- Ako je bilo koja varijabla u aritmetičkoj binarnoj operaciji (zbrajanje, oduzimanje množenje, dijeljenje, modulo) tipa `double`, Java tretira obje vrijednosti kao `double`.

- Ako ni jedna nije `double`, ali je jedna `float`, Java tretira obje vrijednosti kao `float`.

- Ako ni jedna nije ni `float` ni `double`, ali je jedna `long`, Java tretira obje vrijednosti kao `long`.

- Konačno, ako ni jedna nije `double`, `float` ni `long`, Java tretira obje vrijednosti kao `int`, čak ako u jednadžbi uopće nema cijelih brojeva.

Dakle, rezultat će biti `double`, `float`, `long` ili `int`, ovisno o tipovima argumenata.

U naredbi pridruživanja, dakle ako postoji znak jednakosti, Java uspoređuje tip na lijevoj strani sa konačnim tipom na desnoj strani. Tip na lijevoj strani neće se promijeniti, ali će se provjeriti da li vrijednost sa desne strane (`double`, `float`, `int` or `long`) odgovara tipu na lijevoj strani. Sve se može smjestiti u `double`. Sve osim `double` može se smjestiti u `float`. Svaki cjelobrojni tip može se smjestiti u `long`, ali `float` i `double` ne mogu, dok se sve tipa `int`, short i byte može smjestiti u `int`. Ako se desna strana može smjestiti u lijevu, pridruživanje se normalno obavlja.

Pridruživanje vrijednosti tipa `long` varijablama tipa `int` ili pak vrijednosti tipa `double` varijablama tipa `float` može uzrokovati probleme i kompajler vam takva pridruživanja neće dopustiti osim ako eksplicitno navedete da želite pretvaranje (*casting*). Prisilno pretvaranje tipova označava se navođenjem odgovarajućeg tipa u okruglim zagradama neposredno prije izraza koji treba pretvoriti. Na primjer,

```
int i = (int) 9.0/4.0;
```

Kad se vrijednost pretvara u drugi tip prije pridruživanja, niz operacija se poduzima da bi se desna strana “skratila” na pravu veličinu. Za konverziju između realnih (*floating point*) i cijelih brojeva (npr. int ili long), razlomljeni dio se odbacuje (zaokružuje na nulu). To će proizvesti cijeli broj. Ako je on dovoljno mali da stane u lijevu stranu, pridruživanje je završeno. U suprotnom, ako je prevelik, bit će mu pridružena najveća, a ako je premali, najmanja moguća vrijednost za odgovarajući tip.

Valja voditi računa o tome da prisilno pretvaranje može uzrokovati pogreške kojima će biti vrlo teško ući u trag i zato ovu mogućnost treba koristiti s oprezom.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
