---
title: Višeslojna arhitektura
layout: lekcija-razvoj
permalink: /viseslojna-arhitektura
image: /images/koncepti/oop/slojevi.png
---

![]({{page.image}})

Sredinom 1990-ih godina, kada su aplikacije u preduzećima postajale sve složenije i izvršavale se na računarima nekoliko stotina ili hiljada krajnjih korisnika, klijentska strana u tradicionalnom dvoslojnom klijent-server modelu predstavljala je problem koji je sprečavao izmene i proširenja iz više razloga:

- zahtevana je znatna količina resursa na klijentskoj mašini kako bi se aplikacije uspešno izvršavale, uključujući procesorsku snagu, prostor na disku i RAM memoriju;
- poslovna logika je bila distribuirana između servera i klijentskih mašina što je otežavalo ažuriranje aplikacije;
- značajni administrativni napori su bili potrebni na klijentskoj strani;

## Troslojna arhitektura

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Overview_of_a_three-tier_application_vectorVersion.svg/600px-Overview_of_a_three-tier_application_vectorVersion.svg.png)

Varijacija dvoslojnog modela koja je rešila problem skalabilnosti u velikim sistemima pojavila se 1995. godine. Nova arhitektura sastojala se iz tri sloja (*tier*), od kojih se svaki mogao nalaziti na drugoj platformi. Ovi slojevi su:

- prezentacioni sloj koji je smešten na računaru krajnjeg korisnika - klijenta;
- sloj poslovne logike i obrade podataka koji je smešten na serveru (aplikativni server);
- sloj za pristup podacima koji je smešten na serveru baze podataka;

Prednosti troslojne arhitekture su brojne:

- smanjenje troškova za hardver klijentskih mašina;
- zbog izdvajanja poslovne logike, kojoj pristupa veliki broj korisnika, na poseban sloj u vidu aplikativnog servera, ažuriranje i održavanje aplikacije je centrirano. Ovim se eliminiše problem distribucije softvera koji je bio prisutan u dvoslojnom klijent-server modelu;
- sa dobijenom modularnošću moguće je lako zameniti neki od slojeva bez uticaja na ostale;
- balansiranje opterećenja je mnogo lakše usled razdvajanja poslovne logike od servisa baze podataka;


Izvor: Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
