---
title: Šablonske strune
layout: lekcija-js
permalink: /sablonske-strune
---

Šablonske strune u Javascriptu (*template strings* ili *template literals*) su strune koje se pišu unutar gravis ili *backtick* znakova (\`), i mogu sadržati varijable:

{:.ulaz}
```js
const ime = 'Ognjen'
const godiste = 1983
const pozdrav = `Zdravo, moje ime je ${ime} i rodjen sam ${godiste} godine.`

console.log(pozdrav)
```

Odnosno mogu sadržati šablone u kojima se vrši evaluacija izraza:

{:.ulaz}
```js
const info = `2 + 2 = ${2 + 2}.`

console.log(info)
```

## Višelinijske strune

Takođe mogu biti korištene kao višelinijske strune, podesne za dinamičko renderovanje HTML-a. Na primer:

```js
const ime = 'Ljubica'

const html = `
  <div>
    Zdravo korisnice ${ime}.
  </div>
`
```