---
title: Minifikacija koda
layout: lekcija-html
permalink: /minifikacija
---

**Kada završimo pisanje HTML, CSS i JavaScript fajlova, dobra je praksa da ih kompresujemo da bi se brže učitavali. Ovo umanjivanje se naziva minifikacija.**

Minifikovani fajlovi, iz kojih su izbačeni svi razmaci, komentari i suvišne informacije, nisu čitljivi ljudima, ali ih pregledači jednako dobro razumeju. 

## Primer

Uporedimo [izvorni](https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.css) i [minifikovani](https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css) kod Bootstrap biblioteke. Izvorni CSS kod:

```css
.navbar {
  display: none;
}
.badge {
  border: 1px solid #000;
}
.table {
  border-collapse: collapse !important;
}
.table td,
.table th {
  background-color: #fff !important;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6 !important;
}
.table-dark {
  color: inherit;
}
.table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody + tbody {
  border-color: #dee2e6;
}
.table .thead-dark th {
  color: inherit;
  border-color: #dee2e6;
}
```

Minifikovan CSS kod:

```css
.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}
```

## Razvoj vs. produkcija

Dok radimo na fajlovima, u fazi **razvoja**, mi pišemo izvorni kod koji je čitljiv ljudima. Kada završimo razvoj, minifikujemo fajlove pre nego što ih postavimo na server, odnosno pre nego što odu u **produkciju**. 

## Alatke

Postoje mnoge web alatke za minifikaciju HTML, CSS i JS koda. Takođe, postoje dodaci za editore koji to rade.
