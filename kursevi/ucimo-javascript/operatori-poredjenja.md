---
title: Operatori poređenja
layout: lekcija-js
author: damjan
permalink: /operatori-poredjenja
---

Glavni operatori poređenja (ili relacijski operatori) su:

* jel **veće** (`>`)
* jel **manje** (`<`)
* jel **jednako** (`==`)
* jel **nejednako** (`!=`)

Postoje i dva kombinovana operatora, koja takođe često koristimo:

* jel **veće ili jednako** (`>=`)
* jel **manje ili jednako** (`<=`)

Prosleđujemo im dve vrednosti (sa leve i desne strane), a kao rezultat dobijemo `true` ili `false`. Na primer:

{:.izraz}
```js
2 < 3
```

{:.izraz}
```js
4 >= 5
```

Takođe ih možemo kombinovati sa matematičkim operacijama, na primer:

{:.izraz}
```js
2 + 2 == 5
```

Zbog toga što operišu nad dve vrednosti, spadaju u dvojne, odnosno binarne operatore. 

## Jednakost i identičnost

U nekim jezicima postoji razlika između jednakosti i identičnosti:

* jel **jednako** (`==`), jel iste vrednosti
* jel **identično** (`===`), jel iste vrednosti i istog tipa

Provera jednakosti i identičnosti u nekim slučajevima daje različite razultate:

{:.izraz}
```js
2 == "2"
```

{:.izraz}
```js
2 === "2"
```

Sve ovo možete odmah isprobati uživo ili u konzoli pregledača.
