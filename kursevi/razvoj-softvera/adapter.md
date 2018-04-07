---
title: Adapter (projektni obrazac)
layout: lekcija-razvoj
permalink: /adapter
---

![](https://gamessoon.ru/assets/264-adapterintro2646.jpg)

***Adapter - strukturalni šablon koji vam omogućava da koristite klasu koja implementira potrebne funkcije, ali ima neadekvatan interfejs.***

Evo nas kod drugog obrasca “Velike Četvorke” (*Gang of Four*). Ovaj obrazac, kao što i samo ime sugeriše služi da prilagodi (adaptira) postojeće funkcionalnosti (interfejs) onome što korisnik očekuje. Ovaj obrazac omogućava saradnju klasama koje inače ne bi mogle da funkcionišu zajedno zbog nekompatibilnosti, tako što pravi sopstveni interfejs – “omotač” oko već postojeće klase i na taj način omogućavaju klijentu da komunicira sa osnovnom klasom. Adapter je takođe odgovoran za pretvaranje tipa podataka u tip koji klijent očekuje kao odgovor.

## Dva vid obrasca

Ovaj obrazac srećemo u dva oblika:

**Object adapter pattern** – adapter u ovom slučaju koristi instancu (objekat) klase koju “obmotava”. Evo UML prikaza:

![](https://upload.wikimedia.org/wikipedia/commons/d/d7/ObjectAdapter.png)

**Class adapter pattern** – U ovom slučaju adapter koristi višestruko nasleđivanje. Ovaj vid obrasca ne može se koristiti u jezicima koji ne podržavaju višestruko nasleđivanje (npr. Java). Evo UML notacije:

![](https://upload.wikimedia.org/wikipedia/commons/3/35/ClassAdapter.png)

## Primer

Evo i primera Java implementacije *Object Adapter* obrasca:

```java
interface Stack
{
  void push (Object o);
  Object pop ();
  Object top ();
}

/* DoubleLinkedList */
class DList
{
  public void insert (DNode pos, Object o) { ... }
  public void remove (DNode pos) { ... }

  public void insertHead (Object o) { ... }
  public void insertTail (Object o) { ... }

  public Object removeHead () { ... }
  public Object removeTail () { ... }

  public Object getHead () { ... }
  public Object getTail () { ... }
}

/* Adapt DList class to Stack interface */
class DListImpStack extends DList implements Stack
{
  public void push (Object o) {
    insertTail (o);
  }

  public Object pop () {
    return removeTail ();
  }

  public Object top () {
    return getTail ();
  }
}
```

`DListImpStack` prosiruje `DList` (dvostruko ulančana lista), a implementira interfejs `Stack`. Ovim adaptiramo `DList` i prilagođavamo ga `Stack` interfejsu. Drugim rečima koristimo `Dlist` metode (npr. `insertTail`) da bismo implementirali metode interfejsa `Stack` (npr. `push`). Na ovaj način možemo koristiti metode implementiranog `Stack`-a, dok se u stvari u pozadini izvršavaju metode `DList`-a.

## Gde koristiti?

Gde koristiti ovaj obrazac?

Ovaj obrazac je izuzetno koristan kada već imamo razvijene servise (tj. metode, funkcionalnosti), ali ne koriste interfejs koji nam je potreban. Kao u primeru, imali smo već razvijene metode za rad sa `Stack`-om, ali u okviru druge klase (`DList`) i morali smo samo uraditi malo prilagođavanje interfejsu `Stack`.

Primer iz svakodnevnog života je konvertovanje DOM-a (*Document Object Model*) jednog XML-a za prikaz u strukturi drveta.


Izvor: *[Sensei’s thoughts](https://senseithoughts.wordpress.com/)*
