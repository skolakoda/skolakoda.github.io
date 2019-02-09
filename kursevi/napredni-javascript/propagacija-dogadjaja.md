---
title: Propagacija događaja u Javascriptu
layout: lekcija-napredni-js-frontend
permalink: /javascript-propagacija-dogadjaja
image: /images/koncepti/web/spustanje-dizanje-dogadjaja.png
---

**Propagacija događaja je redosled kojim DOM elementi reaguju na događaj.**

Recimo da imamo pasus unutar diva:

```html
<div>
  <p>Klikni me!</p>
</div>
```

Kada kliknemo pasus, mi smo, ustvari, kliknuli i na div, na telo dokumenta i na dokument kao celinu (`html`). To je propagacija događaja kroz elemente. 

## Dve faze propagacije događaja

**Propagacija događaja ima dve faze: hvatanje (*capturing*) i dizanje (*bubbling*).** Događaj se prvo prenosi naniže, od dokumenta do pasusa, a zatim naviše, od pasusa ka dokumentu. Propagacija događaja se odvija sledećim redom:

- html (hvatanje)
- body (hvatanje)
- div (hvatanje)
- p (cilj)
- div (dizanje)
- body (dizanje)
- html (dizanje)

Kada dodajemo slušač događaja, metod [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) prima Bulov parametar, kojim određujemo u kojoj će fazi povratna funkcija biti pozvana. Događaji koji koriste fazu hvatanja neće biti okinuti u fazi dizanja i obratno. Objekat događaja ima svojstvo `eventPhase`, koje sadrži trenutnu fazu.

![]({{page.image}})

## Primer: Hvatanje događaja (*capturing*)

Dodajemo slušače događaja na pasus, telo dokumenta, dokument i prozor pregledača. Metodi `addEventListener` prosleđujemo `true`, da bi događaje hvatali od roditelja ka ciljanom elementu:

{:.html-ulaz}
```html
<p id="p">Klikni me!</p>

<script>

document.getElementById('p').addEventListener('click' , function() {
  alert('Klik na pasus')
}, true)

document.body.addEventListener('click', function() {
  alert('Klik na telo dokumenta')
}, true)

document.addEventListener('click', function() {
  alert('Klik na dokument')
}, true)

window.addEventListener('click', function() {
  alert('Klik na prozor')
}, true)

</script>
```

Ako kliknemo pasus, videćemo četiri poruke za sledeće događaje:
- Klik na prozor
- Klik na dokument
- Klik na telo dokumenta
- Klik na pasus

## Primer: Dizanje događaja (*bubbling*)

Ovog puta metodi `addEventListener` prosleđujemo `false`, da bi događaji koristili fazu dizanja, od ciljanog elementa ka roditelju:

{:.html-ulaz}
```html
<p id="p">Klikni me!</p>

<script>

document.getElementById('p').addEventListener('click' , function() {
  alert('Klik na pasus')
}, false)

document.body.addEventListener('click', function() {
  alert('Klik na telo dokumenta')
}, false)

document.addEventListener('click', function() {
  alert('Klik na dokument')
}, false)

window.addEventListener('click', function() {
  alert('Klik na prozor')
}, false)

</script>
```

Ako kliknemo pasus, videćemo četiri poruke za sledeće događaje:
- Klik na pasus
- Klik na telo dokumenta
- Klik na dokument
- Klik na prozor

{:.uokvireno.ideja}
`false` je podrazumevana vrednost trećeg parametra, pa je možemo izostaviti.

## Upotreba

Propagaciju događaja možemo upotrebiti na sledeći način:
- Možemo da zaustavimo propagaciju događaja u „slušaču“ tako da nikada ne dođe do dokumenta. Da bismo to uradili, možemo da pozovemo metod `stopPropagation()` objekta događaja.
- Možemo da koristimo delegiranje događaja. Ako imamo 10 dugmadi unutar `div`-a, možemo da dodamo deset slušača događaja - po jedan za svako dugme. Međutim, bolje je da dodamo samo jedan slušač na
`div` i, kada događaj počne, proverimo koje je dugme ciljni element događaja.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- MDN, [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)