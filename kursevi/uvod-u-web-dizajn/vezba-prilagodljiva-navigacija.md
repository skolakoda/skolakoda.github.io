---
title: "Vežba: napravi prilagodljivu navigaciju"
layout: lekcija-html
permalink: /vezba-prilagodljiva-navigacija
---

Vežba: Napravi prilagodljivu navigaciju za mobilne i desktop. 

Data je sledeća struktura u HTML-u:

```html
<nav>
    <a href="">Naslovna</a>
    <a href="">O nama</a>
    <a href="">Usluge</a>
    <a href="">Kontakt</a>
</nav>
```

Minimalno je potrebno da stavke navigacije imaju prikaz `block` za mobilne uređaje, a `inline-block` za ekrane šire od `800px`.

{:.resenje}
```css
nav a {
    display: block;
}

@media (min-width: 800px) {
  nav a {
      display: inline-block;
  }
}
```
