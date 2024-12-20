---
title: Vežbe sa strunama
layout: lekcija-c
permalink: /vezbe-sa-strunama
---

Zadaci za vežbanje osnovnih računskih operacija sa strunama. Rešenja su data u raznim programskim jezicima.

### ASCII kodovi

Napiši program za ispis velikih slova od A do Z i njihovih ASCII kodova

{:.ulaz.resenje}
```c
#include <stdio.h>
main()
{
    char ch;
    for (ch = 'A'; ch <= 'Z'; ch++) {
      printf("ASCII kod za %c je %d\n", ch, ch);
    }
}
```

### Učestalost karaktera

Napiši program za izračunavanje broja pojavljivanja traženog karaktera u tekstu.

{:.ulaz.resenje}
```c
#include <stdio.h>
#include <string.h>

main()
{
    char trazeni_karakter = 'a';
    char tekst[] = "Moje je ime Davorin Bogović, a ovo sve oko mene je crno-bijeli svijet.";
    int duzina = strlen(tekst);
    int broj_javljanja = 0;
    int i;

    for (i = 0; i <= duzina; i++)
        if (tekst[i] == trazeni_karakter)
            broj_javljanja++;
    printf("Broj pojavljivanja karaktera '%c' u tekstu je %d.", trazeni_karakter, broj_javljanja);
}
```

### Poređenje učestalosti karaktera

Napiši program koji proverava da li tekst sadrži više slova 'a' ili 'e' (računaju se velika i mala).

{:.ulaz.resenje}
```c
#include <stdio.h>
#include <string.h>

int main() {
    char r[] = "Svako bi trebalo da nauči da programira, jer to te uči kako da misliš.";
    int i, brojac_a = 0, brojac_e = 0;
    int n = strlen(r);

    for(i=0; i<n; i++) {
        if(r[i]=='A' || r[i]=='a')
            brojac_a++;
        if(r[i]=='E' || r[i]=='e')
            brojac_e++;
    }

    if (brojac_a > brojac_e)
        printf("Tekst sadrzi vise slova a.");
    else if (brojac_e > brojac_a)
        printf("Tekst sadrzi vise slova e.");
    else
        printf("Ima isti broj slova a i e.");

    return 0;
}
```

### Vesela slova

Napiši funkciju koja prima tekst i vraća novi tekst gde su svi samoglasnici velika, a svi suglasnici mala slova.

Na primer, ako prosledimo "U rupi pod zemljom živeo je hobit", funkcija vraća "U rUpI pOd zEmljOm žIvEO jE hObIt".

{:.ulaz.resenje}
```js
function veselaSlova(tekst) {
  return tekst
    .toLowerCase()
    .replace(/a/g, 'A')
    .replace(/e/g, 'E')
    .replace(/i/g, 'I')
    .replace(/o/g, 'O')
    .replace(/u/g, 'U')
}

console.log(veselaSlova('U rupi pod zemljom živeo je hobit.'))
```

Napredno rešenje:

{:.ulaz.resenje}
```js
function veselaSlova(tekst) {
  return tekst
    .toLowerCase()
    .replace(/([aeiou])/g, s => s.toUpperCase())
}

console.log(veselaSlova('U rupi pod zemljom živeo je hobit.'))
```

### Reč unatraške

Napiši funkciju koja vraća ulazni tekst obrnut unatraške.

{:.ulaz.resenje}
```js
function obrni(recenica) {
  let obrnuto = ''
  for (i = recenica.length - 1; i >= 0; i--)
    obrnuto += recenica[i]
  return obrnuto
}

console.log(obrni('Ana voli Milovana'))
```

### Broj velikih slova

Napiši program koji broji koliko je velikih slova u rečenici.

{:.ulaz.resenje}
```c
#include <stdio.h>
#include <string.h>

int main() {
    char r[] = "Prvo, reši problem. Onda, piši kod.";
    int i, n, brojac=0;

    n=strlen(r);

    for(i=0;i<n;i++)
        if(r[i]>='A' && r[i]<='Z')
            brojac++;

    printf("Broj velikih slova u recenici je %d", brojac);

    return 0;
}
```

### Najduža reč

Ispiši koliko slova ima najduža riječ u tekstu.

{:.ulaz.resenje}
```c
#include <stdio.h>
#include <string.h>

int main() {
    char r[] = "Debagovanje je dvostruko teže od pisanja koda.";
    int n, i, j, broj=1, pocetak, max=0;

    n = strlen(r);

    for (i=0; i<n; i++) {
        if(r[i]==' ' && i!=n-1)
            broj++;
    }

    pocetak = 0;

    for (i=1; i<=broj; i++) {
        j=0;
        while (r[pocetak+j] != ' ' && pocetak+j != n)
            j++;

        if (j > max)
            max = j;

        pocetak = pocetak + j + 1;
    }

    printf("Najduza rec ima %d slova", max);

    return 0;
}
```

## Literatura

- [Zadaci iz Programskog jezika C](http://www.its.edu.rs/reseni-primeri-iz-programskog-jezika-c-3/)
- [Zbirka programskih rešenja u JavaScript jeziku](http://www.sabackagimnazija.edu.rs/files/materijali/webDizajn/Zbirka.htm)
