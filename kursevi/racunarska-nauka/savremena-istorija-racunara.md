---
title: Savremena istorija računara
layout: lekcija-racunarstvo
permalink: /savremena-istorija-racunara
image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/IBM_Electronic_Data_Processing_Machine_-_GPN-2000-001881.jpg/1280px-IBM_Electronic_Data_Processing_Machine_-_GPN-2000-001881.jpg
---

<img src="{{page.image}}" class="full">

***Rane mašine za računanje nisu bile programabilne već su radile po unapred fiksiranom programu, određenom samom konstrukcijom mašine. Takva arhitektura se i danas koristi kod nekih jednostavnih mašina, na primer, kod kalkulatora.***

Da bi izvršavali nove zadatke, rani elektronski računari nisu programirani u današnjem smislu, već su suštinski redizajnirani. Tako su, na primer, operaterima bile potrebne nedelje da bi prespojili kablove u okviru kompleksnog sistema ENIAC i tako ga instruisali da izvršava novi zadatak.

## Računari fon Nojmanove arhitekture

Potpuna konceptualna promena došla je kasnih 1940-ih, sa pojavom računara koji programe na osnovu kojih rade čuvaju u memoriji zajedno sa podacima — računara sa skladištenim programima (*stored program computers*). U okviru ovih računara, postoji jasna podela na hardver i softver. Iako ideje za ovaj koncept datiraju još od Čarlsa Bebidža i njegove analitičke mašine i nastavljaju se kroz radove Tjuringa, Cuzea, Ekerta, Moklija, za rodonačelnika ovakve arhitekture računara smatra se Džon fon Nojman.

Fon Nojman se u ulozi konsultanta priključio timu Ekerta i Moučlija i 1945. godine je u svom izveštaju EDVAC (*Electronic Discrete Variable Automatic Computer*) opisao arhitekturu koja se i danas koristi u najvećem broju savremenih računara, u kojoj se programi mogu učitavati isto kao i podaci koji se obrađuju. Računar EDVAC, naslednik računara ENIAC, koristio je binarni zapis brojeva, u memoriju je mogao da upiše hiljadu 44-bitnih podataka i bio je jedan od prvih računara koji su mogli da učitaju programe u memoriju.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Von_Neumann_architecture.svg/504px-Von_Neumann_architecture.svg.png)

Osnovni elementi fon Nojmanove arhitekture računara su procesor (koji čine aritmetičko-logička jedinica, kontrolna jedinica i registri) i glavna memorija, koji su međusobno povezani. Ostale komponente računara (npr. ulazno-izlazne jedinice, spoljašnje memorije...) smatraju se pomoćnim i povezuju se na centralni deo računara. Sva obrada podataka vrši se u procesoru. U memoriju se skladište podaci koji se obrađuju, ali i programi, predstavljeni nizom elementarnih instrukcija (kojima se procesoru zadaje koju operaciju da izvrši). I podaci i programi se zapisuju obično kao binarni sadržaj i nema nikakve suštinske razlike između zapisa programa i zapisa podataka. Tokom rada, podaci i programi se prenose između procesora i memorije.

Moderni programabilni računari se, po pitanju tehnologije koju su koristili, mogu grupisati u četiri generacije, sve zasnovane na fon Nojmanovoj arhitekturi.

### I generacija računara (od kraja 1930-ih do kraja 1950-ih)

