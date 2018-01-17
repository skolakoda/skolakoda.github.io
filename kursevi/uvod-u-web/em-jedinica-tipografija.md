---
title: Upotreba ema za tipografiju
image: /images/koncepti/em.png
layout: lekcija-html
permalink: /em-jedinica-tipografija
---

![](/images/koncepti/em.png)

***Upotreba ema kao jedinice mere, umesto piksela, će svakom frontend developeru olakšati život.***

Veličina ema je određena kontekstom. Ako podesimo veličinu slova od 16px na telu dokumenta, a potom koristimo em za naslove, oni će biti određeni inicijalnom veličinom slova. Na primer, ako ste već postavili tipografiju i klijent zatraži da sva slova budu malo veća, možete da promenite samo veličinu fonta za `body` i sva ostala slova će se proporcionalno promeniti.

Bitno je znati da desktop pregledači koriste 16 piksela kao standardnu veličinu slova. Zbog toga, primena bilo kojeg od sledećih pravila na `body` tag će dati isti rezultat:

```css
body {
  font-size: 100%;
  font-size: 16px;
  font-size: 1em;
}
```

{:.uokvireno}
**Zašto em?** Nekada je slovo M korišćeno za određivanje veličine fonta, kao najšire od svih slova.


Izvor: Ben Frain, *HTML5 i CSS3: Prilagodljiv web dizajn*, Beograd, 2014.
