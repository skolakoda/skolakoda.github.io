---
title: Ređanje umetanjem (<i>insertion sort</i>)
layout: lekcija-algoritmi
permalink: /redjanje-umetanjem
---

![](https://upload.wikimedia.org/wikipedia/commons/2/25/Insertion_sort_animation.gif)

**Sortiranje umetanjem je algoritam koji sortira niz tako što jedan po jedan element niza umeće na odgovarajuće mesto, u do tada sortirani deo niza.**

Koncepcijski, postoje dva niza, polazni niz iz kojeg se uklanjaju elementi, i niz u koji se dodaju elementi. Međutim, obično implementacije koriste memorijski prostor polaznog niza za obe uloge — početni deo niza predstavlja rezultujući niz, dok krajnji deo predstavlja preostali deo polaznog niza.

## Primer iz stvarnog života

Ređanje karata ili sličica po brojevima:

1. **Uzmi prvu kartu**: Ona je već “složena” i postaje osnov za slaganje ostalih.
2. **Stavi drugu kartu**: Uzmi drugu kartu i stavi je levo od prve ako je manja, desno ako je veća.
3. **Nastavi sa ostalim kartama**: Svaku sledeću kartu ubaci na pravo mesto među kartama koje držiš složene.

Postupak ponavljaš sve dok sve karte ne budu složene od najmanje do najveće.

## Implementacija

Dakle, *insertion sort* se može formulisati na sledeći način: „Ako niz ima više od jednog elementa, sortiraj rekurzivno sve elemente ispred poslednjeg, a zatim umetni poslednji u već sortirani prefiks.“ Ovim se dobija sledeća (rekurzivna) implementacija.

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


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
