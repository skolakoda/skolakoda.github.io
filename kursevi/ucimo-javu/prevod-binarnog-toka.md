---
title: Prevod binarnog toka
layout: lekcija-java
permalink: /java-prevod-binarnog-toka
---

## Klasa `InputStreamReader`

Klasa [`InputStreamReader`](https://docs.oracle.com/javase/7/docs/api/java/io/InputStreamReader.html) (Čitač ulaznog toka) služi kao most između tokova bajtova i tokova znakova. Čita bajtove s ulaznog toka i prevodi ih u znakove, u skladu sa zadanim znakovnim sustavom. Znakovni sustav (*encoding*) može se zadati u konstruktoru ili prihvatiti podrazumevani s računala.

```java
public InputStreamReader(InputStream in)
public InputStreamReader(InputStream in, String encoding) throws UnsupportedEncodingException
```

Na primjer, da biste priključili `InputStreamReader` na `System.in` sa pretpostavljenim znakovnim sustavom, stavili biste:

```java
InputStreamReader isr = new InputStreamReader(System.in);
```

S druge strane, ako želite čitati datoteku koja je bila napisana u fontu Macintosh Symbol, možete to učiniti ovako:

```java
FileInputStream fis = new FileInputStream("symbol.txt");
InputStreamReader isr = new InputStreamReader(fis, "MacSymbol");
```

Metoda `getEncoding()` vraća strunu koji sadrži ime znakovnog sustava koji se trenutno koristi:

```java
public String getEncoding()
```

Ostale metode prekrivaju metode iz `java.io.Reader`, ali se, iz programerove perspektive, ponašaju na isti način kao i one.

```java
public int read() throws IOException
public int read(char c[], int off, int length) throws IOException
public boolean ready() throws IOException
public void close() throws IOException
```

## Klasa `OutputStreamWriter`

Klasa [`OutputStreamWriter`](https://docs.oracle.com/javase/7/docs/api/java/io/OutputStreamWriter.html) (Pisač izlaznog toka) povezuje izlazne tokove bajtova i tokove znakova. Ispisuje bajtove na pripadni izlazni tok nakon prevođenja znakova u skladu sa zadanim znakovnim sustavom.

Znakovni sustav može se zadati u konstruktoru ili prihvatiti podrazumevani sustav sa platforme:

```java
public OutputStreamWriter(OutputStream out, String enc) throws UnsupportedEncodingException
public OutputStreamWriter(OutputStream out)
```

Na primjer, da biste priključili `OutputStreamWriter` na `System.out` sa pretpostavljenim znakovnim sustavom, stavili biste:

```java
OutputStreamWriter osw = new OutputStreamWriter(System.out);
```

S druge strane, ako želite pisati u datoteku u Macintosh Symbol fontu, možete to učiniti ovako:

```java
FileOutputStream fos = new FileOutputStream("symbol.txt");
OutputStreamWriter osw = new OutputStreamWriter(fos, "MacSymbol");
```

Metoda `getEncoding()` vraća string koji sadrži ime znakovnog sustava koji se trenutno koristi.

```java
public String getEncoding()
```

Ostale metode prekrivaju metode iz `java.io.Writer`, ali se, iz programerove perspektive, ponašaju na isti način kao i one.

```java
public void write(int c) throws IOException
public void write(char c[], int offset, int length) throws IOException
public void write(String s, int offset, int length) throws IOException
public void flush() throws IOException
public void close() throws IOException
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
