---
title: Princip inverzije zavisnosti
layout: lekcija-razvoj
permalink: /princip-inverzije-zavisnosti
image: /images/koncepti/oop/dependency-inverted.png
---

**Princip inverzije zavisnosti** (*dependency inversion principle*) služi za smanjenje zavisnosti viših klasa od nižih i njihovo labavo povezivanje. Osnovne ideje su:

- Više klase ne treba da zavise od nižih, već obe treba da zavise od apstrakcija.
- Apstrakcije ne treba da zavise od detalja implementacije, već obratno.

Tako, viša klasa koja se bavi poslovnom logikom ne treba direktno da zavisi od neke niže klase zadužene za tekuće zadatke, poput čitanja baze podataka, slanja pošte i slično. Umesto toga, obe klase treba da zavise od apstrakcije, koja im postaje posrednik.

![]({{page.image}})

## Primer u C#

U sledećem primeru, viša klasa `InvoiceService` zavisi direktno od konkretne klase `EmailService`:

```cs
public class EmailService
{
    public void SendEmail(string message)
    {
        Console.WriteLine("Sending email: " + message);
    }
}

public class InvoiceService
{
    private EmailService _emailService;

    public InvoiceService()
    {
        _emailService = new EmailService();  // zavisnost od konkretne klase
    }

    public void GenerateInvoice()
    {
        Console.WriteLine("Generating invoice...");
        _emailService.SendEmail("Invoice generated");
    }
}
```

Sada, ako želimo da promenimo način slanja e-mailova (na primer, da koristimo drugi email servis), moraćemo da modifikujemo `InvoiceService`, što krši principe dobrog dizajna.

### Rešenje

Sada ćemo preraditi kod da primenimo princip inverzije zavisnosti, koristeći injektovanje zavisnosti i apstrakciju (interfejs) kao vezu između dve klase.

```cs
// apstrakcija
public interface IEmailService
{
    void SendEmail(string message);
}

// konkretna implementacija
public class EmailService : IEmailService
{
    public void SendEmail(string message)
    {
        Console.WriteLine("Sending email: " + message);
    }
}

// viša klasa sada zavisi od apstrakcije, ne od konkretne implementacije
public class InvoiceService
{
    private IEmailService _emailService;

    // kroz konstruktor injektujemo zavisnost (dependency injection)
    public InvoiceService(IEmailService emailService)
    {
        _emailService = emailService;
    }

    public void GenerateInvoice()
    {
        Console.WriteLine("Generating invoice...");
        _emailService.SendEmail("Invoice generated");
    }
}
```

Sada, ako želimo koristiti drugi email servis (koji implementira isti interfejs), možemo ga jednostavno proslediti konstruktoru bez menjanja bilo čega u višoj klasi.


## Primer u JS-u

Primer tesne sprege klasa, bez primene inverzije zavisnosti:

```js
class Database {
  connect() {
    console.log('Connecting to the database...')
  }
}

class UserService {
  constructor() {
    this.db = new Database() // zavisi od konkretne klase
  }

  getUser() {
    this.db.connect()
    console.log('Fetching user...')
  }
}
```

Ovde `UserService` zavisi direktno od `Database` klase. Ako bismo želeli da promenimo bazu podataka, morali bismo da menjamo kod u `UserService` klasi.

### Rešenje

Primer labave sprege klasa putem injekcije zavisnosti:

```js
class MongoDB {
  connect() {
    console.log('Connecting to MongoDB...')
  }
}

class UserService {
  constructor(database) {
    this.db = database
  }

  getUser() {
    this.db.connect()
    console.log('Fetching user...')
  }
}


const userService = new UserService(new MongoDB()) // injekcija zavisnosti kroz konstruktor
userService.getUser()
```

Ovde `UserService` više ne zavisi direktno od `Database` klase. Umesto toga, database instanca je injektovana kroz konstruktor, što omogućava promenu baze podataka bez menjanja `UserService` klase.

