---
title: Vežbe sa brojevima
layout: lekcija-racunarstvo
permalink: /vezbe-sa-brojevima
---

Zadaci za vežbanje osnovnih računskih operacija sa brojevima. Rešenja su data u programskom jeziku Python.

### Obim i površina pravougaonika

Izračunavanje obima i površine pravougaonika ako su zadate stranice.

{:.ulaz.resenje}
```c
#include <stdio.h>
main()
{
    int a = 14, b = 42;
    int o, p;

    o = 2 * (a + b);
    p = a * b;
    printf("Obim pravougaonika je %d\n", o);
    printf("Povrsina pravouganika je %d\n", p);
}
```

### Obim i površina kruga

Izračunavanje obima i površina kruga

{:.ulaz.resenje}
```c
#include <stdio.h>
#define PI 3.14

main()
{
    float r = 12.5;
    float obim = 2 * r * PI;
    float povrsina = r * r * PI;

    printf("Obim kruga je: %.2f\n", obim);
    printf("Povrsina kruga je: %.2f\n", povrsina);
}
```

### Površina i zapremina lopte

Napiši program za izračunavanje površine i zapremine lopte ako je dat poluprečnik, uz upotrebu odgovarajuće funkcije.

{:.ulaz.resenje}
```c
#include <stdio.h>
#define PI 3.14;

main()
{
    float r = 13.3;
    float povrsina = 4 * r * r * PI;
    float zapremina = (4. / 3.) * r * r * r * PI;

    printf("Lopta poluprecnika %.2f metara ima povrsinu %.2f i zapreminu %.2f!", r, povrsina, zapremina);
}
```


Izvori: [Zadaci iz Programskog jezika C](http://www.its.edu.rs/reseni-primeri-iz-programskog-jezika-c-3/)
