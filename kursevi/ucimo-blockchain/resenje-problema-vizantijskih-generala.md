---
title: Rješenje problema Bizantskih generala
layout: lekcija-blockchain
permalink: /resenje-problema-vizantijskih-generala
---

Promatramo li distribuirani sustav koji koristi blockchain tehnologiju u terminima opisanog problema: Partneri predstavljaju generale. Digitalni podaci koje želimo upisati u blockchain su poruke među generalima. Blockchain ima ulogu pohrane dogovorenog vremena napada. Pojedini partner ne zna broj ostalih partnera kao ni koji su od partnera izdajnici. Izdajnicima je u interesu upisati u blockchain podatke koji nisu istiniti. **Algoritmi za postizanje konsenzusa** omogućuju partnerima da u ovakvim uvjetima budu sigurni da su podaci koji se upisuju u nove blokove točni te da su podaci prije zapisani u blockchain istiniti i nepromijenjeni.

## Rješenje I: dokaz o radu

Pretpostavimo da bizantski generali za dogovor oko vremena napada koriste blockchain i zapis novih informacija pomoću [*proof-of-work*](/dokaz-o-radu) algoritma. Svaki general kada prvi puta primi poruku s vremenom napada za koje još nije čuo pokrene na svom računalu izračunavanje *hash*-a koji sadrži informaciju o tom vremenu. Broj `cilj` od kojeg taj hash mora biti manji, kako bi postao zadovoljavajući za upisivanje zapisa u blockchain, je tako prilagođen da je potrebno 10 minuta da jedan general nađe rješenje.

Kada neki general nađe zadovoljavajući hash pošalje ga difuzijskom porukom ostalima u mreži, kako bi ga oni upisali u lokalnu kopiju blockchaina. Ostali generali tada počinju izračunavati novi hash koji u sebi sadrži prethodno izgenerirani hash. Na taj način generali žele izgraditi što dulji lanac s istim vremenom napada i poštuju pravilo da se u jednoj grani lanca nalaze samo *hash*-evi koji imaju u sebi zapisano jedno vrijeme napada. Ako neki general izdajnik želi upisati neko drugo vrijeme napada on mora potaknuti račvanje u blockchainu. No, budući da ima više generala odanih kralju, prema pravilu najduljeg lanca grana generala izdajnika će nakon nekog vremena biti ignorirana.

Nakon 2 sata, postoji lanac, odnosno dio blockchaina s 12 hash-eva s istim vremenom napada. Svaki general sada ima dokaz da se na izgradnju tog lanca potrošila određena količina računalne snage i može vjerovati da je vrijeme napada zapisano u tom lancu dogovoreno od strane svih generala.

## Rješenje II: dokaz o ulogu

Kod [*proof-of-stake*](/dokaz-o-ulogu) algoritma imamo sličnu situaciju. Razlika je u tome da novo vrijeme napada neće prvi objaviti nasumično odabrani general, koji je prvi izračunao zadovoljavajući hash, već onaj kojem kralj najviše vjeruje ili onaj koji ima vlasništvo nad najviše parcela u zemlji. Takav general ima najveći ugled i hash koji on mora izračunati mora zadovoljiti slabije kriterije od *hash*-eva koje moraju izračunati ostali generali. Nakon njega ostali generali kreću u izračunavanje novog hash-a koji sadrži isto vrijeme napada kao i prethodni. U tome najveće šanse za novi blok u lancu ima sljedeći general po ugledu.

Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
