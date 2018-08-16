---
title: "Metode klase <code>Exception</code>"
layout: lekcija-java
permalink: /exception-metode
---

Iznimke ili izuzeci (*exceptions*) uglavnom služe kao signali. U pravilu nemaju mnogo vlastitih metoda i rijetko se pozivaju izravno.

Evo nekoliko metoda klase `Exception`:

```java
public String getMessage()
public String getLocalizedMessage()
public String toString()
public void printStackTrace()
public void printStackTrace(PrintStream s)
public void printStackTrace(PrintWriter s)
public native Throwable fillInStackTrace()
```

Dvije koje se najčešće koriste su `toString()` i `printStackTrace()`. Obje su naslijeđene iz `java.lang.Throwable` kao što je slučaj s većinom metoda u klasama iznimki.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
