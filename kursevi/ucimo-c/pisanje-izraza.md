---
title: Pisanje razumljivih izraza
layout: lekcija-c
permalink: /pisanje-izraza
---

Za dobrog programera neophodno je da poznaje sva pravila programskog jezika, jer će verovatno češće i više raditi na tuđem nego na svom kôdu. S druge strane, programer u svojim programima ne mora i ne treba da koristi sva sredstva izražavanja tog programskog jezika, već može i treba da ih koristi samo delom, oprezno i uvek sa ciljem pisanja razumljivih programa. Sve ovo se odnosi na mnoge aspekte pisanja programa, uključujući pisanje izraza.

Preporučuje se pisanje izraza u jednostavnom i intuitivno jasnom obliku. Na primer, umesto:

```c
(!(c < '0') && !(c > '9'))
```

bolje je:
```c
(c >= '0' && c <= '9')
```

Zagrade, čak i ako nisu neophodne, mogu da olakšaju čitljivost. Prethodni primer može da se zapiše na sledeći način:
```c
((c >= '0') && (c <= '9'))
```

Suviše komplikovane izraze treba zameniti jednostavnijim i razumljivijim. Kernigen i Pajk navode primer:

```c
*x += (*xp=(2*k < (n-m) ? c[k+1] : d[k--]));
```

i bolju, jednostavniju varijantu:

```c
if (2*k < n-m)
  *xp = c[k+1];
else
  *xp = d[k--];
*x += *xp;
```


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
