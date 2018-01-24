---
title: Filtriranje tokova
layout: lekcija-java
permalink: /java-filtriranje-tokova
---

Klase [`FilterInputStream`](https://docs.oracle.com/javase/7/docs/api/java/io/FilterInputStream.html) i [`FilterOutputStream`](https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html) su podklase od `InputStream` i `OutputStream` koje na neki način modificiraju podatke osnovnih tokova. Rijetko ćete ih koristiti izravno, ali njihove su podklase iznimno važne, posebno `DataInputStream` i `DataOutputStream`.

## Instanciranje

Filter-tok povezujete s osnovnim tako da osnovni proslijedite konstruktoru filter-toka. Na primjer, da biste kreirali novi objekt tipa `DataOutputStream` iz objekta `FileOutputStream` mogli biste postupiti ovako:

```java
FileOutputStream fos = new FileOutputStream("ln.txt");
DataOutputStream dos = new DataOutputStream(fos);
```

To se može kombinirati i u jednoj liniji:
```java
DataOutputStream dos = new DataOutputStream(new FileOutputStream("ln.txt"));
```

## Filtrirani tokovi

```
BufferedInputStream i BufferedOutputStream
```

Ove klase čitaju i pišu tako da podatke najprije učitaju u taložnik (*buffer*). Podaci se učitavaju iz taložnika ili u njega upisuju u blokovima, a naknadni pristupi usmjeravaju se direktno prema taložniku.

```
DataInputStream i DataOutputStream
```

Ove klase čitaju i pišu podatke koji pripadaju primitivnim Java tipovima, kao i podatke tipa String na način koji ne ovisi o mašini (Big-endian za integer, IEEE-754 za float i double, UTF-8 za Unicode)

```
PrintStream
```

Ova ste klasu već susretali preko njenih implementacija `System.out` i `System.err`. Omogućuje vrlo jednostavno ispisivanje primitivnih vrijednosti, objekata i string literala. Klasa hvata sve iznimke tipa `IOException` i namijenjena je ponajprije za debugging.

```
PushbackInputStream
```

Ova klasa osigurava pushback taložnik pomoću kojeg je moguće "poništiti" čitanje bajtova sa toka. Kod sljedećeg čitanja sa toka bit će učitani ti “poništeni” bajtovi.

```
GZIPInputStream i GZIPOutputStream
```

Ovo su klase iz paketa `java.util.zip` i obavljaju kompresiju i dekompresiju podataka.

```
DigestInputStream i DigestOutputStream
```

Ovo su klase iz paketa `java.security` i izračunavaju tzv. `MessageDigest` za tokove koristeći neku jaku hash funkciju.

```
CipherInputStream i CipherOutputStream
```

Klase su iz paketa `javax.crypto` koji je dio Java Cryptography Extension (JCE), standardnog proširenja Jave, i računaju enkripcije i dekripcije tokova koristeći razne algoritme kao DES, RSA, Blowfish i druge.

```
ObjectInputStream i ObjectOutputStream
```

Podklase od of `DataInputStream` i `DataOutputStream` koje mogu serijalizirati i deserijalizirati Java objekte u čiste bajtove (i obratno). Koristi se kod udaljenog pozivanja metoda (RMI) i za JavaBeans.

Možete kreirati i svoje vlastite podklase od `java.io.FilterInputStream` i `java.io.FilterOutputStream` koje će izvoditi filtriranja prema vašim potrebama.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
