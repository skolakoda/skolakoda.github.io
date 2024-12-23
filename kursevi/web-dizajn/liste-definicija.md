---
title: Lista definicija
layout: lekcija-html
permalink: /lista-definicija
---

**Lista definicija se koristi za predstavljanje rečnika u HTML-u.** 

Svaka stavka u listi definicija ima dva dela:

- termin definicije (`<dt>`)
- opis definicije (`<dd>`)

Oznake `<dt>` i `<dd>` obično idu u parovima. Ceo rečnik se uokviruje oznakom `<dl>` (lista definicija).

{:.html-ulaz}
```html
<dl>
  <dt>HTML</dt>
  <dd>Jezik za označavanje strukture web stranica.</dd>
  <dt>CSS</dt>
  <dd>Jezik za stilizovanje web stranica.</dd>
  <dt>Javascript</dt>
  <dd>Jezik za dodatnu funkcionalnost i interakciju web stranica.</dd>
</dl>
```
