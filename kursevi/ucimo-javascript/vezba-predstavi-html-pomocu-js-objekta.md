---
title: "Vežba: predstavi HTML strukturu pomoću Javascript objekta"
layout: lekcija-js
permalink: /vezba-predstavi-html-pomocu-js-objekta
---

Predstavi sledeću HTML strukturu pomoću Javascript objekta. Cilj je da objekat ima isto nivoa dubine, i da prenese sve podatke koji se nalaze u HTML-u.

Svrha ove vežbe je razumevanje objektnog modela dokumenta. 

```html
<!doctype html>
<html>

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>HTML stablo</title>
  </head>

  <body>

    <div>
      <h1>Dobrodošli</h1>

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Heckert_GNU_white.svg/64px-Heckert_GNU_white.svg.png" />

      <p>HTML struktura je razgranata. Deca elementi se nalaze unutar roditeljskih elemenata.</p>
    </div>

    <div>
      <h2 id="podnaslov">Učimo web development</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sint, necessitatibus officia officiis consequuntur doloribus impedit, optio quaerat, repellendus veniam placeat velit ex sapiente ullam iusto quis. Quasi, alias, quod.</p>
    </div>

  </body>

</html>
```

Napomena: Dato je jedno od mogućih rešenja.

{:.ulaz.resenje}
```js
const html = {
  head: {
    "01": {
      tag: "meta",
      charset: "UTF-8"
    },
    "02": {
      tag: "meta",
      name: "viewport",
      content: "width=device-width"
    },
    "03": {
      tag: "title",
      sadrzaj: "HTML stablo"
    }
  },
  body: {
    "04": {
      tag: "div",
      "05": {
        tag: "h1",
        sadrzaj: "Dobrodošli"
      },
      "06": {
        tag: "img",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Heckert_GNU_white.svg/64px-Heckert_GNU_white.svg.png"
      },
      "07": {
        tag: "p",
        sadrzaj: "HTML struktura je razgranata. Deca elementi se nalaze unutar roditeljskih elemenata."
      }
    },
    "08": {
      tag: "div",
      "09": {
        tag: "h2",
        sadrzaj: "Učimo web development",
        id: "podnaslov"
      },
      "10": {
        tag: "p",
        sadrzaj: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sint, necessitatibus officia officiis consequuntur doloribus impedit, optio quaerat, repellendus veniam placeat velit ex sapiente ullam iusto quis. Quasi, alias, quod."
      }
    }
  }
}

function iteriraj(obj) {
  for (const kljuc in obj) {
    if (typeof obj[kljuc] == "object") {
      iteriraj(obj[kljuc])
    } else {
      if (kljuc == 'tag') console.log(obj[kljuc])
    }
  }
}

iteriraj(html)
```