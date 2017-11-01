---
title: Faze razvoja softvera
layout: lekcija-razvoj
permalink: /faze-razvoja-programa
---

**Tokom izrade programa, bez obzira koliko su oni jednostavni, potrebno je voditi računa o velikoj količini informacija i pravila neophodnih za ispravno funkcioniranje programa.**

Iz tog razloga, proces izrade programa može se podijeliti na slijedeće faze:

* Analiza problema
* Postavljenje modela
* Izrada algoritma
* Izrada dijagrama toka
* Kodiranje programa
* Testiranje programa
* Dokumentacija programa
* Eksploatacija programa

U principu, proces izrade programa je iterativan postupak, što znači da je vrlo često potrebno vratiti se na neki od prethodnih koraka i izvršiti potrebnu korekciju i modifikaciju.

![Vodopad model](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/600px-Waterfall_model.svg.png)

## Analiza problema

Elementarni uvjet koji mora biti ispunjen da bi se napravio program je potpuno razumijevanje i poznavanje zadatka koji želimo isprogramirati. Odnosno, ukoliko nam nije jasno kako bi riješili zadatak bez računala, definitivno ga je nemoguće riješiti pomoću računala, odnosno isprogramirati. Stoga je ANALIZA PROBLEMA prvi korak u izradi svakog programa.

Ona se u principu sastoji od 3 osnovna segmenta:
- sagledavanje problema
- definiranje ulaznih podataka
- definiranje izlaznih podataka

Prilikom sagledavanja problema bitno je uočiti sve relevantne činjenice i podatke koji opisuju problem, te uočiti koji su to ulazni podaci koje treba obraditi da bi došli do izlaznih podataka (rezultata).

Evidentno je da, pogotovo kod složenijih problema, u fazi analize nije uvijek moguće definirati sve ulazne i izlazne podatke. Stoga, u trenutku spoznaje da svi podaci nisu definirani, potrebno je ponoviti i nadopuniti analizu problema.

## Postavljanje modela

Slijedeći korak u izradi programa je postavljanje modela, odnosno odabir metodologije pomoću koje se zadani problem može riješiti. Osnovna karakteristika ove faze izrade programa je potpuno razumijevanje zadanog zadatka te definiranje matematičkog modela, odnosno metodologije pomoću koje se zadatak može izvršiti. Model odnosno metoda za rješenje postavljenog problema proizlazi prije svega iz samog zadatka, te iz poznavanja:

- fizike problema
- tehničkih ili nekih drugih propisa i standarda
- matematičkih metoda i
- logike obrade ulaznih informacija s ciljem da se dobije izlazni rezultat.

U trenutku kada se postavi model, odnosno definira metodologija rješavanja problema, moraju biti definirani svi ulazni podaci, metodologija njihove obrade, te naravno izlazne informacije.

Potrebno je naglasiti da nema recepta za izradu modela. Kreiranje modela i metodologije obrade su umni i kreativni posao, koji prije svega ovisi o poznavanju postavljenog problema.

**Ukoliko problem nije moguće riješiti pomoću postavljenog modela i metodologije "ručno" bez računala, model je neispravan i nije primjenjiv za programiranje na računalu.**

## Izrada algoritma

U ovoj fazi izrade programa rezultati analize problema i postavljenog modela se formiraju u formu procedure, koja opisuje sve neophodne operacije i njihov redoslijed nužan za izvođenje programa. Proces izrade algoritma uz malo iskustva je u biti rutinski posao, ali samo pod uvjetom da postoje ispravna analiza i model sa metodologijom rješavanja problema.

## Izrada dijagrama toka

Dijagram toka programa je simboličko prikazivanje algoritma pomoću simbola dijagrama toka.

Simboli dijagrama toka su standardizirani i u principu je moguće na osnovu algoritma predstavljenog dijagramom toka napisati program u bilo kojem programskom jeziku, odnosno dijagram toka je opća simbolička forma koja omogućava jednoznačno kodiranje programa.

Za programera početnika izrada dijagrama toka je važan korak kojeg nikako ne bi trebao zanemarivati. Današnji programski jezici, tehnike programiranja i alati razvojnih okolina za iskusne programere nude dovoljno alternativa koje eliminiraju potrebu izrada dijagrama toka. Također, standardni simboli "klasičnog" dijagrama toka ne pokrivaju sve situacije koje nastupaju u današnjim tehnikama programiranja. U šezdesetim i sedamdesetim godinama proces razvoja programa bio je mnogo mukotrpniji nego danas, pa su dijagrami tokova bili od velike koristi pri "debugiranju" i održavanju programa.

