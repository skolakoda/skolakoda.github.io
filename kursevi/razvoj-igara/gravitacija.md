---
title: Gravitacija
layout: lekcija-razvoj-igara
permalink: /gravitacija
---

![gravitacija](/images/razvoj-igara/gravitacija.png)

<!-- ![gravitacija-planeta](/images/razvoj-igara/gravitacija-planeta.jpg) -->

**Gravitacija ili sila teže je konstantna sila koja uvek vuče prema dole.** U simulacijama fizike, koristimo `–g` za ubrzanje vertikalne komponente kretanja. 

Težina ili teža (*weight*) je sila kojom gravitacija deluje na masu. Težina je zapravo masa predmeta pomnožena sa ubrzanjem usled gravitacije:

```
w = m * g
```

## Masa vs težina

Iako često koristimo masu i težinu kao sinonime, u fizici su to dve različite veličine. Masa je skalar, težina vektor, čiji pravac je uvek nadole, ka centru Zemlje. Masa se meri u kilogramima, a težina u njutnima. Težina se menja sa promenom gravitacije (na primer, na planinama ili drugim planetama), dok masa ostaje konstantna.

Na nivou mora, gravitacija Zemlje izaziva ubrzanje od tačno `9.80665 metara/s²`. Znači, predmet mase 1 kilogram vrši silu težine od 9.80665 N prema Zemlji.

## Brzina predmeta u padu

Galileo je otkrio zanimljivo ponašanje gravitacije, bacajući predmete sa Krivog tornja u Pizi. Bez obzira na masu, svi predmeti padaju istom brzinom, osim kod velike razlike u otporu vazduha. Masivniji predmeti primaju veću gravitacionu silu, ali ona se koristi za ubrzanje veće mase, pa ubrzanje ostaje isto.

![](https://upload.wikimedia.org/wikipedia/commons/e/e5/Pisa_experiment.png)

## Normalna sila

Normalna sila je reakcija površine na predmet koji se njoj nalazi. Ova sila je protivna gravitaciji i usmerena u pravcu površine, sprečavajući pad predmeta kroz nju. 

Teža je uvek negativna vrednost, jer je njen pravac prema dole, ka centru Zemlje. Zato normalna sila uvek ima pozitivnu vrednost.

![normal-force](/images/razvoj-igara/normal-force.png)
