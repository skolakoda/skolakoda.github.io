---
title: Razlika HTML-a i DOM-a
layout: lekcija-js
permalink: /razlika-html-i-dom
---

**HTML je inicijalni kod web stranice. Možemo ga videti pritiskom na desno dugme i izborom `View Page Source`. DOM je trenutno stanje web stranice, koje možemo videti `Inspect` alatkom.**

Kod statičkih stranica, HTML i DOM su često identični. Međutim, kod stranica koje su dinamički renderovane Javascriptom, oni se u potpunosti razlikuju. Na primer, ispitajte React aplikaciju *[Programerski citati](https://skolakoda.org/programming-quotes/)*, gde se inicijalni HTML svodi na osnovni šablon i meta tagove, a svi ostali elementi se dodaju naknadno.

## Primer

Izvorni HTML kod React aplikacija ima samo osnovnu strukturu i prazan `<div id="root">` u kojem se renderuje sve ostalo:

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
  <script type="text/javascript" src="/programming-quotes/static/js/main.js"></script>
</body>

</html>
```

Nakon što se aplikacija pokrene u pregledaču, `<div id="root">` biva ispunjen najrazličitijim sadržajem. 

{:.uokvireno}
Dinamički renderovane stranice na strani klijenta su još uvek prilično loše rešenje za SEO. One su gotovo nevidljive za internet pretraživače, jer dobijaju sadržaj tek nakon što se učitaju u pregledač.