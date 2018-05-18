---
title: Dinamička alokacija memorije
layout: lekcija-c
permalink: /dinamicka-alokacija-memorije
---

**U većini realnih aplikacija, u trenutku pisanja nije moguće precizno predvideti memorijske zahteve programa.** Naime, memorijski zahtevi zavise od interakcije sa korisnikom i tek u fazi izvršavanja programa korisnik svojim akcijama određuje potrebne memorijske zahteve (na primer, koliko elemenata nekog niza će biti korišćeno). U nekim slučajevima, moguće je predvideti neko gornje ograničenje, ali ni to nije uvek zadovoljavajuće. Ukoliko je ograničenje premalo, program nije u stanju da obraduje veće ulaze, a ukoliko je preveliko, program zauzima više memorije nego što mu je potrebno.

Rešenje ovih problema je **dinamička alokacija memorije** koja omogućava da program u toku rada zahteva od operativnog sistema odredenu količinu memorije. Kada dinamički alocirana memorija više nije potrebna, program treba da je oslobodi i vrati operativnom sistemu na upravljanje. Alociranje i oslobađanje vrši se funkcijama iz standardne biblioteke i pozivima runtime biblioteke. U fazi izvršavanja, vodi se evidencija i o rasploživim i zauzetim blokovima memorije.

## Funkcije za rad sa dinamičkom memorijom

Standardna biblioteka jezika C podržava dinamičko upravljanje memorijom kroz nekoliko funkcija (sve su deklarisane u zaglavlju `<stdlib.h>`). Prostor za dinamički alociranu memoriju nalazi se u segmentu memorije koji se zove hip (engl. *heap*).

### `malloc`

Funkcija `malloc` ima sledeći prototip:

```c
void *malloc(size_t n);
```

**Ona alocira blok memorije (niz uzastopnih bajtova) veličine n bajtova i vraća adresu alociranog bloka u vidu generičkog pokazivača (tipa `void*`).** U slučaju da zahtev za memorijom nije moguće ispuniti (na primer, zahteva se više memorije nego što je na raspolaganju), ova funkcija vraća `NULL`. Memorija na koju funkcija `malloc` vrati pokazivač nije inicijalizovana i njen sadržaj je, u principu, nedefinisan (tj. zavisi od podataka koji su ranije bili čuvani u tom delu memorije).

Funkcija `malloc` očekuje argument tipa `size_t`. Ovo je celobrojni tip za čiju vrednost je rezervisano najmanje dva bajta. Ovaj tip se razlikuje od tipa `unsigned int`, ali su medusobne konverzije moguće. Tip `size_t` može da se koristi za čuvanje bilo kog indeksa niza, a on je i tip povratne vrednosti operatora `sizeof`.

### `calloc`

Funkcija `calloc` ima sledeći prototip:

```c
void *calloc(size_t n, size_t size)
```

**Ona vraća pokazivač na blok memorije veličine n objekata navedene veličine `size`**. U slučaju za zahtev nije moguće ispuniti, vraća se `NULL`. Za razliku od `malloc`, alocirana memorija je inicijalizovana na nulu. Dinamički objekti alocirani navedenim funkcijama su neimenovani i bitno su različiti od promenljivih. Ipak, dinamički alociranim blokovima se pristupa na sličan način kao nizovima.

Navedene funkcije su generičke i alociraju memoriju za podatke bilo kog tipa. Kako bi se dobijenoj memoriji moglo pristupati slično kao kod nizova, potrebno je konvertovati dobijeni pokazivač tipa `void*` u neki konkretni pokazivački tip.

Nakon poziva funkcije `malloc()` ili `calloc()` obavezno treba proveriti povratnu vrednost, kako bi se utvrdilo da li je alokacija uspela. Ukoliko se utvrdi da je funkcija vratila vrednost `NULL`, treba prijaviti korisniku odgovarajuću poruka ili pokušati neki metod oporavka od greške. Dakle, najčešći scenario upotrebe funkcije malloc sledeći:

```c
int* p = (int*) malloc(n*sizeof(int));
if (p == NULL)
    /* prijaviti gresku */
```

U navedenom primeru, nakon uspešne alokacije, `p` se može koristiti kao (statički alociran) niz celih brojeva.

### `free`

U trenutku kada dinamički alociran blok memorije više nije potreban, poželjno je osloboditi ga. To se postiže funkcijom free:

```c
void free(void* p);
```

Poziv `free(p)` oslobađa memoriju na koju ukazuje pokazivač `p` (a ne memorijski prostor koji sadrži sam pokazivač `p`), pri čemu je neophodno da pokazuje na dinamički alociran blok memorije. Opasna je greška pokušaj oslobadanja memorije koja nije alocirana na ovaj način. Takođe, ne sme se koristiti nešto što je već oslobođeno niti dva puta oslobađati ista memorija.

Ukoliko neki dinamički alociran blok nije oslobođen ranije, biće oslobođen prilikom završetka programa, zajedno sa svom drugom memorijom dodeljenom programu. Ipak, ne treba se oslanjati na to i preporučeno je eksplicitno oslobadanje sve dinamički alocirane memorije pre kraja rada programa, a poželjno čim taj prostor nije potreban.

