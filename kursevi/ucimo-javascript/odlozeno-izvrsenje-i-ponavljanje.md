---
title: "Odloženo izvršenje i ponavljanje (<code>setTimeout</code> i <code>setlnterval</code>)"
layout: lekcija-js
permalink: /odlozeno-izvrsenje-i-ponavljanje
---

**Metodi `setTimeout()` i `setlnterval()` omogućavaju da zakažemo izvršenja koda.** 

Metod `setTimeout()` izvršava određeni kod jednom nakon što je zadat broj milisekundi. Metod `setlnterval()` izvršava kod više puta nakon što je prošao zadati broj milisekundi. 

## `setTimeout`

Ovaj kod prikazuje upozorenje nakon dve sekunde (2000 milisekundi):

{:.ulaz}
```js
setTimeout(() => console.log('Zdravo!'), 2000)
```

Funkcija `setTimeout` vraća broj, odnosno ID vre­menskog zakazivanja, koji možemo koristiti da otkažemo izvršenje pomoću `clearTimeout()` metode. Na primer:

```js
const id = setTimeout(() => console.log('Zdravo!'), 2000)
// neka logika
clearTimeout(id)
```

## `setlnterval`

Pomoću funkcije `setlnterval()` možete da zakažete izvršenje metoda `boo()` na svake dve sekunde, sve dok ne otkažete zakazano izvršenje pomoću funkcije `cleanlnterval()`. Razmotrite sledeći kod:

```
> var id = setlnterval(boo, 2000)
boo
boo
boo
boo
boo
boo
> clearlnterval(id)
```

Primetićete da obe funkcije prihvataju pokazivač za funkciju povratnog poziva kao prvi parametar. Takođe mogu da prihvate string, koji se izračunava pomoću funkcije `eval()`. Međutim, kao što znate, funkcija eval ( ) je „zla“, pa je treba izbegavati. Šta da radite ako želite da prosledite argumente funkciji? U tom slučaju možete samo da smestite poziv funk­cije unutar druge funkcije.

Sledeći kod je ispravan, ali se ne preporučuje da ga koristite:

```js
// bad idea
var id = setlnterval("alert('boo, boo')", 2000);

Ovo je alternativni kod koji bi trebalo da koristite:

var id = setlnterval(
  function () {
    alert('boo, boo');
  }, 2000
);
```

Imajte na umu da zakazivanje izvršenja funkcije u određenim milisekundima nije garancija da će one biti izvršene tačno na vreme. Jedan od razloga je činjenica da većina pregledača nema vremensku rezoluciju u milisekundama. Ako zakažete da se nešto izvrši za tri milisekunde, izvršiće se nakon najmanje 15 milisekundi u starijim IE pregledačima i nešto ranije u drugim savremenim pregledačima, ali najverovatnije ne za jednu milisekundu. Drugi razlog je to što pregledači izvršavaju funkcije koje ste im zadali po redosledu. Vremensko ograničenje od 100 milisekundi znači da se stavke dodaju u red nakon 100 milisekundi. Međutim, ako izvršavanje po redosledu kasni, vaša funkcija će morati da čeka i da se izvrši nakon, recimo, 120 milisekundi.
