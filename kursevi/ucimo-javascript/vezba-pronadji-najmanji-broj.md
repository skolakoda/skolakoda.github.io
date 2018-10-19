---
title: "Vežba: pronađi najmanji broj u nizu"
layout: lekcija-js
permalink: /vezba-pronadji-najmanji-broj
---

U jednom prolasku, pronađi najmanji broj u datom nizu brojeva:

```js
[22, 3, 6, 7, -11, 8, -9, 23, 4, -6, 77]
```

## Rešenje

Rešenje pomoću privremene varijable:

{:.ulaz.resenje}
```js
const brojevi = [22, 3, 6, 7, -11, 8, -9, 23, 4, -6, 77]

let najmanji = Infinity

for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] < najmanji) najmanji = brojevi[i]
}

console.log(najmanji)
```

Rešenje pomoću pomeranja članova niza:

{:.ulaz.resenje}
```js
const brojevi = [22, 3, 6, 7, -11, 8, -9, 23, 4, -6, 77]

for (let i = 0; i < brojevi.length-1; i++)
  if (brojevi[i] < brojevi[i+1])
    [brojevi[i], brojevi[i+1]] = [brojevi[i+1], brojevi[i]]

console.log(brojevi[brojevi.length-1])
```