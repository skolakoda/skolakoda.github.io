---
title: Inverzija kontrole
layout: lekcija-razvoj
permalink: /inverzija-kontrole
image: /images/koncepti/oop/InversionOfControl.png
---

![]({{page.image}})

**Inverzija kontrole** (*inversion of control*, skraćeno IoC) je princip projektovanja softvera gde se kontrola nad procesom izvršenja prebacuje iz koda koji zahteva određene servise na kod koji te servise pruža. Prema ovom principu, vanjski izvor (npr. *framework*) preuzima tok kontrole umesto ručno pisanih delova. 

Po ovom načelu radi i programiranje zasnovano na događajima, gde ručno pisani samo reaguje da događaje, dok petljom događaja rukovodi framework ili izvršno okruženja. 

Inverzija kontrole se naširoko koristi od strane framework-a.

## Istorija

Istorijski, u proceduralnom programiranju, ručno pisani kod je pozivao vanjske biblioteke za obavljanje određenih zadataka. Usled inverzije kontrole, vanjski izvor ili framework sada poziva ručno pisani kod.

## Principi

Inverzija kontrole poštuje [načelo isključive odgovornosti](/princip-iskljucive-odgovornosti). Ako imamo komponentu koja nešto radi, čim je takođe odgovorna za stvaranje svojih ovisnosti, ona radi više stvari. Zato [ubrizgavanje zavisnosti](ubrizgavanje-zavisnosti) predstavlja važnu primenu ovih principa.

## Prednosti

Neke od prednosti inverzije kontrole su:
- Smanjenje složenosti: razmotrite količinu dupliciranog koda jer mnoge odvojene lokacije stvaraju svoje ovisnosti.
- Lakša proverljivost: možemo promeniti konkretne ovisnosti prilikom testiranja.
- Lakše održavanje: možemo uneti promene u ovisnost bez potrebe da menjamo glavnu klasu.
