---
title: "Primer: klasa Porez"
layout: lekcija-java
permalink: /primer-klasa-porez
---

**Ovaj program izračunava vrednost poreza. Cilj je prikazivanje načina na koji Java klase komuniciraju, kako se pozivaju metodi i kako se mogu koristiti promenljive.**

Prvo je neophodno da se opredelite koje Java klase treba da kreirate za rešavanje problema. Zatim, razmislite o atributima (promenljivim u klasama) i metodima (ponašanju) koje ove klase treba da imaju.

## Deklarisanje Tax klase

Pošto planirate da izračunavate vrednost poreza, nije potrebno da budete naučnik da biste utvrdili da je potrebno da kreirate klasu Tax. Počnite nazivom klase i velikim zagradama – to je najjednostavnija klasa koju možete da kreirate:

```java
class Tax {

}
```

Šta je neophodno da bi ova klasa mogla da određuje vrednost poreza? Definitivno morate da znate koliki je prihod osobe kojoj određujete godišnji porez. Ukupan prihod je dobar kandidat za atribut klase. Izaberite jedan od numeričkih tipova podataka. Ukupan prihod nije uvek ceo broj, tako da možete da koristite `double` tip podataka, jer je reč o broju sa decimalama. Možete da koristite `float` umesto ovog tipa, ali korišćenje `double` tipa omogućava da budete spremni da određujete vrednost i za veće prihode.

```java
class Tax {
  double grossIncome;
}
```

Osim toga, neophodno je da znate u kom statusu je osoba; pravila oporezivanja su različita u različitim državama SAD. Sledi nekoliko skraćenica država u SAD: NY, NJ, CT. Upotrebite `String` za skladištenje tekstualnih podataka:

```java
class Tax {
  double grossIncome;
  String state;
}
```

Dodajte još jedan atribut za izdržavana lica, za osobu čiji porez računate. Celobrojni tip (`int`) biće odgovarajući – nije moguće da neko izdržava dva i po lica:

```java
class Tax {
  double grossIncome;
  String state;
  int dependents;
}
```

## Dodavanje metoda u Tax klasu

Promenljive skladište podatke, dok metodi izvršavaju akcije. Vreme je za akcije. Prvi metod
`calcTax()` određuje vrednost poreza na osnovu vrednosti ukupnog prohoda, broja izdržavanih lica i države:

```java
class Tax {
  double grossIncome;
  String state;
  int dependents;

  public double calcTax() {
    return 234.55;
  }
}
```

Specifikacija `calcTax()` metoda definiše sledeće:
- Bilo koja eksterna klasa može da pristupa ovom metodu (`public`).
- Ovaj metod vraća vrednost tipa `double`.
- Naziv metoda je `calcTax`.

Prazne zagrade nakon naziva metoda ukazuju da metod nema argumente, ili, drugim rečima, nije neophodna ni jedna vrednost izvan `Tax` klase da bi bila izvršena izračunavanja. Zapravo, ova verzija `calcTax()` metoda ne koristi čak ni vrednosti iz promenljivih klase za izračunavanje poreza. Uvek vraća vrednost 234,55, koja je uneta u sam kod.

### Vraćanje vrednosti

Kako da procenite da li metod treba da vrati vrednost? Ukoliko vaš metod izvršava određena izračunavanja i mora da vrati određenu vrednost u program iz koga se poziva, tada će imati povratnu vrednost. Ukoliko metod direktno modifikuje promenljive klase ili jednostavno negde prikazuje podatke (monitor, disk, server), ne mora da vraća nikakvu vrednost. Vi i dalje morate da deklarišete da "ne vraća vrednost“ u specifikaciji metoda, koristeći ključnu reč `void`:

```java
public void printAnnualTaxReturn() {
  //Određeni kod unosi se ovde
}
```

Koristeći `return` naredbu, metod može da vrati programu iz koga se poziva podatke koji se nalaze u promenljivoj - na primer:

```java
return calculatedTax;
```

