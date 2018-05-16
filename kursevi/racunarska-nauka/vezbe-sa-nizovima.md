---
title: Vežbe sa nizovima
layout: lekcija-racunarstvo
permalink: /vezbe-sa-nizovima
---

Zadaci za vežbanje sa nizovima u programskom jeziku C++.

### Članovi veći od narednog

Ispisati članove niza koji su veći od narednog člana.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int a[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(a) / sizeof(int); // broj članova

    cout << "Clanovi niza koji su veci od narednog:" << endl;
    for (int i = 0; i < n - 1; i++) {
        if (a[i] > a[i + 1]) {
            cout << a[i] << endl;
        }
    }
    return 0;
}
```

### Parni članovi

Ispisati parne članove niza (djeljive sa 2).

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int a[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(a) / sizeof(int);

    cout << "Ispis parnih clanova niza:" << endl;
    for (int i = 0; i < n; i++) {
        if (a[i] % 2 == 0) {
            cout << a[i] << endl;
        }
    }
    return 0;
}
```

### Zbir članova

Učitati članove niza. Izračunati i ispisati sumu članova niza.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int suma = 0;
    int a[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(a) / sizeof(int);

    for (int i = 0; i < n; i++) {
        suma = suma + a[i];
    }
    cout << "Suma iznosi: " << suma << endl;
    return 0;
}
```

### Članovi u rasponu

Ispisati članove niza u rasponu između 3 i 9 uključno.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int a[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(a) / sizeof(int);

    cout << "Clanovi niza u rasponu izmedju 3 i 9 su: " << endl;
    for (int i = 0; i < n; i++) {
        if ((a[i] >= 3) && (a[i] <= 9)) {
            cout << a[i] << endl;
        }
    }

    return 0;
}
```

### Aritmetička sredina

Izračunati i ispisati aritmetički sredinu svih članova niza.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    double suma = 0;
    int a[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(a) / sizeof(int);

    for (int i = 0; i < n; i++) {
        suma = suma + a[i];
    }

    cout << "Aritmeticka sredina iznosi: " << suma / n << endl;
    return 0;
}
```

### Veći od proseka

Izračunati aritmetičku sredinu i ispisati članove niza veće od aritmetičke sredine.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    double suma = 0;
    int a[] = { 33, 22, 77, 1, 3, 5, 7, 9, 0, 7 };
    int n = sizeof(a) / sizeof(int);

    for (int i = 0; i < n; i++) {
        suma = suma + a[i];
    }
    double as = suma / n;
    cout << "Aritmeticka sredina iznosi: " << as << endl;
    cout << "Clanovi veci od proseka su: " << endl;

    for (int i = 0; i < n; i++) {
        if (a[i] > as)
        {
            cout << a[i] << endl;
        }
    }

    return 0;
}
```

Izvor: [znanje.org](http://www.znanje.org/knjige/computer/cpp/n/101cpp/101_niz_cpp.php)
