---
title: Pisanje u datoteku
layout: lekcija-java
permalink: /java-pisanje-u-datoteku
---

Klasa [`FileOutputStream`](https://docs.oracle.com/javase/7/docs/api/java/io/FileOutputStream.html) predstavlja izlazni tok koji upisuje bajtove u datoteku. Ima sljedeće javne konstruktore i metode:

```java
public FileOutputStream(String name) throws IOException
public FileOutputStream(String name, boolean append) throws IOException
public FileOutputStream(File file) throws IOException
public FileOutputStream(FileDescriptor fdObj)
public native void write(int b) throws IOException
public void write(byte[] data) throws IOException
public void write(byte[] data, int offset, int length) throws IOException
public native void close() throws IOException
public final FileDescriptor getFD() throws IOException
```

S iznimkom konstruktora te metode `getFD()`,ove metode samo prekrivaju istoimene metode klase `java.io.OutputStream`. Jedina je razlika što pišu podatke u datoteku.

## Instanciranje klase

Novi objekt tipa `FileOutputStream` konstruirate tako da konstruktoru proslijedite ime datoteke, na primjer:

```java
FileOutputStream fos = new FileOutputStream("izlaz.txt");
```

Ako datoteka postoji u aktivnom direktoriju, bit će prebrisana i u nju upisani novi podaci. Ako ne postoji, kreirat će se.

## Primjer pisanja u datoteku

U sljedećem primjeru čita se korisnikov input sa `System.in` i ispisuje se u datoteke specificirane na komandnoj liniji.

```java
import java.io.*;

public class MultiType {

  public static void main(String[] args) {

    FileOutputStream[] fos = new FileOutputStream[args.length];

    for (int i = 0; i < args.length; i++) {
      try {
        fos[i] = new FileOutputStream(args[i]);
      }
      catch (IOException e) {
        System.err.println(e);
      }
    } // end for

    try {
       while (true) {
        int n = System.in.available();
        if (n > 0) {
          byte[] b = new byte[n];
          int result = System.in.read(b);
          if (result == -1) break;
          for (int i = 0; i < args.length; i++) {
            try {
              fos[i].write(b, 0, result);
            }
            catch (IOException e) {
              System.err.println(e);
            }
          } // end for
        } // end if
      } // end while
    } // end try
    catch (IOException e) {
      System.err.println(e);
    }

    for (int i = 0; i < args.length; i++) {
      try {
        fos[i].close();
       }
       catch (IOException e) {
         System.err.println(e);
       }
    }

  } // end main

}
```

```
% javac MultiType.java
% java MultiType izlaz1.txt izlaz2.txt
nebo je plavo
<Ctrl-C>
%
% ls izlaz*.txt
izlaz1.txt
izlaz2.txt
% more izlaz1.txt
nebo je plavo
% more izlaz2.txt
nebo je plavo
```

## Dodavanje na kraj datoteke

Ako želite da se novi sadržaj doda na kraj datoteke umjesto da prebriše prethodni sadržaj, proslijedit ćete vrijednost `true` kao drugi argument konstruktoru `FileOutputStream()`. Na primjer:

```java
FileOutputStream fos = new FileOutputStream("izlaz.txt", true);
```

U sljedećem primjeru čita se korisnikov input sa `System.in` i dodaje na kraj datoteka specificiranih na komandnoj liniji.

```java
import java.io.*;

public class Append {

  public static void main(String[] args) {

    FileOutputStream[] fos = new FileOutputStream[args.length];

    for (int i = 0; i < args.length; i++) {
      try {
        fos[i] = new FileOutputStream(args[i], true);
      }
      catch (IOException e) {
        System.err.println(e);
      }
    } // end for

    try {
       while (true) {
        int n = System.in.available();
        if (n > 0) {
          byte[] b = new byte[n];
          int result = System.in.read(b);
          if (result == -1) break;
          for (int i = 0; i < args.length; i++) {
            try {
              fos[i].write(b, 0, result);
            }
            catch (IOException e) {
              System.err.println(e);
            }
          } // end for
        } // end if
      } // end while
    } // end try
    catch (IOException e) {
      System.err.println(e);
    }

    for (int i = 0; i < args.length; i++) {
      try {
        fos[i].close();
      }
      catch (IOException e) {
        System.err.println(e);
      }
    } // end for

  } // end main

}
```

```
% javac Append.java
% java Append izlaz1.txt izlaz2.txt
a trava je zelena.
<Ctrl-C>
% more izlaz1.txt
nebo je plavo
a trava je zelena.
% more izlaz2.txt
nebo je plavo
a trava je zelena.
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
