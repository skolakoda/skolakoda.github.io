---
title: Algoritmi sortiranja
layout: post
tags: [algoritmi, racunarska-nauka, c]
---

**Sortiranje je jedan od fundamentalnih zadataka u računarstvu.** Sortiranje podrazumeva uređivanje niza u odnosu na neko linearno uređenje (npr. uređenje niza brojeva po veličini — rastuće ili opadajuće, uređivanje niza niski leksikografski ili po dužini, uređivanje niza struktura na osnovu vrednosti nekog polja i slično). Mnogi zadaci nad nizovima se mogu jednostavnije rešiti u slučaju da je niz sortiran (npr. pretraživanje se može vršiti binarnom pretragom).

Postoji više različitih algoritama za sortiranje nizova. Neki algoritmi su jednostavni i intuitivni, dok su neki kompleksniji, ali izuzetno efikasni. Najčešće korišćeni algoritmi za sortiranje su:

- Bubble sort
- Selection sort
- Insertion sort
- Shell sort
- Merge sort
- Quick sort
- Heap sort

Neki od algoritama za sortiranje rade u mestu (engl. *in-place*), tj. sortiraju zadate elemente bez korišćenja dodatnog niza. Drugi algoritmi zahtevaju korišćenje pomoćnog niza ili nekih drugih struktura podataka.

Prilikom sortiranja nizova koji sadrže podatke netrivijalnih tipova najskuplje operacije su operacija poređenja dva elementa niza i operacija razmene dva elementa niza. Zbog toga se prilikom izračunavanja složenosti algoritama obično u obzir uzimaju samo ove operacije.

Algoritmi za sortiranje obično pripadaju jednoj od dve klase vremenske složenosti. Jednostavniji, sporiji algoritmi sortiranja imaju složenost najgoreg slučaja O(n^2) i u tu grupu spadaju bubble, insertion i selection.

Shell sort je algoritam koji je negde između pomenute dve klase (u zavisnosti od implementacije složenost mu varira od O(n 2) do O(n log 2 n)). Kompleksniji, brži algoritmi imaju složenost najgoreg slučaja O(n log n) i u tu grupu spadaju heap i *merge sort*. Algoritam *quick sort* ima složenost najgoreg slučaja O(n 2), ali, pošto je složenost prosečnog slučaja O(n log n) i pošto u praksi pokazuje dobre rezultate, ovaj se algoritam ubraja u grupu veoma brzih algoritama.

Može se dokazati da algoritmi koji sortiraju niz permutovanjem elemenata niza (većina nabrojanih funkcioniše upravo ovako) ne mogu imati bolju složenost od O(n log n).

Svi algoritmi sortiranja u nastavku teksta će biti prikazani na standardnom primeru sortiranja niza celih brojeva u neopadajućem poretku. Pre opisa algoritama sortiranja navedimo funkciju koja proverava da li je niz već sortiran neopadajuće.

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

## Bubble sort

Bubble sort algoritam u svakom prolazu kroz niz poredi uzastopne elemente, i razmenjuje im mesta ukoliko su u pogrešnom poretku. Prolasci kroz niz se ponavljaju sve dok se ne napravi prolaz u kome nije bilo razmena, što znači da je niz sortiran.

**Primer.** Prikažimo rad algoritma na primeru sortiranja niza (6 1 4 3 9):

```
Prvi prolaz:
(6 1 4 3 9) → (1 6 4 3 9), razmena jer je 6 > 1
(1 6 4 3 9) → (1 4 6 3 9), razmena jer je 6 > 4
(1 4 6 3 9) → (1 4 3 6 9), razmena jer je 6 > 3
(1 4 3 6 9) → (1 4 3 6 9)

Drugi prolaz:
(1 4 3 6 9) → (1 4 3 6 9)
(1 4 3 6 9) → (1 3 4 6 9), razmena jer 4 > 3
(1 3 4 6 9) → (1 3 4 6 9)
(1 3 4 6 9) → (1 3 4 6 9)

Treći prolaz:
(1 3 4 6 9) → (1 3 4 6 9)
(1 3 4 6 9) → (1 3 4 6 9)
(1 3 4 6 9) → (1 3 4 6 9)
(1 3 4 6 9) → (1 3 4 6 9)
```

