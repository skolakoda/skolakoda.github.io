---
title: Ključna reč super
layout: lekcija-java
permalink: /java-super
---

**Kjučna riječ `super` poziva konstruktor nadklase.** Pomoću ključne reči `super` kao metoda, vrši se pozivanje baznog konstruktora iz konstruktora izvedene klase.

Uvijek je potrebno pozivati odgovarajući konstruktor bazne klase u konstruktorima izvedene klase. Poziv konstruktora bazne klase mora biti prva naredba u tijelu konstrukotra izvedene klase. Ukoliko to nije slučaj, kompajler će ubaciti poziv podrazumijevanog konstrukotra bazne klase za nas:

```java
super(); //poziv podrazumijevanog konstruktora bazne klase
```

Kada definišemo sopstveni konstruktor u klasi, kompajler ne kreira podrazumijevani konstruktor, jer predstavlja da mi brinemo o svim detaljima konstruisanja objekata, uključujući podrazumijevani konstruktor. Ukoliko u baznoj klasi nismo definisali podrazumijevani konstruktor, tj. konstruktor bez parametara, kada kompajler umetne poziv podrazumijevanog konstruktora, dobija se greška.

## Prekrivanje i super

Kada u nasleđenim klasama imamo prekriven (*overridden*) metod bazne klase, možemo pozivati baznu verziju ovog metoda pomoću ključne riječi `super`. Istu notaciju koristimo i za referisanje atributa nadklase koji su skriveni istoimenim atributima izvedene klase.


Izvor: *Programski jezik Java*, Bilješke sa predavanja Muzafera Saračevića, Novi Pazar, 2015.
