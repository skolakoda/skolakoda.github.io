---
title: Trajanje varijabli u jeziku C
layout: lekcija-c
permalink: /c-trajanje-varijabli
---

Svakoj varijabli prevodilac pridružuje određeni memorijski prostor. Vijek trajanja varijable je vrijeme za koje joj je pridružena njena memorijska lokacija, dakle ukupno vrijeme njene egzistencije. 

**Prema vijeku trajanja varijable dijelimo na automatske i statičke.**

## Automatske varijable

Svaka varijabla kreirana unutar nekog bloka, koja nije deklarisana s ključnom riječi `static`, je automatska. Automatske varijable se kreiraju na ulasku u blok u kome su deklarisane i uništavaju na izlasku iz bloka. Memorija koju je automatska varijabla zauzimala oslobađa se za druge varijable. Na primjer:

```c
void f(double x)
{
    double y = 2.71;
    static double z;
}
```

varijable `x` i `y` su automatske dok `z` nije, jer je deklarisana s ključnom riječi `static`.

Automatske varijable mogu se inicijalizirati, kao što je to slučaj s varijablom `y`. Inicijalizacija se vrši pri svakom novom ulazu u blok u kome je varijabla definisana. Tako će varijabla `y` biti ponovo kreirana i inicijalizirana pri svakom novom pozivu funkcije `f()`. Osim konstantnom vrijednošću izrazom, inicijalizaciju automatske varijable moguće je izvršiti i izrazom koji nije konstantan, kao u ovom slučaju:

```c
void f(double x, int n)
{
    double y = n * x;
}
```

## Statičke varijable

Statičke varijable alociraju se i inicijaliziraju na početku izvršenja programa, a uništavaju na završetku. Vijek trajanja statičke varijable je cijelo vrijeme izvršavanja programa. Prostor za statičke varijable alocira se u dijelu memorije različitom od dijela u kojem se alociraju automatske varijable (što je standardno programski [stog](/stog)).

Svaka varijabla definisana izvan svih funkcija je statička. Varijabla deklarisana u nekom bloku (npr. funkciji) s identifikatorom `static` je takoder statička. Ukoliko statička varijabla nije inicijalizirana eksplicitno, prevodilac će je inicijalizirati nulom. Statičke je varijable moguće inicijalizirati samo konstantnim izrazima, tako da sljedeći kod nije ispravan:

```c
int f(int j)
{
    static int i=j;
}
```

### Statičke lokalne varijable

Statička lokalna varijabla je lokalna varijabla deklarisana s identifikatorom `static`. Ona postoji za cijelo vrijeme izvršavanja programa, ali se može dohvatiti samo iz bloka u kojem je definisana. Statička varijabla inicijalizira se samo jednom, i to pri prvom ulazu u blok. Pogledajmo kako se to svojstvo koristi u jednom primjeru.

Želimo napisati program koji ispisuje prvih 20 Fibonaccijevih brojeva. To su brojevi definisani rekurzijom:

```
F i = F i−1 + F i−2 , (i = 3, 4, . . .) F 1 = F 2 = 1.
```

Dakle, treba nam funkcija koja će za svaki `i` iz glavnog programa izračunati `F i`, uz uvjet da se brojevi računaju redom od `F 1` do `F 20`. Tu će nam pomoći statičke varijable:

{:.ulaz}
```c
#include <stdio.h>

long fibonacci(int);

int main(void)
{
    int i;
    for (i = 1; i <= 20; i++)
        printf("\n i= %d, F= %ld", i, fibonacci(i));
    return 0;
}

long fibonacci(int i)
{
    static long f1 = 1, f2 = 1;
    long f;

    f = (i < 3) ? 1 : f1 + f2;
    f2 = f1;
    f1 = f;
    return f;
}
```

Statičke varijable `f1` i `f2` bit će inicijalizirane jedinicama samo pri prvom pozivu funkcije `fibonacci`. Izmedu svaka dva poziva funkciji `fibonacci` one zadržavaju svoju vrijednost i stoga pri `i`-tom pozivu funkcije imamo `f1 = F i−1` i `f2 = F i−2`.

{:.uokvireno}
**Upozorenje**. Ključna riječ `static` ispred varijable definisane izvan svih blokova ne označava statičku varijablu već reducira njen doseg.


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
