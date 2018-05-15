---
title: Uvod u strukture podataka
layout: lekcija-algoritmi
permalink: /strukture-podataka
image: /images/koncepti/podaci/kockice.jpeg
---

![]({{page.image}})

***U računalnoj znanosti, pojam struktura podataka označava način pohrane podataka u računalu koji omogućava efikasnu uporabu tih podataka. Vrlo često dobar odabir strukture podataka omogućuje i uporabu efikasnijeg algoritma obrade.***

Različite vrste struktura podataka odgovaraju različitim vrstama programskih problema, dapače neke strukture su visokospecijalizirane samo za određene zadatke. U razvoju složenih programskih sustava, izbor struktura podataka koje će
se primjeniti jedan je od najvažnijih koraka. Iskustva razvoja velikih programskih sustava pokazala su da kvaliteta i performanse konačnih rješenja u mnogome ovise o izboru
najpogodnijih struktura podataka. Nakon što su odabrane strukture podataka, često je odmah s time određen i algoritam kojeg treba upotrijebiti.

Ukratko, možemo reći da je “struktura podataka” logički ili matematički model određene organizacije podataka.

## Osnovne strukture

![strukture podataka](/images/koncepti/podaci/strukture-podataka.jpg)

Slijedeće strukture podataka i operacije na njima temelji su računalne znanosti, jer su osnovni elementi brojnih algoritama:

* **[Polje ili niz](/niz)** (eng. *array*) – sekvencijalni niz podataka istog tipa koje imaju zajedničko ime
* **[Slog](/slog)** (eng. *record*) - skup podataka koji mogu biti različitog tipa, niz slogova obično je dio datoteke ili tablice
* **[Lista, povezana lista](/povezana-lista)** (eng. *linked list*) – niz elemenata koji sadrže podatke i pokazivače na slijedeći element
* **[Stog](/stog)** (eng. *stack*) – niz elemenata u kojem se dodavanje i brisanje mogu obavljati samo na jednom kraju niza
* **[Red](/red)** (eng. *queue*) – niz elemenata u kojem je dodavanje moguće samo na jednom kraju a brisanje samo na drugom kraju
* **[Stablo](/stablo), binarno stablo** (eng. *binary tree*) – hijerarhijska struktura u kojoj svaki element može imati samo jednog prethodnika
* **[Graf](/graf)** (eng. *graph*) – općenita struktura u kojoj svaki element može biti povezan sa više drugih elemenata

### Linearne i nelinearne strukture

![](/images/koncepti/podaci/data-structures.jpg)

Strukture podataka dijele se na linearne i nelinearne. Struktura je linearna ako njeni elementi tvore niz, odnosno slijed – linearnu listu. Dva su osnovna načina prikaza linearnih struktura u memoriji računala:
* linearna veza između elemenata ostvarena slijedom memorijskih lokacija – karakteristično za polja
* linearna veza između elemenata ostvarena pokazivačima – karakteristično za povezane liste

Nelinearne strukture su stabla i grafovi.

## Osnovne operacije

Četiri osnovne operacije se primjenjuju na svim strukturama:

* **pristup i obrada** preko svih podataka (eng. *traversing*):
  * pristup svakom elementu strukture točno jedanput, da bi se određeni podatak obradio (procesirao); primjer – učitavanje polja ili matrice
* **pretraživanje**:
  * pronalaženje lokacije elementa strukture koji sadrži željenu vrijednost, ili pronalaženje svih elemenata strukture koji ispunjavaju jedan ili više uvjeta
* **dodavanje** novog elementa u strukturu
* **brisanje** određenog elementa iz strukture

Pored navedenih operacija pristupa i obrade, pretraživanja, dodavanja i brisanja, na linearne strukture se primjenjuju i operacije sortiranja po određenom redoslijedu i spajanja (eng. *merging*) – kombiniranja dvije liste u jednu. Izbor određene vrste linearne strukture za danu situaciju ovisi o relativnoj učestalosti primjene pojedine od navedenih operacija.


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
