---
title: "Modul obrazac u Javascriptu"
layout: lekcija-napredni-js
permalink: /javascript-obrazac-modul
---

**Modul obrazac (*module pattern*) služi za enkapsulaciju, doslovno *zatvaranje u kapsulu* Javascript koda, kako bi se promenljive izolovale u lokalni opseg.**

Motiv: Kada u svakom fajlu imamo globalne varijable, to žestoko zagađuje globalni prostor. Ukoliko isti identifikator postoji u još nekom fajlu koji koristimo, doćiće do kolizije i pucanja programa.

Modul obrazac u Javascriptu je bio popularan pre ES6 standarda. ES6 je u jezik uveo [module](/javascript-moduli) koji podrazumevano imaju zatvoren opseg i kod njih primena ove tehnike nije potrebna.

## Zatvaranje opsega

Pre ES6 standarda, problem zagađenja globalnog imenskog prostora se rešavao [zatvaranjem](/javascript-zatvorenost) čitavog fajla u [samoizvršnu anonimnu funkciju](/samoizvrsne-anonimne-funkcije), na sledeći način:

```javascript
(function() {

  /*** CONFIG ***/

  var MAX_SPEED = 256;
  var currentSpeed = 0;

  /*** FUNCTIONS ***/

  function toDegrees (angle) {
    return angle * (180 / Math.PI);
  }

  function toRadians (angle) {
    return angle * (Math.PI / 180);
  }

  /*** LISTENERS ***/

  $(window).resize(function() {
    resizeThePage();
  });

  $(document).on('click', '.should-hide', function(){
    $(this).hide();
  });

})();
```

Zagrade oko funkcije znače da je ona anonimna, a zagrade nakon funkcije da se odmah poziva. Varijable više nisu dostupne globalno, jer su zatvorene u opseg funkcije. 

## Prosleđivanje zavisnosti

Ukoliko zatvorena funkcija ima neku spoljašnju zavisnost (npr. jQuery), to ekspliciramo prosleđivanjem varijable:

```javascript
(function($) {

  // jQuery objekat je unutra dostupan pod alijasom $

})(jQuery);
```

Ovde anonimnoj samoizvršnoj funkciji prosleđujemo globalnu `jQuery` varijablu, koju ona prima pod alijasom `$`. Globalna varijabla će naravno biti dostupna i ako je ne prosledimo, ali ovako ekspliciramo zavisnost u slučaju da promenimo okruženje.

## Izvoz iz modula

<img src='https://skolakoda.org/refaktorisanje/images/closure.png' width='400'>

Ukoliko želimo da nešto iz zatvorene unutrašnjosti postane dostupno, moramo dodeliti samoizvršnu anonimnu funkciju konstanti, koja postaje naš prvi Javascript modul. Iz anonimne funkcije vraćamo objekat sa metodama koje postaju javne. Ova tehnika je poznat kao **modul obrazac** (*module pattern*):

```javascript
const mathModule = (function() {

  /*** PRIVATNO ***/

  const MAX_SPEED = 256;
  let currentSpeed = 0;

  function toDegrees (angle) {
    return angle * (180 / Math.PI);
  }

  function toRadians (angle) {
    return angle * (Math.PI / 180);
  }

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  /*** JAVNO ***/

  return {
    toDegrees: toDegrees,
    toRadians: toRadians
  };
})();
```

Ako koristimo skraćenu sintasku, vraćanje objekta sa metodama izgleda ovako:

```js
return {
  toDegrees,
  toRadians
}
```

Dve javne metode koje smo izvezli sada su dostupne u `mathModule` imenskom prostoru i možemo ih koristiti na sledeći način: `mathModule.toDegrees(45)`. Treća funkcija `toCelsius()`, koju nismo izvezli, ostaje privatna.