Ako deklarišete povratni tip u specifikaciji metoda, ali zaboravite da ukucate `return` naredbu u telu metoda, Java kompajler prijavljuje grešku.

## Deklarisanje druge klase TestTax

`Tax` klasa omogućava određivanje načina na koji se računa porez, ali u realnim aplikacijama imaćete brojne klase koje predstavljaju različite tokove podataka u ovom procesu. Zavisno od tipa zaposlenja ili prihoda, računovođe koriste brojne druge različite forme za određivanje poreza.

Svaka od ovih klasa predstavlja određeni entitet, ali ni jedna nije izvršni program; to znači da ni jedna neće sadržati `main()` metod. Neophodno je da kreirate još jednu klasu za startovanje aplikacije i kreiranje instanci drugih klasa. Nju ćemo nazvati `TestTax`.

Klasa `TestTax` treba da ima mogućnost izvršavanja sledećih akcija:
- Kreiranje instance `Tax` klase
- Dodeljivanje podataka korisnika (ukupan prihod, država, izdržavana lica) promenljivim klase `Tax`.
- Izvršavanje metoda `calcTax()`
- Prikazivanje rezultata izvršavanja na ekranu Klasa `TestTax` je smeštena u posebnu datoteku pod nazivom `TestTax.java`.

```java
class TestTax {
  public static void main(String[] args){
    Tax t = new Tax(); // kreranje instance

    // dodeljivanje vrednosti članovima klase
    t.grossIncome= 50000;
    t.dependents= 2;
    t.state= "NJ";

    double yourTax = t.calcTax(); //određivanje poreza

    // Prikazivanje rezultata
    System.out.println("Your tax is " + yourTax);
  }
}
```

U prethodnom kodu deklarisali smo promenljivu `t` tipa `Tax`. Metod `main()` je početna tačka programa za izračunavanje poreza. Ovaj metod kreira instancu klase `Tax`, a promenljiva `t` ukazuje na mesto u memoriji vašeg računara gde je kreiran `Tax` objekat. Od tog trenutka, ukoliko želite da referencirate ovaj objekat, koristite promenljivu `t`.

Sledeće tri linije omogućavaju dodeljivanje vrednosti poljima `Tax` objekta:

```java
t.grossIncome= 50000;
t.dependents= 2;
t.state= "NJ";
```

Nakon toga, možete da izračunate porez za objekat `t` izvršavanjem metoda `calcTax()`, a rezultat izvršavanja ovog metoda biće dodeljen promenljivoj `yourTax`. Metod `calcTax()` i dalje vraća vrednost definisanu u kodu, ali to ćete promeniti sami. Poslednja linija služi za prikazivanje rezultata u sistemskoj konzoli.

U ovom trenutku imate dve klase koje međusobno komuniciraju - `TestTax` i `Tax`. Klasa `TextTax` kreira instancu `Tax` klase, inicijalizuje njene promenljive, a zatim izvršava njen metod `calcTax()`, koji vraća vrednost klasi `TextTax`.

## Probajte sami

Kreirajte pomoću *Eclipse* alata aplikaciju za određivanje poreza opisanu u ovoj lekciji, a zatim je modifikujte tako da zamenite vrednost unetu u kodu `calcTax()` metodom sa pravim izračunavanjima. Recimo, ukoliko je ukupan prihod manji od 30.000 dolara, državni porez je 5 odsto. Ukoliko je ukupan prihod veći od 30.000 dolara, za porez se izdvaja 6 odsto:

```java
public double calcTax() {
  double stateTax = 0;
  if (grossIncome < 30000) {
    stateTax = grossIncome * 0.05;
  }
  else {
    stateTax = grossIncome * 0.06;
  }
  return stateTax;
}
```

Startujte program nekoliko puta, modifikujući vrednosti promenljivih `Tax` klase. Proverite da li je u konzoli prikazana vrednost poreza ispravno određena.


Izvor: Yakov Fain, *Java 8 programiranje* (promo lekcija), Kompjuter biblioteka, Beograd, 2015.
