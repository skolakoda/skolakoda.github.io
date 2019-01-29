---
title: Uvod u JSON
layout: lekcija-js
permalink: /json-format
---

<!-- ![](https://cdn-images-1.medium.com/max/800/1*BzD9VGIbTmQpANue7eC1Rw.png) -->

**JSON (*JavaScript Object Notation*) je popularan međujezički format razmene podataka.**

JSON se temelji na sintaksi Javascript objekata. Budući da većina web aplikacija koristi JavaScript s klijentske strane, JSON je postao *de facto* standard za pakovanje podataka na webu, potiskujući stariji XML format.

## Poređenje XML i JSON formata

Evo primera kako se struktura `Stock` može predstaviti u XML-u:

```xml
<stock>
  <country>USA</country>
  <currency>USD</currency>
  <price>43.12</price>
  <symbol>IBM</symbol>
</stock>
```

U JSON formatu, isti resurs izgledao bi ovako:

```json
{
  "stock": {
    "country": "USA",
    "currency": "USD",
    "price": 43.12,
    "symbol": "IBM"
  }
}
```

{:.uokvireno}
Mnoge serverske aplikacije pružaju javne podatke u JSON formatu. Pogledajte [spisak javnih API-ja](https://github.com/toddmotto/public-apis) za podatke koje možete koristiti u aplikaciji.

## Rad sa JSON formatom u Javascriptu

Glavna prednost je u činjenici da je korišćenje JSON-a u JavaScriptu jednostavno. Recimo da smo poslali GET zahtev i dobili JSON string kao odgovor. Potrebno je samo parsirati JSON string da bismo dobili objekat:

```js
const objekat = JSON.parse(odgovor)
```

Da bismo uradili suprotno, tj. preveli objekat u JSON string, kori­stimo metodu `stringify`:

```js
const struna = JSON.stringify({ime: "Damjan", skill: "JS"})
```

Zbog svoje jednostavnosti, JSON je brzo postao popularan jezički nezavisni format za razmenu podataka, koji možemo kreirati na serveru pomoću jezika koji želimo. Na primer, u PHP-u postoje funkcije `json_encode()` i `json_decode()`, koje omogućavaju da serijalizujemo niz ili objekat u JSON string i obratno.

## JSON i jednostranične aplikacije

Razvoj jednostraničnih aplikacija (*Single Page Applications*, SPA) je već godinama trend na webu. Jednostranične aplikacije su aplikacije koje nikad ne osvežavaju celu stranicu, već samo ažuriraju njene delove, učitavajući nove podatke putem HTTP zahteva u JSON formatu.

Googleov Gmail je dobar primjer SPA aplikacije. Kad stigne nova poruka, samo se dodaje novi red u sadržaj poštanskog sandučeta. Poslužitelj šalje samo sirove podatke. Nikakav HTML se ne generira na serveru.


## Izvori

- Yakov Fain, *Programiranje Java* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.d0d155cbd2ce41fab575d00763bbf669.programiranje-java.aspx)), Zagreb 2015.
- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
