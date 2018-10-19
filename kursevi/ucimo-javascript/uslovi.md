---
title: Uslovi
layout: lekcija-js
author: damjan
permalink: /uslovi
image: /images/koncepti/logika/skretnica.jpg
redirect_from:
  - /programska-logika
---

![]({{page.image}})

**Programiranje se u znatnoj meri svodi na logiku, odnosno postavljanje uslova.**

Uz pomoć poređenja i logičkih operatora, možemo postavljati najrazličitije vrste uslova. Na primer, ako je korisnik punoletan, prikaži sadržaj, ako nije, onda ništa. Proste uslove pravimo pomoću poređenja (jel ima 18 ili više godina), a složene spajanjem poređenja pomoću logičkih veznika (ima 18 godina i prihvatio je uslove korištenja i platio). I to je sve, to je suština programiranja.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kpa3u-fCBYA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

## Ako (`if`)

Najprostiji uslovni izraz je ako (`if`). Sastoji se od samog uslova, i ishoda koji se izvršava ako je uslov zadovoljen.

{:.ulaz}
```js
const godine = 19

if (godine >= 18)
  console.log('Možeš pristupiti sajtu.')
```

Sve postaje mnogo realnije kad dodamo interakciju sa korisnikom, komandom `prompt()`:

{:.ulaz}
```js
const godine = prompt('Unesi svoje godine')

if (godine >= 18)
  console.log('Možeš pristupiti sajtu.')
```

Ako imamo više linija koje treba uslovno izvršiti, onda su nam neophodne vitičaste zagrade `{}` oko njih:

{:.ulaz}
```js
const godine = prompt('Unesi svoje godine')

if (godine >= 18) {
  console.log('Možeš pristupiti sajtu.')
  console.log('Dobrodošao korisniče.')
}
```

## Ako...inače (`if...else`)

Ako želimo da izvršimo određenu operaciju kada uslov nije zadovoljen, dodajemo ključnu reč `else` (inače):

{:.ulaz}
```js
const godine = prompt('Unesi svoje godine')

if (godine >= 18)
  console.log('Možeš pristupiti sajtu.')
else
  console.log('Nažalost, ne možeš pristupiti sajtu.')
```

## Inače ako (`else if`)

Ako želimo više uslova sa različitim ishodima, onda između `if` i `else` dodajemo ključne reči `else if`:

{:.ulaz}
```js
const uloga = prompt('Unesi svoju ulogu')

if (uloga == 'admin')
  console.log('Možeš pristupiti administratorskoj tabli.')
else if (uloga == 'korisnik')
  console.log('Možeš pristupiti korisničkom sajtu.')
else if (uloga == 'gost')
  console.log('Možeš pristupiti nekim delovima sajta.')
else
  console.log('Nažalost, ne možeš pristupiti sajtu.')
```

## Skretnica (`switch`)

`switch` je pregledniji način pisanja višestrukih uslova. Na primer, prethodni uslov možemo napisati u vidu skretnice:

{:.ulaz}
```js
const uloga = prompt('Unesi svoju ulogu')

switch(uloga) {
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

Primetite kočnicu (`break`) koja stoji nakon svakog ishoda. Probajte da je izbacite i vidite kako će se program ponašati.
