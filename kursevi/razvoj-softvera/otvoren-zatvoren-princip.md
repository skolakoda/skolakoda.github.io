---
title: Otvoreno-zatvoren princip 
layout: lekcija-razvoj
permalink: /otvoren-zatvoren-princip
---

**Otvoreno-zatvoren princip (*Open-close principle*) glasi da klasa treba da bude otvorena za proširenje a zatvorena za izmene. To znači da možemo dodati novu funkcionalnost bez menjanja postojeće.**

Menjanje postojeće funkcionalnosti dovodi do mnogih grešaka u aplikaciji. Proširenje se obično postiže kroz interfejse ili nasleđivanje. Polimorfizam omogućava proširenje bez potrebe za menjanjem postojećih klasa, jer možemo dodati nove podklase koje implementiraju specifično ponašanje.

## Primer

Imamo klasu `Customer` koja poseduje jednu metodu `getDiscount()`:

```cs
class Customer {
  public virtual double getDiscount(double TotalSales) {
    return TotalSales;
  }
}
```

Ako vremenom uvedemo posebne tipove mušterija (npr. silver i gold), onda se klasa `Customer` može promeniti na sledeći način:

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

Problem je, ako budemo imali još tipova mušterija, moraćemo dodavati još `if` uslova u `getDiscount` metodu, što vodi do novih promene u okviru `Customer` klase. Kad god se promeni klasa, mora se osigurati da prethodni kod radi, jer izmene mogu dovesti do grešaka.

### Rešenje pomoću polimorfizma

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

Ovim kodom smo postigli da je klasa `Customer` zatvorena za bilo kakve izmene ali je otvorena za proširenja, što je suština Otvoreno-zatvorenog principa.

### Izvori 
- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Wikipedia, [Open–closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
