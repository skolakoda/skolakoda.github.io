---
title: Klase i objekti u Javi
layout: lekcija-java
permalink: /java-klase-i-objekti
image: /images/koncepti/oop/klasa-i-objekti.jpg
---

![]({{page.image}})

***Klasa je šablon koji se koristi za kreiranje objekta. Svi objekti kreirani korišćenjem jedne klase imaju identične funkcionalnosti.***

Klase obuhvataju sve funkcionalnosti konkretnog skupa objekata. Kada pišete program korišćenjem nekog objektno-orijentisanog programskog jezika, ne morate da definišete pojedinačne objekte. Umesto toga, definišete klase koje ćete upotrebljavati za kreiranje tih pojedinačnih objekata.

## Primer: komandni taster

Na primer, možete da kreirate klasu koja predstavlja sve komandne tastere - polja koja možete da pritisnete, a koja se nalaze u okviru prozora, dijaloga i drugih delova grafičkog korisničkog interfejsa Vašeg programa.

Prilikom kreiranja `CommandButton` klase, možete da definišete sledeće funkcionalnosti:
- tekst koji se prikazuje na tasteru
- veličinu tastera
- aspekte prikazivanja - na primer, da li postoje trodimenzionalne senke.

`CommandButton` klasa može da definiše i način na koji se ponaša taster, utvrđujući pri tom sledeće:
- da li je neophodno taster pritisnuti jednom ili dva puta
- da li treba ignorisati neprekidno pritiskanje tastera
- šta treba uraditi nakon uspešnog pritiskanja tastera

{:.uokvireno}
Jedna od standardnih klasa programskog jezika Java javax.swing.JButton obuhvata sve funkcionalnosti hipotetičke CommandButton klase i još mnogo štošta.


Izvor: Lora Limej, Rodžers Kedenhed, *Java 6 naučite za 21 dan*, Beograd, 2007.
