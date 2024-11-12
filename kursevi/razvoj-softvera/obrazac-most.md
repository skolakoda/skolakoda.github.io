---
title: Most (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-most
image: /images/koncepti/oop/Bridge-Design-Pattern.png
---

![]({{page.image}})

**Most (*bridge pattern*) je projektni obrazac koji služi da skup tesno povezanih klasa podelimo u dve odvojene hijerarhije, apstrakciju i implementaciju, a potom ih premostimo.**

Most razdvaja dve dimenzije u dve odvojene hijerarhije, umesto da drži sve kombinacije u zasebnim klasama. Potom premošćava problem tako što umesto nasleđivanja koristi kompoziciju objekata. Možemo sprečiti eksponencijalni rast hijerarhije klasa transformišući ih u nekoliko povezanih hijerarhija. 

Apstrakcija podrazumeva visok nivo interfejsa koji ne sadrži poslovnu logiku ili bilo kakve detalje o implementaciji. Implementacija je odgovorna za poslove nižeg nivoa. Apstrakcija sadrži referencu na objekat implementacije, tako da apstrakcija kontroliše metode objekta implementacije. 

## Primer upotrebe

Jedan bankarski sistem ima banke (`HdfcBank` i `IciciBank`), a svaka omogućava klijentima otvaranje tekućih (`CurrentAccount`) i štednih računa (`SavingAccount`). Kreirati aplikaciju koja će prikazati u kojoj banci je klijent otvorio koji tip računa. Bez primene obrasca mosta, verovatno bismo dobili sledeću hijerarhiju:

![](/images/koncepti/oop/most-primer-1.png)

Postavljanjem mosta između banke i računa, ukidamo jedan nivo hijerarhije:

![](/images/koncepti/oop/most-primer-2.png)

Opis rešenja:
- **Implementacija**: Kreiramo interfejs `Bank` i implementiramo ga za svaku banku (`HdfcBank` i `IciciBank`).
- **Apstrakcija**: Definišemo apstraktnu klasu `Account`, koja će imati referencu na implementaciju `Bank`.
- **Konkretna apstrakcija**: Kreiramo konkretne klase računa koje proširuju `Account` (npr. `CurrentAccount` i `SavingAccount`), omogućavajući da svaki tip računa može biti povezan s bilo kojom bankom.

## Primer u Javaskriptu

Primer mosta u Javaskriptu:

{:.ulaz}
```js
// interfejs
class Bank {
  openAccount() {}
}

class HdfcBank extends Bank {
  openAccount() { return 'otvoren račun u HDFC banci' }
}

class IciciBank extends Bank {
  openAccount() { return 'otvoren račun u ICICI banci' }
}

// apstrakcija
class Account {
  constructor(bank) { this.bank = bank }
  openAccount() {}
}

// konkretne apstrakcije
class CurrentAccount extends Account {
  openAccount() { return `Tekući račun ${this.bank.openAccount()}` }
}

class SavingAccount extends Account {
  openAccount() { return `Štedni račun ${this.bank.openAccount()}` }
}

// upotreba
const hdfcCurrentAccount = new CurrentAccount(new HdfcBank())
console.log(hdfcCurrentAccount.openAccount())

const iciciSavingAccount = new SavingAccount(new IciciBank())
console.log(iciciSavingAccount.openAccount())
```

## Primer u Javi

Primer mosta u Javi:

```java
public interface Account {
    public void openAccount();
    public void accountType();
}

public class CurrentAccount implements Account {
    public void openAccount() {
        System.out.println("OPENED: CURRENT ACCOUNT");
    }
    public void accountType() {
        System.out.println("It is a CURRENT Account");
    }
}

public class SavingAccount implements Account {
    public void openAccount() {
        System.out.println("OPENED: SAVING ACCOUNT");
    }
    public void accountType() {
        System.out.println("It is a SAVING Account");
    }
}

public abstract class Bank {
    // implementor je protected
    protected Account implementor;

    public Account getImplementor() {
        return implementor;
    }

    public void setImplementor(Account implementor) {
        this.implementor = implementor;
    }

    // Apstraktna klasa
    abstract Account openBankAccount();

    // Konstruktor
    public Bank(Account implementor) {
        super();
        this.implementor = implementor;
    }
}

public class HdfBank extends Bank {
    public HdfBank(Account implementor) {
        super(implementor);
    }

    @Override
    Account openBankAccount() {
        System.out.println("Open your account with HDFC Bank.");
        return implementor;
    }
}

public class IciciBank extends Bank {
    public IciciBank(Account implementor) {
        super(implementor);
    }

    @Override
    Account openBankAccount() {
        System.out.println("Open your account with ICICI Bank.");
        return implementor;
    }
}

public class BridgePatternMain {
    public static void main(String[] args) {
        Bank icici = new IciciBank(new CurrentAccount());
        Account current = icici.openBankAccount();
        current.openAccount();
        current.accountType();

        Bank hdfc = new HdfBank(new SavingAccount());
        Account saving = hdfc.openBankAccount();
        saving.openAccount();
        saving.accountType();
    }
}
```

## Literatura
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.