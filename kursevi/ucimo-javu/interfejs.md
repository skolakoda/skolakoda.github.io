---
title: Interfejs (sučelje)
layout: lekcija-java
permalink: /java-interfejs
---

**Interfejs ili sučelje je nešto poput klase, ali sadrži samo apstraktne metode i konstantne atribute. U sučelju možete deklarirati po volji mnogo različitih metoda, bez njihove implementacije.**

Interfejs definiše samo prototip metoda. U klasama koje implementiraju interfejs definiše se tijelo metode. Interfejs se definiše kao klasa, jedino se umjesto ključne riječi `class` koristi `interface`.

Gotovo sva sučelja su `public`. Moguće je deklarirati i `protected` sučelje ako želimo da ga mogu implementirati samo klase iz određenog paketa, no to nije uobičajeno. Ni jedno sučelje ne smije biti privatno jer njegova je svrha da ga druge klase nasljeđuju. Sve metode u sučelju moraju biti javne.

U Javi, klasa može da naslijedi samo jednu klasu, ali može da implementira više interfejsa.

## Primer: interfejs `Uvoz`

Na primjer, možemo definirati sučelje `Uvoz` koje sadrži metodu `izracunajCarinu()`, koja je javna i apstraktna. Deklaracija metode u sučelju piše se na uobičajen način. Tijelo metode ne nalazi se u sučelju, već se kreira tek u klasama koje implementiraju to sučelje.

```java
public interface Uvoz {

  public abstract double izracunajCarinu();

}
```

`Uvoz` je deklariran kao `public` tako da mu se može pristupiti iz bilo koje klase. Ovo bi se sučelje moglo primijeniti na mnoge različite klase, automobile, odjeću, hranu, elektroniku i slično. Klasa implementira interfejs pomoću ključne riječi `implements` praćene imenom interfejsa u deklaraciji klase, na primjer:

```java
public class Automobil implements Uvoz {

  public double izracunajCarinu() {
    // ovde ide implementacija metoda
  }

}
```

Svaki tip robe vjerojatno ima drugačiji način za računanje carinske pristojbe. Zato je pogodno definirati ovakvo sučelje, a u svakoj od klasa će ono biti implementirano na odgovarajući način.

## Interfejs kao ugovor

Zamislimo da klasa potpisuje «ugovor» sa ostalim klasama u programu. Taj ugovor kaže da klasa ima određene metode sa zadanim tipovima argumenata i povratnim tipovima. Ugovor može također reći da klasa ima atribute zadanog imena i zadanog tipa. Međutim, on ne kaže kako su te metode implementirane niti zabranjuje postojanje drugih metoda i atributa koje klasa možda koristi. On samo garantira prisutnost određenih metoda i atributa pri čemu ne isključuje ostale metode ni atribute.

## Interfejs i enkapsulacija

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mit-old-elevator-panel.jpg/576px-Mit-old-elevator-panel.jpg)

Klasa prezentira prema vanjskom svijetu određenu sliku sebe, tzv. sučelje. Sučelje kaže da klasa ima određene metode i određene atribute. Sve ostalo, uključjući funkcioniranje metoda je skriveno. Sve dok se interfejs ne mijenja, programer može slobodno mijenjati način na koji je on implementiran. To između ostaloga dozvoljava programeru da mijenja i poboljšava algoritme koje klasa koristi bez bojazni da će to na neki nepredvidljiv način narušiti funkcioniranje klase. To se naziva [enkapsulacijom](/enkapsulacija).

## Interfejs i podklase

Za razliku od klasa, sučelje može biti pridruženo klasi koja je već podklasa neke druge klase (klasa u Javi može imati samo jednu neposrednu nadklasu). Nadalje, sučelje se može primijeniti (kao neka vrsta "tipa") na članove mnogih različitih klasa.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
