---
title: Pokazivači na funkcije
layout: lekcija-c
permalink: /pokazivaci-na-funkcije
---

Funkcije se ne mogu direktno prosleđivati kao argumenti drugim funkcijama, vraćati kao rezultat funkcija i ne mogu se dodeljivati promenljivima. Ipak, ove operacije je moguće posredno izvršiti ukoliko se koriste pokazivači na funkcije.

Razmotrimo nekoliko ilustrativnih primera.

## Primer 1

{:.ulaz}
```c
#include <stdio.h>

void inc1(int a[], int n, int b[])
{
    int i;
    for (i = 0; i < n; i++)
        b[i] = a[i] + 1;
}

void mul2(int a[], int n, int b[])
{
    int i;
    for (i = 0; i < n; i++)
        b[i] = a[i] * 2;
}

void parni0(int a[], int n, int b[])
{
    int i;
    for (i = 0; i < n; i++)
        b[i] = a[i] % 2 == 0 ? 0 : a[i];
}

void ispisi(int a[], int n)
{
    int i;
    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
    putchar('\n');
}

#define N 8

int main()
{
    int a[N] = { 1, 2, 3, 4, 5, 6, 7, 8 }, b[N];

    inc1(a, N, b);
    ispisi(b, N);

    mul2(a, N, b);
    ispisi(b, N);

    parni0(a, N, b);
    ispisi(b, N);

    return 0;
}
```

## Primer 2

Sve funkcije u prethodnom programu kopiraju elemente niza `a` u niz `b`, prethodno ih transformišući na neki način. Moguće je izdvojiti ovaj zajednički postupak u zasebnu funkciju koja bi bila parametrizovana operacijom transformacije koja se primenjuje na elemente niza `a`:

{:.ulaz}
```c
#include <stdio.h>

void map(int a[], int n, int b[], int (*f)(int))
{
    int i;
    for (i = 0; i < n; i++)
        b[i] = (*f)(a[i]);
}
int inc1(int x) { return x + 1; }
int mul2(int x) { return 2 * x; }
int parni0(int x) { return x % 2 == 0 ? 0 : x; }

void ispisi(int a[], int n)
{
    int i;
    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
    putchar('\n');
}

#define N 8

int main()
{
    int a[N] = { 1, 2, 3, 4, 5, 6, 7, 8 }, b[N];

    map(a, N, b, &inc1);
    ispisi(b, N);

    map(a, N, b, &mul2);
    ispisi(b, N);

    map(a, N, b, &parni0);
    ispisi(b, N);

    return 0;
}
```

Funkcija map ima poslednji argument tipa `int (*)(int)`, što označava pokazivač na funkciju koja prima jedan argument tipa `int` i vraća tip `int`. Deklaracija promenljive tipa pokazivača na funkciju se vrši tako što se ime promenljive kojem prethodi karakter * navede u zagradama kojima prethodi tip povratne vrednosti funkcije, a za kojima sledi lista tipova parametara. Prisustvo zagrada je neophodno kako bi se napravila razlika izmedu pokazivača na funkcije i samih funkcija.

U primeru

```c
double *a(double, int);
double (*b)(double, int);
```

promenljiva `a` označava funkciju, dok `b` označava pokazivač na funkciju.

## Referenciranje i dereferenciranje

Najčešće operacije sa pokazivačima na funkcije su, naravno, referenciranje (`&`) i dereferenciranje (`*`). Iako kod nekih kompilatora oznake ovih operacija mogu da se izostave i koristi samo ime pokazivača (na primer, u prethodnom programu je moguće navesti `map(a, N, b, inc1)` i `b[i] = f(a[i])`), ovo se ne preporučuje zbog prenosivosti programa.

## Nizovi pokazivača na funkcije

Moguće je kreirati i nizove pokazivača na funkcije. Ovi nizovi se mogu i incijalizovati (na uobičajeni način). U primeru

```c
int (*fje[3]) (int) = {&inc1, &mul2, &parni0};
```

`fje` predstavlja niz od 3 pokazivača na funkcije koje vraćaju `int`, i primaju argument tipa `int`. Funkcije čije se adrese nalaze u nizu se mogu direktno i pozvati. Na primer, naredni kod ispisuje vrednost 4:

```c
printf("%d", (*fje[0])(3));
```

Izvor: [Mala škola referenciranja u programskom jeziku C](http://poincare.matf.bg.ac.rs/~jelenagr/2d/MalaSkolaPokazivaca.pdf)
