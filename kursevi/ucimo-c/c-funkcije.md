---
title: Funkcije u jeziku C
layout: lekcija-c
permalink: /c-funkcije
---

**Funkcija osigurava prikladan način vršenja svakojakih izračuna, čije rezultate kasnije možemo upotrijebiti bilo gdje.** Pravilno zadanim funkcijama, moguće je posao obaviti bez poznavanja unutarnje strukture funkcije; saznanje da je posao korektno obavljen je više nego dovoljno. C čini upotrebu funkcije lakom, prikladnom i efikasnom; često ćete se susretati s kratkim funkcijama definiranim i pozvanim samo jednom, tek radi pojašnjavanja dijelova koda.

Dosad smo koristili samo ponuđene funkcije tipa `printf`, `getchar` i `putchar`; došlo je vrijeme da sami napišemo nekoliko funkcija. Evo funkcije `power` i glavnog programa za njeno testiranje, kako bi mogli razlučiti čitavu njenu strukturu:

{:.ulaz}
```c
#include <stdio.h>

int power(int m, int n);

/* test power funkcije */
int main()
{
    int i;
    for (i = 0; i < 10; ++i)
        printf("%d %d %d\n", i, power(2, i), power(-3, i));
    return 0;
}

/* power: podiže bazu na n-ti eksponent n>=0 */
int power(int base, int n)
{
    int i, p;
    p = 1;
    for (i = 1; i <= n; ++i)
        p = p * base;
    return p;
}
```

## Objašnjenje

Definicija funkcije ima ovaj oblik:

```
ime funkcije(deklaracija parametara, ukoliko postoje){
  deklaracije internih varijabli funkcije
  naredbe
}
```

Deklaracije funkcija se mogu pojavljivati po bilo kom redoslijedu, u jednoj ili više izvornih datoteka, iako funkcija ne može biti podijeljena u više datoteka. Na trenutak ćemo pretpostaviti da su obje funkcije u istoj datoteci.

### Poziv funkcije

Funkcija `power` se poziva u `main` funkciji na sledeći način:

```c
printf("%d %d %d\n", i, power(2, i), power(-3, i));
```

Svaki poziv predaje dva argumenta funkciji `power`, koja nakon toga vraća cijeli broj za formatirani ispis. U jednom izrazu, `power(2,i)` je cijeli broj kao što su to i `2` i `i`.

### Tip i parametri funkcije

Prva linija funkcije power,

```
int power(int base, int n)
```

određuje tipove i imena parametara, te tip rezultata koji funkcija vraća. Imena koja koristi `power` za svoje parametre su lokalna i nisu vidljiva za bilo koju drugu funkciju: druge funkcije bez ikakvog problema mogu se služiti istim imenima. To isto tako vrijedi i za varijable `i` i `p`: i u funkciji `power` nema ništa s i u funkciji main.

**Mi ćemo koristiti "parametar" za varijablu čije se ime nalazi na listi definicije funkcije uokvirene zagradama, a "argument" za vrijednost koja se koristi pri pozivu.** Ponekad se koriste termini "formalni argument" i "aktualni argument" da se ovi pojmovi ne bi miješali.

### Povratna vrednost

Vrijednost koju `power` izračuna vraća se u `main` pomoću naredbe `return`. Bilo koji izraz može biti naveden iza `return`:

```
return izraz;
```

Funkcija ne mora vraćati vrijednost.

Mogli ste uočiti naredbu `return` na kraju `main` funkcije. Pošto je `main` funkcija kao i svaka druga, njena se vrijednost može vratiti onome tko ju je pozvao, što je gotovo uvijek operativni sustav. Bilo kako bilo, vraćena vrijednost nule podrazumijeva uredan završetak; vraćena vrijednost različita od nule znak je da nešto nije bilo u redu. Da bi pojednostavnili, mi smo izostavljali naredbe `return` iz `main` funkcija, ali ćemo ih uključivati, jer programi trebaju vraćati status svome okruženju.

### Deklaracija funkcije

```c
int power(int m, int n);
```

kaže da `power` funkcija treba dva cjelobrojna argumenta, a vraća jedan `int`. Ova deklaracija, koja se naziva prototipom funkcije, mora se slagati s definicijom `power`. Ako se definicija funkcije ili neki njezin poziv ne slaže s prototipom, primit ćemo dojavu o greški.

Imena parametara ne moraju se slagati. Zapravo, imena parametara u prototipu funkcije su proizvoljna, pa se dade napisati i

```c
int power(int, int);
```
Uredno odabrana imena čine program dokumentiranim, pa ćemo ih radije koristiti.

## Argumenti - pozivanje pomoću vrijednosti

U C-u, svi su funkcijski argumenti prosleđeni "po vrijednosti", što znači da je pozvana funkcija dala vrijednosti argumenata privremenim varijablama. Ovdje govorimo o osobinama koje su različite od "pozivanja preko reference", gdje pozvana funkcija pristupa originalnom argumentu, a ne lokalnoj kopiji.

Osnovna razlika je u činjenici da u C-u pozvana funkcija ne može direktno zamijeniti varijablu u funkciji koja ju je pozvala; ona može zamijeniti samo svoju privremenu kopiju.

Pozivanje pomoću vrijednosti djeluje aktivno, a ne pasivno. Ono obično vodi kompaktnijim programima s manje različitih varijabli, jer parametri mogu biti tretirani kao pogodno obilježene lokalne varijable u pozvanoj funkciji. Primjerice, evo jedne verzije funkcije `power`, bez pomoćne varijable `i`, koja koristi ovu osobinu:

```c
int power(int base, int n)
{
    int p;
    for (p = 1; n > 0; --n)
        p = p * base;
    return p;
}
```

Parametar `n` se koristi kao privremena varijabla, a vrijednost mu se smanjuje dok ne dođe do nule. Međutim, što god uradili sa `n` unutar funkcije `power`, nema nikakvog utjecaja na argument sa kojim je `power` prvobitno pozvan.

Kada bude potrebno, mi ćemo omogućiti promjenu varijable unutar pozvane funkcije. Pri pozivu jednostavno pošaljemo adresu varijable koja se uvodi kao argument (zapravo se radi o pokazivaču), pa pozvana funkcija indirektno dohvaća varijablu i po potrebi mijenja.

Kod niza je priča nešto drugačija. Kad se ime niza koristi kao argument, vrijednost koja se predaje funkciji je lokacija ili adresa početka niza - tu nema kopiranja elemenata niza.


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
