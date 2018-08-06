---
title: Čitanje ulaznog toka
layout: lekcija-java
permalink: /java-citanje-ulaznog-toka
---

Osnovna metoda `read()` iz klase [`InputStream`](https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html) čita pojedinačni neoznačeni bajt podataka i vraća njegovu `int` vrijednost. To je broj između 0 i 255. Kad se naiđe na kraj toka, vraća se -1, i to možete koristiti kao flag pomoću kojeg ćete ustanoviti da ste došli do kraja toka.

```java
public abstract int read() throws IOException
```

## Primer: Čitanje unosa

Evo jednog jednostavnog programa koji vraća kao eho korisnikov unos na komandnoj liniji. Bajt se prije ispisa pretvara u ekvialentni ISO Latin-1 znak. Ovaj program neće pravilno raditi sa Unicode znakovima. Za tekstove i osobito ne-ASCII podatke koristiti klase `java.io.Reader` i `java.io.Writer`.

```java
import java.io.*;

public class Echo {

  public static void main(String[] args) {
    echo(System.in);
  }

  public static void echo(InputStream in) {
    try {
      while (true) {
        // Notice that although a byte is read, an int
        // with value between 0 and 255 is returned.
        int i = in.read();
        if (i == -1) break;

        // cast a numeric string like "65" to character
        char c = (char) i;
        System.out.print(c);    
      }
    }
    catch (IOException e) {
      System.err.println(e);
    }
    System.out.println();  
  }

}
```

Pokretanje:

```
% javac Echo.java
% java Echo
abcdefg
abcdefg
<Ctrl-C>
```

## Čitanje više bajtova odjednom

Dok osnovna `read()` metoda čita bajt po bajt, sljedeće dvije *overloaded* varijante čitaju polja bajtova:

```java
public int read(byte[] data) throws IOException
public int read(byte[] data, int offset, int length) throws IOException
```

Prva metoda čita onoliko bajtova koliko joj treba da napuni polje `data`. Druga čita onoliko bajtova iz ulaznog strima koliko je zadano u argumentu `length` i sprema ih u polje `data` počevši od pozicije `offset`.

Te su metode blokirane dok ne stignu raspoloživi podaci. Tada učitaju onoliko podataka koliko stane u polje ili koliko je navedeno. Nakon toga vraćaju broj bajtova koje su učitale. Ne smijete pretpostaviti da će uvijek biti učitano koliko treba. Ako naiđe kraj toka, vraća se -1.

## Prebrojavanje dostupnih bajtova

Metoda `available()` ispituju koliko bajtova sa uzlaznog toka je spremno za učitavanje bez blokiranja.

```java
public int available() throws IOException
```

Na primjer, sljedeći program je efikasnija verzija prethodnog programa `Echo` jer koristi metodu `available()` za ispitivanje koliko bajtova je spremno za učitavanje, a zatim kreira polje točno te veličine, učitava bajtove u polje i pretvara ga u strunu koju zatim ispisuje.

```java
import java.io.*;

public class EfficientEcho {

  public static void main(String[] args) {
    echo(System.in);
  }

  public static void echo(InputStream in) {
    try {
      while (true) {
        int n = in.available();
        if (n > 0) {
          byte[] b = new byte[n];
          int result = in.read(b);
          if (result == -1) break;
          String s = new String(b);
          System.out.print(s);
        } // end if   
      } // end while
    } // end try
    catch (IOException e) {
      System.err.println(e);
    }
  }

}
```

```
% javac Echo.java
% java Echo
abcdefg
abcdefg
<Ctrl-C>
```

## Preskakanje bajtova

Metoda `skip()` čita i odbacuje specificirani broj bajtova.

```java
public int skip(long n) throws IOException
```

Možete je koristiti, na primjer, ako želite brzo proći standardni header ili prefiks nekih podataka. U sljedećem fragmentu koda koristi se `skip()` za preskakanje praznina uključenih u `DataInputStream` `dis`.

```java
case 171: // lookupswitch
   pad = 3 - (position % 4);
   dis.skip(pad);
   defaultByte = dis.readInt();
   int npairs = dis.readInt();
   result = position + "    lookupswitch " + defaultByte + " " + npairs;
   for (int i = 0; i < npairs; i++) {
     int newPosition = position + pad + 12 + i*8;
     result += "\n" + newPosition + "    "
      + dis.readInt() + " " + dis.readInt();
   }
```

## Markiranje i reset

Često je korisno ako možete učitati nekoliko bajtova, a zatim se vratiti natrag i učitati ih ponovo. Na primjer, pri oblikovanju nekog kompajlera ne možete znati da li trebate učitati znak `<`, `<<`, ili `<<=` sve dok ne učitate dva ili više bajtova. Bilo bi korisno ako biste se mogli vratiti natrag i ponovo učitati token nakon što ste okrili o kojem se radi.

Neki, ali ne svi tokovi dopuštaju vam da markirate određenu poziciju u toku i onda se vratite na nju. To se radi pomoću sljedećih metoda:

```java
public synchronized void mark(int readlimit)
public synchronized void reset() throws IOException
public boolean markSupported()
```

Metoda `markSupported()` vraća `true` ako taj tok podržava markiranje, a `false` inače. Pod pretpostavkom da je markiranje podržano, metoda `mark()` stavlja bookmark na mjesto gdje se kasnije želite vratiti pomoću metode `reset()`. Istodobno u jednom toku može postojati samo jedan takav bookmark. Sljedeće markiranje izbrisat će prethodno. Ako markiranje nije podržano, ove će metode izbaciti `IOException`.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
