---
title: Struktura blockchain bloka
layout: lekcija-blockchain
permalink: /struktura-blockchain-bloka
---

Blockchain se kao što mu samo ime govori sastoji od blokova. Blok je struktura podataka u kojoj su zapisane digitalne informacije koje se dijele putem blockchaina. Iz tablice vidimo da se jedan blok sastoji od zaglavlja u kojem su upisani metapodaci te liste digitalnih informacija varijabilne dužine:

Veličina | Naziv | Opis
-------- |-------| -----
4 bajta | Veličina bloka | Veličina bloka u bajtovima
80 bajtova | Zaglavlje bloka | Meta-podaci o bloku
1-9 bajtova | Brojač zapisa | Koliko zapisa sadrži blok
Varijabilno | Zapisi | Zapisi pohranjeni u bloku

## Zaglavlje bloka

Zaglavlje svakog bloka sastoji se od 80 bajtova podataka koji služe kao dodatne tehničke informacije o bloku i povezivanju blokova u lanac. Struktura zaglavlja bloka dana je u tablici:

Veličina | Naziv | Opis
-------- |-------| -----
4 bajta | Verzija | Verzija protokola u vrijeme nastajanja bloka (specifično za Bitcoin)
32 bajta | Hash prethodnog bloka | Referenca na prethodni blok u lancu koji još nazivamo roditelj bloka
32 bajta | Korijen binarnog hash stabla | Kriptografski hash koji sadrži informacije o svim zapisima u bloku
4 bajta | Vremenska oznaka | Vrijeme kada je blok kreiran i uključen u blockchain
4 bajta | Težinska oznaka | Težina algoritma čije je rješenje potrebno za uključivanje bloka u blockchain
4 bajta | *Nonce* | Broj pomoću kojeg je riješen algoritam za uključivanje bloka u blockchain

**Hash prethodnog bloka** predstavlja rezultat dvostruke primjene SHA-256 hash funkcije nad zaglavljem prethodnog bloka u lancu. Hash bloka, koji je zapravo hash zaglavlja bloka, je jedinstveni identifikator svakog pojedinog bloka. Primijetimo, hash bloka zapravo nije dio strukture bloka. On se izračunava na strani svakog čvora kada čvor ima potrebe za tim, na primjer kada primi novi blok koji je uključen u lanac. Također, u svrhu vremenske uštede čvor može održavati zasebnu bazu podataka u kojoj su spremljeni hash-evi blokova.

**Vremenska oznaka** predstavlja vrijeme kada je blok dodan u lanac. 

**Težinska oznaka** i ***nonce*** su meta-podaci koji se koriste prilikom dodavanja bloka u lanac. 

**Korijen binarnog hash stabla** predstavlja informaciju dobivenu od svih zapisa u bloku.

 
Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
