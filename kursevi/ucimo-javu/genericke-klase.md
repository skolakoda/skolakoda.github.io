---
title: Generičke klase
layout: lekcija-java
permalink: /genericke-klase
---

Pomoću generičkih klasa opisujemo opšti slučaj bez upotrebe konkretnih tipova. Ovo nam omogućava kreiranje klasa i metoda koje se razlikuju u specifikaciji jednog ili više tipova, dok se ne deklarišu i instanciraju u okviru klijentskog koda.

## Primer

U sledećem primeru kreiramo klasu `MojGenerickiNiz` koja predstavlja generički niz. Ovaj niz može da sadrži elemente bilo kog tipa. U okviru klase dodajemo konstruktor i metode `getItem` i `setItem`. Metoda `main` će tokom izvršavanja kreirati dva niza pri čemu jedan sadrži celobrojne vrednosti, a drugi znakove.

Primer je dat u C# programskom jeziku:

```cs
public class MojGenerickiNiz<T> {
  T[] array;

  public MojGenerickiNiz(int size) {
    array = new T[size + 1];
  }

  public T getItem(int index) {
    return array[index];
  }

  public void SetItem(int index, T value) {
    array[index] = value;
  }
}

class Program {
  static void Main(string[] args) {
    MojGenerickiNiz<int> intArray = new MojGenerickiNiz<int>(5);
    for (int i = 0; i < 5; i++) {
      intArray.SetItem(i, i * 5);
    }
    for (int i = 0; i < 5; i++) {
      Console.Write(intArray.getItem(i) + " ");
    }

    Console.WriteLine();

    MojGenerickiNiz<char> charArray = new MojGenerickiNiz<char>(5);
    for (int i = 0; i < 5; i++) {
      charArray.SetItem(i, (char)(i + 97));
    }
    for (int i = 0; i < 5; i++) {
      Console.Write(charArray.getItem(i) + " ");
    }

    Console.ReadKey();
  }
}
```
