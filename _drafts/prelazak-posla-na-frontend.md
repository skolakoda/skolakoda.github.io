---
title: Prelazak posla na frontend
layout: post
---

**Trend koji se kontinuirano nastavlja poslednjih pola decenije je prelazak poslovne logike na frontend. To znači da se na frontendu sada rade mnoge stvari koje su tradicionalno bile u nadležnosti serverske strane, odnosno backend programiranja.**

U početku, na web stranama bejahu male skripte, koje su služile da se nešto mrdne ili promeni boju. Izgledale su otprilike ovako:

```html
<p onclick="style.color='red'">
```

Pisane su uglavnom u HTML-u, jer nije bilo potrebe da se zbog par komandi pravi zaseban fajl. Od tada su prošle decenije, a sa svakom godinom skripte na frontendu su progresivno rasle.

proveriti šta znači progresivno?

## Projektovanje softvera

Danas se frontend developeri, a posebno posvećeni JS programeri, u potpunosti bave razvojem softvera. Kao i u drugim domenima (npr. desktop), primenjuje se objektno orjentisana metodologija, softver se projektuje pomoću UML klasa...

## Rutiranje

## Poslovna logika

MVD podela

## Validacija korisničkog unosa

Poruke izlaze direktno sa frontenda. Nekad su se, po pravilu, vraćale sa servera.

## Pretraga podataka

Filteri i živa pretraga... Nekada se pretraga podataka vršila uglavnom u bazi, a rezultati pretrage su isporučivani na web stranicu. Danas neretko podaci manjeg obima bivaju isporučeni na frontend, gde se vrši njihova pretraga daleko većom brzinom, praktično uživo, bez ikakvog slanja zahteva serveru.

Naravno, ovo ne važi za podatke milionskih obima, ali količina podataka koje se obrađuju na frontendu se neprestano uvećava, i već se uobičajeno pretražuju nizovi podataka sa desetinama hiljada članova.

## Komunikacija sa servisima

Tradicionalno je bekend komunicirao sa servisima, obrađivao dobijene podatke i servirao ih u vidu statičnih web stranica. Danas, osim ako nisu i pitanju tajni podaci, nema potrebe za tim dodatnim korakom. JS direktno komunicira sa servisima, dobavlja podatke koji su mu potrebni, obrađuje ih i prikazuje na stranici.

Takođe, korisničke podatke prosleđuje direktno servisima treće strane, bez potrebe za prolaskom preko bekenda.

## Dinamičke web stranice



## Čuvanje stanja aplikacije

Ako korisnik prolazi kroz proces registracije koji ima nekoliko koraka, i dođe do pucanja browsera, svaka aplikacija koja drži do sebe će sačuvati popunjena polja. Nekada se to radilo preko sesija na serveru, a danas u samom browseru, unutar `localStorage`-a.

## Login

Nekada se o prijavi brinuo isključivo server.

Šta se promenilo??

## Zaključak

U toku poslednje decenije, došlo je do naglog povećanja obima posla na frontendu. Danas se frontend aplikacije mogu porediti sa samostalnim mobilnim aplikacijama. Jedina bitna razlika je što frontend aplikacije nemaju ovlašćenja izvan pregledača, dok mobilne aplikacije mogu pristupati raznim delovima uređaja.

Prilikom izrade jednostraničnih aplikacija, oko 90% posla je na frontendu, dok se zadatak bekenda svodi na to da inicijalno posluži fajlove i eventualno prihvati korisničke podatke. Na aplikacijama takve vrste obično radi nekoliko frontendera i jedan bekend programer, koji nije stoprocentno angažovan.
