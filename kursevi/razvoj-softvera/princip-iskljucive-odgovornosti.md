---
title: Princip isključive odgovornosti
layout: lekcija-razvoj
permalink: /princip-iskljucive-odgovornosti
image: /images/koncepti/oop/SingleResponsibility.png
---

![]({{page.image}})

**Princip isključive odgovornosti** (*Single responsibility principle*) glasi da svaka komponenta treba da ima samo jednu odgovornost, odnosno jedan razlog za promenu.

To znači da je svaka komponenta odgovorna samo za obavljanje jednog određenog posla. Kada se javi potreba za njenom promenom, treba biti moguće izvršiti promenu bez uticaja na ostatak sistema.

Ako komponenta ima više odgovornosti teško ju je menjati i održavati. Poštovanjem principa jedne odgovornosti izbegava se problem monolitnih klasa, koje se bave svim i svačim. 

## Primer: razdvajanje odgovornosti

Kao primer možemo uzeti klasu `Book`, koja obuhvata koncept knjige i pridruženih funkcionalnosti:

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

Ova klasa se može učiniti kao sasvim ispravna. Imamo knjigu kojoj možemo da vidimo naslov i autora, te okrenemo sledeću stranicu. Poslednja metoda omogućava da se odštampa trenutna stranica. Međutim, ovde se može pojaviti problem. Mešanje logike sa prikazom je loša praksa. 

Zbog toga bi klasu trebalo razdvojiti:

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

U okviru ovog prostog primera možemo videti razdvajanje prezentacione od poslovne logike, što predstavlja SRP princip. Primenom ovog principa dobijamo veliku prednost u fleksibilnosti našeg softvera.


Izvor: Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
