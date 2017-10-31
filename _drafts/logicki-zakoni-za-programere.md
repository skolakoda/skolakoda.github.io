---
title: Logički zakoni za programere
layout: post
author: damjan
tags: [logika, uslovi, racunarska-nauka]
---

***Naravno, logika je nauka za sebe, ali postoji nekoliko logičkih zakona koji nam mogu olakšati život, prilikom pisanja složenih uslova.***

![Formalna logika](https://www.antikvarijat-phoenix.com/pic_nas/0051249.jpg)

## Zakon asocijacije

Zakon asocijacije kaže da zagrade nisu bitne, kada povezujemo logičke iskaze istim operatorom:

```
p && (q && r) === (p && q) && r
p || (q || r) === (p || q) || r
```

Analogiju možemo naći u matematici, gde su u operatori množenja i sabiranja takođe asocijativni (za razliku od deljenja i oduzimanja).

## Zakon distribucije

proveriti na wiki i stack overflow!

Zakoni distribucije definišu razlaganje složenih izraza, i mogu poslužiti razlaganju uslova u kodu:

```
p && (q || r) === (p && q) || (p && r)
p || (q && r) === (p || q) && (p || r)
```

Zakon distribucije se može ilustrovati sličnim pravilom u algebri:

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

- `p && q` je lažno ako je bar jedna od promenljivih lažna;
- `p || q` je lažno ako su obe promenljive lažne;

U kodu bi njihova primena izgledala otprilike ovako:
```js
!(punoletan && prihvatioUslove)
```
je identično sa:
```js
!punoletan || !prihvatioUslove
```

Dok drugi Morganov zakon u kodu:
```js
!(punoletan || prihvatioUslove)
```
refaktorisanjem postaje:
```js
!punoletan && !prihvatioUslove
```

## Zaključak

Programeri su često skloni improvizaciji kada rade sa složenim uslovima, što u nekim slučajevima može biti kobno. Bolje je osloniti se na zakone logike i uštedeti posao testerskom (QA) odeljenju.


Izvor: dr Milan Kovačević, *Formalna logika*, Novi Sad, 1980.
