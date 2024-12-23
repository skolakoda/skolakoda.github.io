---
title: Selektori naslednika i dece
layout: lekcija-html
permalink: css-naslednici-i-deca
---

U CSS-u možemo izabrati naslednike ili decu nekog elementa. Promena stila elemenata pomoću specifičnijih selektora (zavisno od konteksta) zove se **CSS specifičnost**.

## Selektor naslednika (opštiji)

Selektor naslednika se koristi za primenu stila na elemente ugnežđene unutar drugih elemenata. Na primer:

```css
section h2 { 
  color: gray; 
}
```

Selektor naslednika je opštiji i obuhvata decu i dalje ugnježdene elemente.

## Selektor dece (specifičniji)

Selektor dece hvata samo prvi nivo elemenata unutar roditeljskog elementa:

```css
div > p {
  background-color: yellow;
}
```

Drugim rečima, ovaj selektor će zahvatiti samo decu, ali ne i unuke :)
