---
title: Definisanje vlastitih izuzetaka
layout: lekcija-java
permalink: /definisanje-izuzetaka
---

**Većina klasa iznimki nasljeđuje veći dio funkcionalnosti od svoje nadklase.** 

Svaka podklasa služi kao označitelj za različite vrste iznimaka. Međutim, ona rijetko donosi nove metode ili atribute. Uglavnom jedine metode koje trebate implementirati su konstruktori. Uvijek mora biti jedan konstruktor bez argumenata i jedan koji uzima poruku tipa `String` za argument. Oni će uglavnom pozivati odgovarajuće konstruktore iz nadklase.

```java
public class ClockException extends Exception {

  public ClockException(String message) {
    super(message);
  }

  public ClockException() {
    super();
  }

}
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
