---
title: Primeri rekurzivnih funkcija
layout: post
tags: [rekurzija, algoritmi, racunarska-nauka]
---

***U programiranju, rekurzija je tehnika u kojoj funkcija poziva samu sebe, direktno ili indirektno. Rekurzivne funkcije su pogodne za širok spektar informatičkih problema, ali pored svojih dobrih strana imaju i loše.***

## Faktorijel

Funkcija faktorijel (za prirodni broj n, vrednost n! jednaka je proizvodu svih prirodnih brojeva od 1 do n ) može se definisati na (primitivno) rekurzivan način:

- 0! = 1 (bazni slučaj)
- za n > 0 važi: n! = n · (n − 1)! (rekurzivni korak)

Vrednost faktorijela se može izračunati korišćenjem petlje, ali i korišćenjem rekurzije:

```c
unsigned faktorijel(unsigned n) {
    if (n == 0)
        return 1;
    else
        return n*faktorijel(n-1);
}
```

Ukoliko je argument funkcije, na primer, vrednost 5, onda se funkcija f poziva najpre za tu vrednost, a onda, rekurzivno, za vrednosti 4, 3, 2, 1, 0. Prilikom svakog poziva funkcije u stek segmentu memorije stvara se novi stek okvir — stek okvir za novu instancu funkcije f. U ovim stek okvirima lokalna promenljiva n imaće redom vrednosti 5, 4, 3, 2, 1, 0. Sve instance funkcije f koriste isti primerak koda funkcije f (koji se nalazi u kôd segmentu). Stek okvir svake instance funkcije f „pamti“ dokle je ta instanca funkcije stigla sa izvršavanjem koda (kako bi izvršavanje moglo da bude nastavljeno od te tačke kada ta instanca funkcije ponovo postane aktivna).

Funkcija faktorijel ima složenost O(n). Pod pretpostavkom da nema prekoračenja, funkcija faktorijel je ispravna.

## Sumiranje niza

Sumiranje niza brojeva može biti izražena (primitivno) rekurzivno. Rekurzivna funkcija koja sumira elemente niza može se definisati na sledeći način:

```c
float suma(float a[], unsigned n) {
    if (n == 0)
        return 0.0f;
    else
        return suma(a, n-1) + a[n-1];
}
```

Lako se dokazuje da navedena funkcija suma ima složenost O(n).

## Stepenovanje

Stepenovanje broja može biti izraženo (primitivno) rekurzivno, sledećom funkcijom:

```c
float stepen_sporo(float x, unsigned k) {
    if (k == 0)
        return 1.0f;
    else
        return x * stepen_sporo(x, k - 1);
}
```

Iterativna varijanta prethodne funkcije je:

```
float stepen(float x, unsigned k) {
    unsigned i; float m = 1.0f;
    for(i=0; i<k; i++)
      m *= x;
    return m;
}
```

Sledeće rekurzivno rešenje je znatno brže (zahteva mnogo manje množenja, što će kasnije biti dokazano):

```c
float stepen_brzo(float x, unsigned k) {
    if (k == 0)
        return 1.0f;
    else if (k % 2 == 0)
        return stepen_brzo(x * x, k / 2);
    else
        return x * stepen_brzo(x, k - 1);
}
```

Iterativnu verziju prethodne funkcije nije trivijalno napisati.

## Fibonačijev niz

Fibonačijev niz (0,1,1,2,3,5,8,13,...) može se definisati u vidu (generalne) rekurzivne funkcije F:

- F (0) = 0 i F (1) = 1 (bazni slučaj)
- za n > 1 važi: F (n) = F (n − 1) + F (n − 2) (rekurzivni korak)

Funkcija za izračunavanje n-tog elementa Fibonačijevog niza može se definisati na sledeći način:

```c
unsigned fib(unsigned n) {
    if (n == 0 || n == 1)
        return n;
    else
        return fib(n-1) + fib(n-2);
}
```

## Najveći zajednički delilac

Euklidov algoritam za izračunavanje najvećeg zajedničkog delioca dva broja se može izračunati narednom rekurzivnom funkcijom, pretpostavlja se da je a ≥ b.

```c
unsigned nzd(unsigned a, unsigned b) {
    if (b == 0)
        return a;
    else
        return nzd(b, a % b);
}
```

