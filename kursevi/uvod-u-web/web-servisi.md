---
title: Šta su web servisi?
layout: lekcija-web
permalink: /web-servisi
---

![](/images/koncepti/web/rest-api.jpg)

**Web usluga (*web service*) je mehanizam za izlaganje korisnih podataka koji se mogu preuzeti preko HTTP protokola.**

Razlika između tradicionalnih web aplikacija i web usluga je u tome što web servisi pružaju samo podatke i ne zanima ih kako izgleda korisnički interfejs. Na primjer, osiguravajuća kuća ili investicijski fond mogu izložiti svoje podatke kroz web uslugu koja vraća XML dokumente. Klijenti ne moraju znati da se aplikacija osiguravajuće kuće izvršava na računalu tvrtke Sun Microsystems ili da investicijski fond koristi IBM računala.

Mnoge javno dostupne web usluge nude različite API-je za uzimanje podataka. Mnoštvo korisnih web servisa možemo pronaći na stranici [Public APIs](https://github.com/public-apis/public-apis). Velika poduzeća koriste i privatne web usluge za svoje potrebe.

## Istorija 

Tokom 1990-ih web se počeo masovno koristiti, pa su novim web aplikacijama pristupali milijuni ljudi širom svijeta. U isto vrijeme, postojalo je mnoštvo zastarjelih aplikacija koje su se mogle koristiti samo unutar jedne tvrtke. Bile su napisane na raznim programskim jezicima i instalirane na raznim vrstama računala. 

U takvom okruženju postojala je potreba da se podaci izlože široj javnosti, što je rezultiralo izradom standardnog sučelja za pristupanje podacima preko weba.

## SOAP web usluge

Prvi standard za objavljivanje i konzumiranje web usluga bio je **SOAP** (*Simple Object Access Protocol*) temeljen na XML-u. Web klijenti bi formirali HTTP zahtjeve i primali odgovore koristeći SOAP sintaksu.

Klijenti su morali znati samo popis usluga koje neka organizacija nudi, imena ponuđenih operacija i adresu krajnje točke (*endpoint*) na koju se moraju spojiti da bi mogli koristiti uslugu. Imenik usluga može se objaviti pomoću jezika *Web Services Description Language* (WSDL) koji je prilično doslovan. 

SOAP web usluge se još uvek koriste, posebno u enterprise okruženjima gde je potrebna visoka sigurnost, transakcijska podrška i složeni zahtevi za integraciju. Neke SOAP usluge su javno dostupne.

## REST web usluge

**REST** je kratica za *representational state transfer* (reprezentativno stanje prijenosa). Web usluge koje se temelje na REST načelima nazivamo RESTful usluge. Za razliku od SOAP-a, REST nije protokol, već način (jednostavniji od SOAP-a) za razvoj web usluga.

Dr. [Roy Fielding](https://en.wikipedia.org/wiki/Roy_Fielding) definirao je REST načela u svojoj doktorskoj tezi:

- Svaki resurs na webu ima jedinstven ID.
- Koriste se uniformna sučelja: HTTP `Get`, `Post`, `Put`, `Delete` i tako dalje.
- Resurs može imati više reprezentacija (tekst, JSON, XML, PDF i tako dalje).
- Zahtjevi su bez stanja – između zahtjeva se ne čuvaju podaci koji se odnose na
klijent.
- Resursi se mogu povezivati.
- Resursi se trebaju moći spremati u *cache* memoriju.
- REST aplikacija se može izraditi u slojevima

Jednostavnije rečeno resurs je svaki objekt kojem možemo pristupiti korištenjem hiperveze. Svaki resurs ima uniformni identifikator resursa (URI). Na primjer `www.dice.com/yakovsresume` identificira jedinstveni resurs s mojim životopisom na lokaciji `www.dice.com`. Životopis se može čuvati na serveru kao obična datoteka, ili u bazi podataka, ali se u svakom slučaju možete poslužiti u više formata, kao što su PDF, XML ili JSON.

REST resursi moraju podržavati standardne HTTP zahtjeve bez stanja. Ako ste za SOAP koristili proizvoljna imena podržanih operacija (na primjer, `getCityByZipCode`), za REST koristite standardne HTTP metode kao što su `Get`, `Post`, `Put` i `Delete`.

Susreo sam se s brojnim web aplikacijama koje su koristile samo HTTP metode, `GET` za čitanje sadržaja na poslužitelju i `POST` za ažuriranje sadržaja ili skrivanje HTTP parametara unutar HTTP zaglavlja, ali REST je stroži kad je riječ o tome. U RESTful svijetu treba koristiti `GET` za preuzimanje podataka, `POST` za izradu novih resursa, `PUT` za ažuriranje i `DELETE` za uklanjanje resursa.

Svaka od standardnih HTTP metoda ima određene karakteristike:

- `GET`: sigurnost, idempotencija, mogućnost spremanja u cache
- `PUT`: idempotencija
- `DELETE`: ne-idempotencija
- `POST`: Ništa od navedenog

**Idempotencija** označava mogućnost operacije da se izvrši više puta, a da rezultat bude isti kao da je izvršena samo jednom. U kontekstu web usluga, to znači da ponovljeni zahtevi (sa istim podacima) neće promeniti stanje sistema nakon prvog izvršenja. **Sigurnost** znači da metoda ne mijenja resurs. Mogućnost spremanja u *cache* znači da klijentska aplikacija može spremiti rezultat u *cache* memoriju. 

Klijent i poslužitelj mogu slati i primati aplikacijske podatke u različitim formatima. Najpopularniji format koji se koristi u web aplikacijama je JSON.

## Literatura

- Yakov Fain, *Programiranje Java* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.d0d155cbd2ce41fab575d00763bbf669.programiranje-java.aspx)), Zagreb 2015.
