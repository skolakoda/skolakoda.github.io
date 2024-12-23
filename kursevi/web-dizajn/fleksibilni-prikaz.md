---
title: "Fleksibilni prikaz"
layout: lekcija-html
permalink: /fleksibilni-prikaz
---

**Fleksibilni prikaz (`display: flex`) u CSS-u služi za poravnanje dece elemenata unutar roditeljskog elementa.**

Osnovne direktive za rad sa fleksom su:

- Horizontalno poravnanje (`justify-content`)
- Vertikalno poravnanje (`align-items`)
- Prelamanje u novi red (`flex-wrap`)

## Primer: Horizontalno poravnanje 

{:.html-ulaz}
```html
<style>
  .drzac {
    display: flex;
    flex-wrap: wrap; /* prelamanje u novi red */
    justify-content: space-around; /* horizontalno poravnanje */
  }

  .kvadrat {
    background: yellow;
    width: 100px;
    height: 100px;
    margin-right: 20px; /* minimalni razmak */
    margin-bottom: 20px;
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

## Primer: Vertikalno poravnanje

{:.html-ulaz}
```html
<style>
  .drzac {
    display: flex;
    flex-wrap: wrap; /* prelamanje u novi red */
    align-items: center; /* vertikalno poravnanje */
    height: 100vh; /* mora visina za vertikalno poravnanje */
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