---
title: Algoritmi pretraživanja
layout: post
tags: [algoritmi, racunarska-nauka]
---

***Pod pretraživanjem niza elemenata podrazumevamo određivanje indeksa elementa niza koji je jednak
datoj vrednosti ili ispunjava neko zadato svojstvo (npr. najveći je element niza).***

## Linearno pretraživanje

Linearno (ili sekvencijalno) pretraživanje je zasnovano na ispitivanju redom svih elemenata niza ili ispitivanju redom elemenata niza sve dok se ne naiđe na traženi element. Linearno pretraživanje je vremenske linearne složenosti po dužini niza koji se pretražuje. Ukoliko se u nizu od n elemenata traži element koji je jednak zadatoj vrednosti, u prosečnom slučaju (ako su elementi slučajno raspoređeni), ispituje se n/2, u najboljem 1, a u najgorem n elemenata niza.

**Primer.** Funkcija vraća indeks prvog pojavljivanja zadatog celog broja `x` u zadatom nizu `a` dužine `n` ili vrednost -1, ako se taj ne pojavljuje:

```c
int linearna_pretraga(int a[], int n, int x) {
  int i;
  for (i = 0; i < n; i++)
    if (a[i] == x)
      return i;
  return -1;
}
```

Složenost ove funkcije je O(n), a njena korektnost se dokazuje jednostavno (pod pretpostavkom da nenegativan broj n predstavlja broj elemenata niza). Česta greška prilikom implementacije linearne pretrage je prerano vraćanje negativne vrednosti:

```c
int linearna_pretraga(int a[], int n, int x) {
  int i;
  for (i = 0; i < n; i++)
    if (a[i] == x)
      return i;
    else
      return -1;
}
```

Navedena naredba return prouzrokuje prekid rada funkcije tako da implementacija može da prekine petlju već nakon prve iteracije.

**Primer.** Linearna pretraga može biti realizovana i rekurzivno. Pozivom `linearna_pretraga(a, i, n, x)` nalazi se indeks prvog pojavljivanja elementa `x` u nizu `a[i, n-1]`. Kako bi se izvršila pretraga celog niza, potrebno je izvršiti poziv `linearna_pretraga(a, 0, n, x)`, pri čemu je `n` dužina niza `a`.

```c
int linearna_pretraga(int a[], int i, int n, int x) {
  if (i == n)
    return -1;
  if (a[i] == x)
    return i;
  return linearna_pretraga(a, i+1, n, x);
}
```

Ukoliko se zadovoljimo pronalaženjem poslednjeg pojavljivanja elementa `x`, kôd se može dodatno uprostiti.

```c
int linearna_pretraga(int a[], int n, int x) {
  if (n == 0)
    return -1;
  else if (a[n - 1] == x)
    return n-1;
  else return linearna_pretraga(a, n-1, x);
}
```

U oba slučaja rekurzivni pozivi su repno rekurzivni. Eliminacijom repne rekurzije u prvom slučaju se upravo dobija prikazana iterativna implementacija. Eliminacijom repne rekurzije u drugom slučaju se dobija:

```c
int linearna_pretraga(int a[], int n, int x) {
  int i;
  for (i = n; i > 0; i--)
    if (a[i - 1] == x)
      return i - 1;
  return -1;
}
```

odnosno:
```c
...
for (i = n-1; i >= 0; i--)
  if (a[i] == x)
    return i;
...
```

**Primer.** Naredna funkcija vraća indeks poslednjeg pojavljivanja zadatog karaktera c u zadatoj niski s ili vrednost -1, ako se c ne pojavljuje u s:

```c
int string_last_char(char s[], char c) {
  int i;
  for (i = strlen(s)-1; i >= 0; i--)
    if (s[i] == c)
      return i;
  return -1;
}
```

Složenost ove funkcije je linearna po dužini niske s a njena korektnost se dokazuje jednostavno.

**Primer.** Naredna funkcija vraća indeks najvećeg elementa među prvih n elemenata niza a (pri čemu je n veće ili jednako 1):

```c
int max(int a[], int n) {
  int i, index_max;
  index_max = 0;
  for(i = 1; i < n; i++)
    if (a[i] > a[index_max])
      index_max = i;
  return index_max;
}
```

Složenost ove funkcije je O(n) a njena korektnost se dokazuje jednostavno.

## Binarno pretraživanje

