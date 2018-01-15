---
title: Polimorfizam
layout: lekcija-razvoj
permalink: /polimorfizam
image: /images/koncepti/oop/polimorfizam.png
---

![]({{page.image}})

**Polimorfizam (*"višeobličnost"*) je važna osobina objektno orijentisanog jezika jer omogućuje da osnovna klasa definiše funkcije koje će biti zajedničke za sve izvedene klase, ali da izvedenim klasama ostavi slobodu da same implementiraju sve te funkcije.**

Ponekad se ideja polimorfizma objašnjava i ovako: osnovna klasa diktira opšti interfejs koji će imati sve klase izvedene iz nje, ali ostavlja izvedenim klasama da definišu kako će zaista implementirati taj interfejs. Zbog toga se polimorfizam često opisuje frazom “jedan interfejs, više metoda”. Da bi se razumeo polimorfizam, treba imati na umu da osnovna klasa i izvedene klase formiraju hijerarhiju koja se kreće od uže generalizacije ka široj (tj. od osnovne ka izvedenim klasama). Kada je pravilno projektovana, osnovna klasa ima sve elemente koje izvedene klase mogu direktno da koriste, kao i funkcije koje bi izvedene klase trebalo samostalno da implementiraju. Pošto interfejs diktira osnovna klasa, deliće ga sve izvedene klase, ali će implementacija interfejsa biti specifična za svaku od njih. Postavlja se pitanje zašto je toliko važno imati dosledan interfejs sa različitim implementacijama.

Da bismo odgovorili na to pitanje, podsetimo se ideje vodilje objektno orijentisanog pristupa, a to je da treba da olakša održavanje veoma složenih programa. Ako je program pravilno projektovan, zna se da se svim objektima izvedenim iz osnovne klase pristupa na isti način, iako će se njihovo ponašanje pomalo razlikovati u zavisnosti od toga kojoj izvedenoj klasi pripadaju. To znači da programer treba da zapamti samo jedan interfejs, umesto nekoliko njih. Takođe, izvedena klasa može da koristi sve funkcije osnovne klase, ako joj tako odgovara; nema potrebe da ”izmišlja toplu vodu”.

Razdvajanje interfejsa i implementacije omogućuje projektovanje biblioteka klasa, koje se zatim mogu koristiti za izvođenje sopstvenih klasa koje zadovoljavaju postavljene zahteve. To je veliko olakšanje u programiranju složenih sistema.


Izvor: Irina Branović, *Objektno orijentisano programiranje: C++*, Beograd, 2011.
