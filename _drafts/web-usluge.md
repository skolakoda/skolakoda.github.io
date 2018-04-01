# Rad s RESTful Web uslugama

Tokom devedesetih godina prošlog stoljeća Web se počeo masovno koristiti pa su novim Web aplikacijama pristupali milijuni ljudi širom svijeta. U isto vrijeme, bilo je dostupno mnoštvo zastarjelih aplikacija koje su se mogle koristiti samo unutar jedne tvrtke. Bile su napisane na raznim programskim jezicima i instalirane na brojnim vrstama računala. U takvom okruženju postojala je potreba da se podaci tvrtke izlože široj publici što je rezultiralo izradom standardnog sučelja za pristupanje podacima preko Weba.

Razlika između tradicionalnih JSP/Servlet/JSF aplikacija i Web usluga je u tome što Web usluge pružaju samo podatke i ne zanima ih kako izgleda korisničko sučelja. Na primjer, osiguravajuća kuća može ponuditi informacije o svojim proizvodima ili investicijski fond može izložiti svoje podatke kroz Web uslugu koja vraća XML dokumente. Klijenti nisu morali znati da se aplikacija osiguravajuće kuće izvršava na računalu tvrtke Sun Microsystems ili da investicijski fond koristi računala tvrtke IBM.

Java EE obuhvaća specifikaciju za dvije implementacije Web usluga JAX-WS i JAX-RS, o kojima ću govoriti u nastavku. Pogledajte još jednom arhitektonski dijagram u poglavlju 25 i obratite pažnju na to da sam ove API-je stavio na dva mjesta: jednom u prezentacijski sloj i jednom u sloj podataka. Web usluge promatrajte kao mehanizam za izlaganje korisnih podataka koji se mogu preuzimati preko protokola HTTP.

Tisuće javno dostupnih Web usluga nude različite API-je za uzimanje neke vrste podataka. Mnoštvo korisnih Web usluga pronaći ćete u imeniku Programmable Web, na adresi http://www.programmableweb.com/apis/directory . Velika poduzeća koriste privatne Web usluge za svoje interne potrebe, također.

## SOAP Web usluge

Prvi standard za objavljivanje i konzumiranje Web usluga bio je protokol Simple Object Access Protocol (SOAP) temeljen na XML-u. Web klijenti bi formirali HTTP zahtjeve i primali odgovore koristeći SOAP sintaksu.

Klijenti su morali znati samo popis usluga koje neka organizacija nudi, imena ponuđenih operacija (funkcija) i adresu krajnje točke na koju se moraju spojiti da bi mogli koristiti uslugu.

Imenik usluga može se objaviti pomoću jezika Web Services Description Language (WSDL) koji je prilično doslovan. U Java EE svijetu, SOAP poruke mogu se obraditi na način JAX-WS API-ja, bez potrebe za imenikom usluga.

Iako su SOAP Web usluge doslovne, i dalje se često koriste kao jednostavan način za integraciju sa softverskim proizvodima trećih proizvođača. Neke SOAP usluge su javno dostupne. Na primjer, Web stranica www.webservicex.net nudi opise i WSDL lokacije informacija i usluga kao što su vremenske prognoze, provjera adrese u SAD, pretvaranje vrijednosti valuta i cijene dionica. Možete ih integrirati u aplikaciju, ali sami morate osigurati korisničko sučelje koje će ih prikazivati.

## RESTful Web usluge

REST je kratica za representational state of transfer (reprezentativno stanje prijenosa). Web usluge koje se temelje na REST načelima nazivamo RESTful usluge. Za razliku od SOAP-a, REST nije protokol, već način (jednostavniji od SOAP-a) za razvoj Web usluga. dr. Roy Fielding definirao je REST načela u svojoj doktorskoj tezi:

- Svaki resurs na Webu ima jedinstven ID.
- Koriste se uniformna sučelja: HTTP `Get`, `Post`, `Put`, `Delete` i tako dalje.
- Resurs može imati više reprezentacija (tekst, JSON, XML, PDF i tako dalje).
- Zahtjevi su bez stanja – između zahtjeva se ne čuvaju podaci koji se odnose na
klijent.
- Resursi se mogu povezivati.
- Resursi se trebaju moći spremati u cache memoriju.
- REST aplikacija se može izraditi u slojevima

Jednostavnije rečeno resurs je svaki objekt kojem možete pristupiti korištenjem hiperveze. Svaki resurs ima uniformni identifikator resursa (URI). Na primjer `www.dice.com/yakovsresume` identificira jedinstveni resurs s mojim životopisom na lokaciji `www.dice.com`. Životopis se može čuvati na poslužitelju kao obična datoteka ili se može čuvati u bazi podataka i uzeti preko JDBC upita, ali se u svakom slučaju možete predstaviti (poslužiti) u više formata, kao što su PDF, XML ili JSON.

REST resursi moraju podržavati standardne HTTP zahtjeve bez stanja. Ako ste za SOAP koristili proizvoljna imena podržanih operacija (na primjer, getCityByZipCode), za REST koristite standardne HTTP metode kao što su `Get`, `Post`, `Put` i `Delete`.

Susreo sam se s brojnim web aplikacijama koje su koristile samo HTTP metode, `GET` za čitanje sadržaja na poslužitelju i `POST` za ažuriranje sadržaja ili skrivanje HTTP parametara unutar HTTP zaglavlja, ali REST je stroži kad je riječ o tome. U RESTful svijetu trebate koristiti `GET` za preuzimanje podataka, `POST` za izradu novih resursa, `PUT` za ažuriranje i `DELETE` za uklanjanje resursa.

Svaka od standardnih HTTP metoda ima određene karakteristike:

- `GET`: sigurnost, idempotencija, mogućnost spremanja u cache
- `PUT`: idempotencija
- `DELETE`: ne-idempotencija
- `POST`: Ništa od navedenog

Sigurnost znači da metoda ne mijenja resurs. Mogućnost spremanja u cache memoriju je jasna sama po sebi – klijentska aplikacija može spremiti rezultat u cache memoriju. Idempotencija znači da, bez obzira na to koliko puta pozovete metodu, rezultat će uvijek biti isti.

Klijent i poslužitelj mogu slati i primati aplikacijske podatke u različitim formatima. Najpopularniji format koji se koristi u web aplikacijama je JSON.


Izvor: Yakov Fain, *Programiranje Java* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.d0d155cbd2ce41fab575d00763bbf669.programiranje-java.aspx)), Zagreb 2015.
