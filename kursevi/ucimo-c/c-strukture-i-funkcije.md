---
title: Strukture i funkcije u jeziku C
layout: lekcija-c
permalink: /c-strukture-i-funkcije
---

Jedine dopuštene operacije na strukturama su kopiranje i dodjeljivanje strukturi kao cjelini, označujući joj adresu operatorom `&` i pristupajući njenim članovima. Kopiranje i dodjeljivanje uključuju prenošenje argumenata na funkcije kao i vraćanje vrijednosti od strane funkcija. Strukture se na mogu upoređivati. Struktura se dade inicijalizirati nizom članova konstantnih vrijednosti, a automatska struktura se može također inicijalizirati dodjeljivanjem. 

Ispitajmo strukture opisujući funkcije za rad s točkama i trokutima.

Postoje različiti prilazi ovom problemu. Ili ćemo prenositi članove strukture posebno ili čitavu strukturu, a možemo prenositi pokazivače na strukturu. Svako od nabrojanih mogućih rješenja ima dobre i loše strane. 

## Prenos članova strukture

Prva funkcija, `makepoint`, uporabit će dva cijela broja, te vratiti strukturu `point`

```c
/* makepoint : stvara točku od x i y komponente */
struct point makepoint(int x, int y)
{
        struct point temp;
        temp.x = x;
        temp.y = y;
        return temp;
}
```

Primijetimo kako nema proturječnosti između imena argumenata i člana s istim imenom. Čak štoviše, uporaba istog imena naglašava njihovu međusobnu vezu. Sada možemo uporabiti funkciju `makepoint` radi dinamičke inicijalizacije bilo koje strukture ili stvaranja strukture argumenata funkcija

```c
struct rect screen;
struct point middle;
struct point makepoint(int, int);
screen.pt1 = makepoint(0, 0);
screen.pt2 = makepoint(XMAX, YMAX);
middle = makepoint((scrren.pt1.x + scrren.pt2.x) / 2, (screen.pt1.y + screen.pt2.y) / 2);
```

Slijedeći korak je skup funkcija koje primjenjuju linearnu algebru točaka. Primjerice,

```c
/* addpoint : zbraja dva vektora */
struct point addpoint()
{
        p1.x += p2.x;
        p1.y += p2.y;
        return p1;
}
```

Ovdje su strukture i argumenti funkcije i povratne vrijednosti. Zgodnije nam se čini uvećanje komponenti u član `p1`, nego uporaba eksplicitne privremene varijable koja bi istakla da su parametri strukture preneseni po vrijednosti.

## Prenos čitave strukture

Slijedeći primjer je funkcija `ptinrect` koja provjerava da li je točka unutar pravokutnika, uz pretpostavku da pravokutnik ima svoju lijevu i donju stranu, bez gornje i desne

```c
/* ptinrect : vraća vrijednost 1 ako je točka p unutar pravokutnika, a 0 ako nije */
int ptinrect(struct point p, struct rect r)
{
        return p.x >= r.pt.x && p.x < r.pt2.x && p.y >= r.pt1.y && r.pt2.y;
}
```

Ovo podrazumijeva da je pravokutnik prikazan u standardnom obliku koji uvjetuje da su koordinate člana `pt1` manje od onih u članu `pt2`. Funkcija koju ćemo sada napisati vraća pravokutnik u kanonski oblik

```c
#define min(a, b) ((a)(b) ? (a) : (b))
#define max(a, b) ((a)(b) ? (a) : (b))

/* canonrect : determinira koordinate pravog kuta */
struct rect canonrect(struct rect r)
{
        struct rect temp;
        temp.pt1.x = min(r.pt1.x, r.pt2.x);
        temp.pt1.y = min(r.pt1.y, r.pt2.y);
        temp.pt2.x = max(r.pt1.x, r.pt2.x);
        temp.pt2.y = max(r.pt1.y, r.pt2.y);
        return temp;
}
```

## Prenos pokazivača

Ako veliku strukturu treba predati funkciji, zapravo je učinkovitije prenijeti pokazivač negoli preslikati cijelu strukturu (i time je umnožiti u memoriji). Pokazivači na strukture djeluju jednako pokazivačima na obične varijable. Deklaracija

```c
struct point *pp;
```

govori da je `pp` pokazivač na strukturu tipa `point`. Ako `pp` pokazuje na `point` strukturu, tada je `*pp` struktura, `(*pp).x` i `(*pp).y` su članovi. Pogledajmo slijedeći primjer

```c
struct point origin, *pp;
pp = &origin;
printf("origin is (%d, %d)\n", (*pp).x, (*pp).y);
```

Mala zagrada je obvezna u konstrukciji `(*pp).x`, jer je prioritet strukture člana operatora `.` veći od `*`. Izraz `*pp.x` ima značenje kao `*(pp.x)` što nije dopušteno jer je `x` član, a ne pokazivač. Pokazivači na strukture se rabe prilično često, pa je uvedena i specijalna sintaksa radi jasnoće koda. Ako je `p` pokazivač na strukturu, tada se izraz

```
p->član_strukture
```

odnosi na taj član. Naredbu za ispis iz prethodnog primjera mogli smo, dakle, napisati kao

```c
printf("origin is (%d, %d)\n", pp->x, pp->y);
```

I `.` i `->` se pridružuju slijeva nadesno, pa tako ako imamo

```c
struct rect r, *rp=r;
```

ova četiri izraza su ekvivalentna

```
r.pt1.x
rp->pt1.x
(r.pt1).x
(rp->pt1).x
```

Operatori struktura `.` i `->`, zajedno sa malim zagradama za pozive funkcija, te uglatim zagradama za indekse, jesu na vrhu hijerarhije prioriteta, pa su zato tijesno povezani. Npr. ako imamo deklaraciju

```c
struct
{
        int len;
        char *str;
} * p;
```

onda

```c
++p->len;
```

uvećava vrijednost člana `len`, a ne strukture `p`, jer se predmnijeva zagrada `++(p->len)`. Zagradama se izraz dade izmijeniti. Tako izrazom `(++p)->len` uvećavamo strukturu `p` prije pridruživanja člana, a izrazom `(p++)->len` uvećavamo strukturu p nakon toga (pri čemu je zagrada nepotrebna).

Analogno tome, izraz `*p->str` jest vrijednost na koju član `str` pokazuje. Tako će izraz `*p->str++` povećati vrijednost člana `str` po pristupanju tom članu (slično izrazu `*s++`), izraz `(*p->str)++` uvećava sve ono na što član `str` pokazuje, te izraz `*p++->str` uvećava strukturu `p` nakon pristupanja podatku na koji pokazuje član `str`.


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*