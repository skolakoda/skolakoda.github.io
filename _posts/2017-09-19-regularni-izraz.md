---
title: Regularni izrazi
layout: post
tags: [regex, strune, pretraga]
author: damjan
image: /images/jezici/regex.jpg
---

![regex]({{page.image}})

***Regularni izraz je jezik za opisivanje obrazaca. Koristi se za naprednu tekstualnu pretragu. Podržan je unutar mnogih programskih jezika. Prilično je nečitak, ali veoma koristan u radu sa znakovnim podacima.***

Regularni izrazi (**regex**) proširuju mogućnosti manipulacije tekstom, pomoću funkcija kao što su:

- `match()`
- `replace()`
- `search()`

Primena regularnih izraza može varirati od jezika do jezika. U Javaskriptu regularni izraz ima dva dela, izraz (oivičen kosim crtama) i opcione modifikatore:

```
/izraz/modifikatori
```

Modifikatori mogu biti:

- i (*insensitive*) - neosetljivost na mala i velika slova
- g (*global*) - sva podudaranja (inače samo prvo)
- m (*multiline*) - pretraga u više redova teksta

U programu za pronalaženje psovki, to bi izgledalo ovako:

```js
const izjava = "Ti si govno!"
const izraz = /govno/i

if (izjava.match(izraz))
  alert ("Izjava sadrži uvredljiv izraz.")
else
  alert ("Izjava ne sadrži uvredljiv izraz.")
```

## Početak i kraj (`^`, `$`)

Ako stavimo kapicu (`^`) ispred izraza koji tražimo, onda taj izraz mora biti na samom početku teksta.

```js
const izjava = "Ti si moj prijatelj!"
const izraz = /^prijatelj/

if (izjava.match(izraz))
  alert ("Izjava počinje traženim izrazom.")
else
  alert ("Izjava ne počinje traženim izrazom.")
```

Ukoliko stavimo znak dolara (`$`) iza izraza koji tražimo, onda taj izraz mora biti na samom kraju teksta.

## Grupisanje (`[]`) i negacija (`^`)

Kada grupišemo više znakova u uglaste zagrade, regex traži alternativno bilo koji od njih:

```
[abc]    traži bilo koje slovo a, b ili c
[123]    traži bilo koji broj 1, 2 ili 3
[NG]eo   traži Neo ili Geo
```

Kapica (`^`) unutar uglastih zagrada ima značenje negacije:

```
[^abc]   traži bilo koji znak a da nije a, b, c
[^123]   traži bilo koji znak a da nije 1, 2, 3
```

Crta (`-`) unutar uglastih zagrada označava raspon:

```
[a-z]    traži sva mala slova od a do z
[A-Z]    traži sva velika slova od A do Z
[a-Z]    traži sva slova
[0-9]    traži sve brojeve od 0 do 9
[^5-9]   traži sve brojeve koji nisu u rasponu od 5 do 9
```

Napomena: crtica izvan uglastih zagrada je samo crtica.

## Broj pojavljivanja (`?`, `+`, `*`, `{}`)

Znak pitanja (`?`) znači da se prethodni znak javlja opciono (0 ili jedanput).

```
rj?ečnik traži rečnik i rječnik
```

Slično, zvezdica (`*`) znači da se prethodni znak javlja opciono, 0 ili više puta.

Plus (`+`) znači da se prethodni znak javlja obavezno, 1 ili više puta zaredom.

Broj `n` unutar vitičastih zagrada `{}` znači da se prethodni obrazac javlja n puta:

```
[0-9]{4} traži bilo koji četvorocifreni broj
```

Kvantifikator `{n1,n2}` znači da se prethodni obrazac javlja najmanje `n1` puta, ali ne više od `n2` puta:

```
[0-9]{3, 6} traži sve brojeve između trocifrenih i šestocifrenih
```

Kvantifikator `{n,}` znači da se prethodni znak javlja najmanje n puta.

## Posebni karakteri (`\d`, `\D`, `\w`, `\W`, `\s`, `\S`)

Posebni znaci odnosno metakarakteri su znaci sa specijalnim značenjem.

```
.       bilo koji znak
\w      slovo
\W      ne-slovo
\d      broj
\D      ne-broj
\s      praznina
\S      ne-praznina
\n      nova linija
\t      tab
```

## Podizrazi (`()`)

Obične zagrade `()` mogu služiti da grupišemo delove izraza, što se naziva podizraz.

```
(Dobar)( )(dan)    traži Dobar dan
(\w+)\W+(\w+)      traži slova prazninu slova
```

## Alternativa (`|`)

Vertikalna crta ili cev (`|`) označava alternativu.

```
(W|L)in   nalazi Win u Windows
          nalazi Lin in Linux
```

## JS metode za regularni izraz

Metoda      | Opis
---         | ---
`exec`      | `RegExp` metoda. Traži obrazac u struni. Vraća niz informacija.
`test`      | `RegExp` metoda. Traži obrazac u struni. Vraća true ili false.
`match`     | `String` metoda. Traži obrazac u struni. Vraća niz informacija ili `null`.
`search`    | `String` metoda. Traži obrazac u struni. Vraća `index` obrasca ili `-1`.
`replace`   | `String` metoda. Traži obrazac u struni, i zamenjuje obrazac prosleđenim.
`split`     | `String` metoda. Koristi regularni izraz ili strunu da razbije strunu u niz.
