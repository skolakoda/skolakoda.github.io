---
title: Sedam mostova Kenigsberga
layout: lekcija-algoritmi
permalink: /problem-sedam-mostova
---

**Jedan od prvih problema koji je (negativno) rešen primenom teorije grafova je čuveni „Sedam mostova Kenigsberga“ (eng. *The Seven Bridges of Königsberg*).**

![](https://upload.wikimedia.org/wikipedia/commons/5/5d/Konigsberg_bridges.png)

Problem je analizirao švajcarski matematičar Leonhard Euler u 18. veku, i zaključci do kojih je došao predstavljaju osnovu i začetak teorije grafova. Kroz grad Königsberg protiče reka Pregel koja deli grad na četiri celine međusobno povezane sa sedam mostova. Problem se sastoji u tome kako pronaći putanju kroz grad tako da se prođe preko svakog mosta jednom i samo jednom. Slikovito opisano, to bilo kao kada biste srušili most za sobom nakon što ga pređete.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/7_bridges.svg/600px-7_bridges.svg.png)

Na slikama je prikazana mapa grada sa lokacijama mostova i Eulerova interpretacija tog problema. Euler je posmatrao ovaj problem na drugačiji način. Pošto je njegov zadatak bio da pronađe putanje, svaki deo grada je posmatrao kao celinu, odnosno kao čvor, dok je mostove posmatrao kao veze između čvorova. Na taj način je predstavio problem u vidu graf strukture. Zatim je analizirao sve moguće putanje između čvorova tako da se poseti svaki čvor a da se pri tome pređe preko svakog mosta samo jednom. Odgovor je da tako nešto nije moguće, evo i objašnjenja.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/K%C3%B6nigsberg_graph.svg/600px-K%C3%B6nigsberg_graph.svg.png)

Hajde da se upoznamo sa još jednim pojmom vezanim za grafove, a to je stepen čvora. Stepen čvora predstavlja broj veza koje taj čvor formira sa svim susednim. Analizom svih mogućih putanja Euler je zaključio da čvor koji nije polazana ili završna tačka putanje mora imati stepen koji je paran broj. Sledeći to pravilo u zavisnosti od odabira početne i krajnje tačke možemo zaključiti koja je veza „suvišna“ da bi problem bio rešiv.


Izvor: [datascience.rs](http://www.datascience.rs/teorija-grafova-matematika-oko-nas/)