Danas se razvijaju daleko složeniji programski sustavi kod kojih se dijagramski prikazi rade na višim razinama organizacije i strukture programskog koda, kao što su npr. UML dijagrami.

## Kodiranje programa

Ova faza obuhvaća kodiranje programa opisanog dijagramom toka u neki od simboličkih programskih jezika.

Svaki simbolički jezik posjeduje svoj alfabet (niz znakova koji poznaje) i sintaksu (pravila po kojima se pišu instrukcije). Stoga je proces kodiranja programa u nekom od programskih jezika u biti prevođenje programa iz simbola dijagrama toka u programsku formu definiranu alfabetom, sintaksom i instrukcijama konkretnog programskog jezika.

## Testiranje programa

Ova faza izrade programa služi za provjeru odnosno verifikaciju programa - da li napravljeni program, kada se izvrši u stroju, obavlja postavljeni zadatak potpuno korektno. Nema generalnog postupka s kojim je uvijek moguće izvršiti apsolutnu verifikaciju svakog programa, pogotovo kod složenih programskih sistema, jer nije moguće pripremiti ulazne podatke testiranja i rješenja za njih za sve moguće kombinacije ulaznih podataka. Zbog toga se testiranje i verifikacija programa vrši za najkarakterističnije kombinacije ulaznih podataka za koje se znaju sva rješenja, ili ukoliko to nije moguće, za koje se znaju djelomična rješenja.

Ukoliko program ne zadovolji prilikom testiranja potrebno je otkriti što ne valja i ovisno o vrsti greške vratiti se na neku od prethodnih faza izrade programa. U ovoj fazi najčešće otkrivamo greške u algoritmima ili u modelu problema. Jedna vrsta tih grešaka se popularno nazivaju "bugovi".

Grešku (posljedicu) je relativno lako uočiti prilikom testiranja, ali je redovito vrlo teško u složenijem programu pronaći uzrok greške, pogotovo početnicima i programerima s malo iskustva. U ovakvim situacijama dolaze do izražaja razlike u "kvaliteti" programiranja - organizaciji i načinu pisanja programskog koda. Razvijene su mnoge metode razvoja složenih programskih sustava koje nastoje eliminirati navedene i druge probleme.

Nažalost, većina današnjeg aplikativnog softvera je toliko složena da i pored vrlo opsežnih testiranja u toku razvoja ne budu otkrivene sve greške prije lansiranja na tržište. Redovita je pojava da greške otkrivaju tek korisnici tijekom eksploatacije programa i prijavljuju ih proizvođaču kroz unaprijed određene mehanizme komunikacije. Proizvođač tada izdaje tzv. "service pack"-ove kojima se zamjenjuju dijelovi programskog sustava u kojima su pronađene greške.

## Dokumentacija programa

Nakon što je program testiran i verificiran, potrebno ga je dokumentirati. Dokumentacija programa sastoji se iz dva osnovna dijela:
* tehnička dokumentacija (za programe sa uskom domenom primjene, najčešće za
točno određene inženjerske probleme)
* korisnička dokumentacija

Tehnička dokumentacija se sastoji iz:
- opisa problema
- opisa modela i metode rješenja problema
- dijagrama toka i listinga programa (ako je tako ugovoreno)
- postupka instalacije programa
- postupka eksploatacije programa
- test primjera sa rezultatima

Korisnička dokumentacija je namijenjena korisnicima programa, i opisuje postupak korištenja programa, kako se zadaju ulazni podaci i kako se interpretiraju izlazni rezultati.

![Iterativni model](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Iterative_development_model.svg/800px-Iterative_development_model.svg.png)

## Eksploatacija programa

Bez obzira koliko to na prvi pogled izgledalo nelogično, eksploatacija programa je ujedno i jedna od faza njegovog razvoja. Praksa i iskustvo ukazuju da svi programi imaju svoj životni vijek, i da tokom svog "života" doživljavaju modifikacije i poboljšanja koje proizlaze iz iskustva stečenih tijekom njihove eksploatacije. Odnosno, drugim riječima rečeno, nakon određenog vremena potrebno je vratiti se u neku od prethodnih faza izrade programa, obično je to modeliranje ili izrada algoritma, i izvršiti njegovu korekciju i poboljšanje. Stoga je pri razvoju složenih programskih sustava uvijek (već od samog početka – postavljanja modela) potrebno voditi računa o svim aspektima održavanja, tj. daljnim modifikacijama i nadogradnji programskog sustava.

Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi I*, Zagreb, 2005.