#### Primer 1: dinamičko alociranje memorije

Upotrebu ovih funkcija ilustruje naredni primer, u kojem se unosi i obrnuto ispisuje niz čiji broj elemenata nije unapred poznat, već se unosi sa ulaza tokom izvršavanja programa.

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, i, *a;
    /* Unos broja elemenata */
    scanf("%d", &n);
    /* Alocira se memorija */
    if ((a = (int*)malloc(n * sizeof(int))) == NULL) {
        printf("Greska prilikom alokacije memorije\n");
        return 1;
    }
    /* Unos elemenata */
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);
    /* Ispis elemenata u obrnutom poretku */
    for (i = n - 1; i >= 0; i--)
        printf("%d ", a[i]);
    /* Oslobadjanje memorije */
    free(a);
    return 0;
}
```

### `realloc`

U nekim slučajevima potrebno je promeniti veličinu već alociranog bloka memorije. To se postiže korišćenjem funkcije `realloc`, čiji je prototip:

```c
void *realloc(void *memblock, size_t size);
```

Parametar `memblock` je pokazivač na prethodno alocirani blok memorije, a parametar `size` nova veličina u bajtovima. Funkcija `realloc` vraća pokazivač tipa `void*` na realociran blok memorije, ili `NULL` ako zahtev ne može biti ispunjen. Zahtev za smanjivanje alociranog bloka uvek uspeva. U slučaju da se zahteva povećanje, pri čemu iza postojećeg bloka postoji dovoljno slobodnog prostora, taj prostor se koristi za proširivanje. Međutim, ukoliko iza postojećeg bloka ne postoji dovoljno slobodnog prostora, onda se u memoriji traži drugo mesto dovoljno da prihvati prošireni blok i, ako se nade, sadržaj postojećeg bloka se kopira na novo mesto a stari blok oslobađa. Ova operacija može biti vremenski zahtevna.

#### Primer 2: povećanje alocirane memorije

Upotreba funkcije `realloc` ilustrovana je programom koji učitava cele brojeve i smešta ih u memoriju, sve dok ne unesemo `-1` za kraj. Obzirom da se broj elemenata ne zna unapred, ni gornje ograničenje, neophodno je postepeno povećavati skladišni prostor tokom rada programa. Kako česta realokacija može biti neefikasna, u narednom programu se realokacija vrši nakon unošenja svakog desetog elementa. Naravno, ni ovo nije optimalna strategija — u praksi se obično na početku realokacije vrše relativno često, a onda sve ređe i ređe (npr. veličina se udvostručava).

```c
#include <stdio.h>
#include <stdlib.h>
#define KORAK 256

int main()
{
    int* a = NULL; /* Niz je u pocetku prazan */
    int duzina = 0; /* broj popunjenih elemenata niza */
    int alocirano = 0; /* broj elemenata koji mogu biti smesteni */
    int i;

    do {
        printf("Unesi ceo broj (-1 za kraj): ");
        scanf("%d", &i);
        /* Ako nema vise slobodnih mesta, vrsi se prosirivanje */
        if (duzina == alocirano) {
            alocirano += KORAK;
            a = realloc(a, alocirano * sizeof(int));
            if (a == NULL)
                return 1;
        }
        a[duzina++] = i;
    } while (i != -1);

    /* Ispis elemenata */
    printf("Uneto je %d brojeva. Alocirano je ukupno %d bajtova\n",
        duzina, alocirano * sizeof(int));
    printf("Brojevi su : ");
    for (i = 0; i < duzina; i++)
        printf("%d ", a[i]);

    /* Oslobadjanje memorije */
    free(a);
    return 0;
}
```

Bez upotrebe funkcije `realloc` centralni blok navedene funkcije main bi mogao da izgleda ovako:

```c
if (duzina == alocirano) {
    /* Kreira se novi niz */
    int* new_a;
    alocirano += KORAK;
    new_a = malloc(alocirano * sizeof(int));
    /* Kopira se sadrzaj starog niza u novi */
    for (i = 0; i < duzina; i++)
        new_a[i] = a[i];
    /* Oslobadja se stari niz */
    free(a);
    /* a ukazuje na novi niz */
    a = new_a;
}
```

U ovoj implementaciji, prilikom svake realokacije vrši se premeštanje memorije, tako da je ona neefikasnija od verzije sa `realloc`. U gore navedenom primeru koristi se konstrukcija:

```c
a = realloc(a, alocirano*sizeof(int));
```

U nekim slučajevima ova konstrukcija može biti neadekvatna ili opasna. Ukoliko zahtev za proširenje memorijskog bloka ne uspe, vraća se vrednost `NULL`, upisuje u promenljivu i tako gubi jedina veza sa prethodno alociranim blokom (i on, na primer, ne može biti oslobođen).


Izvor: [Mala škola referenciranja u programskom jeziku C](http://poincare.matf.bg.ac.rs/~jelenagr/2d/MalaSkolaPokazivaca.pdf)
