---
title: Binarna pretraga
layout: lekcija-algoritmi
permalink: /binarna-pretraga
image: https://devopedia.org/images/article/28/2951.1490520804.gif
---

![]({{page.image}})

**Binarno pretraživanje je nalaženje zadate vrednosti u sortiranom skupu elemenata. U svakom koraku, dok se ne pronađe tražena vrednost, skup se deli na dva dela i pretraga se nastavlja samo u jednom — odbacuje se deo koji sigurno ne sadrži traženu vrednost.**

U diskretnom slučaju, ako skup ima `n` (konačno mnogo) elemenata, algoritam je vremenski logaritamske složenosti — O(log n).

Pretraživanje se vrši na sledeći način: pronalazi se srednji element skupa, proverava se je li jednak zadatoj vrednosti i ako jeste vraća se njegov indeks, a ako nije pretraga se nastavlja nad skupom svih manjih (ako je srednji element veći od zadate vrednosti) ili svih većih elemenata (ako je srednji element manji).

Binarno pretraživanje je primer [podeli-i-vladaj](https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm) algoritama. Može se implementirati iterativno ili rekurzivno.

## Uređenost podataka

**Binarno pretraživanje je daleko efikasnije nego linearno, ali zahteva da su podaci koji se pretražuju uređeni.** Ovo je jedan od glavnih razloga zašto se reči u rečnicima, enciklopedijama i telefonskim imenicima sortiraju. Ove knjige se obično pretražuju postupkom koji odgovara varijantama binarne pretrage. Odnos složenosti postaje još očigledniji ukoliko se zamisli koliko bi komplikovano bilo sekvencijalno pretraživanje reči u nesortiranom rečniku.

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

### Literatura

- Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
