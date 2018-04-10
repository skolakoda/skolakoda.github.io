---
title: Dokaz o ulogu u Peercoin sustavu
layout: lekcija-blockchain
permalink: /dokaz-o-ulogu-peercoin
---

Dok dokaz o radu podrazumijeva korištenje računalne snage kako bi se dodao novi blok u blockchain, dokaz o ulogu omogućava kreiranje novog bloka onim korisnicima koji posjeduju određenu količinu novca u sustavu. Kao i u slučaju dokaza o radu, validatori se natječu tko će prvi izračunati zadovoljavajući *hash*. Generiranje novog bloka uključuje slanje *Peercoin*-a samom sebi, kako bi se dokazalo da validator posjeduje određeni iznos novca.

## Starost novca

**Najvažnija veličina koja se koristi u Peercoin sustavu je starost novca**. Starost novca je definirana kao umnožak količine novca i dana koji taj novac stoji u novčaniku nepotrošen. Ako neki partner u sustavu posjeduje 80 Peercoin-ova koje nije potrošio u proteklih 10 dana tada je starost tog novca 800 dana. U trenutku kada partner uplati taj novac nekom drugom partneru u sustavu (ili sam sebi) kažemo da je starost novca uništena odnosno starost je jednaka 0.

Čvorovi koji imaju mogućnost uključivanja novih blokova u blockchain nazivaju se validatori. Validatori na neki način daju svoj novac kao polog za obavljanje *proof-of-stake* algoritma. Postoji minimalni iznos jedinica kriptovalute koji čvor treba posjedovati kako bi postao kandidat za validatora. Taj minimalni iznos se naziva `cilj` i u sustavu se prilagođava tako da vrijeme između dodavanja dva nova bloka bude otprilike jednako. Primijetimo, kod *proof-of-work* algoritma `cilj` je predstavljao broj u heksadecimalnom zapisu pomoću kojeg se definirala težina izračunavanja zadovoljavajućeg *hash*-a.

Kod *proof-of-stake* algoritma, broj od kojeg zadovoljavajući hash mora biti manji se mijenja kod svakog novog bloka i za svaki čvor je drugačiji. Glavnu ulogu u definiranju težine pronalaska zadovoljavajućeg *hash*-a imaju spomenuti `cilj` i starost novca prema sljedećoj formuli:


```
zadovoljavajući hash < starost novca * cilj.
```

Pogledajmo primjer kada se dva validatora V1 i V2 natječu u kreiranju zadovoljavajućeg hash-a. Neka validator V1 u novonastali blok uključuje transakciju kojom sebi uplaćuje 100 *Percoin*-a starih 10 dana, a validator V2 kao dokaz da posjeduje dovoljno novaca za rudarenje sebi uplaćuje 900 *Peercoin*-a starosti 7 dana. Budući da je cilj u datom trenutku jednak za sve validatore, V1 mora proizvesti hash manji od broja `1000 * cilj`, a V2 hash manji od `6300 * cilj`. Naravno, V2 ima puno veće šanse za pobjedu u ovoj rundi dodavanja bloka jer se natjecao s novcem veće starosti. Ako validator V2 zaista pobjedi i njegov blok bude uključen, blockchain transakcija kojom sam sebi uplaćuje 900 Peercoin-a također postaje valjana i taj novac sada ima starost 0. Uništavanje starosti novca ima za posljedicu to da validator V2 gotovo pa nema šanse za pobjedu pri uključivanju sljedećih nekoliko blokova.

Starost novca u Peercoin sustavu ima još jednu ulogu. Ako dođe do račvanja u blockchainu, ukupna starost novca u cijelom lancu određuje na koju granu treba nastaviti dodavati blokove. Kako svaka transakcija u bloku sadrži informaciju o starosti novca, sumiranjem tih vrijednosti lako je izračunati ukupnu starost novca po bloku i u cijelom lancu.


Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
