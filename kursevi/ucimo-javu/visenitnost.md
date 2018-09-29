---
title: Višenitni rad
layout: lekcija-java
permalink: /java-visenitnost
---

**Prvi kompjuteri mogli su obavljati zadaće samo jednu po jednu. Programi su se izvršavali sekvencijalno, jedan po jedan i svaki je zauzimao sve resurse.**

Takav se način rada naziva serijska (*batch*) obrada. To je efikasan način maksimalne iskoristivosti računala, jer se gotovo sve CPU vrijeme troši na stvarnu obradu. Međutim, serijska obrada je nepovoljna ako programi koji traju nekoliko sekundi moraju čekati na završetak programa od nekoliko dana.

Mnogi programi imaju potrebu obavljati više poslova istodobno. Web browser na primjer, može ispisivati datoteku u pozadini dok istodobno skida stranicu u jednom prozoru i formatira je kako sadržaj pristiže. Sposobnost individualnog programa da radi više od jedne stvari istodobno najefikasnije se implementira kroz koncept niti (*thread*).

## Što je nit?

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Multithreaded_process.svg/450px-Multithreaded_process.svg.png)

Nit (*thread*) možemo definirati kao tok izvođenja operacija koji se događa nezavisno od procesa ili događaja u okolini. Nit je poput klasičnog programa koji započinje u točki A i završava u točki B. On nema u sebi petlju događaja, već se izvršava ne gledajući što se događa oko njega. Bez niti cijeli bi program povremeno morao stajati zbog nekog procesa koji intenzivno koristi CPU ili neke beskonačne petlje. Višenitnost omogućuje da zahtjevni procesi ne ometaju ostale procese u njihovom izvršavanju.

Pokazuje se da je višenitnost (*multithreading*) složenija od višezadaćnosti (*multitasking*). Razlog relativno jednostavnom implementiranju multitaskinga je što su programi u pravilu izolirani jedni od drugih. Niti u jednom programu, međutim, nisu međusobno izolirane i moraju voditi računa o drugima. Na primjer, ako za vrijeme dok se u jednoj niti ispisuje neki tekst, korisnik u drugoj niti obriše dio tog istog teksta, nastaje problem: što u tom slučaju treba biti ispisano?

Okruženja koja, poput Jave, podržavaju niti imaju mehanizam sinkronizacije. Nitima je omogućeno privremeno zaključavanje resursa koje dijele s drugim nitima, čime se osigurava integritet podataka. Sinkronizaciju, međutim, valja koristiti s mjerom jer će prednosti koje donose niti biti poništene ako cijeli sustav bude često morao čekati dok se pojedini resurs ne otključa. Pravilni odabir objekata i metoda koje treba sinkronizirati pripada vještini programiranja i osjećaj za njega stječe se vježbom.

## Kako Java koristi niti?

Java programi su po prirodi višenitni. Runtime okolina započinje izvršavanje programa sa `main()` metodom unutar jednog threada. Prikupljanje smeća (*garbage collection*) se obavlja u drugom threadu. Ažuriranje ekrana se pojavljuje u trećem. Mogu se pojavljivati i drugi threadovi. Sve se to događa bez eksplicitnog znanja programera. Dio vremena zanimat će vas samo ono što se događa u primarnom threadu koji sadrži `main()` metodu programa. Tada se ne morate optrerećivati konceptom niti.

Ponekad, međutim, želite dodati vlastite niti nekoj aplikaciji. Najjednostavniji razlog  bio bi izdvojiti duga računanja od ostatka programa. Na primjer, ako želite pronaći desetmilijunti prim broj, ne želite prisiljavati korisnika da čeka besposlen dok računalo to obavlja. Isto vrijedi i za čekanje na veliku grafičku datoteku s mreže. **Svaka vremenski zahtjevna operacija treba biti smještena u zasebnu nit.**

Drugi razlog za korištenje niti je ravnomjerna raspodjela mogućnosti računala između zadaća. Ako želite crtati sličice na ekranu, svejedno želite ostaviti korisniku mogućnost da komunicira. Uporabom niti omogućit ćete da korisnički unos dobije visok prioritet, a crtanje sličica nizak.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
