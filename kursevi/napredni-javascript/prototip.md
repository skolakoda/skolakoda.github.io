---
title: Šta je prototip?
layout: lekcija-napredni-js
permalink: /javascript-prototip
---

**Glavna razlika između JavaScripta i klasičnih objektno-orjentisanih jezika, kao što su C++ i Java, jeste što u JavaScriptu objekti postoje pre klase.**

Objekat koji se koristi za kreiranje drugih objekata naziva se **prototip**. Razliku između prototipa i klase možemo shvatiti preko poređenja sa auto industrijom. Ako neki majstor u garaži napravi auto na osnovu kog će biti proizvedena čitava serija, to je prototip. Suprotno tome je da inženjer izradi nacrt za novu seriju, bez pravljenja konkretnog primerka. Dakle, prototip je konkretan primerak, dok je klasa nacrt ili ideja.

U JavaScriptu se za izradu novih objekata koriste prototipi. U klasičnom OO jeziku reći ćete: „Kreiraj novi objekat pod nazivom `bobo`, koji pripada klasi Osoba“, a u prototipskom: „Uzeću objekat pod nazivom „bobov uzor“ i upotrebiti ga kao prototip za obje­kat `bobo`.“
