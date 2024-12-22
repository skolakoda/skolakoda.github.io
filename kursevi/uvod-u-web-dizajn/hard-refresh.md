---
title: "Tvrdo osvežavanje (<i>hard refresh</i>)"
layout: lekcija-html
permalink: /hard-refresh
---

**Često se dešava da promenite nešto na stranici, ali kada je ponovo učitate, ona istane ista.**

Postoje slučajevi kada puko osveženje stranice sa `F5` nije dovoljno. Pregledač redovno kešira, odnosno pamti na hard disku mnoge fajlove sa našeg sajta. Potom učitava keširane fajlove, radi povećanja brzine učitavanja.

Rešenje za to je *hard refresh*, odnosno tvrdo osvežavanje stranice, koje prvo briše sve keširane fajlove, a onda iznova sve učitava.

Prečica za tvrdo osvežavanje stranice je `Ctrl + Shift + R`.

## Vežba

Otvori *Network* tab u razvojnim alatkama pregledača. Nakon toga, više puta učitaj stranicu sa `F5`. Videćeš da su mnogi resursi sivi i da je njihov status `304`, što znači da ih pregledač učitava iz keša, a ne sa interneta.

Sada uradi tvrdo osveženje sa `Ctrl + Shift + R`. Videćeš da su svi resursi u *Network* tabu ponovo učitani i da je njihov status `200`, odnosno da su uspešno stigli sa neta.

![](https://i.stack.imgur.com/gCu9x.png)
