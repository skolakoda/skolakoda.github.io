---
title: "Vežba: napravi padajući meni"
layout: lekcija-html
permalink: /vezba-padajuci-meni
---

Padajući meni je često korištena navigaciona tehnika na sajtovima, koja omogućuje preglednu navigaciju, a ne zauzima mnogo prostora. Od sledeće HTML strukture, pomoću CSS-a napravi interaktivni padajući meni.

{:.html-ulaz}
```html
<nav>
  <ul>
    <li><a href="index.html">Naslovna</a></li>
    <li><a href="about.html">O nama</a>
      <ul>
        <li><a href="history.html">Istorija</a></li>
        <li><a href="team.html">Naš tim</a></li>
      </ul>
    </li>
    <li><a href="services.html">Usluge</a>
      <ul>
        <li><a href="services/a.html">Izrada sajtova</a></li>
        <li><a href="services/b.html">Razvoj aplikacija</a></li>
        <li><a href="services/d.html">Razvoj igara</a></li>
        <li><a href="services/c.html">Pametne kuće</a></li>
      </ul>
    </li>
    <li><a href="/contact. html">Kontakt</a></li>
  </ul>
</nav>
```

## Pomoć

Potrebno je uraditi sledeće:
- ukloniti margine i znakove za nabrajanje iz liste
- poravnati stavke najvišeg nivoa horizontalno
- podrazumevano sakriti podmenije
- prikazati podmenije prelaskom miša iznad menija
- stilizovati izgled menija (bonus)

## Rešenje

{:.html-ulaz.resenje}
```html
<nav>
  <ul class="padajuci-meni">
    <li><a href="index.html">Naslovna</a></li>
    <li><a href="about.html">O nama</a>
      <ul>
        <li><a href="history.html">Istorija</a></li>
        <li><a href="team.html">Naš tim</a></li>
      </ul>
    </li>
    <li><a href="services.html">Usluge</a>
      <ul>
        <li><a href="services/a.html">Izrada sajtova</a></li>
        <li><a href="services/b.html">Razvoj aplikacija</a></li>
        <li><a href="services/d.html">Razvoj igara</a></li>
        <li><a href="services/c.html">Pametne kuće</a></li>
      </ul>
    </li>
    <li><a href="/contact. html">Kontakt</a></li>
  </ul>
</nav>

<style>
  ul,
  li {
    margin-left: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  li ul {
    display: none;
  }

  li:hover ul {
    display: block;
  }

  .padajuci-meni {
    display: flex;
    justify-content: space-evenly;
  }

  .padajuci-meni > li {
    width: 20%;
  }
</style>
```