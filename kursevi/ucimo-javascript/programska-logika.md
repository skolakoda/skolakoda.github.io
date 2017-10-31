---
title: Logički tok programa
layout: lekcija-js
author: damjan
permalink: /programska-logika
tags: [uvod, programiranje, logika]
image: /images/koncepti/logika/skretnica.jpg
---

![]({{page.image}})

***Programiranje se u svojoj suštini svodi na logiku. Svaki netrivijalan program koji ikada napišete, imaće neku vrstu programske logike u sebi. U logici, istinosna je svaka tvrdnja na koju se može odgovoriti sa jeste ili nije.***

Programska logika se sastoji u postavljanju uslova - ako je korisnik punoletan, prikaži sadržaj, ako nije, onda ništa. Proste uslove pravimo pomoću poređenja (jel ima 18 ili više godina), a složene spajanjem više poređenja (ima 18 godina i prihvatio je uslove korištenja i platio). I to je sve, to je suština programiranja.

## Operatori poređenja (manje, veće, jednako)

Glavni operatori poređenja su:

* jel **veće** (`>`)
* jel **manje** (`<`)
* jel **jednako** (`==`)
* jel **nejednako** (`!=`)

Postoje i dva kombinovana operatora, koja takođe često koristimo:

* jel **veće ili jednako** (`>=`)
* jel **manje ili jednako** (`<=`)

Operatori rade tako što im prosledimo dve vrednosti (sa leve i desne strane), a kao rezultat dobijemo `true` ili `false`. Na primer:

{:.ulaz}
```js
2 < 3
```

{:.ulaz}
```js
4 >= 5
```

Zbog toga što operišu nad dve vrednosti, zovu se dvojni tj. binarni operatori. Možemo ih kombinovati sa matematičkim operacijama, na primer:

{:.ulaz}
```js
2 + 2 == 5
```

### Jednakost i identičnost

U nekim jezicima postoji razlika između jednakosti i identičnosti:

* jel **jednako** (`==`), tj. iste vrednosti
* jel **identično** (`===`), tj. iste vrednosti i istog tipa

Tako, poređenje jednakosti i identičnosti daje različite razultate:

{:.ulaz}
```js
2 == "2"
```

{:.ulaz}
```js
2 === "2"
```

Sve ovo možete odmah isprobati uživo ili u konzoli pregledača.

## Logički operatori (i, ili, ne)

Glavni logički operatori koji se koriste u programiranju su:

* **i** (`&&`)
* **ili** (`||`)
* **ne** (`!`)

Kao i u govornom jeziku, `i` i `ili` su veznici, a `ne` je negacija. Njihova upotreba je dosta intuitivna:

* Kupi hleb i mleko i jaja (mora sve)
* Kupi hleb ili mleko ili jaja (mora bar jedno)

U programiranju, logičke operatore koristimo za spajanje više logičkih vrednosti u složeni uslov. Na primer, veznikom `&&` proveravamo da li je korisnik punoletan i prihvatio je uslove korištenja i platio:

{:.ulaz}
```js
godine = 19
platio = true
prihvatio = true

godine >=18 && platio && prihvatio
```

Veznikom `||` možemo proveriti da li korisnik pripada nekoj od povlaštenih kategorija za javni prevoz:

{:.ulaz}
```js
student = false
penzioner = false
invalid = false
nezaposlen = true

student || penzioner || invalid || nezaposlen
```

Logički operatori se formalno predstavljaju pomoću istinosnih tablica, koje popisuju sve moguće ulaze i njihove ishode.

{:.small-table}
| p | q | p && q  | p \|\| q | ! p |
|---|---|---------|----------|-----|
| T | T | T       | T        | F   |
| T | F | F       | T        | F   |
| F | T | F       | T        | T   |
| F | F | F       | F        | T   |

## Uslovi

Uz pomoć operatora poređenja i veznika, možemo postavljati najrazličitije vrste uslovnih izraza, kao što su:

* ako (`if`)
* ako...inače (`if...else`)
* inače ako (`else if`)
* skretnica (`switch`)

### ako (`if`)

Najprostiji uslovni izraz je ako (`if`). Sastoji se od samog uslova, i ishoda koji se izvršava ako je uslov zadovoljen.

```js
const godine = 19

if (godine >= 18)
  console.log('Možeš pristupiti sajtu.')
```

Sve postaje mnogo realnije kad dodamo interakciju sa korisnikom, komandom `prompt()`:

```js
const godine = prompt('Unesi svoje godine')

if (godine >= 18)
  console.log('Možeš pristupiti sajtu.')
```

Ako imamo više linija koje treba uslovno izvršiti, onda su nam neophodne vitičaste zagrade (`{}`) oko njih:

```js
const godine = prompt('Unesi svoje godine')

if (godine >= 18) {
  console.log('Možeš pristupiti sajtu.')
  console.log('Dobrodošao korisniče.')
}
```

### ako...inače (`if...else`)

Ako želimo da izvršimo određenu operaciju kada uslov nije zadovoljen, dodajemo ključnu reč `else` (inače):

```js
const godine = prompt('Unesi svoje godine')

if (godine >= 18)
  console.log('Možeš pristupiti sajtu.')
else
  console.log('Nažalost, ne možeš pristupiti sajtu.')
```

### inače ako (`else if`)

Ako želimo više uslova sa različitim ishodima, onda između `if` i `else` dodajemo ključne reči `else if`:

```js
const ime = prompt('Unesi svoje korisničko ime')

if (ime == 'admin')
  console.log('Možeš pristupiti administratorskoj tabli.')
else if (ime == 'korisnik')
  console.log('Možeš pristupiti korisničkom sajtu.')
else if (ime == 'gost')
  console.log('Možeš pristupiti nekim delovima sajta.')
else
  console.log('Nažalost, ne možeš pristupiti sajtu.')
```

### skretnica (`switch`)

`switch` je pregledniji način pisanja višestrukih uslova. Na primer, prethodni uslov možemo napisati u vidu skretnice:

```js
const ime = prompt('Unesi svoje korisničko ime')

switch(ime) {
  case 'admin':
    console.log('Možeš pristupiti administratorskoj tabli.')
    break
  case 'korisnik':
    console.log('Možeš pristupiti korisničkom sajtu.')
    break
  case 'gost':
    console.log('Možeš pristupiti nekim delovima sajta.')
    break
  default:
    console.log('Nažalost, ne možeš pristupiti sajtu.')
}
```

Primetite kočnicu (`break`) koja stoji nakon svakog ishoda. Probajte da je izbacite i vidite kako će se vaš program ponašati.
