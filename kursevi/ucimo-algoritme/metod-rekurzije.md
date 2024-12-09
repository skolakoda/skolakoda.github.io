---
title: Metod rekurzije
layout: lekcija-algoritmi
permalink: /metod-rekurzije
---

![](/images/fore/rekurzija-strip.png)

**Rekurzija je metod kojim rešenje problema nalazimo preko rešenja pojednostavljene verzije tog problema, sve dok se ne dođemo do osnovne instanca čije rešenje poznajemo.**

Da bi pristupili rešavanju problema rekurzijom, potrebno je definisati:

- **bazični slučaj** (rešenje osnovnih instanci) i
- **rekurzivnu vezu** (kako složeniju instancu problema rešiti koristeći jednostavnije instance).

Rekurzija se može primeniti na široku klasu problema i predstavlja jednu od središnih ideja računarske nauke.

Ideja rekurzije bazirana je na matematičkoj indukciji, samo obrnutog smera. Na primer, program prvo testira da li je zadata instanca osnovna, na primer je li n=1. Ukoliko jeste, rešenje nalazimo direktno. Inače, rešavamo problem tako što pozivamo istu funkciju sa manjim parametrom. Jednostavno, a deluje neverovatno.

Metod rekurzije je mač sa dve oštrice. Pored niza prednosti, postoji i niz razloga zašto ga izbegavati.

## Primer: pronađi put do kuće

Jedan primer kojim se može opisati rekurzija je rešavanje problema pronalaska puta do kuće. Rekurzijom bi se ovaj problem mogao opisati u tri koraka, na sledeći način:

1. ako si kod kuće, ostani u mestu,
2. inače, napravi jedan korak prema kući,
3. pronađi put do kuće.

Tačka pod brojem 3 predstavlja poziv istog problema iz definicije, ali posle učinjene jedne jednostavne akcije, a to je jedan korak prema kući, problem je pojednostavljen.

## Generalni algoritam

Opisani postupak se može uopštiti, čime dobijamo generalni algoritam koji rešava probleme rekurzijom, i sastoji se od tri koraka:

1. osnovni slučaj (kojim se prekida proces izračunavanja),
2. izvršavanje jedne akcije koja nas vodi ka osnovnom slučaju,
3. rekurzivni poziv.

Ovako opisani postupak rešavanja problema ima algoritamski oblik i za većinu problema se može implementirati.

## Implementacija rekurzije

Rekurzija se implementira preko funkcije koja poziva samu sebe. Korišćenjem rekurzije moguće je simulirati rad petlje, odnosno ponavljanja bloka naredbi. Rekurzija se često koristi u rešavanju raznih matematičkih problema, kao što su izračunavanje faktorijela, fibonačijevih brojeva i sl, ali se koristi i u programskim procedurama kao što su sortiranje nizova, pretraživanje složenih struktura podataka i rešavanje složenih problema (na primer raspored kraljica na šahovskoj tabli).

```c
void recursion() {
  // telo funkcije
  recursion(); // funkcija poziva samu sebe
}

int main() {  
  recursion(); // poziv rekurzivne funkcije
}
```

## Beskonačna rekurzija

U implementaciji rekurzije moramo biti oprezni da ne izazovemo beskonačnu petlju. Na primer, ako pišemo program koji računa zbir prvih `n` prirodnih brojeva, ovaj problem možemo postaviti rekurzivno na sledeći način: suma prvih `n` brojeva je jednaka sumi prvih `n-1` brojeva plus broj `n`. Ako ovu logiku implementiramo direktno dobijamo sledeći program koji će ući u beskonačnu petlju, jer funkcija `suma` stalno poziva sebe:

```c
#include <stdio.h>
#include <stdlib.h>

int suma(int n);

int main()
{
   int n = 6;
   int rez = suma(6);
   printf("Suma prvih %d brojeva je %d \n", n, rez);
   return 0;
}

int suma(int n){
   int rez;
   rez = n + suma(n-1);
   return rez;
}
```

## Uvođenje bazičnog slučaja

Da bismo izbegli beskonačan rekurzivan poziv, moramo uvesti bazični slučaj koji predstavlja izlaz iz rekurzije. U primeru sabiranja prvih `n` prirodnih brojeva, slučaj n=1 ne zahteva sabiranje već odmah možemo vratiti 1. U funkciji `suma` dodajemo bazični slučaj za n=1, koji vraća vrednost, čime se rekurzivna petlja zaustavlja:

{:.ulaz}
```c
#include <stdio.h>
#include <stdlib.h>

int suma(int n);

int main()
{
   int n = 6;
   int rez = suma(6);
   printf("Suma prvih %d brojeva je %d \n", n, rez);
   return 0;
}

int suma(int n){
   int rez;
   if(n==1)
       return 1;
   rez = n + suma(n-1);
   return rez;
}
```

## Primer: rekurzivno odbrojavanje

Rekurzivno odbrojavanje je jedan od najprostijih primera za razumevanje rekurzije:

{:.ulaz}
```js
function odbrojavanje(n) {
  if (n === 0) return
  console.log(n)
  return odbrojavanje(n-1)
}

odbrojavanje(9)
```

![](https://cdn-images-1.medium.com/max/256/1*FqUSf96rhnS-38hDNvKxZQ.png)


## Izvori

- [Petlja.org](https://petlja.org/BubbleBee/r/lekcije/uvod-u-programiranje/nedelja_06)
