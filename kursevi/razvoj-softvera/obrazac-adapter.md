---
title: Adapter (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-adapter
redirect_from: /adapter
image: /images/koncepti/oop/adapter.png
---

![]({{page.image}})

**Adapter je strukturni šablon koji omogućava da objekti sa nekompatibilnim interfejsima međusobno sarađuju, bez modifikacije njihovog izvornog koda.**

Adapter funkcioniše tako što *adaptira* interfejs jednog objekta u oblik koji drugi objekat može koristiti. Adapter je takođe odgovoran za pretvaranje tipa podataka u tip koji klijent očekuje.

Ovaj obrazac je izuzetno koristan kada već imamo razvijene servise koji nemaju interfejs koji nam je potreban. 

## Vrste obrasca

Adapter obrazac srećemo u dva oblika:
- ***Object adapter pattern*** koristi instancu klase koju “obmotava”.
- ***Class adapter pattern*** koristi višestruko nasleđivanje. Ovaj vid obrasca ne može se koristiti u jezicima koji ne podržavaju višestruko nasleđivanje.

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

## Primer u JavaScript-u

Pretpostavimo da radimo sa aplikacijom koja koristi klasu `OldPrinter` za štampanje, ali sada treba da pređemo na novi sistem koji koristi drugačiji format putem `NewPrinter` klase. Stoga je potrebno napraviti interfejs koji će koristiti novi štampač na način kao što je korišćen stari:

{:.ulaz}
```js
class OldPrinter {
  printText(text) {
    console.log(`Stari printer: ${text}`)
  }
}

class NewPrinter {
  printDocument(doc) {
    console.log(`Novi printer: ${doc}`)
  }
}

class PrinterAdapter {
  constructor(newPrinter) {
    this.newPrinter = newPrinter
  }

  printText(text) {
    this.newPrinter.printDocument(text) // prilagođava poziv
  }
}

// upotreba
const newPrinter = new NewPrinter()
const adapter = new PrinterAdapter(newPrinter)
adapter.printText("Štampaj kroz adapter")
```

## Literatura
- Sensei’s thoughts, *[Velika četvorka (Design patterns) – Adapter](https://senseithoughts.wordpress.com/2007/05/29/velika-cetvorka-design-patterns-adapter)*
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.