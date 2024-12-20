---
title: Algoritmi sortiranja
layout: lekcija-algoritmi
permalink: /algoritmi-sortiranja
image: /images/koncepti/algoritmi/sorting-algorithms.gif
---

![]({{page.image}})

**Sortiranje ili ređanje je jedan od fundamentalnih zadataka u računarstvu.** Sortiranje podrazumeva linearno uređivanje niza po datom kriteriju (npr. niza brojeva po veličini, niza teksta leksikografski ili po dužini, niza struktura na osnovu vrednosti nekog polja i slično). 

Cilj sortiranja je olakšati pretraživanje elemenata. U svakodnevnom životu se srećemo sa puno primera kao što su telefonski imenici, rečnici i slično.

Mnogi zadaci nad nizovima se mogu jednostavnije rešiti ako je niz sortiran (npr. pretraživanje se može vršiti binarnom pretragom).

## Pregled algoritama

Postoji više različitih algoritama za sortiranje nizova. Neki algoritmi su jednostavni i intuitivni, dok su neki kompleksniji, ali izuzetno efikasni. Najčešće korišćeni algoritmi za sortiranje su:

- [Ređanje mehurom](/redjanje-mehurom) (_bubble sort_)
- [Ređanje izborom](/redjanje-izborom) (_selection sort_)
- [Ređanje umetanjem](/redjanje-umetanjem) (_insertion sort_)
- [Ređanje spajanjem](/redjanje-spajanjem) (_merge sort_)
- [Brzo ređanje](/brzo-redjanje) (_quicksort_)
- [Šelovo ređanje](/shelovo-redjanje) (*Shell sort*)
- [Ređanje hrpom](/redjanje-hrpom) (*heapsort*)

Neki od algoritama sortiraju u mestu (*in-place*), bez upotrebe dodatnog niza, dok drugi zahtevaju pomoćnu niz ili drugu strukturu. Lokalno (*in-place*) sortiranje ne koristi dodatne memorijske resurse, pa je moguće sortirati velike nizove bez alokacije dodatnog memorijskog prostora.

Prilikom sortiranja nizova koji sadrže podatke netrivijalnih tipova, najskuplje operacije su operacija poređenja dva elementa niza i operacija razmene dva elementa niza. Zbog toga se prilikom izračunavanja složenosti algoritama obično u obzir uzimaju samo ove operacije.

Algoritmi za sortiranje obično pripadaju jednoj od dve klase vremenske složenosti. Jednostavniji, sporiji algoritmi sortiranja imaju složenost najgoreg slučaja O(n^2) i u tu grupu spadaju *bubble*, *insertion* i *selection*.

*Shell sort* je algoritam koji je negde između pomenute dve klase - u zavisnosti od implementacije složenost mu varira od O(n^2) do O(n log n). Kompleksniji, brži algoritmi imaju složenost najgoreg slučaja O(n log n) i u tu grupu spadaju *heap* i *merge sort*. Algoritam *quick sort* ima složenost najgoreg slučaja O(n^2), ali pošto je prosečne složenosti O(n log n) i pošto u praksi pokazuje dobre rezultate, ubraja se u grupu veoma brzih algoritama.

Može se dokazati da algoritmi koji sortiraju niz permutovanjem elemenata niza (većina nabrojanih funkcioniše upravo ovako) ne mogu imati bolju složenost od O(n log n).

## Konvencije

Algoritmi sortiranja će biti prikazani na standardnom primeru ređanja niza brojeva u rastućem poretku. Takođe, koristićemo funkciju koja proverava da li je niz već sortiran:

```c
int sortiran(int a[], int n) {
  int i;
  for (i = 0; i < n - 1; i++)
    if (a[i] > a[i + 1])
      return 0;
  return 1;
}
```

U mnogim algoritmima sortiranja, neophodan korak je razmena elemenata niza, pa ćemo pretpostavljati da je na raspolaganju sledeća funkcija:

```c
void razmeni(int a[], int i, int j) {
  int tmp = a[i]; 
  a[i] = a[j]; 
  a[j] = tmp;
}
```

Opšti oblik funkcije za sortiranje niza brojeva je:

```c
void sort(int a[], int n);
```

Preduslov funkcije je da je promenljiva `n` jednaka dužini niza `a`, dok je postuslov da su elementi niza nakon primene funkcije sortirani kao i da se skup elemenata niza nije promenio.


## Literatura

* Esmir Pilav i Zoran Jasak, *Algoritmi i programiranje, materijal za vježbe*, Prirodno matematički fakultet, Univerzitet u Tuzli, 2013.
* Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
