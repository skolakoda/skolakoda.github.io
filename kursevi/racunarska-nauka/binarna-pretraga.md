---
title: Binarna pretraga
layout: lekcija-uvod
tags: [algoritmi, racunarska-nauka]
permalink: /binarna-pretraga
image: https://devopedia.org/images/article/28/2951.1490520804.gif
---

![]({{page.image}})

**Binarno pretraživanje je nalaženje zadate vrednosti u sortiranom skupu elemenata. U svakom koraku, dok se ne pronađe tražena vrednost, skup se deli na dva dela i pretraga se nastavlja samo u jednom — odbacuje se deo koji sigurno ne sadrži traženu vrednost.**

U diskretnom slučaju, ako skup ima `n` (konačno mnogo) elemenata, algoritam je vremenski logaritamske složenosti — O(log n).

Pretraživanje se vrši na sledeći način: pronalazi se srednji element skupa, proverava se da li je jednak zadatoj vrednosti i ako jeste vraća se njegov indeks, a ako nije pretraživanje se nastavlja nad skupom svih manjih (ako je srednji element veći od zadate vrednosti) ili svih većih elemenata (ako je srednji element manji od zadate vrednosti).

Binarno pretraživanje je primer [podeli-i-vladaj](https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm) algoritama.

## Primer: pogađanje broja u intervalu

Binarno pretraživanje se može koristiti u igri pogađanja zamišljenog broja iz zadatog intervala. Jedan igrač treba da zamisli broj iz tog intervala, a drugi da pogodi broj, na osnovu što manjeg broja pitanja na koje prvi igrač odgovara sa da ili ne. Ako pretpostavimo da interval čine brojevi od 1 do 16 i ako je prvi igrač zamislio broj 11, onda igra može da se odvija na sledeći način:

```
Da li je zamišljeni broj veći od 8 ? da
Da li je zamišljeni broj veći od 12 ? ne
Da li je zamišljeni broj veći od 10 ? da
Da li je zamišljeni broj veći od 11 ? ne
```

Na osnovu dobijenih odgovora, drugi igrač može da zaključi da je zamišljeni broj 11. Broj pitanja potrebnih za određivanje intervala pretrage je O(log k), gde je k širina polaznog intervala.

## Primer: pogađanje broja bez intervala

Ukoliko u prethodnoj igri nije zadata gornja granica intervala, najpre treba odrediti jedan broj koji je veći od zamišljenog broja i onda primeniti binarno pretraživanje. Ako pretpostavimo da je prvi igrač zamislio broj 11, onda igra može da se odvija na sledeći način:

```
Da li je zamišljeni broj veći od 1 ? da
Da li je zamišljeni broj veći od 2 ? da
Da li je zamišljeni broj veći od 4 ? da
Da li je zamišljeni broj veći od 8 ? da
Da li je zamišljeni broj veći od 16 ? ne
```

Na osnovu dobijenih odgovora, drugi igrač može da zaključi da je zamišljeni broj u intervalu od 1 do 16 i da primeni binarno pretraživanje na taj interval. Broj pitanja potrebnih za određivanje intervala pretrage je O(log k), gde je k zamišljeni broj i ukupna složenost pogađanja je ponovo O(log k).

**Binarno pretraživanje je daleko efikasnije nego linearno, ali zahteva da su podaci koji se pretražuju uređeni.** Ovo je jedan od glavnih razloga zašto se reči u rečnicima, enciklopedijama i telefonskim imenicima sortiraju. Ove knjige se obično pretražuju postupkom koji odgovara varijantama binarne pretrage. Odnos složenosti postaje još očigledniji ukoliko se zamisli koliko bi komplikovano bilo sekvencijalno pretraživanje reči u nesortiranom rečniku.

Binarno pretraživanje se može implementirati iterativno ili rekurzivno.

## Rekurzivna binarna pretraga

Naredna funkcija daje rekurzivnu implementaciju binarnog pretraživanja. Poziv `binarna_pretraga(a, l, d, x)` vraća indeks elementa niza `a` između `l` i `d` (uključujući i njih) koji je jednak zadatoj vrednosti `x` ako postoji,  inače `-1`. Dakle, ukoliko se želi pretraga celog niza, funkciju treba pozvati sa `binarna_pretraga(a, 0, n-1, x)`.

```c
int binarna_pretraga(int a[], int l, int d, int x) {
  int s;

  if (l > d)
    return -1;
  s = l + (d - l)/2;
  if (x > a[s])
    return binarna_pretraga(a, s+1, d, x);
  else if (x < a[s])
    return binarna_pretraga(a, l, s-1, x);
  else
    return s;
}
```

Primetimo da se za nalaženje središta, umesto izraza `l + (d - l)/2` može koristiti i kraći izraz `(l + d)/2`. Ipak, upotreba prvog izraza je preporučena kako bi se smanjila mogućnost nastanka prekoračenja. Ovo je jedan od mnogih nizu primera gde izrazi koji su matematički jednaki, pokazuju različita svojstva u aritmetici fiksirane širine.

Složenost ove funkcije je O(log n), a njena korektnost se dokazuje jednostavno.

## Iterativna binarna pretraga

Oba rekurzivna poziva u prethodnoj funkciji su bila repno-rekurzivna, tako da se mogu jednostavno eliminisati. Time se dobija iterativna funkcija koja vraća indeks elementa niza `a` koji je jednak zadatoj vrednosti `x` ako takva postoji, inače `-1`.

```c
int binarna_pretraga(int a[], int n, int x) {
  int l, d, s;

  l = 0; d = n-1;
  while(l <= d) {
    s = l + (d - l)/2;
    if (x > a[s])
      l = s + 1;
    else if (x < a[s])
      d = s - 1;
    else
      return s;
  }
  return -1;
}
```


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