Primetimo da je niz bio sortiran već nakon drugog prolaza, međutim, da bi se to utvrdilo, potrebno je bilo napraviti još jedan prolaz.

Naredna funkcija bubble sort algoritmom sortira niz a, dužine n.

```c
void bubblesort(int a[], int n) {
  int bilo_razmena, i;
  do {
    bilo_razmena = 0;
    for (i = 0; i < n - 1; i++)
      if (a[i] > a[i + 1]) {
        razmeni(a, i, i+1);
        bilo_razmena = 1;
      }
  } while (bilo_razmena);
}
```

Uslov koji obezbeđuje parcijalnu korektnost je da ako `bilo_razmena` ima vrednost 0 pre provere uslova izlaska iz spoljašnje petlje, onda je niz a sortiran (tj. njegov početni deo dužine `n`). Zaista, kada se spoljašnja petlja završi, vrednost promenljive `bilo_razmena` je 0, te prethodna implikacija obezbeđuje korektnost. Invarijanta unutrašnje petlje koja obezbeđuje pomenuti uslov je da ako promenljiva `bilo_razmena` ima vrednost 0, onda je deo niza a[0, i] sortiran. Zaista, po završetku unutrašnje petlje i ima vrednost n-1, te je pomenuti uslov obezbeđen. Pošto je algoritam zasnovan na razmenama, invarijanta algoritma je i da se (multi)skup elemenata niza ne menja tokom njegovog izvršavanja.

Svojstvo algoritma koje obezbeđuje zaustavljanje je da nakon svake iteracije spoljašnje petlje sledeći najveći elemenat koji nije već bio na svojoj poziciji dolazi na nju. *Bubble sort* je na osnovu ovog svojstva i dobio ime (jer veliki elementi kao mehurići „isplivavaju“ ka kraju niza). Ovo sa jedne strane obezbeđuje zaustavljanje algoritma, dok se sa druge strane može iskoristiti za optimizaciju. Ovom optimizacijom se može smanjiti broj poređenja, ali ne i broj razmena.

```c
void bubblesort(int a[], int n) {
  do {
    int i;
    for (i = 0; i < n - 1; i++)
      if (a[i] > a[i + 1])
        razmeni(a, i, i+1);
    n--;
  } while (n > 1);
}
```

Isti algoritam, može biti implementiran i na stilski malo drugačiji način (koji se može ponekad sresti u literaturi).

```c
void bubblesort(int a[], int n) {
  int i, j;
  for (i = n - 1; i > 0; i--)
    for (j = 0; j < i; j++)
      if (a[j] > a[j + 1])
        razmeni(a, j, j+1);
}
```

Optimizacija može otići i korak dalje, ukoliko se dužina ne smanjuje samo za 1, već ukoliko se posmatra koliko je zaista elemenata na kraju niza već postavljeno na svoje mesto (ovo se može odrediti na osnovu mesta gde se dogodila poslednja zamena).

```c
void bubblesort(int a[], int n) {
  do {
    int nn = 1, i;
    for (i = 0; i < n - 1; i++)
      if (a[i] > a[i + 1]) {
        razmeni(a, i, i+1);
        nn = i + 1;
      }
    n = nn;
  } while (n > 1);
}
```

U ovom slučaju, uslov koji važi pre provere uslova spoljašnje petlje je da su elementi od pozicije `n-1` do kraja niza sortirani. Ovo obezbeđuje invarijanta unutrašnje petlje koja obezbeđuje da su svi elementi `a[nn-1, i]` sortirani.

Što se efikasnosti tiče, najgori slučaj nastupa kada su elementi početnog niza sortirani u opadajućem poretku. U tom slučaju vrši se `n` prolaska kroz niz, a u svakom prolasku se pravi `n` poređenja i `n` razmena, što ukupno daje O(n^2) poređenja i O(n^2) razmena. Primetimo da se optimizacijom broj poređenja smanjuje oko dva puta.

Bubble sort algoritam se smatra veoma lošim algoritmom. Neki autori čak zagovaraju tezu da bi ga trebalo potpuno izbaciti iz nastave računarstva. U šali se čak navodi kako bi jedini algoritam gori od njega bio algoritam koji permutuje niz na slučajan način sve dok slučajno ne postane sortiran.

