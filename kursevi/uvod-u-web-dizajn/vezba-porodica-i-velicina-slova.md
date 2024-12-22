---
title: "Vežba: Promeni porodicu i veličinu slova"
layout: lekcija-html
permalink: /vezba-porodica-i-velicina-slova
---

Promeni porodicu, veličinu i prored između slova. Koristi različite porodice slova za naslove i tekst. 

Obavezno koristi Google fontove sa podrškom za *Latin Extended* (č, ć, đ, ž, š)

{:.html-ulaz.resenje}
```html
<link href="https://fonts.googleapis.com/css?family=Lato&amp;subset=latin-ext" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">

<style>

  body {
    font-family: 'Playfair Display', serif;
    letter-spacing:.1em;
    margin: 5%;
  }

  h1 {
    font-family: 'Lato', sans-serif;
    font-size: 66px;
  }

</style>

<h1>Zdravo čćđžš</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eaque, ducimus explicabo laborum incidunt ex dicta voluptatum nisi officiis voluptatibus provident quaerat dolorem ab, veniam sapiente cum error quod ad.</p>
<p>Atque porro natus sint iure ullam voluptate aliquam nisi, nihil ut, excepturi, distinctio quo adipisci recusandae voluptates aliquid quasi? Ratione amet repudiandae veniam ipsam. Nulla nihil, a qui praesentium at?</p>
<p>Aperiam ullam, voluptatem ab aut provident maxime eveniet, a fugit, doloremque minima quod laudantium, dignissimos excepturi sapiente architecto quis. Asperiores voluptas, laboriosam nesciunt ab? Expedita minus, dolorum obcaecati at quia!</p>
<p>Dolore, vero a quae voluptate cupiditate, at similique officia dolorum tempora asperiores corporis deleniti ratione assumenda expedita aperiam impedit, sunt. Explicabo fugiat ex est iure eaque ipsam. Voluptates, doloribus et!</p>
<p>Unde ullam maiores voluptatum, laboriosam impedit deleniti consequatur numquam porro animi ex. Assumenda, praesentium. Molestiae iusto doloremque sunt quam unde alias fugiat voluptatibus omnis, optio ea autem reiciendis maxime illum?</p>

<b>Zdravo </b> <span>Svima </span> <i>ovde ima mesta... </i>
```