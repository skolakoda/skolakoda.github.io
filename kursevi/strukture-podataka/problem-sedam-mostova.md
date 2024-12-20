---
title: Sedam mostova Kenigsberga
layout: lekcija-strukture
permalink: /problem-sedam-mostova
---

![](https://upload.wikimedia.org/wikipedia/commons/5/5d/Konigsberg_bridges.png)

**Sedam mostova Kenigsberga (eng. *The Seven Bridges of Königsberg*) je jedan od prvih problema koji je (negativno) rešen primenom teorije grafova, odnosno Euler je dokazao da rešenje nije moguće.**

Problem je analizirao švajcarski matematičar Leonhard Euler u 18. veku. Zaključci do kojih je došao predstavljaju osnovu i začetak teorije grafova. 

## Problem

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/7_bridges.svg/480px-7_bridges.svg.png)

Grad Keningsberg je imao četiri dela povezana sa sedam mostova preko reke Pregel. Građani su se pitali je li moguće preći sve mostove samo jednom, a na kraju se vratiti na početnu tačku.

## Analiza problema

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/K%C3%B6nigsberg_graph.svg/400px-K%C3%B6nigsberg_graph.svg.png)

Euler je posmatrao ovaj problem na drugačiji način. Svaki deo grada je posmatrao kao celinu, odnosno kao čvor, a mostove kao veze između čvorova. Na taj način je predstavio problem u vidu graf strukture. Zatim je analizirao sve moguće putanje između čvorova tako da se poseti svaki čvor a da se pri tome pređe preko svake veze samo jednom. Odgovor je da tako nešto nije moguće.

Za Ojlerovu analizu bitan pojam je **stepen čvora**, koji predstavlja broj veza koje čvor formira sa susedima. Analizom svih mogućih putanja Euler je zaključio da čvor koji nije polazna ili završna tačka puta mora imati stepen koji je paran broj. Sledeći to pravilo u zavisnosti od odabira početne i krajnje tačke možemo zaključiti koja je veza „suvišna“ da bi problem bio rešiv.


## Literatura

- [datascience.rs](http://www.datascience.rs/teorija-grafova-matematika-oko-nas/)
