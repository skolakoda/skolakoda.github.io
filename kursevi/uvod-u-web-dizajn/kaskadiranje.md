---
title: Šta znači kaskadiranje?
layout: lekcija-html
permalink: /kaskadiranje
---

**Stilovi se nazivaju kaskadnim zato što se njihovo važenje prenosi sa roditeljskih elemenata na naslednike, pa poslednji naslednik u nizu prima kumulativni efekat prethodnih stilova.**

Naredni primer pokazuje kako funkiconiše kaskadarinje:

{:.html-ulaz}
```html
<style>
  div {
    font-size: 120%;
  }

  p {
    font-size: 120%;
  }

  span {
    font-size: 120%;
  }
</style>

<div>
  Ovaj tekst je u divu, ali nije u pasusu.
  <p>Ovaj tekst je u pasusu. <span>Ovaj tekst je u spanu unutar pasusa. </span></p>
</div>
```

{:.uokvireno.ideja}
Treba biti posebno pažljiv kada koristimo procente za veličinu slova, kako se osobina kaskadiranja ne bi okrenula protiv nas.