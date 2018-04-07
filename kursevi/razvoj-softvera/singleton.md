---
title: Jedinac (<i>Singleton</i>)
layout: lekcija-razvoj
permalink: /singleton
---

Zamislimo da pravimo aplikaciju u kojoj treba da omogućimo instanciranje samo jednog objekta neke klase, tj. da omogućimo jedinstvenost. Mogli bismo da lupamo glavu, na kraju da potrošimo vreme i sigurno (pošto smo veoma dobri programeri) dođemo do rešenja, ali mnogo bismo vremena uštedeli ako poznajemo *Singleton* obrazac, koji na siguran, proveren i jednostavan način ovo omogućava.

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
