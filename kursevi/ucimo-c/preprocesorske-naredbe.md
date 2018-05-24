---
title: "Preprocesorske naredbe u jeziku C"
layout: lekcija-c
permalink: /preprocesorske-naredbe
---

**Prije prevodenja izvornog koda u izvršni izvršavaju se preprocesorske naredbe.** Svaka linija izvornog koda koja započinje znakom `#` predstavlja jednu preporocesorsku naredbu. Njih izvršava zaseban dio prevodioca koji se naziva preprocesor, i koji prije samog procesa prevodenja na osnovu preprocesorskih naredbi mijenja izvorni kôd.

Opći oblik preprocesorskih naredbi je:

```
#naredba parametri
```

i one nisu sastavni dio jezika C te ne podliježu sintaksi jezika. Svaka preprocesorska naredba završava krajem linije (a ne znakom točka-zarez). Neke od preprocesorskih naredbi su:

```
#include #define #undef #if #ifdef #ifndef #elif #else
```

## Naredba `#include`

Naredba #include može se pojaviti u dva oblika:

```c
#include "ime_datoteke"
```

ili

```c
#include <ime_datoteke>
```

U oba slučaja preprocesor će obrisati liniju s `#include` naredbom i uključiti sadržaj uključene datoteke u izvorni kôd, na mjestu `#include` naredbe. Ako je ime datoteke navedeno unutar navodnika, onda preprocesor datoteku traži u direktoriju u kojem se program nalazi. Ime datoteke navedeno izmedu oštrih zagrada signalizira da se radi o sistemskoj datoteci (npr. `stdio.h`), pa će je preprocesor tražiti na mjestu odredenom operacijskim sustavom. Pod Unix-om to je najčešće direktorij `/usr/include` a postoji i mogućnost da se prevodiocu da instrukcija (`-I`) da te datoteke traži u unaprijed zadanom direktoriju.

Datoteke zaglavlja se najčešće koriste za uključivanje sljedećih veličina:

- Simboličkih konstanti — u `stdio.h` tako imamo `EOF`, `NULL` itd.
- Makro funkcija — na primjer `getchar()` koji je obično definiran kao `getc(stdin)` gdje je `getc()` makro funkcija.
- Deklaracije funkcija — u `string.h` je deklariran niz funkcija za rad sa stringovima.
- Deklaracije struktura — u `stdio.h` se definira struktura `FILE`.
- Definicije tipova — na primjer `size_t`, `time_t`, itd.

Datoteka uključena u izvorni kôd pomoću `#include` naredbe može i sama sadržavati `#include` naredbe.

## Naredba `#define`

Njena je forma sljedeća:

```c
#define ime tekst_zamjene
```

Preprocesor će od mjesta na kome se `#define` naredba nalazi do kraja datoteke svako pojavljivanje imena ime zamijeniti s tekstom tekst zamjene. Do zamjene neće doći unutar struna, tj. unutar dvostrukih navodnika.

Tako će na primjer dio izvornog kôda:

```c
#define PI 3.14
/* neki kod izmedju */
x=2*r*PI;
```

prije prevodenja biti zamijenjen s

```c
x=2*r*3.14;
```

no u naredbi `printf("PI");` do zamjene ne bi došlo. Svako ime definirano u nekoj `#define` naredbi nazivamo makro.

Naredba `#define` može se koristiti i bez teksta zamjene kao:

```c
#define ime
```

Nakon te naredbe ime je definirano, što se može ispitivati pomoću `#if` naredbe. Ako je neko ime definirano pomoću `#define`, definicija se može poništiti pomoću naredbe `#undef`.


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
