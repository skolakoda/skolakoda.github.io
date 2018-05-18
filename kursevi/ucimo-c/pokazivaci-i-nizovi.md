---
title: Pokazivači i nizovi
layout: lekcija-c
permalink: /pokazivaci-i-nizovi
---

**Postoji čvrsta veza pokazivača i nizova. Operacije nad nizovima mogu se iskazati i korišćenjem pokazivača i često nećemo praviti razliku izmedu dva načina za pristupanje elementima niza.**

Deklaracija `int a[10]` deklariše niz veličine 10. Početni element je `a[0]`, a deseti element je `a[9]` i oni su poredani uzastopno u memoriji. Imenu niza `a` pridružena je informacija o adresi početnog elementa niza, o tipu elemenata niza, kao i o broju elemenata niza. Ime niza `a` nije l-vrednost (jer `a` uvek ukazuje na isti prostor koji je rezervisan za elemente niza). Dakle, vrednost a nije pokazivačkog tipa, ali mu je vrlo bliska.

Nakon deklaracije `int a[10]`, vrednosti `a` odgovara pokazivač na prvi element niza, vrednosti `a+1` odgovara pokazivač na drugi element niza, itd. Dakle, umesto `a[i]` može se pisati `*(a+i)`, a umesto `&a[i]` može se pisati `a+i`.

{:.uokvireno}
Kao i obično, nema provere granica niza, pa je moguće pisati (tj. prolazi fazu prevođenja) i `a[100]`, `*(a+100)`, `a[-100]`, `*(a-100)`, iako je veličina niza samo 10. U fazi izvršavanja, pristupanje ovim lokacijama može da promeni vrednost drugih promenljivih koje se nalaze na tim lokacijama ili da dovede do prekida rada programa zbog pristupanja memoriji koja mu nije dodeljena.

## Konverzija tipa

Kao što je rečeno, izraz `a` ima vrednost adrese početnog elementa i tip `int [10]` koji se, po potrebi, može konvertovati
u `int *`. Izraz `&a` ima istu vrednost kao i `a`, ali drugačiji tip, tip `int (*)[10]`, a to je tip pokazivača na niz od 10 elemenata koji su tipa int. Taj tip ima u narednom primeru promenljiva `b`:

```c
char a[10];
char (*b)[10];
char *c[10];
```

U navedenom primeru, promenljiva `c` je niz 10 pokazivača na `char`. S druge strane, promenljiva `b` je pokazivač na niz od 10 elemenata tipa `char` i zauzima onoliko prostora koliko i bilo koji drugi pokazivač. Vrednost se promenljivoj `b` može pridružiti, na primer, naredbom `b = &a;`. Tada je `(*b)[0]` isto što i `a[0]`.

Ukoliko je promenljiva `b` deklarisana, na primer, sa char `(*b)[5];`, u dodeli `b = &a;` će biti izvršena implicitna konverzija i ova naredba će proći kompilaciju (uz upozorenje da je izvršena konverzija neusaglašenih tipova).

## Prosleđivanje niza

**Niz se ne prenosi kao argument funkcije**, već se kao argument funkcije se može navesti ime niza i time se prenosi samo pokazivač koji ukazuje na početak niza (tj. ne prenosi se nijedan element niza). Funkcija koja prihvata takav argument za njegov tip ima pokazivač zapisan u formi `char *a` ili `char a[]`. Ovim se kao argument prenosi (po vrednosti) samo pokazivač na početka niza, ali ne i informacija o dužini niza.

Na primer, kod dat u narednom primeru (na mašini na kojoj su tip `int` i adresni tip reprezentovani sa 4 bajta) ispisuje, u okviru funkcije main, broj 20 (5 elemenata tipa `int` čija je veličina 4 bajta) i, u okviru funkcije `f`, broj 4 (veličina adrese koja je preneta u funkciju). Dakle, funkcija `f` nema informaciju o broju elemenata niza `a`.

{:.ulaz}
```c
#include <stdio.h>

void f(int a[])
{
    printf("%d\n", sizeof(a));
}
int main()
{
    int a[] = { 1, 2, 3, 4, 5 };
    printf("%d\n", sizeof(a));
    f(a);
    return 0;
}
```

Dakle, prilikom prenosa niza u funkciju, uz njegovo ime (tj. adresu njegovog početka), najčešće je neophodno proslediti i broj elemenata niza, jer je ovaj broj nemoguće odrediti u okviru funkcije samo na osnovu prenete adrese početka. Izuzetak od ovog pravila predstavljaju funkcije koje obraduju prosleđene strune (iz `string.h`), jer je u tom slučaju na osnovu sadržaja strune moguće odrediti i broj elemenata. Preciznije, i dalje nije moguće odrediti veličinu niza, već je samo moguće odrediti njegov efektivni sadržaj do pojave terminalne nule.

Kako se kao argument nikada ne prenosi čitav niz, već samo adresa početka, moguće je umesto adrese početka proslediti i pokazivač na bilo koji element niza kao i bilo koji drugi pokazivač odgovarajućeg tipa. Na primer, ukoliko je ime niza `a` i ako funkcija `f` ima prototip `f(int x[]);` (ili ekvivalentno `f(int *x);`), onda se funkcija može pozivati i za početak niza (sa `f(a)`) ili za pokazivač na neki drugi element niza (na primer, `f(&a[2]`) ili ekvivalentno `f(a+2)`).

Ni u jednom od ovih slučajeva funkcija `f`, naravno, nema informaciju o tome koliko elemenata niza ima nakon prosledene adrese.


Izvor: [Mala škola referenciranja u programskom jeziku C](http://poincare.matf.bg.ac.rs/~jelenagr/2d/MalaSkolaPokazivaca.pdf)
