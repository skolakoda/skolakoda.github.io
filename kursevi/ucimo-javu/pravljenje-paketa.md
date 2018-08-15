---
title: Pravljenje paketa u Javi
layout: lekcija-java
permalink: /java-pravljenje-paketa
---

**Java vas ne ograničava na korištenje samo sistemskih paketa, već vam dozvoljava i pisanje vlastitih.**

Dodavanje klase u paket je jednostavno, samo je potrebno dodati `package` deklaraciju u prvu liniju fajla:

```
package <ime_paketa>;
```

Sve klase koje hoćemo da uključimo u paket moraju sadržati istu `package` deklaraciju na početku, i svi fajlovi koji sadrže definicije klasa moraju se čuvati u direktoriju koji ima isto ime kao paket.

Ako želimo da klasa bude dostupna izvan paketa, potrebno je deklarisati klasu koristeći ključnu riječ `public`. Ukoliko ispred definicije klase ne stoji `public`, klasa je dostupna samo unutar istog paketa.

## Pravila pisanja paketa

Paketi se pišu jednako kao i bilo koji Java program, no pri tome se treba držati sljedećih pravila:

- Ne smije biti više od jedne `public` klase po fajlu.
- Svi fajlovi u paketu moraju se zvati `ImeKlase.java`, gdje je imeKlase ime javne klase u fajlu.
- Na početku svakog fajla u paketu mora ići naredba `package ime.paketa;`

## Pravila imenovanja

Javina konvencija imenovanja jemči jedinstvena imena paketa na svetskom nivou, tako što od autora zahteva da koriste ime domena koji poseduju u imenovanju paketa. Dakle, ako vlasnik domena `skolakoda.org` kreira neki paket, on će imati prefiks `org.skolakoda`. Na primer:

```
org.skolakoda.graphic
```

## Putanja klase (`CLASSPATH`)

Paketi su usko povezani sa strukutrom direktorija. Direktorijum mora imati isto ime kao i paket. Ime paketa može biti složeno, npr: `graphic.shapes`, što znači da je `shapes` poddirektorij direktorija `graphic`. Ime može biti proizvoljne složenosti, ali treba da održava strukturu direktorija u koju je paket smješten.

Putanja do direktorijuma paketa mora biti eksplicitno naznačena kompajleru, pomoću vrijednosti koja se postavlja za varijablu okruženja `CLASSPATH`. Najjednostavniji način za postavljanje `CLASSPATH`-a je navođenjem opcije `–classpath` pri pozivu kompajlera.

Da biste svoj paket koristili u drugim programima, kompilirajte `.java` fajlove, i premjestite dobivene `.class` fajlove u odgovarajući poddirektorij direktorija koji je naveden u `CLASSPATH`. Na primjer, ako je u `CLASSPATH` naveden direktorij `/math/vedris/java/classes/`, a puno ime paketa je `hr.math.student.vedris.package1`, onda bismo kompilirane datoteke stavili u direktorij `/math/vedris/java/classes/hr/math/student/vedris/package1/`.

```java
package hr.math.student.vedris.package1;

import java.net.*;

public class URLSplitter {

  public static void main(String[] args) {

    for (int i = 0; i < args.length; i++) {
      try {
        URL u = new URL(args[i]);
        System.out.println("Protocol: " + u.getProtocol());
        System.out.println("Host: " + u.getHost());
        System.out.println("Port: " + u.getPort());
        System.out.println("File: " + u.getFile());
        System.out.println("Ref: " + u.getRef());
      }
      catch (MalformedURLException e) {
        System.err.println(args[i] + " is not a valid URL");
      }
    }

  }

}
```

```
% javac -d /math/vedris/java/classes URLSplitter.java
```

Opcija `–d` kaže kompajleru da kreira potrebne poddirektorije direktorija `/math/vedris/java/classes/`. U ovom primjeru, datoteka `URLSplitter.class` bila bi smještena u direktorij `/math/vedris/java/classes/hr/math/student/vedris/package1/`.


### Izvori

- Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
- *Programski jezik Java*, Bilješke sa predavanja Muzafera Saračevića, Novi Pazar, 2015.
