---
title: Opseg varijabli u jeziku C
layout: lekcija-c
permalink: /c-opseg-varijabli
---

**Doseg (opseg, domet) varijable je dio programa u kojem je njena deklaracija vidljiva i u kojem se varijabli može pristupiti putem njenog imena.** 

Dva su osnovna tipa dosega: blok ili datoteka. Varijable s dosegom bloka nazivamo lokalnim varijablama, dok varijable s dosegom datoteke nazivamo globalnim. Ako je izvorni kod razbijen u više datoteka, onda su globalne varijable, deklarirane sa `extern`, vidljive i izvan datoteke u kojoj su definisane.

## Lokalne varijable

Blok naredbi čini svaki niz naredbi omeđen vitičastim zagradama. Na primjer, tijelo funkcije je jedan blok naredbi. Programski jezik C dozvoljava da se u svakom bloku deklariraju varijable. Takve varijable nazivamo lokalnim. 

{:.uokvireno}
Prema standardu C90, deklaracija lokalne varijable unutar bloka mora prethoditi prvoj izvršnoj naredbi u tom bloku. Prema standardu C99, varijabla može biti deklarirana bilo gdje unutar bloka.

U primjeru:

```c
if (n > 0)
{
    int i;
    /* deklaracija varijable */
    for (i = 0; i < n; ++i)
        ....
}
```

nova varijabla `i` definisana je u bloku `if` naredbe, koji se izvršava u slučaju istinitosti uvjeta `n>0`. 

Varijabla definisana unutar nekog bloka vidljiva je samo unutar tog bloka. Izvan bloka ne može joj se pristupiti, tj. njeno ime izvan bloka nije definisano. Štoviše, izvan bloka može biti deklarirana varijabla istog imena. Ta je varijabla tada unutar bloka nedostupna, jer ju skriva varijabla deklarirana u bloku. Na primjer:

```c
int x, y;
...... 

void f(double x)
{
    double y;
    ....
}
```

Formalni argument funkcije vidljiv je unutar funkcije i nije dohvatljiv izvan nje. Doseg formalnog argumenta je dakle isti kao i doseg varijable definisane na početku funkcije. Stoga u prethodnom primjeru formalni argument `x` i double varijabla `y`, deklarirana u funkciji, skrivaju `int` varijable `x` i `y`, deklarirane izvan funkcije. Njih unutar funkcije nije moguće dosegnuti. Nakon izlaza iz funkcije, cjelobrojne varijable `x` i `y` su ponovo vidljive i imaju nepromijenjene vrijednosti, dok `double` varijable `x` i `y` više ne postoje.

Ukratko, opseg varijable definisane unutar nekog bloka je taj blok. Opseg argumenta je tijelo funkcije.

## Globalne varijable

Varijabla deklarirana u vanjskom bloku vidljiva je u svakom unutarnjem bloku, ako u njemu nije definisana varijabla istog imena. Ako je varijabla definisana izvan svih blokova, onda je njen doseg čitava datoteka u kojoj je definisana. Takvu varijablu nazivamo globalnom. 

Na primjer, varijabla `x` vidljiva je unutar funkcije `ispisi()`:

{:.ulaz}
```c
#include <stdio.h>
int x = 3;

void ispisi(void)
{
    int y = 4;
    printf("x=%d, y=%d\n", x, y);
}

int main(void)
{
    ispisi();
    return 0;
}
```

S druge strane, naredni kod nije ispravan:

{:.ulaz}
```c
#include <stdio.h> /* pogresno */

void ispisi(void)
{
    int y = 4;
    printf("x=%d, y=%d\n", x, y);
}

int main()
{
    int x = 3;
    ispisi();
    return 0;
}
```

jer varijabla `x` nije definisana u bloku koji sadrži definiciju funkcije `ispisi()`.

Globalne varijable se definišu izvan svih funkcija i njihova je svrha prijenos podataka između funkcija. Svaka funkcija može doseći globalnu varijablu i promijeniti joj vrijednost. Na taj način više funkcija može komunicirati bez upotrebe argumenta. 

U sljedećem primjeru tri funkcije rade na istom polju znakova:

```c
#include <stdio.h>
#include <ctype.h>

char string[64];
void ucitaj(void);
void malo_u_veliko(void);
void ispisi(void);

int main(void)
{
    ucitaj();
    malo_u_veliko();
    ispisi();
    return 0;
}

void ucitaj()
{
    fgets(string, sizeof(string), stdin);
}

void malo_u_veliko()
{
    int i;
    for (i = 0; string[i] !='\0'; i++)
        string[i] = toupper(string[i]);
}

void ispisi()
{
    printf("%s\n", string);
}
```

Uočimo da sve funkcije rade s istom vanjskom varijablom `string`. Funkcija `fgets()` učitava string iz datoteke, ovdje standardnog ulaza.

Naglasimo da je globalna varijabla vidljiva od mjesta svoje deklaracije do kraja datoteke u kojoj se nalazi. Stoga globalne varijable deklariramo na početku datoteke, prije svih funkcija. U primjeru:

```c
int a;
void f(int);

int main(void)
{
    ....
}

int b;
void f(int i)
{
    .....
}
```

varijabla `a` je vidljiva i u funkciji `main()` i u funkciji `f()`, dok je varijabla `b` vidljiva u funkciji `f()`, ali ne i u funkciji `main()` 

Funkcije su po svojoj prirodi globalni objekti. Funkcija definisana na bilo kojem mjestu može se dohvatiti iz bilo kojeg dijela programa, ako ima prototip. Definicija funkcije unutar druge funkcije nije dozvoljena.

## Zadatak

Kakav će biti izlaz iz sljedećeg programa?

{:.ulaz}
```c
#include <stdio.h>

int main(void)
{
    int x = 30;
    printf("x u vanjskom bloku = %d\n", x);
    while (x++ < 33)
    {
        int x = 100;
        ++x;
        printf("x u unutarnjem bloku = %d\n", x);
    }
    return 0;
}
```

{:.uokvireno.ideja}
Funkcija koja zavisi od neke globalne varijable i vrijednosti koju će u nju postaviti neka druga funkcija nije samostalna cjelina i ne može se bez modifikacija koristiti u različitim programima. K tomu, ovisnost o globalnoj varijabli može biti slabo uočljiva, što otežava održavanje programa. Dobar stil programiranja stoga nalaže što manju upotrebu globalnih varijabli.


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
