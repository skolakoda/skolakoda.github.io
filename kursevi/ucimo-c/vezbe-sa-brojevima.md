---
title: Vežbe sa brojevima
layout: lekcija-c
permalink: /vezbe-sa-brojevima
---

Zadaci za vežbanje osnovnih računskih operacija sa brojevima. Rešenja su data u raznim jezicima.

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

    printf("Lopta poluprecnika %.2f ima povrsinu %.2f i zapreminu %.2f!", r, povrsina, zapremina);
}
```

### Sekunde u sate

Napiši program koji pretvara broj sekundi u odgovarajuće vrijeme u satima, minutama i sekundama.

{:.ulaz.resenje}
```c
#include <stdio.h>

int main ()
{
    int sekundi = 33453;
    int h, min, sec;

    h = sekundi / 3600;
    min = (sekundi % 3600) / 60;
    sec = (sekundi % 3600) % 60;

    printf ("%d sekundi iznosi: \n", sekundi);
    printf ("%d sat, %d minute i %d sekunde", h, min, sec);

    return 0;
}
```

### Dane u godine

Napiši program koji pretvara broj dana u godine, mesece i dane:

{:.ulaz.resenje}
```c
#include <stdio.h>

int main()
{
    int ukupno_dana = 10000;
    int god, meseci, dana;

    god  = ukupno_dana / 365;
    meseci = (ukupno_dana % 365) / 30;
    dana = (ukupno_dana % 365) % 30;

    printf("%d dana je %d god, %d meseci i %d dana", ukupno_dana, god, meseci, dana);

    return 0;
}
```

### Prosečna brzina

Dati su pređeni kilometri i vreme puta. Izračunaj prosečnu brzinu kojom je vozač kamiona vozio?

{:.ulaz.resenje}
```c
#include <stdio.h>

int main()
{
    int km = 600;
    int t = 8;

    printf("Kamiondzija je vozio brzinom od %d km/h", 600 / 8);
    return 0;
}
```

### Farenhajt u Celzujus

Napiši funkciju za pretvaranje stepeni Farenhajta u stepene Celzujusa. Formula je `C = 5/9 * (F - 32)`.

Bonus: Iskoristi funkciju za ispis uporednih temperatura Farenhajt-Celzijus od -40 to 220 Farenhajta, sa intervalom 10.

{:.ulaz.resenje}
```js
function celzijus(f) {
  return (f - 32) * 5 / 9
}

console.log('Farenhajt----->Celzijus')

for (i = -40; i <= 220; i += 10)
  console.log('  ' + i + '         ' + celzijus(i))

```

### Izvori

- [Zadaci iz Programskog jezika C](http://www.its.edu.rs/reseni-primeri-iz-programskog-jezika-c-3/)
- [C programiranje #1 - riješeni zadatci](https://www.mojwebdizajn.net/c-rijeseni-zadatci/c-programiranje-rijeseni-zadatci-1.aspx)
