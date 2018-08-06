---
title: Exception metode
layout: lekcija-java
permalink: /exception-metode
---

Iznimke uglavnom služe kao signali. U pravilu nemaju mnogo vlastitih metoda i one se rijetko pozivaju izravno.

Evo nekoliko metoda klase `Exception`:

```
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
