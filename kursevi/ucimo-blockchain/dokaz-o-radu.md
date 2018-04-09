---
title: Dokaz o radu
layout: lekcija-blockchain
permalink: /dokaz-o-radu
---

**Dokaz o radu  (*proof of work*) je prvi i najviše korišćen metod postizanja konsenzusa.**

Kod dokaza rada, rudarski čvor (računalo ili skup računala) radi sljedeće:

- s interneta preuzima nalog za odobravanje određenog skupa transakcija. Drugim riječima, od drugih rudara s kojima je u kontaktu (ovisno o geografskoj blizini) dobiva podatke u kojima je zapisano tko kome šalje koliko neke kriptovalute.
- gradi blok, tj. popis transakcija koje treba potvrditi. Koliko transakcija će biti u bloku ovisi o njihovoj veličini – transakcije s mnogo adresa na mnogo adresa su veće od onih koje šalju s jedne na jednu-dvije.
- spaja sve te podatke iz svih transakcija (doslovno ih zalijepi u jednu cjelinu), doda im još neke podatke, i tada pogađa zadnji dio podataka. Traži vrijednost koja, kada se pribroji tom skupu slijepljenih podataka i hašira, daje *hash* koji odgovara nekim pravilima (npr. u Bitcoinu, mora imati određeni broj nula na početku). Računalo dakle doslovno radi sljedeće: “*Pokušaj zbrojiti ovo sve i broj 1. Nije točno? Ok, pokušaj zbrojiti ovo sve i broj 2. Nije točno? Ok, pokušaj…*”
- jačina računala ovisi o tome koliko tih pokušaja pogodaka na sekundu ono može izvesti.
- nakon pogotka, rudarski čvor koji je uspio u zadatku dobiva nagradu, koja trenutno iznosi 12.5 BTC kod bitcoin rudarenja, ili npr. 6.18 XMR ako se rudari Monero.

**Što više računarske snage čvor ima, verovatnije je da će prvi rešiti matematički zadatak, i dobiti nagradu brže. Ovo je ujedno razlog zašto dolazi do velikog udruživanja rudarske bazene (*mining pool*).**

Dokaz o radu trenutno koriste gotovo sve kriptovalute.

## Prednosti

Prednosti ove metode su:

- efekat vanjskog faktora. Kod dokaza rada, u samu proizvodnju novog novca i u njegovu cirkulaciju, ulaže se vanjski faktor – struja i hardver. Potrošnju struje ni trošak izrade hardvera nije moguće vratiti.
- jednostavno udruživanje u rudarski bazen (*mining pool*). Lako je programski uzeti hasheve jednog rudara, pribrojiti ih drugima, i tako zajednički rudariti. Mnogo računala tako mogu rudariti zajedno.
- korisno za krajeve s previše električne energije, recimo Kinu s neiskorištenim hidroelektranama.

## Nedostaci

Nedostaci ove metode:

- rudarenje nije moguće na malim uređajima poput pametnih telefona.
- rudarenje blokova je sporo. Kod bitcoina, radi se o jednom bloku svakih 10 minuta, i onoliko transakcija koliko stane u taj blok će se obraditi. Sve ostale čekaju, što dovodi do dugih perioda čekanja za potvrdu transakcije, ili skupe troškove slanja (skuplje transakcije prioritiziraju se i bivaju uključene u blok prije jeftinijh).
- rudarenje već danas troši nevjerojatne količine struje. Samo rudarenje jednog bloka košta više struje nego je nekim državama potrebno kroz cijelu godinu ukupno. To će se samo još pogoršati. Ovisnost kriptovalute o velikim količinama električne energije je neodrživa. Također, znači da poskupljenje struje ili limit na trošenje struje za rudarenje može zaustaviti cijelu mrežu.
- rudarenje omogućava centralizaciju valute. Npr. Kina već sada ima preko 80% hashing moći bitcoin mreže, što znači da je 80% svih blokova izrudareno u Kini. Ako se njihovi karteli udruže, imamo 80% napad, ne 51% napad.
- Jer se blok nagrada postepeno smanjuje, rudari dobivaju sve manje tokena. Ujedno, kako više ljudi rudari, težina rudarenja se povećava, dakle rudarenje postaje sustavno skuplje. Kako rudarenje postaje skuplje u odnosu na zaradu, manje rudara se trudi oko te valute i izlaze iz sustava. Valuta samu sebe sabotira. Manje računalne moći među rudarima neke valute znači više šanse za 51% napad.


Izvor: [Po čemu se razlikuju Proof of Work, Proof of Stake, i Delegated PoS metoda?](https://bitfalls.com/hr/2017/10/23/whats-the-difference-between-proof-of-work-pow-proof-of-stake-pos-and-delegated-pos/)
