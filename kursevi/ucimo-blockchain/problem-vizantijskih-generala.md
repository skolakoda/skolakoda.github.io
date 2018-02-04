---
title: Problem vizantijskih generala
layout: lekcija-blockchain
permalink: /problem-vizantijskih-generala
image: https://www.mojafirma.rs/wp-content/uploads/2017/12/napad.jpg
---

***Najpoznatiji problem postizanja konsenzusa u distribuiranom sustavu jeste problem vizantijskih generala.***

## Opis problema

![]({{page.image}})

`N` vojnih jedinica okružuje jedan dvorac i ima ga namjeru napasti. Svaku vojnu jedinicu predvodi po jedan general. Unutar dvorca nalazi se neprijateljska vojska koja brani dvorac. Cilj je postizanje dogovora između `N` generala o vremenu napada na dvorac. 

Budući da se ovaj scenarij odvija u dobu kada nema mobitela i mogućnosti da generali nazovu jedni druge, oni dogovaraju vrijeme napada slanjem poruka koje prenosi glasnik na konju. Neki od generala su izdajice. Postoji najviše `f` od `N` generala koji su izdajnici. Ostali generali ne znaju koji su generali izdajnici i nema načina da to saznaju. Vojne jedinice lojalnih generala dovoljno su jake da preuzmu dvorac, ali uz uvjet da su njihove akcije koordinirane, da sve jedinice u isto vrijeme kreću u napad.

Neka se, na primjer, unutar dvorca nalazi 300 vojnika i neka dvorac okružuje 5 vojnih jedinica s po 100 vojnika. Jedino general koji vodi 3. vojnu jedinicu je izdajnik, nazovimo ga G3. Prema tome, generali G1, G2, G4 i G5, odnosno vođe 1., 2., 4. i 5. jedinice lojalni su kraju. Kada bi svi lojalni generali napali dvorac u isto vrijeme njihovih 400 vojnika imalo bi šanse poraziti vojsku od 300 vojnika koja brani dvorac.

Cilj generala G3 je izbjeći jednako vrijeme napada svih lojalnih vojnih jedinica i
to može lako postići. Promotrimo sljedeći niz događaja:
1. G1 šalje poruku "Napad u 16 sati." prema G2,
2. G2 šalje tu istu poruku "Napad u 16 sati." prema G3,
3. G3 je izdajica, on mijenja sadržaj poruke u "Napad u 15 sati." i šalje je prema G4,
4. G4 šalje poruku "Napad u 15 sati." prema G5.

Nakon razmjene poruka generali G4 i G5 napadaju dvorac s 200 vojnika u 15 sati, nadajući se da će im se ostatak vojske pridružiti. Budući da su generali G1 i G2 uvjereni da će se napad održati u 16 sati njihove vojne jedinice ne priključuju se napadu u 15 sati. 200 vojnika generala G4 i G5 u 15 sati je nema šanse protiv vojnika koji brane dvorac i oni gube bitku. Također u 16 sati 200 vojnika iz 1. i 2. vojne jedinice gubi bitku od brojčano moćnije vojske branitelja.

## Rješenje problema Bizantskih generala

Promatramo li distribuirani sustav koji koristi blockchain tehnologiju u terminima opisanog problema: Partneri predstavljaju generale. Digitalni podaci koje želimo upisati u blockchain su poruke među generalima. Blockchain ima ulogu pohrane dogovorenog vremena napada. Pojedini partner ne zna broj ostalih partnera kao ni koji su od partnera izdajnici. Izdajnicima je u interesu upisati u blockchain podatke koji nisu istiniti. **Algoritmi za postizanje konsenzusa** omogućuju partnerima da u ovakvim uvjetima budu sigurni da su podaci koji se upisuju u nove blokove točni te da su podaci prije zapisani u blockchain istiniti i nepromijenjeni.

### Rješenje: dokaz o radu

Pretpostavimo da bizantski generali za dogovor oko vremena napada koriste blockchain i zapis novih informacija pomoću [*proof-of-work*](/dokaz-o-radu) algoritma. Svaki general kada prvi puta primi poruku s vremenom napada za koje još nije čuo pokrene na svom računalu izračunavanje *hash*-a koji sadrži informaciju o tom vremenu. Broj `cilj` od kojeg taj hash mora biti manji, kako bi postao zadovoljavajući za upisivanje zapisa u blockchain, je tako prilagođen da je potrebno 10 minuta da jedan general nađe rješenje.

Kada neki general nađe zadovoljavajući hash pošalje ga difuzijskom porukom ostalima u mreži, kako bi ga oni upisali u lokalnu kopiju blockchaina. Ostali generali tada počinju izračunavati novi hash koji u sebi sadrži prethodno izgenerirani hash. Na taj način generali žele izgraditi što dulji lanac s istim vremenom napada i poštuju pravilo da se u jednoj grani lanca nalaze samo *hash*-evi koji imaju u sebi zapisano jedno vrijeme napada. Ako neki general izdajnik želi upisati neko drugo vrijeme napada on mora potaknuti račvanje u blockchainu. No, budući da ima više generala odanih kralju, prema pravilu najduljeg lanca grana generala izdajnika će nakon nekog vremena biti ignorirana.

Nakon 2 sata, postoji lanac, odnosno dio blockchaina s 12 hash-eva s istim vremenom napada. Svaki general sada ima dokaz da se na izgradnju tog lanca potrošila određena količina računalne snage i može vjerovati da je vrijeme napada zapisano u tom lancu dogovoreno od strane svih generala.

### Rješenje: dokaz o ulogu

Kod [*proof-of-stake*](/dokaz-o-ulogu) algoritma imamo sličnu situaciju. Razlika je u tome da novo vrijeme napada neće prvi objaviti nasumično odabrani general, koji je prvi izračunao zadovoljavajući hash, već onaj kojem kralj najviše vjeruje ili onaj koji ima vlasništvo nad najviše parcela u zemlji. Takav general ima najveći ugled i hash koji on mora izračunati mora zadovoljiti slabije kriterije od *hash*-eva koje moraju izračunati ostali generali. Nakon njega ostali generali kreću u izračunavanje novog hash-a koji sadrži isto vrijeme napada kao i prethodni. U tome najveće šanse za novi blok u lancu ima sljedeći general po ugledu.

Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
