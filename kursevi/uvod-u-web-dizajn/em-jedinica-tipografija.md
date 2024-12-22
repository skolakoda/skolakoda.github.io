---
title: Upotreba ema za tipografiju
image: /images/koncepti/em.png
layout: lekcija-html
permalink: /em-jedinica-tipografija
---

![](/images/koncepti/em.png)

***Upotreba ema i rema kao jedinica mere, umesto piksela, će svakom front-end developeru olakšati život.***

Veličina ema je određena kontekstom. Ako podesimo veličinu slova od `16px` na telu dokumenta, a potom koristimo `2em` za naslove, oni će biti određeni inicijalnom veličinom slova. Na primer, ako ste već postavili tipografiju i klijent zatraži da sva slova budu malo veća, možete da promenite samo veličinu fonta za `body` i sva ostala slova će se proporcionalno promeniti.

## Iste veličine

Desktop pregledači koriste 16 piksela kao standardnu veličinu slova. Zbog toga, primena bilo kojeg od sledećih pravila na telo dokumenta će dati isti rezultat:


```css
body {
  font-size: 100%;
  font-size: 16px;
  font-size: 1em;
}
```

## `rem` vs. `em`

Jedi­nica `rem` je uvedena da ukloni neke nedostatke jedinice `em`.

Jedi­nica `rem` se ponaša slično kao `em`, tj. relativna je u odnosu na visinu fonta. Međutim, umesto da je relativna u odnosu na font elementa, ona je relativna u odnosu na osnovni font stranice. Mnogi web dizajneri ne vole jedinicu `em`, jer zavisi od konteksta i često daje veću ili manju veličinu od očekivane, što je `rem` ispravila.

{:.uokvireno.ideja}
**Zašto ime em?** Nekada je slovo M korišćeno za određivanje veličine fonta, kao najšire od svih slova.

### Izvor

* Ben Frain, *HTML5 i CSS3: Prilagodljiv web dizajn*, Beograd, 2014.
* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
