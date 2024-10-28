---
title: Tipovi podataka u jeziku C
layout: lekcija-c
permalink: /c-tipovi-podataka
---

U C-u postoji nekoliko osnovnih tipova podataka:

* char - jedan byte, jedan znak iz skupa znakova
* int - cjelobrojna vrijednost, odnosi se na prirodnu veličinu cijelih brojeva na računalu
* float - realni broj s jednostrukom točnošću
* double - realni broj s dvostrukom točnošću

## Kvalifikatori

Pored osnovnih tipova, postoje i kvalifikatori koji im se pridružuju. Tako se `short` i `long` dodaju cijelim brojevima:

```c
short int sh;
long int counter;
```

Riječ `int` može se izostaviti u ovakvim deklaracijama, ali se obično piše.

Htjeli smo sa `short` i `long` osigurati različite dužine cijelih brojeva, uglavnom tamo gdje za to postoji valjan razlog; `int` je prirodna veličina za svako pojedino računalo. Tip `short` uglavnom ima 16 bita, `long` 32 bita, a `int` ili 16 ili 32. Svaki prevoditelj ima slobodu biranja veličine koja odgovara sklopovlju na kojemu radi, uz ograničenja da `short` i `int` moraju biti najmanje 16 bita, `long` najmanje 32 bita, te da `short` ne smije biti duži od `int` koji opet ne smije biti duži od `long`.

Kvalifikatori `signed` i `unsigned` mogu se pridružiti tipu `char` ili bilo kojem cijelom broju. Brojevi tipa `unsigned` su uvijek pozitivni ili jednaki nuli i za njih vrijedi aritmetički zakon modula 2n, gdje je n broj bitova u tipu. Tako, primjerice, ako `char` ima 8 bitova, varijable tipa `unsigned char` imaju vrijednost između 0 i 255, dok varijable tipa `signed char` imaju vrijednost između -128 i 127. Bilo da je char kvalificiran kao signed ili unsigned, on je ovisan o računalu, a znakovi koji se ispisuju su uvijek pozitivni.

Tip `long double` naznačuje realne brojeve uvećane točnosti. Kao i kod cijelih brojeva, veličine objekata realnih brojeva daju se definirati na više načina; `float`, `double` i `long double` mogu predstavljati jednu, dvije ili tri različite veličine.

Standardna zaglavlja `<limits.h>` i `<float.h>` sadrže simboličke konstante za sve te veličine, skupa s ostalim svojstvima računala i prevoditelja.

**Vježba 2-1.** Napišite program za određivanje opsega varijabli tipa `char`, `short`, `int` i `long`, kad su kvalificirani kao `signed` i `unsigned`, ispisujući odgovarajuće vrijednosti sa standardnih zaglavlja direktnim izračunavanjem. Odredite opsege različitih tipova realnih brojeva.

## Primer: ASCII vrednosti

Svaki broj u narednom primeru se može prikazati kao broj ili slovo, zavisno od tumačenja:

{:.ulaz}
```c
#include <stdio.h>

int main ()
{
    int ch;

    for (ch = 75; ch <= 100; ch++)
    {
        printf("ASCII vrednost = %d, karakter = %c\n", ch, ch);
    }

    return(0);
}
```


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
