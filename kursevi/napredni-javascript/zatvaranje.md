---
title: Zatvaranje (<i>closure</i>)
layout: lekcija-napredni-js
permalink: /javascript-zatvaranje
---

![](https://i2.wp.com/geekstrick.com/wp-content/uploads/2017/12/Understanding-JavaScript-Closure.png)

Još jedan zanimljiv aspekt funkcije u JavaScriptu je upotreba ugniježđenih funkcija. Proučite sljedeći kod:

```js
function outer (args) {
  function inner (args) {
    // inner statements;
  }
}
```

Kod ugniježđenih funkcija unutarnja funkcija djeluje unutar dosega vanjske funkcije, te ima pristup njenim varijablama i argumentima. Međutim, vanjska funkcija nema pristup varijablama unutarnje funkcije. Točnije, nema ukoliko nije izrađena kao literal funkcije i vraćena pozivajućoj aplikaciji.

## Funkcija koja vraća funkciju

Naredni primjer prikazuje vraćanje ugniježđene funkcije. Unutarnja funkcija ima pristup parametru i varijabli vanjske funkcije. Ima i vlastiti parametar kojem vanjska funkcija nema pristup.

Kad se unutarnja funkcija proslijedi aplikaciji putem vanjske funkcije i pozove, ona strunu (`base`), proslijeđenu kao parametar u izvornom pozivu vanjske funkcije, pripaja struni (`ext`), koja je proslijeđena unutarnjoj funkciji kao parametar, te vraća rezultat.

{:.ulaz}
```js
// Vanjska funkcija
function outerFunc(base) {
  // Vraća unutarnju funkciju
  return function (ext) {
    return base + ext + "!";
  }
}


// Omogućava pristup unutarnjoj funkciji
var myClosure = outerFunc("Hello ");
// Unutarnja funkcija i dalje ima pristup argumentu vanjske funkcije
console.log(myClosure("World!"));
// I dalje ima pristup
console.log(myClosure("Reader!"));

// Stvara još jednu instancu unutarnje funkcije
var anotherClosure = outerFunc("Hiya, Hey ");
console.log(anotherClosure("you!"));
```

Rezultat ove aplikacije su tri različita ispisa: „`Hello World!!`“, „`Hello Reader!!`“ i „`Hiya, Hey you!!`“

## Kako ovo radi?

![](https://2.bp.blogspot.com/-ce8JZu-2De8/VzIj3tYM1qI/AAAAAAAALFc/ve0ZprxQQoI4_3x0EidEaHDnEdx5S9ZCACLcB/s640/closure.jpg)

Kako ovo radi? Nije li to kršenje pravila dosega (*scope*) koje kaže da, kada funkcija završi, sva se memorija potrošena za njene lokalne varijable oslobađa automatskim sakupljanjem otpada?

Ne sasvim.

Svaki put kad se definira novi doseg u JavaScript aplikaciji, stvara se pridruženi mjehurić dosega (da ga tako nazovemo) kako bi ga obuhvatio. To vrijedi za funkcije, koje djeluju u vlastitom dosegu.

U pravilu, kad funkcija završi, doseg se oslobađa jer više nije potreban. Međutim, u slučaju unutarnje funkcije koja je vraćena vanjskoj aplikaciji i dodijeljena vanjskoj varijabli, doseg unutarnje funkcije pripaja se vanjskoj funkciji, koja je sa svoje strane pridružena aplikaciji koja poziva – upravo dovoljno za održavanje integriteta unutarnje funkcije te argumenta i varijable vanjske funkcije.

Vraćanje literala unutarnje funkcije te njegovo dodjeljivanje varijabli u JavaScripu je poznato kao zatvaranje (engl. *closure*). Ova koncepcija ulančavanja dosega osigurava da će podaci potrebni za rad aplikacije biti na svom mjestu.


Izvor: Shelley Powers, *Naučite JavaScript* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.776647dde2de4ab9836a80545db56350.naucite-javascript.aspx)), Zagreb 2010.
