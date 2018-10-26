---
title: Selektori DOM elemenata
layout: lekcija-js-frontend
permalink: /selektori-elemenata
---

**U Javascriptu postoje razni selektori preko kojih pristupamo DOM elementima**. Mi ćemo uglavnom koristiti sledeća tri:

- `document.getElementById()`
- `document.querySelector()`
- `document.querySelectorAll()`


## `document.getElementById()`

Jedan od najčešće korištenih selektora je `document.getElementById`, koji hvata element preko `id` atributa koji smo mu dodelili u HTML-u:

{:.html-ulaz}
```html
<h1 id="naslov">Zdravo Svete</h1>

<div id="prazno"></div>

<script>
  const naslov = document.getElementById('naslov')
  const prazno = document.getElementById('prazno')
  
  naslov.style.color = 'green'
  naslov.innerText = 'Zdravo DOM'
  prazno.innerHTML = `
    <div>
        <h3>Naslov dodat u prazno polje</h3>
        <p>Prvi pasus dodat u prazno polje.</p>
        <p>Drugi pasus dodat u prazno polje.</p>
        <img>
    </div>
  `
</script>
```

## `document.querySelector()`

`document.querySelector` hvata elemente preko standardnih selektora, koje koristimo u CSS-u (preko taga, klase, id-a...). Kada selektor vredi za više elemenata, vraća samo prvi element:

{:.html-ulaz}
```html
<h3>Zdravo Svete</h3>

<p class="tekst">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eaque impedit id, distinctio, quasi aperiam vitae vel eos, cum deserunt dolorum dolores non magni fuga expedita possimus! Modi, quidem vero!</p>

<p class="tekst">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eaque impedit id, distinctio, quasi aperiam vitae vel eos, cum deserunt dolorum dolores non magni fuga expedita possimus! Modi, quidem vero!</p>

<h4 id="odjava">Doviđenja Svete</h4>

<script>
  document.querySelector('h3').style.color = 'purple'
  document.querySelector('.tekst').style.color = 'yellow'
  document.querySelector('#odjava').style.color = 'green'
</script>
```

Za querySelector selektor možemo napraviti alias funkciju, *a la jQuery*, koju koristimo na sledeći način:

```js
function $(selektor) {
  return document.querySelector(selektor)
}

$('h3').style.color = 'purple'
$('.prvi-pasus').style.color = 'yellow'
```

## `document.querySelectorAll()`

`document.querySelectorAll` selektuje više elemenata, kojima potom pristupa unutar petlje:

{:.html-ulaz}
```html
<p class="tekst">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eaque impedit id, distinctio, quasi aperiam vitae vel eos, cum deserunt dolorum dolores non magni fuga expedita possimus! Modi, quidem vero!</p>

<p class="tekst">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eaque impedit id, distinctio, quasi aperiam vitae vel eos, cum deserunt dolorum dolores non magni fuga expedita possimus! Modi, quidem vero!</p>

<script>
const pasusi = document.querySelectorAll('.tekst')

for (let i = 0; i < pasusi.length; i++) {
  pasusi[i].style.color = 'purple'
}
</script>
```

{:.uokvireno.ideja}
Važna napomena: `querySelectorAll` ne vraća niz već listu nodova (*[nodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)*), sa kojom ne možemo koristiti standardne metode nizova, poput `map`.