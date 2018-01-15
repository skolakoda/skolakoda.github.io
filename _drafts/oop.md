# Kako i zašto je nastalo objektno orijentisano programiranje?

Tehnike proceduralnog programiranja usredsređene su na procedure, odnosno operacije koje se obavljaju u programu. Podaci se obično čuvaju u promenljivama, a sa njima rade funkcije. Podaci i funkcije koje rade sa njima potpuno su odvojeni. Program radi tako što se promenljive prosleđuju funkcijama, koje rade nešto sa njima i vraćaju rezultat. Dakle, proceduralno programiranje je prvenstveno orijentisano na funkcije. Međutim, ovakav pristup prouzrokuje dva velika problema:

— Preterano korišćenje globalnih podataka: programeri često pribegavaju čuvanju najvažnijih podataka u globalnim promenljivama, da bi im se lako pristupalo iz svih funkcija u programu. Međutim, tako se istovremeno otvaraju vrata za nehotično uništavanje ili oštećivanje najvažnijih podataka.

— Projektovanje složenih programa koji se teško održavaju i menjaju: Iako je preporučljivo da se program učini veoma modularnim, tj. da se izdeli u veliki broj logičkih funkcija, postoji granica koju je programer u stanju da sagleda. Realni programi imaju na stotine funkcija čiju interakciju je veoma teško sagledati, pa menjanje kôda postaje izuzetno teško. Pre bilo kakve izmene potrebno je razumeti kako će promena uticati na druge delove programa.

Kako su programi postajali složeniji, programeri su shvatili da im je potreban mehanizam koji će olakšati projektovanje i održavanje velikih aplikacija. Objektno orijentisan pristup su smislili programeri kao način da sebi olakšaju život, tj. kao odgovor na softversku krizu koja se ogledala u tome što se softver projektovao duže nego što je predviđeno, koštao više nego što je predviđeno i nije zadovoljavao sve postavljene zahteve.

Objektno orijentisan pristup, kako mu i ime kaže, usredsređen je na objekte koji objedinjuju podatke i funkcije koje rade sa njima. Najvažniji princip koji se koristi prilikom definisanja objekata jeste apstrakcija. Objekti su apstrakcije pojmova iz stvarnog sveta, što znači da se modeliraju tako da sadrže samo one osobine koje su bitne za program. Na primer, ako klasa Osoba modelira pojam osobe iz stvarnog sveta, programu je možda važno da zna koliko ta osoba ima godina i kako se zove, a nije bitno kog je pola.

Izvor: Irina Branović, *Objektno orijentisano programiranje: C++*, Beograd, 2011.
