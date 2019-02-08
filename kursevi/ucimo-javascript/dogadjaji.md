---
title: Uvod u Javascript događaje
layout: lekcija-js
permalink: /javascript-dogadjaji
---

**Pomoću događaja oživljavamo stranice, odnosno činimo ih interaktivnim.** Događaji su najčešće akcije korisnika (klik, mrdanje, kuckanje) ili učitavanje resursa (poput slika i podataka). Primeri događaja su sledeći:
- Posetilac pritiska dugme.
- Posetilac unosi tekst u polje obrasca.
- Stranica završava u čitavanje.

Pregledač neprestano emituje događaje, a mi biramo koje ćemo slušati. Možemo dodati [povratnu funkciju](/callback-funkcije) kao slušač događaja (*event listener*) i pregledač će pozvati funkciju čim se događaj desi.

## Događaji miša 

Događaji miša su najčešći događaji na desktop računarima, jer se većina interakcije odvija preko miša. Neki od glavnih događaja miša su:

- `click` (stisak na levo dugme miša, a zatim puštanje dugmeta)
- `dblclick` (dvoklik, dva brza uzastopna klika)
- `mousemove` (pomeranje miša)
- `mouseenter` (ulazak kursorom u element)
  - `mouseleave` (napuštanje elementa)
- `mouseover` (kursor je iznad elementa)
  - `mouseout` (kursor je bio iznad elementa, ali više nije)
- `mousedown` (stisak na levo dugme)
  - `mouseup` (puštanje levog dugmeta)
- `contextmenu` (prikazuje se kontekstni meni na desno dugme miša)

Na primer, sledeća linija ispisuje trenutne koordinate miša prilikom svakog pomeranja:

{:.ulaz}
```js
document.onmousemove = e => console.log("x: " + e.clientX, "y: " + e.clientY)
```

Možete je isprobati u konzoli.

## Događaji tastature 

Dva glavna događaja tastature su pritiskanje i puštanje tipki:

- `keydown` (tipka stisnuta)
- `keyup` (tipka puštena)
- `keypress` (tipka stisnuta a potom puštena)

Nisu svi elementi sposobni da slušaju događaje tastature, ali `document` i `input` elementi jesu. Na primer, sledeća linija ispisuje brojčanu vrednost svakog pritisnutog znaka na tastaturi:

{:.ulaz}
```js
document.onkeydown = e => console.log(e.keyCode)
```

{:.uokvireno.ideja}
Događaji tastature se često koriste za špijuniranje korisnika. Neke aplikacije za dopisivanje registruju svaku stisnutu tipku i skladište podatke, bilo da smo zaista poslali poruku ili ne. 

## Događaji formulara

- `focus` (ulazak u input polje)
- `blur` (napuštanje input polja)
- `change` (promena vrednosti polja)
- `submit` (slanje formulara)

## Globalni događaji 

Globalni događaji se dodaju na `document` i `window` objekt.

- `DOMContentLoaded` (izgradnja DOM-a, ide na `document`)
- `load` (učitavanje, ide na `window` i razne elemente)
- `resize` (menjanje veličine, ide na `window`)

{:.uokvireno.ideja}
Razlika između `DOMContentLoaded` i `window.onload` je veoma bitna. `DOMContentLoaded` znači da je HTML struktura učitana i pripadajući DOM objekat izgrađen, ali prikačeni resursi (slike, fontovi, skripte i ostalo) još nisu učitani, a `window.onload` reaguje kada su svi prikačeni resursi učitani.
