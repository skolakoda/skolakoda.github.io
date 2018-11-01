---
title: Uvod u DOM
layout: lekcija-js
permalink: /uvod-u-dom
image: https://mdn.mozillademos.org/files/807/Using_the_W3C_DOM_Level_1_Core-doctree.jpg
---

**Objektni model dokumenta** (*Document Object Model*, skraćeno **DOM**) je programski interfejs ka HTML dokumentu. DOM predstavlja HTML stranicu putem Javascript objekta, čime se našim programima omogućava komunikacija sa web stranicom i njenim elementima.

Kad otvorimo neku stranicu, pregledač učita HTML, parsira ga i izgradi model učitanog dokumenta, odnosno kreira globalni `document` objekat. `document` objekat sadrži razne metode i svojstva, između ostalog `head`, `body`, selektore i ostalo.

Objektni model dokumenta ima strukturu stabla.

![]({{page.image}})

## Razlika HTML-a i DOM-a

**HTML je inicijalni kod web stranice. Možemo ga videti pritiskom na desno dugme i izborom `View Page Source`. DOM je trenutno stanje web stranice, koje možemo videti `Inspect` alatkom.**

Kod statičkih stranica HTML i DOM su često identični. Međutim, kod stranica koje se dinamički renderuju Javascriptom, oni se u potpunosti razlikuju. Na primer, ispitajte aplikaciju *[Programerski citati](https://skolakoda.org/programming-quotes/)*, sa `View Page Source` i  `Inspect` alatkom. Izvorni HTML ima samo osnovnu strukturu i prazan `<div id="root">` u kojem se renderuje sve ostalo:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="description" content="The programming quotes database">
  <meta name="viewport" content="width=device-width">
  <title>Programming quotes</title>
  <link rel="shortcut icon" href="/programming-quotes/favicon.ico">
  <link href="/programming-quotes/static/css/main.css" rel="stylesheet">
</head>

<body>
  <div id="root"></div>

  <script type="text/javascript" src="/static/js/main.js"></script>
</body>

</html>
```

Nakon što se aplikacija pokrene u pregledaču, `<div id="root">` biva ispunjen najrazličitijim sadržajem. 

{:.uokvireno.ideja}
Dinamički renderovane stranice na strani klijenta su još uvek prilično loše rešenje za SEO. One su gotovo nevidljive za internet pretraživače, jer dobijaju sadržaj tek nakon što se učitaju u pregledač.

## DOM manipulacija

**Manipulacija DOM-a je menjanje svojstava web stranice i elemenata koji se nalaze na njoj, pomoću Javascripta. Svaka izmena se odmah uživo prikazuje na stranici.**

Najprostiji primer DOM manipulacije bio bi menjanje boje pozadine i veličine slova cele stranice:

{:.ulaz}
```js
// menja stil tela dokumenta

document.body.style.background = 'yellow';
document.body.style.fontSize = '1.4em';
```

{:.uokvireno.ideja}
Ovaj kod možete izvršiti unutar konzole na bilo kom sajtu.

Za složeniju DOM manipulaciju koristimo selektore.
