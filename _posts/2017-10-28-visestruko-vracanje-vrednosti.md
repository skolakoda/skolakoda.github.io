---
title: Višestruko vraćanje vrednosti
layout: post
author: damjan
image: /images/apstraktno/cigle.jpg
tags: [refaktorisanje, funkcije, uslovi]
---

<img src="{{page.image}}" class="full">

***Svima je poznato da funkcije vraćaju vrednost, ali manje je poznato da funkcije mogu sadržati više `return` naredbi.***

Često smo u situaciji da proveravamo više različitih scenarija - ako nije jedan, onda je drugi, ako nije drugi, onda je treći, i tako dalje. Na kraju, kada konačno odlučimo koja je vrednost validna, vraćamo je iz funkcije:

```js
function chooseTax() {
  let tax
  if (isRed) tax = redTax
  else if (isGreen) tax = greenTax
  else if (isYellow) tax = yellowTax
  else tax = defaultTax
  return tax
}
```

Međutim, možemo se osloboditi privremene `tax` varijable, kao i `else if` grananja, tako što uvedemo vraćanje više vrednosti iz funkcije:

```js
function chooseTax() {
  if (isRed) return redTax
  if (isGreen) return greenTax
  if (isYellow) return yellowTax
  return defaultTax
}
```

Funkcija nakon `return` naredbe prestaje da se izvršava, tako da `else if` i  `else` ogranci nisu potrebni. Čim uslov bude zadovoljen, program izlazi iz funkcije, a ako ni jedan uslov nije zadovoljen, onda se vraća poslednja (podrazumevana) vrednost.

Kod složenije uslovne logike ova vrsta refaktorisanja može činiti značajno pojednostavljenje.
