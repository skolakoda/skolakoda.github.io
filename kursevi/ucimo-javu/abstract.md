---
title: Apstraktne klase
layout: lekcija-java
permalink: /java-abstract
---

![](http://www.itrelease.com/wp-content/uploads/2011/05/picture-abstract-class-UML-Diagram.gif)

**Apstraktne klase ne mogu imati instance. U hijerarhiji nasljeđivanja, one se koriste isključivo kao nadklase, tj. iz nje se izvode klase koje dijele zajednički dizajn. Izvedene klase, koje mogu imati instance, se nazivaju konkretnim klasama.**

Apstraktna klase se definira dodavanjem ključne riječi `abstract` nakon specifikatora pristupa, npr.:

```java
public abstract class Vozilo {}
```

Apstraktne klase se ne mogu instancirati. Pokušaj instanciranja`:

```java
Vozilo m = new Vozilo();
```

dat će pogrešku kod kompilacije:

```
VoziloProba.java:5: Vozilo is abstract; cannot be instantiated
    Vozilo m = new Vozilo();
                     ^
```

Klasa `Vozilo` je zapravo tipičan primjer klase koja treba biti apstraktna. Ideja generičkog vozila nije realna. Realno je raditi s automobilima, kamionima, motociklima i ostalim objektima raznih podklasa od `Vozilo`, ali ne i sa objektima apstraktne klase.

Apstraktne klase imaju apstraktne metode.

## Apstraktne metode

Apstraktna metoda ima deklaraciju, ali ne i implementaciju. Drugim riječima, nedostaje joj tijelo metode. Tijelo apstraktne metode se implementira u podklasama.

Apstraktna metoda može postojati jedino unutar apstraktne klase ili interfejsa.

## Implementacija

Npr. apstraktna klasa `Vozilo` mogla bi imati apstraktnu metodu `gorivo()`:

```java
public abstract class Vozilo {

  public abstract void gorivo();

}
```

Potklase izvedene iz apstraktne klase, da bi mogle imati svojih instanci, moraju implementirati svaku deklarisanu metodu. Primjerice, klasa `Kola` bi metodu `gorivo()` mogla implementirati punjenjem spremnika benzinom. Klasa `Kamion` mogla bi je implementirati punjenjem spremnika diesel gorivom. Klasa `ElektricnaKola` bi je implementirati punjenjem električnom strujom.

## Literatura
- Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
- *Programski jezik Java*, Bilješke sa predavanja Muzafera Saračevića, Novi Pazar, 2015.
