---
title: Zatvorenost (<i>closure</i>)
layout: lekcija-napredni-js
permalink: /javascript-zatvaranje
---

Da bismo razumeli *closure* (zatvorenost), potrebno je razumeti [opseg važenja](/opseg-vazenja-varijabli-u-javaskriptu) funkcije u Javascriptu.

## Primer 1: lanac opsega važenja

Funkcija ugnežđena u drugu funkciju će imati pri­stup promenljivima iz spoljnih opsega. To je poznato kao lanac opsega važenja. Hajde da vidimo da li funkcija `unutrasnja()` ima pristup svim promenljivim:

{:.ulaz}
```js
let globalna = 1;

function spoljnja() {
  let spoljnja_lokalna = 2;
  function unutrasnja() {
    let unutrasnja_lokalna = 3;
    return unutrasnja_lokalna + spoljnja_lokalna + globalna;
  }
  return unutrasnja();
}

console.log(spoljnja())
```

Svaka funkcija održava vezu sa opsegom važenja u kome je kreirana. Ovaj opseg se uglavnom uništava nakon što se funkcija izvrši, osim ako se desi nešto (kao u pret­hodnom kodu) što će ga održati. 

**`closure` se stvara kada funkcija zadrži vezu sa nadređenim opsegom važenja, nakon što se nadređena funkcija vrati svoj rezultat.**

## Primer 2: `closure` i opseg važenja

Pogledajmo još jedan primer, u kom ćemo koristiti parametre. Parametri spoljašnje funkcije se ponašaju kao lokalne promenljive u `closure` funkciji. Možemo da kreiramo funkciju koja vraća funkciju, koja vraća parametar nadređene funkcije, na sledeći način:

{:.ulaz}
```js
function F (broj) {
  broj++
  return function () {
    return broj
  }
}

const unutrasnja = F(123)
console.log(unutrasnja())
console.log(unutrasnja())
```

Primetićemo da je parametar `broj` povećan samo prvi put nakon što je funkcija definisana. To pokazuje da funkcija `closure` zadržava referencu na opseg važenja u kojoj je definisana, a ne na promenljive koje se nalaze u opsega važenja tokom izvršenja funkcije.

## Primer 3: zaštićene varijable

Čest primer korišćenja `closure` je kreiranje geter i seter metoda, za uzimanje i postavljanje zaštićene vrednosti. Na primer, možemo sakriti promenljivu unutar funkcije, i napraviti dve dodatne funkcije za učitavanje i postavljanje vrednosti. Geter i seter funkcije moramo staviti unutar funkcije koja sadrži promenljivu `zasticeno`, da bi delili isti opseg važenja.

U ovom slučaju funkcija koja sadrži sve elemente je samoizvršna funkcija:

{:.ulaz}
```js
let getValue, setValue

(function () {
  let zasticeno = 0

  getValue = function () {
    return zasticeno
  }

  setValue = function (v) {
    if (typeof v === "number"){
      zasticeno = v
    }
  }
}())

console.log(getValue())
setValue(123)
console.log(getValue())
```

Funkcije `setValue()` i `getValue()` proglašavamo kao globalne, da bi bile dostupne, dok promenljiva `zasticeno` ostaje lokalna i nepristupačna.

<!-- ## Kako ovo radi?

Zar ne bi trebalo da se, kada funkcija završi, sva memorija potrošena za njene lokalne varijable oslobodi automatskim sakupljanjem otpada? Da, kad funkcija završi, opseg se oslobađa jer više nije potreban. Međutim, u slučaju unutrašnje funkcije koja je vraćena i dodeljena varijabli, opseg unutrašnje funkcije pripaja se spoljnjoj funkciji, koja je još uvek aktivna. -->

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
