---
title: Destrukturiranje
layout: lekcija-napredni-js
permalink: /javascript-destrukturiranje
---

**Destrukturiranje je rastavljanje složene strukture na sastavne delove. U Javascriptu, pomoću operatora destrukturiranja (`...`) možemo raspakivati vrednosti iz objekata i nizova.**

## Destrukturiranje objekata

ES6 je uveo sintaksu koja značajno poboljšava način na koji pristupamo svojstvima objekta i članovima niza. Razmotrimo tipični primer:

```js
const config = {
  server: 'localhost',
  port : ' 8080'
}
const server = config.server
const port = config.port
```

Ovde smo izvukli vrednosti `server` i `port` iz objekta `config` i dodelili ih konstantama. Međutim, kada objekat sadrži mnogo svojstava, ovu jednostavnu proceduru je zamorno pisati.

U sledećem primeru ćemo koristiti destrukturiranje da bi dodelili vrednosti objekta konstantama:

{:.ulaz}
```js
const config = {
  server: 'localhost',
  port: '8080',
  timeout: 900,
}
const {server, port} = config
console.log(server, port)
```

Kao što vidimo, `server` i `port` su konstante kojima su dodeljene pripadajuće vrednosti iz objekta `config`, zato što je naziv svojstava isti kao naziv konstante. Takođe, naziv konstante može biti različit od naziva atributa. Na primer, svojstvo `port` možemo dodeliti konstanti `kapija`:

```js
const {port: kapija} = config
console.log(kapija)
```

Ako odredimo lokalnu promenljivu pomoću naziva svojstva koji ne postoji u objektu, ona dobija vrednost `undefined`. Međutim, možemo opciono da navedemo podrazumevanu vrednost:

{:.ulaz}
```js
const config = {
  server: 'localhost',
  port: '8080'
}
const {server, port, timeout = 100} = config
console.log(timeout)
```

## Destrukturiranje nizova

Destrukturiranje se može primeniti i na nizove, a sintaksa je slična kao za objekte. Samo treba zagrade objekta da zamenimo zagradama niza:

{:.ulaz}
```js
const brojevi = [50, 20]
const [x, y] = brojevi
console.log(x, y)
```

Dodela se vrši prema redosledu članova niza. Međutim, možemo da preskočimo neke od članova:

{:.ulaz}
```js
const dani = ['Četvrtak', 'Petak', 'Subota', 'Nedelja']
const [,, sub, ned] = dani
console.log(sub, ned)
```

Takođe, možemo da koristimo operator ostatka (`...`) da bismo preostale elemente niza dodelili drugom nizu. Operator ostatka može da se koristi samo kao poslednji operator tokom destrukturiranja:

{:.ulaz}
```js
const [x, ...ostali] = [1, 2, 3, 4, 5]

console.log(ostali)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
