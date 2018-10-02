---
title: Stilovi posećenih veza
layout: lekcija-html
permalink: /stilovi-posecenih-veza
image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chains_%2825491126954%29.jpg/1024px-Chains_%2825491126954%29.jpg
---

Dizajneri i programeri često zaborave na stil posjećene veze, pa posjećene oblikuju jednako kao i neposjećene. Međutim, poseban stil posjećene veze korisnicima može pomoći pri snalaženju, pokazujući im koje su lokacije već posjetili da bi izbjegli nepotrebno vraćanje na njih. Stilovi posjećenih veza posebno dolaze do izražaja kad se koriste u bočnom stupcu ili u sporednom izborniku.

Recimo da u bočnom stupcu imamo popis veza prema vanjskim lokacijama:

```html
<ul>
  <li><a href="https://skolakoda.org/">Škola koda</a></li>
  <li><a href="http://damjanpavlica.wordress.com">Damjanov Svet</a></li>
  <li><a href="https://www.khanacademy.org/">Khan Academy</a></li>
  <li><a href="https://www.hackerrank.com">Hacker Rank</a></li>
  <li><a href="http://petlja.org">Petlja</a></li>
</ul>
```

Nekada je bilo uobičajeno da se osim boje, menja i pozadinska slike za posećenu vezu, što je ukinuto zbog bezbednosnih razloga. Međutim, možemo imati skrivenu pozadinsku sliku, koju ćemo otkriti promenom boje pozadine, na sljedeći način:

{:.html-ulaz}
```html
<ul>
  <li><a href="https://skolakoda.org/">Škola koda</a></li>
  <li><a href="http://damjanpavlica.wordress.com">Damjanov Svet</a></li>
  <li><a href="https://www.khanacademy.org/">Khan Academy</a></li>
  <li><a href="https://www.hackerrank.com">Hacker Rank</a></li>
  <li><a href="http://petlja.org">Petlja</a></li>
</ul>

<style>
a {
  display: block;
  width: 300px;
  line-height: 30px;
  color: #000;
  text-decoration: none;
  background: #fff url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/White_checkbox-checked.svg/32px-White_checkbox-checked.svg.png) no-repeat right;
  text-indent: 10px;
  border: 1px solid black;
}

a:visited {
  padding-right: 20px;
  color: #fff;
  background: #009688;
  border: none;
}

ul {
  list-style:none;
}

li {
  margin: 5px 0;
}
</style>
```

Svaka lokacija koju ste posjetili imat će kvačicu pored imena, pružajući vrijednu informaciju da ste tamo već bili.


Izvor: Andy Budd, *CSS Mastery: napredna Web rješenja* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.515541e78407453fb5fcc12ad8e9cbb1.css-mastery-napredna-web-rjesenja.aspx)), Zagreb 2006.

Priredio: Damjan Pavlica 2018.
