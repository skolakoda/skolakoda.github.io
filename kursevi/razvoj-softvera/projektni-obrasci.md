---
title: Projektni obrasci (<i>Design patterns</i>)
layout: lekcija-razvoj
permalink: /projektni-obrasci
---

**Šta su projektni obrasci i čemu služe?**

Prosto rečeno, projektni obrasci predstavljaju akumulirano iskustvo “starih” i iskusnih programera u rešavanju nekih osnovnih programerskih problema iz oblasti objektnog programiranja. Dakle, svako od nas se prilikom susretanja sa nekim problemom obratio bar jednom “Googleu” za pomoć, tražeći informaciju da li je neko pre nas već imao problem, i što je još važnije, da li ga je i kako rešio. Projektni obrasci nude upravo rešenja za već mnogo puta “prežvakane” probleme, rešenja koja su već isfiltrirana kroz umove najvećih znalaca teorije i prakse objektnog programiranja i u koje možemo imati puno poverenje.

Evo jednostavnog primera: zamislimo da pravimo aplikaciju u kojoj treba da omogućimo instanciranje samo jednog objekta neke klase, tj. da omogućimo jedinstvenost. Mogli bismo da lupamo glavu, na kraju da potrošimo vreme i sigurno (pošto smo veoma dobri programeri) dođemo do rešenja, ali mnogo bismo vremena uštedeli da smo poznavali *Singleton* obrazac, koji na siguran, proveren i jednostavan način ovo omogućava. Za primer sam uzeo ovaj obrazac, jer je jedan od najjednostavnijih.

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

Da je sve ovako jednostavno, programeri bi brzo ostali bez posla, međutim nije tako. Sem dobrog enciklopedijskog poznavanja projektnih obrazaca, kao i dobrog razumevanja svakog projektnog obrasca ponaosob, neophodno je vladati veštinom prepoznavanja obrazaca u stvarnom svetu. Iz specifikacije, ili još bolje u ranijoj fazi – korisničkih zahteva, potrebno je prepoznati obrasce, a ove zahteve i zadatke koji proističu iz njih rešiti upotrebom najbolje prakse, tj. projektnih obrazaca.

Naravno, projektni obrasci nisu Bogom dani i idealni i nije zlatno pravilo koristiti ih po svaku cenu, ali kad god je to moguće, toplo preporučujem. U daljim tekstovima ćemo razmotriti opis, upotrebu i primere korišćenja najpoznatijih projektnih obrazaca.


Izvor: *[Sensei’s thoughts](https://senseithoughts.wordpress.com/)*
