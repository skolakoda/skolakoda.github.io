---
title: Šta je port?
layout: lekcija-web
permalink: /portovi
---

Svako računalo često treba komunicirati s više od jednog računala istodobno. Na primjer, u isto vrijeme može se odvijati nekoliko ftp sesija, nekoliko web konekcija, chat i tako dalje.

Da bi se to omogućilo, mrežno sučelje računala podijeljeno je na 65536 ulaza, takozvanih portova. **Port je apstrakcija**. To nije nikakvi fizički ulaz kao što su serijski ili paralelni portovi na osobnim računalima. No podaci putuju internetom u paketima, pri čemu svaki paket nosi ne samo adresu hosta nego i broj porta na koji treba stići. Host će na osnovu porta odrediti kojem programu je namijenjen dotični paket podataka.

**IP adresu možete zamišljati kao uličnu adresu, a portove kao brojeve stanova u kućama.** Routeri koji transportiraju pakete brinu se samo o “uličnoj adresi”, dakle ne čitaju broj porta. To je prepušteno lokalnom računalu.

Na Unixu potrebne su vam root privilegije za osluškivanje konekcija na portovima od 0 do 1023. Konekcije na portovima od 1024 do 65535 može osluškivati svatko, dok god određeni port nije zauzet (na istom portu ne može više od jednog programa istodobno osluškivati konekcije). Na operacijskim sustavima Windows NT, Windows 95 i Mac bilo koji korisnik može bez posebnih privilegija osluškivati bilo koji port.

Mnogi servisi rade na tzv. općepoznatim (*well-known*), portovima. To znači da protokoli specificiraju da neki servis može ili mora koristiti određeni port. Na primjer, http poslužitelji obično osluškuju na portu 80, SMTP poslužitelji na portu 25, Echo poslužitelji na portu 7, a Discard poslužitelji na portu 9. Nemaju svi servisi općepoznate portove. Na primjer NFS dozvoljava da se portovi otkrivaju u vrijeme izvršavanja.

Ne možete se naprosto konektirati na bilo koji port na bilo kojem hostu. Konekcija je moguća samo na one portove na kojima udaljeno računalo osluškuje dolazne konekcije.

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
