---
title: "Vežba: Pronađi ime u tekstu"
layout: lekcija-js
permalink: /vezba-pronadji-ime-u-tekstu
---

Pronađi ime "Ana" u sledećem tekstu: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, Ana veniam sapiente cum error quod ad."

Ovo se može postići metodom `indexOf`, koja vraća index na kome se nalazi reč, ili `-1` ukoliko nema tražene reči.

{:.ulaz.resenje}
```js
const ime = 'Ana'

const tekst = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, Ana veniam sapiente cum error quod ad.'

console.log(tekst.indexOf(ime))
```
