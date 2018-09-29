---
title: Prioriteti niti
layout: lekcija-java
permalink: /java-prioriteti-niti
---

**Nisu sve niti jednako važne. Niti koji komuniciraju s korisnikom trebaju imati visok prioritet. S druge strane, nitima koje obavljaju računanja u pozadini treba dodijeliti nizak prioritet.**

Prioritet niti zadaje se brojem između 1 i 10. Deset je najviši prioritet, jedan je najniži (suprotno UNIX-u, gdje veći broj označava manji prioritet). Normalni prioritet je pet. Niti s višim prioritetom dobit će više CPU vremena. Zbog udobnosti, klasa `Thread` definira tri konstante, `Thread.MAX_PRIORITY`, `Thread.MIN_PRIORITY` i `Thread.NORM_PRIORITY` koje možete koristiti umjesto numeričkih vrijednosti.

Prioritet threada zadajete pomoću metode setPriority():

```java
setPriority(int newPriority)
```

Sljedeći program dodjeljuje nitima `stampac1`, `stampac2` i `stampac3` različite prioritete. Iako je `stampac3` pokrenut zadnji, vjerojatno će biti gotov prvi, budući da mu je dodijeljen najviši prioritet.

{:.ulaz}
```java
class ImenovanStampac extends Thread {

  public ImenovanStampac(String name) {
    super(name);
  }

  public void run() {
    System.out.println(this.getName() + ": pocinjem!");
    for (int b = -10; b < 10; b++) {
      System.out.println(this.getName() + ": " + b);
    }
    System.out.println(this.getName() + ": gotovo!");
  }

}


public class ProbaPrioriteta {

  public static void main(String args[]) {

    ImenovanStampac stampac1 = new ImenovanStampac("Frank");
    ImenovanStampac stampac2 = new ImenovanStampac("Mary");
    ImenovanStampac stampac3 = new ImenovanStampac("Chris");
    stampac1.setPriority(Thread.MIN_PRIORITY);
    stampac2.setPriority(Thread.NORM_PRIORITY);
    stampac3.setPriority(Thread.MAX_PRIORITY);
    stampac1.start();
    stampac2.start();
    stampac3.start();

  }

}
```

Pokretanje iz konzole:

```
% javac ProbaPrioriteta.java
% java ProbaPrioriteta
Chris: pocinjem!
Chris: -10
. . .
Chris: 9
Chris: gotovo!
Mary: pocinjem!
Mary: -10
. . .
Mary: 9
Mary: gotovo!
Frank: pocinjem!
Frank: -10
. . .
Frank: 9
Frank: gotovo!
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
