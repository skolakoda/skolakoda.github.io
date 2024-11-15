---
title: Objekat za prenos podataka
layout: lekcija-razvoj
permalink: /objekat-za-prenos-podataka
image: /images/koncepti/oop/dto.png
---

![]({{page.image}})

**Objekat za prenos podataka (*data transfer object*, skraćeno DTO) je softverski obrazac za prenos podataka između različitih slojeva aplikacije, posebno kada se prenose preko mreže.** DTO je dizajniran da sadrži sve potrebne podatke za određenu operaciju, čime se smanjuje broj poziva između klijenta i servera.

DTO je koristan obrazac za optimizaciju performansi i organizaciju podataka u velikim aplikacijama, posebno u kontekstu mrežnih komunikacija.

## Karakteristike

Neke od karakteristika ovog obrasca su:

- **Smanjenje broja poziva**: DTO omogućava prenos više informacija u jednom pozivu, što je posebno važno u distribuiranim sistemima gde su mrežni pozivi skupi. Umesto da se vrši više poziva za različite delove podataka, jedan DTO može preneti sve potrebne podatke.
- **Jednostavna struktura**: DTO obično sadrži jednostavna svojstva, kao što su primitivni tipovi podataka, i druge DTO-ove. Ova jednostavna struktura olakšava serijalizaciju i prenos podataka preko mreže.
- **Agregacija podataka**: DTO često agregira podatke iz više domena ili izvora, sve u jednom objektu.
- **Izbegavanje domen modela**: DTO se koristi da se izbegne direktan prenos domen modela između klijenta i servera, čime se smanjuje složenost i rizik od grešaka prilikom serijalizacije složenih objekata.

## Literatura

- Martin Fowler, *Patterns of Enterprise Application Architecture*