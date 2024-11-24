---
title: Rana istorija računara
layout: lekcija-c
permalink: /rana-istorija-racunara
---

***Računari u današnjem smislu nastali su polovinom XX veka, ali koreni računarstva su mnogo stariji od prvih računara. Vekovima su ljudi stvarali mehaničke i elektromehaničke naprave koje su mogle da rešavaju neke numeričke zadatke.***

Današnji računari su programabilni, tj. mogu da se isprogramiraju da vrše različite zadatke. Stoga je oblast programiranja jedna od najznačajnijih oblasti računarstva. Programiranje u savremenom smislu postalo je praktično moguće tek krajem Drugog svetskog rata, ali je njegova istorija znatno starija.

## Antički mehanizmi

![Mehanizam sa Antikitere](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Antikythera_Mechanissem_w.jpg/673px-Antikythera_Mechanissem_w.jpg)

Prvi precizni postupci i sprave za rešavanje matematičkih problema postojali su još u vreme antičkih civilizacija. Na primer, kao pomoć pri izvođenju osnovnih matematičkih operacija korišćene su računaljke zvane abakus.

U IX veku persijski matematičar Al Horezmi precizno je opisao postupke računanja u indo-arapskom dekadnom brojevnom sistemu (koji i danas predstavlja najkorišćeniji brojevni sistem). U XIII veku Leonardo Fibonači doneo je ovaj način zapisivanja brojeva iz Azije u Evropu i to je bio jedan od ključnih preduslova za razvoj matematike i tehničkih disciplina tokom renesanse. Otkriće logaritma omogućilo je svođenje množenja na sabiranje, dodatno olakšano raznovrsnim analognih spravama (npr. klizni lenjir — šiber).

![Paskalina](https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Pascaline-CnAM_823-1-IMG_1506-black.jpg/400px-Pascaline-CnAM_823-1-IMG_1506-black.jpg)

Prve mehaničke sprave koje su mogle da potpuno automatski izvode aritmetičke operacije i pomažu u rešavanju matematičkih zadataka su napravljene u XVII veku. Blez Paskal konstruisao je 1642. godine mehaničke sprave, kasnije nazvane Paskaline, koje su služile za sabiranje i oduzimanje celih brojeva. Gotfrid Lajbnic konstruisao je 1672. godine mašinu koja je mogla da izvršava sve četiri osnovne aritmetičke operacije (sabiranje, oduzimanje, množenje i deljenje) nad celim brojevima. Ova mašina bila je zasnovana na dekadnom brojevnom sistemu, ali Lajbnic je prvi predlagao i korišćenje binarnog brojevnog sistema u računanju.

## Mehaničke mašine

> Možemo najprikladnije reći da analitička mašina tka algebarske obrasce isto kao što Žakardov razboj tka cveće i lišće.
>
> -- <cite>Ada Lovelace</cite>

Žozef Mari Žakard konstruisao je 1801. godine prvu programabilnu mašinu — mehanički tkački razboj koji je koristio bušene kartice kao svojevrsne programe za generisanje kompleksnih šara na tkanini. Svaka rupa na kartici određivala je jedan pokret mašine, a svaki red na kartici odgovarao je jednom redu šare.

