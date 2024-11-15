---
title: Inverzija kontrole
layout: lekcija-razvoj
permalink: /inverzija-kontrole
image: /images/koncepti/oop/InversionOfControl.png
---

![]({{page.image}})

**Inverzija kontrole** (*inversion of control*, skraćeno IoC) je princip projektovanja softvera gde se kontrola nad procesom izvršenja prebacuje iz koda koji zahteva određene servise na kod koji te servise pruža. Prema ovom principu, vanjski izvor (npr. *framework*) preuzima tok kontrole umesto ručno pisanih delova. 

Po ovom načelu radi i programiranje zasnovano na događajima, gde ručno pisani reaguje da događaje, dok petljom događaja rukovodi razvojni okvir ili izvršno okruženja. Inverzija kontrole se naširoko koristi unutar razvojnih okvira. Poznata je i kao Holivudski princip — "Ne zovite nas, mi ćemo zvati vas".

Istorijski, u proceduralnom programiranju, ručno pisani kod je pozivao vanjske biblioteke za obavljanje određenih zadataka. Usled inverzije kontrole, vanjski izvori sada često pozivaju ručno pisani kod.

## Karakteristike

> Važna karakteristika razvojnog okvira je da metode koje korisnik definiše često bivaju pozvane unutar samog okvira, a ne iz koda korisničke aplikacije. Okvir često igra ulogu glavnog programa u koordinaciji i sekvenciranju radnji aplikacije. Ova inverzija kontrole daje okvirima moć da služe kao proširivi skeleti. Metodi koje piše korisnik prilagođavaju generičke algoritme definisane u okviru za specifičnu aplikaciju.
>
> -- Ralph Johnson i Brian Foote

Inverzija kontrole čini ključnu razliku između razvojnog okvira i biblioteke. Biblioteka je u suštini skup funkcija koje možete pozvati. Okvir otelovljuje neki apstraktni dizajn, sa više ugrađenog ponašanja. Da biste ga koristili, morate da ubacite svoje ponašanje na odgovarajuća mesta.

## Razdvajanje značenja

Postoji određena konfuzija oko značenja inverzije kontrole. Neki ljudi brkaju opšti princip sa specifičnim načinima njegove primene (kao što je [injekcija zavisnosti](/ubrizgavanje-zavisnosti)) koju koriste neki razvojni okviri. 

## Literatura
- Martin Fowler, [*Inversion Of Control*](https://martinfowler.com/bliki/InversionOfControl.html)