---
title: Adapter (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-adapter
redirect_from: /adapter
image: /images/koncepti/oop/adapter.png
---

![]({{page.image}})

**Adapter je strukturni šablon koji nam omogućava da koristimo klasu koja ima potrebnu funkcionalnost, ali neadekvatan interfejs.**

Ovaj obrazac služi da *adaptira* postojeći interfejs onome što klijent očekuje. Adapter omogućava saradnju klasama koje inače ne bi mogle da komuniciraju, tako što pravi interfejs (“omotač”) servisne klase. Adapter je takođe odgovoran za pretvaranje tipa podataka u tip koji klijent očekuje.

## Gde koristiti?

Ovaj obrazac je izuzetno koristan kada već imamo razvijene servise, ali ne koriste interfejs koji nam je potreban. 

## Vrste obrasca

Ovaj obrazac srećemo u dva oblika:

- ***Object adapter pattern*** koristi instancu klase koju “obmotava”. Evo UML prikaza:

![](https://upload.wikimedia.org/wikipedia/commons/d/d7/ObjectAdapter.png)

- ***Class adapter pattern*** koristi višestruko nasleđivanje. Ovaj vid obrasca ne može se koristiti u jezicima koji ne podržavaju višestruko nasleđivanje. Evo UML notacije:

![](https://upload.wikimedia.org/wikipedia/commons/3/35/ClassAdapter.png)

## Primer u Javi

Recimo da imamo razvijene metode za rad sa `Stack`-om, ali servis nam vraća `DoublyLinkedList`. Stoga, moramo uraditi prilagođavanje liste interfejsu `Stack`, implementacijom adapter obrasca:

```java
interface Stack
{
  void push (Object o);
  Object pop ();
  Object top ();
}

class DoublyLinkedList
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

/* Adapt DoublyLinkedList to Stack interface */
class DListImpStack extends DoublyLinkedList implements Stack
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

`DListImpStack` proširuje dvostruko ulančanu lista, a implementira interfejs `Stack`. Ovim adaptiramo `DoublyLinkedList` i prilagođavamo ga `Stack` interfejsu. Drugim rečima koristimo `Dlist` metode (npr. `insertTail`) da bismo implementirali metode interfejsa `Stack` (npr. `push`). Na ovaj način možemo koristiti `Stack` metode dok se u stvari u pozadini izvršavaju metode `DoublyLinkedList`.

## Literatura
- Sensei’s thoughts, *[Velika četvorka (Design patterns) – Adapter](https://senseithoughts.wordpress.com/2007/05/29/velika-cetvorka-design-patterns-adapter)*
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.