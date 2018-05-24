---
title: Otvaranje i zatvaranje fajla u jeziku C
layout: lekcija-c
permalink: /c-otvaranje-i-zatvaranje-fajla
---

Komunikacija s fajlovima vrši se preko spremnika (*buffer*), u koji se privremeno pohranjuju informacije koje se šalju u datoteku. Svrha spremnika je smanjiti komunikaciju s vanjskom memorijom (diskom) i tako povećati efikasnost ulazno-izlaznih funkcija. 

U datoteci `<stdio.h>` deklarirana je struktura `FILE`, koja sadrži sve podatke potrebne za komunikaciju s datotekama (uključujući veličinu i položaj spremnika). 

## Otvaranje fajla

Program koji želi otvariti datoteku mora prvo deklarirati pokazivač na `FILE` kao u ovom primjeru:

```c
FILE *ptvar;
```

Datoteka mora biti otvorena pomoću funkcije `fopen`, prije prve operacije pisanja ili čitanja. Tipično se `fopen` koristi na sljedeći način:

```c
ptvar=fopen(ime,tip);
if(ptvar==NULL)
{
    printf("Poruka o gresci"):
    ......
}
```

gdje je `ime` ime datoteke koja se otvara, a tip jedan od sljedećih stringova:

tip | Značenje
----|-------
"r" | Otvaranje postojeće datoteke samo za čitanje
"w" | Kreiranje nove datoteke samo za pisanje.
"a" | Otvaranje postojeće datoteke za dodavanje teksta.
"r+" | Otvaranje postojeće datoteke za čitanje i pisanje.
"w+" | Kreiranje nove datoteke za čitanje i pisanje.
"a+" | Otvaranje postojeće datoteke za čitanje i dodavanje teksta.

Pri tome treba znati da:

- Ako se postojeća datoteka otvori s "w" ili "w+" njen sadržaj će biti izbrisan i pisanje će početi od početka.
- Ako datoteka koju otvaramo s tipom "a" ili "a+" ne postoji bit će kreirana.
- Ako se datoteka otvara s tipom "a" ili "a+" novi tekst će biti dodavan na kraju datoteke ("a" dolazi od eng. *append*).

Pomoću gornjih oznaka tipova, datoteka će biti otvorena u tekstualnom modu. Da bi se otvorila u binarnom modu treba treba svakom tipu dodati `b`. Time dolazimo do tipova:

- "rb", "wb", "ab" = binarno čitanje, pisanje, dodavanje;
- "rb+" ili "r+b" = binarno čitanje/pisanje (otvaranje);
- "wb+" ili "w+b" = binarno čitanje/pisanje (kreiranje);
- "ab+" ili "a+b" = binarno dodavanje.

Funkcija `fopen` vraća pokazivač na strukturu `FILE` povezanu s datotekom ili `NULL` ako datoteka nije mogla biti otvorena. 

## Zatvaranje fajla

Na kraju programa datoteka treba biti zatvorena funkcijom `fclose` koja uzima kao argument pokazivač na spremnik:

```c
fclose(ptvar);
```

Na primjer, otvaranje i zatvaranje datoteke `primjer.dat` izgledalo bi ovako:

```c
#include <stdio.h>
.......
FILE *fpt;
if((fpt=fopen("primjer.dat","w")) == NULL)
    printf("\nGRESKA: Nije moguce otvoriti datoteku.\n");
.....
fclose(fpt);
```

Funkcija `fclose` vraća nulu ako je datoteka uspješno zatvorena, te `EOF` u slučaju greške.


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
