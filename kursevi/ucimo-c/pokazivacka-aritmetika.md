---
title: Pokazivačka aritmetika
layout: lekcija-c
permalink: /pokazivacka-aritmetika
---

Rečeno je da nakon deklaracije `int a[10]`, vrednosti `a` odgovara pokazivač na prvi element niza, vrednosti `a+1` odgovara pokazivač na drugi element niza, itd. Izraz `p+1` i slični uključuju izračunavanje koje koristi pokazivačku aritmetiku i koje se razlikuje od običnog izračunavanja. Naime, izrazu `p+1`, ne označava dodavanje vrednosti 1 na p, već **dodavanje dužine jednog objekta tipa** na koji ukazuje `p`. Na primer, ako `p` ukazuje na `int`, onda `p+1` i `p` mogu da se razlikuju za dva ili četiri - onoliko koliko bajtova na tom sistemu zauzima podatak tipa `int`. Tako, ako je `p` pokazivač na int koji sadrži na adresu 100, na mašini na kojoj int zauzima 4 bajta, vrednost `p+3` će biti adresa 100 + 3 * 4 = 112.

Od pokazivača je moguće oduzimati cele brojeve (na primer, `p-n`), pri čemu je značenje ovih izraza analogno značenju u slučaju sabiranja. Na pokazivače je moguće primenjivati prefiksne i postfiksne operatore `++` i `--`, sa sličnom semantikom.

Pored dereferenciranja, dodavanja i oduzimanja celih brojeva, nad pokaziva čima je moguće izvoditi još neke operacije. Pokazivači se mogu **porediti** relacijskim operatorima (na primer, `p1 < p2`, `p1 == p2`, ...). Ovo ima smisla ukoliko pokazivači ukazuju na elemente istog niza. Tako je, na primer, `p1 < p2` tačno akko p1 ukazuje na raniji element niza od pokazivača p2.

Dva pokazivača je moguće **oduzimati**. I u tom slučaju se ne vrši prosto oduzimanje dve adrese, već se razmatra veličina tipa pokazivača, sa kojom se razlika deli. Dva pokazivača **nije moguće sabirati**.

Unarni operatori `&` i `*` imaju viši prioritet nego binarni aritmetiči operatori. Zato je značenje izraza `*p+1` zbir sadržaja lokacije na koju ukazuje `p` i vrednosti 1 (a ne sadržaj na adresi p+1).

Unarni operatori `&`, `*`, i prefiksni `++` se primenjuju zdesna nalevo, pa naredba `++*p` inkrementira sadržaj lokacije na koju ukazuje `p`. Postfiksni operator `++` kao i svi unarni operatori koji se primenjuju s leva na desno, imaju viši prioritet od unarnih operatora koji se primenjuju s desna nalevo, tako da `*p++` vraća sadržaj na lokaciji `p`, dok se kao bočni efekat `p` inkrementira.

## Primer

Ilustrujmo sve ovo primerom strukture podataka poznate kao [stog](/stog) (eng. *stack*). Stek je predstavljen nizom elemenata i elementi se dodaju i uzimaju sa istog kraja.

```c
#define MAX_SIZE 1024
int a[MAX_SIZE];
int* top = a;

int push(int x)
{
    if (top < a + SIZE - 1)
        *top++ = x;
    else {
        printf("Greska");
        exit(EXIT_FAILURE);
    }
}

int pop()
{
    if (top > a)
        return *--top;
    else {
        printf("Greska");
        exit(EXIT_FAILURE);
    }
}

int size() { return top - a; }
```

Prilikom dodavanja elementa vrši se provera da li je stek možda pun i to izrazom `top < a + SIZE - 1` koji uključuje pokazivačku aritmetku sabiranje pokazivača (preciznije adrese početka niza) i broja, i zatim oduzimanje broja od dobijenog pokazivača. Slično, prilikom uklanjanja elementa, vrši se da li je stek prazan i to izrazom `top > a` koji uključuje poredenje dva pokazivača (preciznije, pokazivača i niza). Napokon, funkcija koja vraća broj elemenata postavljenih na stek uključuje oduzimanje dva pokazivača (preciznije, pokazivača i niza).

Potrebno je naglasiti i suptilnu upotrebu prefiksnog operatora dekrementiranja u funkciji `pop`, odnosno postfiksnog operatora inkrementiranja u funkciji `push`, kao i njihov odnos sa operatorom dereferenciranja.


Izvor: [Mala škola referenciranja u programskom jeziku C](http://poincare.matf.bg.ac.rs/~jelenagr/2d/MalaSkolaPokazivaca.pdf)
