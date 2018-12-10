---
title: Klase i objekti u Javi
layout: lekcija-java
permalink: /java-klase-i-objekti
image: /images/koncepti/oop/klasa-i-objekti.jpg
---

![]({{page.image}})

***Klasa je šablon koji se koristi za kreiranje objekta, nalik nekoj vrsti šablona u gradevinarstvu ili inženjerstvu; dok ne kreirate stvarne predmete na osnovu šablona, ne možete ih koristiti.***

U objektno orijentiranom programiranju, pomoću klase kreiramo **model** promatranog predmeta realnog sveta. Klasa je zamišljena kao prototip, nacrt ili mustra za svoje primerke (instance). 

Klasa ima dva dela: atribute i metode. **Atributi** (svojstva) opisuju što klasa jest. **Metode** opisuju šta klasa čini.

U realnom svetu, možemo proizvesti veliki broj automobila na osnovu iste specifikacije. Iako su svi primerci iste klase, mogu se razlikovati u određenim svojstvima - neki su crveni, drugi žuti, neki imaju dvoja vrata, drugi četvora i tako dalje.

## Instance klase

Dok je klasa nacrt, objekat je otelovljenje neke klase, sa konkretnim vrednostima atributa.

Kreiranje instance klase predstavlja kreiranje objekta u memoriji računara na osnovu definicije klase. Da bismo instancirali klasu, deklarišemo promenljivu tipa klase (u ovom slučaju `Kola`), a zatim koristimo `new` operator za svaku novu instancu:

```java
Kola jugo;
jugo = new Kola();
```

Koristeći klasu, možemo kreirati proizvoljan broj objekata, a svaki od njih je primerak klase. Svi primerci klase imaju iste atribute, koji mogu imati različite vrednosti. Npr. svi ljudi imaju neku boju očiju, ali se ona razlikuje od čoveka do čoveka.

Svaka instanca ima odvojen blok memorije za svoje atribute, ali memorija u kojoj su zabeležene metode im je zajednička.

### Literatura

- Lora Limej, Rodžers Kedenhed, *Java 6 naučite za 21 dan*, Beograd, 2007.
- Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
