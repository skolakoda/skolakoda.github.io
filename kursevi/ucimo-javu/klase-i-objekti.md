---
title: Klase i objekti u Javi
layout: lekcija-java
permalink: /java-klase-i-objekti
image: /images/koncepti/oop/klasa-i-objekti.jpg
---

![]({{page.image}})

***Klasa je šablon koji se koristi za kreiranje objekta. Svi objekti kreirani korišćenjem jedne klase imaju identične funkcionalnosti.***

U objektno orijentiranom programiranju, pomoću klase kreirate model promatranog predmeta realnog svijeta. Klasa je zamišljena kao prototip, nacrt ili ideja za svoje primjerke (instance). Klasa ima dva dijela: atribute i metode. **Atributi** (svojstva) opisuju što klasa jest. **Metode** opisuju što klasa čini.

Koristeći klasu, možete kreirati proizvoljan broj objekata, a svaki od njih je primjerak (instanca) klase. Različiti objekti iste klase imaju iste atribute, koji mogu imati različite vrijednosti. Npr. svi ljudi imaju neku boju očiju, ali se ona razlikuje od čovjeka do čovjeka.

Svaki novi objekt ima odvojen blok memorije za svoje atribute, ali memorija u kojoj su zabilježene metode zajednička je za sve objekte dane klase.

## Primer: Komandni taster

Na primer, možete da kreirate klasu koja predstavlja sve komandne tastere koje možete da pritisnete u okviru prozora, dijaloga i drugih delova grafičkog korisničkog interfejsa. Prilikom kreiranja `CommandButton` klase, možete da definišete sledeće funkcionalnosti:

- tekst koji se prikazuje na tasteru
- veličinu tastera
- aspekte prikazivanja - na primer, da li postoje trodimenzionalne senke.

`CommandButton` klasa može da definiše i način na koji se ponaša taster, utvrđujući pri tom sledeće:
- da li je neophodno taster pritisnuti jednom ili dva puta
- da li treba ignorisati neprekidno pritiskanje tastera
- šta treba uraditi nakon uspešnog pritiskanja tastera

{:.uokvireno}
Jedna od standardnih klasa programskog jezika Java javax.swing.JButton obuhvata sve funkcionalnosti hipotetičke CommandButton klase i još mnogo štošta.


### Izvori

- Lora Limej, Rodžers Kedenhed, *Java 6 naučite za 21 dan*, Beograd, 2007.
- Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
