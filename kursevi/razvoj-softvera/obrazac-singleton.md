---
title: Jedinac (<i>Singleton</i>)
layout: lekcija-razvoj
permalink: /obrazac-singleton
redirect_from: /singleton
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Eenzaam_plantje_%28zeekraal_Salicornia%29_trotseert_de_soms_barre_elementen._Locatie%2C_Noarderleech_Provincie_Friesland_02.jpg/1024px-Eenzaam_plantje_%28zeekraal_Salicornia%29_trotseert_de_soms_barre_elementen._Locatie%2C_Noarderleech_Provincie_Friesland_02.jpg)

**Jedinac ili unikat (en. *singleton*) je projektni obrazac koji obezbeđuje da postoji samo jedan objekat određene vrste.**

U objektno orjentisanim jezicima to znači da se instanca klase kreira samo jednom. Kada poku­šamo da ponovo kreiramo objekat iste klase, biće vraćena originalna instanca.

## Primer u Javi

Primer realizacije singularnog obrasca:

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
- *[Sensei’s thoughts](https://senseithoughts.wordpress.com/)*
