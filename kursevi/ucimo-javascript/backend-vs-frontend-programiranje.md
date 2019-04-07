---
title: Backend vs. frontend programiranje
layout: lekcija-js
author: damjan
permalink: /backend-vs-frontend-programiranje
---

**Razlika između bekend i frontend programiranja se svodi na to gde se izvršavaju naše skripte. Serverske skripte se prvo izvrše na serveru, pa se servira stranica kao njihov rezultat, a frontend skripte se serviraju zajedno sa stranicom, pa se izvrše u browseru.**

Oba izbora nose neke mogućnosti i neka ograničenja.

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