![](https://upload.wikimedia.org/wikipedia/commons/e/e1/EDSAC_%282%29.jpg)

I generacija računara koristila je vakuumske cevi kao logička kola i magnetne doboše (delom i magnetne trake) za memoriju. Za programiranje su korišćeni mašinski jezik i asembler a glavne primene su bile vojne i naučne. Računari su uglavnom bili unikatni (tj. za većinu nije postojala serijska proizvodnja).

Prvi realizovani računari fon Nojmanove arhitekture bili su:

* Mančesterska „Beba“ (*Manchester „Baby“*) — eksperimentalna mašina, razvijena 1949. na Univerzitetu u Mančesteru, na kojoj je testirana tehnologija vakuumskih cevi,
* njen naslednik Mančesterski Mark 1 (*Manchester Mark 1*),
* EDSAC — razvijen 1949. na Univerzitetu u Kembridžu,
* MESM razvijen 1950. na Kijevskom elektrotehničkom institutu i
* EDVAC koji je prvi dizajniran, ali napravljen tek 1951. na Univerzitetu u Pensilvaniji.

Tvorci računara EDVAC, počeli su 1951. godine proizvodnju prvog komercijalnog računara UNIVAC – *UNIVersal Automatic Computer* koji je prodat u, za to doba neverovatnih, 46 primeraka.

### II generacija računara (od kraja 1950-ih do polovine 1960-ih)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/PDP-1_System_Building_Block_No._4106.jpg/600px-PDP-1_System_Building_Block_No._4106.jpg)

II generacija računara koristila je tranzistore umesto vakuumskih cevi. Iako je tranzistor otkriven još 1947. godine, tek sredinom pedesetih počinje da se koristi umesto vakuumskih cevi kao osnovna elektronska komponenta u okviru računara. Tranzistori su izgrađeni od tzv. poluprovodničkih elemenata (obično silicijuma ili germanijuma). U poređenju sa vakuumskih cevima, tranzistori su manji, zahtevaju manje energije te se manje i greju. Tranzistori su unapredili ne samo procesore i memoriju već i spoljašnje uređaje.

Počeli su da se široko koriste magnetni diskovi i trake, započelo je umrežavanja računara i čak korišćenje računara u zabavne svrhe (implementirana je prva računarska igra *Spacewar!* za računar PDP-1). U ovo vreme razvijeni su i prvi jezici višeg nivoa (FORTRAN, LISP, ALGOL, COBOL). U to vreme kompanija IBM dominirala je tržištem — samo računar IBM 1401, prodat u više od deset hiljada primeraka, pokrivao je oko trećinu tada postojećeg tržišta.

### III generacija računara (od polovine 1960-ih do sredine 1970-ih)

![](https://upload.wikimedia.org/wikipedia/commons/8/8d/Bundesarchiv_B_145_Bild-F038812-0014%2C_Wolfsburg%2C_VW_Autowerk.jpg)

III generacija računara bila je zasnovana na integrisanim kolima smeštenim na silicijumskim (mikro)čipovima. Prvi računar koji je koristio ovu tehnologiju bio je IBM 360, napravljen 1964. godine.

Nova tehnologija omogućila je poslovnu primenu računara u mnogim oblastima. U ovoj eri dominirali su mejnfrejm (engl. mainframe)mejnfrejm računari računari koji su bili izrazito moćni za to doba, čija se brzina merila milionima instrukcija u sekundi (engl. MIPS; na primer, neki podmodeli računara IBM 360 imali su brzinu od skoro 1 MIPS) i koji su imali mogućnost skladištenja i obrade velike količine podataka te su korišćeni od strane vlada i velikih korporacija za popise, statističke obrade i slično. Kod računara ove generacije uveden je sistem deljenja vremena (engl. timesharing) koji dragoceno procesorsko vreme raspodeljuje i daje na uslugu različitim korisnicima koji istovremeno rade na računaru i komuniciraju sa njim putem specijalizovanih terminala. U ovo vreme uvedeni su prvi standardi za jezike višeg nivoa (npr. ANSI FORTRAN). Korišćeni su različiti operativni sistemi, uglavnom razvijeni u okviru kompanije IBM. Sa udelom od 90%, kompanija IBM je imala apsolutnu dominaciju na tržištu ovih računara.

Pored mejnfrejm računara, u ovom periodu široko su korišćeni i mini računari (engl. minicomputers) koji se mogu smatrati prvim oblikom ličnih (personalnih) računara. Procesor je, uglavnom, bio na raspolaganju isključivo jednom korisniku. Obično su bili veličine ormana i retko su ih posedovali pojedinci (te se ne smatraju kućnim računarima). Tržištem ovih računara dominirala je kompanija DEC – Digital Equipment Corporation sa svojim serijama računara poput PDP-8 i VAX. Za ove računare, obično se vezuje operativni sistem Unix i programski jezik C razvijeni u Belovim laboratorijama (engl. Bell Laboratories), a često i hakerska 22 kultura nastala na univerzitetu MIT (engl. Massachusetts Institute of Technology).

### IV generacija računara (od ranih 1970-ih)

IV generacija računara zasnovana je na visoko integrisanim kolima kod kojih je na hiljade kola smešeno na jedan silikonski čip.

U kompaniji Intel 1971. godine napravljen je prvi mikroprocesor Intel 4004 — celokupna centralna procesorska jedinica bila je smeštena na jednom čipu. Iako prvobitno namenjena za ugradnju u kalkulatore, ova tehnologija omogućila je razvoj brzih a malih računara pogodnih za ličnu upotrebu.

![](https://upload.wikimedia.org/wikipedia/en/c/cb/Popular_Electronics_Cover_Jan_1975.jpg)

Časopis Popular electronics nudio je 1975. godine čitaocima mogućnost naručivanja delova za sklapanje mikroračunara MITS Altair 8800 zasnovanog na mikroprocesoru Intel 8080 (nasledniku mikroprocesora Intel 4004 ). Interesovanje među onima koji su se elektronikom bavili iz hobija bio je izuzetno pozitivan i samo u prvom mesecu prodato je nekoliko hiljada ovih „uradi-sam“ računara. Smatra se da je Altair 8800 bio inicijalna kapisla za „revoluciju mikroračunara“ koja je usledila narednih godina. Altair se vezuje i za nastanak kompanije Microsoft — danas jedne od dominantnih kompanija u oblasti proizvodnje softvera. Naime, prvi proizvod kompanije Microsoft bio je interpretator za programski jezik BASIC za Altair 8800.

Nakon Altaira pojavljuje se još nekoliko računarskih kompleta na sklapanje. Prvi mikroračunar koji je prodavan već sklopljen bio je Apple, na čijim temeljima je nastala istoimena kompanija, danas jedan od lidera na tržištu računarske opreme.

Kućni računari koristili su se sve više — uglavnom od strane entuzijasta — za jednostavnije obrade podataka, učenje programiranja i igranje računarskih igara. Kompanija Commodore je 1977. godine predstavila svoj računarom Commodore PET koji je zabeležio veliki uspeh. Commodore 64, jedan od najuspešnijih računara za kućnu upotrebu, pojavio se 1982. godine. Iz iste kompanije je i serija Amiga računara sa kraja 1980-ih i početka 1990-ih. Pored kompanije Commodore, značajni proizvođači računara toga doba bili su i Sinclair (sa veoma popularnim modelom ZX Spectrum), Atari, Amstrad, itd. Kućni računari ove ere bili su obično jeftini, imali su skromne karakteristike i najčešće koristili kasetofone i televizijske ekrane kao ulazno-izlazne uređaje.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Commodore_64_with_the_external_power_supply_and_Commodore_1530_%28C2N%29_Datasette.jpg/640px-Commodore_64_with_the_external_power_supply_and_Commodore_1530_%28C2N%29_Datasette.jpg)

Najznačajnija računarska kompanija toga doba — IBM — uključila se na tržište kućnih računara 1981. godine, modelom IBM PC 5150, poznatijem jednostavno kao IBM PC ili PC (*Personal computer*). Zasnovan na Intelovom mikroprocesoru Intel 8088, ovaj računar veoma brzo je zauzeo tržište računara za ličnu poslovnu upotrebu (obrada teksta, tabelarna izračunavanja...). Prateći veliki uspeh IBM PC računara, pojavio se određen broj klonova — računara koji nisu proizvedeni u okviru kompanije IBM, ali koji su kompatibilni sa IBM PC računarima. PC arhitektura vremenom je postala standard za kućne računare. Sredinom 1980-ih, pojavom naprednijih grafičkih (VGA) i zvučnih (SoundBlaster) kartica, IBM PC i njegovi klonovi stekli su mogućnost naprednih multimedijalnih aplikacija i vremenom su sa tržišta istisli sve ostale proizvođače. I naslednici originalnog IBM PC računara (IBM PC/XT, IBM PC/AT, . . . ) bili su zasnovani na Intelovim mikroprocesorima, pre svega na x86 seriji (Intel 80286, 80386, 80486) i zatim na seriji Intel Pentium. Operativni sistem koji se tradicionalno vezuju uz PC računare dolaze iz kompanije Microsoft — prvo MS DOS, a zatim MS Windows. PC arhitektura podržava i korišćenje drugih operativnih sistema (na primer, GNU/Linux).

Jedini veliki konkurent IBM PC arhitekturi koji se sve vreme održao na tržištu (pre svega u SAD) je serija računara Macintosh kompanije Apple. Macintosh, koji se pojavio 1984., je prvi komercijalni kućni računar sa grafičkim korisničkim interfejsom i mišem. Operativni sistem koji se i danas koristi na Apple računarima je Mac OS.

Iako su prva povezivanja udaljenih računara izvršena još krajem 1960-ih godina, pojavom interneta i veba (engl. *World Wide Web* — WWW), većina računara postaje međusobno povezana sredinom 1990-ih godina. Danas se veliki obim poslovanja izvršava u internet okruženju, a domen korišćenja računara je veoma širok. Došlo je do svojevrsne informatičke revolucije koja je promenila savremeno društvo i svakodnevni život. Na primer, tokom prve decenije XXI veka došlo je do pojave društvenih mreža, koje postepeno preuzimaju ulogu osnovnog medijuma za komunikaciju.

Tržištem današnjih računara dominiraju računari zasnovani na PC arhitekturi i Apple Mac računari. Pored stonih (engl. *desktop*) računara popularni su i prenosni (engl. *notebook* ili *laptop*) računari. U najnovije vreme, javlja se trend tehnološke konvergencije koja podrazumeva stapanje različitih uređaja u jedinstvene celine, kao što su tableti (engl. *tablet*) i pametni telefoni (engl. *smartphone*). Operativni sistemi koji se danas uglavnom koriste na ovim uređajima su IOS kompanije Apple, kao i Android kompanije Google.

Pored ličnih računara u IV generaciji se i dalje koriste mejnfrejm računari (na primer, IBM Z serija) i superračunari (zasnovani na hiljadama procesora). Na primer, kineski superračunar Tianhe-2 radi brzinom od preko 30 petaflopsa (dok prosečni lični računar radi brzinom reda 10 gigaflopsa).

![Tianhe-2](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Tianhe-2.jpg/800px-Tianhe-2.jpg)


Izvor: Filip Marić, Predrag Janičić, *Programiranje 1: Osnove programiranja kroz programski jezik C*, Beograd, 2015.
