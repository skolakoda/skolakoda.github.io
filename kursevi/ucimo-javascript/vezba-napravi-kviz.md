---
title: "Vežba: Napravi kviz"
layout: lekcija-js
permalink: /vezba-napravi-kviz
---

Napravi kviz sa nekoliko pitanja. Za svako pitanje ispiši poruku za tačan ili netačan odgovor. Za komunikaciju sa korisnikom možeš koristiti `prompt` i `alert`.

Svrha ovog zadatka je vežbanje uslova.

{:.ulaz.resenje}
```js
a = prompt("Koji je glavni grad Engleske?")
if (a == "London")
  alert("tačno")
else
  alert("više sreće drugi put")

b = prompt("Koji je glavni grad Italije?")
if (b == "Rim")
  alert("bravo pametnice")
else
  alert("nauči geografiju")

c = prompt("Koja namirnica izaziva gasove?")
if (c == "pasulj")
  alert("vidi se da poznaješ materiju")
else
  alert("nemaš pojma sa životom")
```

Moguća poboljšanja: Dodaj promenljivu koja pamti broj tačnih odgovora, koji na kraju ispisuje korisniku. Napravi primamljiv korisnički interfejs.