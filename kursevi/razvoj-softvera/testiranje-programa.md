---
title: Testiranje programa
layout: lekcija-razvoj
permalink: /testiranje-programa
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/TestingCup-Polish-Championship-in-Software-Testing-Katowice-2016.jpg/800px-TestingCup-Polish-Championship-in-Software-Testing-Katowice-2016.jpg)

**Testiranje služi za provjeru odnosno verifikaciju programa - da li napravljeni program, kada se izvrši u stroju, obavlja postavljeni zadatak potpuno korektno.**

Nema generalnog postupka s kojim je uvijek moguće izvršiti apsolutnu verifikaciju svakog programa, pogotovo kod složenih programskih sistema, jer nije moguće pripremiti ulazne podatke testiranja i rješenja za njih za sve moguće kombinacije ulaznih podataka. Zbog toga se testiranje i verifikacija programa vrši za najkarakterističnije kombinacije ulaznih podataka za koje se znaju sva rješenja, ili ukoliko to nije moguće, za koje se znaju djelomična rješenja.

Ukoliko program ne zadovolji prilikom testiranja potrebno je otkriti što ne valja i ovisno o vrsti greške vratiti se na neku od prethodnih faza izrade programa. U ovoj fazi najčešće otkrivamo greške u algoritmima ili u modelu problema. Jedna vrsta tih grešaka se popularno nazivaju *bagovi*.

Grešku (posljedicu) je relativno lako uočiti prilikom testiranja, ali je redovito vrlo teško u složenijem programu pronaći uzrok greške, pogotovo početnicima i programerima s malo iskustva. U ovakvim situacijama dolaze do izražaja razlike u "kvaliteti" programiranja - organizaciji i načinu pisanja programskog koda. Razvijene su mnoge metode razvoja složenih programskih sustava koje nastoje eliminirati navedene i druge probleme.

Nažalost, većina današnjeg aplikativnog softvera je toliko složena da i pored vrlo opsežnih testiranja u toku razvoja ne budu otkrivene sve greške prije lansiranja na tržište. Redovita je pojava da greške otkrivaju tek korisnici tijekom eksploatacije programa i prijavljuju ih proizvođaču kroz unaprijed određene mehanizme komunikacije. Proizvođač tada izdaje tzv. "service pack"-ove kojima se zamjenjuju dijelovi programskog sustava u kojima su pronađene greške.


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi I*, Zagreb, 2005.