## Selection sort

*Selection sort* je algoritam koji se može u jednoj rečenici opisati sa: „Ako niz ima više od jednog elementa, zameni početni element sa najmanjim elementom niza i zatim rekurzivno sortiraj rep (elemente iza početnog)“. U iterativnoj implementaciji, niz se sortira tako što se u svakoj iteraciji na svoju poziciju dovodi sledeći po veličini element niza, tj. u `i`-toj iteraciji se `i`-ti po veličini element dovodi na poziciju `i`. Ovo se može realizovati tako što se pronađe pozicija `m` najmanjeg elementa od pozicije `i` do kraja niza i zatim se razmene element na poziciji `i` i element na poziciji `m`. Algoritam se zaustavlja kada se pretposlednji po veličini element dovede na pretposlednju poziciju u nizu.

**Primer.** Prikažimo rad algoritma na primeru sortiranja niza (5 3 4 2 1).

```
(5 3 4 2 1), i = 0, m = 4, razmena elemenata 5 i 1
(1 3 4 2 5), i = 1, m = 3, razmena elemenata 3 i 2
(1 2 4 3 5), i = 2, m = 3, razmena elemenata 4 i 3
(1 2 3 4 5), i = 3, m = 3, razmena elemenata 4 i 4
(1 2 3 4.5)
```

Pozicija najmanjeg elementa u nizu `a`, dužine `n`, počevši od pozicije `i` se može naći narednom funkcijom.

```c
int poz_min(int a[], int n, int i) {
  int m = i, j;
  for (j = i + 1; j < n; j++)
    if (a[j] < a[m])
      m = j;
  return m;
}
```

U tom slučaju, selection sort algoritam izgleda ovako:

```c
void selectionsort(int a[], int n) {
  int i;
  for (i = 0; i < n - 1; i++)
    razmeni(a, i, poz_min(a, n, i));
}
```

Ukoliko se ne koriste pomoćna funkcije poz_min, algoritam se može implementirati na sledeći način:

```c
void selectionsort(int a[], int n) {
  int i;
  for (i = 0; i < n - 1; i++) {
    int m = i, j;
    for (j = i + 1; j < n; j++)
      if (a[j] < a[m])
        m = j;
    razmeni(a, i, m);
  }
}
```

Ponekad se sreće i naredna implementacija:

```c
void selectionsort(int a[], int n) {
int i, j;
for (i = 0; i < n; i++)
  for (j = i + 1; j < n; j++)
    if (a[i] < a[j])
      razmeni(a, i, j);
}
```

Napomenimo da je ova implementacija znatno neefikasnija od prethodne (iako je kôd kraći) jer se u najgorem slučaju osim O(n^2) poređenja vrši i O(n^2) razmena. Zbog toga bi, naravno, ovaj način implementacije algoritma trebalo izbegavati.

Rekruzivna implementacija je donekle jednostavnija u slučaju da se umesto dovođenja najmanjeg elementa  na početak vrši dovođenje najvećeg elementa na kraj.

```c
int poz_max(int a[], int n) {
  if (n == 1)
    return 0;
  else {
    int m = poz_max(a, n-1);
    return a[m] > a[n-1] ? m : n-1;
  }
}

void selectionsort(int a[], int n) {
  if (n > 1) {
    razmeni(a, n-1, poz_max(a, n));
    selectionsort(a, n-1);
  }
}
```

Naravno, moguća je i originalna varijanta, uz slanje dodatnog indeksa kroz rekurzivne pozive.

```c
int poz_min(int a[], int n, int i) {
  if (i == n-1)
    return n-1;
  else {
    int m = poz_min(a, n, i+1);
    return a[m] < a[i] ? m : i;
  }
}

void selectionsort(int a[], int n, int i) {
  if (i < n - 1) {
    razmeni(a, i, poz_min(a, n, i));
    selectionsort(a, n, i+1);
  }
}
```

Početni poziv je u tom slučaju `selectionsort(a, n, 0)`.

