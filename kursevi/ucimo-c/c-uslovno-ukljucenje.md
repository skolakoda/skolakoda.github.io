---
title: Uslovno uključivanje
layout: lekcija-c
permalink: /c-uslovno-ukljucenje
---

**Pomoću preprocesorskih naredbi `#if`, `#else` i `#elif` možemo uvjetno uključivati ili isključivati pojedine dijelove programa.**

## Naredba `#if`

Naredba `#if` ima sljedeći oblik:

```c
#if uvjet
    blok naredbi
#endif
```

Ukoliko je uvjet ispunjen blok naredbi izmedu `#if` i `#endif` bit će uključen u izvorni kod; ako uvjet nije ispunjen blok neće biti uključen.

Uvjet koji se pojavljuje u `#if` naredbi je konstantan cjelobrojni izraz. Nula se interpretira kao laž, a svaka vrijednost različita od nule kao istina. Simbolička imena se prije izračunavanja izraza zamijenjuju svojim vrijednostima. Ukoliko se u uvjetu pojavi simboličko ime koje nije prije toga definirano nekom `#define` naredbom, ono se zamijenjuje nulom.

Najčešće se uključivanje pomoću naredbe `#if` čini u ovisnosti o tome da li je neka varijabla definirana ili nije. Tu nam pomaže izraz `defined(ime)` koji daje 1 ako je ime definirano, a 0 ako nije. Na primjer,

```c
#if !defined(__datoteka.h__)
#define __datoteka.h__
    /* ovdje dolazi datoteka.h */
#endif
```

Ako varijabla `datoteka.h` nije definirana ona će u sljedećoj `#define` naredbi biti definirana i `datoteka.h` će biti uključena. U suprotnom će cijela `datoteka.h` biti jednostavno preskočena. To je standardna tehnika kojom se izbjegava višestruko uključivanje `.h` datoteka u program (provjerite npr. datoteku `stdio.h`).

Budući da se konstrukcije `#if defined` i `#if !defined` često pojavljuju postoje kraći izrazi s istim značenjem: `#ifdef` i `#ifndef`. Tako smo prethodnu konstrukciju mogli napisati u obliku

```c
#ifndef __datoteka.h__
#define __datoteka.h__
    /* ovdje dolazi datoteka.h */
#endif
```

Zagrade oko varijabli nisu obavezne.

Složene if naredbe grade se pomoću `#else` i `#elif`, koji ima značenje `else if`. Na primjer:

```c
#if SYSTEM == SYSV
    #define DATOTEKA "sysv.h"
#elif SYSTEM == BSD
    #define DATOTEKA "bsd.h"
#elif SYSTEM == MSDOS
    #define DATOTEKA "msdos.h"
#else
    #define DATOTEKA "default.h"
#endif
```

Ovdje se testira ime SYSTEM kako bi se uključila prava datoteka zaglavlja.

## Uslovno debagovanje

U razvoju programa korisno je ispisivati što veći broj međurezultata, kako bismo mogli kontrolirati korektnost izvršavanja programa. Nakon što je program završen i testiran sav suvišan ispis treba eliminirati. U tome nam pomaže uvjetno uključivanje koda kao što se vidi na sljedećem primjeru:

```c
int x;
......
scanf("%d",&x);
#ifdef DEBUG
    printf("Debug:: x=%d\n", x);
#endif
```

Ukoliko je varijabla `DEBUG` definirana, učitana vrijednost će biti ispisana. Prevodioci pod Unix-om obično imaju `-D` opciju, koja se koristi u obliku `-Dsimbol`, i koja dozvoljava da se simbol definira na komandnoj liniji. Na primjer, pretpostavimo da je program smješten u datoteku `prog.c`. Tada će kompilacija naredbom:

```
cc -o prog prog.c
```

proizvesti program u koji ispis varijable `x` nije uključen. Kompilacija s naredbom:

```
cc -DDEBUG -o prog prog.c
```

dat će izvršni kod koji uključuje `printf` naredbu, jer je sada varijabla `DEBUG` definirana.

Tehnika koja se koristi u razvoju programa je sljedeća: svi ispisi međurezultata ubacuju se izmedu para `#ifdef DEBUG` i `#endif` naredbi i program se u razvojnoj fazi kompilira s `-DDEBUG` opcijom. Kada je program konačno završen i testiran, kompilira se bez `-DDEBUG` opcije. Na taj način se iz izvršnog koda izbacuju sve suvišne `printf` (i ostale) naredbe.


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
