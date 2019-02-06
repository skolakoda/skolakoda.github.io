---
title: Šablonske strune
layout: lekcija-js
permalink: /sablonske-strune
---

Šablonske strune ili šablonski literali (*template strings* ili *template literals*) su strune koje se pišu unutar posebnih *backtick* navodnika (\`).

## Varijable unutar struna

Šablonske strune mogu sadržati čuvare mesta za varijable, koji se označavaju znakom za dolar i vitičastim zagradama:

{:.ulaz}
```js
const ime = 'Ognjen'
const godiste = 1983
const pozdrav = `Zdravo, moje ime je ${ime} i rodjen sam ${godiste} godine.`

console.log(pozdrav)
```

## Evaluacija izraza

Šablonski literali takođe omogućuju evaluaciju izraza unutar struna: 

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