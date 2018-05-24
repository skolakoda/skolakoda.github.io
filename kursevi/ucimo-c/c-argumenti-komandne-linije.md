---
title: Argumenti komandne linije u jeziku C
layout: lekcija-c
permalink: /c-argumenti-komandne-linije
---

U sistemskim okruženjima kao što su DOS i Unix, programu se mogu predati određeni parametri, tzv. argumenti komandne linije, tako da se navedu na komandnoj liniji iza imena programa, odvojeni razmacima. Na primjer, program `cp` u operacijskom sustavu Unix, koji vrši kopiranje datoteka, poziva se sa dva parametra:

```
cp ime1 ime2
```

gdje je `ime1` ime datoteke koju želimo kopirati, a `ime2` ime datoteke na koju `ime1` želimo kopirati. Programi pisani u C-u također mogu primiti argumente komandne linije. Tu funkcionalnost osigurava funkcija `main()`.

Funkcija `main()` prihvaća dva argumenta: `argc` tipa `int` i niz pokazivača na `char`, obično nazvan `argv`. Nova forma funkcije `main()` glasi:

```c
int main(int argc, char *argv[])
{ 
    .... 
}
```

Mehanizam je sljedeći: operacijski sustav u varijablu `argc` smješta broj argumenta komandne linije, koji su uneti pri startanju programa, uvećan za jedan. U `argv` se nalaze pokazivači na argumente komandne linije, spremljeni u `argv[0]` do `argv[argc-1]`. Pri tome `argv[0]` uvijek sadrži ime programa koji se izvršava (pokazivač na `string`). Ostali parametri su smješteni redom kojim su upisani na komandnoj liniji. Ako nema argumenata komandne linije, onda je `argc == 1`. Konačno, `argv[argc]` mora biti nul-pokazivač.

Na primjer, program `args` koji samo ispisuje argumente komandne linije izgledao bi ovako:

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    int i;
    for(i=0;i<argc; i++)
        printf("%s%s", argv[i],(i<argc-1) ? "," : ".");
    printf("\n");
    return 0;
}
```

Pozovemo li program `args` narebom:

```
args ovo su neki parametri
```

on će ispisati

```
args,ovo,su,neki,parametri.
```

Operacijski sustav `Unix`, odnosno *shell* koji se koristi, ekspandirat će specijalne znakove ?, * i [] prije nego što ih preda pozivnom programu. Više detalja može se naći priručniku za dani shell (sh, ksh, csh ili bash).


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
