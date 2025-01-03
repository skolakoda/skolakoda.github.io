---
title: Uvod u strukture podataka
layout: lekcija-strukture
permalink: /strukture-podataka-uvod
image: /images/koncepti/podaci/kockice.jpeg
---

![]({{page.image}})

> Ja, u stvari, tvrdim da je razlika između lošeg i dobrog programera u tome da li on smatra svoj kod ili strukture podataka važnijim. Loši programeri brinu o kodu. Dobri programeri brinu o strukturama podataka i njihovim odnosima.
>
> -- <cite>Linus Torvalds</cite>

**Struktura podataka označava način pohrane podataka koji omogućava njihovu efikasnu uporabu. Dobar odabir strukture podataka često omogućuje efikasniji algoritam obrade.**

Različite strukture podataka odgovaraju različitim vrstama programskih problema, a neke su visoko-specijalizirane samo za određene zadatke. U razvoju softvera, izbor struktura podataka jedan je od najvažnijih koraka. Iskustva razvoja velikih sustava pokazala su da kvaliteta i performanse konačnih rješenja u mnogome ovise o izboru najpogodnijih struktura podataka.

Možemo reći da je struktura podataka logički model određene organizacije podataka.

## Osnovne strukture

Slijedeće strukture podataka i operacije na njima temelj su računalne znanosti i brojnih algoritama:

- **[Niz](/nizovi)** (eng. *array*) – niz elemenata smeštenih u uzastopnim memorijskim lokacijama
- **[Lista](/povezana-lista)** (eng. *linked list*) – niz elemenata koji sadrže podatak i pokazivač na slijedeći element
- **[Stog](/stog)** (eng. *stack*) – niz u kojem se dodavanje i brisanje mogu obavljati samo na jednom kraju
- **[Red](/red)** (eng. *queue*) – niz u kojem je dodavanje moguće samo na jednom a brisanje samo na drugom kraju
- **[Rečnik](/recnik)** (eng. *dictionary*) ili **heš tabela** (eng. *hash table*) - struktura koja koristi funkciju heširanja kako bi se elementi sačuvali i brzo pronašli, omogućava efikasno pretraživanje, umetanje i brisanje podataka.
- **Skup** (eng. *set*) - kolekcija jedinstvenih elemenata, obično neuređenih (bez fiksnog redosleda). Implementiran pomoću heš tabele (kod neuređenih) ili stabla (kod uređenih skupova).
- **[Stablo](/stablo)** (eng. *binary tree*) – hijerarhijska struktura sa čvorovima, gde svaki čvor može imati više podčvorova. Najčešći primer je **binarno stablo**, gde svaki čvor ima najviše dva podčvora.
- **[Graf](/graf)** (eng. *graph*) – općenita struktura u kojoj svaki element može biti povezan sa više drugih elemenata. Sastoji se od čvorova (ili vrhova) i ivica (veza između njih).
- **[Zapis](/zapis)** (eng. *record*) - struktura podataka koja sadrži grupu atributa, a svaki može biti različitog tipa. Zapis se obično koristi za predstavljanje entiteta u bazi podataka.

## Osnovne operacije

Četiri osnovne operacije se primjenjuju na svim strukturama podataka:

* **prolaženje** strukture (eng. *traversing*), pristup svakom elementu tačno jedanput, da bi se procesirao
* **nalaženje** elementa koji sadrži željenu vrijednost ili svih elemenata koji ispunjavaju jedan ili više uvjeta
* **dodavanje** novog elementa u strukturu
* **brisanje** određenog elementa iz strukture

Pored ovih operacija, na linearne strukture se primjenjuju i:
- **sortiranje** po određenom redoslijedu
- **spajanje** dvije liste u jednu

Izbor linearne strukture za danu situaciju ovisi o učestalosti primjene neke od navedenih operacija.

## Linearne i nelinearne strukture

![](/images/koncepti/podaci/data-structures.jpg)

Strukture podataka dijele se na linearne i nelinearne. Struktura je linearna ako njeni elementi tvore niz, odnosno slijed – linearnu listu. Dva su osnovna načina prikaza linearnih struktura u memoriji računala:
* sled elemenata ostvaren slijedom memorijskih lokacija (karakteristično za polja)
* sled elemenata ostvaren pokazivačima (karakteristično za povezane liste)

Nelinearne strukture su stabla i grafovi.

## Statičke i dinamičke strukture

**Strukture podataka možemo podeliti na statičke i dinamičke.** Statičke su fiksne veličine i ona se određuje u fazi kompajliranja programa. U ove strukture spadaju na primer **nizovi**, čiju veličinu zadajemo prilikom deklaracije. Nasuprot statičkim postoje i dinamičke strukture podataka, čija veličina može da se menja u toku izvršenja programa.

Statičke strukture se brže obrađuju, ali mogu zauzimati mnogo više od potrebne memorije. Dinamičke strukture koriste tačno onoliko memorije koliko je potrebno ali su teže za implementaciju, jer je potrebno implementirati i upravljanje memorijom. Dinamičke strukture se implementiraju upotrebom pokazivača.

Primeri dinamičkih struktura podataka su **liste**, gde razlikujemo jednostruko povezane i dvostruko povezane liste, zatim **stabla, grafovi**, itd.

## Literatura

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- *Uvod u programiranje - Računarski fakultet*, [Dinamičke strukture podataka](https://petlja.org/BubbleBee/r/lekcije/uvod-u-programiranje/nedelja_11)
