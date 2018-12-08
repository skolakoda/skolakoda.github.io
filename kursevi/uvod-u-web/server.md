---
title: Šta je server?
layout: lekcija-html
permalink: /server
image: /images/koncepti/web/zahtev-odgovor.png
---

![]({{page.image}})

**Da bismo objavili web stranice, potreban nam je web server.**

Server ili poslužitelj je računar povezan na mrežu, koji prima zahteve i odgovara na njih. Server je takođe naziv za specijalizovani softver instaliran na tom računaru. Primarna uloga servera je da se na njemu hostuju stranice i fajlovi, i tako postanu dostupni na webu. 

Server mora imati statičku (nepromenljivu) IP adresu na internetu.

## HTTP zahtev i odgovor

Glavno obeležje servera je da ume da prihvati http zahtev (*request*) i da generiše http odgovor (*response*). Posao servera je da prihvati i ispravno protumači zahtev, pronađe traženi resurs, obradi ga i pripremi za slanje u formi http odgovora. Na primer, kada pregledač zahteva sadržaj određene strane, server treba tu stranicu da pronađe, pripremi za slanje i pošalje, a nakon toga isporuči sve druge fajlove koje ta strana sadrži (npr. slike, audio fajlove i sl.), da bi korisnik u pregledaču video celokupnu web stranu.

Web serveri i pregledači komuniciraju pomoću protokola za prenos hiperteksta (HTTP), koji je kreiran posebno za zahtev i prenos hipertekstualnih dokumenata na webu.

## Serverska obrada fajlova

Neki serveri mogu da obrade datoteke pre nego što ih pošalju klijentima. Pomoću serverske obrade, na primer, možemo da umetnemo datum ili deo teksta na svaku stranicu.

Većina servera obezbeđuje opciju za pokretanje serverskih skripti ili frejmvorka koji dinamički generišu dokumente. PHP je jezik koji se najviše koristi, lak je za korišćenje i radi na većini servera. Druga popularna rešenja su Microsoftov *.NET*, koji se pokreće u Windowsu, *Java Server Pages*, koji se pokreće na većini servera, *Go*, *Ruby on Rails* i *Django* - svi oni mogu se koristiti za izradu veb aplikacija.

## Ostala zaduženja servera

Serveri su odgo­vorni za obaveštavanje pregledača o tipu sadržaja koji se nalazi u datoteci. Veb server, takođe, određuje kako URL adrese treba prevesti u lokacije datoteka. Ako klijent zahteva dato­teku koja ne postoji, server prikazuje HTTP grešku 404. Možemo da konfigurišemo server tako da se jedna URL adresa preusmeri na drugu. Na kraju, serveri čuvaju log fajlove radi evidencije o broju pristupa svakoj adresi. Oni čuvaju i evi­denciju grešaka koje nastaju kada klijenti šalju zahteve, tako da možemo da pratimo i ispravljamo greške.

## Autentikacija i bezbednost

Zaštita lozinkom je omogućena na većini servera. Pomoću autentikacije možemo na serverima kreirati korisničke profile i dodeliti im lozinke, i ograničiti pristup određe­nim datotekama. Takođe možemo ograničiti pristup stranicama na osnovu naziva ili IP adrese. 

Mnogi serveri omogućavaju šifrovane konekcije i transakcije pomoću protokola sigurnog prenosa (SSL), da osetljive informacije ne bi pale u pogrešne ruke. Sigurni protokol omogućava klijentu da izvrši autentikaciju servera, čime se provera da li je to zaista server, a proverava se i šifrovana konekcija. SSL postaje sve važniji pretraživačima - oni ga koriste za dodelu bezbednih ovlašćenja sajtovima.

## Najpopularniji web serveri

Tri najpopularnija web servera su: Apache, Microsoft IIS i NGINX. Prema podacima sa sajta [Netcraft](http://news.netcraft.com), zastupljenost servera na početku 2014. godine bila je: Apache (54,5%), Microsoft IIS (11,61%), Nginx (11.97%) dok je Google-ov GWS zastupljen sa 8.54%. Prema podacima sa sajta [W3Techs](http://w3mochs.com), na početku 2015. zastupljenost je bila: Apache (58,7%), Nginx (23%), Microsoft IIS (13,2%), i Google Web Server (1.3%).

Ključne razlike između servera su uslovi korišćenja, cena i dostupnost kod provajdera. Trenutno najpopularniji Apache je besplatan, pod određenim licencama, dok je recimo Microsoft IIS, kao vlasnički kod, među skupljima i manje zastupljenim u ponudi provajdera, jer najčešće mora imati podršku i drugih licenciranih softvera (operativnog sistema, baze podataka, i sl.).

Na slici je prikazana tržišna zastupljenost servera od 2000. do 2016. godine.

![](https://news.netcraft.com/wp-content/uploads/2017/02/wpid-wss-active-share.png)

### Izvori

- Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
