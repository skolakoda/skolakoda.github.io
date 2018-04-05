
# Funkcije koje vraćaju funkcije

## Ugniježđene funkcije

Još jedan zanimljiv aspekt funkcije u JavaScriptu je upotreba ugniježđenih funkcija. Proučite sljedeći kod:

```js
function outer (args) {
  function inner (args) {
    // inner statements;
  }
}
```

Kod ugniježđenih funkcija unutarnja funkcija djeluje unutar dosega vanjske funkcije, te ima pristup njenim varijablama i argumentima. Međutim, vanjska funkcija nema pristup varijablama unutarnje funkcije. Točnije, nema ukoliko nije izrađena kao literal funkcije i vraćena pozivajućoj aplikaciji.

## Zatvaranje (*closure*)

Naredni primjer prikazuje vraćanje ugniježđene literal funkcije pozivajućoj aplikaciji. Unutarnja funkcija ima pristup parametru i varijabli vanjske funkcije. Ima i vlastiti parametar kojem vanjska funkcija nema pristup.

Kad se unutarnja funkcija proslijedi aplikaciji putem vanjske funkcije i pozove, ona strunu proslijeđenu kao parametar u izvornom pozivu vanjske funkcije pripaja struni koja je proslijeđena unutarnjoj funkciji kao parametar, te vraća rezultat.

```js
// Vanjska funkcija
function outerFunc(base) {
  var punc = "!";
  // Vraća unutarnju funkciju
  return function (ext) {
    return base + ext + punc;
  }
}

function processNested() {
  // Omogućava pristup unutarnjoj funkciji
  var baseString = outerFunc("Hello ");
  // Unutarnja funkcija i dalje ima pristup argumentu vanjske funkcije
  var newString = baseString("World!");
  console.log(newString);
  // I dalje ima pristup
  var notherString = baseString("Reader!");
  console.log(notherString);
  // Stvara još jednu instancu unutarnje funkcije
  var anotherBase = outerFunc("Hiya, Hey ");
  // Još jedan lokalni niz
  var lastString = anotherBase("you!");
  console.log(lastString);
}
```

Rezultat ove aplikacije su tri različita ispisa: „Hello World!“, „Hello Reader!“ i „Hiya, Hey you!“

## Kako ovo radi?

Kako ovo radi? Nije li to kršenje pravila dosega (*scope*) koje kaže da, kada funkcija završi, sva se memorija potrošena za njene lokalne varijable oslobađa automatskim sakupljanjem otpada?

Ne sasvim.

Svaki put kad se definira novi doseg u JavaScript aplikaciji, stvara se pridruženi mjehurić dosega, da ga tako nazovemo, kako bi ga obuhvatio. To vrijedi za funkcije, koje djeluju u vlastitom dosegu.

U pravilu, kad funkcija završi, doseg se oslobađa jer više nije potreban. Međutim, u slučaju unutarnje funkcije koja je vraćena vanjskoj aplikaciji i dodijeljena vanjskoj varijabli, doseg unutarnje funkcije pripaja se vanjskoj funkciji, koja je sa svoje strane pridružena aplikaciji koja poziva – upravo dovoljno za održavanje integriteta unutarnje funkcije te argumenta i varijable vanjske funkcije.

Vraćanje literala unutarnje funkcije te njegovo dodjeljivanje varijabli u JavaScripu je poznato kao zatvaranje (engl. *closure*). Ova koncepcija ulančavanja dosega osigurava da će podaci potrebni za rad aplikacije biti na svom mjestu.


Izvor: Naučite JavaScript
