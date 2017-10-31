---
title: Kako razlikovati uređaje iste veličine prema dodirljivosti ekrana?
layout: post
author: damjan
tags: [responsive, css, frontend, touch-screen]
image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/A_user_performing_gesture_interactions_with_a_Powerwall_display_at_the_University_of_Leeds.jpg/1024px-A_user_performing_gesture_interactions_with_a_Powerwall_display_at_the_University_of_Leeds.jpg
---

![]({{page.image}})

**Obično se na webu klijentski uređaji tretiraju prema veličini ekrana. Na primer, ako je ekran manji od 768 piksela smatra se malim (mobiln, tablet), ako je veći od 1200 piksela smatra se velikim (laptop, desktop). Međutim, nedavno nam je na jednom od projekata ova logika pala u vodu.**

Klijent je izričito zatržio da na velikim uređajima, koji imaju dodirni ekran (*touch screen*), ne prikazujemo desktop navigaciju već mobilnu. Čitava naša logika koju smo gradili oko veličine ekrana pokazala se nedovoljnom. Nakon dužeg većanja, rešili smo da uvedemo dodatnu logiku za dodirljivost.

## Detekcija dodirnog ekrana Javaskriptom

Pošto sam CSS nema kapacitet da prepozna da li je ekran dodirljiv, pomoću Javaskripta detektujemo dodirljivost ekrana i dodajemo odgovarajuću klasu na telo dokumenta:

```js
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
}

const touchClass = isTouchDevice() ? 'touch' : 'no-touch';
document.body.classList.add(touchClass);
```

Time omogućujemo dalji razvoj dodirne logike u CSS-u:

```css
.touch {
  /* handle touchable devices */
}

.no-touch {
  /* handle non-touchable devices */
}
```

## Tretiranje dodirnih uređaja CSS-om

Sada CSS-om možemo tretirati bilo koju zamislivu kombinaciju veličine i dodirljivosti ekrana.

Za početak, dovoljna je jednostavna logika gde imamo samo dve veličine uređaja (veću i manju) i dve vrste ekrana (touchable i non-touchable), što daje ukupno 4 kombinacije:

```css
@media (max-width: 767px) {
  .touch {
    /* handle smaller touchable devices */
  }
  .no-touch {
    /* handle smaller non-touchable devices */
  }
}

@media (min-width: 768px) {
  .touch {
    /* handle larger touchable devices */
  }
  .no-touch {
    /* handle larger non-touchable devices */
  }
}
```

Eto, sa nekoliko linija koda na frontendu, postigli smo ono što, koliko je meni poznato, još uvek ni Bootstrap ne radi - da različito tretiramo uređaje iste veličine prema dodirljivosti ekrana.
