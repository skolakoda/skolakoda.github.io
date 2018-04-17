---
title: Problem vizantijskih generala
layout: lekcija-blockchain
permalink: /problem-vizantijskih-generala
image: https://www.mojafirma.rs/wp-content/uploads/2017/12/napad.jpg
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/SiegeofAntioch.jpeg/814px-SiegeofAntioch.jpeg)

***Najpoznatiji problem postizanja konsenzusa u distribuiranom sustavu jeste problem vizantijskih generala.***

## Priprema napada

`N` vojnih jedinica okružuje jedan dvorac i ima ga namjeru napasti. Svaku vojnu jedinicu predvodi po jedan general. Unutar dvorca nalazi se neprijateljska vojska koja brani dvorac. Cilj je postizanje dogovora između `N` generala o vremenu napada na dvorac.

Budući da se ovaj scenarij odvija u dobu kada nema mobitela i mogućnosti da generali nazovu jedni druge, oni dogovaraju vrijeme napada slanjem poruka koje prenosi glasnik na konju. Neki od generala su izdajice. Postoji najviše `f` od `N` generala koji su izdajnici. Ostali generali ne znaju koji su generali izdajnici i nema načina da to saznaju. Vojne jedinice lojalnih generala dovoljno su jake da preuzmu dvorac, ali uz uvjet da su njihove akcije koordinirane, da sve jedinice u isto vrijeme kreću u napad.

## Dejstvo izdajnika

Neka se, na primjer, unutar dvorca nalazi 300 vojnika i neka dvorac okružuje 5 vojnih jedinica s po 100 vojnika. Jedino general koji vodi 3. vojnu jedinicu je izdajnik, nazovimo ga G3. Prema tome, generali G1, G2, G4 i G5, odnosno vođe 1., 2., 4. i 5. jedinice lojalni su kraju. Kada bi svi lojalni generali napali dvorac u isto vrijeme njihovih 400 vojnika imalo bi šanse poraziti vojsku od 300 vojnika koja brani dvorac.

Cilj generala G3 je izbjeći jednako vrijeme napada svih lojalnih vojnih jedinica i
to može lako postići. Promotrimo sljedeći niz događaja:
1. G1 šalje poruku "Napad u 16 sati." prema G2,
2. G2 šalje tu istu poruku "Napad u 16 sati." prema G3,
3. G3 je izdajica, on mijenja sadržaj poruke u "Napad u 15 sati." i šalje je prema G4,
4. G4 šalje poruku "Napad u 15 sati." prema G5.

## Tok bitke

Nakon razmjene poruka generali G4 i G5 napadaju dvorac s 200 vojnika u 15 sati, nadajući se da će im se ostatak vojske pridružiti. Budući da su generali G1 i G2 uvjereni da će se napad održati u 16 sati njihove vojne jedinice ne priključuju se napadu u 15 sati. 200 vojnika generala G4 i G5 u 15 sati je nema šanse protiv vojnika koji brane dvorac i oni gube bitku. Također u 16 sati 200 vojnika iz 1. i 2. vojne jedinice gubi bitku od brojčano moćnije vojske branitelja.

![]({{page.image}})


Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
