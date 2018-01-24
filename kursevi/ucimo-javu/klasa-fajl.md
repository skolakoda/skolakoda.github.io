---
title: Java Klasa Fajl
layout: lekcija-java
permalink: /java-klasa-fajl
---

Klasa [`java.io.File`](https://docs.oracle.com/javase/7/docs/api/java/io/File.html) predstavlja ime fajla na računaru. Njome se pokušavaju apstrahovati dijelovi imena koji su zavisni o računaru, na primjer putanja, separator i slično.

## Relativne i apsolutne putanje

Dva su načina referenciranja datoteka, **relativni** i **apsolutni**. Apsolutno imenovanje daje potpuni put do datoteke, počevši od imena diska pa dalje. Detalji ovise o operacijskom sustavu. Na primjer:

```
Unix:   "/math/vedris/file1"
DOS:    "C:\math\vedrisfile1"
MacOS:  "Macintosh HD:math:vedris:file1"
```

Sva ova tri stringa referenciraju datoteku `file1` na glavnom disku u direktoriju `/math/vedris/`. Razlikuju se na primjer po separatoru. Unix koristi `/`, Dos i Windows `\`, MacOS `:`. Drugi sustavi mogu koristiti nešto posve drugo. Također, nema garancije da se glavni disk na Macu zove baš “Macintosh HD” ili da uopće postoji disk s tim imenom. Na Unixu `/` i `/math` mogu biti na različitim diskovima, pa čak i na različitim mašinama. Zbog takvih razloga **apsolutna imena** treba uglavnom izbjegavati.

**Relativno imenovanje**, koje treba koristiti kad god je moguće, ne daje potpuni put do datoteke, već put koji je relativan prema nekoj poznatoj datoteci. Relativni put može pokazati datoteku u istom direktoriju jednostavno navođenjem njenog imena. Ili može pokazivati na datoteku u poddirektoriju. Općenito se jedan direktorij uzima za “radni” i metode koje traže datoteke činit će to u odnosu na taj direktorij. Uobičajeno je da to bude direktorij iz kojeg započinjete izvršavati aplikaciju.

Objekt tipa `java.io.File` može biti ime direktorija isto kao i ime datoteke. Postoje metode kojima možete utvrditi da li dani `File` objekt zaista referencira stvarnu datoteku (metoda `exists()`).

## Konstruktori klase File

Tri su konstruktora za klasu `File`. Svaki uzima neku varijaciju imena datoteke kao argument. Najjednostavniji je:

```java
public File(String path)
```

Ovdje je `path` naprosto String koji sadrži potpuni ili relativni put do datoteke. Na primjer:

```java
File f1 = new File("ulaz.txt");
File f2 = new File("/etc/passwd");
```

Ako želite, možete put do datoteke odvojiti od njenog imena koristeći sljedeći konstruktor:

```java
public File(String path, String name)
```

Ovdje je `name` ime datoteke, a `path` ime direktorija u kojem se ona nalazi. Na primjer:

```java
File f2 = new File("/etc", "passwd");
```

Na kraju, imamo i konstruktor

```java
public File(File dir, String name)
```

koji se ponaša kao i prethodni, ali je `dir` ovdje objekt tipa `File`, a ne naprosto String.

Neke metode u drugim klasama također vraćaju objekt tipa `File`, na primjer metode iz klase `java.awt.FileDialog`. Takvi će objekti poštovati sve konvencije operacijskog sustava na kojem se aplikacija izvršava.

## Metode klase File

***Kad jednom imate objekt tipa File, postoji mnogo stvari koje o njemu možete pitati i koje s njim možete učiniti.***

```java
public String getName()
```

Elementarno pitanje o datoteci je ono o njenom imenu. Ime ćete doznati pomoću metode `getName()` koja ne uzima nikakve argumente, a vraća strunu koja sadrži ime datoteke (bez puta). Na primjer, dobit ćete `file1` umjesto `/math/vedris/file1`.

```java
public String getPath()
```

Metoda `getPath()` vraća strunu koja sadrži put do datoteke. Bit će relativan ili apsolutan, ovisno o načinu na koji je objekt kreiran.

```java
public String getAbsolutePath()
```

Metoda `getAbsolutePath()` vraća puni, apsolutni put do datoteke.

```java
public String getCanonicalPath() throws IOException
```

Metoda `getCanonicalPath()` vraća kanonsku formu puta do datoteke. Ta je forma zavisna o operacijskom sustavu i mašini.

```java
public String getParent()
```

Metoda `getParent()` vraća ime jedinstvenog nadređenog direktorija u odnosu na onaj u kojem se datoteka nalazi, ili `null` ako je već dosegnut vrh hijerarhije.

```java
public boolean exists() throws SecurityException
```

Metoda `exists()` odgovara da li određena datoteka postoji na mjestu gdje je očekujete.

```java
public boolean canWrite() throws SecurityException
```

Metoda `canWrite()` daje odgovor da li imate pravo pisanja u datoteku. To nije loše provjeriti prije nego stvarno pokušati nešto upisati.

```java
public boolean canRead() throws SecurityException
```

Metoda `canRead()` daje odgovor da li imate pravo čitanja iz datoteke. Dobro ju je koristiti prije stvarnog pokušaja čitanja.

```java
public boolean isFile() throws SecurityException
```

Metoda `isFile()` odgovara na pitanje da li se radi o datoteci (za razliku od direktorija).

```java
public boolean isDirectory() throws SecurityException
```

Metoda `isDirectory()` vraća `true` ako se radi o direktoriju.

```java
public boolean isAbsolute()
```

Metoda `isAbsolute()` vraća `true` ako je dano ime apslolutni put, a `false` ako nije.

```java
public long lastModified() throws SecurityException
```

Metoda `lastModified()` vraća vrijeme zadnje promjene. Kako je konverzija u pravi datum dugačka, a procedura ovisna o platformi, to treba koristiti uglavnom za usporedbu vremena zadnje promjene dvaju različitih datoteka.

```java
public long length() throws SecurityException
```

Metoda `length()` daje veličinu datoteke u bajtovima.

```java
public boolean mkdir()
```

Metoda `mkdir()` pokušava kreirati direktorij sa zadanim imenom. Ako uspije, vratit će `true`, inače `false`.

```java
public boolean mkdirs() throws SecurityException
```

Metoda `mkdirs()` za dano ime kreira ne samo jedan, nego sve potrebne nadređene direktorije koji čine put do datoteke. Ako sva kreiranja uspiju, vratit će se `true`, inače `false` (čak ako su neka i uspjela).

```java
public boolean renameTo(File destination) throws SecurityException
```

Metoda `renameTo()` pokušava preimenovati datoteku. Na primjer, `f1.renameTo(f2)` pokušava preimenovati `f1` u `f2`. To može značiti i premiještanje u drugi direktorij ako imena tako naznačuju. Ako `f2` već postoji, bit će prebrisana sa `f1` (pod uvjetom da imate odgovarajuće dozvole). Ako preimenovanje uspije, vraća se `true`, inače `false`.

```java
public String[] list() throws SecurityException
```

Metoda `list()` vraća niz struna koje sadrže imena datoteka u navedenom direktoriju. Korisna je za procesiranje svih datoteka unutar direktorija odjednom.

```java
public String[] list(FilenameFilter filter) throws SecurityException
```

Ova varijanta metode `list()` čini isto što i prethodna, ali možete koristiti objekt koji implementira sučelje `FilenameFilter` za filtriranje imena datoteka.

```java
public boolean delete() throws SecurityException
```

Metoda `delete()` pokušava izbrisati datoteku na koju se odnosi. Vraća `true` ako je datoteka postojala i sad je izbrisana, inače `false`.

Klasa File sadrži i uobičajene metode `equals()`, `hashCode()` i `toString()` koje se ponašaju točno onako kao što biste očekivali. Ne sadrži posebnu metodu `clone()`.

## Primjer: metode klase File

Sljedeći program čita imena fajlova s komandne linije i vraća razne informacije o njima, koristeći metode iz klase File.

```java
import java.io.*;

public class FileInfo {

  public static void main(String[] args) {

     for (int i = 0; i < args.length; i++) {
      File f = new File(args[i]);
      if (f.exists()) {
        System.out.println("getName: " + f.getName());
        System.out.println("getPath: " + f.getPath());
        System.out.println("getAbsolutePath: " + f.getAbsolutePath());
        try {
          System.out.println("getCanonicalPath: " + f.getCanonicalPath());
        }
        catch (IOException e) {
        }
        System.out.println("getParent: " + f.getParent());
        if (f.canWrite()) System.out.println(f.getName() + " is writable.");
        if (f.canRead()) System.out.println(f.getName() + " is readable.");
        if (f.isFile()) {
           System.out.println(f.getName() + " is a file.");
        }
        else if (f.isDirectory()) {
          System.out.println(f.getName() + " is a directory.");
        }
        else {
          System.out.println("What is this?");
        }
        if (f.isAbsolute()) {
          System.out.println(f.getName() + " is an absolute path.");
        }
        else {
          System.out.println(f.getName() + " is not an absolute path.");
        }
        System.out.println("Last Modified" + f.lastModified());
        System.out.println(f.getName() + " is " + f.length() + " bytes.");
      } else {
         System.out.println("I'm sorry. I can't find the file " + args[i]);
       }
     }

   }

}
```

```
% javac FileInfo.java
% java FileInfo "../html/TricksterApplet.html"
getName: TricksterApplet.html
getPath: ../html/TricksterApplet.html
getAbsolutePath: /math/vedris/public_html/java/classes/../html/TricksterApplet.html
getCanonicalPath: /math/vedris/public_html/java/html/TricksterApplet.html
getParent: ../html
TricksterApplet.html is writable.
TricksterApplet.html is readable.
TricksterApplet.html is a file.
TricksterApplet.html is not an absolute path.
Last Modified1005656988000
TricksterApplet.html is 151 bytes.
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
