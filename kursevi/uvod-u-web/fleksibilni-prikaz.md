---
title: "Fleksibilni prikaz"
layout: lekcija-html
permalink: /fleksibilni-prikaz
---

**Fleksibilni prikaz (`display: flex`) u CSS-u služi za poravnanje dece elemenata unutar roditeljskog elementa.**

Osnovne direktive za rad sa fleksom su:

- Prelamanje u novi red (`flex-wrap`)
- Horizontalno poravnanje (`justify-content`)
- Vertikalno poravnanje (`align-items`)

## Primer

{:.html-ulaz}
```html
<style>
  .drzac {
    display: flex;
    flex-wrap: wrap; /* prelamanje u novi red */
    align-items: center; /* vertikalno poravnanje */
    height: 100vh; /* mora visina za vertikalno poravnanje */
    justify-content: space-around; /* horizontalno poravnanje */
  }

  .kvadrat {
    background: yellow;
    width: 100px;
    height: 100px;
    margin-right: 20px; /* minimalni razmak */
  }
</style>

<div class="drzac">
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
  <div class="kvadrat"></div>
</div>
```
