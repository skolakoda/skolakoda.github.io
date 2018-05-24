---
title: Predefinisani makroi u jeziku C
layout: lekcija-c
permalink: /c-predefinisani-makroi
---

**C standard specificira nekoliko makroa koje moraju biti definirani.** Neki od njih su:

Makro | Značenje
DATE | Datum preprocesiranja
TIME | Vrijeme preprocesiranja
FILE | Ime datoteke s izvornim kodom
LINE | Trenutna linija koda
func | Ime funkcije

Njihove vrednosti možemo ispisati na sledeći način:

{:.ulaz}
```c
#include <stdio.h>

int main(void)
{
    printf("Ime datoteke: %s.\n", __FILE__);
    printf("Datum: %s.\n", __DATE__);
    printf("Vrijeme: %s.\n", __TIME__);
    printf("Linija koda: %d.\n", __LINE__);
    printf("Ime funkcije: %s.\n", __func__);
    return 0;
}
```

Ovi se makroi najčešće koriste za ispis poruka o greškama, kao u sljedećem primjeru:

```c
if(n != m)
    printf("Greska: linija %d, datoteka %s\n", __LINE__, __FILE__);
```

Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
