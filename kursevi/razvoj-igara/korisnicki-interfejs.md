---
title: Korisnički interfejs u igrama
layout: lekcija-razvoj-igara
permalink: /korisnicki-interfejs-u-igrama
---

![](/images/razvoj-igara/game-ui.webp)

Evo par nasumičnih, ali važnih saveta o korisničkom interfejsu:

- Pravougaoni interfejsi su uglavnom dosadni.  
- Lokalizacija može unerediti UI (mnogo duže reči i slično).  
- UI je lako napraviti, ali pravljenje dobrog interfejsa je umetnost.

## Modalni dijalozi

![modal](/images/razvoj-igara/modal.jpg)

Modalni dijalozi obično postavljaju korisniku pitanje, poput: „Da li zaista želite da izađete?“

## Kontrole

![kontrole](/images/razvoj-igara/kontrole.jpg)

Kontrole u igri imaju četiri stanja: 
- normalno (aktivno)
- istaknuto (*focused*, *highlighted*)
- pritisnuto i 
- onemogućeno.  

Kada korisnik pritisne neki taster, stanje prelazi iz aktivnog u pritisnuto.
