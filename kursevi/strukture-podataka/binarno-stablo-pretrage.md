---
title: Binarno stablo pretrage
layout: lekcija-strukture
permalink: /binarno-stablo-pretrage
author: damjan
image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/400px-Binary_search_tree.svg.png
---

![Binarno stablo pretrage]({{page.image}})

**Binarno stablo pretrage (en. *binary search tree*) je jedna od najvažnijih struktura podataka u računarstvu.** To je uređeno binarno stablo za koje važi da su vrednosti svih elemenata u levom podstablu manje od vrednosti čvora, a svih elemenata u desnom podstablu veće.

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

Da bismo implementirali binarno stablo koje se sastoji od više čvorova, potrebno je prvo napraviti jedan čvor. 

### Čvor

U Javascriptu klasu čvor možemo implementirati na sledeći način:

```js
class Cvor {
  constructor(vrednost) {
    this.vrednost = vrednost
    this.levo = null
    this.desno = null
  }
}
```

Ovom klasom opisan je jedan čvor koji sadrži sopstvenu vrednost i pokazivače na levo i desno podstablo. Sada, na primer, možemo instancirati čvor i dodeliti mu vrednost:

```js
const cvor = new Cvor(5)
```

Jedan čvor još uvek nije stablo, ali ako napravimo tri čvora i povežemo ih, na pravom smo putu:

{:.ulaz}
```js
class Cvor {
  constructor(vrednost) {
    this.vrednost = vrednost
    this.levo = null
    this.desno = null
  }
}

const koren = new Cvor(5)
koren.levo = new Cvor(3)
koren.desno = new Cvor(7)

console.log(JSON.stringify(koren, null, 4))
```

Primetite da smo manju vrednost dodali sa leve, a veću sa desne strane. Sada otprilike imamo ovakvu strukturu:

```
             5
           /   \
          3     7
```

### Stablo

Sada napravimo još jednu klasu, `Stablo`, koja će voditi računa o kreiranju čvorova i dodavanju na pravo mesto. Za sada, neka samo napravi jedan čvor i postavi ga za svoj koren:

{:.ulaz}
```js
class Cvor {
  constructor(vrednost) {
    this.vrednost = vrednost
    this.levo = null
    this.desno = null
  }
}

class Stablo {
  constructor(vrednost) {
    this.koren = new Cvor(vrednost)
  }
}

const stablo = new Stablo(5)

console.log(JSON.stringify(stablo, null, 4))
```

### Dodavanje elementa

Da ne bismo ručno dodavali čvorove, potrebno je implementirati metodu koja to radi:

```js
  dodaj(vrednost, cvor = this.koren) {
    if (vrednost === cvor.vrednost) return
    const strana = vrednost > cvor.vrednost ? 'desno' : 'levo'
    if (!cvor[strana]) cvor[strana] = new Cvor(vrednost)
    else this.dodaj(vrednost, cvor[strana])
  }
```

Ubacivanje elementa implementirano je korišćenjem rekurzije. Rekurzija se ponavlja dok se nova vrednost ne ubaci kao čvor na odgovarajuće mesto u binarnom stablu.

{:.uokvireno}
**Tumačenje**: Metoda prima dva argumena, `vrednost` i `cvor`. Vrednost je broj koji dodajemo, a `cvor` element sa čije leve ili desne strane kačimo novi čvor (podrazumevani argument je `this.koren`). Na početku imamo rani `return` ako je vrednost jednaka vrednosti cvora (mora biti manja ili veća). Nakon toga odlučujemo na koju stranu dodati novu vrednost, poredeći je sa vrednošću čvora. Potom proveravamo da li je željena strana čvora prazna. Ako jeste, dodajemo novi čvor na tu stranu i završili smo. Ako nije, [rekurzivno](/rekurzija) pozivamo metodu sa jednim nivom niže (npr. proveravali smo `koren`, sad proveravamo `koren.levo`).

### Ispis elemenata

Sledeća metoda ispisuje vrednosti čvorova, redom po veličini. Prvo rekurzivno ispiše levo podstablo (elementi manji od korena), zatim koren, a zatim desno (elementi veći od korena):

```js
 ispisi(koren = this.koren) {
    if (!koren) return
    this.ispisi(koren.levo)
    console.log(koren.vrednost)
    this.ispisi(koren.desno)
  }
```

## Primer u Javascriptu

Binarno stablo pretraživanja smo implementirali u Javascriptu na sledeći način:

{:.ulaz}
```js
class Cvor {
  constructor(vrednost) {
    this.vrednost = vrednost
    this.levo = null
    this.desno = null
  }
}

class Stablo {
  constructor(vrednost) {
    this.koren = new Cvor(vrednost)
  }

  dodaj(vrednost, cvor = this.koren) {
    if (vrednost === cvor.vrednost) return
    const strana = vrednost > cvor.vrednost ? 'desno' : 'levo'
    if (!cvor[strana]) cvor[strana] = new Cvor(vrednost)
    else this.dodaj(vrednost, cvor[strana])
  }

  ispisi(cvor = this.koren) {
    if (!cvor) return
    this.ispisi(cvor.levo)
    console.log(cvor.vrednost)
    this.ispisi(cvor.desno)
  }
}

const stablo = new Stablo(5)
stablo.dodaj(3)
stablo.dodaj(7)
stablo.dodaj(4)
stablo.dodaj(2)

stablo.ispisi()
```

Stablo koje smo napravili ima sledeću strukturu:

```
        5
       / \
      3   7
     / \
    2   4
```

## Primer u C/C++

Binarno stablo traženja možemo implementirati u C/C++ na sledeći način:

{:.ulaz}
```cpp
#include<stdio.h>
#include<stdlib.h>
  
struct Cvor
{
    int podatak;
    struct Cvor *levi, *desni;
};
  
Cvor *noviCvor(int item)
{
    Cvor *novi =  (Cvor *)malloc(sizeof(Cvor));
    novi->podatak = item;
    novi->levi = novi->desni = NULL;
    return novi;
}

void ispisi(Cvor *koren)
{
    if (koren != NULL)
    {
        ispisi(koren->levi);
        printf("%d \n", koren->podatak);
        ispisi(koren->desni);
    }
}

Cvor* ubaciCvor(Cvor* koren, int podatak)
{
    /* ako je stablo prazno, vraca novi koren */
    if (koren == NULL) return noviCvor(podatak);
 
    /* inace, rekurise niz stablo */
    if (podatak < koren->podatak)
        koren->levi  = ubaciCvor(koren->levi, podatak);
    else if (podatak > koren->podatak)
        koren->desni = ubaciCvor(koren->desni, podatak);   
 
    /* vraca (nepromenjen) koren pokazivac */
    return koren;
}


int main()
{
    /* pravimo sledece stablo:
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80 */
    Cvor *koren = NULL;
    koren = ubaciCvor(koren, 50);
    ubaciCvor(koren, 30);
    ubaciCvor(koren, 20);
    ubaciCvor(koren, 40);
    ubaciCvor(koren, 70);
    ubaciCvor(koren, 60);
    ubaciCvor(koren, 80);
  
    ispisi(koren);
  
    return 0;
}
```

## Literatura

- *Uvod u programiranje - Računarski fakultet*, [Struktura podataka binarno stablo](https://petlja.org/BubbleBee/r/lekcije/uvod-u-programiranje/nedelja_12)
- GeeksForGeeks, [Binary Search Tree (Search and Insertion)](https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/)
