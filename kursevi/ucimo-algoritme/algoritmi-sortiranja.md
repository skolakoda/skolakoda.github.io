---
title: Algoritmi sortiranja
layout: lekcija-algoritmi
permalink: /algoritmi-sortiranja
redirect_from:
  - /agoritmi-sortiranja
image: /images/koncepti/algoritmi/sorting-algorithms.gif
---

![]({{page.image}})

**Sortiranje je jedan od fundamentalnih zadataka u računarstvu.** Sortiranje podrazumeva uređivanje niza u odnosu na neko linearno uređenje (npr. uređenje niza brojeva po veličini — rastuće ili opadajuće, uređivanje niza niski leksikografski ili po dužini, uređivanje niza struktura na osnovu vrednosti nekog polja i slično). Mnogi zadaci nad nizovima se mogu jednostavnije rešiti u slučaju da je niz sortiran (npr. pretraživanje se može vršiti binarnom pretragom).

Postoji više različitih algoritama za sortiranje nizova. Neki algoritmi su jednostavni i intuitivni, dok su neki kompleksniji, ali izuzetno efikasni. Najčešće korišćeni algoritmi za sortiranje su:

- [Ređanje mehurom](/redjanje-mehurom) (_bubble sort_)
- [Ređanje izborom](/redjanje-izborom) (_selection sort_)
- [Ređanje umetanjem](/redjanje-umetanjem) (_insertion sort_)
- [Ređanje spajanjem](/redjanje-spajanjem) (_merge sort_)
- [Brzo ređanje](/brzo-redjanje) (_quicksort_)
- [Šelovo ređanje](/shelovo-redjanje) (*Shell sort*)
- [Ređanje hrpom](/redjanje-hrpom) (*heapsort*)

Neki od algoritama za sortiranje rade u mestu (engl. *in-place*), tj. sortiraju zadate elemente bez korišćenja dodatnog niza. Drugi algoritmi zahtevaju korišćenje pomoćnog niza ili nekih drugih struktura podataka.

Prilikom sortiranja nizova koji sadrže podatke netrivijalnih tipova najskuplje operacije su operacija poređenja dva elementa niza i operacija razmene dva elementa niza. Zbog toga se prilikom izračunavanja složenosti algoritama obično u obzir uzimaju samo ove operacije.

Algoritmi za sortiranje obično pripadaju jednoj od dve klase vremenske složenosti. Jednostavniji, sporiji algoritmi sortiranja imaju složenost najgoreg slučaja O(n^2) i u tu grupu spadaju bubble, insertion i selection.

*Shell sort* je algoritam koji je negde između pomenute dve klase (u zavisnosti od implementacije složenost mu varira od O(n 2) do O(n log 2 n)). Kompleksniji, brži algoritmi imaju složenost najgoreg slučaja O(n log n) i u tu grupu spadaju *heap* i *merge sort*. Algoritam *quick sort* ima složenost najgoreg slučaja O(n 2), ali, pošto je složenost prosečnog slučaja O(n log n) i pošto u praksi pokazuje dobre rezultate, ovaj se algoritam ubraja u grupu veoma brzih algoritama.

Može se dokazati da algoritmi koji sortiraju niz permutovanjem elemenata niza (većina nabrojanih funkcioniše upravo ovako) ne mogu imati bolju složenost od O(n log n).

## Konvencije

Svi algoritmi sortiranja u nastavku će biti prikazani na standardnom primeru sortiranja niza celih brojeva u neopadajućem poretku. Pre opisa algoritama sortiranja navedimo funkciju koja proverava da li je niz već sortiran neopadajuće.

```c
int sortiran(int a[], int n) {
  int i;
  for (i = 0; i < n - 1; i++)
    if (a[i] > a[i + 1])
      return 0;
  return 1;
}
```

U većini algoritama sortiranja, osnovi korak će biti razmena elemenata niza, te će se pretpostavljati da je na raspolaganju sledeća funkcija:

```c
void razmeni(int a[], int i, int j) {
  int tmp = a[i]; a[i] = a[j]; a[j] = tmp;
}
```

Opšti oblik funkcije za sortiranje niza brojeva je

```c
void sort(int a[], int n);
```

Preduslov funkcije je da je nenegativna promenljiva `n` jednaka dimenziji niza `a`, dok je postuslov da su elementi niza nakon primene funkcije sortirani kao i da se (multi)skup elemenata niza nije promenio.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
