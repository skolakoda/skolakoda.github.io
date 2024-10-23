---
title: Zapis ili slog (<i>record</i>)
layout: lekcija-algoritmi
permalink: /slog
image: /images/koncepti/podaci/census-record.jpg
---

![]({{page.image}})

**Zapis je struktura međusobno povezanih ali raznorodnih podataka, koje obično nazivamo polja ili atributi. Svaki atribut može biti različitog tipa. Zapis se obično koristi za predstavljanje entiteta u bazi podataka.** 

Važno je naglasiti osnovne razlike između sloga i polja:
* elementi sloga mogu biti različitih tipova
* ne mora postojati "prirodni" redoslijed elemenata sloga, elementi se označavaju imenima atributa

Skup slogova možemo promatrati i kao tablicu u kojoj svaki stupac ima svoje ime i odgovara pojedinom polju (atributu) sloga. **Takva struktura čini osnovu tzv. relacijskih baza podataka.**

Pojedini atribut sloga mora imati isti tip u svim slogovima.

## Skladištenje

Jedan od mogućih načina pohrane i manipulacije sa slogovima je korištenje više paralelnih polja (nizova) pri čemu svakom atributu sloga odgovara jedno polje, odnosno elementi različitih polja sa istom vrijednošću indeksa pripadaju jednom slogu.

Drugi način manipulacije sa slogovima je korištenje različitih sintaktičkih elemenata specifičnih za određeni jezik – neki jezici imaju ugrađenu strukturu sloga.

## Primjer

Primjer slogova sa podacima o studentima - prvi red tablice sadrži nazive atributa u slogu:

IME | PREZIME | MATIČNI BROJ | DATUM ROĐENJA | UPISANA GODINA
----|---------|--------------|---------------|---------------
Ana | Savić | 0038512345 | 05.04.1984. | 1
Azra | Delibašić | 0038512766 | 12.08.1984. | 1
Darko | Mraković | 0038576238 | 30.01.1982. | 3
Ahmet | Ahmetovski | 0038636686 | 25.10.1983. | 2
Isak | Asimov | 0038578798 | 05.04.1984. | 2
Vladimir | Ilić | 0037987987 | 09.07.1980. | 4


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
