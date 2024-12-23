---
title: Kontrola pristupa
layout: lekcija-principi
permalink: /kontrola-pristupa
image: /images/koncepti/oop/specifikatori-pristupa.jpg
---

![]({{page.image}})

**Ključne reči `public`, `private` i `protected` su specifikatori pristupa (*access specifiers*) članovima klase. Kontrola pristupa postoji u mnogim objektno orjentisanim jezicima, kao što su C++, Java, PHP, TypeScript i drugi.**

## Privatni i javni članovi

Članovi klase (podaci i metode) sa specifikacijom `private` zaštićeni su od pristupa spolja (oni su sakriveni, odnosno [kapsulirani](/enkapsulacija)). To su privatni članovi klase i njima mogu pristupati samo metode iste klase. U C++, ako se ne navede specifikator pristupa, svi članovi klase su podrazumevano privatni. Ipak, dobra praksa nalaže da se specifikator `private` eksplicitno navede.

**Privatnim podacima klase obično se pristupa preko javnih metoda.**

Da bi se deo klase učinio javnim, tj. da bi bio vidljiv izvan klase, navodi se specifikacija `public`. Javnom članu klase može se pristupati iz drugih delova programa.

Praksa je da se u klasi prvo navode privatni pa javni članovi, mada ne postoji pravilo koje to zahteva.

## Zaštićeni članovi

Nasleđivanjem ne mogu da se naruše ograničenja pristupa osnovne klase koja su već definisana. Tako, iako izvedena klasa nasleđuje sve članove iz osnovne, ona ne može da pristupi članovima osnovne klase koji su deklarisani kao privatni. Rešenje ovog ograničenja nije u tome da se podaci članovi učine javnim, jer tako postaju svima dostupni.

Postoje dva rešenja za ovaj problem: prvo je da se koristi specifikator pristupa `protected` , a drugo da se koriste javne funkcije koje će omogućiti pristup privatnim podacima članovima. Zaštićeni član osnovne klase je isti kao privatan, uz jedan važan izuzetak: mogu da mu pristupe izvedene klase.


Izvor: Irina Branović, *Objektno orijentisano programiranje: C++*, Beograd, 2011.
