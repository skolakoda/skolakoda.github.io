---
title: Vežbe sa petljama
layout: lekcija-racunarstvo
permalink: /vezbe-sa-petljama
---

Zadaci za vežbanje sa petljama u programskom jeziku C++.

### Suma prvih n brojeva

Izračunati i ispisati sumu prvih 15 prirodnih brojeva. Koristiti for petlju.

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int n = 15;
    int suma = 0;

    for (int i = 1; i <= n; ++i)
        suma += i;

    cout << "Suma: " << suma << endl;
}
```

### Proizvod prvih n brojeva

Napisati program za izračunavanje proizvoda od 1 do n (izabrati po volji).

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int n = 5;
    int proizvod = 1;

    for (int i = 1; i <= n; ++i)
        proizvod *= i;
    cout << "Proizvod: " << proizvod << endl;
}
```

### Aritmetička sredina neparnih brojeva

Napisati program za ispis aritmetičke sredine neparnih prirodnih brojeva do n (izabrati po volji).

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int suma = 0, brojac = 0, n = 100;
    double as;

    for (int i = 1; i <= n; i += 2) {
        ++brojac;
        suma += i;
    }

    as = suma / brojac;
    cout << "Aritmeticka sredina prvih " << n << " neparnih brojeva iznosi: " << as << endl;
}
```

### Brojevi djeljivi sa 3

Napisati program za prebrojavanje prirodnih brojeva djeljivih sa 3 u intevalu od 1 do n (izabrati po volji).

{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int brojac = 0, n = 125;

    for (int i = 3; i <= n; ++brojac, i += 3);

    cout << "Brojeva djeljivih sa 3 u rasponu od 1 do " << n << " je: " << brojac << endl;
}
```

### Korijen prvih n brojeva

Ispis kvadratnog korijena prirodnih brojeva do n.

{:.ulaz.resenje}
```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int i = 1;
    int n = 10;
    while (i <= n) {
        cout << "Korijen broja " << i << " je " << sqrt(i) << endl;
        i = i + 1;
    }
    return EXIT_SUCCESS;
}
```

### Suma kvadrata prvih n brojeva

Ispis kvadrata prirodnih brojeva do n.


{:.ulaz.resenje}
```cpp
#include <iostream>
using namespace std;

int main()
{
    int i = 1;
    int n = 10;
    int suma = 0;

    while (i <= n) {
        int kvadrat = i * i;
        cout << "Kvadrat broja " << i << " je " << kvadrat << endl;
        i = i + 1;
        suma += kvadrat;
    }
    cout << "Suma kvadrata od 1 do " << n << " je " << suma << endl;

    return 0;
}
```


Izvor: [znanje.org](http://www.znanje.org/knjige/computer/cpp/n/081CPP/081cpp.htm)
