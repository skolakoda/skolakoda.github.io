---
title: Binarno stablo pretrage
layout: lekcija-algoritmi
permalink: /binarno-stablo-pretrage
image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/400px-Binary_search_tree.svg.png
---

![Binarno stablo pretrage]({{page.image}})

**Binarno stablo pretrage (en. *binary search tree*) je jedna od najvažnijih struktura podataka u računarstvu.** To je uređeno binarno stablo za koje važi da su vrednosti svih elemenata u levom podstablu manje od vrednosti čvora, a svih elemenata u desnom podstablu veće od vrednosti čvora.

Ovakva struktura podataka ima veliku primenu u računarstvu jer se u njoj brže pronalaze podaci nego u listi ili u nizu.

## Operacije

![](https://upload.wikimedia.org/wikipedia/commons/9/9b/Binary_search_tree_example.gif)

Najčešće operacije nad uređenim binarnim stablom su:

- dodavanje elemenata na odgovarajuće mesto
- pronalazak elementa
- ispis elemenata
- brisanje pojedinačnog elemenata
- brisanje stabla i oslobađanje memorijskih resursa

Većina ovih operacija implementira se korišćenjem rekurzije.

## Implementacija

U C-u se uređeno binarno stablo može implementirati korićenjem strukture i pokazivača na sledeći način:

```c
typedef struct Cvor {
  int podatak;
  Cvor *levi, *desni;
} Cvor;
```

Ovom strukturom opisan je jedan čvor u binarnom stablu, koji sadrži podatak i pokazivače na levo i desno podstablo. Binarno stablo se deklariše kao pokazivač na koren:

```c
Cvor *koren = NULL;  // kreiranje praznog binarnog stabla
```

### Dodavanje elementa

Sledeća funkcija ubacuje novi element u binarno stablo. Argumenti su pokazivač na koren stabla u koji se ubacuje element i element koji se ubacuje, a povratna vrednost je pokazivač na koren izmenjenog stabla:

```c
Cvor* ubaciCvor(Cvor *koren, int podatak) {
    if (koren == NULL) {
        Cvor *novi = (Cvor *) malloc(sizeof(Cvor));
        novi->podatak = podatak;
        novi->levi = NULL;
        novi->desni = NULL;
        return novi;
    } else {
        if (podatak < koren->podatak) {
            koren->levi = ubaciCvor(koren->levi, podatak);
        } else {
            koren->desni = ubaciCvor(koren->desni, podatak);
        }
        return koren;
    }
}
```

Ubacivanje elementa implementirano je korišćenjem rekurzije. Slučaj za izlaz iz rekurzije je kada imamo prazno stablo u koje dodajemo element (koren==NULL). Tada kreiramo novi čvor kome će levo i desno podstablo biti prazna stabla, a podatak jednak argumentu funkcije. Ukoliko stablo nije prazno potrebno je da pronađemo mesto za novi element. Ako je podatak manji od vrednosti korena, novi čvor se ubacuje u levo podstablo (inače u desno), tako što se za vrednost podstabla postavlja vrednost koje se dobija rekurzivnim pozivom funkcije `ubaciCvor` za odgovarajuće podstablo. Rekurzija se ponavlja dok se novi podatak ne ubaci kao list na odgovarajuće mesto u binarnom stablu.

### Ispis elemenata

Sledeća funkcija ispisuje elemente binarnog stabla, redom po veličini. Prvo se rekurzivno ispiše levo podstablo (elementni manji od korena), zatim koren, a zatim rekurzivno desno podstablo (elementi veći od korena).

```c
void ispisi(Cvor *koren) {
    if (koren != NULL) {
        ispisi(koren->levi);
        printf("%d\n", koren->podatak);
        ispisi(koren->desni);
    }
}
```

Izvor: *Uvod u programiranje - Računarski fakultet*, [Struktura podataka binarno stablo](https://petlja.org/BubbleBee/r/lekcije/uvod-u-programiranje/nedelja_12)
