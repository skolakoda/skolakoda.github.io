---
title: Šta je server?
layout: lekcija-html
permalink: /server
image: /images/koncepti/web/zahtev-odgovor.png
---

![]({{page.image}})

**Da bismo objavili web stranice, potreban nam je web server.**

Server ili poslužitelj je računar povezan na mrežu, koji prima zahteve i odgovara na njih. Server je takođe naziv za specijalizovani softver instaliran na tom računaru. Primarna uloga servera je da se na njemu hostuju stranice i fajlovi, i tako postanu dostupni na webu. Server mora imati statičku (nepromenljivu) IP adresu.

## HTTP zahtev i odgovor

Glavno obeležje servera je da ume da prihvata http zahteve (*request*) i da generiše http odgovore (*response*). Posao servera je da prihvati i ispravno protumači zahtev, pronađe traženi resurs, obradi ga i pripremi za slanje u formi http odgovora. Na primer, kada pregledač zahteva sadržaj određene strane, server treba tu stranicu da pronađe, pripremi za slanje i pošalje, a nakon toga isporuči sve druge fajlove koje ta strana sadrži (npr. slike, audio fajlove i sl.), da bi korisnik u pregledaču video celokupnu web stranu.

Web serveri i web pregledači komuniciraju pomoću protokola za prenos hiperteksta (HTTP), koji je kreiran posebno za zahtev i prenos hipertekstualnih dokumenata na Vebu.

## Najpopularniji web serveri

Tri najpopularnija web servera su: Apache, Microsoft IIS i NGINX. Prema podacima sa sajta [Netcraft](http://news.netcraft.com), zastupljenost servera na početku 2014. godine bila je: Apache (54,5%), Microsoft IIS (11,61%), Nginx (11.97%) dok je Google-ov GWS zastupljen sa 8.54%. Prema podacima sa sajta [W3Techs](http://w3techs.com), na početku 2015. zastupljenost je bila: Apache (58,7%), Nginx (23%), Microsoft IIS (13,2%), i Google Web Server (1.3%).

Ključne razlike između servera su uslovi korišćenja, cena i dostupnost kod provajdera. Trenutno najpopularniji Apache je besplatan, pod određenim licencama, dok je recimo Microsoft IIS, kao vlasnički kod, među skupljima i manje zastupljenim u ponudi provajdera, jer najčešće mora imati podršku i drugih licenciranih softvera (operativnog sistema, baze podataka, i sl.).

Na slici je prikazana tržišna zastupljenost servera od 2000. do 2016. godine.

![](https://news.netcraft.com/wp-content/uploads/2017/02/wpid-wss-active-share.png)
