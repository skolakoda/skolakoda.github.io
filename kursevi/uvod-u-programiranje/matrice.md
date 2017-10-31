---
title: Matrice
layout: lekcija-uvod
permalink: /matrice
image: /images/koncepti/podaci/matrica.png
---

![]({{page.image}})

***Matricu možemo da zamislimo kao tabelu. Sastoji se od polja koja pripadaju redovima i kolonama, označenim indeksima.***

Na primer, sledeća matrica smeštena u dvodimenzionalni niz

```cpp
int matrica[10][15]
```

bi rezervisala prostor za `10 * 15` odnosno 150 varijabli tipa `int`.

## Kvadratna matrica

Uzmimo sada na primjer matricu `mat[x][y]`. Ako je `x == y`, matrica je kvadratna. U takvoj matrici svi elementi za čije indekse važi `x == y` nalaze se na glavnoj dijagonali.

Za elemente za čije indekse važi da su `x + y == x + 1`, odnosno `x + y == y + 1` (iz uslova `x == y`) slijedi da se nalaze se na sporednoj dijagonali.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Las_filas_003.jpg/640px-Las_filas_003.jpg)

## Zadatak

Napiši program koji od korisnika prima prirodni broj `n` (između 2 i 10) te smešta `n x n` realnih brojeva u matricu. Izračunaj i ispiši zbir svakog reda matrice i proizvod svake kolone matrice.

Rešenje u C++:

```cpp
#include <iostream>
#define max 10

int main ()
{
    int matrica[max][max], suma[max], proizvod[max];
    int n, s = 0, p = 1;
    std::cout << "n=";
    std::cin >> n;
    for (int i = 1; i <= max; i++) {
        suma[i] = 0;
        proizvod[i] = 1;
    }
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++) {
            std::cout << "Mat[" << i << "," << j << "]=";
            std::cin >> matrica[i][j];
            suma[j] += matrica[i][j];
            proizvod[i] *= matrica[i][j];
        }
    for (int i = 1; i <= n; i++)
        std::cout << "Suma[" << i << "]=" << suma[i] << std::endl;
    for (int i = 1; i <= n; i++)
        std::cout << "Proizvod[" << i << "]=" << proizvod[i] << std::endl;
    return 0;
}
```

Izvor: Ivan Rajković, *C++ tutorial sa primjerima*
