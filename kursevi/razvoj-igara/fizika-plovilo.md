---
title: Fizika plovila
layout: lekcija-razvoj-igara
permalink: /fizika-plovilo
---

Postoje mnogi načini klasifikacije brodova i čamaca, ali u pogledu fizike postoje tri osnovna tipa. Nazivi su zasnovani na silama koje plovila drže na površini dok plove:

- istiskujuća plovila (*displacement vessels*)
- polu-istiskujuća plovila (*semi-displacement vessels*)
- glisirajuća plovila (*planing vessels*). 

## Plutanje plovila

Arhimedov princip kaže da je sila uzgona na telo u tečnosti jednaka težini tečnosti koju to telo istiskuje. To znači da brod mora imati dovoljnu zapreminu da istisne količinu vode jednaku težini broda da bi plutao.

Kada miruju, svi brodovi su u režimu istiskivanja. Istiskivanje znači da brod drži isključivo sila uzgona. Sam izraz "istiskivanje" odnosi se na zapreminu vode koja je "istisnuta" dok brod pluta.

Glisere na površini ne drži uzgon, već hidrodinamičko podizanje. Kada se plovilo kreće velikom brzinom, voda udara u dno i podiže ga. To se zove glisiranje i značajno smanjuje otpor. Dešava se većini čamaca pri velikoj brzini. 

Polu-potiskujuća plovila spadaju između ove dve kategorije - delimično ih drži uzgon i delimično glisiranje.

![brod-sile](/images/razvoj-igara/brod-sile.png)

Dok brod plovi, za razliku od položaja u mirovanju, samo mali deo trupa mu je u vodi. To smanjuje dodirnu površinu i trenje, omogućujući plovilu veću brzinu, stvarajući dodatno podizanje i dalje smanjenje trenja.

## Pogon plovila

Postoji više načina za pokretanje broda. Najstariji je pomoću jedra i vetra. Ostali pogoni uključuju propelere, azimutne potisnike, vodene mlazove, pumpne mlazove, kontrarotirajuće propelere i druge sisteme.

Glavna jednačina za simulaciju pogona bi bila kriva potiska u odnosu na broj obrtaja propelera ili u odnosu na gas. Što se brod brže kreće, brzina ulaznog toka vode u propeler raste. To znači smanjenje razlike između brzine ulaska i izlaska vode, odnosno smanjenje jačine potiska.

![brod-potisak-brzina](/images/razvoj-igara/brod-potisak-brzina.png)

## Potapanje broda

Ako u video igri imamo brodove, prvi korak ka realističnoj fizici je omogućiti im da tonu ako se oštete.

Većina brodova je najmanje stabilna oko uzdužne ose — lakše se prevrću bočno nego napred-nazad. Međutim, Titanik pokazuje da brodovi mogu potonuti i napred-nazad kada se oštete.

Brodovi se štite podelom trupa u više vodonepropusnih odeljaka. Ako brod udari u stenu, samo oštećeni odeljak će se napuniti vodom. Ako se ošteti više odeljaka, brod neće imati dovoljno uzgona i potonuće.

Opšta pravila:
- Što je težište broda više, veća je verovatnoća da će se prevrnuti.
- Veliki brodovi su uvek podeljeni u odeljke. Oštećenje bi trebalo biti ograničeno na oštećeni odeljak.
- Brod će se nagnuti ili spustiti u pravcu oštećenja. Ako se oštećenje desi na desnoj strani, naginje se udesno. Ako je oštećenje na pramcu, naginje se napred.
- Brod će ostati na površini dok zapremina neoštećenih odeljaka u kubnim metrima iznosi najmanje težinu trupa u metričkim tonama podeljenu sa 1.025.
- Nakon oštećenja, čak i ako brod ima dovoljno zapremine da pluta, ne znači da će ostati uspravan.
- Potonuće se gotovo nikada ne dešava brzo kao u video igrama; međutim, prevrnuće se može dogoditi brzo.