---
title: Vežbe sa nizovima
layout: lekcija-c
permalink: /vezbe-sa-nizovima
---

Zadaci za vežbanje sa nizovima (uglavnom brojeva). Rešenja su data u raznim programskim jezicima.

### Članovi veći od narednog

Ispiši članove niza koji su veći od narednog člana.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int niz[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(niz) / sizeof(int); // broj članova

    cout << "Clanovi niza koji su veci od narednog:" << endl;
    for (int i = 0; i < n - 1; i++) {
        if (niz[i] > niz[i + 1]) {
            cout << niz[i] << endl;
        }
    }
    return 0;
}
```

### Parni članovi

Ispiši parne članove niza.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int niz[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(niz) / sizeof(int);

    cout << "Ispis parnih clanova niza:" << endl;
    for (int i = 0; i < n; i++) {
        if (niz[i] % 2 == 0) {
            cout << niz[i] << endl;
        }
    }
    return 0;
}
```

### Zbir članova

Izračunaj i ispiši zbir članova niza.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int suma = 0;
    int niz[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(niz) / sizeof(int);

    for (int i = 0; i < n; i++) {
        suma = suma + niz[i];
    }
    cout << "Suma iznosi: " << suma << endl;
    return 0;
}
```

### Članovi u rasponu

Ispiši članove niza u rasponu između 3 i 9 uključno.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int niz[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(niz) / sizeof(int);

    cout << "Clanovi niza u rasponu izmedju 3 i 9 su: " << endl;
    for (int i = 0; i < n; i++) {
        if (niz[i] >= 3 && niz[i] <= 9) {
            cout << niz[i] << endl;
        }
    }

    return 0;
}
```

### Aritmetička sredina

Izračunaj i ispiši aritmetički sredinu svih članova niza.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    double suma = 0;
    int niz[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(niz) / sizeof(int);

    for (int i = 0; i < n; i++) {
        suma = suma + niz[i];
    }

    cout << "Aritmeticka sredina iznosi: " << suma / n << endl;
    return 0;
}
```

### Veći od proseka

Izračunaj aritmetičku sredinu i ispiši članove niza veće od aritmetičke sredine.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    double suma = 0;
    int niz[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(niz) / sizeof(int);

    for (int i = 0; i < n; i++) {
        suma = suma + niz[i];
    }
    double as = suma / n;
    cout << "Aritmeticka sredina iznosi: " << as << endl;
    cout << "Clanovi veci od proseka su: " << endl;

    for (int i = 0; i < n; i++) {
        if (niz[i] > as)
        {
            cout << niz[i] << endl;
        }
    }

    return 0;
}
```

### Najbliži i najdalji od nule

Dat je niz od 10 realnih brojeva. Naći broj najbliži nuli i broj najdalji od nule.

{:.ulaz.resenje}
```cpp
#include <cstdlib>
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
        float niz[10]={2, 3, 15, -14, -12.5, -1.5, 0.2, 11, -25, 4};
        float najblizi=niz[0];
        float najdalji=niz[0];

        for (int i=1; i<10; i++)
        {
                if (abs(niz[i]) < abs(najblizi)) najblizi=niz[i];
                if (abs(niz[i]) > abs(najdalji)) najdalji=niz[i];
        }

        cout << "Najblizi nuli je " << najblizi << endl;
        cout << "Najdalji od nule je " << najdalji << endl;
        return EXIT_SUCCESS;
}
```


Izvor: [Programski jezik C++, riješeni primjeri i zadaci](http://www.znanje.org/knjige/computer/cpp/n/101cpp/101_niz_cpp.php)
