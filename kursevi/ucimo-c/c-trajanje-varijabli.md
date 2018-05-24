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
    static double z = 3.14;
}
```

varijable `x` i `y` su automatske dok `z` nije, jer je deklarisana s ključnom riječi `static`.

Kod automatske varijable inicijalizacija se vrši pri svakom novom ulazu u blok u kome je definisana. Tako će varijabla `y` biti ponovo kreirana pri svakom novom pozivu funkcije `f()`. Za razliku od statičke, inicijalizaciju automatske varijable moguće je izvršiti i izrazom koji nije konstantan, kao u ovom slučaju:

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

Statička lokalna varijabla je lokalna varijabla deklarisana s identifikatorom `static`. Ona postoji za cijelo vrijeme izvršavanja programa, ali se može dohvatiti samo iz bloka u kojem je definisana. Statička varijabla inicijalizira se samo jednom, i to pri prvom ulazu u blok. Pogledajmo kako se to svojstvo koristi u jednom primjeru.

### Primer

{:.ulaz}
```c
#include <stdio.h>

void foo() {
    int a = 10;             /* svaki put se inicijalizuje (resetuje) */
    static int sa = 10;     /* inicijalizuje se samo jednom */
    a = a + 5;
    sa = sa + 5;
    printf("a = %d, sa = %d\n", a, sa);
}

int main() {
    int i;
    for (i = 0; i < 10; i++) {
        foo();
    }
}
```

{:.uokvireno}
**Upozorenje**. Ključna riječ `static` ispred varijable definisane izvan svih blokova ne označava statičku varijablu već reducira njen doseg.


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
