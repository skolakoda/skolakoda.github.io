---
title: sizeof operator
layout: lekcija-c
permalink: /sizeof-operator
---

**`sizeof` operator vraća veličinu svog operanda u bajtovima.** U C-u se jedan bajt definira kao broj bitova potreban za pamćenje podatka tipa `char`. To je na većini računala osam bitova (jedan oktet).

## Prosti podaci

Operand može biti izraz ili tip podatka. Na primjer, kod

{:.ulaz}
```c
#include <stdio.h>

int main()
{
    int i;
    float x;
    printf("Velicina tipa int = %d\n", sizeof(i));
    printf("Velicina tipa float = %d\n", sizeof(x));

    return 0;
}
```

bi na nekim sustavima ispisao

```
Velicina tipa int = 4
Velicina tipa float = 4
```

Isti efekt postižemo ako sizeof primijenimo na tip podatka:

{:.ulaz}
```c
#include <stdio.h>

int main()
{
    printf("Velicina tipa int = %d\n", sizeof(int));
    printf("Velicina tipa float = %d\n", sizeof(float));

    return 0;
}
```

## Složeni podaci

Kod složenijih podataka dobivamo ukupan broj okteta koji podatak zauzima. Na primjer

{:.ulaz}
```c
#include <stdio.h>

int main()
{
    char tekst[]="Dalmacija";
    printf("Broj znakova u varijabli tekst =%d\n", sizeof(tekst));

    return 0;
}
```

daje

```
Broj znakova u varijabli tekst =10
```

Operator `sizeof` vraća cjelobrojnu vrijednost bez predznaka koja ovisi o implementaciji. Taj je tip definiran u datoteci zaglavlja `<stddef.h>` i zove se `size_t`.


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
