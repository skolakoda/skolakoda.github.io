---
title: "Taloženi tokovi (<i>buffered streams</i>)"
layout: lekcija-java
permalink: /java-buffered-stream
---

Klase [`BufferedInputStream`](https://docs.oracle.com/javase/7/docs/api/java/io/BufferedInputStream.html) i [`BufferedOutputStream`](https://docs.oracle.com/javase/7/docs/api/java/io/BufferedOutputStream.html) omogućuju čitanje i pisanje tako što se tokovi podataka prvo natalože u taložnik (*buffer*), koji je zapravo niz bajtova. Program tada čita podatke sve dok ih ima u taložniku. Podaci ulaze i izlaze iz taložnika u blokovima.

## Konstruktori

Sa stanovišta programera, jedina razlika između običnih i taloženih tokova je u konstruktorima:

```java
public BufferedInputStream(InputStream in)
public BufferedInputStream(InputStream in, int size)
public BufferedOutputStream(OutputStream out)
public BufferedOutputStream(OutputStream out, int size)
```

Parametar `size` je broj bajtova u taložniku. Ako nije naveden, podrazumijeva se 512.

## Veličina taložnika

Optimalna veličina taložnika jako ovisi o platformi i općenito je povezana sa veličinom bloka na disku, barem za datotečne tokove. Manje od 512 će vjerojatno biti premalo, a više od 4096 previše. Idealno bi bilo da veličina taložnika bude višekratnik veličine bloka diska. Za nepouzdane mrežne konekcije bolje je odabrati manju veličinu taložnika. Na primjer:

```java
URL u = new URL("http://java.developer.com");
BufferedInputStream bis = new BufferedInputStream(u.openStream(), 256);
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
