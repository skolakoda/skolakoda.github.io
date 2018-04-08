---
title: Otvoren/zatvoren princip
layout: lekcija-razvoj
permalink: /otvoren-zatvoren-princip
---

**Otvoren-zatvoren princip (*Open-close principle*) govori da klasa treba da bude otvorena za proširenja a zatvorena za izmene.**

Drugim rečima, treba omogućiti dodavanje novih karakteristika i proširenje klase bez promene unutrašnjeg ponašanja postojećih metoda. Princip teži da se izbegne menjanje postojeće klase i drugih klasa koje od nje zavise, jer će to dovesti do pojavljivanja velikog broja grešaka u samoj aplikaciji.

## Primer

U okviru primera možemo posmatrati klasu `Customer` koja poseduje jednu metodu `getDiscount()`:

```cs
class Customer {
  public virtual double getDiscount(double TotalSales) {
    return TotalSales;
  }
}
```

Ako se vremenom pored klijenata pojave i klijenti posebnog tipa (npr. silver i gold), onda se klasa `Customer` može promeniti kao što je prikazano:

```cs
class Customer {
  private int _custType;

  public int CustType {
    get {
      return _custType;
    }
    set {
      _custType = value;
    }
  }

  public double getDiscount(double TotalSales) {
    if (_custType == 1) {
      return TotalSales - 100;
    }
    else {
      return TotalSales - 50;
    }
  }
}
```

Problem je što, ako budemo imali još tipova klijenata, moraćemo dodavati još `if` uslova u okviru `getDiscount` metode, što će dovesti do nove promene u okviru `Customer` klase. Kada se god promeni klasa, mora se osigurati da prethodni kod radi, jer izmene mogu dovesti do pojave grešaka u ostatku koda.

Umesto toga, kod treba proširiti kako bi bili sigurni da postojeći kod i dalje radi:

```cs
class Customer {
  public virtual double getDiscount(double TotalSales) {
    return TotalSales;
  }
}
class SilverCustomer: Customer {
  public override double getDiscount(double TotalSales) {
    return base.getDiscount(TotalSales) - 50;
  }
}
class GoldCustomer: SilverCustomer {
  public override double getDiscount(double TotalSales) {
    return base.getDiscount(TotalSales) - 100;
  }
}
```

Ovim kodom smo postigli da je klasa `Customer` zatvorena za bilo kakve izmene ali je otvorena za proširenja, što je suština OCP-a.


Izvor: Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
