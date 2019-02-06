---
title: Višedimenzioni nizovi u jeziku C
layout: lekcija-c
permalink: /c-visedimenzioni-nizovi
---

**Nizovi koje smo do sad koristili se zovu jednodimenzioni nizovi, jer imaju, ono što bismo zamislili kao jednu kolonu elemenata. Dvodimenzioni nizovi imaju redove i kolone.**

Postoje i trodimenzioni nizovi i višedimenzioni, ali se oni ne koriste često. Evo primera kako se deklariše dvodimenzioni niz i kako se koristi. Ovaj primer koristi dve petlje, jer moramo proći i kroz redove i kroz kolone.

{:.ulaz}
```c
/* Primer inicijalizacije matrice 3x3 */
#include <stdio.h>

int main()
{
    int i, j, a[3][3];

    for (i=0; i<3; i++) 
        for (j=0; j<3; j++) a[i][j] = i * j;

    for (i=0; i<3; i++) 
    {
        for (j=0; j<3; j++) printf("%5d", a[i][j]);
        printf("\n");
    }

    return 0;
}
```


Izvor: [profesorka.wordpress.com](https://profesorka.wordpress.com/)
