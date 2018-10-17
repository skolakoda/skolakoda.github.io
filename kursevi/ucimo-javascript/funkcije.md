---
title: Funkcije
layout: lekcija-js
permalink: /javascript-funkcije
---

**Najprostije, funkcija je parče koda čije izvršenje odlažemo za kasnije.** 

Pored toga, funkcije nam pomažu da organizujemo kod u smislene celine, kao i da više puta izvršimo isti blok koda, bez kopiranja.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MO9WKt7CRI8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Pisanje funkcije

Najprostija sintaksa JS funkcije je sledeća:

```js
function ime(parametri){
  // telo funkcije, koje sadrži izraze ili naredbe
}
```

Dodavanje parametara funkciji je opciono. 

## Vraćanje vrednosti (`return` naredba)

Postoje funkcije koje vraćanju vrednost (pomoću `return` naredbe) i one koje ne vraćaju. One koje vraćaju vrednost (imaju ulaz i izlaz) nazivamo **funkcije u užem smislu**, dok one koje obavljaju niz radnji bez vraćanja vrednosti nazivamo **procedure**.

`return` naredba obustavlja dalje izvršenje funkcije, tako da se obično koristi na kraju.

### Funkcije koja vraćaju vrednost

Kada funkcije vraćanju vrednost, tu novoizračunatu vrednost možemo koristiti dalje u programu. Na primer, rezultat funkcije `saberi` možemo dodeliti varijabli:

```js
function saberi(x, y) {
  return x + y
}

const rezultat = saberi(33, 44)
```

Kasnije sa ovim rezultatom možemo raditi šta želimo.

### Funkcije koja ne vraćaju vrednost

Funkcije koja ne vraćaju vrednost obično služe da obave neku proceduru, npr. štampanje ispisa u konzolu:

{:.ulaz}
```js
function pozdrav(ime) {
  console.log('Zdravo korisniče ' + ime)
}

pozdrav('Vatroslav')
```

Ako pokušamo da dodelimo rezultat ove funkcije nekoj varijabli, dobićemo `undefined`. Funkcije koje ne vraćaju vrednost, podrazumevano vraćaju `undefined`.