Binarno pretraživanje (ne nužno niza) je pronalaženje zadate vrednosti u zadatom skupu elemenata koje pretpostavlja da su elementi zadatog skupa sortirani i u svakom koraku, sve dok se ne pronađe tražena vrednost, taj skup se deli na dva dela i pretraga se nastavlja samo u jednom delu — odbacuje se deo koji sigurno ne sadrži traženu vrednost. U diskretnom slučaju, ako skup koji se pretražuje ima n (konačno mnogo) elemenata, binarno pretraživanje je vremenski logaritamske složenosti — O(log n). Pretraživanje se u tom, diskretnom slučaju, vrši na sledeći način: pronalazi se srednji (po postojećem uređenju) element skupa (obično niza), proverava se da li je on jednak zadatoj vrednosti i ako jeste vraća se njegov indeks, a ako nije pretraživanje se nastavlja nad skupom svih manjih (ako je srednji element veći od zadate vrednosti) ili svih većih elemenata (ako je srednji element manji od zadate vrednosti). Binarno pretraživanje je primer podeli-i-vladaj (*divide and conquer*) algoritama.

**Primer.** Binarno pretraživanje se može koristiti u igri pogađanja zamišljenog prirodnog broja iz zadatog intervala. Jedan igrač treba da zamisli jedan broj iz tog intervala, a drugi igrač treba da pogodi taj broj, na osnovu što manjeg broja pitanja na koje prvi igrač odgovara samo sa da ili ne. Ako pretpostavimo da interval čine brojevi od 1 do 16 i ako je prvi igrač zamislio broj 11, onda igra može da se odvija na sledeći način:

```
Da li je zamišljeni broj veći od 8 ? da
Da li je zamišljeni broj veći od 12 ? ne
Da li je zamišljeni broj veći od 10 ? da
Da li je zamišljeni broj veći od 11 ? ne
```

Na osnovu dobijenih odgovora, drugi igrač može da zaključi da je zamišljeni broj 11. Broj pitanja potrebnih za određivanje intervala pretrage je O(log k), gde je k širina polaznog intervala.

**Primer.** Ukoliko u prethodnoj igri nije zadata gornja granica intervala, najpre treba odrediti jedan broj koji je veći od zamišljenog broja i onda primeniti binarno pretraživanje. Ako pretpostavimo da je prvi igrač zamislio broj 11, onda igra može da se odvija na sledeći način:

```
Da li je zamišljeni broj veći od 1 ? da
Da li je zamišljeni broj veći od 2 ? da
Da li je zamišljeni broj veći od 4 ? da
Da li je zamišljeni broj veći od 8 ? da
Da li je zamišljeni broj veći od 16 ? ne
```

Na osnovu dobijenih odgovora, drugi igrač može da zaključi da je zamišljeni broj u intervalu od 1 do 16 i da primeni binarno pretraživanje na taj interval. Broj pitanja potrebnih za određivanje intervala pretrage je O(log k), gde je k zamišljeni broj i ukupna složenost pogađanja je ponovo O(log k).

Binarno pretraživanje je daleko efikasnije nego linearno, ali zahteva da su podaci koji se pretražuju uređeni. Ovo je jedan od glavnih razloga zašto se reči u rečnicima, enciklopedijama, telefonskim imenicima i slično sortiraju. Ove knjige se obično pretražuju postupkom koji odgovara varijantama binarne pretrage. Odnos složenosti postaje još očigledniji ukoliko se zamisli koliko bi komplikovano bilo sekvencijalno pretraživanje reči u nesortiranom rečniku.

Binarno pretraživanje se može implementirati iterativno ili rekurzivno.

**Primer.** Naredna funkcija daje rekurzivnu implementaciju binarnog pretraživanja. Poziv `binarna_pretraga(a, l, d, x)` vraća indeks elementa niza `a` između `l` i `d` (uključujući i njih) koji je jednak zadatoj vrednosti `x` ako takav postoji i `-1` inače. Dakle, ukoliko se želi pretraga celog niza, funkciju treba pozvati sa `binarna_pretraga(a, 0, n-1, x)`.

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

Složenost ove funkcije je O(log n) a njena korektnost se dokazuje jednostavno, pri čemu se pretpostavlja da je niz a sortiran.

**Primer.** Oba rekurzivna poziva u prethodnoj funkciji su bila repno-rekurzivna, tako da se mogu jednostavno eliminisati. Time se dobija iterativna funkcija koja vraća indeks elementa niza `a` koji je jednak zadatoj vrednosti `x` ako takva postoji i `-1` inače.

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
