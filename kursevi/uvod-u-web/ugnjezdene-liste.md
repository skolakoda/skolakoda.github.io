---
title: Ugneždene liste
layout: lekcija-html
permalink: /ugnjezdene-liste
---

Ugneždene liste u HTML-u se prave tako što celu listu stavimo unutar jednog elementa druge liste. Ugneždene su posebno dobre za stavke kojima želimo da predstavimo hijerarhiju (npr. sadržaj knjige).

Takođe, ugneždene liste se standardno koriste za navigaciju. Mnogi sajtovi imaju mnogo linkova za navigaciju, a da bi se sprečilo prenatrpavanje stra­nice, koristi se ugnežđeni **padajući meni**.

## Primer

{:.html-ulaz}
```html
<ul>
  <li>Naslovna</li>
  <li>O nama</li>
  <li>Usluge
    <ul>
      <li>Web dizajn</li>
      <li>Programiranje</li>
      <li>Razvoj aplikacija</li>
    </ul>
  </li>
  <li>Blog</li>
  <li>Kontakt</li>
</ul>
```
