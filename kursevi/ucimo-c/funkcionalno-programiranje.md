---
title: Funkcionalno programiranje
layout: lekcija-c
permalink: /funkcionalno-programiranje
---

**Funkcionalno programiranje tretira programe kao funkcije, koje se zadaju korišćenjem kompozicije funkcija i rekurzije.** Zbog toga se u funkcionalnim jezicima funkcije mogu koristiti mnogo fleskibilnije, a implementacije ovih jezika posvećuju veliku pažnju optimizaciji rada sa funkcijama da bi programi napisani u ovom stilu bili što efikasniji.

Funkcionalni jezici spadaju u deklarativne programske jezike. Za razliku od imperativnih jezika, deklarativni programski jezici apstrahuju ne samo od konkretnog skupa mašinskih instrukcija računara, veći i od samog modela računara kao mašine sa stanjima i memorijskim lokacijama koje se menjaju izvršavanjem naredbi. U funkcionalnom stilu programiranja program predstavlja matematički izraz, a izvršavanje programa se realizuje kao računanje vrednosti tog izraza.

![Funkcionalno programiranje](https://cdn-images-1.medium.com/max/256/1*FqUSf96rhnS-38hDNvKxZQ.png)

Značajno je uporediti osnovni koncept funkcionalnog programiranja sa pristupom logičkog programiranja. U logičkom programiranju, program se zadaje kao niz predikatskih formula prvog reda. Ovaj pristup je još bliži ideji o programiranju kao formalnoj specifikaciji problema. Osnovni problem ovog pristupa je, čini se, upravo to što je apstrahovan jedan korak previše, apstrahovana je razlika izmed̄u izračunljivog i neizračunljivog. Naime, problem provere da li dati skup formula predikatskog računa prvog reda ima model je neodlučiv, pa čak i ako je specifikacija korektna, nije jasno da li će program dati rezultat u konačnom vremenu.

Nasuprot tome, u funkcionalnom programiranju se izračunljivost posmatra kao suštinsko svojstvo semantike programa. Zapisi programa se mogu posmatrati kao zapisi rekurzivnih funkcija nad struktuiranim domenima. Ako je rekurzija dobro zasnovana, i program će dati rezultat. Apstrakcija mehanizma izvršavanje i ovde otežava rezonovanje o efikasnosti programa, ali je moguće dobiti približnu sliku o efikasnosti funkcionalnih programa ako se za jedan korak izrvršavanja programa uzme izračunavanje vrednosti atomične funkcije ili zamena imena korisničke funkcije njenom definicijom.

## Istorija

Istorija funkcionalnih programskih jezika započinje sa jezikom **LISP** (*LISt Processing*), kojeg je definisao McCarthy krajem 50-ih godina. Jednostavnost LISP-a je doprinela njegovoj popularnosti koja i danas traje, iako bi se ovom jeziku sa današnjeg stanovišta mogle uputiti mnoge zamerke. LISP je netipiziran jezik pojednostavljene sintakse bazirane na s-izrazima. Pošto je LISP često bio implementiran kao interpreter, mnoge njegove verzije su zasnovane na dinamičkom vezivanju promenljivih i po pravilu imaju striktnu semantiku.

Zbog ovoga se ponekad LISP i ne smatra funkcionalnim jezikom u savremenom smislu te reči. Savremeni pristup funkcionalnom programiranju započinje sa Landinom koji je 1966. godine definisao jezik **ISWIM** (*If you See What I Mean*), koji je bio baziran na lambda računu, te je podržavao statičko vezivanje i nestriktnu semantiku. Pored toga, on je doneo i savremeni stil sintakse funkcionalnih programa sa infiksnim matematičkim operatorima i korišćenjem uvlačenja umesto separatora za pregledniji zapis programa. Sledeći značajan korak je bio jezik **ML** (*Meta Language*). Nastao je inicijalno kao jezik za zadavanje taktike u dokazivaču teorema LCF (*Logic for Computable Functions*) razvijen u Edinburgu. Njegov najznačajniji doprinos je uvod̄enje sistema tipova u funkcionalni programski jezik. Zahvaljujući Milner-Hindley algoritmu, kompajler sam otkriva tipove funkcija i ukazuje na greške u primeni funkcija na argumente. Od tada sofisticirani sistemi tipova postaju značajna komponenta savremenih funkcionalnih jezika i jedan od aspekata po kome će funkcionalni jezici biti znatno iznad ostalih. ML je imao striktnu semantiku koja omogućava efikasnu implementaciju, ali su se kasnije pojavile i verzije sa lenjom semantikom (Lazy ML). Bočne efekte ML dozvoljava, ali ne ohrabruje stil programiranja koji ih intenzivno koristi. ML je danas dosta u upotrebi, a razvijaju se i nova proširenja jezika.

Konačno, najmoderniji pravac u oblasti razvoja funkcionalnih jezika je započeo serijom jezika D. Turner-a. Funkcije definisane u ovim programima liče na jednačine, što pogoduje dokazivanju njihovih svojstava indukcijom po strukturi programa. Ovi jezici su nestriktne semantike, podržavaju algebarske tipove, pattern matching i ZF izraze. 1990. godine definisan je programski jezik **Haskell** sa ciljem da se uspostavi standard u oblasti nestriktnih, čisto funkcionalnih programskih jezika koji bi povećao mogućnosti funkcionalnih jezika da izad̄u iz laboratorija i dožive širu upotrebu. Koliko se u tome uspelo, i posle 10 godina ostaje otvoreno pitanje. Stopama Haskell-a je krenuo i čisto funkcionalni jezik **Clean**. On koristi sistem tipova sa (konstruktorskih) klasa kao i u Haskell-u, ali dodaje u sistem tipova elemente linearne logike što omogućava efikasniju implementaciju i interakciju sa spoljašnjim okruženjem. Takod̄e dozvoljava i egzistencijalne tipove. U toku je razvoj nove verzije jezika Clean koja bi podržala i multiparametarske klase i druge eksperimentalne osobine prisutne u nekim implementacijama Haskell-a.

![haskell](https://cdn-images-1.medium.com/max/800/1*CG-y4web1vxARdTakH-k9Q.png)

## Upotreba u praksi

**Funkcionalni programski jezici se i dalje znatno manje koriste u praksi nego imperativni.** Ovo se delom može pripisati tome što na popularnost nekog jezika utiče čitav niz okolnosti koje nisu direktno vezani za kvalitet programskog jezika, već su istorijskog ili ekonomskog karaktera. Treba, med̄utim, priznati da funkcionalni jezici još nisu dostigli performanse koje pružaju imperativni jezici. Osim toga, sofisticirani sistemi tipova funkcionalnih programskih jezika su teško razumljivi prosečnom programeru, iako je njihov potencijal u poboljšanju softvera veliki.

**Dobra matematička zasnovanost, po svemu sudeći, nije odlučujući faktor za efikasnost razvoja softvera.** Formalna verifikacija softvera je dugotrajan posao koji je isplativ samo za sisteme od kojih se očekuje visok stepen pouzdanosti, a takvi sistemi se često izvršavaju u realnom vremenu, što predstavlja dodatne, iako ne i nerešive, probleme za implementaciju funkcionalnih programskih jezika. Ovakva situacija dovodi do problema sa finansiranjem projekata razvoja funkcionalnih programskih jezika. Mala upotreba ovih jezika u praksi otežava i nalaženje kriterijuma za ocenu praktičnog značaja pojedinih teorijski privlačnih mogućnosti funkcionalnih programskih jezika.

Ne može se, med̄utim, poreći da komercijalno primenljivi i popularni programski jezici povremeno usvajaju ideje primenjene u funkcionalnim jezicima. Zato se oblast funkcionalnih programskih jezika može smatrati za izvor teorijski dobro zasnovanih ideja koje će vremenom naći svoju primenu ukoliko suštinski doprinose procesu razvoja softvera.

![](https://cdn-images-1.medium.com/max/288/1*exgznl7z65gttRxLsMAV2A.png)

Izvor: Viktor Kunčak, *Modularni interpreteri u Haskell-u (Diplomski rad)*, Prirodno-matematički fakultet, Novi Sad, 2000.
