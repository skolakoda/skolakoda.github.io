---
title: Šta je HTTP?
layout: lekcija-html
permalink: /http
image: /images/koncepti/web/zahtev-odgovor.png
---

![]({{page.image}})

**HTTP (*Hypertext Transfer Protocol*) predstavlja protokol namenjen prenosu informacija na webu.**

**Protokol** je skup tehnika i pravila koje koriste mrežni uređaji da bi preneli sadržaj iz jedne mrežne lokacije na drugu. HTTP je namenjen komunikaciji i prenosu [hipermedije](https://en.wikipedia.org/wiki/Hypermedia) u šta spada i [hipertekst](https://en.wikipedia.org/wiki/Hypertext).

**Hipertekst** je posebno struktuiran tekst koji pored sadržaja teksta ima i dodatna značenja (na primer kojom bojom, stilom, poravnanjem, fontom, veličinom i sl. da se neki sadržaj prikaže korisniku). Kako je svaki web sajt inicijalno baziran na hipertekstu (što je jezik HTML), HTTP predstavlja ključni element u komunikaciji i razmeni podataka između pregledača i servera, na kome se nalaze svi potrebni elementi web stranice.

## HTTP zahtev i odgovor

Kako je ova komunikacija definisana u više koraka, bazični princip rada HTTP je **zahtev/odgovor**. To znači da pregledač svaki put kada nešto traži od servera za prikaz strane (npr. sliku, CSS, zvuk... ), pravi http **zahtev** (*request*). Putem HTTP-a se ovaj zahtev isporučuje serveru, definisanom unutar URL adrese, a server nakon obavljenog posla šalje **odgovor** (*response*). Ovaj postupak se ponavlja onoliko puta koliko pregledač ima potrebe da zahteva fajlove ili podatke od servera.

Razvojem HTTP-a je između ostalog koordinirao i [W3C](http://www.w3.org/) (*World Wide Web Consortium*), koji je posebno bitan za sve segmente web razvoja, obzirom da definiše veliki broj pravila i standarda web aplikacija, arhitekturu, tehnologiju, servise, pregledače i alate u domenu weba.

## HTTP metode

Dve glavne HTTP metode, i jedine dve koje HTML podržava, su:

- GET (čitanje resursa preko mreže)
- POST (slanje resursa preko mreže)

GET metodu koristimo za dobavljanje svih resursa sa mreže (slika, skripti, fajlova), a POST za slanje korisničkog unosa serveru.