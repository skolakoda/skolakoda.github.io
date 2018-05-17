---
title: Vežbe sa strunama
layout: lekcija-c
permalink: /vezbe-sa-strunama
---

Zadaci za vežbanje osnovnih računskih operacija sa strunama. Rešenja su data u programskom jeziku C.

### ASCII kodovi

Napiši program za ispis velikih slova od A do Z i njihovih ASCII kodova

{:.ulaz.resenje}
```c
#include <stdio.h>
main()
{
    char ch;
    for (ch = 'A'; ch <= 'Z'; ch++) {
      printf("ASCII kod za %c je %d\n", ch, ch);
    }
}
```

### Pojavljivanje karaktera

Napiši program za izračunavanje broja pojavljivanja datog znaka u struni.

{:.ulaz.resenje}
```c
#include <stdio.h>
#include <string.h>

main()
{
    char trazeni_karakter = 'a';
    char tekst[] = "Moje je ime Davorin Bogović, a ovo sve oko mene je crno-bijeli svijet.";
    int duzina = strlen(tekst);
    int broj_javljanja = 0;
    int i;

    for (i = 0; i <= duzina; i++)
        if (tekst[i] == trazeni_karakter)
            broj_javljanja++;
    printf("Broj pojavljivanja znaka '%c' u datom nizu je %d.", trazeni_karakter, broj_javljanja);
}
```

Izvori: [Zadaci iz Programskog jezika C](http://www.its.edu.rs/reseni-primeri-iz-programskog-jezika-c-3/)
