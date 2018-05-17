---
title: Strune u jeziku C
layout: lekcija-c
permalink: /c-strune
image: /images/koncepti/strune/c-string.gif
---

![]({{page.image}})

*String* (struna ili niska) je jednodimenzionalni niz tipa `char`. Da bi se znalo gde se završava string dopisuje mu se takozvani zavšni ili NULL znak: `\0`, koji je sastavni deo stringa. Rad sa stringovima predstavija specifičan način korišćenja niza znakova.

## String konstante

Za C kompajler string konstanta je svaki niz znakova između navodnika. Znaci između navodnika plus završni znak se registruju u nizu susednih memorijskih lokacija. Zbog prisustva završnog znaka string konstanta "C" nije jednaka znakovnoj konsranti `C`, jer je "C" niz od dva znaka: `C` i `\0`. Prazna string konstanta  " " se sastoji samo od završnog znaka.

## Inicijalizacija struna

![](/images/koncepti/strune/c-string.png)

Stringovi se mogu inicijalizovati korišćenjem string konstanti. Na primer, operator

```c
static char s[] = "IBMPC";
```

inicijalizuje statički niz s datom string konstantom. Ovaj način inicijalizacije predstavlja skraćeni oblik inicijalizacije niza

```c
static char s[] = {'I', 'B', 'M', 'P', 'C', '\O'};
```

Ako bi se u inicijalizaciji izostavio završni znak to više ne bi bio string već samo niz znakova.

Kao i kod drugih nizova, ime s predstavlja pokazivač na nulti element niza, tako da važi:

```c
s=&s[0],*s='I', i *(s+1)=s[1]='B'
```

Izvor: profesor Katarina Veljković
