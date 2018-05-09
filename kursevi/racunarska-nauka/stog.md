---
title: Stog ili plast (<i>stack</i>)
layout: lekcija-racunarstvo
permalink: /stog
image: /images/koncepti/podaci/stack.jpg
---

![]({{page.image}})

Polja (nizovi) i povezane liste dozvoljavaju dodavanje i brisanje elemenata na bilo kojem mjestu – početku, kraju ili između. Postoje određene situacije u programiranju kada želimo ograničiti dodavanja i brisanja elemenata samo na kraj ili početak liste. **Linearna struktura u kojoj se elementi mogu dodavati ili oduzimati samo na jednom kraju zove se stog.**

## Osnovne operacije

Osnovne operacije na stogu su:
* dodavanje (umetanje) elementa na stog (eng. *push*)
* brisanje (oduzimanje) elementa iz stoga (eng. *pop*)

Nije moguće izvaditi ili umetnuti bilo koji element iz sredine prije nego se "skinu" svi elementi iznad njega. Iz toga slijedi da je zadnji dodani element ujedno i onaj koji će se prvi izvaditi. Stoga je drugi uobičajeni naziv za strukturu stoga : **LIFO** (eng. *last in – first out*). Drugim riječima stog je struktura podataka kod koje se posljednji pohranjeni podatak prvi uzima u obradu.

![](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg)

## Implementacija

Premda se čini da je stog vrlo restriktivna struktura podataka, on ima brojne vrlo važne primjene u računalnoj znanosti. Prikaz i manipulacija sa stogom može se realizirati statičkom strukturom podataka. U jednodimenzionalno polje zadane strukture dodaju se ili brišu pojedine stavke po principu "LastInFirstOut" (LIFO). **Pojedina operacija dodaj ili briši zahtijeva jednako vremena bez obzira na broj pohranjenih podataka.** Situacija da je stog pun može zahtijevati alociranje
dodatne memorije i ponovno izvođenje programa. Prazan stog ne mora značiti pogrešku.

Struktura stoga često se upotrebljava u situacijama kada određene korake obrade treba odgoditi do trenutka ispunjenja drugih uvjeta.

## Primer

Prosta implementacija stoga u Javascriptu:

{:.ulaz}
```js
stack = []
stack.push(2)             // stack is now [2]
stack.push(5)             // stack is now [2, 5]
element = stack.pop()     // stack is now [2]
console.log(element)      // displays 5
```

Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
