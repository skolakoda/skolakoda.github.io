---
title: Čitanje iz datoteke
layout: lekcija-java
permalink: /java-citanje-iz-datoteke
---

Klasa [`FileInputStream`](https://docs.oracle.com/javase/7/docs/api/java/io/FileInputStream.html) predstavlja ulazni tok koji čita bajtove iz datoteke. Ima sljedeće javne konstruktore i metode:

```java
public FileInputStream(String name) throws FileNotFoundException
public FileInputStream(File file) throws FileNotFoundException
public FileInputStream(FileDescriptor fdObj)
public native int read() throws IOException
public int read(byte[] data) throws IOException
public int read(byte[] data, int offset, int length) throws IOException
public native long skip(long n) throws IOException
public native int available() throws IOException
public native void close() throws IOException
public final FileDescriptor getFD() throws IOException
```

S iznimkom konstruktora i metode `getFD()`, ove metode samo prekrivaju istoimene metode klase `java.io.InputStream`. Jedina je razlika što čitaju podatke iz datoteke.

## Instanciranje klase

Novi objekt tipa `FileInputStream` pravite tako da konstruktoru proslijedite ime datoteke, na primjer:

```java
FileInputStream fis = new FileInputStream("ulaz.txt");
```

Ako fajl ne postoji, izbacit će se iznimka `FileNotFoundException`. Općenito, Java će tražiti datoteke u aktivnom direktoriju, no one se ne moraju nužno nalaziti u istom u kom se nalazi `.class` datoteka.

## Primjer čitanja iz datoteke

Sljedeća aplikacija čita datoteke koje su navedene na komandnoj liniji i ispisuje njihov sadržaj na System.out.

```java
import java.io.*;

public class Type {

  public static void main(String[] args) {

    for (int i = 0; i < args.length; i++) {
      try {
        FileInputStream fis = new FileInputStream(args[i]);
        int n;
        while ((n = fis.available()) > 0) {
          byte[] b = new byte[n];
          int result = fis.read(b);
          if (result == -1) break;
          String s = new String(b);
          System.out.print(s);
        } // end while
        fis.close();
      } // end try
      catch (FileNotFoundException e) {
        System.err.println("Could not find file " + args[i]);
      }
      catch (IOException e) {
        System.err.println(e);
      }
      System.out.println();
    } // end for

  } // end main

}
```

```
% javac Type.java
% java Type "../html/TricksterApplet.html"
<APPLET CODE="TricksterApplet.class"
CODEBASE="http://student.math.hr/~vedris/java/classes"
ARCHIVE="Trickster.jar"
WIDTH=1 HEIGHT=1>
</APPLET>
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
