---
title: Stilizovanje Javaskriptom
layout: lekcija-js
permalink: /stilizovanje-javaskriptom
---

**Putem Javascripta možemo modifikovati stil elementa.**

DOM elementi imaju svojstvo `style`, čija su svojstva preslikana CSS svojstva. Na primer, možemo promeniti stil pasusa tako što mu dodamo crvenu ivicu na sledeći način:

```js
pasus.style.border = "1px solid red"
```

CSS svojstva često sadrže crtice u nazivu, koje JavaScript ne prihvata. U takvim slučajevima naziv atributa se prevodi u kamilju (*camel case*) sintaksu, tako što izostavimo crticu i sledeću reč počnemo velikim slovom. 

Dakle, `padding-top` postaje `paddingTop`, `margin-left` postaje `marginLeft` i tako dalje. Na primer:

```js
pasus.style.fontWeight = 'bold'
```

## Stilizovanje preko `style` atributa kao loša praksa

Iako stilizovanje preko `style` atributa može učiniti stilove dinamičkim, ovo se generalno smatra lošom praksom, jer ne poštuje razdvajanje briga između Javascripta i CSS-a, odnosno programiranja i dizajna.

Alternativa je da putem Javascripta samo dodajemo i uklanjamo CSS klase. Na taj način, nadležnost CSS-a ostaje dizajn, i tu se definišu klase, odnosno teme koje je moguće koristiti.
