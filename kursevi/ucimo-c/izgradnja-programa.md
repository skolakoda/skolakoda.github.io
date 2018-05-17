---
title: Izgradnja programa
layout: lekcija-c
permalink: /izgradnja-programa
---

![](https://camo.githubusercontent.com/f5b3e0f72fa2f0a87544758be88a898b39230738/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f323030302f312a6d4d32414d6b305452454e41327a4632524d456562412e6a706567)

**Izgradnja programa (*build*) je proces pretvaranja izvornog koda u aplikaciju.** To se u razvojnim okruženjima obično svodi na to da pritisnete funkcijski taster.

Postupak se obično sastoji od dve faze:
- **prevođenja** (engl. *compile*) i
- **povezivanja** (engl. *link*), kojim se uključuju standardne funkcije.

Ako te dve faze uspeju, program može da se izvršava. Ako izgradnja uspe, možete sebe da potapšete po leđima: ni kompajler ni linker nisu naišli na greške. Da li to znači da ste gotovi? Ne. Kompajler hvata sintaksne greške, kao i greške programske strukture. Ali ima mnogo grešaka, pre svega programske logike, koje on ne može da pronađe.

## Automatizacija izgradnje

Automatizacija pretvaranja izvornog koda u program naziva se *build* automatizacija ili automatizacija izgradnje. Neke od poznatih alatki za automatizaciju su Make, Rake, Ant, Gradle, Gulp, Webpack itd.


Izvor: Brajan Overlend, *C++ opušteno* ([promo poglavlje](http://cet.rs/shop/c-plus-plus/c-plus-plus-opusteno/)), Beograd 2012.
