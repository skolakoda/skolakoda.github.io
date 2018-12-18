---
title: "Prelivanje sadržaja (<i>overflow</i>)"
layout: lekcija-html
permalink: /html-overflow
---

**Ako ne zadamo visinu, ona će se prilagoditi sadržaju elementa. Ako zadamo manju visinu od potrebne, sadržaj će se prelivati. Isto važi i za širinu.**

HTML elementi se, obično, prilagođavaju sadržaju koji je smešten unutar njih. Među­tim, ako veličinu elementa ograničimo određenom ili maksimalnom veličinom, a zatim stavimo sadržaj koji se ne uklapa, pregledač treba da odluči šta da radi sa viškom. Kada postoji višak teksta koji se ne može uklopiti u okvir, tekst prelazi ivicu i spušta se ka donjem delu stranice.

Pomoću CSS svojstva `overflow` možemo podesiti kako će pregledač reagovati u ovakvoj situaciji. Vrednosti su `visible` (podrazumevano), `hidden`, `scroll`, `auto` i `inherit`.

Kada je prelivanje stavljeno na `hidden`, višak koji se ne uklopi u okvir neće biti prikazan. Svojstva `scroll` i `auto` dodaju klizne trake, koje omogućavaju korisnicma da vide ceo sadržaj okvira. Na `scroll` se klizne trake uvek prikazuju, dok će na `auto` biti prikazane po potrebi. Kada je prelivanje vidljivo, višak se ne uzima u obzir prilikom raspoređivanja, pa preklapa druge elemente stranice.

{:.uokvireno.ideja}
Kada ručno menjamo veličinu elemenata, moramo uvek imati na umu moguće prelivanje.
