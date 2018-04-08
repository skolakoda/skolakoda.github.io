---
title: Princip isključive odgovornosti
layout: lekcija-razvoj
permalink: /princip-iskljucive-odgovornosti
---

**Princip isključive odgovornosti** (*Single responsibility principle*) je u bliskoj vezi sa razdvajanjem briga. On govori da svaki objekat treba da ima jedan fokus. Pridržavanjem ovog principa, izbegava se problem monolitnih klasa, što predstavlja softverski ekvivalent za švajcarski nož. Ako su objekti koncizni, povećava se čitljivost i omogućava lakše održavanje sistema.

## Primer

Kao primer možemo posmatrati klasu `Book`, koja obuhvata koncept knjige i pridruženih funkcionalnosti:

```cs
class Book {
  public string getTitle() {
    return "A Great Book";
  }

  public string getAuthor() {
    return "John Doe";
  }

  public string turnPage() {
    // pointer to next page
  }

  public void printCurrentPage() {
    Console.WriteLine("current page content");
  }
}
```

Ova klasa se može učiniti kao sasvim ispravna. Imamo knjigu za koju možemo da odredimo naslov, autora i možemo da pređemo na sledeću stranicu. Poslednja metoda omogućava da se odštampa trenutna stranica i da se prikaže na ekranu. Međutim, ovde se može pojaviti problem. Mešanje logike sa prikazom je loša praksa. Zbog toga bi kod trebalo izmeniti:

```cs
class Book {
  public string getTitle() {
    return "A Great Book";
  }

  public string getAuthor() {
    return "John Doe";
  }

  public string turnPage() {
    // pointer to next page
  }
}

interface Printer {
  void printPage(string page);
}

class PlainTextPrinter: Printer {
  public void printPage(string page) {
    Console.WriteLine("current page content: " + page);
  }
}

class HtmlPrinter: Printer {
  public void printPage(string page) {
    Console.WriteLine("<div style='single-page'>" + page + "</div>");
  }
}
```

U okviru ovog jednostavnog primera, može se videti razdvajanje prezentacione logike od poslovne logike, šro predstavlja SRP princip. Primenom ovog principa dobijamo veliku prednost u fleksibilnosti našeg softvera.


Izvor: Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
