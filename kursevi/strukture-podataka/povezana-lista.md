---
title: Povezana lista
layout: lekcija-strukture
permalink: /povezana-lista
image: /images/koncepti/podaci/povezana-lista.jpg
---

![]({{page.image}})

**Lista ili vezana lista (en. *linked list*) je linearna struktura podataka u kojoj je redoslijed elemenata određen pokazivačima.**

Svaki element sadrži podatak i pokazivač na sledeći element. Poseban značaj ima pokazivač na prvi element liste, koji se često zove glava liste. Poslednji element sadrži tzv. `NULL` pokazivač koji označava kraj liste.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/640px-Singly-linked-list.svg.png)

## Razlika liste i niza

Za razliku od niza ili polja (*array*), svaki element liste sadrži pokazivač na slijedeći element. Pošto pokazivač sadrži adresu slijedećeg elementa, sukcesivni elementi ne moraju biti spremljeni u sukcesivnim memorijskim lokacijama. Fizički redoslijed memorijskih lokacija nema nikakav utjecaj na redoslijed elemenata u listi. Za razliku od niza, vrlo jednostavno je dodavanje i brisanje elemenata iz liste.

## Algoritam obilaska

Algoritam prolaska svih elemenata povezane liste (eng. *traversing*):

1. Postavi pokazivač na početak
2. Ponavljaj korake 3 i 4 dok je pokazivač različit od “null”
3. Pristupi elementu liste i izvrši željenu obradu
4. Postavi pokazivač na slijedeći element

## Dodavanje elemenata

![](/images/koncepti/podaci/dodavanje-u-listu.png)

Na slici je shematski dodavanje elementa u listu. Prije dodavanja novog elementa čvor A pokazuje na čvor B. Nakon umetanja novog čvora između A i B, čvor A pokazuje na novi čvor N, a čvor N pokazuje na čvor B.

Na sličan način, mijenjanjem lokacije na koju pokazuje pokazivač uklanja se element iz povezane liste.

## Implementacija u C

Povezana lista celih brojeva u C implementira se preko strukture na sledeći način:

```c
typedef struct Element {
    int podatak;
    struct Element *sledeci;
} Element;
```

Nakon toga kreiramo glavu liste:

```c
Element *glava= NULL;
```

Ovom naredbom kreira se prazna lista, tako što navedemo da je glava liste NULL pokazivač. Elementi liste mogu da sadrže i više podataka različitog tipa. Na primer možemo napraviti listu koja sadrži podatke o studentima i ima ime, prezime i broj poena studenta. Ovakva lista implementirala bi se sledećom strukturom:

```c
typedef struct ElementStudent{
    char *ime;
    char *prezime;
    float *brojPoena;
    struct ElementStudent *sledeci;
} ElementStudent;
```

Ono što je zajedničko za sve povezane liste je da elementi moraju imati pokazivač na sledeći element. Mogu se implementirati mnoge operacije nad listom, kao što su dodavanje elementa, izbacivanje elementa i obilazak liste radi ispisa elemenata, prebrojavanja elemenata ili pronalaska određenog elementa u listi.

Funkcije za rad sa listama koje menjaju sadržaj liste imaju kao ulazni podatak listu, koja je predstavljena kao pokazivač na prvi element liste, a kao rezultat vraćaju pokazivač na prvi element izmenjene liste. Drugi način je da se lista prosledi po referenci, a ne po vrednosti, i onda nemamo povratnu vrednost iz funkcije.

### Dodavanje elemenata

Kod funkcije za dodavanje elementa jedan argument je lista, a drugi element koji se dodaje koji može biti već kreiran i alociran element liste ili samo podatak. Ako prosleđujemo samo podatak potrebno je u funkciji alocirati memoriju za novi element liste. Sledi funkcija za dodavanje elementa na početak liste celih brojeva:

```c
Element* dodajNaPocetak(Element *glava, int broj){
    Element *novi = (Element*)malloc(sizeof(Element));
    novi->podatak = broj;
    novi->sledeci = glava;
    glava = novi;
    return glava;
}
```

Pošto se u ovoj funkciji prosleđuje samo podatak, prilikom dodavanja novog elementa u funkciji potrebno je alocirati memorijski prostor za novi element, u ovom primeru koristi se funkcija `malloc`. Zatim se tom elementu dodeljuju vrednosti, prosleđeni parametar kao podatak, a pokazivač na sledeći element je u stvari pokazivač na početak liste. Ostaje još da se pokazivač na glavu liste prebaci na novi element (jer dodajemo na početak) i da se tako dobijena nova lista vrati kao rezultat funkcije. 

### Štampanje liste

Štampanje liste podrazumeva obilazak svakog elementa liste i ispis podatka za svaki element:

```c
void stampaj(Element *glava){
    Element *tekuci = glava;
    while (tekuci != NULL){
        printf("%d, ", tekuci->podatak);
        tekuci = tekuci->sledeci;
    }
}
```

Većina operacija sa listama se može implementirati i rekurzivno. Bazni slučaj za izlazak iz rekurzije je prazna lista, a rekurzivni korak je prelazak na sledeći element. Funkcija za štampanje se rekurzivno može implementirati na sledeći način:

```c
void stampajRek(Element *glava){
    if (glava == NULL)
        return;
    else {
        printf("%d ", glava->podatak);
        stampajRek(glava->sledeci);
    }
}
```

### Literatura

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- *Uvod u programiranje - Računarski fakultet*, [Dinamičke strukture podataka](https://petlja.org/BubbleBee/r/lekcije/uvod-u-programiranje/nedelja_11)
