---
title: Nasleđivanje klasa
layout: lekcija-principi
image: /images/koncepti/oop/nasledjivanje.jpg
permalink: /nasledjivanje-klasa
---

![nasledjivanje]({{page.image}})

***Nasleđivanje je jedan od suštinskih koncepata objektno-orijentisanog programiranja i od presudnog je uticaja na način na koji projektujete i pišete sopstvene klase.***

Nasleđivanje predstavlja mehanizam koji omogućava da jedna klasa nasleđuje celokupno ponašanje i sve atribute neke druge klase. Nasleđivanjem jedna klasa u potpunosti preuzima funkcionalnosti postojeće klase. Zbog toga, morate da definišete ono što novu klasu čini drugačijom od postojeće.

## Hijerarhija

Primenom nasleđivanja, sve klase (one koje kreirate i one koje se nalaze u Java biblioteci i nekim drugim bibliotekama klasa) uređene su u okviru striktne hijerarhije.

**Klasa koja nasleđuje neku drugu klasu naziva se izvedena klasa (potklasa). Klasa koja se nasleđuje naziva se natklasa (superklasa).**

Klasa može da ima samo jednu natklasu, ali svaka klasa može da ima neograničeni broj izvedenih klasa. Izvedene klase nasleđuje sve atribute i ponašanje klasa koje nasleđuju.

To praktično znači da u slučaju da neka natklasa poseduje ponašanje i atribute koji su neophodni vašoj klasi, ne morate da pišete ili kopirate kod osnovne klase. Vaša klasa automatski nasleđuje ponašanje i atribute osnovne klase; osnovna preuzima odgovarajuće ponašanje i atribute od neke druge klase i tako redom u okviru odgovarajuće hijerarhije. Vaša klasa postaje kombinacija sopstvenih funkcionalnosti i svih funkcionalnosti klasa koje se nalaze iznad nje u okviru posmatrane hijerarhije klasa.

Ova situacija je slična načinu na koji nasleđujete osobine od svojih roditelja, kao što su visina, boja kose, odnosno sklonost ka jedenju putera ili banana. Vaši roditelji su neke svoje osobine nasledili od svojih roditelja, koji su ih nasledili od svojih roditelja i tako dalje sve do Rajskog vrta, Velikog praska ili ... (unesite ovde ono što verujete da je bilo početak svega).

![](/images/koncepti/oop/hijerarhija-klasa.png)

## Najopštija klasa `Object`

Na vrhu hijerarhije Java klasa je `Object`; sve klase nasleđuju ovu natklasu. `Object` klasa je najopštija u hijerarhiji - ona definiše ponašanje koje nasleđuju sve ostale klase.

U okviru hijerarhije, svaka klasa koja se nalazi niže ima specifičniju namenu. Hijerarhija klasa definiše apstraktne koncepte na vrhu hijerarhije. Ovi koncepti postaju konkretniji u okviru klasa koje se nalaze niže u hijerarhiji.

## Kreiranje nove klase

Često ćete prilikom kreiranja nove klase u programskom jeziku Java želeti da uključite sve funkcionalnosti neke postojeće klase, uz određene modifikacije koje definišu specifičnost nove klase. Na primer, možda ćete želeti da kreirate varijantu `CommandButton` klase tako da se reprodukuje odgovarajući zvuk prilikom pritiskanja tastera.

Da biste preuzeli svu funkcionalnost `CommandButton` klase, a da pri tom ne morate samostalno da je kreirate, možete da definišete da je vaša klasa nasleđuje. Vaša klasa će u tom slučaju automatski naslediti ponašanje i atribute koji su definisani u `CommandButton` klasi, kao i u klasama koje ona nasleđuje. Sve što treba da uradite je da napravite nove metode i atribute koje će vašu klasu učiniti različitom u odnosu na `CommandButton`.

**Definisanje potklase je kreiranje nove klase koja nasleđuje postojeću. Jedini zadatak u tom slučaju je utvrđivanje razlika u ponašanju i svojstvima između nove klase i natklase.**

Ukoliko vaša klasa definiše potpuno novo ponašanje, a ne predstavlja klasu izvedenu na osnovu neke postojeće, možete direktno da nasledite klasu `Object`. Tako svoju klasu uklapate u hijerarhiju postojećih Java klasa. Ukoliko kreirate klasu koja ne poseduje natklasu, Java prevodilac podrazumeva da nasleđuje direktno `Object` klasu.


Izvor: Lora Limej, Rodžers Kedenhed, *Java 6 naučite za 21 dan*, Beograd, 2007.
