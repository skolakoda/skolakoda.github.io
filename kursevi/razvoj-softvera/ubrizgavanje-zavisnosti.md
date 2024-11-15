---
title: Ubrizgavanje zavisnosti
layout: lekcija-razvoj
permalink: /ubrizgavanje-zavisnosti
image: /images/koncepti/oop/Dependency-Injection.gif
---

![]({{page.image}})

**Ubrizgavanje zavisnosti** (*dependency injection*, skraćeno DI) je softverski obrazac gde se jednoj klasi objekti od kojih zavisi prosleđuju izvana, umesto da ih ona sama kreira. 

Objekti se obično prosleđuju putem konstruktora, metoda ili polja. Ovo ukida tesnu vezanost komponenti i olakšava održavanje i testiranje (npr. prosleđivanjem *mock* objekata). Injekcija zavisnosti predstavlja praktičnu primenu [principa inverzije zavisnosti](/princip-inverzije-zavisnosti), tako što klase višeg nivoa više ne zavise direktno od klasa nižeg nivoa već od apstrakcija. U širem smislu oba potpadaju pod princip [inverzije kontrole](/inverzija-kontrole).

Injekcija zavisnosti poštuje [načelo isključive odgovornosti](/princip-iskljucive-odgovornosti). Ako imamo komponentu koja nešto radi, čim je takođe odgovorna za stvaranje svojih ovisnosti, ona radi više stvari. 

## Prednosti

Neke od prednosti ubrizgavanje zavisnosti su:
- Smanjenje tesne vezanosti
- Lakša proverljivost: možemo primeniti *mock* objekte prilikom testiranja.
- Lakše održavanje: možemo uneti promene u ovisnost bez potrebe da menjamo glavnu klasu.

## Primer u C#

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

## Primer u JS-u

```js
// bez ubrizgavanja zavisnosti
class UserService {
    constructor() {
        this.db = new Database()
    }
}

// sa ubrizgavanjem zavisnosti
class UserService {
    constructor(db) {
        this.db = db
    }
}

// upotreba
const db = new Database() // kreiramo zavisnost spolja
const userService = new UserService(db) // prosleđujemo je klasi
```

