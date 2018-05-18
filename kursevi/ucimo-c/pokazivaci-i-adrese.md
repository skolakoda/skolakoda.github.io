---
title: Pokazivači i adrese
layout: lekcija-c
permalink: /pokazivaci-i-adrese
---

**Memorija računara organizovana je u niz uzastopnih bajtova.** Uzastopni bajtovi mogu se tretirati kao jedinstven podatak. Na primer, dva (ili četiri, u zavisnosti od sistema) uzastopna bajta mogu se tretirati kao jedinstven podatak celobrojnog tipa.

**Pokazivači** predstavljaju tip podataka u C-u takav da su vrednosti ovog tipa memorijske adrese. U zavisnosti od sistema, adrese obično zauzimaju četiri (ranije dva, a novije vreme i osam) bajta. **Pokazivačke promenljive** su promenljive koje sadrže memorijske adrese. Iako su pokazivačke vrednosti (adrese) u suštini celi brojevi, pokazivački tipovi se striktno razlikuju od celobrojnih.

Takođe, jezik C razlikuje više pokazivačkih tipova i tip pokazivača se određuje na osnovu tipa podataka na koji pokazuje. Ovo znači da pokazivači implicitno čuvaju informaciju o tipu onoga na šta ukazuju, sa izuzetkom pokazivača tipa `void` koji nema informaciju o tipu podataka na koji ukazuje.

## Tip pokazivača

**Tip pokazivača** koji ukazuje na podatak tipa `int` zapisuje se `int *`. Slično važi i za druge tipove. Prilikom deklaracije, nije bitno da li postoji razmak između zvezdice i tipa ili zvezdice i identifikatora. Kako god da je napisano, zvezdica se vezuje uz identifikator, što je čest izvor grešaka.

```c
int *p1;
int* p2;
int* p3, p4;
```

Dakle, u ovom primeru, `p1`, `p2` i `p3` su pokazivači koji ukazuju na int dok je `p4` običan int (zvezdica se vezala za prethodni identifikator).

## Operator referenciranja `&`

Kako bi pokazivačka promenljiva sadržala adresu nekog smislenog podatka, potrebno je programeru dati mogućnost određivanja adresa objekata.

**Operator referenciranja `&` (koji zovemo i „adresni operator”) vraća adresu svog operanda.** On može biti primenjen samo na promenljive i elemente, a ne i na izraze ili konstante.

Na primer, ukoliko je naredni kod deo neke funkcije

```c
int a = 10, *p;
p = &a;
```

onda se prilikom izvršavanja te funkcije, za promenljive `a` i `p` rezerviše prostor u njenom stek okviru. U prostor za `a` se upisuje vrednost 10, a u prostor za `p` adresa promenljive `a`. Za promenljivu `p` tada kažemo da „pokazuje“ na `a`.

## Operator dereferenciranja `*`

Operator dereferenciranja se primenjuje na pokazivačku promenljivu, i vraća sadržaj lokacije na koju ta promenljiva pokazuje, vodeći računa o tipu. Simbol `*` koristi i za označavanje pokazivačkih tipova i za operator dereferenciranja i poželjno je jasno razlikovanje ove njegove **dve različite uloge**.

Derefencirani pokazivač može biti l-vrednost i u tom slučaju izmene dereferenciranog pokazivača utiču neposredno na prostor na koji se ukazuje. Ukoliko pokazivač ukazuje na neku promenljivu, posredno se menja i njen sadržaj. Na primer, nakon dodela

```c
int a = 10, *p;
p = &a;
*p = 5;
```

promenljiva `p` ukazuje na `a`, a u lokaciju na koju ukazuje `p` je upisana vrednost 5. Time je i vrednost promenljive a postala 5.

## Pokazivački vs. celobrojni tip

Još jednom naglasimo da pokazivački i celobrojni tipovi različiti. Tako je, na primer, ako je data deklaracija

```c
int *pa, a;
```

naredni kod neispravan

```c
pa = a;
```

Takođe, neispravno je i `a = pa;` kao i `pa = 1234`.

Moguće je koristiti eksplicitne konverzije (na primer `a = (int) pa;` ili `pa = (int*)a;`), ali ovo treba oprezno koristiti.

