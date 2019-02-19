---
title: Strategija (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-strategija
redirect_from: /strategija
---

![](https://upload.wikimedia.org/wikipedia/commons/2/28/H._G._Wells_Wargaming.jpg)

**Strategijski obrazac (*strategy pattern*) uključuje uklanjanje algoritma iz klase u kojoj se nalazio i njegovo prebacivanje u posebne klase.**

Mogu postojati različiti algoritmi (strategije) koji se mogu primeniti za posmatrani problem. Ukoliko se algoritmi nalazu u jednom fajlu odakle se i pozivaju, dobićemo teško čitljiv kod sa dosta uslovnih iskaza. *Strategy pattern* omogućava klijentu da odabere koji algoritam želi da koristi iz familije postojećih algoritama i pruža jednostavan način da se pristupi tom algoritmu.

Neke od ključnih činjenica kada se radi o implementaciji strategije su:

- Context će vrlo često sadržati `switch` metodu ili ugnježdene `if` iskaze, kojima će se davati informacije kako bi se odredilo koju strategiju primeniti
- Ukoliko se strategije jednostavne metode, one se mogu implementirati i bez izdvajanja u posebne klase. Mehanizam delegiranja se može upotrebiti kako bi se ubacila odabrana strategija u Context u vreme izvršavanja
- Proširive metode se mogu koristiti kako bi se definisale nove strategije nezavisno od originalne klase koju podržavaju

![](https://upload.wikimedia.org/wikipedia/commons/3/39/Strategy_Pattern_in_UML.png)


Izvor: Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