Naglasimo da se korišćenjem naprednijih struktura podataka, ideje selection sort algoritma mogu iskoristiti da se dobije algoritam složenosti O(n log n) (tzv. *heap sort* algoritam koji koristi strukturu podataka poznatu kao *heap*).

## Insertion sort

*Insertion sort* algoritam sortira niz tako što jedan po jedan element niza umeće na odgovarajuće mesto u do tada sortirani deo niza. Koncepcijski, postoje dva niza — polazni niz iz kojeg se uklanjaju elementi i niz koji čuva rezultat i u koji se dodaju elementi. Međutim, obično implementacije koriste memorijski prostor polaznog niza za obe uloge — početni deo niza predstavlja rezultujući niz, dok krajnji deo predstavlja preostali deo polaznog niza.

Dakle, insertion sort se može formulisati na sledeći način: „Ako niz ima više od jednog elementa, sortiraj rekurzivno sve elemente ispred poslednjeg, a zatim umetni poslednji u već sortirani prefiks.“ Ovim se dobija sledeća (rekurzivna) implementacija.

```c
void insertionsort(int a[], int n) {
  if (n > 1) {
    insertionsort(a, n-1);
    umetni(a, n-1);
  }
}
```

Kada se eliminiše rekurzija, dolazi se do sledeće iterativne implementacije.

```c
void insertionsort(int a[], int n) {
  int i;
  for (i = 1; i < n; i++)
    umetni(a, i);
}
```

Invarijanta petlje je da je deo niza `a[0, i-1]` sortiran, kao i da se (multi)skup elemenata u nizu a ne menja. Kako bi se obezbedila korektnost, preduslov funkcije umetni je da je sortiran deo niza `a[0, i-1]`, dok ona treba da obezbedi postuslov da je sortiran deo niza `a[0, i]`.

Funkcija `umetni` može biti implementirana na različite načine. Jedna od mogućnosti je da se element menja sa svojim prethodnikom sve dok je prethodnik veći od njega.

```c
void umetni(int a[], int i) {
  int j;
  for(j = i; j > 0 && a[j] < a[j-1]; j--)
    razmeni(a, j, j-1);
}
```

Prikažimo još i odgovarajuću rekurzivnu implementaciju.

```c
void umetni(int a[], int j) {
  if (j > 0 && a[j] < a[j-1]) {
    razmeni(a, j, j-1);
    umetni(a, j-1);
  }
}
```

Funkcija `umetni` se poziva n−1 put i to za vrednosti `i` od 1 do `n`, dok u najgorem slučaju (obrnuto sortiranog niza) ona izvršava `i` razmena i `i` poređenja. Zbog toga je ukupan broj razmena, kao i broj poređenja O(n^2).

Efikasnija implementacija se može dobiti ukoliko se ne koriste razmene, već se element koji nije na svom mestu zapamti, zatim se pronađe pozicija na koju treba da se umetne, svi elementi od te pozicije se pomere za jedno mesto u desno da bi se na kraju zapamćeni element upisao na svoje mesto.

```c
void umetni(int a[], int i) {
  int j, tmp = a[i];
  for (j = i; j > 0 && a[j-1] > tmp; j--)
      a[j] = a[j-1];
  a[j] = tmp;
}
```

S obzirom da se prilikom razmena koriste tri dodele, ovim se broj dodela smanjuje 3 puta (broj poređenja ostaje nepromenjen).

Prikažimo i verziju `insertionsort` funkcije u kojoj je kôd pomoćne funkcije integrisan.

```c
void insertionsort(int a[], int n) {
  int i;
  for (i = 1; i < n; i++) {
    int j, tmp = a[i];
    for (j = i; j > 0 && a[j-1] > tmp; j--)
        a[j] = a[j-1];
    a[j] = tmp;
  }
}
```

Broj poređenja se može smanjiti ukoliko se za pronalaženje ispravne pozicije elementa u sortiranom prefiksu umesto linearne pretrage koristi binarna. Međutim, broj dodela nije moguće smanjiti te se ukupno vreme neće značajno smanjiti. Zbog toga, nećemo prikazati implementaciju ovakvog rešenja.