![Analitička mašina](//ds-wordpress.haverford.edu/bitbybit/wp-content/uploads/2012/07/Chapter_2-60.jpg)

U prvoj polovini XIX veka, Čarls Bebidž dizajnirao je, mada ne i realizovao, prve programabilne računske mašine. Godine 1822. započeo je rad na diferencijskoj mašini koja je trebalo da računa vrednosti polinomijalnih funkcija (i eliminiše česte ljudske greške u tom poslu) u cilju izrade što preciznijih logaritamskih tablica. Ime je dobila zbog toga što je koristila tzv. metod konačnih razlika da bi bila eliminisana potreba za množenjem i deljenjem. Mašina je trebalo da ima oko 25000 delova i da se pokreće ručno, ali nije nikada završena.

Ubrzo nakon što je rad na prvom projektu utihnuo bez rezultata, Bebidž je započeo rad na novoj mašini nazvanoj analitička mašina. Osnovna razlika u odnosu na sve prethodne mašine, koje su imale svoje specifične namene, bila je u tome što je analitička mašina zamišljena kao računska mašina opšte namene koja može da se programira (programima zapisanim na bušenim karticama, sličnim Žakardovim karticama). Program zapisan na karticama kontrolisao bi mehanički računar (pokretan parnom mašinom) i omogućavao sekvencijalno izvršavanje naredbi, grananje i skokove, slično programima za savremene računare. Osnovni delovi računara trebalo je da budu mlin (engl. *mill*) i skladište (engl. *store*), koji po svojoj funkcionalnosti sasvim odgovaraju procesoru i memoriji današnjih računara.

Ada Bajron zajedno sa Bebidžem napisala je prve programe za analitičku mašinu i, da je mašina uspešno konstruisana, njeni programi bi mogli da računaju određene složene nizove brojeva (takozvane Bernulijeve brojeve). Zbog ovoga se ona smatra prvim programerom u istoriji (i njoj u čast jedan programski jezik nosi ime Ada). Ona je bila i prva koja je uvidela da se računske mašine mogu upotrebiti i za nematematičke namene, čime je na neki način anticipirala današnje namene digitalnih računara.

## Elektromehaničke mašine

![Hollerith Machine](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/HollerithMachine.CHM.jpg/1024px-HollerithMachine.CHM.jpg)

Elektromehaničke mašine za računanje koristile su se od sredine XIX veka do vremena Drugog svetskog rata. Jedna od prvih je mašina za čitanje bušenih kartica koju je konstruisao Herman Holerit. Ova mašina korišćena je 1890. za obradu rezultata popisa stanovništva u SAD. Naime, obrada rezultata popisa iz 1880. godine trajala je više od 7 godina, a zbog naglog porasta broja stanovnika procenjeno je da bi obrada rezultata iz 1890. godine trajala više od 10 godina, što je bilo neprihvatljivo mnogo. Holerit je sproveo ideju da se podaci prilikom popisa zapisuju na mašinski čitljivom medijumu (na bušenim karticama), a da se kasnije obrađuju njegovom mašinom. Koristeći ovaj pristup obrada rezultata popisa uspešno je završena za godinu dana. Od Holeritove male kompanije kasnije je nastala čuvena kompanija IBM.

Godine 1941, Konrad Cuze konstruisao je 22-bitnu mašinu računanje Z3 koji je imao izvesne mogućnosti programiranja (podržane su bile petlje, ali ne i uslovni skokovi), te se često smatra i prvim realizovanim programabilnim računarom. Cuzeove mašine tokom Drugog svetskog rata naišle su samo na ograničene primene. Cuzeova kompanija proizvela je oko 250 različitih tipova računara do kraja šezdesetih godina, kada je postala deo kompanije Simens (nem. *Siemens*).

U okviru saradnje kompanije IBM i univerziteta Harvard, tim Hauarda Aikena završio je 1944. godine mašinu Harvard Mark I. Ova mašina čitala je instrukcije sa bušene papirne trake, imala je preko 760000 delova, dužinu 17m, visinu 2.4m i masu 4.5t. Mark I mogao je da pohrani u memoriji (korišćenjem elektromehaničkih prekidača) 72 broja od po 23 dekadne cifre. Sabiranje i oduzimanje dva broja trajalo je trećinu, množenje šest, a deljenje petnaest sekundi.

## Elektronski računari

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Colossus.jpg/1024px-Colossus.jpg)

> Čovek snabdeven papirom, olovkom i gumicom, i podvrgnut strogoj disciplini, u stvari je univerzalna mašina.
>
> -- <cite>Alan Turing</cite>

Elektronski računari koriste se od kraja 1930-ih do danas. Jedan od prvih elektronskih računara ABC (specijalne namene — rešavanje sistema linearnih jednačina) napravili su 1939. godine Atanasov i Beri. Mašina je prva koristila binarni brojevni sistem i električne kondenzatore (engl. *capacitor*) za skladištenje bitova — sistem koji se u svojim savremenim varijantama koristi i danas u okviru tzv. DRAM memorije. Mašina nije bila programabilna.

Krajem Drugog svetskog rada, u Engleskoj, u Blečli parku (*Bletchley Park*) u kojem je radio i Alan Tjuring, konstruisan je računar Kolos (*Colossus*) namenjen dešifrovanju nemačkih poruka. Računar je omogućio razbijanje nemačke šifre zasnovane na mašini Enigma, zahvaljujući čemu su saveznici bili u stanju da prate komunikaciju nemačke podmorničke flote, što je značajno uticalo na ishod Drugog svetskog rata.

U periodu između 1943. i 1946. godine od strane američke vojske i tima univerziteta u Pensilvaniji, koji su predvodili Džon Mokli i Džej Ekert, konstruisan je prvi elektronski računar opšte namene — ENIAC (*Electronic Numerical Integrator and Calculator*). Imao je 1700 vakuumskih cevi, dužinu 30m i masu 30t. Računske operacije izvršavao je hiljadu puta brže od elektromehaničkih mašina. Osnovna svrha bila mu je jedna specijalna namena — računanje trajektorije projektila. Bilo je moguće da se mašina preprogramira i za druge zadatke ali to je zahtevalo intervencije na preklopnicima i kablovima   koje su mogle da traju danima.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Classic_shot_of_the_ENIAC_%28full_resolution%29.jpg/1024px-Classic_shot_of_the_ENIAC_%28full_resolution%29.jpg)


Izvor: Filip Marić, Predrag Janičić, *Programiranje 1: Osnove programiranja kroz programski jezik C*, Beograd, 2015.
