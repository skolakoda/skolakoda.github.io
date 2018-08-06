---
title: "Primer: klasa Porez"
layout: lekcija-java
permalink: /primer-klasa-porez
---

**Ovaj program izračunava vrednost poreza. Cilj je prikazivanje načina na koji Java klase komuniciraju, kako se pozivaju metodi i kako se mogu koristiti promenljive.**

Prvo je neophodno da se opredelimo koje Java klase treba da kreiramo za rešavanje problema. Zatim, razmislimo o atributima i metodima koje ove klase treba da imaju.

## Deklarisanje klase

Pošto planirate da izračunavate vrednost poreza, nije potrebno da budete naučnik da biste utvrdili da je potrebno da kreirate klasu Porez. Počnite nazivom klase i velikim zagradama – to je najjednostavnija klasa koju možete da kreirate:

```java
class Porez {

}
```

Šta je neophodno da bi ova klasa mogla da određuje vrednost poreza? Definitivno morate znati koliki je prihod osobe kojoj određujete godišnji porez. Ukupan prihod je dobar kandidat za atribut klase. Izaberite jedan od numeričkih tipova podataka. Ukupan prihod nije uvek ceo broj, tako da možete da koristite `double` tip podataka, jer je reč o broju sa decimalama. Možete da koristite i `float`, ali `double` omogućava da budete spremni i za veće prihode.

```java
class Porez {
  double ukupanPrihod;
}
```

Osim toga, neophodno je da znate u kojoj državi je osoba; pravila oporezivanja su različita u različitim državama. Sledi nekoliko skraćenica država u SAD: NY, NJ, CT. Upotrebite tip `String` za čuvanje tekstualnih podataka:

```java
class Porez {
  double ukupanPrihod;
  String drzava;
}
```

Dodajte još jedan atribut za izdržavana lica, za osobu čiji porez računate. Celobrojni tip (`int`) biće odgovarajući – nije moguće da neko izdržava dva i po lica:

```java
class Porez {
  double ukupanPrihod;
  String drzava;
  int izdrzavanaLica;
}
```

## Dodavanje metoda

Promenljive skladište podatke, dok metodi izvršavaju akcije. Vreme je za akcije. Prvi metod `racunajPorez()` određuje vrednost poreza na osnovu vrednosti ukupnog prihoda, broja izdržavanih lica i države:

```java
class Porez {
  double ukupanPrihod;
  String drzava;
  int izdrzavanaLica;

  public double racunajPorez() {
    return 234.55;
  }
}
```

Specifikacija metoda `racunajPorez()` definiše sledeće:
- Bilo koja eksterna klasa može da pristupa ovom metodu (`public`).
- Ovaj metod vraća vrednost tipa `double`.
- Naziv metoda je `racunajPorez`.

Prazne zagrade nakon naziva metoda ukazuju da metod nema argumente, ili, drugim rečima, nije neophodna ni jedna vrednost izvan `Porez` klase da bi bila izvršena izračunavanja. Zapravo, ova verzija `racunajPorez()` metoda ne koristi čak ni vrednosti iz promenljivih klase za izračunavanje poreza. Uvek vraća vrednost 234,55, koja je uneta u sam kod.

### Vraćanje vrednosti

Kako da procenite da li metod treba da vrati vrednost? Ukoliko vaš metod izvršava određena izračunavanja i mora da vrati određenu vrednost u program iz koga se poziva, tada će imati povratnu vrednost. Ukoliko metod direktno modifikuje promenljive klase ili jednostavno negde prikazuje podatke (monitor, disk, server), ne mora da vraća nikakvu vrednost. Vi i dalje morate da deklarišete da "ne vraća vrednost“ u specifikaciji metoda, koristeći ključnu reč `void`:

```java
public void printAnnualTaxReturn() {
  //Određeni kod unosi se ovde
}
```

Koristeći naredbu `return`, metod može da vrati programu iz koga se poziva podatke koji se nalaze u promenljivoj - na primer:

```java
return calculatedTax;
```

