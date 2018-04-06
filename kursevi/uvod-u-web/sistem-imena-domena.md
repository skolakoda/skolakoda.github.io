---
title: Sistem imena domena
layout: lekcija-html
permalink: /sistem-imena-domena
---

**Sistem imena domena (*Domain Name System*, DNS) je internet imenik, u koji su upisani svi domeni i njihove adrese.**

Centralizirani sistem domenskih imena je primjer aplikacije građene prema modelu klijent-poslužitelj. DNS poslužitelj prevodi simbolička imena računala u IP adrese. Na primjer kada u web preglednik upišemo `google.com`, DNS poslužitelj našeg računala vraća IP adresu `173.194.70.113`. Poslužitelji u tom sustavu, kao i simbolička imena računala, strukturirani su hijerarhijski. Dijelovi hijerarhije imena računala zovu se domene.

![](/images/koncepti/web/dns.png)

Poslužitelji na drugoj razini stabla sa slike, nazivaju se vršni poslužitelji. Tim poslužiteljima upravlja ICAAN (engl. *Internet Corporation for Assigned Names and Numbers*). Između ostalog, ICAAN-a dodjeljuje nazive domena organizacijama koje se nalaze niže u hijerarhiji. Te organizacije nazive vršnih domena opet mogu dodijeliti ili prodati ostalim niže rangiranim organizacijama. Takvim načinom dolazimo npr. do imena `math.pmf.unizg.hr`.

U vršne domene spadaju tzv generičke domene `.com`, `.info`, `.edu`, `.org` ili nacionalne domene (engl. *Country Code Top-Level Domain*, ccTLD), npr. `.hr`, `.au`, `.rs`, `.it`.

Prevođenje simboličkih imena kreće od lokalnog DNS poslužitelja. Ako on u svojoj bazi podataka nema zapisan podatak koji se od njega traži, taj poslužitelj postaje klijent i povezuje se vršnim poslužiteljem ili nekim od poslužitelja koji su odgovorni za pod-domene.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Example_of_an_iterative_DNS_resolver.svg/640px-Example_of_an_iterative_DNS_resolver.svg.png)


Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
