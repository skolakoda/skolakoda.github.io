---
title: Upotreba ustaljenih izraza (idioma)
layout: lekcija-c
permalink: /upotreba-idioma
---

**Idiomi su ustaljene jezičke konstrukcije koje predstavljaju celinu.** Idiomi postoje u svim jezicima, pa i u programskim. Tipičan idiom u jeziku C je sledeći oblik `for`-petlje:

```c
for (i = 0 ; i < n; i++)
  ...
```

Kernigen i Pajk zagovaraju korišćenje idioma gde god je to moguće. Na primer, umesto varijanti:

```c
i=0;
while (i <= n-1)
  a[i++] = 1.0;
```

```c
for (i = 0; i<n; )
  a[i++] = 1.0;
```

```c
for (i = n; --i >= 0; )
  a[i] = 1.0;
```

smatraju da je bolja varijanta:

```c
for (i = 0 ; i < n; i++)
  a[i] = 1.0;
```

jer je najčešća i najprepoznatljivija. Štaviše, Kernigen i Pajk predlažu, delom i ekstremno, da se, bez dobrog razloga i ne koristi nijedna forma for-petlji osim navedene.

Glavni argument za korišćenje idioma je da se kôd brzo razume, a i da svaki drugi („neidiomski“) konstrukt privlači dodatnu pažnju što je dobro, jer se bagovi češće kriju u njima.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
