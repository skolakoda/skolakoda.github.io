---
title: Šelovo ređanje (<i>Shell sort</i>)
layout: lekcija-algoritmi
permalink: /shelovo-redjanje
---

![](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

**Donald Shell objavio je ovu metodu 1959. To je zapravo unapređena “mehur” metoda i metoda “umetanja” tako da se elementi pomiču u redosledu za više pozicija istovremeno.**

Najveći uzrok neefikasnosti kod *insertion sort* algoritma je slučaj malih elemenata koji se nalaze blizu kraja niza. Pošto se nalaze blizu kraja, oni se umeću u relativno dugačak niz, a pošto su mali umeću se na početak te je potrebno izvršiti pomeranje velikog broja elemenata kako bi se oni postavili na svoje mesto. *Shell sort* popravlja ovo.

Osnovni cilj je da se „skrati put“ ovakvih elemenata. *Shell sort* koristi činjenicu da *insertion sort* funkcioniše odlično kod nizova koji su „skoro sortirani“. Algoritam radi tako što se niz deli na veći broj kratkih kolona, koje se sortiraju primenom *insertion sort* algoritma, čime se omogućava direktna razmena udaljenih elemenata. Broj kolona se zatim smanjuje, sve dok se na kraju insertion sort ne primeni na ceo niz. Međutim, do tada su „pripremni koraci“ deljenja na kolone doveli niz u „skoro sortirano“ stanje te se završni korak prilično brzo odvija.

```c
void shellsort(int a[], int n) {
  int gap, i, j;
  for (gap = n/2; gap > 0; gap /= 2)
    for (i = gap; i < n; i++)
      for (j=i-gap; j>=0 && a[j]>a[j+gap]; j-=gap)
        razmeni(a, j, j + gap);
}
```

S obzirom na to da u poslednjoj iteraciji spoljne petlje `gap` ima vrednost 1, algoritam u poslednjoj iteraciji izvodi običan *insertion sort* algoritam, te se korektnost Shell sort algoritma oslanja na već diskutovanu korektnost *insertion sort* algoritma i invarijante da je sve vreme (multi)skup elemenata niza nepromenjen (koja je trivijalno ispunjena jer se algoritam zasniva na razmenama).

Ono što se može proizvoljno određivati je broj kolona na koji se vrši deljenje niza u fazama (broj kolona se obično označava sa `gap` i ovaj niz se u literaturi često označava *gap sequence*). Kako bi se garantovala korektnost, na kraju je potrebno primeniti *insertion sort* bez podele na kolone (tj. poslednji član sekvence mora biti 1). U zavisnosti od sekvence varira i složenost najgoreg slučaja.

Originalna sekvenca ima složenost O(n^2). Napomenimo da je empirijski utvrđeno da postoje relativno nepravilne sekvence koje u praksi daju bolje rezultate (imaju najbolju složenost prosečnog slučaja).


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
