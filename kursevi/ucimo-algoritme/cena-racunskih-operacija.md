---
title: Cena računskih operacija
layout: lekcija-algoritmi
permalink: /cena-racunskih-operacija
---

![](https://i1.wp.com/www.complexsql.com/wp-content/uploads/2017/03/Arithmatic-Operators.png?resize=564%2C381)

Prilikom analize složenosti, dobro je znati da su “najbrže“ aritmetičke operacije: **sabiranje**, **oduzimanje** i **poređenje**. Računanje **apsolutne vrednosti** je oko 2 puta sporije, dok je **množenje** 4 puta sporije. Operacije **deljenje** i **modulo** su oko 10 puta sporije od sabiranja, dok su **korenovanje** i **trigonometrijske funkcije** oko puta 30 – 80 sporije.

Takođe, rad sa realnim brojevima je mnogo sporiji nego rad sa celim brojevima; sa druge strane, operacije nad 64-bitnim brojevima su sporije nego operacija nad 32-bitnim, što između ostalog znači da nije pametno (i zbog vremena i zbog memorije) uvek koristiti 64-bitne tipove.

Izvor: [Petlja.org](https://petlja.org/BubbleBee/r/Lectures/matematicki-algoritmi-1)
