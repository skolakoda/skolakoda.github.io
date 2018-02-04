---
title: Binarno hash stablo
layout: lekcija-blockchain
permalink: /binarno-hash-stablo
image: /images/koncepti/podaci/binarno-hash-stablo.png
---

Svaki blok lanca u zaglavlju sadrži polje pod nazivom **korijen binarnog hash stabla**, koji omogućuje sažet prikaz svih zapisa u bloku ali i jednostavnu provjeru integriteta velikog skupa podataka.

**Binarno stablo** je konačan skup podataka istog tipa, koje zovemo čvorovi. Pri tome vrijedi:
- T je prazan skup (prazno stablo), ili
- postoji istaknuti čvor r koji zovemo korijen od T, a ostali čvorovi grade uređeni par (T<sub>L</sub>, T<sub>R</sub>) disjunktnih binarnih stabala.

**Binarno hash stablo** je binarno stablo u kojem su listovi, odnosno čvorovi bez djece, hash vrijednosti nekih podataka, a ostali čvorovi su nastali konkatenacijom hash-eva svoje djece te primjenom iste hash funkcije na taj podatak.

U Bitcoin sustavu listovi binarnog hash stabla su hash-evi svake pojedine transakcije u bloku. Kao hash funkcija koristi se SHA-256 primijenjena dva puta.

Pohranjivanjem korijena binarnog hash stabla u zaglavlje bloka dobivamo sažeti prikaz svih zapisa u bloku. Nadalje, poznavajući taj sažeti prikaz lako je odrediti pripada li neki zapis bloku, bez da imamo uvid u cijeli skup zapisa.

## Izgradnja hash stabla

![binarno-hash-stablo]({{page.image}})

Slika prikazuje izgradnju hash stabla u slučaju da bi u bloku bile zapisane četiri transakcije, nazovimo ih a, b, c i d. Prema strukturi binarnog hash stabla logično je da izgradnja tog stabla kreće od dna prema vrhu. Bitcoin sustav, kao i svaki drugi sustav koji koristi blockchain tehnologiju, ima strogo definiran format podataka koji se upisuju u blockchain. No, u hash stablo nisu zapisani ti podaci već hash-evi tih podataka. Pa tako `Ha` dobivamo na sljedeći način:

```
H a = SHA-256(SHA-256(a))
```

Listove stabla H b , H c , i H d izračunavamo analogno. Sljedeći korak je generiranje čvorova roditelja listova:

```
H ab = SHA-256(SHA-256(H a + H b )) i H cd = SHA-256(SHA-256(H c + H d ))
```

gdje operator + predstavlja konkatenaciju stringova. Nakon toga možemo izračunati hash koji zapisujemo u korijen stabla:

```
H abcd = SHA-256(SHA-256(H ab + H cd ))
```

Identičan algoritam izgradnje binarnog hash stabla koristi se za bilo koji parni broj transakcija zapisanih u bloku. Ako je u bloku zapisan neparan broj transakcija tada jednostavno dupliciramo zadnju transakciju kao što slika prikazuje:

![](/images/koncepti/podaci/binarno-hash-stablo-2.png)

Također, napomenimo da je veličina podataka zapisanih u korijenu stabla uvijek 32 bajta bez obzira na broj čvorova. Kasnije ćemo vidjeti da postoje čvorovi u sustavu koji lokalno ne pohranjuju čitav blockchain, već samo zaglavlja svih blokova. Hashiranje i primjena binarnih hash stabala ima dvojaku ulogu. Omogućuje provjeru pripadnosti zapisa bloku i lako identificiranje promjene nad podacima.

Čvor, koji nema pristup cijelom blockchainu, može odrediti sadrži li određeni blok neki zapis poznavajući samo taj zapis, odnosno njegov hash i korijen binarnog hash stabla. To određivanje se provodi pomoću autentikacijskog puta u binarnom hash stablu. Za svaki čvor binarnog stabla možemo odrediti njegovu razinu. Razina se određuje iz definicije koja kaže da je korijen razine 1, a da su razine djece nekog čvora razine n jednake n+1.

## Autentikacijski put

**Autentikacijski put** je konačan skup A čvorova binarnog hash stabla B za koje vrijedi:
- za svaku razinu stabla B, osim za prvu, postoji točno jedan čvor a koji pripada skupu A
- uz poznavanje još jednog lista stabla B koji ne pripada skupu A moguće je odrediti korijen binarnog hash stabla B.

Binarna hash stabla pomenutim čvorovima omogućuju provjeru integriteta podataka u bloku. Pogledajmo hash stablo sa slike i zamislimo da napadač iz nekog razloga želi promijeniti transakciju `b`. To bi utjecalo na izgled hasheva `H b` , `H ab` i `H abcd`. Ostali pouzdani čvorovi koji čuvaju kopiju blockchaina ili samo zaglavlja svih blokova mogu lako utvrditi da je došlo do promijene nad podacima u blockchainu.

Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
