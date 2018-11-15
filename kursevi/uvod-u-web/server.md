---
title: Šta je server?
layout: lekcija-html
permalink: /server
image: /images/koncepti/web/zahtev-odgovor.png
---

![]({{page.image}})

**Server ili poslužitelj je računar povezan na mrežu, koji prima zahteve pregledača i odgovara na njih. Server je takođe naziv za specijalizovani softver instaliran na tom računaru. Primarna uloga poslužitelja je da se na njemu hostuju stranice i fajlovi, i tako postanu dostupni na webu.**

Server se instalira na računaru koji mora da ima statičku (nepromenljivu) IP adresu, da bi bio jedinstveno prepoznatljiv na internetu. Primarna karakteristika servera je da ume da prihvata http zahteve (*request*) i da generiše http odgovore (*response*). Glavna funkcionalnost servera je da po dobijanju http zahteva ispravno protumači zahtev, pronađe željeni resurs, obradi ga i pripremi za slanje u formi http odgovora. Na primer, to podrazumeva da kada pregledač zahteva sadržaj određene strane, server treba da tu stranicu pronađe, pripremi za slanje i pošalje, a nakon toga isporuči sve druge fajlove koje ta strana sadrži (npr. slike, audio fajlove i sl.), da bi korisnik u pregledaču video celokupnu web stranu.

## Najpopularniji web serveri

Tri najpopularnija web servera su: Apache, Microsoft IIS i NGINX. Prema podacima sa sajta [Netcraft](http://news.netcraft.com), zastupljenost servera na početku 2014. godine bila je: Apache (54,5%), Microsoft IIS (11,61%), Nginx (11.97%) dok je Google-ov GWS zastupljen sa 8.54%. Prema podacima sa sajta [W3Techs](http://w3techs.com), na početku 2015. zastupljenost je bila: Apache (58,7%), Nginx (23%), Microsoft IIS (13,2%), i Google Web Server (1.3%).

Ključne razlike između servera su uslovi korišćenja, cene i dostupnost kod provajdera. Trenutno najpopularniji Apache je besplatan, pod određenim licencama, dok je recimo Microsoft IIS, kao vlasnički kod, među skupljima i manje zastupljenim u ponudi provajdera, jer najčešće mora imati podršku i drugih licenciranih softvera (operativnog sistema, baze podataka, i sl.).

Na slici je ilustrovana tržišna zastupljenost servera za nekoliko prethodnih godina, koja pokazuje velike fluktuacije.

![](https://news.netcraft.com/wp-content/uploads/2017/02/wpid-wss-active-share.png)