Naglasimo da se korišćenjem naprednijih struktura podataka, ideje *insertion sort* algoritma mogu iskoristiti da se dobije algoritam složenosti O(n log n) (tzv. *tree sort* algoritam koji koristi binarna stabla).

## Shell sort

Najveći uzrok neefikasnosti kod *insertion sort* algoritma je slučaj malih elemenata koji se nalaze blizu kraja niza. Pošto se nalaze blizu kraja, oni se umeću u relativno dugačak niz, a pošto su mali umeću se na početak te je potrebno izvršiti pomeranje velikog broja elemenata kako bi se oni postavili na svoje mesto. *Shell sort* popravlja ovo. Osnovni cilj je da se „skrati put“ ovakvih elemenata. *Shell sort* koristi činjenicu da *insertion sort* funkcioniše odlično kod nizova koji su „skoro sortirani“. Algoritam radi tako što se niz deli na veći broj kratkih kolona koje se sortiraju primenom insertion sort algoritma, čime se omogućava direktna razmena udaljenih elemenata. Broj kolona se zatim smanjuje, sve dok se na kraju insertion sort ne primeni na ceo niz. Međutim, do tada su „pripremni koraci“ deljenja na kolone doveli niz u „skoro sortirano“ stanje te se završni korak prilično brzo odvija.

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

## Merge sort

Dva već sortirana niza se mogu objediniti u treći sortirani niz samo jednim prolaskom kroz nizove (tj. u linearnom vremenu O(m + n) gde su `m` i `n` dimenzije polaznih nizova).

```c
void merge(int a[], int m, int b[], int n, int c[]) {
  int i, j, k;
  i = 0, j = 0, k = 0;
  while (i < m && j < n)
    c[k++] = a[i] < b[j] ? a[i++] : b[j++];
  while(i < m) c[k++] = a[i++];
  while(j < n) c[k++] = b[j++];
}
```

U prikaznoj implementaciji, paralelno se prolazi kroz nizove a dimenzije m i b dimenzije n. Promenljiva i čuva tekuću pozicija u nizu a, dok promenljiva j čuva tekuću poziciju u nizu b. Tekući elementi se porede i manji se upisuje u niz c (na tekuću poziciju k), pri čemu se napreduje samo u nizu iz kojeg je taj manji element uzet. Postupak se nastavlja dok se ne stigne do kraja jednog od nizova. Kada se kraći niz isprazni, eventualni preostali elementi iz dužeg niza se nadovezuju na kraj niza c.

*Merge sort* algoritam deli niz na dve polovine (čija se dužina razlikuje najviše za 1), rekurzivno sortira svaku od njih, i zatim objedinjuje sortirane polovine. Problematično je što je za objedinjavanje neophodno koristiti dodatni, pomoćni niz. Na kraju se izvršava vraćanje objedinjenog niza iz pomoćnog u polazni. Izlaz iz rekurzije je slučaj jednočlanog niza (slučaj praznog niza ne može da nastupi).

Funkicija `mergesort_` sortira deo niza `a[l, d]`, uz korišćenje niza `tmp` kao pomoćnog.

```c
void mergesort_(int a[], int l, int d, int tmp[]) {
  if (l < d) {
    int i, j;
    int n = d - l + 1, s = l + n/2;
    int n1 = n/2, n2 = n - n/2;

    mergesort_(a, l, s-1, tmp);
    mergesort_(a, s, d, tmp);
    merge(a + l, n1, a + s, n2, tmp);

    for (i = l, j = 0; i <= d; i++, j++)
      a[i] = tmp[j];
  }
}
```

Promenljiva `n` čuva broj elemenata koji se sortiraju u okviru ovog rekurzivnog poziva, a promenljiva `s` čuva središnji indeks u nizu između `l` i `d`. Rekurzivno se sortira `n1 = n/2` elemenata između pozicija `l` i `s-1` i `n2 = n - n/2` elemenata između pozicija `s` i `d`. Nakon toga, sortirani podnizovi se objedinjuju u pomoćni niz `tmp`. Primetimo na ovom mestu korišćenje pokazivačke aritmetike. Adresa početka prvog sortiranog podniza koji se objedinjava je `a+l`, dok je adresa početka drugog `a + s`.

