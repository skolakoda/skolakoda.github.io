---
title: Bitovni operatori
layout: post
tags: [bitovi, brojevi, c, racunarska-nauka]
image: /images/ljudi/programerka.jpg
---

![]({{page.image}})

***Za neka računanja, efikasnija rešenja mogu se dobiti korišćenjem pojedinačnih bitova nekog broja. Bitovni operatori rade slično kao logički, s tim što tretiraju svaku cifru binarnog broja pojedinačno.***

Naredni primeri su dati u jeziku C, gde je moguće primenjivati bitovske operatore samo na celobrojne argumente.

## Bitovsko i (`&`)

Primenom ovog operatora vrši se konjunkcija pojedinačnih bitova dva navedena argumenta (`n`-ti bit rezultata predstavlja konjunkciju `n`-tih bitova argumenata). Na primer, ukoliko su promenljive `x1` i `x2` tipa `unsigned char` i ukoliko je vrednost promenljive `x1 = 74`, a promenljive `x2 = 87`, vrednost izraza `x1 & x2` jednaka je 66.

Naime, broj 74 se binarno zapisuje kao `01001010`, broj 87 kao `01010111`, i konjunkcija njihovih pojedinačnih bitova daje `01000010`, što predstavlja zapis broja 66.

```
x1 & x2

01001010  // 74
01010111  // 87
--------
01000010  // 66
```

S obzirom da se prevođenje u binarni sistem efikasnije sprovodi iz heksadekadnog sistema nego iz dekadnog, prilikom korišćenja bitovskih operatora konstante se obično zapisuju heksadekadno. Tako bi u prethodnom primeru broj `x1` imao vrednost 0x4A, broj `x2` bi imao vrednost 0x57, a rezultat bi bio 0x42 .

## Bitovsko ili (`|`)

Primenom ovog operatora vrši se disjunkcija pojedinačnih bitova dva navedena argumenta. Za brojeve iz tekućeg primera, rezultat izraza `x1 | x2` bio bi `01011111`, tj. 95.

```
x1 | x2

01001010
01010111
--------
01011111
```

## Bitovsko ekskluzivno ili (`^`)

Primenom ovog operatora vrši se eksluzivna disjunkcija pojedinačnih bitova dva navedena argumenta. Za brojeve iz tekućeg primera, rezultat izraza `x1 ^ x2` bio bi `00011101`, tj. 29.

```
x1 ^ x2

01001010
01010111
--------
00011101
```

## Bitovska negacija (`~`)

Primenom ovog operatora vrši se komplementiranje (invertovanje) svakog bita. Na primer, vrednost 01001010 postaje `10110101`, tj. 181.

```
~x

01001010
--------
10110101
```

## Levo pomeranje (`<<`)

Primenom ovog operatora bitovi prvog argumenta se pomeraju u levo, za broj pozicija naveden kao drugi argument. Početni bitovi prvog argumenta se zanemaruju, dok se na završna mesta rezultata uvek upisuju nule. Levo pomeranje broja za jednu poziciju odgovara množenju sa dva. Na primer, ukoliko promenljiva `x` ima tip `unsigned char` i vrednost 10010101, vrednost izraza `x << 1` je 00101010.

```
x << 1

10010101
--------
00101010
```

## Desno pomeranje (`>>`)

Primenom ovog operatora bitovi prvog argumenta se pomeraju u desno za broj pozicija naveden kao drugi argument. Krajnji bitovi prvog argumenta se zanemarju, a što se tiče početnih bitova rezultata, postoji mogućnost da se oni popunjavaju uvek nulama (tzv. logičko pomeranje) ili da se oni popune vodećim bitom (znakom) prvog argumenta (tzv. aritmetičko pomeranje). Osnovna motivacija aritmetičkog pomeranja je da desno pomeranje broja za jednu poziciju odgovara celobrojnom deljenju sa dva.

U C-u, tip prvog argumenta određuje kako će se vršiti pomeranje. Ukoliko je označen, početni bitovi rezultata će biti postavljeni na vrednost vodećeg bita prvog argumenta. Na primer, ukoliko promenljiva `x` ima tip `signed char` i vrednost `10010101`, vrednost izraza `x >> 1` je `11001010`.

```
x >> 1

10010101
--------
11001010
```

Ukoliko je argument neoznačen, početni bitovi rezultata će biti postavljeni na nulu, bez obzira na vrednost vodećeg bita prvog argumenta. Na primer, ukoliko je tip promenljive `x` `unsigned char`, tada je vrednost izraza `x >> 1` broj `01001010`.

```
x >> 1

10010101
--------
01001010
```

## Bitovske dodele (`&=`, `|=`, `<<=`, `>>=`)

Ovi operatori kombinuju bitovske operatore sa dodelom (analogno, na primer, operatoru `+=`).

## Prioriteti

Kao unarni, operator negacije `~` ima najveći prioritet i desno je asocijativan. Prioritet pomeranja je veći od drugih binarnih bitovskih operatora.

Ostali bitovski operatori imaju prioritet između relacijskih i logičkih operatora i to `&` ima veći prioritet od `^` koji ima veći prioritet od `|`. Ovi operatori imaju levu asocijativnost. Bitovski operatori dodele imaju niži prioritet (jednak ostalim operatorima dodele) i desnu asocijativnost.

Napomenimo da bitovske operatore ne treba mešati sa logičkim operatorima. Na primer, vrednost izraza `1 && 2` je 1 (tačno i tačno je tačno), dok vrednost izraza `1 & 2` je 0 (01 & 10 = 00).

Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
