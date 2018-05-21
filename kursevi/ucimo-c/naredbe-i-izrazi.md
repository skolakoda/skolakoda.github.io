---
title: Naredbe i izrazi
layout: lekcija-c
author: damjan
permalink: /naredbe-i-izrazi
---

**Izraz (en. *expression*) je vrednost koja se evaluira. Naredba (en. *statement* - izjava) je instrukcija računaru da nešto uradi. Razlikovanje naredbi i izraza je fundamentalno u računarskoj nauci.**

Postoje prosti i složeni izrazi. Prosti izrazi se sastoje od samo jednog člana, a složeni iz dva ili više, povezanih operatorima. Za razliku od izraza, koji samo konstatuju vrednost, naredbe menjaju stanje sveta. Naredbe u C jeziku se uvek završavaju tačka-zarezom`;` Dve ili više naredbi mogu biti smeštene u blok unutar viličastih zagrada.

## Primeri izraza

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Grief%2C_from_Darwin%27s_Expressions_of_Emotions_in_Man....._Wellcome_L0049517.jpg/600px-Grief%2C_from_Darwin%27s_Expressions_of_Emotions_in_Man....._Wellcome_L0049517.jpg)

Svaki od navedenih redova koda je validan izraz u mnogim programskim jezicima:

```js
2 + 2           // aritmeticki izraz
2 < 3 + 5       // logicki izraz
2 + 2 == 5
a + 4 * b
Math.min(2, 22)
"foo"
"Zdravo " + "Svete"
(x == 0) && (y == 0)
Math.PI
```

Neki navedeni izrazi daju aritmetičku, neki logičku, a neki tekstualnu vrednost.

## Primeri naredbi

![](https://cdn-images-1.medium.com/max/600/1*MTUk6ZzoBT6dLREixC6cKA.png)

Svaki od navedenih redova je naredba, koja menja stanje sveta:

{:ulaz}
```js
x = 5                           // naredba dodele
zbir = 2 + 2                    // naredba dodele vrednosti izraza
for (let i=0; i<5; i++)         // naredba ciklusa
    console.log('Ucini nesto')  // naredba ispisa
i++                             // naredba dodele
return 0;                       // naredba okoncanja funkcije i vracanja vrednosti
```

Izrazi takođe mogu biti deo naredbi, kao kod naredbe `if`, koja evaluira uslovni izraz:

```js
if (3 < 5)
    console.log('Ucini nesto')
```

Takođe, vrednost izraza često dodeljujemo promenljivoj, pomoću naredbe dodele.

## Zamenljivost izraza i naredbi

Neke naredbe je moguće zameniti izrazima. Na primer, sledeću logiku:

{:.ulaz}
```js
let x
if (4 < 5) 
    x = 'Zdravo' 
else
    x = 'Dovidjenja'

console.log(x)
```

je moguće zameniti ternarnim operatorom:

{:.izraz}
```js
4 < 5 ? 'Zdravo' : 'Dovidjenja'
```

## Imperativno vs. funkcionalno programiranje

Imperativno programiranje, kao što naziv implicira, se pretežno oslanja na naredbe. Klasičan primer ove paradigme je programski jezik C, čiji programi se redovno sastoje iz niza naredbi koje treba izvršiti.

{:.ulaz}
```c
#include <stdio.h>
int main(int argc, char *argv[]) {
    int elems[5] = {1, 2, 3, 4, 5};     // naredba dodele

    int total = 0;                      // naredba dodele
    int i;                              // naredba deklaracije

    //   | naredba
    //   |             | naredba
    //   v             v
    for (i = 0; i < 5; i++) {
        total += elems[i];              // naredba dodele
    }
    printf("%d\n", total);              // naredba ispisa

    return 0;                           // naredba vracanja vrednosti
}
```

Na drugom kraju spektra je Haskell, funkcionalni jezik koji se snažno oslanja na izraze. Za razliku od imperativnog programiranja, funkcionalno programiranje naglašava evaluaciju funkcijskih izraza umesto izvođenja niza naredbi.