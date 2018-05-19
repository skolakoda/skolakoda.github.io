---
title: Vežbe sa pokazivacima
layout: lekcija-c
permalink: /vezbe-sa-pokazivacima
---

Zadaci za vežbanje osnovnih operacija sa pokazivačima.

<!-- Rešenja su data u raznim programskim jezicima. -->

### Zbir članova niza

Napiši program za ispis zbir članova niza koristeći pokazivače.

{:.ulaz.resenje}
```c
#include <stdio.h>

int main() {
    int a[] = {3, 4, 7, 44, 66, 22, 7};
    int n = sizeof(a)/sizeof(a[0]);
    int i, zbroj = 0, *pa;
    pa = &a[0];

    for (i = 0; i < n; i++) {
        zbroj += *(pa + i);
    }

    printf("Zbir n brojeva je %d", zbroj);

    return 0;
}
```


### Izvori

- [Zadaci iz Programskog jezika C](https://www.mojwebdizajn.net/c-rijeseni-zadatci/c-programiranje-zadatci-pokazivaci-i-polja.aspx)
