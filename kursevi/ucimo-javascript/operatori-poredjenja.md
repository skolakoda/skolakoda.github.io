---
title: Operatori poređenja u Javascriptu
layout: lekcija-js
author: damjan
permalink: /operatori-poredjenja
---

Operatori poređenja ili relacijski operatori u Javascriptu, kao i mnogim drugim jezicima, su sledeći:

OPERATOR | NAZIV OPERATORA | UPOTREBA | OPIS
---|---------|--------|----------------------
== | jednako | a == b | proverava da li je a jednako b
!= | nejednako | a != b | proverava da li a nije jednako b
<  | manje od | a < b | proverava da li je a manje od b
<= | manje ili jednako | a <= b | proverava da li je a manje ili jednako b
>  | veće od | a > b | proverava da li je a veće od b
>= | veće ili jednako | a >= b | proverava da li je a veće ili jednako b

Svi operatori poređenja daju vrednost `true` ili `false`.

## Upotreba

Operatorima poređenja prosleđujemo dve vrednosti (sa leve i desne strane), a kao rezultat dobijemo `true` ili `false`. Na primer:

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

U Javascriptu postoji razlika između jednakosti i identičnosti:

* jel **jednako** (`==`), odnosno jel iste vrednosti
* jel **identično** (`===`), odnosno jel iste vrednosti i istog tipa

Provera jednakosti i identičnosti u nekim slučajevima daje različite razultate:

{:.izraz}
```js
2 == "2"
```

{:.izraz}
```js
2 === "2"
```

{:.uokvireno.ideja}
Sve ovo možete odmah isprobati uživo ili u konzoli pregledača.
