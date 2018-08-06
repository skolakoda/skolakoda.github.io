---
title: Naredba if u Javi
layout: lekcija-java
permalink: /java-naredba-if
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/If-Then-Else-diagram.svg/400px-If-Then-Else-diagram.svg.png)

**Java jezik sadrži `if` naredbu koja utvrđuje da li je određeni uslov ispunjen ili nije. Na osnovu ispunjenosti uslova određuje se redosled izvršavanja programa.**

Sljedeći program ispisuje prvi argument sa komandne linije, ali prvo uz pomoć varijable `args.length` provjerava ima li argumenata:

```java
class Hello {

    public static void main (String args[]) {

      if (args.length > 0) {
        System.out.println("Hello " + args[0]);
      }
  }

}
```

`System.out.println(args[0])` je ovdje umetnuta unutar uslova:

```java
if (args.length > 0) { }
```

Blok koda unutar vitičastih zagrada, `System.out.println(args[0])`, bit će izvršen ako i samo ako je duljina polja `args` veća od nule.
Argumenti za kondicionalne naredbe kao što je `if` moraju biti bulovski, dakle izrazi koji se evaluiraju na `true` ili `false`. Cjelobrojni argumenti nisu dopušteni.

```
% javac Hello.java
% java Hello
%
% java Hello world!
% Hello world!
```

## Klauzula `else`

{:.ulaz}
```java
class Hello {

    public static void main (String args[]) {

      if (args.length > 0) {
        System.out.println("Hello " + args[0]);
      }
      else {
        System.out.println("Hello whoever you are.");
      }
  }

}
```

```
% javac Hello.java
% java Hello
% Hello whoever you are
%
% java Hello world!
% Hello world!
```

## Klauzula `else if`

Naredba if nije ograničena na samo dva slučaja. Kombiniranjem else i if dobije se else if kako bi se mogle ispitati sve mogućnosti. Preradimo sada Hello program tako da barata sa 4 imena s komandne linije.

{:.ulaz}
```java
class Hello {

    public static void main (String args[]) {

      if (args.length == 0) {
        System.out.println("Hello whoever you are");
      }
      else if (args.length == 1) {
        System.out.println("Hello " + args[0]);
      }
      else if (args.length == 2) {
        System.out.println("Hello " + args[0] + " " + args[1]);
      }      
      else if (args.length == 3) {
        System.out.println("Hello " + args[0] + " " + args[1] + " " + args[2]);
      }      
      else if (args.length == 4) {
        System.out.println("Hello " + args[0] +
          " " + args[1] + " " + args[2] + " " + args[3]);
      }      
      else {
        System.out.println("Hello " + args[0] + " " + args[1] + " " + args[2]
         + " " + args[3] + " and all the rest!");
      }

  }

}
```

```
% javac Hello.java
% java Hello
% Hello whoever you are
%
% java Hello prvi drugi treci cetvrti
% Hello prvi drugi treci cetvrti
%
% java Hello prvi drugi treci cetvrti peti
% Hello prvi drugi treci cetvrti and all the rest!
```

Ipak, takav način ispitivanja brzo postaje kompliciran. Postoje i bolja rješenja, kao što pokazuju sljedeći primjeri.

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
