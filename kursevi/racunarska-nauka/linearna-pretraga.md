---
title: Linearna pretraga
layout: lekcija-racunarstvo
permalink: /linearna-pretraga
image: /images/koncepti/algoritmi/linearna-pretraga.png
---

![]({{page.image}})

**Linearno (ili sekvencijalno) pretraživanje je zasnovano na ispitivanju redom elemenata niza dok se ne nađe traženi element.**

Vremenska složenost algoritma je linearna po dužini niza. Ukoliko se u nizu od n elemenata traži element koji je jednak zadatoj vrednosti (ako su elementi slučajno raspoređeni), u prosečnom slučaju ispituje se n/2, u najboljem 1, a u najgorem n elemenata niza.

## Primer: pretraga niza

Funkcija vraća indeks prvog pojavljivanja celog broja `x` u nizu `a` dužine `n`, ili vrednost -1, ako se taj ne pojavljuje:

```c
int linearna_pretraga(int a[], int n, int x) {
  int i;
  for (i = 0; i < n; i++)
    if (a[i] == x)
      return i;
  return -1;
}
```

Složenost ove funkcije je O(n), a njena korektnost se dokazuje jednostavno. Česta greška prilikom implementacije linearne pretrage je prerano vraćanje negativne vrednosti:

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

## Rekurzivna pretraga niza

Linearna pretraga može biti realizovana i rekurzivno. Pozivom `linearna_pretraga(a, i, n, x)` nalazi se indeks prvog pojavljivanja elementa `x` u nizu `a[i, n-1]`. Kako bi se izvršila pretraga celog niza, potrebno je izvršiti poziv `linearna_pretraga(a, 0, n, x)`, pri čemu je `n` dužina niza.

```c
int linearna_pretraga(int a[], int i, int n, int x) {
  if (i == n)
    return -1;
  if (a[i] == x)
    return i;
  return linearna_pretraga(a, i+1, n, x);
}
```

Ukoliko se zadovoljimo pronalaženjem poslednjeg pojavljivanja elementa `x`, kod se može dodatno uprostiti.

```c
int linearna_pretraga(int a[], int n, int x) {
  if (n == 0)
    return -1;
  else if (a[n - 1] == x)
    return n-1;
  else return linearna_pretraga(a, n-1, x);
}
```

U oba slučaja rekurzivni pozivi su repno rekurzivni. Eliminacijom repne rekurzije u prvom slučaju se dobija prikazana iterativna implementacija. Eliminacijom repne rekurzije u drugom slučaju se dobija:

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

## Primer: pretraga strune

Naredna funkcija vraća indeks poslednjeg pojavljivanja zadatog karaktera `c` u niski `s` ili vrednost `-1`, ako se ne pojavljuje:

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

## Primer: traženje najvećeg broja

Naredna funkcija vraća indeks najvećeg elementa među prvih `n` elemenata niza `a`:

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


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
