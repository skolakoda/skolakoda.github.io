---
title: Jedinac (<i>Singleton</i>)
layout: lekcija-razvoj
permalink: /obrazac-singleton
image: /images/koncepti/oop/singleton.jpg
---

![]({{page.image}})

**Jedinac (en. *singleton*) je projektni obrazac koji obezbeđuje da postoji samo jedan globalni objekat određene vrste.** Iako može delovati da ih ima više, svi "primerci" zapravo pokazuju na istu strukturu. 

Glavna svrha singltona je da obezbedi jedinstvenu instancu koja upravlja nekim zajedničkim resursima ili stanjem. Klasa koja ga primenjuje ima samo jednu instancu kojom upravlja sama, i sprečava bilo kog drugog da kreira njenu instancu.

Singlton je jedan od jednostavnijih obrazaca dizajna. Ovaj obrazac se tako implementira da pokušaj kreiranja nove instance kreira singleton samo za prvi poziv, te vraća pokazivače na njega u narednim pozivima.

## Upotreba

![](https://raw.githubusercontent.com/skolakoda/teorija-razvoja-igara/master/05-projektni-obrasci/slike/sington.png)

Singlton obrazac se obično koristi u sledećim slučajevima:
- vođenje globalnog stanja aplikacije
- centralna klasa koja upravlja vezama baze podataka
- rukovanje postavkama 
- deljenje resursa između različitih delova aplikacije

U video igrama, singlton obrazac se često koristi za upravljanje globalnim stanjem i resursima, kao što su:
- Menadžer zvuka (`SoundManager`) – Jedina instanca koja upravlja svim zvučnim efektima i muzikom u igri. 
- Menadžer igre (`GameManager`) – Globalni objekat koji prati stanje igre (pobednik, trenutni nivo, broj poena, itd.). Ovo omogućava pristup različitim aspektima igre sa bilo kog dela koda.
- Menadžer čuvanja (`SaveManager`) – Upravlja globalnim podacima o napretku u igri, kao što su sačuvane igre, postavke, itd.

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
