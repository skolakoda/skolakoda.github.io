---
title: Dodavanje slušača događaja
layout: lekcija-js-frontend
permalink: /dodavanje-slusaca-dogadjaja
---

**Postoji više načina da dodamo slušač događaja na neki element. Jedini ispravan način je dodavanje događaja preko `addEventListener` metoda.**

## Dodela atributa u HTML-u

Dodavanje JS koda u atribut HTML taga je najprimitivniji koncept, i najmanje održiv. Davnih 1990-ih se radilo ovako:

{:.html-ulaz}
```html
<style>
  div {
    width: 200px;
    height: 200px;
    background: crimson;
  }
</style>

<div onclick="alert('Jooj!')">ne klikći</div>
```

Kada neko klikne na `<div>`, aktivira se `click` događaj i izvršava se JavaScript kod, koji se nalazi unutar stringa u `onclick` atributu. Ne postoji eksplicitna funkcija koja „sluša“ događaj.

## Dodela atributa u Javascriptu

Još jedan način dodavanja događaja je da funkciju dodelimo `onclick` atributu DOM elementa. Na primer:

{:.html-ulaz}
```html
<style>
  #kutijica {
    width: 200px;
    height: 200px;
    background: crimson;
  }
</style>

<div id="kutijica"></div>

<script>
  kutijica.onclick = function() {
    document.write('Radi 1. dogadjaj. ')
  }

  kutijica.onclick = function() {
    document.write('Radi 2. dogadjaj. ')
  }

  kutijica.onclick = function() {
    document.write('Radi 3. dogadjaj. ')
  }
</script>
```

Ovaj način je malo bolji od prethodnog, zato što odvaja HTML od JS koda. Glavna mana je što funkciju možemo dodeliti samo jednom, a svaka sledeća dodela gazi prethodnu. Takođe, objekat događaja neće biti prosleđen povratnoj funkciji kao parametar, za razliku od predviđenog metoda.
 
Klikni crveni kvadrat i vidi šta ispisuje. Zaključi koji je od tri slušača događaja zapravo dodat elementu.

{:.uokvireno.ideja}
Metodu `document.write` koristimo samo za isprobavanje i nikada je ne koristimo u produkciji.

## `addEventListener` metoda

Najbolji način za upravljanje događajima pregledača je da koristimo „slušače“ događaja, u koje možemo dodati više funkcija. Kada se događaj aktivira, sve funkcije se izvršavaju.

{:.html-ulaz}
```html
<style>
  #kutijica {
    width: 200px;
    height: 200px;
    background: crimson;
  }
</style>

<div id="kutijica"></div>

<script>
  kutijica.addEventListener('click', function() {
    document.write('Radi 1. dogadjaj. ')
  })

  kutijica.addEventListener('click', function() {
    document.write('Radi 2. dogadjaj. ')
  })

  kutijica.addEventListener('click', function() {
    document.write('Radi 3. dogadjaj. ')
  })
</script>
```

{:.uokvireno.ideja}
Objašnjenje: dodela vrednosti preko atributa (znak `=`) uvek gazi prethodnu vrednost. Preko predviđene metode, možemo dodati više događaja na isti element.