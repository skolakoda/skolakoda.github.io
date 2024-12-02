---
title: Konačni automat
layout: lekcija-razvoj-igara
permalink: /konacni-automat
---

![](/images/razvoj-igara/fsm_enemy_brain.png)

**Konačni automat ili mašina konačnih stanja (*finite-state machine*, FSM) je logički model koji se često koristi za ponašanje neprijatelja u igrama. Sastoji se od konačnog broja stanja i akcija koje ih povezuju.**

Kada pravimo automat konačnih stanja, stanja znamo unapred (jer su konačna). Samo jedno stanje može biti aktivno, pa mašina mora preći iz jednog stanja u drugo da bi izvršila različite radnje.

## Sastojci

Konačni automat čine:
- **stanja** u kojima mašina može biti; istovremeno može biti u samo jednom.
- **ulazi** odnosno događaji koji se šalju mašini.
- **prelazi** koji su povezani sa ulazom i ukazuju na sledeće stanje.

![siege-tank](/images/razvoj-igara/siege-tank.jpg)

<small>U igri Starcraft, *siege tenk* ne može direktno preći iz opsade u kretanja. Prvo mora promeniti stanje.</small>

## Simuliranje neodređenosti

Većina igara je deterministička; što znači da znamo kako će neprijatelji reagovati. Ako ne vide igrača, patroliraju. Ako ga vide, napadaju. Možemo simulirati nepredvidivu logiku tako što ćemo promeniti stanje nasumično. Na primer, ponekad neprijatelj može da upotrebi granatu u odnosu na pištolj, ili da odmah napadne ne čekajući alarm... Ova nasumičnost čini mašinu stanja nedeterminističkom, što znači da znamo sva stanja, ali ne i puteve između njih.

## Vizuelizacija

Mašina stanja može biti predstavljena grafikonom, gde su čvorovi (*nodes*) stanja, a grane (*edges*) prelazi. Mašina stanja takođe može biti predstavljena tabelarno.

## Ponovna upotreba

Velika prednost mašine stanja je ponovna upotreba za različita stvorenja. Na primer, stanja poput patroliranja ili napada, a uz određenu parametrizaciju, možemo koristiti za razne vrste stvorenja.

## Literatura

- Fernando Bevilacqua, [*Finite-State Machines: Theory and Implementation*](https://code.tutsplus.com/finite-state-machines-theory-and-implementation--gamedev-11867t)
- David Lafreniere, [*State Machine Design in C++*](https://www.drdobbs.com/cpp/state-machine-design-in-c/184401236)
