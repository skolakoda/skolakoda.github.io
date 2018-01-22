---
title: Pisanje vlastitih Java paketa
layout: lekcija-java
permalink: /pisanje-vlastitih-paketa
---

**Java vas ne ograničava na korištenje samo sistemskih paketa, već vam dozvoljava i pisanje vlastitih.**

Paketi se pišu jednako kao i bilo koji Java program, no pri tome se treba držati sljedećih pravila:

- Ne smije biti više od jedne `public` klase po datoteci.
- Sve datoteke u paketu moraju se zvati `classname.java` gdje je classname ime javne klase u toj datoteci.
- Na početku svake datoteke u paketu, prije svih `import` naredbi, treba doći naredba `package myPackage`; gdje je myPackage ime paketa.

Paketi se imenuju prema domeni i korisničkom imenu autora, pa ako je vedris@student.math.hr autor paketa `package1`, onda bi `hr.math.student.vedris.package1` bilo puno ime tog paketa.

Da biste paket koristili u drugim programima, kompilirajte java datoteke kao obično i premjestite dobivene `*.class` datoteke u odgovarajući poddirektorij nekog od direktorija koji je naveden u *environment* varijabli CLASSPATH.

Na primjer, ako je u CLASSPATH naveden direktorij `/math/vedris/java/classes/`, a puno ime paketa je `hr.math.student.vedris.package1`, onda bismo kompilirane datoteke stavili u direktorij `/math/vedris/java/classes/hr/math/student/vedris/package1/`.

```java
package hr.math.student.vedris.package1;

import java.net.*;

public class URLSplitter {

  public static void main(String[] args) {

    for (int i = 0; i < args.length; i++) {
      try {
        URL u = new URL(args[i]);
        System.out.println("Protocol: " + u.getProtocol());
        System.out.println("Host: " + u.getHost());
        System.out.println("Port: " + u.getPort());
        System.out.println("File: " + u.getFile());
        System.out.println("Ref: " + u.getRef());
      }
      catch (MalformedURLException e) {
        System.err.println(args[i] + " is not a valid URL");
      }
    }

  }

}
```

```
% javac -d /math/vedris/java/classes URLSplitter.java
```

Opcija `–d` kaže kompajleru da kreira potrebne poddirektorije direktorija `/math/vedris/java/classes/`. U ovom primjeru, datoteka `URLSplitter.class` bila bi smještena u direktorij `/math/vedris/java/classes/hr/math/student/vedris/package1/`.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
