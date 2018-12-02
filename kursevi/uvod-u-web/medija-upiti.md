---
title: Medija upiti
layout: lekcija-html
permalink: /medija-upiti
---

**Medija upiti (*media queries*) služe da saznamo odlike klijentskog uređaja (pre svega širinu), i tome prilagodimo stranicu.**

Upit medija je logički izraz sa vrednošću `true` ili `false`. Ako je izraz tačan, pregledač će koristi ugnježdeni CSS, ako je netačan, neće. Upiti medija su dobili naziv jer su prvobitno proveravali tip medija na kom se prikazuje stranica. Pored tipa medija, omogućuju nam da proverimo širinu uređaja, razmeru, rezoluciju i ostalo.

Upiti o mediju su uvedeni u CSS3.

## Tipovi medija

Tipovi medija su inicijalno uvedeni u CSS2 da bi se proverilo da li je uređaj ekran ili štampač. Danas postoji znatno više vrsta medija, uključujući:

- `screen` - ekran računara, tableta, telefona
- `print` - štampač
- `projection` - projektor
- `speech` - čitač ekrana
- `tty` - teleprinter, terminal, tj. medij sa znacima fiksne širine
- `tv` - televizor
- `all` - svi mediji

Tip medija možemo dodati i u `<link>` tagu, kada uključujemo css fajl:

```html
<link href="style.css" media="screen">
```

Takođe ga možemo zadati pomoću `media` atributa u `<style>` tagu:

```html
<style media="print">

</style>
```

Konačno, tip medija možemo koristiti unutar medija upita:

```css
@media speech {

}
```

## Odlike medija

Odlike medija (*media features*) su ono što čini upite o mediju interesantnim. Ovo su neke od karakteristika medija koje možemo koristiti za upit:

- `width` - širina prikaza
- `height` - visina prikaza
- `device-width` - širina uređaja
- `device-height` - visina uređaja
- `aspect-ratio` - razmera, tj. odnos širine i visine prikaza
- `device-aspect-ratio` - odnos širine i visine uređaja
- `orientation` - uspravna (`portrait`) ili položena (`landscape`) orjentacija
- `resolution` - gustina piksela uređaja
- `color` - broj bitova po boji, ako nema boja onda 0

## `min` i `max` prefiks

Većini odlika možemo dodati prefiks `min-` ili `max-`. Na primer, da bismo propisali stil za sve uređaje šire od 320 piksela:

```css
@media (min-width: 320px) {

}
```

ili da bismo stilizovali ekrane uže od 1024 piksela:

```css
@media (max-width: 1024px) {

}
```

Medija upite možemo kombinovati rečju `and`. Na primer, možemo dodati stil za pregledače šire od 320 a uže od 1024 piksela:

```css
@media (min-width: 320px and max-width: 1024px) {

}
```
