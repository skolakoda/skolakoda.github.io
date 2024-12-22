---
title: Pozicioniranje elemenata
layout: lekcija-html
permalink: /pozicioniranje-elemenata
image: /images/koncepti/web/pozicioniranje-elemenata.png
---

![]({{page.image}})

**Pozicija elementa (svojstvo `position`) određuje gde će on biti prikazan na stranici.** 

Postoje četiri šeme pozicioniranja, koje možemo podeliti u dve grupe: `static` i `relative` ne remete raspored, dok `absolute` i `fixed` iskaču iz normalnog toka.

Za svaku poziciju osim statične možemo koristiti dodatna svojstva: `left`, `right`, `top` i `bottom`.

## Statična pozicija (`static`)

Podrazumevano pozicioniranje elemenata je statično (`static`).

To znači da svaki element zauzima svoje regularno mesto na ekranu.

## Fiksna pozicija (`fixed`)

**Fiksna pozicija fiksira element za ekran.** Često se koristi kada želimo da `header` i `footer` budu prilepljeni na vrhu, odnosno dnu ekrana. Primer sintakse:

```css
footer {
  bottom: 0;
  position: fixed;
}
```

## Apsolutna pozicija (`absolute`)

**Apsolutna pozicija raspoređuje element u odnosu na telo stranice ili prvog relativno pozicioniranog roditelja.** Primer sintakse:

```css
div {
  position: absolute;
  right: 0;
  top: 80px;
}
```

## Relativna pozicija (`relative`)

Relativna pozicija je slična statičnoj, jer ostavlja element na svom uobičajenom mestu. Za razliku od statične, relativna pozicija reaguje na promenu svojstava `left`, `right`, `top` i `bottom`. Na primer:

```css
div {
  position: relative;
  left: 5Opx;
  top: 5Opx;
}
```

Ovaj element se pozicionira relativno u odnosu na svoju poziciju u normalnom toku. U ovom slučaju, `div` će biti pomeren 50 piksela nadole i 50 piksela ulevo od svog normalnog položaja.

Relativna pozicija se često koristi za zadavanje referentnog okvira ugnježdenim apsolutno pozicioniranim elementima, bez ikakvog mrdanja samog elementa. 