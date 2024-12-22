---
title: Merne jedinice u CSS-u
layout: lekcija-html
permalink: /merne-jedinice
---

**Merne jedinice u CSS-u se dele na relativne i apsolutne.**

### Relativne

- `px`: piksel, veličina jedne tačke na ekranu uređaja
- `%`: procenti, relativni u odnosu na roditeljski element
- `em`: visina fonta elementa
- `rem`: visina osnovnog fonta stranice
- `ex`: visina znaka `x` u fontu elementa
- `vh`: visina vidnog polja u procentima
- `vw`: širina vidnog polja u procentima

### Apsolutne

- `in`: inči
- `cm`: santimetrl
- `mm`: milimetri
- `pt`: tačke
- `pc`: pajkovi

### Pojašnjenje

Kada koristite **procente**, imajte na umu da su relativni u odnosu na roditeljski element, a ne na veličinu stranice. Na primer, ako u `<div>` tagu koji je širok 500px imamo `<div>` tag sa širinom postavljenom na 50%, unutrašnji `<div>` će biti širok 250 piksela.
