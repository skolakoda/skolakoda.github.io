---
title: Trenje
layout: lekcija-razvoj-igara
permalink: /trenje
---

![trenje](/images/razvoj-igara/trenje.png)

**Trenje (ili frikcija) uvek deluje na predmete silom u smeru suprotnom od njihovog kretanja.**  

Trenje se opire kretanju zbog interakcije između dodirnih površina, pa je zbog toga sila kontakta. Jačina trenja zavisi od jačine normalne sile između dodirnih površina i hrapavosti tih površina.

Merna jedinica trenja je Njutn (N).

## Trenje mirovanja i trenje kretanja

Razlikuju se trenje mirovanja (statičko) i trenje kretanja (kinetičko). Statičko trenje sprečava predmet da se pokrene, dok kinetičko trenje usporava predmet nakon što se pokrene. Na mikro nivou to izgleda ovako:

![trenje](/images/razvoj-igara/trenje-mikro.png)

U simulaciji fizike, uvek prvo računamo trenje mirovanja. Ako su ostale sile zajedno slabije od njega, predmet neće početi da se kreće. Čim ostale sile postanu veće od statičkog trenja, predmet počinje kretanje, i tada kinetičko trenje preuzima.

Trenje kretanja može biti: trenje klizanja, trenje kotrljanja i otpor fluida. U slučaju kada automobil prokliza, trenje kotrljanja prelazi u trenje klizanja.

## Koeficijent trenja

Trenje između dva predmeta zavisi od materijala od kojih su napravljeni. Pri računanju trenja potrebno je koristiti tabelu koeficijenata trenja. Grčko slovo μ (mi) je standardni simbol za koeficijent trenja.

![friction-coefficients](/images/razvoj-igara/friction-coefficients.gif)

Koeficijent trenja je odnos sile potrebne da se predmet pokrene i normalne sile.

## Formule

Trenje mirovanja (statičko trenje):

```
FS = –μS * N
```

Trenje kretanja (kinetičko trenje):

```
FK = –μK * N
```

## Otpor sredine

**Otpor sredine** (**otpor fluida** kada se odnosi na tečnost ili **aerodinamički otpor** kada se odnosi na vazduh) je sila sa kojom se fluid, uključujući vazduh, suprotstavlja kretanju tela kroz svoju sredinu.

Glavni sastojak otpora fluida je trenje izazvano dodirom fluida i površine tela.