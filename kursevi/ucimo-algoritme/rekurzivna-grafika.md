---
title: Rekurzivna grafika
layout: lekcija-algoritmi
author: damjan
permalink: /rekurzivna-grafika
image: https://upload.wikimedia.org/wikipedia/commons/3/30/Cuncha_GFDL_Galicia4.jpg
---

**Računarska grafika je jedna od najzanimljivijih oblasti primene rekurzije.** Pomoću nekoliko prostih funkcija, možete slikati najrazličitije obrasce koji se u nedogled ponavljaju.

## Fraktali

Najpoznatiji vid rekurzije u računarskoj grafici su fraktali. Poput svih rekurzija, sastoje se od obrazaca koji u nedogled ponavljaju sebe, a mogu se predstaviti relativno prostom rekurzivnom definicijom.

Kod beskonačno smanjujućih fraktala, samoslični obrasci se ne mogu izbrojati jer postaju sve manji i manji, kao u Zenonovim paradoksima, gde se prostor deli na sve manje delove. Iako zauzimaju konačnu površinu, fraktali su beskonačni u umanjivanju, i verovali ili ne, imaju [beskonačan obim](https://youtu.be/azBNsPa1WC4)! Obrasci nalik fraktalima se redovno javljaju u prirodi, u pojavama kao što su oblaci, planinski venci, mreže reka, munje, morske obale, snežne pahulje.

![](https://upload.wikimedia.org/wikipedia/commons/a/a4/Mandelbrot_sequence_new.gif)

## Primer: binarno stablo

Jedan od prostijih fraktala u grafici je binarno stablo. Sastoji se od osnovnog obrasca, stabla, koji iz sebe reprodukuje dva umanjena. Ispod možete videti implementaciju binarnog stabla u kodu:

<iframe width="100%" height="600" src="//jsfiddle.net/mudroljub/x1bzmq7s/embedded/js,result/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<iframe width="100%" height="600" src="//jsfiddle.net/mudroljub/x1bzmq7s/embedded/result,js/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>
