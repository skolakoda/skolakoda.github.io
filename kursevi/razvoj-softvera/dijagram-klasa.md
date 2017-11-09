---
title: Izrada dijagrama klasa
layout: lekcija-razvoj
author: damjan
permalink: /dijagram-klasa
image: /images/koncepti/oop/klasa-film.jpg
---

***Minimalno što treba da znate o dijagramu klasa je da predstavlja elemente vaše buduće aplikacije (objekte/klase) na papiru.***

![]({{page.image}})

Postoje čitave škole dijagrama, ali suština je da pre nego što krenemo u kodiranje aplikacije, prvo uzmemo papir i olovku i razmislimo. Najvažnije je da detektujemo glavne delove sistema. Na primer, ako pravimo igru, to su Scena, Igrač, Neprijatelj i slično. Dalje, možemo imati više vrsta neprijatelja: Orke, Vilenjake i Ljude. Svi oni će biti naslednici osnovne klase Neprijatelj. Ako pravimo aplikaciju za prodaju automobila, definitivno ćemo imati klasu Automobil, zatim Izlog, Kupac, Korpa i slično. Ustvari, verovatno ćemo imati više vrsta vozila u prodavnici, pa ćemo između njih uspostaviti neku hijerarhiju.

Postoji standardan zapis ovih stvari, koje umnogome olakšava razumevanje među developerima raznih jezika. Taj standard se zove jedinstveni jezik modelovanja (*Unified Modeling Language*). Klasa napisana UML notacijom se sastoji iz tri celine:

- Naziv klase
- Spisak atributa (svojstava i stanja objekta)
- Spisak metoda (ponašanja koje klasa obezbeđuje)

U praksi, počinjemo tako što uzmemo nekoliko listova papira, i na svaki napišemo ime neke od glavnih klasa. Zatim povučemo crtu, i ispod nabrojimo svojstva (atribute) koje dotični predmet ima. Zatim povučemo još jednu crtu, i ispod nabrojimo metode, odnosno akcije objekta. Na primer, Automobil ima svojstva: boju, model, vlasnika, godište, itd. A metode mu mogu biti dodavanje gasa, skretanje i slično (ako je u pitanju simulacija) ili dodavanje u korpu i menjanje boje (ako je u pitanju online prodavnica).

![uml](//learning.londonmet.ac.uk/computing/staff/chalkp/proj/ootutor/personuml.gif)

Nakon toga, kada imamo napisane klase na papirima, počinjemo da ih mrdamo i uspostavljamo odnose između njih. Na primer, Kupac definitivno ima neku interakciju sa Korpom, i tako dalje. Ne postoji jedan ispravan način kako napraviti model buduće aplikacije, kreativnost i iskustvo tu igraju bitnu ulogu. Tokom procesa osmišljanja ćemo često premeštati metode sa klase na klasu, dok ne pronađemo gde najviše odgovara da budu.

![dijagram klasa](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/what-is-a-class-diagram-in-UML/UML_class_diagram_example3-800x786.png)

<!--![dijagram klasa](//www.uml-diagrams.org/class-diagrams/class-diagram-domain-overview.png)-->

Misao vodilja nam je da smanjimo međuzavisnost delova sistema koliko je god to moguće. Komunikaciju elemenata sistema često zamišljam kao vojnu organizaciju, gde ne naređuje svako svakome, već postoji strogo određen lanac komandovanja. Suština je da svedemo komunikaciju među elementima sistema na najmanju neophodnu meru, i tako učinimo softver modularnijim. Na taj način ćemo bezbolnije zameniti neki deo kad bude potrebno.