## Kule Hanoja

Problem kula Hanoja glasi ovako: date su tri kule i na prvoj od njih n diskova opadajuće veličine; zadatak je prebaciti sve diskove sa prve na treću kulu (koristeći i drugu) ali tako da nikada nijedan disk ne stoji iznad manjeg.

![](https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg)

Iterativno rešenje ovog problema je veoma kompleksno, a rekurzivno prilično jednostavno: ukoliko je n = 0, nema diskova koji treba da se prebacuju; inače: prebaci (rekurzivno) n−1 diskova sa polaznog na pomoćnu kulu (korišćenjem dolazne kule kao pomoćne), prebaci najveći disk sa polazne na dolaznu kulu i, konačno, prebaci (rekurzivno) n − 1 diskova sa pomoćne na dolaznu kulu (korišćenjem polazne kule kao pomoćne). U nastavku je implementacija ovog rešenja:

```c
void kule(unsigned n, char polazna, char dolazna, char pomocna) {
    if (n > 0) {
        kule(n-1, polazna, pomocna, dolazna);
        printf("Prebaci disk sa kule %c na kulu %c\n",start,finish);
        kule(n-1, pomocna, dolazna, polazna);
    }
}
```

Funkciju možemo pozvati na sledeći način: `kule(3,'A','C','B')`.

## Uzajamna rekurzija

U dosadašnjim primerima, rekurzivne funkcije su pozivale same sebe direktno. Postoji i mogućnost da se funkcije međusobno pozivaju i tako stvaraju uzajamnu rekurziju.

Naredni primer ilustruje dve funkcije koje se koriste u ispitivanju da li je parametar `n` (`n` je prirodan broj) paran broj. Funkcija `paran` rešava problem za vrednost `n` kada je `n > 0` primenom funkcije `neparan` za vrednost `n − 1`, pri čemu se za svođenje problema troše tri vremenske jedinice. Funkcija `B` za vrednost parametra `n` kada je `n > 0` poziva funkciju `paran` za vrednost `n − 1`, pri čemu se za svođenje problema troše tri vremenske jedinice.

```c
int paran(int n) {
    if (n==0)
        return 1;
    else
        return neparan(n-1);
}

int neparan(int n) {
    if (n==0)
    return 0;
else
    return paran(n-1);
}
```

## Dobre i loše strane rekurzije

Dobre strane rekurzije su (obično) čitljiv i kratak kod, jednostavan za razumevanje, analizu, dokazivanje korektnosti i održavanje. Ipak, rekurzivna rešenja imaju i mana.

**Cena poziva.** Prilikom svakog rekurzivnog poziva kreira se novi stek okvir i kopiraju se argumenti funkcije. Kada rekurzivnih poziva ima mnogo, ovo može biti veoma memorijski i vremenski zahtevno, te je poželjno rekurzivno rešenje zameniti iterativnim.

**Suvišna izračunavanja.** U nekim slučajevima prilikom razlaganja problema na manje potprobleme dolazi do preklapanja potproblema i do višestrukih rekurzivnih poziva za iste potprobleme.

Razmotrimo, na primer, izvršavanje navedene funkcije koja izračunava elemente Fibonačijevog niza za n = 5. U okviru tog izvršavanja, funkcija `fib` je 3 puta pozvana za n = 0, 5 puta za n = 1, itd. Naravno, na primer, poziv `fib(1)` je svaki put izvršavan iznova i nije korišćena vrednost koju je vratio prethodni takav poziv. Zbog ovoga, izvršava se mnogo suvišnih izračunavanja i količina takvih izračunavanja u ovom primeru raste. Kako bi se izbegla suvišna izračunavanja moguće je koristiti tehniku memoizacije, koja podrazumeva da se u posebnoj strukturi podataka čuvaju svi rezultati već završenih rekurzivnih poziva. Pri svakom ulasku u funkciju konsultuje se ova struktura i, ako je rezultat već poznat, vraća se prethodno izračunat rezultat.

```c
unsigned memo[MAX_FIB];
unsigned fib(unsigned n) {
    if (memo[n]) return memo[n];
    if (n == 0 || n == 1)
        return memo[n] = n;
    else
        return memo[n] = fib(n-1) + fib(n-2);
}
```