Pomoćni niz se može pre početka sortiranja dinamički alocirati i koristiti kroz rekurzivne pozive.

```c
void mergesort(int a[], int n) {
  int* tmp = (int*)malloc(n*sizeof(int));
  if (tmp == NULL) {
    printf("Nedovoljno memorije.\n");
    return;
  }
  mergesort_(a, 0, n-1, tmp);
  free(tmp);
}
```

Provera da li je alokacija nije uspela ovaj put nije vršena.

Rekurentna jednačina koja opisuje složenost je T (n) = 2 · T (n/2) + O(n) te je složenost O(n log n).

## Quick sort

Osnovna ideja kod *selection sort* algoritma je da se jedan element postavi na svoje mesto, a zatim da se isti metod rekurzivno primeni na niz koji je za jedan kraći od polaznog. S obzirom da je pripremna akcija zahtevala O(n) operacija, dobijena je jednačina `T (n) = T (n − 1) + O(n)`, čije rešenje je `O(n^2)`. Sa druge strane, kod *merge sort* algoritma sortiranje se svodi na sortiranje dva podniza polaznog niza dvostruko manje dimenzije. S obzirom da korak objedinjavanja dva sortirana niza zahteva O(n) operacija, dobija se jednačina `T (n) = 2T (n/2) + O(n)`, čije je rešenje O(n log n).

Dakle, značajno je efikasnije da se problem dimenzije `n` svodi na dva problema dimenzije `n/2` nego na jedan problem dimenzije `n-1` — ovo je osnovna ideja tzv. podeli i vladaj algoritama u koje spada i *quick sort*.

`Quick sort` algoritam pokušava da postigne bolju efikasnost, modifikujući osnovnu ideju *selection sort* algoritma tako što umesto minimuma (ili maksimuma), u svakom koraku na svoje mesto dovede neki element (obično nazivan **pivot**) koji je relativno blizu sredine niza. Međutim, da bi nakon toga, problem mogao biti sveden na sortiranje dva dvostruko manja podniza, potrebno je prilikom dovođenja pivota na svoje mesto grupisati sve elemente manje od njega levo od njega, a sve elemente veće od njega desno od njega. Dakle, ključni korak *quick sort* algoritma je tzv. korak particionisanja koji nakon izbora nekog pivotirajućeg elementa podrazumeva da se niz organizuje da prvo sadrži elemente manje od pivota, zatim pivotirajući element, i na kraju elemente veće od pivota.

`Quick sort` algoritam može se implementirati na sledeći način. Poziv `qsort_(a, l, d)` sortira deo niza `a[l, d]`.

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

Funkcija `izbor_pivota` odabire za pivot neki element niza `a[l, d]` i vraća njegov indeks (u nizu a). Pozivom funkcije razmeni pivot se postavlja na poziciju `l`. Funkcija particionisanje vrši particionisanje niza (pretpostavljajući da se pre particionisanja pivot nalazi na poziciji `l`) i vraća poziciju na kojoj se nalazi pivot nakon particionisanja. Funkcija se poziva samo za nizove koji imaju više od jednog elementa te joj je preduslov da je `l` manje ili jednako `d`. Postuslov funkcije particionisanje je da je (multi)skup elemenata niza a nepromenjen nakon njenog poziva, međutim njihov redosled je takav da su svi elementi niza `a[l, p-1]` manji ili jednaki elementu `a[p]`, dok su svi elementi niza `a[p+1, d]` veći ili jednaki od elementa `a[p]`.

Napomenimo da je *quick sort* algoritam koji u praksi daje najbolje rezultate kod sortiranja dugačkih nizova. Međutim, važno je napomenuti da za sortiranje kraćih nizova naivni algoritmi (npr. *insertion sort*) mogu da se pokažu praktičnijim. Većina realnih implementacija *quick sort* algoritma koristi hibridni pristup — izlaz iz rekurzije se vrši kod nizova koji imaju nekoliko desetina elemenata i na njih se primenjuje *insertion sort*.

Implementacije particionisanja. Jedna od mogućih implementacija koraka particionisanja je sledeća:

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

