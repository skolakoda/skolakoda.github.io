---
title: Šta je tok (<i>stream</i>)?
layout: lekcija-java
permalink: /java-stream
---

![](https://i.stack.imgur.com/5WrVE.png)

**Tok ili struja (*stream*) je niz podataka koji ima neodređenu dužinu. Naziv je odabran jer struktura nalikuje struji vode, koja neprekidno teče i nema definiranog kraja.**

U Javi se tok sastoji od niza diskretnih bajtova. Oni mogu predstavljati znakove ili neke druge vrste podataka. Mogu dolaziti brže nego što ih je moguće obraditi ili pak process može čekati dok ne dođe sljedeći za obradu. Ključ obrade toka je `while` petlja koja obrađuje svaki pojedini element toka dok ne učita znak za kraj toka ili dok se ne pojavi neki drugi uvjet.

Na Unixu je `<Ctrl-D>` znak za završetak toka. Windows za tu svrhu koristi `<Ctrl-Z>`.

## Klase tokova

Gotove sve klase koje izravno rade sa tokovima dijelovi su paketa `java.io`. Dvije glavne klase su `java.io.InputStream` i `java.io.OutputStream`. To su apstraktne klase i one čine temelj mnogih potklasa sa specijaliziranim mogućnostima. Među njima se najčešće koriste:

- `BufferedInputStream`
- `BufferedOutputStream`
- `ByteArrayInputStream`
- `ByteArrayOutputStream`
- `DataInputStream`
- `DataOutputStream`
- `FileInputStream`
- `FileOutputStream`
- `FilterInputStream`
- `FilterOutputStream`
- `LineNumberInputStream`
- `ObjectInputStream`
- `ObjectOutputStream`
- `PipedInputStream`
- `PipedOutputStream`
- `PrintStream`
- `PushbackInputStream`
- `SequenceInputStream`
- `StringBufferInputStream`

## Gde se tokovi koriste?

![](https://www.exclamationlabs.com/blog/content/images/2016/06/toptal-blog-image-1439305042670-c31198c149c1eb8c8d49d32bc8bc9a9e-2.jpg)

`System.out` je, recimo, izlazni tok (`OutputStream`, tačnije `PrintStream`). Postoji odgovarajući `System.in`, koji je ulazni tok (`InputStream`) namijenjen čitanju podataka s konzole. Podaci za tokove dolaze također iz fajlova. Za čitanje datoteka i pisanje u njih koristimo klase `File`, `FileInputStream` i `FileOutputStream`.

Mrežne konekcije obično daju tokove. Kad se povežemo na neki web, `ftp` ili drugi [poslužitelj](/server), čitamo podatke koje on šalje tako što s njim povežemo jedan `InputStream` i jedan `OutputStream`.

Java programi i sami proizvode tokove. Na primjer, `ByteArrayInputStream`, `ByteArrayOutputStream`, `StringBufferInputStream`, `PipedInputStream`, i `PipedOutputStream` se koriste za prijenos podataka iz jednog dijela programa u drugi.

## Klasa: Ulazni tok (`InputStream`)

Klasa `java.io.InputStream` je apstraktna klasa, koja sadrži osnovne metode za čitanje bajtova podataka iz toka. Iako je to apstraktna klasa, mnoge metode u biblioteci vraćaju objekt tipa `InputStream`, tako da često treba raditi direktno s nekom od metoda deklariranih u njoj.

```java
public abstract int read() throws IOException
public int read(byte[] data) throws IOException
public int read(byte[] data, int offset, int length) throws IOException
public long skip(long n) throws IOException
public int available() throws IOException
public void close() throws IOException
public synchronized void mark(int readlimit)
public synchronized void reset() throws IOException
public boolean markSupported()
```

Primijetite da gotovo sve ove metode mogu izbaciti `IOException`. To vrijedi za uglavnom sve što se odnosi na ulaz i izlaz. Jedina iznimka od tog pravila je klasa `PrintStream`, koja će progutati sve iznimke.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
