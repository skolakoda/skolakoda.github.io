---
title: "Vežba: testiranje <code>sum</code> funkcije"
layout: lekcija-js
permalink: /vezba-testiranje-sum-funkcije
---

Pomoću *Jasmine* biblioteke napisali smo specifikaciju za jednostavnu `sum` funkciju koja sabira dva broja:

```js
describe("Testing sum funcion", function () {

    it("should add two integers", function () {
        expect(sum(2, 2)).toBe(4);
    });

    it("should add two negative numbers", function () {
        expect(sum(-2, -2)).toBe(-4);
    });

    it("should add two floating point numbers", function () {
        expect(sum(0.2, 0.4)).toBe(0.6);
    });

    it("should not add two strings", function () {
        expect(sum("zdravo", "svete")).toBeNaN();
    });

    it("should not add undefined and object", function () {
        expect(sum(undefined, {})).toBeNaN();
    });

    it("should not add string and number", function () {
        expect(sum("4", 4)).toBeNaN();
    });

});
```

Naivna implementacija `sum` funkcije bila bi sledeća, ali to neće zadovoljiti specifikaciju:

```js
function sum(x, y) {
  return x + y;
}
```

Zadatak je popraviti funkciju tako da zadovolji specifikaciju.

{:.resenje}
```js
function sum(x, y) {
    if (typeof x !== "number" || typeof y !== "number")
        return NaN;
    return Number((x + y).toFixed(10));
}
```
