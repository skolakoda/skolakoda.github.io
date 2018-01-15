---
title: Logički zakoni za programere
layout: refaktorisanje
author: damjan
permalink: /logicki-zakoni-za-programere
---

***Logika je nauka za sebe, ali postoji nekoliko logičkih zakona koji nam mogu olakšati život, prilikom pisanja složenih uslova.***

![Formalna logika](https://www.antikvarijat-phoenix.com/pic_nas/0051249.jpg)

## Zakon asocijacije

Zakon asocijacije kaže da zagrade nisu bitne, kada povezujemo logičke iskaze istim operatorom:

```
p && (q && r) === (p && q) && r
p || (q || r) === (p || q) || r
```

Analogiju možemo naći u matematici, gde zagrade takođe nisu bitne ako imamo samo operacije množenja ili sabiranja, koje su asocijativne (za razliku od deljenja i oduzimanja).

## Zakoni distribucije

Zakoni distribucije definišu razlaganje složenih izraza, i mogu poslužiti razlaganju uslova. Prvi zakon distribucije izgleda ovako:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/f6e44e66770303cef4cf29e118b8e6966ccd6fbf)

```
p && (q || r) === (p && q) || (p && r)
```

Drugi zakon distribucije izgleda ovako:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/b320f1fbd3369ea11f930908122d66148d3073f0)

```
p || (q && r) === (p || q) && (p || r)
```

Ovi zakoni se oslanjaju na svojstvo distributivnosti, koje postoji i u algebri:

```
a * (b + c) = a * b + a * c
```

## De Morganovi zakoni

De Morganovi zakoni su veoma primenjivi u refaktorisanju uslovnih izraza.

```
!(p && q) === !p || !q
!(p || q) === !p && !q
```

Oni zapravo predstavljaju, simboličkim jezikom izraženu, definiciju konjunkcije i disjunkcije:

- `p i q` je lažno ako je bar jedna promenljiva lažna;
- `p ili q` je lažno ako su obe promenljive lažne;

## Primena

U kodu bi primena prvog De Morganovog zakona izgledala ovako:

```js
!(punoletan && prihvatioUslove)
```

je identično sa:

```js
!punoletan || !prihvatioUslove
```

Dok drugi De Morganov zakon u kodu:

```js
!(punoletan || prihvatioUslove)
```

refaktorisanjem postaje:

```js
!punoletan && !prihvatioUslove
```

## Zaključak

Programeri su često skloni improvizaciji kada rade sa složenim uslovima, što u nekim slučajevima može biti kobno. Bolje je osloniti se na zakone logike i uštedeti posao testerskom (QA) odeljenju.


Literatura: dr Milan Kovačević, *Formalna logika*, Novi Sad, 1980.
