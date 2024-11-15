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
