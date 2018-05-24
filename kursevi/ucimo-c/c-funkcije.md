---
title: Funkcije u jeziku C
layout: lekcija-c
permalink: /c-funkcije
---

**Funkcija osigurava prikladan način vršenja svakojakih izračuna, čije rezultate kasnije možemo upotrijebiti bilo gdje.** Pravilno zadanim funkcijama, moguće je posao obaviti bez poznavanja unutarnje strukture funkcije; saznanje da je posao korektno obavljen je više nego dovoljno. C čini upotrebu funkcije lakom, prikladnom i efikasnom; često ćete se susretati s kratkim funkcijama definiranim i pozvanim samo jednom, tek radi pojašnjavanja dijelova koda.

## Primjer: funkcija `power`

Dosad smo koristili samo ponuđene funkcije tipa `printf`, `getchar` i `putchar`; došlo je vrijeme da sami napišemo nekoliko funkcija. Evo funkcije `power` i glavnog programa za njeno testiranje, kako bi mogli razlučiti čitavu njenu strukturu:

{:.ulaz}
```c
#include <stdio.h>

int power(int m, int n);

/* test power funkcije */
int main()
{
    int i;
    for (i = 0; i < 10; ++i)
        printf("%d %d %d\n", i, power(2, i), power(-3, i));
    return 0;
}

/* power: podiže bazu na n-ti eksponent n>=0 */
int power(int base, int n)
{
    int i, p;
    p = 1;
    for (i = 1; i <= n; ++i)
        p = p * base;
    return p;
}
```

Evo i verzije funkcije `power`, bez pomoćne varijable `i`:

```c
int power(int base, int n)
{
    int p;
    for (p = 1; n > 0; --n)
        p = p * base;
    return p;
}
```

Ovde se vrednost parametra `n` smanjuje unutar funkcije. Međutim, što god uradili sa `n` unutar funkcije, nema nikakvog uticaja na argument sa kojim je `power` prvobitno pozvan (vidi [Prenos argumenata](/prenos-argumenata)).

## Definicija funkcije

Definicija funkcije ima ovaj oblik:

```
tip_podatka ime_funkcije(tip_1 arg_1, ... ,tip_n arg_n)
{
    tijelo funkcije
}
```

gdje je `tip_podatka` tip podatka koji će funkcija vratiti kao rezultat svog izvršavanja. Unutar zagrada nalazi se deklaracija formalnih argumenata funkcije. Prvi argument `arg_1` je varijabla tipa `tip_1` itd. Deklaracije pojedinih argumenata međusobno se odvajaju zarezom. Unutar vitičastih zagrada pojavljuje se tijelo funkcije koje se sastoji od deklaracija varijabli i izvršnih naredbi.

## Poziv funkcije

Funkcija `power` se poziva u `main` funkciji na sledeći način:

```c
printf("%d %d %d\n", i, power(2, i), power(-3, i));
```

Svaki poziv predaje dva argumenta funkciji `power`, koja nakon toga vraća cijeli broj za formatirani ispis. U jednom izrazu, `power(2,i)` je cijeli broj kao što su to i `2` i `i`.

Evo verzije funkcije `power` (od [ranije](/c-funkcije)), bez pomoćne varijable `i`, koja koristi ovu osobinu:

```c
int power(int base, int n)
{
    int p;
    for (p = 1; n > 0; --n)
        p = p * base;
    return p;
}
```

Parametar `n` se koristi kao privremena varijabla, a vrednost mu se smanjuje dok ne dođe do nule. Međutim, što god uradili sa `n` unutar funkcije `power`, nema nikakvog uticaja na argument sa kojim je `power` prvobitno pozvan.

## Tip i parametri funkcije

Prva linija funkcije power,

```
int power(int base, int n)
```

određuje tipove i imena parametara, te tip rezultata koji funkcija vraća. Imena koja koristi `power` za svoje parametre su lokalna i nisu vidljiva za bilo koju drugu funkciju: druge funkcije bez ikakvog problema mogu se služiti istim imenima. To isto tako vrijedi i za varijable `i` i `p`: i u funkciji `power` nema ništa s i u funkciji main.

