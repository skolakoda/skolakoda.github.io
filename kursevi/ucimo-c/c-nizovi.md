---
title: Nizovi u jeziku C
layout: lekcija-c
permalink: /c-nizovi
---

Do sada, ako ste hteli da deklarišete 5 promenljivih, morali biste da uradite nešto ovako:

```c
int i1,i2,i3,i4,i5;
```

Šta da ste hteli da deklarišete 100 promenljivih? To bi potrajalo. Ako koristite niz, onda možete deklarisati onoliko promenljivih koliko želite, koristeći samo jedno ime.

Niz se deklariše na isti način kao normalna promenljiva, sem što morate da stavite uglaste zagrade posle imena promenljive. Takođe morate da upišete broj elemenata koji želite u nizu, unutar tih uglastih zagrada.

```c
int a[5];
```

Da biste pristupili vrednosti elementa niza, morate ponovo koristiti uglaste zagrade, ali sa brojem elementa kome želite da pristupite. Kada pristupate elementu niza, morate zapamtiti da oni počinju od 0, a ne 1. Ovo znači da niz koji ima 5 elemenata, ima elemente numerisane od 0 do 4.

{:.ulaz}
```c
/* Primer niza */
#include <stdio.h>

int main()
{
    int a[5];
    a[0] = 12;
    a[1] = 23;
    a[2] = 34;
    a[3] = 45;
    a[4] = 56;
    printf("Prvi clan niza je %d", a[0]);
    return 0;
}
```

## Korišćenje nizova pomoću petlji

Najkorisnija stvar koju možete uraditi sa nizom, je da ga koristite u petlji.

Kada deklarišemo niz, vrednosti još uvek nisu dodeljene. Dodeljivanje vrednosti elementima se zove inicijalizacija niza. Evo primera kako se inicijalizuje niz od 10 elemenata, pomoću petlje:

{:.ulaz}
```c
/* Primer inicijalizacije desetoclanog niza */
#include <stdio.h>

int main()
{
    int i, a[10];
    for (i=0; i<10; i++) a[i] = i * i;
    for (i=0; i<10; i++) printf("%d. clan niza je %d\n", i, a[i]);

    return 0;
}
```

Primetite da smo takođe koristili petlju da bismo ispisali niz na ekran.

## Višedimenzioni nizovi

Nizovi koje smo do sad koristili se zovu jednodimenzioni nizovi, jer imaju, ono što bismo zamislili kao jednu kolonu elemenata. Dvodimenzioni nizovi imaju redove i kolone.

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
