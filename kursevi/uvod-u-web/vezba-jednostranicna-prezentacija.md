---
title: "Vežba: napravi jednostraničnu prezentaciju"
layout: lekcija-html
permalink: /vezba-jednostranicna-prezentacija
---

Napravi jednostraničnu prezentaciju sa navigacijom koja vodi ka delovima iste stranice.

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

    h1 {
      font-size: 66px;
    }

    div {
      overflow:auto;
    }

    .kvadrat,
    .kvadrat2,
    .kvadrat3 {
      height:100vh;
    }

    .kvadrat {
      background: #432C51;
      color: #FFD464;
    }

    .kvadrat2 {
      color: #5A3662;
      background: #FFD464;
    }

    .kvadrat3 {
      color: #432C51;
      background: #FFFB85;
    }
  </style>
</head>
<body>

  <nav>
    <a href="#kvadrat">Kvadrat 1</a>
    <a href="#kvadrat2">Kvadrat 2</a>
    <a href="#kvadrat3">Kvadrat 3</a>
  </nav>

  <div class="kvadrat" id="kvadrat">
    <h1>Zdravo svete</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, veniam sapiente cum error quod ad.</p>
    <p>Atque porro natus sint iure ullam voluptate aliquam nisi, nihil ut, excepturi, distinctio quo adipisci recusandae voluptates aliquid quasi? Ratione amet repudiandae veniam ipsam. Nulla nihil, a qui praesentium at?</p>
  </div>

  <div class="kvadrat2" id="kvadrat2">
    <h1>Zdravo svete</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, veniam sapiente cum error quod ad.</p>
    <p>Atque porro natus sint iure ullam voluptate aliquam nisi, nihil ut, excepturi, distinctio quo adipisci recusandae voluptates aliquid quasi? Ratione amet repudiandae veniam ipsam. Nulla nihil, a qui praesentium at?</p>
  </div>

  <div class="kvadrat3" id="kvadrat3">
    <h1>Zdravo svete</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, veniam sapiente cum error quod ad.</p>
    <p>Atque porro natus sint iure ullam voluptate aliquam nisi, nihil ut, excepturi, distinctio quo adipisci recusandae voluptates aliquid quasi? Ratione amet repudiandae veniam ipsam. Nulla nihil, a qui praesentium at?</p>
  </div>
</body>
</html>
```