**Mi ćemo koristiti "parametar" za varijablu čije se ime nalazi na listi definicije funkcije uokvirene zagradama, a "argument" za vrijednost koja se koristi pri pozivu.** Ponekad se koriste termini "formalni argument" i "aktualni argument" da se ovi pojmovi ne bi miješali.

Evo verzije funkcije `power` (od [ranije](/c-funkcije)), bez pomoćne varijable `i`, koja koristi ovu osobinu:

```c
int power(int base, int n)
{
    int p;
    for (p = 1; n > 0; --n)
        p = p * base;
    return p;
}
```

Parametar `n` se koristi kao privremena varijabla, a vrednost mu se smanjuje dok ne dođe do nule. Međutim, što god uradili sa `n` unutar funkcije `power`, nema nikakvog uticaja na argument sa kojim je `power` prvobitno pozvan.

## Vraćanje vrijednosti

Vrijednost koju `power` izračuna vraća se u `main` pomoću naredbe `return`. Bilo koji izraz može biti naveden iza `return`:

```
return izraz;
```

Funkcija ne mora vraćati vrijednost.

Mogli ste uočiti naredbu `return` na kraju `main` funkcije. Pošto je `main` funkcija kao i svaka druga, njena se vrijednost može vratiti onome tko ju je pozvao, što je gotovo uvijek operativni sustav. Bilo kako bilo, vraćena vrijednost nule podrazumijeva uredan završetak; vraćena vrijednost različita od nule znak je da nešto nije bilo u redu. Da bi pojednostavnili, mi smo izostavljali naredbe `return` iz `main` funkcija, ali ćemo ih uključivati, jer programi trebaju vraćati status svome okruženju.

Evo verzije funkcije `power` (od [ranije](/c-funkcije)), bez pomoćne varijable `i`, koja koristi ovu osobinu:

```c
int power(int base, int n)
{
    int p;
    for (p = 1; n > 0; --n)
        p = p * base;
    return p;
}
```

Parametar `n` se koristi kao privremena varijabla, a vrednost mu se smanjuje dok ne dođe do nule. Međutim, što god uradili sa `n` unutar funkcije `power`, nema nikakvog uticaja na argument sa kojim je `power` prvobitno pozvan.

## Deklaracija ili prototip funkcije

Funkcija mora biti deklarirana prije mjesta na kome se poziva, kako bi prevodilac znao broj i tip argumenata funkcije i tip rezultata koji vraća. Stoga je prirodno definiciju funkcije staviti prije funkcije `main`. Ako u programu imamo puno funkcija takav način pisanja može biti nepregledan. C nam stoga dozvoljava da definiciju funkcije stavimo iza mjesta na kome se poziva, ako prije postavimo prototip funkcije. Prototip se dobiva tako da se u definiciji funkcije ispusti čitavo tijelo funkcije. Prototip kao i sve druge naredbe završava s točka-zarezom. Općenito, prototip ima oblik

```c
int power(int m, int n);
```

Kaže da `power` funkcija treba dva cjelobrojna argumenta, a vraća jedan `int`. Ova deklaracija, koja se naziva prototipom funkcije, mora se slagati s definicijom `power`. Ako se definicija funkcije ili neki njezin poziv ne slaže s prototipom, primit ćemo dojavu o greški.

Imena parametara ne moraju se slagati. Zapravo, imena parametara u prototipu funkcije su proizvoljna, pa se dade napisati i

```c
int power(int, int);
```

Uredno odabrana imena čine program dokumentiranim, pa ćemo ih radije koristiti. 

Deklaracije funkcija se mogu pojavljivati po bilo kom redoslijedu, u jednoj ili više izvornih datoteka.


Evo verzije funkcije `power` (od [ranije](/c-funkcije)), bez pomoćne varijable `i`, koja koristi ovu osobinu:

```c
int power(int base, int n)
{
    int p;
    for (p = 1; n > 0; --n)
        p = p * base;
    return p;
}
```

Parametar `n` se koristi kao privremena varijabla, a vrednost mu se smanjuje dok ne dođe do nule. Međutim, što god uradili sa `n` unutar funkcije `power`, nema nikakvog uticaja na argument sa kojim je `power` prvobitno pozvan.

## Izvori

- Brian Kernighan i Dennis Ritchie, *Programski jezik C*
- M. Jurak, *Programski jezik C*, predavanja 2003/04.
