---
title: Program Zdravo svete
layout: lekcija-java
permalink: /zdravo-java
redirect_from:
  - /java-upoznavanje
---

Napravite fajl `ZdravoSvete.java`:

{:.ulaz}
```java
class ZdravoSvete {
  public static void main (String args[]) {
    System.out.println("Zdravo svete!");
  }
}
```

## Tumačenje

- `public` – znači da je metod globalno dostupan
- `static` – metod je dostupan i kada ne postoji instanca
- `void` – znači da funkcija ne vraća vrijednost
- `args` – predstavlja niz ulaznih argumenata

### `System.out`

`System` je ime standardne klase koja sadrži objekte za rad sa standardnim ulazno – izlaznim uređajima: tastatura za ulaz, monitor za izlaz. Sadržana je u paketu `java.lang`, pa je u programima koristimo prosto navođenjem samo njenog imena `System`. Objekat `out` predstavlja standarni izlazni tok i on je statički član klase `System`, što znači da postoji čak i kada ne postoji nijedna instanca klase `System`.

`System.out` znači da je `out` je član klase `System`.

### `println()`

`println` metod pripada objektu `out` i ispisuje tekst koji je zadat pod dvostrukim navodnicima. Standardan načina za pozivanje klasnog metoda je:

```java
ImeObjekta.imeMetoda();
```

### `main()`

Svaka Java aplikacija sadrži klasu koja definiše metod main().

Ime te klase je argument koji prosleđujemo Java interpretatoru. Main() metod mora imatei fiksnu formu i ukoliko ona nije ispoštovana neće biti prepoznata od strane Jave interpretatora kao metod od koga kreće izvršavanje.

Najjednostavnija Java aplikacija sastoji se samo od jedne klase koja ima samo jedan, main() metod.

Prototip main() metoda je uvijek oblika:

```java
public static void main(String[]args)
```

## Šta može poći naopako?

Ukoliko kompilacija ne prođe, česti uzroci mogu biti:

- PATH nije uključen ili nije ispravno uključen.
- Case-sensitive: imena klasa i fajla se moraju potpuno poklopiti, i u njima ne smiju postojati bjeline.
- `.` i `;` su jako bitni znaci i moraju biti na svojim mjestima.
- `()`, `{}`, `[]`, uvijek dolaze u paru i ne prepliću se.


Izvor: *Programski jezik Java*, Bilješke sa predavanja Muzafera Saračevića, Novi Pazar, 2015.