Invarijanta petlje je da je (multi)skup elemenata u nizu a nepromenjen, kao i da se u nizu a na poziciji `l` nalazi pivot, da su elementi `a[l+1, p]` manji od pivota, dok su elementi `a[p+1, j-1]` su veći ili jednaki od pivota. Nakon završetka petlje, `j` ima vrednost `d+1`, te su elementi `a[p+1, d]` veći ili jednaki od pivota. Kako bi se ostvario postuslov funkcije particionisanje vrši se još razmena pivota i elementa na poziciji `p` — time pivot dolazi na svoje mesto (na poziciju `p`).

Drugi način implementacije particionisanja je zasnovan na Dijkstrinom algoritmu „trobojke“ (*Dutch National Flag Problem*). U ovom slučaju, radi se malo više od onoga što postuslov striktno zahteva — niz se permutuje tako da prvo idu svi elementi striktno manji od pivota, zatim sva pojavljivanja pivota i na kraju svi elementi striktno veći od pivota.

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

Invarijanta petlje je da se (multi)skup elemenata niza ne menja, da su svi elementi niza `a[l, pn]` manji od pivota, da su svi elementi niza `a[pn+1, t-1]` jednaki pivotu, i da su svi elementi niza `a[pp, d]` veći od pivota. Kada se petlja završi važi da je t jednako pp tako da su svi elementi niza `a[l, pn]` manji od pivota, niza `a[pn+1, pp-1]` jednaki pivotu, a niza `a[pp, d]` veći od pivota.

Treći mogući način implementacije koraka particionisanja je da se obilazi paralelno sa dva kraja i kada se na levom kraju nađe element koji je veći od pivota, a na desnoj neki koji je manji od pivota, da se izvrši njihova razmena.

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

Invarijanta spoljašnje petlje je da je `l` manje ili jednako `d`, da je (multi)skup elemenata niza a nepromenjen (što je očigledno jer algoritam zasniva isključivo na razmenama), da se na poziciji `l0` nalazi pivot i da su elementi `a[l0, l-1]` manji od pivota (gde je `l0` početna vrednost promenljive `l`), a elementi `a[d+1, d0]` (gde je `d0` početna vrednost promenljive `d`) veći ili jednaki od pivota. Po završetku petlje je `l` jednako `d`. Element na toj poziciji još nije ispitan i njegovim ispitivanjem se osigurava da `l` bude takav da su elementi `a[l0, l]` manji ili jednak od pivota, a elementi niza `a[l+1, d0]` veći ili jednaki od pivota. Odavde, nakon zamene pozicija `l0` i `l` postiže se postuslov particionisanja.

S obzirom da se u svakom koraku petlji smanjuje pozitivna celobrojna vrednost `d - l`, a sve petlje se zaustavljaju u slučaju kada je `d - l` nula zaustavljanje sledi.

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

Invarijanta spoljašnje petlje je da je `l` manje ili jednako `d`, da je (multi)skup elemenata niza a van pozicije `l` jednak (multi)skupu elemenata polaznog niza bez jednog pojavljivanja pivota, da su elementi `a[l0, l-1]` manji od pivota (gde je `l0` početna vrednost promenljive `l`), a elementi `a[d+1, d0]` (gde je `d0` početna vrednost promenljive `d`) veći ili jednaki od pivota. Na sredini spoljne petlje, invarijanta se donekle naruši — svi uslovi ostaju da važe, osim što je (multi)skup elemenata `a` van pozicije `d` (umesto van pozicije `l`) jednak (multi) skupu elemenata polaznog niza bez jednog pojavljivanja pivota. Kada se petlja završi, `l` je jednako `d` i upisivanjem (sačuvane) vrednosti pivota na ovo mesto se postiže postuslov funkcije particionisanja. Zaustavljanje je analogno prethodnom slučaju.

**Izbor pivota.** Kao što je već rečeno, iako je poželjno da se pivot izabere tako da podeli niz na dve potpuno jednake polovine, to bi trajalo previše tako da se obično pribegava heurističkim rešenjima. Ukoliko se može pretpostaviti da su elementi niza slučajno raspoređeni (što se uvek može postići ukoliko se pre primene sortiranja niz permutuje na slučajan način), bilo koji element niza se može uzeti za pivot. Na primer,

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


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
