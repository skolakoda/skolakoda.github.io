---
title: Jedinac (<i>Singleton</i>)
layout: lekcija-razvoj
permalink: /obrazac-singleton
image: /images/koncepti/oop/singleton.jpg
---

![]({{page.image}})

**Jedinac ili unikat (en. *singleton pattern*) je projektni obrazac koji obezbeđuje da postoji samo jedan objekat određene vrste.**

U objektno orjentisanim jezicima to znači da se instanca klase kreira samo jednom. Kada pokušamo da ponovo kreiramo objekat iste klase, biće vraćena originalna instanca.

Singleton je jedan od jednostavnijih obrazaca dizajna. Klasa koja ga primenjuje ima samo jednu instancu kojom upravlja sama, i sprečava bilo koju drugu klasu da kreira njenu instancu.

## Upotreba

Singleton obrazac se obično koristi u sledećim slučajevima:
- vođenje globalnog stanja aplikacije
- centralna klasa koja upravlja vezama baze podataka
- rukovanje postavkama 
- deljenje resursa između različitih delova aplikacije

## Primer u Javi

### Revnosna inicijalizacija

Primer revnosne (*eager*) implementacije singularnog obrasca, koja odmah stvara instancu:

```java
public class Singleton {
    private static Singleton instance = new Singleton();
 
    private Singleton() {}
 
    public static Singleton getInstance() {
        return instance;
    }
}
```

### Lenja inicijalizacija

Primer lenje (*lazy*) implementacije singularnog obrasca, koja kreira instancu tek kada se pozove `getInstance()`:

```java
public class Singleton
{
  // privatni konstruktor sprečava generisanje podrazumevanog javnog konstruktora
  private Singleton() {}

  private static class SingletonHolder
  {
    private final static Singleton INSTANCE = new Singleton();
  }

  public static Singleton getInstance()
  {
    return SingletonHolder.INSTANCE;
  }
}
```

## Primer u JS-u

### Implementacija pomoću objekta

Pošto u JavaScriptu objekti mogu postojati bez klase, svaki objekat je jedinac. Najprostija implementacija unikatnog obrasca se vrši pomoću običnog objekta:

```js
const jedinac = {}
```

### Implementacija pomoću klase

Možemo koristiti i klasu da implementiramo singlton:

{:.ulaz}
```js
let primerak = null

class Jedinac {
  constructor() {
    if (!primerak) {
      primerak = this
    }
    return primerak
  }
}

const jedinac = new Jedinac()

// 1000 linija dalje u kodu ...
const jedinac2 = new Jedinac()
console.log(jedinac === jedinac2)
```

Iako koristimo naredbu `new`, zapravo se kreira samo jedna instanca, koja se vraća u narednim pozivima. Ako slučajno pokušamo da napravimo više instanci u programu, klasa će uvek vraćati isti objekat.

P.s. Promenljiva `primerak` ne treba da bude globalna, već zatvorena u modul.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- Sensei’s thoughts, *[Design Patterns (Projektni Obrasci)](https://senseithoughts.wordpress.com/2007/05/29/design-patterns-projektni-obrasci/)*
- [Šta je Singleton Design Pattern?](https://bs.linux-console.net/?p=27048#gsc.tab=0)