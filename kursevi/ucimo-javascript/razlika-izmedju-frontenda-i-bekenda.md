---
title: Koja je razlika između frontenda i bekenda?
layout: lekcija-js
author: damjan
permalink: /razlika-izmedju-frontenda-i-bekenda
---

***Pitao me jedan od polaznika koja je razlika između frontenda i bekenda? Pokušao sam da mu objasnim, ali je zvučalo previše komplikovano. To me je nateralo da sednem i razmislim kako jednostavno preneti ove pojmove.***

Ukratko, prednji kraj weba (*front-end*) je stranica u našem pregledaču, a zadnji kraj (*back-end*) mesto sa koga ta stranica dolazi. Stranica, naravno, u naš pregledač (*browser*) ne dolazi sama, već isključivo ako je pozovemo, to jest ako ukucamo njenu adresu ili kliknemo na link.

## Uređaj koji služi i uređaji koji su usluženi

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/800px-Client-server-model.svg.png)

Odnos [zadnjeg i prednjeg kraja](https://en.wikipedia.org/wiki/Front_and_back_ends) weba je veoma sličan odnosu [servera i klijenta](https://en.wikipedia.org/wiki/Client%E2%80%93server_model). Back-end uglavnom možemo poistovetiti sa serverskom stranom, a front-end sa klijentskom.

Server možemo zamisliti kao udaljeni računar na kome se nalazi naš sajt, a koji se najčešće nalazi u Americi (oko 60% servera za sajtove iz Srbije se nalaze u SAD, oko 30% u Evropi, i 10% u Srbiji). Server (ili služavnik) danonoćno služi web stranice svim zainteresovanim uređajima - mobilnim telefonima, tabletima, računarima. Oni svi su njegovi klijenti.

Server je jedan, a klijenata je mnogo (za prosečan sajt je dovoljan jedan server, osim za velike sisteme). Ako nešto promenimo na klijentu (npr. boju pozadine u pregledaču), to vidimo samo mi, ali ako promenimo na serveru, to vide svi.

Server nema ekran, već samo kućište, ima posebno instaliran i pokrenut program i mora biti stalno upaljen kako bi naš sajt bio stalno dostupan klijentima.

Poput ugostiteljskog radnika na vratima restorana, server dočekuje mušterije na određenom ulazu računara ([portu](https://en.wikipedia.org/wiki/Port_(computer_networking))), sluša njihove zahteve i služi im stranice koje su tražili. Sve to, naravno, radi poštujući [protokol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) lepog ponašanja na webu.

## Lokalni server

Oni koji rade sa severom znaju da ne mora biti udaljen, može se nalaziti u istoj prostoriji, pa i na istom računaru kao klijentski program.

To zna da zbuni web developere. Kada na istom računaru pokrenemo i program koji servira i program koji čita stranice, teže razlikujemo ko služi a ko biva uslužen, i na kom se kraju izvršavaju naše skripte.

## Stalne i menjajuće stranice

![](https://cdn-images-1.medium.com/max/1349/1*XK_dfIrxW0UyoDy2Ja9z-A.png)

Stranica koju tražimo može unapred postojati na serveru, i mi je dobijamo takvu kakva je (*statična*, poput stranice knjige), ali može biti i iznova sastavljena za svakog posetioca ponaosob (*dinamična*). Tako na istoj adresi možemo gledati potpuno drugačiji sadržaj. Najpoznatiji primer je *facebook*, koji svakome prikazuje ono što želi da vidi. Dakle, sadržaj se *dinamički* kreira. Ovo se tradicionalno obavlja na serveru, ali može i u browseru.

***Za dinamičke strane važi Heraklitova izreka: "Ne možeš dva puta ući u istu reku."***

Ako sa servera dobijamo unapred kreirane stranice, onda server samo služi. Ali ako se sadržaj strane dinamički kreira od raznih podataka, onda ima programiranja na serverskoj strani. Primeri su spisak najčitanijih članaka (blog), ili video specifičan za našu zemlju (youtube), ili teme koje su individualno prilagođene (društvene mreže). Svi ti podaci se ogromnom brzinom prikupljaju sa raznih strana (najčešće iz baza podataka), filtriraju, obrađuju, međusobno slažu u smislenu celinu i tek onda šalju našem pregledaču.

## Programiranje zadnjeg i prednjeg kraja

***Razlika između bekend i frontend programiranja se svodi na to gde se izvršavaju naše skripte. Serverske skripte se prvo izvrše na serveru, pa se servira stranica kao njihov rezultat, a frontend skripte se serviraju zajedno sa stranicom, pa se izvrše u browseru. To nosi neke mogućnosti i neka ograničenja.***

### Mogućnost izbora jezika

Na serveru, kao i na kućnom računaru, možemo instalirati i koristiti bilo koji programski jezik. Unutar browsera moramo koristiti isključivo Javaskript, jer browseri samo taj jezik podržavaju.

### Pristup hard disku

Kada programiramo u browseru, naš program je ograđen neprobojnim zidom - sve što radimo ostaje u pregledaču, ni jedan program se ne može probiti izvan. Nemamo pristup hard disku, što znači da ne možemo programski otvoriti neki fajl, izmeniti mu sadržaj i sačuvati ga. Ovo ograničenje je sasvim logično, jer bilo bi suludo kada bi naš program mogao da iskoči iz pregledača i ljudima menja fajlove po hard disku.

Kada programiramo na serveru, uglavnom imamo pristup hard disku, ali to opet zavisi od ovlaštenja kojima raspolažemo. Ako je server pokrenut na našem računaru, možemo raditi šta god želimo. Ako smo negde zakupili hosting, uglavnom dobijemo ograničen prostor i ograničene mogućnosti (npr. ne možemo instalirati novi program i slično).

### Trajnost podataka

Još jedna bitna razlika je trajnost podataka - podaci u pregledaču traju dok korisnik ne osveži stranicu ili obriše keš. Podaci na serveru su trajno pohranjeni, na hard disku ili u bazama podataka.

### Interakcija

Jedan od glavnih razloga iz kojih se ljudi opredeljuju za razvoj frontenda je interakcija. Za programere se serverske strane, interakcija sa korisnikom se odvija tako što korisnik popuni neka polja, ili izabere neke kriterijume, pošalje podatke ka serveru (često hiljadama kilometara udaljenom), nakon čega mu sa servera stigne nova stranica ili poruka.

Sa druge strane, na frontendu program "osluškuje" šta korisnik radi. Kada skrolujemo stranicu na dole, zaglavlje se smanji, a novi elementi se pojave. Kad pređemo sliku mišem, ona se poveća. Kada okrenemo tablet, slike se preslože. Dakle, na frontendu se pravi sve ono što stranici daje život, od prostih ponašanja do interaktivnih animacija.

### Opterećenje servera ili klijenta

![serveri](https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Wikimedia_Foundation_Servers-8055_35.jpg/1024px-Wikimedia_Foundation_Servers-8055_35.jpg)

Ako na serveru izvršavamo mnogo operacija na svaki klijentski zahtev, veoma brzo ćemo preopteretiti server. Zato postoji tendencija da se deo posla prebaci na klijenta, odnosno da se deo aplikacije izvrši u browseru.

Vrhunac ove tendencije su jednostranične aplikacije, koje se u potpunosti izvršavaju na frontendu. To značajno rasterećuje server, koji samo služi fajlove, ali neretko preopterećuje browser, koji može pući usled zahtevnih skripti.

Odluka o opterećenju servera ili klijenta umnogome zavisi od resursa kojima raspolažemo. Ako imamo jeftin hosting, dobro je rasteretiti server što više moguće. S druge strane, ako imamo maltene neograničene resurse na serveru, dobro je rasteretiti korisnički uređaj.

## Za kraj...

Ima tu još mnogo da se priča, oko bezbednosti, komunukacije sa bazama podataka i slično, ali nadam se da je za uvodni tekst i ovo dovoljno.

P.s. Ako nešto nisam dobro objasnio, slobodno ostavite komentar. Hvala.