Ako deklarišete povratni tip u specifikaciji metoda, ali zaboravite da ukucate `return` naredbu u telu metoda, Java kompajler prijavljuje grešku.

## Deklarisanje glavne klase

`Porez` klasa omogućava određivanje načina na koji se računa porez, ali u realnim aplikacijama imaćete brojne klase koje predstavljaju različite tokove podataka u ovom procesu. Zavisno od tipa zaposlenja ili prihoda, računovođe koriste brojne druge različite forme za određivanje poreza.

Svaka od ovih klasa predstavlja određeni entitet, ali ni jedna nije izvršni program; to znači da ni jedna neće sadržati `main()` metod. Neophodno je da kreirate još jednu klasu za startovanje aplikacije i kreiranje instanci drugih klasa. Nju ćemo nazvati `TestPorez`.

Klasa `TestPorez` treba da ima mogućnost izvršavanja sledećih akcija:
- Kreiranje instance `Porez` klase
- Dodeljivanje podataka korisnika (ukupan prihod, država, izdržavana lica) promenljivim klase `Porez`.
- Izvršavanje metoda `racunajPorez()`
- Prikazivanje rezultata izvršavanja na ekranu Klasa `TestPorez` je smeštena u posebnu datoteku pod nazivom `TestPorez.java`.

```java
class TestPorez {
  public static void main(String[] args){
    Porez p = new Porez(); // kreranje instance

    // dodeljivanje vrednosti članovima klase
    p.ukupanPrihod= 50000;
    p.izdrzavanaLica= 2;
    p.drzava= "NJ";

    double vasPorez = p.racunajPorez(); //određivanje poreza

    // Prikazivanje rezultata
    System.out.println("Vas porez je " + vasPorez);
  }
}
```

U prethodnom kodu deklarisali smo promenljivu `p` tipa `Porez`. Metod `main()` je početna tačka programa za izračunavanje poreza. Ovaj metod kreira instancu klase `Porez`, a promenljiva `p` ukazuje na mesto u memoriji vašeg računara gde je kreiran `Porez` objekat. Od tog trenutka, ukoliko želite da referencirate ovaj objekat, koristite promenljivu `p`.

Sledeće tri linije omogućavaju dodeljivanje vrednosti poljima `Porez` objekta:

```java
p.ukupanPrihod= 50000;
p.izdrzavanaLica= 2;
p.drzava= "NJ";
```

Nakon toga, možete da izračunate porez za objekat `p` izvršavanjem metoda `racunajPorez()`, a rezultat izvršavanja ovog metoda biće dodeljen promenljivoj `vasPorez`. Metod `racunajPorez()` i dalje vraća vrednost definisanu u kodu, ali to ćete promeniti sami. Poslednja linija služi za prikazivanje rezultata u sistemskoj konzoli.

U ovom trenutku imate dve klase koje međusobno komuniciraju - `TestPorez` i `Porez`. Klasa `TestPorez` kreira instancu `Porez` klase, inicijalizuje njene promenljive, a zatim izvršava njen metod `racunajPorez()`, koji vraća vrednost klasi `TestPorez`.

## Probajte sami

Kreirajte pomoću *Eclipse* alata aplikaciju za određivanje poreza opisanu u ovoj lekciji, a zatim je modifikujte tako da zamenite vrednost unetu u kodu `racunajPorez()` metodom sa pravim izračunavanjima. Recimo, ukoliko je ukupan prihod manji od 30.000 dolara, državni porez je 5 odsto. Ukoliko je ukupan prihod veći od 30.000 dolara, za porez se izdvaja 6 odsto:

```java
public double racunajPorez() {
  double stateTax = 0;
  if (ukupanPrihod < 30000) {
    stateTax = ukupanPrihod * 0.05;
  }
  else {
    stateTax = ukupanPrihod * 0.06;
  }
  return stateTax;
}
```

Startujte program nekoliko puta, modifikujući vrednosti promenljivih `Porez` klase. Proverite da li je u konzoli prikazana vrednost poreza ispravno određena.


Izvor: Yakov Fain, *Java 8 programiranje* (promo lekcija), Kompjuter biblioteka, Beograd, 2015.
