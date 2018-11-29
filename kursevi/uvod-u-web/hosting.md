---
title: Šta je web hosting?
layout: lekcija-html
permalink: /hosting
---

**Web hosting je "udomljavanje" našeg sajta.**

## Besplatan hosting

Ako ne želimo da plaćamo provajderu za "udomljavanje" stranica, imamo na ras­polaganju neke besplatne alternative. One neretko sadrže reklame, kao i ograničenu upotrebu propusne moći i količine prostora. 

U Školi koda, za objavljivanje web stranica koristimo *Github Pages*. Servis je potpuno besplatan, nema reklama niti ikakvih ograničenja u pogledu količine prostora. 

Besplatan hosting je dobar za hobi projekte, ali u produkciji se preporučuje plaćeni hosting ili sopstveni server.

## Plaćeni hosting

Kompanije specijalizovane za web hosting nazivaju se hosting provajderi. Servisi za web hosting omogućuju da prenesete fajlove na njihov server, obično pomoću web alatke ili FTP protokola. Pored toga, provajderi imaju profesionalne administratore koji se brinu da serveri rade dobro svo vreme.

Uglavnom se naplaćuje mesečni paket, uz dodatne troškove ako koristimo ­više prostora ili više propusne moći. Mnogi web hostovi obezbeđuju podršku za serverske jezike kao što je PHP. 

## Sopstveni server

Ako želite punu kontrolu, pokretanje sopstvenog servera je pravo rešenje. Tada možete koristiti serverski jezik po želji i druge opcije nedostupne onima bez sopstvenog servera.

Možemo bilo koji računar podesiti i koristiti kao server. Međutim, potrebno je određeno tehničko znanje. Osim toga, dobra internet konekcija za sopstveni web server može biti skupa. Međutim, ovo može biti pravo rešenje ako server koristimo za unutrašnju upotrebu u preduzeću.

Draga opcija je zakup virtuelnog servera. Pomoću softvera jedan računar se može tretirati kao više virtuelnih računara. Kompanije zatim iznajmljuju te virtuelne računare kao servere nad kojima imamo potpunu kontrolu.

## Naziv domena

Većina hosting servisa omogućava da postavimo sajt sa vlastitim nazivom domena, a neki i prodaju nazive domena. Da bismo koristili domen (npr. `skolakoda.org`), treba da ga zakupimo kod ovlašćenog registratora. Ubrzo nakon plaćanja godišnje pretplate, naziv postaje aktivan i možemo da ga povežemo sa hostingom.

{:.uokvireno.ideja}
Kada registrujete domen, pobrinite se da to učinite pod svo­jim imenom. Budite sigurni da ste vlasnik naziva domena koji registrujete.

## Prenos fajlova

FTP (*File Transport Protocol*) je protokol za prenos fajlova sa lokalnog računara na server. Za prenos datoteka mogu da se koriste i protokoli SFTP (*Secure FTP*) i SCP (*Secure Copy*). Svi oni funkcionišu pomalo drugačije.

{:.uokvireno}
Ako server obezbeđuje više načina za otpremanje fajlova, treba iza­brati SCP ili SFTP, umesto FTP protokola. Preko FTP-a loz­inka će biti poslata na server bez šifrovanja, što uključuje bezbednosni rizik.

Najpoznatiji FTP program (FTP klijent) je *FileZilla*, sa verzijama za Windows, Mac i Linux. Prenos fajlova zavisi od programa koji izaberete, ali postoje sličnosti. Pre samog prenosa morate uneti naziv hosta servera, korisničko ime i lozinku, a možda i neka druga podešavanja. Nakon toga, možete se povezati sa uda­ljenim serverom. Kod mnogih programa, možete da jednostavno prevlačite fajlove da biste ih otpremili na server.

## Pitanja za server administratora

Pre nego što obja­vite sajt, treba da dobijete neke informacije od administratora kako se server podešava. Sledeća pitanja će vam pomoći da shvatite koje radnje možete a koje ne možete da izvršavate na serveru:

- Gde na serveru da postavim svoje fajlove? Obično će admin kreirati direktorijum na serveru za vaše datoteke. Na mnogim zakupljenim serverima to je jedini direktorijum kojem možete da pristupite.
- Koji je operativni sistem servera? Većina web servera radi na LINUX-u i koristi Apache kao softver, ali postoje i Windows i Macintosh serveri.
- Da li na serveru mogu da pokrenem PHP, Node.js, Python i druge jezike?
- Da li postoje ograničenja koliko sadržaja mogu da postavim na server? Mnogi serveri ograniče broj fajlova ili količinu prostora za skladištenje.
- Da li postoji ograničenje propusne moći koju sajt može da koristi? Većina hosting provajdera ograničava količinu prenosa podataka u određenom periodu.


Izvor: Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj web strana*, Beograd, 2016.