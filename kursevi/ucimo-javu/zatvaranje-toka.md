---
title: Zatvaranje toka
layout: lekcija-java
permalink: /java-zatvaranje-toka
---

Kad ste završili s nekim tokom, trebali biste ga zatvoriti kako bi se otpustili resursi koji su s njim povezani. Jednom kad je tok zatvoren, svaki pokušaj čitanja iz njega izbacit će `IOException`.

Stream (u ovom slučaju ulazni) zatvarate pomoću metode `close()`:

```java
public void close() throws IOException
```

Ako se tok ne može zatvoriti, izbacit će se `IOException`.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