Drugi pristup rešavanja problema suvišnih izračunavanja naziva se dinamičko programiranje. Ključna ideja je da se, umesto da se analizirajući problem on svodi na niže ka jednostavnijim potproblemima, od jednostavnih potproblema naviše konstruiše rešenje glavnog problema. Rešenja dinamičkim programiranjem obično ne uključuju rekurziju.

Na primer, gore navedena funkcija fib može se zameniti iterativnom funkcijom koja od početnih elemenata niza postepeno sintetiše sve dalje i dalje elemente niza. Primetimo da za izračunavanje n -tog elementa niza nije neophodno pamtiti sve elemente niza do indeksa n već samo dva prethodna:

```c
int fib(int n) {
    int i, fpp, fp;

    if (n == 0 || n == 1)
        return n;

    fpp = 0;
    fp = 1;

    for(i = 2; i <= n; i++) {
        int f = fpp + fp;
        fpp = fp;
        fp = f;
    }

    return fp;
}
```

## Eliminisanje rekurzije

Svaku rekurzivnu funkciju je moguće implementirati na drugi način tako da ne koristi rekurziju. Ne postoji jednostavan opšti postupak za generisanje takvih alternativnih implementacija.

Međutim, takav postupak postoji za neke specijalne slučajeve. Naročito je zanimljiv slučaj repne rekurzije jer se u tom slučaju rekurzija može jednostavno eliminisati. Rekurzivni poziv je repno rekurzivni ukoliko je vrednost rekurzivnog poziva upravo i konačan rezultat funkcije, tj. nakon rekurzivnog poziva funkcije ne izvršava se nikakva dodatna naredba. U tom slučaju, nakon rekurzivnog poziva nema potrebe vraćati se u kôd pozivne funkcije, te nema potrebe na stek smeštati trenutni kontekst (vrednosti lokalnih promenljivih). Na primer, u funkciji:

```c
float stepen_brzo(float x, unsigned k) {
    if (k == 0)
        return 1.0f;
    else if (k % 2 == 0)
        return stepen_brzo(x * x, k / 2);
    else
        return x * stepen_brzo(x, k - 1);
}
```

prvi rekurzivni poziv je repno rekurzivan, dok drugi nije (zato što je po izlasku iz rekurzije neophodno još pomnožiti rezultat sa x).

Pokažimo na narednom kôdu kako je moguće eliminisati repnu rekurziju.

```c
void r(int x) {
    if (p(x))
        a(x);
    else {
        b(x);
        r(f(x));
    }
}
```

gde su `p`, `a`, `b` i `f` proizvoljne funkcije.

Ključni korak je da se pre rekurzivnog koraka vrednost parametara funkcije (u ovom slučaju promenljive `x`) postavi na vrednost parametra rekurzivnog poziva, a zatim da se kontrola toka izvršavanja nekako prebaci na početak funkcije. Ovo je najjednostavnije (ali ne previše elegantno) uraditi korišćenjem bezuslovnog skoka.

```c
void r(int x) {
    pocetak:
    if (p(x))
        a(x);
    else {
        b(x);
        x = f(x); goto pocetak;
    }
}
```

Daljom analizom moguće je ukloniti bezuslovni skok i dobiti sledeći iterativni kôd.

```c
void r(int x) {
    while(!p(x)) {
        b(x);
        x = f(x);
    }
    a(x);
}
```

Demonstrirajmo tehniku uklanjanja repne rekurzije i na primeru Euklidovog algoritma:

```c
unsigned nzd(unsigned a, unsigned b) {
    if (b == 0)
        return a;
    else
        return nzd(b, a % b);
}
```

Pošto je poziv repno rekurzivan, potrebno je pripremiti nove vrednosti promenljivih a i b i preneti kontrolu izvršavanja na početak funkcije:

```c
unsigned nzd(unsigned a, unsigned b) {
    pocetak:
    if (b == 0)
        return a;
    else {
        unsigned tmp = a % b; a = b; b = tmp;
        goto pocetak;
    }
}
```

Daljom analizom, jednostavno se uklanja goto naredba:

```c
unsigned nzd(unsigned a, unsigned b) {
    while (b != 0) {
        unsigned tmp = a % b; a = b; b = tmp;
    }
    return a;
}
```

Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
