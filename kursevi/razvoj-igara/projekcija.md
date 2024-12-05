---
title: Uvod u projekciju
layout: lekcija-razvoj-igara
permalink: /projekcija
---

**Projekcija je način transformacije sveta iz jedne dimenzionalnosti u drugu. Projektovanje možemo zamisliti kao bacanje senke.**

Konačne projekcije samo projektuju predmete na prostor niže dimenzionalnosti. Za projekciju iz 3D u 2D, postoji konačna ravan na koju se projektuje svet. Za projekciju iz 2D u 1D, postoji ograničena linija koja je rezultat projekcije.

## 3D projekcija

![3d-projekcija](/images/razvoj-igara/3d-projekcija.jpg)

3D projekcija je mapiranje trodimenzionalnog prostora na 2D ravan (poput uzimanja fotografije). Svet je trodimenzionalan, ali ekran na kojem ga prikazujemo je uvek 2D.

Koraci:
* definiši 3D koordinate u kodu
* transformiši 3D koordinate u 2D (transformacija položaja vrhova)
* renderuj 2D koordinate na ekranu

Projekcija iz 3D u 2D je apstraktna matematička operacija, koju obično vrši objekat kamere.

## Formula

Počinjemo sa koordinatama u 3D prostoru (`space_x`, `space_y` i `space_z`) i želimo da ih pretvorimo u koordinate ekrana (`screen_x` i `screen_y`). To znači da mora da nestane jedna dimenzija, odnosno `space_z`. Kako to možemo učiniti? Tako što preostale dve podelimo sa `space_z`.

Formula za 3D projekciju na 2D ravan je:

```
screen_x = space_x / space_z
screen_y = space_y / spaze_z
```

## Literatura

- [*WebGL model view projection*](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection)
