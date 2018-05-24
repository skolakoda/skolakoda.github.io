---
title: Pokazivači u jeziku C
layout: lekcija-c
permalink: /c-pokazivaci
image: /images/koncepti/varijable/pokazivac.png
---

***Pokazivač je promenljiva koja sadrži memorijsku adresu. Iz tog razloga, kažemo da pokazuje na vrednost na toj memorijskoj lokaciji. Možete da koristite pokazivače na određen način da bi dobili vrednost na adresi na koju pokazuje.***

![]({{page.image}})

Pokazivači mogu da imaju tip, ali i ne moraju. Pokazivači koji imaju tip, pokazuju na određeni tip promenljive, npr. celobrojnu. Pokazivači koji nemaju tip pokazuju na bilo koji tip podataka.

## Deklaracija pokazivača

Da biste deklarisali pokazivač, morate staviti znak `*` ispred njegovog imena. Evo primera kako se deklariše pokazivač na celobrojni tip i pokazivač koji nema tip:

```c
int main()
{
    int *p;
    void *up;

    return 0;
}
```

## Dodela adrese pokazivaču

Možete dodeliti adresu neke celobrojne promenljive pokazivaču na celobrojnu promenljivu, koristeći operator `&` da biste dobili adresu tog broja:

{:.ulaz}
```c
int main()
{
    int i;
    int *p;
    i = 5;
    p = &i;

    printf("Varijabla 'i' zivi na sledecoj memorijskog adresi: %d\n", &i);
    return 0;
}
```

## Menjanje vrednosti na koju pokazuje pokazivač

Možete pristupiti vrednosti promenljive na koju se pokazuje, koristeći pokazivač. Za to koristimo znak `*`. Menjanje vrednosti na koju pokazuje pokazivač, će promeniti vrednost te promenljive.

{:.ulaz}
```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, j;
    int *p;
    i = 5;
    p = &i;
    j = *p;
    *p = 7;

    printf("i = %d, j = %d\n", i, j);
    return 0;
}
```

Korišćenje pokazivača na gornji način je samo dugačak način da kažemo `j = i`. Naučićete mnogo korisnije načine da koristite pokazivače kasnije, ali za sada je jedino važno da steknete predstavu o tome kako oni rade.

Inače, gornji program daje sledeći izlaz:

```
i = 7, j = 5
```

## Vežba

Napišite program koji učitava tri broja i, koristeći pokazivače, rotira njihove vrednosti. Na primer:

    Ulaz: a=1, b=2, c=3
    Izlaz: a=3, b=1, c=2


Izvor: [profesorka.wordpress.com](https://profesorka.wordpress.com/)