Jedini izuzetak je `0` koja se može tumačiti i kao ceo broj i kao pokazivač. Tako je moguće dodeliti nulu pokazivačkoj promenljivoj i porediti pokazivač sa nulom. Simbolička konstanta `NULL` se često koristi umesto nule, kao jasniji indikator da je u pitanju specijalna pokazivačka vrednost. `NULL` je definisana u zaglavlju `<stdio.h>` i ubuduće ćemo uvek koristiti `NULL` kao vrednost za pokazivač koji ne pokazuje ni na šta smisleno. Pokazivač koji ima vrednost `NULL` nije moguće dereferencirati. Pokušaj dereferenciranja dovodi do greške tokom izvršavanja programa (najčešće “*segmentation fault*”).

![](/images/fore/null-pokazivac.jpg)

## Generički pokazivački tip (`void*`)

U nekim slučajevima, poželjno je imati mogućnost “opšteg” pokazivača, tj. pokazivača koji može da ukazuje na promenljive različitih tipova. Za to se koristi tip `void*`. Izraze ovog tipa je moguće eksplicitno konvertovati u bilo koji konkretni pokazivački tip (čak se u C-u, za razliku od C++-a, vrši i implicitna konverzija prilikom dodele).

Međutim, naravno, nije moguće vršiti dereferenciranje pokazivača tipa `void*` jer nije moguće odrediti tip takvog izraza kao ni broj bajtova u memoriji koji predstavljaju njegovu vrednost.

## Primeri

### Rad sa pokazivačima

Primer koji ilustruje rad sa pokazivačima

{:.ulaz}
```c
#include <stdio.h>

main()
{
    int x = 3;
    int* px;    /* Promenljiva tipa pokazivac na int (int*) */

    printf("Adresa x je: %p\n", &x);
    printf("Vrednost x je: %d\n", x);

    px = &x;  /* Pamtimo adresu promenjive x u promenljivoj px */
    printf("Vrednost px je: %p\n", px);
    printf("Vrednost *px (promenljive na koju ukazuje px) je: %d\n", *px);

    *px = 6;  /* Menjamo vrednost promenljive na koju ukazuje px */
    printf("Nova vrednost *px je: %d\n", *px);
    printf("Nova vrednost x je: %d\n", x);  /* Posredno je promenjena vrednost x */
}
```

### Prenos argumenata preko pokazivača

Primer ilustruje prenos argumenata preko pokazivača – funkcija koja vrši trampu vrednosti dva broja.

{:.ulaz}
```c
#include <stdio.h>

/* menja lokalne kopije promenljivih */
void swap_po_vrednosti(int x, int y)
{
    int tmp;
    printf("swap_po_vrednosti: menja vrednosti promenljivim na adresama: \n");
    printf("x: %p\n", &x);
    printf("y: %p\n\n", &y);
    tmp = x;
    x = y;
    y = tmp;
}

/* menja izvorne promenljive preko pokazivača */
void swap_po_referenci(int* px, int* py)
{
    int tmp;
    printf("swap_po_referenci: menja vrednosti promenljivim na adresama: \n");
    printf("px: %p\n", px);
    printf("py: %p\n\n", py);
    tmp = *px;
    *px = *py;
    *py = tmp;
}

main()
{
    int x = 3, y = 5;
    printf("Adresa x je %p\n", &x);
    printf("Vrednost x je %d\n", x);
    printf("Adresa y je %p\n", &y);
    printf("Vrednost y je %d\n\n", y);

    /* Pokusavamo zamenu varijabli po vrednosti */
    swap_po_vrednosti(x, y);
    printf("Posle swap_po_vrednosti:\n");
    printf("Vrednost x je %d\n", x);
    printf("Vrednost y je %d\n\n", y);

    /* Vrsimo zamenu po referenci. Prosledjujemo adrese promenljivih, ne njihove vrednosti */
    swap_po_referenci(&x, &y);
    printf("Posle swap_po_referenci:\n");
    printf("Vrednost x je %d\n", x);
    printf("Vrednost y je %d\n\n", y);
}
```

Izvor: [Mala škola referenciranja u programskom jeziku C](http://poincare.matf.bg.ac.rs/~jelenagr/2d/MalaSkolaPokazivaca.pdf)
