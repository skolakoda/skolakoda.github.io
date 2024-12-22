---
title: "Vežba: napravi navigaciju"
layout: lekcija-html
permalink: /vezba-napravi-navigaciju
---

Napravi prostu mobilnu navigaciju i poveži stranice.

{:.html-ulaz.resenje}
```html
<style>
  body {
    margin: 0;
  }

  nav {
    background: black;
    text-align: center;
  }

  nav a {
    border-bottom: 1px solid #666;
    color: white;
    display: block;
    padding: 10px;
    text-decoration: none;
  }
</style>

<nav>
  <a href="index.html">Naslovna</a>
  <a href="aktivnosti.html">Aktivnosti</a>
  <a href="o-nama.html">O nama</a>
  <a href="kontakt.html">Kontakt</a>
</nav>
```