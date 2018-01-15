---
title: Slučaj korišćenja
layout: lekcija-razvoj
permalink: /slucaj-koriscenja
image: /images/koncepti/oop/slucaj-koristenja.jpg
---

![]({{page.image}})

**Slučaj korišćenja (*use case*) predstavlja opis postupka interakcije između korisnika i sistema.**

Svaki slučaj korišćenja ima svoj jedinstveni cilj. Do tog cilja ne može se uvek doći samo na jedan način, tj. jednom putanjom. Stoga je uveden pojam scenarija. Scenario predstavlja niz sukcesivnih koraka kojima se opisuje interakcija korisnika sa sistemom.

Uobičajeno je da se slučajevi korišćenja pišu na prirodnom jeziku u obliku priče. Najpre se navodi osnovni, uspešni scenario u vidu numerisanih koraka, a zatim sva odstupanja od osnovnog scenarija (takođe u vidu numerisanih koraka) sa jasnim referisanjem na mesta povratka u osnovnom scenariju (ukoliko ih ima). Svaki korak predstavlja jedan deo interakcije. Opis koraka mora da bude jasan i da ukazuje na njegovog izvršioca. Korak pokazuje nameru učesnika, a ne način na koji se nešto ostvaruje.

## Primer: Kupovina proizvoda

Neka slučaj korišćenja *Kupovina proizvoda* modelira postupak kako kupac kupuje neki proizvod. Najpre treba napisati osnovni uspešan scenario. On sadrži uobičajene korake u kupovini. Nakon toga treba uočiti moguća odstupanja, bilo da je reč o mogućim greškama (pogrešno uneti podaci) ili o dodatnim mogućnostima. U datom primeru, u okviru proširenja, dodata su dva nova scenarija: jedan opisuje šta treba raditi ukoliko je kupac redovan, pa ima određene povlastice, dok drugi govori šta se dešava u slučaju kada kupac unese pogrešan broj kartice.

Slučaj korišćenja može da bude prilično složen. U tom slučaju je pogodno razložiti ga na više jednostavnijih slučajeva korišćenja, koji se onda uključuju u polazni slučaj.

### Slučaj korišćenja

Osnovni uspešan scenario:

1. Kupac pregleda katalog sa proizvodima.
2. Kupac iz kataloga bira proizvod koji hoće da kupi.
3. Kupac unosi podatke o isporuci (adresu i uslove isporuke).
4. Sistem prikazuje podatke o troškovima.
5. Kupac unosi podatke o platnoj kartici.
6. Sistem proverava podatke o načinu plaćanja.
7. Sistem potvrđuje prodaju.
8. Sistem šalje kupcu priznanicu elektronskom poštom.

Proširenja:

3a. Kupac je redovan.
  1. Sistem prikazuje podatke o isporuci, cenama, troškovima.
  2. Kupac potvrđuje ili menja vrednosti, povratak na korak 6.

6a. Podaci o platnoj kartici nisu ispravni.
  1. Sistem nudi kupcu mogućnost da ponovo unese podatke o kartici ili se rad prekida, povratak na korak 7.

## Dijagram slučajeva korišćenja

Svaki softverski sistem podržava veći broj opcija, što znači da se može koristiti na različite načine. Zato je prilikom njegovog modelovanja potrebno definisati veći broj slučajeva korišćenja. Osim sadržaja slučajeva korišćenja, važno je naglasiti i veze koje postoje između njih, kao i njihove izvršioce.

**Dijagram slučajeva korišćenja** predstavlja grafički prikaz skupa svih slučajeva korišćenja u jednom sistemu, ukazuje na granice sistema i njegovu interakciju sa spoljašnjim svetom.

![](/images/koncepti/oop/dijagram-slucajeva-koristenja.png)

Izvor: Violeta Tomašević, *Razvoj aplikativnog softvera*, Univerzitet Singidunum, Beograd, 2012.
