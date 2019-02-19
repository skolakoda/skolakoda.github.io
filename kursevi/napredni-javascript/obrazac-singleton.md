---
title: "Jedinac (<i>singleton</i>) u Javascriptu"
layout: lekcija-napredni-js-frontend
permalink: /javascript-obrazac-singleton
---

**Jedinac ili unikat (*singleton*) je projektni obrazac koristan kada treba da kreiramo samo jedan objekat određene vrste.**

U klasičnim OO jezicima to znači da se instanca klase kreira samo jednom, a kada poku­šamo da kreiramo novi objekat iste klase, biće vraćena originalna instanca.

## Implementacija pomoću objekta

Pošto u JavaScriptu objekti mogu postojati bez klase, jedinac je podrazumevani obrazac. Svaki objekat je jedinac. Najprostija implementacija unikatnog obrasca se vrši pomoću običnog objekta:

```js
const jedinac = {}
```

## Implementacija pomoću klase

Možemo koristiti i klasu da implementiramo jedinca:

{:.ulaz}
```js
let primerak = null

class Jedinac {
  constructor() {
    if (!primerak) {
      primerak = this
    }
    return primerak
  }
}

const jedinac = new Jedinac()
// ... 1000 linija dalje u kodu ...
const jedinac2 = new Jedinac()
console.log(jedinac === jedinac2)
```

Iako koristimo naredbu `new`, ideja je da se kreira samo jedna instanca, koja se vraća u narednim pozivima. Ako slučajno napravimo više instanci u programu, klasa će uvek vraćati isti objekat.

Promenljiva `primerak` ne treba da bude globalna, već zatvorena u modul, odnosno opseg fajla.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.