---
title: Vežbe sa petljama
layout: lekcija-c
permalink: /vezbe-sa-petljama
---

Zadaci za vežbanje sa petljama. Rešenja su data u raznim programskim jezicima.

### Suma prvih n brojeva

Izračunaj i ispiši sumu prvih 15 prirodnih brojeva. Koristiti `for` petlju.

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

Napiši program za izračunavanje proizvoda od 1 do n (izabrati po volji).

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

### Srednja vrednost niza

Napiši program koji izračunava i štampa srednju vrednost sledećeg niza od deset brojeva: 1, 4, 9, ..., 81, 100 .

{:.ulaz.resenje}
```js
let suma = 0
for (i = 1; i <= 10; i++)
  suma += i * i

console.log(suma / 10)
```

### Brojevi djeljivi sa tri

Napiši program za prebrojavanje prirodnih brojeva djeljivih sa 3 u intevalu od 1 do n (izabrati po volji).

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

### Koren prvih n brojeva

Ispiši kvadratni koren brojeva od 1 do n.

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
        cout << "Koren broja " << i << " je " << sqrt(i) << endl;
        i = i + 1;
    }
    return EXIT_SUCCESS;
}
```

### Kvadrati brojeva

Ispiši brojeve i njihove kvadrate, od 1 do n.

{:.ulaz.resenje}
```js
for (i = 1; i <= 10; i++)
  console.log(i, i * i)
```

### Zbir kvadrata prvih n brojeva

Izračunaj zbir kvadrata prirodnih brojeva od 1 do n.


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
        i++;
        suma += kvadrat;
    }
    cout << "Zbir kvadrata brojeva od 1 do " << n << " je " << suma << endl;

    return 0;
}
```

### Štampanje trougla

Napiši program koji štampa sledeći trougao:

```
*
**
***
****
*****
******
*******
********
*********
**********
```

{:.ulaz.resenje}
```js
for (i = 1; i <= 10; i++) {
  let red = ''
  for (j = 1; j <= i; j++)
    red += '*'
  console.log(red)
}
```

### Zbir cifara

Napiši funkciju koja prima broj i vraća zbir njegovih cifara. Na primer ako je ulaz 367, funkcija vraća 16 (3+6+7).

Savet: za pronalaženje najmanje cifre u broju koristi modulo operator (%).

{:.ulaz.resenje}
```js
function zbirCifara(broj) {
  let zbir = 0
  while (broj > 0) {
    zbir += broj % 10
    broj = Math.floor(broj / 10)
  }
  return zbir
}

console.log(zbirCifara(367))
```

### Broj u binarni

Napiši funkciju za prevođenje broja u [binarni zapis](/binarni-brojevi).

{:.ulaz.resenje}
```js
function binarno(br) {
  const bin = []

  while (br != 0) {
    bin.unshift(br % 2)
    br = Math.floor(br / 2)
  }
  return bin.join('')
}

console.log(binarno(42))
```

### Napravi tablicu množenja

Napravi program koji ispisuje tablicu množenja odabranog broja sa brojevima od 1 do 10. Na primer, za broj 7 ispisuje:

```
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70
```

{:.ulaz.resenje}
```cpp
#include <cstdlib>
#include <iostream>
using namespace std;

int main()
{
        int x = 7; /* uneti broj po zelji */
        int i;

        for (i=1; i<=10; i++)
        {
                cout<<x<<" * "<<i<<" = "<<i*x<<endl;
        }

        return EXIT_SUCCESS;
}
```

### Literatura

- [FOR petlja - C++ programi](http://www.znanje.org/knjige/computer/cpp/n/081CPP/081cpp.htm)
- [Zbirka programskih rešenja u JavaScript jeziku](http://www.sabackagimnazija.edu.rs/files/materijali/webDizajn/Zbirka.htm)
