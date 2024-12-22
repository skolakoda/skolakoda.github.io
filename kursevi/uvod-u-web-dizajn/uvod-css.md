---
title: Uvod u CSS
layout: lekcija-html
permalink: /uvod-css
---

**CSS služi za stilizovanje HTML stranica. Ova dva jezika čine nerazdvojan par - HTML određuje strukturu, a CSS izgled stranice.**

CSS pravilima možemo stilizovati bilo koji element. CSS možemo dodati HTML stranici na više načina. Na našim lekcijama će se obično nalaziti između dva `<style>` taga.

## Učimo putem primera

U našem editoru možeš uživo isprobavati i menjati kod. Rezultat odmah izlazi na ekranu.

Slobodno menjaj zadate vrednosti u CSS-u (npr. upiši drugi naziv boje ili veličinu slova), ništa ne možeš pokvariti:

{:.html-ulaz}
```html
<h1>Zdravo svete</h1>

<p>Zdravo svete. Ja sam prvi pasus.</p>

<p>Zdravo, ja sam drugi pasus.</p>

<p>Ja sam samo običan tekst.</p>


<style>

body {
  background-color: orange;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-size: 150%;
}

</style>
```

{:.uokvireno.ideja}
Gornji kod možeš prekopirati u `.html` fajl i pokrenuti sa svog računara!

