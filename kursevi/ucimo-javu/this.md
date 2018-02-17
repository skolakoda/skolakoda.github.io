---
title: Ključna riječ this
layout: lekcija-java
permalink: /java-this
---

**Svaka metoda, koja nije statička, se uvek poziva za neki objekat svoje klase. Kada se metoda pozove, prosleđuje joj se jedan implicitni argument: pokazivač na objekat za koji je pozvana. Pokazivač na objekat za koji je pozvana metoda zove se `this`.**

## Implicitno `this`

Kada koristimo atribut objekta, možemo pisati samo naziv ili `this.naziv`. Nije dobra praksa nepotrebno opterećivati kod, ali postoje situacije kada je neophodno eksplicitno koristiti `this`.

## Eksplicitno `this`

Kada imamo lokalnu varijablu istog imena, ona skriva ili zasjenjuje (*hides*) varijablu članicu klase. Varijabla članica se može referencirati dodavanjem prefiksa `this`. Pomoću ključne riječi `this`, moguće je argumentima neke metode davati ista imena kao varijablama članicama. Npr:

```java
  void setX(double x) {
    this.x = x;
  }
```

`this.x` se odnosi na atribut (varijablu članicu), a `x` na parametar metoda.
