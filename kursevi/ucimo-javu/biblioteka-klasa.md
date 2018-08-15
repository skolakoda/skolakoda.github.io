---
title: Biblioteka Java klasa
layout: lekcija-java
permalink: /java-biblioteka-klasa
---

**Java sadrži veliku biblioteku gotovih klasa koje možete koristiti u svojim programima.** Biblioteka se sastoji od fajlova, pri čemu svaki fajl sadrži definiciju odgovarajuće klase. Klase su grupisane u pakete (*packages*), a svaki paket je smješten u posebnom folderu. Klasa iz paketa može pristupiti klasi iz istog paketa. Klase iz drugih paketa mogu, a ne moraju biti dostupne. Ime paketa bazirano je na putanji do foldera u kome su smještene klase tog paketa. Dokumentacija o paketima nalazi se [ovde](https://docs.oracle.com/javase/7/docs/api/).

Java jezik je sa hijerarhijskom strukturom klasa, sve one su podklase klase `Object`.

## Standardni paketi

Java raspolaže ogromnim brojem standardnih paketa, a najkorišćeniji su :

- **Java.lang**: osnovne opcije jezika, rad sa nizovima i strunama. Klase iz ovog paketa su uvijek dostupne – automatski se uključuju u naš program (klase Integer, String, Math....).
- **Java.io**: klase za ulazno izlazne operacije.
- **Java.util**: klase Vector, Stack, Scanner, klase za rad sa datumima, matricama i druge.
- **Java.swing**: jednostavne i fleksibilne komponente za pravljenje GUI-ja (tzv. *Swing* komponente).
- **Java.awt**: originalne GUI komponente i osnovna podrška za neke *swing* komponente.

Standardne klase se ne pojavljuju kao fajlovi i folderi na našem disku. One su
spakovane u jedan komprimovani fajl `rt.jar` koji se nalazi `jre/lib` folderu koji se
kreira prilikom instalacije JDK –a. Standardne klase koje naš izvršni fajl zahtijeva direktno se učitavaju iz `jre/lib`.

## Primjer: `java.net.URL`

Pogledamo li klasu [java.net.URL](https://docs.oracle.com/javase/7/docs/api/java/net/URL.html) iz [paketa java.net](https://docs.oracle.com/javase/7/docs/api/java/net/package-summary.html), doznat ćemo da je jedan od njenih konstruktora zadan ovako:

```
public URL(String spec)
    throws MalformedURLException
      Creates a URL object from the String representation.
      This constructor is equivalent to a call to the two-argument constructor with a null first argument.
      Parameters:
      spec - the String to parse as a URL.
      Throws:
      MalformedURLException - If the string specifies an unknown protocol.
      See Also:
      URL(java.net.URL, java.lang.String)
```

Također doznajemo da nam na raspolaganju stoje metode:

```
public String getProtocol()
    Returns the protocol name of this URL.
    Returns:
    the protocol of this URL.
```

```
public String getHost()
    Returns the host name of this URL, if applicable.
    Returns:
    the host name of this URL.
```

```
public int getPort()
    Returns the port number of this URL. Returns -1 if the port is not set.
    Returns:
    the port number
```

```
public String getFile()
    Returns the file name of this URL.
    Returns:
    the file name of this URL.
```

```
public String getRef()
    Returns the anchor (also known as the "reference") of this URL.
    Returns:
    the anchor (also known as the "reference") of this URL.
```

i tako dalje. To nam omogućuje da ovu klasu koristimo na isti način kao i naše vlastite klase u prethodnim primjerima. Npr.

```java
public class URLSplitter {

  public static void main(String[] args) {

    for (int i = 0; i < args.length; i++) {
      try {
        java.net.URL u = new java.net.URL(args[i]);
        System.out.println("Protocol: " + u.getProtocol());
        System.out.println("Host: " + u.getHost());
        System.out.println("Port: " + u.getPort());
        System.out.println("File: " + u.getFile());
        System.out.println("Ref: " + u.getRef());
      }
      catch (java.net.MalformedURLException e) {
        System.err.println(args[i] + " nije valjani URL");
      }
    }

  }

}
```

Upotreba iz konzole:

```
% javac URLSplitter.java
% java URLSplitter http://student.math.hr:80/~vedris/index.html#top
Protocol: http
Host: student.math.hr
Port: 80
File: /~vedris/index.html
Ref: top
```


## Izvori:
- Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
- *Programski jezik Java*, Bilješke sa predavanja Muzafera Saračevića, Novi Pazar, 2015.
