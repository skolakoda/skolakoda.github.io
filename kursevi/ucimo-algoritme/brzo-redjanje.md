---
title: "Brzo ređanje (<i>quicksort</i>)"
layout: lekcija-algoritmi
permalink: /brzo-redjanje
---

![](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

**Brzi sort (*quicksort*) se, generalno, smatra najbržim algoritmom sortiranja. To je rekurzivni algoritam zasnovan na strategiji “podeli pa vladaj”.**

Algoritam se sastoji od sledećih koraka:

1. Nasumično izabrati neki član niza, koji se naziva *pivot* ili oslonac.
2. Razvrstati članove, tako da sve manje od pivota stavimo u jedan podniz, a veće u drugi. Dva podniza su nesortirana i razdvojena pivotom.
3. Rekurzivno sortirati svaki podniz na isti način. Rekurzija se nastavlja dok podnizovima ne ostane samo jedan element, nakon čega se dobiva sortirani niz.

Mogući su različiti načini izbora pivota. Na primer, može da se uzme prvi element niza, mada postoje i efikasniji načini. Idealno, pivot bi trebalo da predstavlja srednju vrednost niza. 

Ključni deo algoritma je način razvrstavanja niza na dve particije, odvojene pivotom, bez korištenja dodatnog memorijskog prostora.

## Pozadina

Osnovna ideja kod [*selection sort*](/redjanje-izborom) algoritma je da se jedan element postavi na svoje mesto, a zatim se isti metod rekurzivno primeni na podniz koji je za jedan kraći od polaznog. S obzirom da pripremna akcija zahteva O(n) operacija, dobija se jednačina `T (n) = T (n − 1) + O(n)`, čije rešenje je `O(n^2)`. Sa druge strane, kod [*merge sort*](/redjanje-spajanjem) algoritma sortiranje se svodi na sortiranje dva podniza, dvostruko manje dimenzije. S obzirom da spajanje dva sortirana niza zahteva O(n) operacija, dobija se jednačina `T (n) = 2T (n/2) + O(n)`, čije je rešenje `O(n log n)`.

**Dakle, značajno je efikasnije da se problem dimenzije `n` svodi na dva problema dimenzije `n/2` nego na jedan problem dimenzije `n-1`** — ovo je osnovna ideja podeli i vladaj algoritama u koje spada i *quick sort*.

## Koraci

![](https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif)

*Brzo ređanje* pokušava da postigne bolju efikasnost, modifikujući osnovnu ideju *ređanja izborom* tako što umesto najmanjeg, u svakom krugu na svoje mesto postavi element nazvan **pivot**. Međutim, da bi problem mogao biti sveden na sortiranje dva podniza, potrebno je prilikom postavljanja pivota grupisati sve manje elemente levo od njega, a sve veće desno. Dakle, ključni je **korak particionisanja**, koji podrazumeva da se niz organizuje da prvo sadrži elemente manje od pivota, pivotirajući element, pa elemente veće od pivota.

## Implementacija

*Quick sort* se može implementirati na sledeći način. Poziv `qsort_(a, l, d)` sortira deo niza `a[l, d]`.

```c
void qsort_(int a[], int l, int d) {
  if (l < d) {
    razmeni(a, l, izbor_pivota(a, l, d));
    int p = particionisanje(a, l, d);
    qsort_(a, l, p - 1);
    qsort_(a, p + 1, d);
  }
}
```

Funkcija `qsort` se onda jednostavno implementira

```c
void qsort(int a[], int n) {
  qsort_(a, 0, n-1);
}
```

Funkcija `izbor_pivota` bira za pivot neki element niza `a[l, d]` i vraća njegov indeks. Pozivom funkcije `razmeni` pivot se postavlja na poziciju `l`. 

## Particionisanje

Funkcija `particionisanje` vrši particionisanje niza (pretpostavljajući da se pre particionisanja pivot nalazi na poziciji `l`) i vraća poziciju na kojoj se nalazi pivot nakon particionisanja. Funkcija se poziva samo za nizove koji imaju više od jednog elementa te joj je preduslov da je `l` manje ili jednako `d`. Postuslov funkcije `particionisanje` je da je skup elemenata niza `a` nepromenjen nakon njenog poziva, međutim njihov redosled je takav da su svi elementi niza `a[l, p-1]` manji ili jednaki elementu `a[p]`, dok su svi elementi niza `a[p+1, d]` veći ili jednaki od elementa `a[p]`.

### Prvi način

Jedna od mogućih implementacija koraka particionisanja je sledeća:

```c
int particionisanje(int a[], int l, int d) {
  int p = l, j;
  for (j = l+1; j <= d; j++)
    if (a[j] < a[l])
      razmeni(a, ++p, j);

  razmeni(a, l, p);
  return p;
}
```

Invarijanta petlje je da je skup elemenata u nizu `a` nepromenjen, kao i da se u nizu `a` na poziciji `l` nalazi pivot, da su elementi `a[l+1, p]` manji od pivota, dok su elementi `a[p+1, j-1]` su veći ili jednaki od pivota. Nakon završetka petlje, `j` ima vrednost `d+1`, te su elementi `a[p+1, d]` veći ili jednaki od pivota. Kako bi se ostvario postuslov funkcije `particionisanje` vrši se još razmena pivota i elementa na poziciji `p` — time pivot dolazi na svoje mesto (na poziciju `p`).

### Drugi način

Drugi način implementacije particionisanja je zasnovan na Dajkstrinom algoritmu „trobojke“ (*Dutch National Flag Problem*). U ovom slučaju, radi se malo više od onoga što postuslov striktno zahteva — niz se permutuje tako da prvo idu svi elementi striktno manji od pivota, zatim sva pojavljivanja pivota i na kraju svi elementi striktno veći od pivota.

```c
int particionisanje(int a[], int l, int d) {
  int pn = l-1, pp = d+1, pivot = a[l], t = l;
  while (t < pp) {
    if (a[t] < pivot)
      razmeni(a, t++, ++pn);
    else if (a[t] > pivot)
      razmeni(a, t, --pp);
    else
      t++;
  }
  return pn+1;
}
```

Invarijanta petlje je da se skup elemenata niza ne menja, da su svi elementi niza `a[l, p`n`]` manji od pivota, da su svi elementi niza `a[pn+1, t-1]` jednaki pivotu, i da su svi elementi niza `a[pp, d]` veći od pivota. Kada se petlja završi važi da je t jednako pp tako da su svi elementi niza `a[l, pn]` manji od pivota, niza `a[pn+1, pp-1]` jednaki pivotu, a niza `a[pp`,` d]` veći od pivota.

### Treći način

Treći način implementacije particionisanja je da se obilazi paralelno sa dva kraja i kada se na levom kraju nađe element koji je veći od pivota, a na desnom koji je manji, da se izvrši njihova razmena:

```c
int particionisanje(int a[], int l, int d) {
  int l0 = l;

  while (l < d) {
    while (a[l] <= a[l0] && l < d)
      l++;
    while (a[d] >= a[l0] && l < d)
      d--;
    if (l < d)
      razmeni(a, l, d);
  }

  if (a[l] >= a[l0])
    l--;
  razmeni(a, l0, l);
  return l;
}
```

Invarijanta spoljašnje petlje je da je `l` manje ili jednako `d`, da je skup elemenata niza `a` nepromenjen (što je očigledno jer algoritam zasniva isključivo na razmenama)`,` da se na poziciji `l0` nalazi pivot i da su elementi `a[l0, l-1]` manji od pivota (gde je `l0` početna vrednost promenljive `l`), a elementi `a[d+1, d0]` (gde je `d0` početna vrednost promenljive `d`) veći ili jednaki od pivota. Po završetku petlje je `l` jednako `d`. Element na `toj` poziciji još nije ispitan i njegovim ispitivanjem se osigurava da `l` bude takav da su elementi `a[l0, l]` manji ili jednak od pivota, a elementi niza `a[l+1, d0]` veći ili jednaki od pivota. Odavde, nakon zamene pozicija `l0` i `l` postiže se postuslov particionisanja.

S abzirom da se u svakom koraku petlji smanjuje pozitivna celobrojna vrednost `d - l`, a sve petlje se zaustavljaju u slučaju kada je `d - l` nula zaustavljanje sledi.

Naredna implementacija optimizuje prethodnu ideju, tako što izbegava korišćenje zamena.

```c
int particionisanje(int a[], int l, int d) {
  int pivot = a[l];
  while (l < d) {
    while (a[d] >= pivot && l < d)
      d--;
    if (l != d)
      a[l++] = a[d];

    while (a[l] <= pivot && l < d)
      l++;
    if (l != d)
      a[d--] = a[l];
  }
  a[l] = pivot;
  return l;
}
```

Invarijanta spoljašnje petlje je da je `l` manje ili jednako `d`, da je skup elemenata niza a van pozicije `l` jednak skupu elemenata polaznog niza bez jedno`g` pojavljivanja pivota, da su elementi `a[l0`,` l-1]` manji od pivota (gde je `l0` početna vrednost promenljive `l`), a elementi `a[d+1, d0]` (gde je `d0` početna vrednost promenljive `d`) veći ili jednaki od pivota. Na sredini spoljne petlje, invarijanta se donekle naruši — svi uslovi ostaju `da` važe, osim što je skup elemenata `a` van pozicije `d` (umesto van pozicije `l`) jednak skupu elemenata polaznog niza bez jednog pojavljivanja pivota. Kada se petlja završi, `l` je jednako `d` i upisivanjem (sačuvane) vrednosti pivota na ovo mesto se postiže postuslov funkcije `particionisanja`. Zaustavljanje je analagno prethodnom slučaju.

## Izbor pivota

Kao što je već rečeno, iako je poželjno da se pivot izabere tako da podeli niz na dve potpuno jednake polovine, to bi trajalo previše tako da se obično pribegava heurističkim rešenjima. Ukoliko se može pretpostaviti da su elementi niza slučajno raspoređeni (što se uvek može postići ukoliko se pre sortiranja niz permutuje na slučajan način), bilo koji element niza se može uzeti za pivot. Na primer,

```c
int izbor_pivota(int a[], int l, int d) {
  return l;
}
```

ili

```c
int izbor_pivota(int a[], int l, int d) {
  return slucajan_broj(l, d);
}
```

Bolje performanse se mogu postići ukoliko se npr. za pivot uzme srednji od tri slučajno izabrana elementa niza.

![](https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif)

## Efikasnost

Ovaj algoritam je `O(n log n)` u očekivanom i `O(n^2)` u najgorem slučaju. Ako je implementiran prikladno, verovatnoća da će trajati asimptotski duže je ekstremno mala za veliko `n`.

*Quick sort* je algoritam koji u praksi daje najbolje rezultate kod sortiranja dugačkih nizova. Međutim, za sortiranje kraćih nizova naivni algoritmi (npr. *insertion sort*) mogu da se pokažu praktičnijim. Većina realnih implementacija *quick sort* algoritma koristi hibridni pristup — izlaz iz rekurzije se vrši kod nizova koji imaju nekoliko desetina elemenata i na njih se primenjuje *insertion sort*.

Sortiranje vrši lokalno (*in place*), jer ne koristi drugi niz za pohranu. 

### Literatura

* Esmir Pilav i Zoran Jasak, *Algoritmi i programiranje, materijal za vježbe*, Prirodno matematički fakultet, Univerzitet u Tuzli, 2013.
* Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
