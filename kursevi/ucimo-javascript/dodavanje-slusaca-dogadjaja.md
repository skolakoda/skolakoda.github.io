---
title: Dodavanje slušača događaja
layout: lekcija-js-frontend
permalink: /dodavanje-slusaca-dogadjaja
---

**Postoje dva načina da dodamo slušač događaja na neki element: preko atributa i preko `addEventListener` metoda. Prvi je pogrešan, a drugi ispravan.**

## Dodavanje preko atributa (pogrešno)

Otvori konzolu pregledača, klikći crveni kvadrat i vidi šta ispisuje. Zaključi koji od tri slušača događaja je zapravo dodat na element.

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
    console.log('Radi 1. dogadjaj')
  }

  kutijica.onclick = function() {
    console.log('Radi 2. dogadjaj')
  }

  kutijica.onclick = function() {
    console.log('Radi 3. dogadjaj')
  }
</script>
```

## Dodavanje preko metoda (ispravno)

Isprati sve korake kao u gornjem primeru, i pokušaj da shvatiš u čemu je razlika.

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
    console.log('Radi 1. dogadjaj')
  })

  kutijica.addEventListener('click', function() {
    console.log('Radi 2. dogadjaj')
  })

  kutijica.addEventListener('click', function() {
    console.log('Radi 3. dogadjaj')
  })
</script>
```

{:.uokvireno.ideja}
U prvom slučaju, vrši se nova dodela vrednosti (znak `=`), što uvek gazi staru vrednost. U drugom slučaju, događaji se regularno dodaju preko predviđene metode.