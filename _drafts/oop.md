Kako i zašto je nastalo objektno orijentisano programiranje?

Tehnike proceduralnog programiranja usredsred̄ene su na procedure, odnosno
operacije koje se obavljaju u programu. Podaci se obično čuvaju u promenljivama,
a sa njima rade funkcije. Podaci i funkcije koje rade sa njima potpuno su odvojeni.
Program radi tako što se promenljive prosled̄uju funkcijama, koje rade nešto sa njima
i vraćaju rezultat. Dakle, proceduralno programiranje je prvenstveno orijentisano na
funkcije. Med̄utim, ovakav pristup prouzrokuje dva velika problema:
— Preterano korišćenje globalnih podataka: programeri često pribegavaju čuvanju
najvažnijih podataka u globalnim promenljivama, da bi im se lako pristupalo iz
svih funkcija u programu. Med̄utim, tako se istovremeno otvaraju vrata za neho-
tično uništavanje ili oštećivanje najvažnijih podataka.
— Projektovanje složenih programa koji se teško održavaju i menjaju: Iako je pre-
poručljivo da se program učini veoma modularnim, tj. da se izdeli u veliki broj
logičkih funkcija, postoji granica koju je programer u stanju da sagleda. Realni
programi imaju na stotine funkcija čiju interakciju je veoma teško sagledati, pa
menjanje kôda postaje izuzetno teško. Pre bilo kakve izmene potrebno je razu-
meti kako će promena uticati na druge delove programa.
Kako su programi postajali složeniji, programeri su shvatili da im je potreban meha-
nizam koji će olakšati projektovanje i održavanje velikih aplikacija. Objektno orijen-
tisan pristup su smislili programeri kao način da sebi olakšaju život, tj. kao odgovor
na softversku krizu koja se ogledala u tome što se softver projektovao duže nego što
je predvid̄eno, koštao više nego što je predvid̄eno i nije zadovoljavao sve postavljene
zahteve.
Objektno orijentisan pristup, kako mu i ime kaže, usredsred̄en je na objekte koji
objedinjuju podatke i funkcije koje rade sa njima. Najvažniji princip koji se koristi pri-
likom definisanja objekata jeste apstrakcija. Objekti su apstrakcije pojmova iz stvar-
nog sveta, što znači da se modeliraju tako da sadrže samo one osobine koje su bitne
za program. Na primer, ako klasa Osoba modelira pojam osobe iz stvarnog sveta, pro-
gramu je možda važno da zna koliko ta osoba ima godina i kako se zove, a nije bitno
kog je pola.

Izvor: Irina Branović, *Objektno orijentisano programiranje: C++*, Beograd, 2011.
