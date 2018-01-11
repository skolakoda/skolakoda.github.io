---
title: Euklidov algoritam
layout: lekcija-algoritmi
permalink: /euklidov-algoritam
---

![](https://upload.wikimedia.org/wikipedia/commons/e/e2/Euclidean_algorithm_252_105_animation_flipped.gif)

***Euklidov algoritam je efikasan način za određivanje najvećeg zajedničkog delioca (NZD) dva broja. Nazvan je po starogrčkom matematičaru Euklidu, koji ga je naveo u VII i X knjizi svojih Elemenata.***

## Rekurzivna funkcija

Najveći zajednički delilac se, pomoću Euklidovog algoritma, može izračunati narednom rekurzivnom funkcijom (pretpostavlja se da je a ≥ b):

```c
unsigned nzd(unsigned a, unsigned b) {
    if (b == 0)
        return a;
    else
        return nzd(b, a % b);
}
```
