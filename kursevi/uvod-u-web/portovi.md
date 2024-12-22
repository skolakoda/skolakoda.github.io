---
title: Šta je port?
layout: lekcija-web
permalink: /portovi
---

Svako računalo često treba komunicirati s više od jednog računala istodobno. Na primjer, u isto vrijeme može se odvijati nekoliko ftp sesija, nekoliko web konekcija, chat i tako dalje.

Da bi se to omogućilo, mrežno sučelje računala podijeljeno je na 65536 ulaza, takozvanih portova. **Port je apstrakcija**. To nije fizički ulaz kao što su serijski ili paralelni portovi. No podaci putuju internetom u paketima, pri čemu svaki paket nosi ne samo adresu hosta nego i broj porta na koji treba stići. Host će na osnovu porta odrediti kojem programu je namijenjen koji paket podataka.

**IP adresu možemo zamisliti kao broj ulice, a port kao broj stana.** Routeri koji usmeravaju pakete brinu se samo o “uličnoj adresi”, dakle ne čitaju broj porta. To je prepušteno lokalnom računalu.

## Brojevi ulaza

Na Unixu potrebne su nam root privilegije za osluškivanje veza na portovima od 0 do 1023. Veza na portovima od 1024 do 65535 može osluškivati svatko, dok god port nije zauzet (na istom portu ne može više od jednog programa istovremeno slušati). 

Mnogi servisi rade na tzv. općepoznatim (*well-known*), portovima. To znači da protokoli specificiraju da neki servis može ili mora koristiti određeni port. Na primjer, http poslužitelji obično osluškuju na portu 80, SMTP poslužitelji na portu 25, Echo poslužitelji na portu 7, a Discard poslužitelji na portu 9. Nemaju svi servisi općepoznate portove. Na primjer NFS dozvoljava da se portovi otkrivaju u vrijeme izvršavanja.

Ne možemo se naprosto povezati na bilo koji port na bilo kojem hostu. Povezivanje je moguće samo na one ulaze na kojima računar osluškuje dolazne konekcije.

## Literatura 

- Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
