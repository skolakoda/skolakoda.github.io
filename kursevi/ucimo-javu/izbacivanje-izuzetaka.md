---
title: Izbacivanje izuzetaka (Throwing exceptions)
layout: lekcija-java
permalink: /izbacivanje-izuzetaka
---

Ako unutar neke metode ne želimo eksplicitno hvatati neku iznimku, možemo pomoću ključne riječi `throws` deklarirati da će je metoda, u slučaju da se pojavi, izbaciti. To prenosi odgovornost na metodu koja je promatranu metodu pozvala.

```java
public static void copy(InputStream in, OutputStream out) throws IOException {

  byte[] buffer = new byte[256];
  while (true) {
    int bytesRead = in.read(buffer);
    if (bytesRead == -1) break;
    out.write(buffer, 0, bytesRead);
  }

}
```

Pojedina metoda može izbaciti i više iznimki raznih tipova. U tom slučaju klase iznimaka se nabrajaju odvojene zarezima. Na primjer:

```
public BigDecimal divide(BigDecimal val, int roundingMode) throws ArithmeticException, IllegalArgumentException
```

Možete deklarirati da metoda izbacuje i *runtime exceptions*, ali ne morate. Glavna svrha toga je dokumentacija za programera. Pogledajmo primjer:

```java
public class Clock {

  int hours;   // 1-12
  int minutes; // 0-59
  int seconds; // 0-59

  public Clock(int hours, int minutes, int seconds) {

    if (hours < 1 || hours > 12) {
      throw new IllegalArgumentException("Sati moraju biti izmedju 1 i 12");
    }
    if (minutes < 0 || minutes > 59) {
      throw new IllegalArgumentException("Minute moraju biti izmedju 0 i 59");
    }
    if (seconds < 0 || seconds > 59) {
      throw new IllegalArgumentException("Sekunde moraju biti izmedju 0 i 59");
    }

    this.hours   = hours;
    this.minutes = minutes;
    this.seconds = seconds;

  }

  public Clock(int hours, int minutes) {
    this(hours, minutes, 0);
  }

  public Clock(int hours) {
    this(hours, 0, 0);
  }


}
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
