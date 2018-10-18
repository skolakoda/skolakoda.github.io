---
title: Vraćanje vrednosti funkcije (return naredba)
layout: lekcija-js
permalink: /return-naredba
---

Postoje funkcije koje vraćanju vrednost (pomoću `return` naredbe) i one koje ne vraćaju:

* funkcije koje vraćaju vrednost nazivamo **funkcije u užem smislu**
* one koje obavljaju niz radnji bez vraćanja vrednosti nazivamo **procedure**

Naredba `return`, osim što vraća vrednost, takođe obustavlja dalje izvršenje funkcije, tako da se obično koristi na kraju.

### Funkcije koja vraćaju vrednost

Funkcije u užem smislu mapiraju ulaznu vrednost za izlaznu, u skladu sa zadatim pravilima. Kada funkcija vrati vrednost, nju možemo koristiti dalje u programu. Na primer, rezultat funkcije `saberi` možemo dodeliti varijabli:

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

Ako pokušamo da dodelimo rezultat ove funkcije nekoj varijabli, dobićemo `undefined`. 

{:.uokvireno.ideja}
Funkcije koje ne vraćaju vrednost, podrazumevano vraćaju `undefined`.