---
title: Uvod u DOM
layout: lekcija-js
permalink: /uvod-u-dom
image: https://mdn.mozillademos.org/files/807/Using_the_W3C_DOM_Level_1_Core-doctree.jpg
---

**Objektni model dokumenta** (*Document Object Model*, skraćeno **DOM**) je programski interfejs ka HTML dokumentu. DOM predstavlja HTML stranicu putem Javascript objekta, čime se našim programima omogućava komunikacija sa web stranicom i njenim elementima.

DOM-u se pristupa preko globalnog `document` objekta. Pomoću njegovih metoda i svojstava možemo da pristupimo svakom elementu stranice, da modifikujemo ili uklo­nimo elemente i dodamo nove.

DOM predstavlja HTML dokument kao stablo čvorova (*node*-ova).

## Struktura stabla

Objektni model dokumenta ima strukturu stabla. Pogledajte ovaj primer HTML stranice:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Moja stranica</title>
</head>
<body>
  <p>Prvi pasus</p>
  <p><em>Drugi</em> pasus</p>
  <!-- jedan obican komentar -->
</body>
</html>
```

Ako ovo posmatramo kao porodične odnose, možemo reći da je `<body>` roditelj taga `<p>`, a tag `<p>` potomak. Tag `<em>` je potomak taga `<p>`, a `<p>` njegov roditelj. Odnos između „roditelja“ i „potomaka“ može da se prikaže grafički u porodičnom stablu koje se zove DOM stablo.

![]({{page.image}})

Svi tagovi su prikazani kao čvorovi stabla. Komentari su, takođe, čvorovi na stablu. Postoje takozvani čvorovi teksta (*text node*) - na primer, tekst unutar taga `<em>` je čvor teksta. Razmak je, takođe, čvor teksta. Svaki čvor u DOM stablu je objekat, koji ima svoja svojstva i metode, koje koristimo na osnovu lanca nasleđivanja.

Dva glavna načina za pristup čvorovima su kretanjem po DOM stablu ili pomoću selektora.

## Razlika HTML-a i DOM-a

**HTML je inicijalni kod web stranice. Možemo ga videti pritiskom na desno dugme i izborom `View Page Source`. DOM je trenutno stanje web stranice, koje možemo videti `Inspect` alatkom.**

Kod statičkih stranica HTML i DOM su često identični. Međutim, kod stranica koje se dinamički renderuju Javascriptom, oni se u potpunosti razlikuju. Na primer, ispitajte aplikaciju *[Programerski citati](https://skolakoda.org/programming-quotes/)*, sa `View Page Source`. Izvorni HTML ima samo osnovnu strukturu i jedan prazan element:

```html
<div id="root"></div>
```

Nakon što se aplikacija pokrene u pregledaču, prazan `div` biva ispunjen sadržajem, što možemo proveriti `Inpect` alatkom. 

{:.uokvireno.ideja}
Dinamički renderovane stranice na strani klijenta su još uvek prilično loše rešenje za SEO. One su gotovo nevidljive za internet pretraživače, jer dobijaju sadržaj tek nakon što se učitaju u pregledač.

## `document` objekat

Globalni objekat `document` (kome možemo pristupiti i preko `window.document`) predstavlja trenutno učitani dokument i služi kao pristupna tačka sadržaju stranice. Kad god otvorimo neku stranicu, pregledač učita HTML, parsira ga i izgradi model učitanog dokumenta, u vidu `document` objekta. 

`document` sadrži razne metode i svojstva, između ostalog `document.head`, `document.body`, selektore elemenata i ostalo. Da bismo istražili `document` objekat, možemo mu pristupiti iz konzole pregledača.

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

## Svojstva čvorova

Svi DOM čvorovi, uključujući i `document`, imaju svojstva `nodeType`, `nodeName` i `nodeValue`.

{:.izraz}
```js
document.nodeType
```

Postoji 12 tipova čvorova, koji se prikazuju kao celi brojevi. Kao što vidimo, tip čvora docu­ment je 9. Tipovi koji se najviše koriste su: 1 (element), 2 (atribut) i 3 (tekst).

Čvorovi, takođe, imaju nazive. U HTML tagovima naziv čvora je naziv taga (svojstvo `tagName`). Naziv tekstualnih čvorova je `#text`, a naziv čvora dokumenta je sledeći:

{:.izraz}
```js
document.nodeName
```

Čvorovi imaju i vrednosti. Na primer, vrednost tekstualnih čvorova je njihov tekst. Čvor doku­menta nema vrednost, kao što možemo videti:

{:.izraz}
```js
document.nodeValue
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- MDN, [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)