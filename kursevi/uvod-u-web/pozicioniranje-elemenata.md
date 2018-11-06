---
title: Pozicioniranje elemenata
layout: lekcija-html
permalink: /pozicioniranje-elemenata
image: /images/koncepti/web/pozicioniranje-elemenata.png
---

![]({{page.image}})

**Pozicija elementa određuje gde će on biti prikazan na stranici.** Pozicioniranje elemenata se reguliše preko osnovnog svojstva `position` i pomoćnih svojstava `left`, `right`, `top` i `bottom`.

## Statična pozicija (`static`)

Podrazumevano pozicioniranje elemenata je statično (`static`).

To znači da svaki element zauzima svoje regularno mesto na ekranu.

## Fiksna pozicija (`fixed`)

Fiksna pozicija fiksira element za određeni deo ekrana. Često se koristi kada želimo da `header` i `footer` budu pričvršćeni na vrhu, odnosno dnu stranice.

Primer:

```css
footer {
  bottom: 0;
  position: fixed;
}
```

## Apsolutna pozicija (`absolute`)

Apsolutna pozicija je slična fiksnoj, samo element nije fiksiran za ekran već za stranicu. Apsolutni element se pozicionira u odnosu na telo stranice (`body`) ili na prvog relativno pozicioniranog roditelja.

Primer:

```css
div {
  position: absolute;
  right: 0;
  top: 80px;
}
```

## Relativna pozicija (`relative`)

Relativna pozicija je slična statičnoj, jer ostavlja element na svom uobičajenom mestu. Obično se koristi za zadavanje referentnog okvira apsolutno pozicioniranih elemenata.

Za razliku od statične, relativna pozicija reaguje na promenu svojstava `left`, `right`, `top` i `bottom`.

Primer:

```css
div {
  position: relative;
  left: 30px;
}
```