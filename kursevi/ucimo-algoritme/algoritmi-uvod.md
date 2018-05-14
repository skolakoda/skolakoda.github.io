---
title: Uvod u algoritme
layout: lekcija-algoritmi
permalink: /algoritmi-uvod
image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2010-10-30_Geeste%2C_Moormuseum_032_%285207510676%29.jpg/1024px-2010-10-30_Geeste%2C_Moormuseum_032_%285207510676%29.jpg
---

![]({{page.image}})

***Algoritam je efektivna procedura za rešavanje problema u konačnom broju koraka.***

Svrha svakog algoritma jeste rešavanje određenog problema. Svaki problem odlikuju dve karakteristike: **ulazni i izlazni podaci**. Ovi podaci jesu matematički objekti koji pripadaju nekom konačnom ili prebrojivom skupu, dok se sam problem sastoji u iznalaženju određene uzročno-posledične veze između ulaza i izlaza, metodologije kojom se ulazne veličine transformišu u željeni rezultat.

Sa stanovišta informatike, najinteresantniji su oni problemi čije se rešavanje (transformacija ulaza u izlaz) odvija na automatizovan, ”jednoobrazan”, rutinski način. Drugim rečima, posmatramo one probleme koji se mogu rešiti primenom standardizovanih postupaka računanja, što u krajnjoj liniji omogućava da se posao rešavanja problema prepusti računskim mašinama. To znači da tragamo za klasom funkcija koje po svojim svojstvima odgovaraju kriterijumima algoritamske izračunljivosti. Te funkcije najčešće označavamo terminom **izračunljive funkcije** (eng. *computable functions*).

## Svojstava algoritma

Donald E. Knuth u uvodu svoje izuzetno uticajne monografije *The Art of Computer Programming*, ističe pet ključnih svojstava intuitivnog pojma algoritma:

- ulaz
- izlaz
- konačnost
- definitnost (određenost)
- efektivnost

Prve dve osobine — **postojanje uzlaza i izlaza** — govore zapravo o tome da su algoritmi sredstvo za rešavanje problema. Na primer, u [Euklidovom algoritmu](/euklidov-algoritam) ulaz se sastoji od dva pozitivna cela broja, dok je izlaz njihov najveći zajednički delilac.

U načelu, od algoritma očekujemo da bude niz intuitivno jasnih koraka. Zahtev **konačnosti** postulira da broj tih elemenatrnih koraka mora biti konačan. U tome se algoritam razlikuje od procesa: proces može biti jasno definisan, ali beskonačan niz koraka. Na primer, iterativni postupak za rešavanje neke jednačine (kao što je to Njutnov postupak) nije algoritam, već je u pitanju beskonačan proces računanja. Međutim, definisanjem margine greške, on postaje numerički algoritam za približno rešavanje posmatrane jednačine, jer konvergencija postupka garantuje da će se nakon konačno mnogo iteracija doći do zadovoljavajućeg približnog rešenja.

**Definitnost** izražava potrebu da svi pomenuti koraci algoritma budu precizno i nedvosmisleno formulisani, te da su lišeni svih oblika subjektivnosti. Između ostalog, definitnost jeste jedna od glavnih razlika između algoritma i kulinarskog recepta. Očekujemo da koraci algoritma budu do te mere egzaktno određeni da se oni bez ikakvih daljih interpretacija mogu sprovesti na računaru. Programski jezici predstavljaju tipičan primer sredstva kojim se ostvaruje zahtev za definitnošću.

Najzad, očekujemo da algoritmi budu **efektivni**: koraci koji čine algoritam moraju biti dovoljno elementarni, a ceo tok algoritma (bar u načelu) lako proverljiv od strane čoveka.


Izvor: Igor Dolinka, *Kratak uvod u analizu algoritama*, Novi Sad, 2008.
