---
title: Šta je web hosting?
layout: lekcija-web
permalink: /hosting
---

**Web hosting je "udomljavanje" našeg sajta.**

## Besplatan hosting

Ako ne želimo da plaćamo provajderu za "udomljavanje" stranica, imamo na ras­polaganju neke besplatne alternative. One neretko sadrže reklame, kao i ograničenu upotrebu propusne moći i količine prostora. 

U Školi koda, za objavljivanje statičnih web stranica koristimo *Github Pages*. Servis je potpuno besplatan, nema reklama niti ikakvih ograničenja u pogledu količine prostora. 

Besplatan hosting je dobar za hobi projekte, ali u produkciji se preporučuje plaćeni hosting ili sopstveni server.

## Plaćeni hosting

Kompanije specijalizovane za web hosting nazivaju se web hosting provajderi. Provajderi omogućuju da prenesete fajlove na njihov server, obično pomoću web alatke ili FTP protokola. Pored toga, provajderi imaju profesionalne administratore koji se brinu da serveri rade dobro svo vreme.

Uglavnom se naplaćuje mesečni paket, uz dodatne troškove ako koristimo ­više prostora ili više propusne moći. Mnogi web hostovi obezbeđuju podršku za serverske jezike kao što je PHP. 

## Sopstveni server

Ako želimo punu kontrolu, pokretanje sopstvenog servera je pravo rešenje. Tada možemo koristiti serverski jezik po želji i druge opcije nedostupne onima bez sopstvenog servera.

Možemo bilo koji računar podesiti i koristiti kao server. Međutim, potrebno je određeno tehničko znanje. Osim toga, dobra internet konekcija za sopstveni web server može biti skupa. Na primer, ovo može biti pravo rešenje ako server koristimo za unutrašnju upotrebu u preduzeću.

Draga opcija je zakup virtuelnog servera. Pomoću softvera jedan računar se može tretirati kao više virtuelnih računara. Kompanije zatim iznajmljuju te virtuelne računare kao servere nad kojima imamo potpunu kontrolu.

## Naziv domena

Većina hosting servisa omogućava da postavimo sajt sa vlastitim nazivom domena, a neki i prodaju nazive domena. Da bismo koristili domen (npr. `skolakoda.org`), treba da ga zakupimo kod ovlašćenog registratora. Ubrzo nakon plaćanja godišnjeg zakupa, naziv postaje aktivan i možemo da ga povežemo sa hostingom.

{:.uokvireno.ideja}
Kada registrujete domen, pobrinite se da to učinite pod svo­jim imenom. Budite sigurni da ste vlasnik naziva domena koji registrujete.

## Prenos fajlova

FTP (*File Transport Protocol*) je protokol za prenos fajlova sa lokalnog računara na server. Za prenos datoteka mogu da se koriste i protokoli SFTP (*Secure FTP*) i SCP (*Secure Copy*). Svi oni funkcionišu pomalo drugačije.

{:.uokvireno}
Ako server obezbeđuje više načina za otpremanje fajlova, treba iza­brati SCP ili SFTP, umesto FTP protokola. Preko FTP-a loz­inka će biti poslata na server bez šifrovanja, što uključuje bezbednosni rizik.

Najpoznatiji FTP program (FTP klijent) je *FileZilla*, sa verzijama za Windows, Mac i Linux. Prenos fajlova zavisi od programa koji izaberemo, ali postoje sličnosti. Pre prenosa moramo uneti naziv hosta servera, korisničko ime i lozinku, a možda i druga podešavanja. Nakon toga, možemo se povezati sa uda­ljenim serverom. Kod mnogih programa možemo jednostavno prevlačiti fajlove da bismo ih otpremili na server.

## Pitanja za server administratora

Pre nego što objavimo sajt, trebaju nam neke informacije od administratora za podešavanje servera. Sledeća pitanja mogu pomoći:

- Gde na serveru da postavim svoje fajlove? Obično će admin kreirati direktorijum za naše datoteke. Na mnogim zakupljenim serverima to je jedini direktorijum kojem možemo pristupiti.
- Koji je operativni sistem servera? Većina web servera radi na LINUX-u i koristi Apache softver, ali postoje i Windows i Macintosh serveri.
- Da li na serveru možemo pokrenuti PHP, Node.js, Python i druge jezike?
- Postoje li ograničenja koliko sadržaja možemo postaviti? Mnogi serveri ograničavaju broj fajlova ili količinu prostora.
- Postoji li ograničenje propusne moći koju sajt može da koristi? Većina hosting provajdera ograničava količinu prenosa podataka u određenom periodu.

## Literatura

- Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj web strana*, Beograd, 2016.