---
title: Pravljenje alijas funkcija
layout: lekcija-napredni-js
permalink: /pravljenje-alijas-funkcija
---

Kada neke metode pozivamo veoma često, korisno je napraviti njihove aliase.

## Prost primer

Ako neka metoda ne vraća vrednost (poput `console.log`), dovoljno je napraviti novi identifikator i proslediti mu naziv metode. Nadalje se u programu možemo služiti novim imenom:

{:.ulaz}
```js
const ispis = console.log

ispis('Zdravo svete')
```

## Alijasi za selektore

Ako metoda vraća vrednost, onda *alias* moramo kreirati preko povratne funkcije:

```js
const uzmi = id => document.getElementById(id)

const naslov = uzmi('naslov')
console.log(naslov)
```

Možemo napraviti alijase i za druge selektore, poput `querySelector`:

```js
const $ = selektor => document.querySelector(selektor)

const naslov = $('#naslov')
console.log(naslov)
```

## Alijas za dodavanje događaja

Ako nam je predugo da stalno kucamo `addEventListener`, možemo napraviti kraći alias. No, pošto događaje dodajemo na različite elemente, pitanje je kome dodati alias metodu? Alias treba dodati zajedničkom pretku svih elemenata koji primaju događaje, što je `EventTarget` klasa. 

Alias `on` možemo dodati klasi preko `prototype` atributa, na sledeći način:

```js
EventTarget.prototype.on = EventTarget.prototype.addEventListener
```

## Složen primer

Aliase za selektor i dodavanje događaja možemo koristiti zajedno na sledeći način:

{:.html-ulaz}
```html
<h2 id="naslov">Zdravo</h2>

<script>

  const $ = selektor => document.querySelector(selektor)
  EventTarget.prototype.on = EventTarget.prototype.addEventListener

  $('#naslov').on('click', function() {
      alert('klik')
  })

</script>
```

{:.uokvireno.ideja}
Gornji primer upotrebe aliasa veoma podseća na jQuery biblioteku. To je zato što je jQuery nastao kao kolekcija aliasa.