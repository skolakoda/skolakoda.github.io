---
title: Jedinac (<i>Singleton</i>)
layout: lekcija-razvoj
permalink: /obrazac-singleton
redirect_from: /singleton
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Eenzaam_plantje_%28zeekraal_Salicornia%29_trotseert_de_soms_barre_elementen._Locatie%2C_Noarderleech_Provincie_Friesland_02.jpg/1024px-Eenzaam_plantje_%28zeekraal_Salicornia%29_trotseert_de_soms_barre_elementen._Locatie%2C_Noarderleech_Provincie_Friesland_02.jpg)

**Zamislimo da pravimo aplikaciju u kojoj treba da omogućimo instanciranje samo jednog objekta neke klase, tj. da omogućimo jedinstvenost.**

Mogli bismo da lupamo glavu, na kraju da potrošimo vreme i sigurno (pošto smo veoma dobri programeri) dođemo do rešenja, ali mnogo bismo vremena uštedeli ako poznajemo **singularni obrazac** (jedinac ili *singleton*), koji na siguran, proveren i jednostavan način ovo omogućava.

## Primer

Evo UML predstave Singletona:

![](https://upload.wikimedia.org/wikipedia/commons/f/fb/Singleton_UML_class_diagram.svg)

A evo i realizacije ovog projektnog obrasca u JAVA jeziku:

```java
public class Singleton
{
  // Private constructor suppresses generation of a (public) default constructor
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


Izvor: *[Sensei’s thoughts](https://senseithoughts.wordpress.com/)*
