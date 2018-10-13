---
title: "Tvrdo osveženje (<i>hard refresh</i>)"
layout: lekcija-html
permalink: /hard-refresh
---

**Često će se desiti da promenite nešto na vašoj stranici, ali kada je ponovo učitate, ona istane ista.**

Postoje slučajevi kada puko osveženje stranice sa `F5` nije dovoljno, zato što pregledač kešira, odnosno pamti na hard disku mnoge fajlove sa našeg sajta, radi povećanja brzine svakog narednog učitavanja.

Rešenje za to je *hard refresh*, odnosno tvrdo osvežavanje stranice, koje prvo briše sve keširane fajlove, a onda iznova sve učitava.

Prečica za tvrdo osvežavanje stranice je `Ctrl + Shift + R`.

## Vežba

Otvori *Network* tab u razvojnim alatkama pregledača. Nakon toga, više puta učitavaj stranicu sa `F5`. Videćeš da su mnogi resursi sivi, odnosno da je njihov status `304`, što znači da ih pregledač učitava iz keša, a ne sa interneta.

Sada uradi tvrdo osveženje sa `Ctrl + Shift + R`. Videćeš da su svi resursi u *Network* tabu ponovo učitani i da je njihov status sada `200`, odnosno da su uspešno stigli sa neta.
