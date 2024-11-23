---
title: Apstrakcija
layout: lekcija-razvoj
permalink: /apstrakcija
image: /images/koncepti/abstraction.jpg
---

![]({{page.image}})

**Apstrahovanje je misaoni proces izdvajanja bitnih karakteristika neke pojave. U programiranju, apstrakcija olakšava rad sa složenim sistemima i omogućava veću održivost koda i skalabilnost.** 

Apstrakcija omogućava sakrivanje detalja implementacije uz naglašavanje onoga što je važno.

Mnogi programski jezici imaju ugrađene apstraktne klase, koje ohrabruju upotrebu apstrakcije.

## Primer: geometrijski oblik

Apstraktna klasa `Oblik` može imati metode poput `povrsina()` i `obim()`. Konkretne klase, poput `Krug` ili `Pravougaonik` implementiraju te metode s detaljima specifičnim za oblik. 

```java
abstract class Oblik {
    abstract double povrsina();
    abstract double obim();
}

class Pravougaonik extends Oblik {
    private double sirina;
    private double visina;

    Pravougaonik(double sirina, double visina) {
        this.sirina = sirina;
        this.visina = visina;
    }

    @Override
    double povrsina() {
        return sirina * visina;
    }

    @Override
    double obim() {
        return 2 * (sirina + visina);
    }
}

class Krug extends Oblik {
    private double poluprecnik;

    Krug(double poluprecnik) {
        this.poluprecnik = poluprecnik;
    }

    @Override
    double povrsina() {
        return Math.PI * poluprecnik * poluprecnik;
    }

    @Override
    double obim() {
        return 2 * Math.PI * poluprecnik;
    }
}
``` 

## Primer: apstrakcija metoda plaćanja 

Apstrakcija metoda plaćanja (kartica, PayPal, itd.) koristi zajednički interfejs:

```java
interface Payment {
    void pay(double amount);
}

class CreditCardPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid " + amount + " with Credit Card");
    }
}

class PayPalPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid " + amount + " with PayPal");
    }
}

public class Main {
    public static void main(String[] args) {
        Payment payment = new CreditCardPayment();
        payment.pay(100.0);
    }
}
```

## Primer: apstrakcija baze podataka

Rad sa bazom podataka nezavisno od implementacije (npr. MySQL ili PostgreSQL):

```java
interface Database {
    void connect();
    void disconnect();
}

class MySQLDatabase implements Database {
    public void connect() {
        System.out.println("Connecting to MySQL");
    }

    public void disconnect() {
        System.out.println("Disconnecting from MySQL");
    }
}

class PostgreSQLDatabase implements Database {
    public void connect() {
        System.out.println("Connecting to PostgreSQL");
    }

    public void disconnect() {
        System.out.println("Disconnecting from PostgreSQL");
    }
}

public class Main {
    public static void main(String[] args) {
        Database db = new MySQLDatabase();
        db.connect();
        db.disconnect();
    }
}
```
