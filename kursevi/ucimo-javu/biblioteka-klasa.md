---
title: Java biblioteka klasa
layout: lekcija-java
permalink: /java-biblioteka-klasa
---

Java sadrži veliku biblioteku gotovih klasa koje možete koristiti u svojim programima. Klase su podijeljene u grupe koje nazivamo **paketi** (*packages*). Dokumentacija o njima nalazi se [ovde](https://docs.oracle.com/javase/7/docs/api/).

Na primjer, pogledamo li klasu [java.net.URL](https://docs.oracle.com/javase/7/docs/api/java/net/URL.html) iz [paketa java.net](https://docs.oracle.com/javase/7/docs/api/java/net/package-summary.html), doznat ćemo da je jedan od njenih konstruktora zadan ovako:

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

Izlaz:

```
% javac SplitURL.java
% java URLSplitter http://student.math.hr:80/~vedris/index.html#top
Protocol: http
Host: student.math.hr
Port: 80
File: /~vedris/index.html
Ref: top
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
