---
title: Lenjo učitavanje
layout: lekcija-razvoj
permalink: /lenjo-ucitavanje
image: /images/koncepti/lazy-loading.png
---

![]({{page.image}})

**Lenjo učitavanje (*lazy loading*) je obrazac dizajna koji se koristi za optimizaciju učitavanja podataka, tako da se podaci učitavaju samo kada su nužni, a ne unapred.** Ovaj pristup može poboljšati performanse aplikacije, posebno kada se radi o velikim količinama podataka. 

Iako lenjo učitavanje može poboljšati performanse, dodaje i složenost programu, pa se preporučuje samo kada je zaista potrebno.

## Upotreba

Lenjo učitavanje je korisno kada je učitavanje podataka skupo (u smislu vremena ili resursa) i kada se očekuje da podaci možda neće biti potrebni odmah. Na primer, ako se podaci koriste samo u određenim situacijama ili interakcijama sa korisnikom, lenjo učitavanje može pomoći da se izbegne nepotrebno učitavanje.

Obrazac je uobičajen u igricama, gde se nivoi ili delovi nivoa ne učitavaju unapred nego kada igrač stigne do njih. Obrazac je čest i u web aplikacijama, gde korisnik inicijalno vidi par stavki, nakon čega dobija više skrolovanjem ili klikom na "Prikaži više".

## Literatura

- Martin Fowler, *Patterns of Enterprise Application Architecture*