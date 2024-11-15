---
title: Ubrizgavanje zavisnosti
layout: lekcija-razvoj
permalink: /ubrizgavanje-zavisnosti
image: /images/koncepti/oop/Dependency-Injection.gif
---

![]({{page.image}})

**Ubrizgavanje zavisnosti** (*dependency injection*, skraćeno DI) je softverski obrazac gde se zavisnosti klase dostavljaju spolja, umesto da ih klasa sama kreira. Ovo ukida tesnu povezanost između komponenti, povećava modularnost i olakšava testiranje i održavanje.

Ubrizgavanje zavisnosti predstavlja praktičnu primenu [principa inverzije zavisnosti](/princip-inverzije-zavisnosti), tako što klase višeg nivoa više ne zavise direktno od klasa nižeg nivoa već od apstrakcija. Zavisnosti (moduli nižeg nivoa) se prosleđuju spolja, obično putem konstruktora, metoda ili polja.

U širem smislu oba potpadaju pod princip [inverzije kontrole](/inverzija-kontrole).

## Primer 

```cs
// bez ubrizgavanja zavisnosti
public class UserService {
    private Database db = new Database();
}

// sa ubrizgavanjem zavisnosti
public class UserService {
    private Database db;
    public UserService(Database db) {
        this.db = db;
    }
}
```

