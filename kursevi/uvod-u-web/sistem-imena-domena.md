---
title: Sistem imena domena
layout: lekcija-html
permalink: /sistem-imena-domena
---

**Sistem imena domena (*Domain Name System*, skraćeno DNS) je internet imenik, u koji su upisani svi domeni i njihove adrese.**

Centralni sistem domenskih imena je primjer klijent-server aplikacije. DNS poslužitelj prevodi imena u IP adrese. Na primjer, kada u web browser upišemo `google.com`, DNS server vraća IP adresu `173.194.70.113`. 

## Hijerarhija imena

DNS poslužitelji, kao i simbolička imena, strukturirani su hijerarhijski. Dijelovi hijerarhije imena zovu se domene.

![](/images/koncepti/web/dns.png)

Poslužitelji na drugoj razini stabla, nazivaju se vršni poslužitelji (*edge servers*). Tim poslužiteljima upravlja ICAAN (engl. *Internet Corporation for Assigned Names and Numbers*). U vršne domene spadaju tzv generičke domene `.com`, `.info`, `.edu`, `.org` ili domene sa kodovima zemalja, npr. `.hr`, `.au`, `.rs`, `.it`.

Između ostalog, ICAAN-a dodjeljuje nazive domena organizacijama koje se nalaze niže u hijerarhiji. Te organizacije nazive vršnih domena opet mogu dodijeliti ili prodati niže rangiranim organizacijama. Takvim načinom dolazimo npr. do imena `math.pmf.unizg.hr`.

## Prevođenje imena

Prevođenje simboličkih imena kreće od lokalnog DNS poslužitelja. Ako on u svojoj bazi podataka nema zapisan podatak koji se od njega traži, taj poslužitelj postaje klijent i povezuje se vršnim poslužiteljem ili nekim od poslužitelja koji su odgovorni za pod-domene.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Example_of_an_iterative_DNS_resolver.svg/640px-Example_of_an_iterative_DNS_resolver.svg.png)


## Literatura

- Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
