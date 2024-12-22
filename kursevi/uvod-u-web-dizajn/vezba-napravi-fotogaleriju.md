---
title: "Vežba: napravi fotogaleriju"
layout: lekcija-html
permalink: /vezba-napravi-fotogaleriju
---

Napravi prostu galeriju pomoću slika sa [Wikimedijine ostave](https://commons.wikimedia.org/wiki/Commons:Picture_of_the_day).

Za inicijalni prikaz koristi male slike (*thumbnails*), radi brzine učitavanja, a kada se klikne na bilo koju od njih, da vodi ka velikoj verziji.

Korisno: kada odete na wiki stranicu [slike](https://commons.wikimedia.org/wiki/File:Episkopi_01-2017_img11_Kourion.jpg), ispod nje se nalaze linkovi ka raznim veličinama.

Bonus: dodati neki efekat kada se pređe mišem preko slike.

{:.html-ulaz.resenje}
```html
<style>
  body {
      background: black;
  }

  .galery img {
      height: 200px;
      filter: grayscale(.8);
      transition: .4s ease-in;
  }

  .galery img:hover {
      filter: grayscale(0);
  }
</style>

<div class="galery">
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/2012-bb-jackal-1.jpg/1320px-2012-bb-jackal-1.jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/2012-bb-jackal-1.jpg/320px-2012-bb-jackal-1.jpg">
  </a>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Diesel_locomotive_ChME3-5947_in_Vinnitsa_railway_station%2C_Ukraine%2C_2012.jpg/1320px-Diesel_locomotive_ChME3-5947_in_Vinnitsa_railway_station%2C_Ukraine%2C_2012.jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Diesel_locomotive_ChME3-5947_in_Vinnitsa_railway_station%2C_Ukraine%2C_2012.jpg/320px-Diesel_locomotive_ChME3-5947_in_Vinnitsa_railway_station%2C_Ukraine%2C_2012.jpg">
  </a>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg/1320px-Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg/320px-Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg">
  </a>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Papilio_polytes-Thekkady-2016-12-03-001.jpg/1320px-Papilio_polytes-Thekkady-2016-12-03-001.jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Papilio_polytes-Thekkady-2016-12-03-001.jpg/320px-Papilio_polytes-Thekkady-2016-12-03-001.jpg">
  </a>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gran_Mezquita_de_Isfahán%2C_Isfahán%2C_Irán%2C_2016-09-20%2C_DD_26.jpg/1320px-Gran_Mezquita_de_Isfahán%2C_Isfahán%2C_Irán%2C_2016-09-20%2C_DD_26.jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gran_Mezquita_de_Isfah%C3%A1n%2C_Isfah%C3%A1n%2C_Ir%C3%A1n%2C_2016-09-20%2C_DD_26.jpg/320px-Gran_Mezquita_de_Isfah%C3%A1n%2C_Isfah%C3%A1n%2C_Ir%C3%A1n%2C_2016-09-20%2C_DD_26.jpg">
  </a>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Dülmen%2C_Wildpark_--_2017_--_6075-81.jpg/1300px-Dülmen%2C_Wildpark_--_2017_--_6075-81.jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/D%C3%BClmen%2C_Wildpark_--_2017_--_6075-81.jpg/300px-D%C3%BClmen%2C_Wildpark_--_2017_--_6075-81.jpg">
  </a>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Anfiteatro%2C_El_Jem%2C_Túnez%2C_2016-09-04%2C_DD_35-37_HDR.jpg/1317px-Anfiteatro%2C_El_Jem%2C_Túnez%2C_2016-09-04%2C_DD_35-37_HDR.jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Anfiteatro%2C_El_Jem%2C_T%C3%BAnez%2C_2016-09-04%2C_DD_35-37_HDR.jpg/317px-Anfiteatro%2C_El_Jem%2C_T%C3%BAnez%2C_2016-09-04%2C_DD_35-37_HDR.jpg">
  </a>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Biblioteca_Central_de_la_Universidad_de_Bucarest%2C_Bucarest%2C_Rumanía%2C_2016-05-29%2C_DD_97-99_HDR.jpg/1320px-Biblioteca_Central_de_la_Universidad_de_Bucarest%2C_Bucarest%2C_Rumanía%2C_2016-05-29%2C_DD_97-99_HDR.jpg">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Biblioteca_Central_de_la_Universidad_de_Bucarest%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_97-99_HDR.jpg/320px-Biblioteca_Central_de_la_Universidad_de_Bucarest%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_97-99_HDR.jpg">
  </a>
</div>
```
