---
title: "Vežba: napravi jednostraničnu navigaciju"
layout: lekcija-html
permalink: /vezba-jednostranicna-navigacija
---

Napravi jednostraničnu navigaciju koja vodi ka sekcijama stranice.

{:.html-ulaz.resenje}
```html
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>Jednostranična prezentacija</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      font-size: 1.2em;
    }

    section {
      height:100vh;
      overflow:auto; /* sprečava margin terror */
    }

    .sekcija1 {
      background: #432C51;
      color: #FFD464;
    }

    .sekcija2 {
      color: #5A3662;
      background: #FFD464;
    }

    .sekcija3 {
      color: #432C51;
      background: #FFFB85;
    }
  </style>
</head>
<body>

  <nav>
    <a href="#sekcija1">Sekcija 1</a>
    <a href="#sekcija2">Sekcija 2</a>
    <a href="#sekcija3">Sekcija 3</a>
  </nav>

  <section class="sekcija1" id="sekcija1">
    <h1>Sekcija 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, veniam sapiente cum error quod ad.</p>
    <p>Atque porro natus sint iure ullam voluptate aliquam nisi, nihil ut, excepturi, distinctio quo adipisci recusandae voluptates aliquid quasi? Ratione amet repudiandae veniam ipsam. Nulla nihil, a qui praesentium at?</p>
  </section>

  <section class="sekcija2" id="sekcija2">
    <h1>Sekcija 2</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, veniam sapiente cum error quod ad.</p>
    <p>Atque porro natus sint iure ullam voluptate aliquam nisi, nihil ut, excepturi, distinctio quo adipisci recusandae voluptates aliquid quasi? Ratione amet repudiandae veniam ipsam. Nulla nihil, a qui praesentium at?</p>
  </section>

  <section class="sekcija3" id="sekcija3">
    <h1>Sekcija 3</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, veniam sapiente cum error quod ad.</p>
    <p>Atque porro natus sint iure ullam voluptate aliquam nisi, nihil ut, excepturi, distinctio quo adipisci recusandae voluptates aliquid quasi? Ratione amet repudiandae veniam ipsam. Nulla nihil, a qui praesentium at?</p>
  </section>
</body>
</html>
```