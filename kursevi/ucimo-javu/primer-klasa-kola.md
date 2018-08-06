---
title: "Primjer: klasa Kola"
layout: lekcija-java
permalink: /primer-klasa-kola
image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CPT-OOP-objects_and_classes.svg/800px-CPT-OOP-objects_and_classes.svg.png
---

![]({{page.image}})

**Pretpostavimo da želimo napisati program za simulaciju prometa. Na svakom vozilu možemo promatrati svojstva kao što su brzina, maksimalna brzina i registarska oznaka.**

## Modelovanje klase

U objektno-orijentisanim jezicima koristimo klasu da bismo podatke spakovali u jedinstveni entitet:

```java
class Kola {
  String tablica;     // npr. "New York 543 A23"
  double brzina;      // u kilometrima na sat
  double maxBrzina;   // u kilometrima na sat
}
```

Varijable `tablica`, `brzina` i `maxBrzina` zovemo varijablama članovima ili atributima.

## Kreiranje novih objekata

Da bismo kreirali objekat neke klase, odnosno instancirali klasu, koristimo ključnu riječ `new` iza koje slijedi poziv konstruktora klase. Riječ `new` je operator instanciranja. Pogledajmo kako bismo deklarirali i kreirali novu varijablu tipa `Kola` koju ćemo nazvati `k`:

```java
Kola k;
k = new Kola();
```

Prva riječ, `Kola`, određuje tip varijable. Klase su tipovi, dodjeljujemo ih varijablama na isti način kao `int`, `char`, `double` itd. Međutim, na kraju pozivamo metodu `Kola()`. Zagrade naznačuju da je to metoda, a ne tip kao u prvom retku. To je konstruktor, metoda koja kreira novu instancu klase. Ako svoju klasu ne snabdijete konstruktorima, kompajler će umetnuti konstruktor bez argumenata.

Deklaraciju tipa i kreiranje instance obično pišemo u jednoj naredbi, npr:

```java
Kola k = new Kola();
```

## Pristup članovima

Jednom kad ste kreirali novi objekt, potrebna vam je mogućnost pristupa njegovim članovima (varijablama i metodama). Za to ćete upotrijebiti separator pristupa, točku (`.`). Klasa `Kola` ima tri atributa:

- `tablica`
- `brzina`
- `maxBrzina`

Dakle, ako je `k` objekat tipa `Kola`, on također ima tri odgovarajuće varijable:

- `k.tablica`
- `k.brzina`
- `k.maxBrzina`

Koristite ih kao što biste koristili bilo koju drugu varijablu. Na primjer:

```java
Kola k = new Kola();

k.tablica = "DYD 666";
k.brzina = 70.0;
k.maxBrzina = 123.45;

System.out.println(k.tablica + " se krece brzinom od " + k.brzina + " kilometara na sat.");
```

Separator `.` selektuje pojedinog člana objekta (varijablu ili metodu) po imenu.

## Upotreba klase u drugoj klasi

Sljedeći program kreira novi primjerak automobila (klase `Kola`), dodjeljuje vrijednosti njegovim varijablama i ispisuje rezultat.

```java
class TestKola {
  public static void main(String args[]) {

    Kola k = new Kola();

    k.tablica = "DYD 666";
    k.brzina = 70.0;
    k.maxBrzina = 123.45;

    System.out.println(k.tablica + " se krece brzinom od " + k.brzina + " kilometara na sat.");    

  }
}
```

Ovaj program ne zahtijeva samo klasu `TestKola` nego i klasu `Kola`. Da biste ga mogli izvršiti, stavite klasu `Kola` u datoteku `Kola.java`, a klasu `TestKola` u datoteku `TestKola.java`. Obje datoteke neka budu u istom direktoriju. Kompilirajte program na uobičajen način:

```
% javac TestKola.java
% java TestKola
DYD 666 se krece brzinom od 70.0 kilometara na sat.
```

Primijetite da klasa `Kola` nema `main()` metodu, dakle ne možete je “izvršiti”. Ona postoji samo da je pozivaju drugi programi koji imaju `main()` metodu.

Mnoge aplikacije koje ćete pisati koristit će više klasa. Uobičajeno je da se svaka klasa stavi u zasebnu datoteku. Uskoro ćete naučiti koristiti i pakete kako biste mogli organizirati svoje često korištene klase unutar različitih direktorija. Za sada držite sve datoteke unutar jednog direktorija.

## Inicijalne vrednosti atributa

Atributi mogu, i obično trebaju, imati inicijalne vrednosti. Klasu `Kola` možemo preraditi da ima inicijalne vrednosti atributa. Sljedeći program kreira novi automobil i ispisuje inicijalne vrednosti:

{:.ulaz}
```java
class Kola {
  String tablica = "Neregistrovan";
  double brzina = 0.0;
  double maxBrzina = 120.0;
}

class TestKola {
  public static void main(String args[]) {

    Kola k = new Kola();
    System.out.println(k.tablica + " se krece brzinom od " + k.brzina + " kilometara na sat.");    

  }
}
```

Ukoliko pokrećete program iz komandne linije (možete odvojiti klase u zasebne fajlove), koraci su sledeći:

```
% javac TestKola.java
% java TestKola
Neregistrovan se krece brzinom od 0.0 kilometara na sat.
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
