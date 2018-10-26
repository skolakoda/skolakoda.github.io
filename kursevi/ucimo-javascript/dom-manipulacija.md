---
title: DOM manipulacija
layout: lekcija-js
permalink: /dom-manipulacija
---

**Manipulacija DOM-a je menjanje svojstava web stranice i elemenata koji se nalaze na njoj, pomoću Javascripta. Svaka izmena se odmah uživo prikazuje na stranici.**

## Primer

Najprostiji primer DOM manipulacije bio bi menjanje boje pozadine i veličine slova cele stranice:

{:.ulaz}
```js
// menja stil tela dokumenta

document.body.style.background = 'yellow';
document.body.style.fontSize = '1.4em';
```

{:.uokvireno.ideja}
Kod možete prekopirati u zaseban js fajl i prikačiti za HTML stranicu, ili izvršiti unutar konzole na bilo kom sajtu.

Za složeniju DOM manipulaciju neophodno je koristiti selektore.
