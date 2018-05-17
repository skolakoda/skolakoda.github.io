---
title: Deklaracije varijabli u jeziku C
layout: lekcija-c
permalink: /c-deklaracije-varijabli
---

Sve varijable prije uporabe moraju biti deklarirane, mada određene deklaracije mogu biti obavljene tako da slijede iz konteksta. Deklaracija određuje tip, a sadrži listu od jedne ili više varijabli tog tipa, kao npr.

```c
int lower, upper, step;
char c, line[1000];
```

Svaka deklaracija može biti u zasebnom redu; gore napisano se dade i drugačije napisati

```c
int lower;
int upper;
int step;
char c;
char line[1000];
```

Ovakav način uzima više prostora, ali je zato zgodan za dodjelu komentara svakoj deklaraciji ili kasnije promjene.

## Inicijalizacija

Varijabla može biti inicijalizirana u svojoj deklaraciji. Ako iza imena varijable slijedi znak jednakosti i izraz, tada taj izraz služi kao inicijalizator kao u

```c
char esc = '\\';
int i = 0;
int limit = MAXLINE + 1;
float eps = 1.0e-5;
```

Ako varijabla nije automatska, inicijalizacija se obavlja samo jednom, prije pokretanja programa, a inicijalizator mora biti konstantni izraz. Eksplicitno inicijalizirana automatska varijabla se inicijalizira svaki put kad se prolazi kroz funkciju, odnosno blok u kojem se varijabla nalazi; inicijalizator može biti bilo kakav izraz. Vanjske i statičke varijable se inicijaliziraju na nulu. Automatske varijable za koje ne postoji eksplicitni inicijalizator dobijaju nedefinirane vrijednosti (*garbage*).

## Deklaracije konstanti

Kvalifikator `const` može se dodijeliti deklaraciji bilo koje varijable, kako bi označio da se ona neće mijenjati. Za polje, npr., on pokazuje da se elementi polja neće mijenjati.

```c
const double e = 2.71828182845905;
const char msg[] = "warning:";
```

Deklaracija const se rabi i sa argumentima polja, kako bi naglasila da funkcija neće mijenjati dano polje

```c
int strlen(const char[]);
```


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
