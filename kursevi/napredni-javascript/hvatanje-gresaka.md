---
title: Hvatanje grešaka
layout: lekcija-napredni-js
permalink: /javascript-hvatanje-gresaka
---

**Greške se dešavaju i dobro je uspostaviti mehanizam pomoću kojeg program može da predvidi pojavu greške, i prevaziđe je na regularan način.**

U JavaScriptu, kao i mnogim drugim jezicima, postoje naredbe `try`, `catch` i `finally`, koje nam pomažu da uhvatimo grešku.

## Pokušaj i hvatanje

Recimo želimo da iskoristimo funkciju iz neke biblioteke, za koju u trenutku izvršenja programa nismo sigurni da je prisutna. Možemo pokušati da je pozovemo, a ako ne postoji, uhvatićemo grešku pre nego što dođe do korisnika. Treba samo da upotrebimo naredbe `try` i `catch` na sledeći način:

{:.ulaz}
```js
try {
  angular()
} catch (e) {
  console.log(e.message)
}
```

Blok nakon `catch` se aktivira samo ako je prilikom pokušaja (`try`) došlo do greške. U bloku za hvatanje greške treba definisati šta se dešava kada do greške dođe. Na primer, možemo samo obavestiti korisnika ili izvršiti neku rezervnu operaciju.

Promenljiva `e` u zagradama iza naredbe `catch` sadrži objekat greške. Neka od korisnih svojstava su `e.name` i `e.message`.

## Konačni blok

Pored pokušaja izvršenja (`try`) i hvatanja greške (`catch`), koji su međusobno isključivi, postoji i blok koji se uvek izvršava - `finally`:

{:.ulaz}
```js
try {
  angular()
} catch (e) {
  console.log(e.name + ': ' + e.message)
} finally {
  console.log('Konačni blok se uvek izvršava.')
}
```

## Ime greške

Svojstvo `e.name` sadrži naziv konstruktora korišćenog za kreiranje objekta greške. Objekti greške se kreiraju pomoću jednog od ugrađenih konstruktora `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError` i `URIError`. Svi ovi konstruktori su nasleđeni od objekta `Error`.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
