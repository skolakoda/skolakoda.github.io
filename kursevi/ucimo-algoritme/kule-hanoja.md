---
title: Kule Hanoja
layout: lekcija-algoritmi
permalink: /kule-hanoja
---

**Problem kula Hanoja glasi ovako: date su tri kule i na prvoj od njih `n` diskova opadajuće veličine; zadatak je prebaciti sve diskove sa prve na treću kulu (koristeći i drugu) ali tako da nikada nijedan disk ne stoji iznad manjeg.**

![](https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg)

Iterativno rešenje ovog problema je veoma kompleksno, a rekurzivno prilično jednostavno: ukoliko je `n = 0`, nema diskova koji treba da se prebacuju; inače: prebaci (rekurzivno) n−1 diskova sa polaznog na pomoćnu kulu (korišćenjem dolazne kule kao pomoćne), prebaci najveći disk sa polazne na dolaznu kulu i, konačno, prebaci (rekurzivno) n − 1 diskova sa pomoćne na dolaznu kulu (korišćenjem polazne kule kao pomoćne).

U nastavku je implementacija ovog rešenja:

```c
void kule(unsigned n, char polazna, char dolazna, char pomocna) {
    if (n > 0) {
        kule(n-1, polazna, pomocna, dolazna);
        printf("Prebaci disk sa kule %c na kulu %c\n",start,finish);
        kule(n-1, pomocna, dolazna, polazna);
    }
}
```

Funkciju možemo pozvati na sledeći način: `kule(3,'A','C','B')`.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
