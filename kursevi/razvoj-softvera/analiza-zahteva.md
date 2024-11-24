---
title: Analiza problema
layout: lekcija-razvoj
permalink: /analiza-zahteva
---

> Najvažniji pojedini aspekt razvoja softvera je biti načisto oko toga šta pokušavaš da napraviš.
>
> -- <cite>Bjarne Stroustrup</cite>

**S obzirom na to da se softver obično piše za naručioce, u procesu analize i specifikovanja problema vrši se intenzivna komunikacija analitičara sa njima.**

Kada se softver pravi po narudžbini, naručioci mogu da budu krajnji korisnici ili njihovi predstavnici, ali čest slučaj u velikim kompanijama je da ulogu naručioca preuzimaju radnici zaposleni u odeljenju prodaje ili marketinga (koji imaju ideju kakav proizvod bi kasnije mogli da prodaju).

Tokom sastanaka često se najpre vrši analiza postojećih rešenja (na primer, postojećeg poslovnog procesa u kompaniji koja uvodi informacioni sistem) i razmatraju se mogućnosti njihovog unapređenja uvođenjem novog softvera. Kako naručioci obično nemaju potrebno informatičko obrazovanje, oni često nisu svesni svih mogućnosti koje novi softver može da im pruži. Jedan od zadataka analitičara je da ovakve mogućnosti uočava i da o njima komunicira sa naručiocima. Naručioci formulišu zahteve (engl. *requirements*) koje softver koji se proizvodi treba da zadovolji. Zahtevi su često neprecizni, pa čak i kontradiktorni, i zadatak analitičara je da ih u saradnji sa naručiocima precizira i uobliči.

## Procena dužine i cene razvoja

> Prva lažna pretpostavka koja podriva rokove razvoja softvera je da će sve proći dobro, tj. da će svaki zadatak trajati samo koliko "treba" da traje. Veliki programerski projekti se, pak, sastoje od mnogo zadataka, od kojih su neki ulančani od početka do kraja. Verovatnoća da će sve proći dobro postaje nestvarno mala.
>
> -- <cite>Fred Brooks</cite>

Pored precizne analize zahteva, zadatak analize je i da se naprave **procene obima, cene i vremena** potrebnog da se projekat realizuje. Preciznije, analiza treba da proceni:

- obim posla koji će da se radi (potrebno je precizno definisati šta projekat treba da obuhvati, a šta ne);
- rizike koji postoje (i da definiše odgovarajuće reakcije projektnog tima u slučaju da nešto pođe drugačije nego što je planirano);
- resurse (ljudske, materijalne) koji su potrebni;
- očekivanu cenu realizacije projekta i njegovih delova;
- plan rada (po fazama) koji je neophodno poštovati.

Obim posla često se izražava u terminima broja potrebnih čovek-meseci (1 čovek-mesec podrazumeva da jedan čovek na projektu radi mesec dana).

Rezultat analize je precizna specifikacija problema. Specifikacijom je potrebno što preciznije opisati problem, prirodu ulaznih podataka i oblik u kome se žele rešenja — izlazni rezultati. Specifikacija programa bavi se pitanjem šta program treba da uradi, kojom brzinom, koja mu je maksimalna dozvoljena veličina, itd. Kada je problem precizno specifikovan, prelazi se na sledeće faze u kojima se modeluje i dizajnira rešenje specifikovanog problema.

> Napravi procenu, udvostruči broj, a onda pređi na narednu jedinicu vremena. Ovo pravilo skalira zadatke na veoma interesantan način: jednominutni zadatak eksplodira stepenom od 120 da uzme dva časa. Jednočasovni zadatak eksplodira \"samo\" stepenom 48 na dva dana, dok jednodnevni posao poraste stepenom od 14 na dve sedmice.
>
> -- <cite>Poul-Henning Kamp</cite>

## Literatura

- Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
