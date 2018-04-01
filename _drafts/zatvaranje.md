
## Ugniježđene funkcije

Još jedan zanimljiv aspekt funkcije u JavaScriptu je upotreba ugniježđenih funkcija. Proučite sljedeći kod:

```js
function outer (args) {
  function inner (args) {
    // inner statements;
  }
}
```

Kod ugniježđenih funkcija unutarnja funkcija djeluje unutar dosega vanjske funkcije, te ima pristup njenim varijablama i argumentima. Međutim, vanjska funkcija nema pristup varijablama unutarnje funkcije, niti aplikacija koja poziva ima pristup unutarnjoj funkciji. Točnije, nema ukoliko nije izrađena kao literal funkcije i vraćena pozivajućoj aplikaciji, što tada dodatno komplicira situaciju.

# Zatvaranje (*closure*)

Naredni primjer prikazuje izradu ugniježđenog literala unutarnje funkcije, koji se zatim vraća pozivajućoj aplikaciji (u primjeru je podebljana). Unutarnja funkcija ima pristup parametru i varijabli vanjske funkcije. Ima i vlastiti parametar kojem vanjska funkcija nema pristup.

Kad se unutarnja funkcija proslijedi aplikaciji putem vanjske funkcije i pozove izravno, ona niz znakova proslijeđen kao parametar u izvornom pozivu vanjske funkcije pripaja nizu znakova koji je proslijeđen unutarnjoj funkciji kao parametar te vraća rezultat. Mijenjanje parametra unutarnje funkcije mijenja niz znakova, kao što to čini i pozivanje vanjske funkcije s drugačijim parametrom te dobivanje druge instance unutarnje funkcije.

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

Rezultat ove aplikacije su tri dijaloška okvira koja se otvaraju jedan za drugim i poručuju „Hello World!“, „Hello Reader!“ i „Hiya, Hey you!“

Kako ovo radi? Nije li to kršenje pravila dosega koje kaže da, kada funkcija završi, sva se memorija potrošena za njene lokalne varijable oslobađa automatskim sakupljanjem otpada?

Ne sasvim.

Svaki put kad se definira novi doseg u JavaScript aplikaciji, stvara se pridruženi mjehurić dosega, da ga tako nazovemo, kako bi ga obuhvatio. To vrijedi za funkcije, koje djeluju u vlastitom dosegu.

U pravilu, kad funkcija završi, doseg se oslobađa jer više nije potreban. Međutim, u slučaju unutarnje funkcije koja je vraćena vanjskoj aplikaciji i dodijeljena vanjskoj varijabli, doseg unutarnje funkcije pripaja se vanjskoj funkciji, koja je sa svoje strane pridružena aplikaciji koja poziva – upravo dovoljno za održavanje integriteta unutarnje funkcije te argumenta i varijable vanjske funkcije. Vraćanje literala funkcije izrađenog kao unutarnji objekt unutar druge funkcije te njegovo dodjeljivanje varijabli u aplikaciji koja poziva u JavaScripu je poznato kao zatvaranje (engl. *closure*). Ova koncepcija ulančavanja dosega osigurava da će podaci potrebni za rad aplikacije biti na svom mjestu.

## Curenja memorije

No, postoji i problem vezan uz zatvaranje – možete to učiniti slučajno. U prethodnom primjeru, ako se izradi nova referenca na unutarnju funkciju za svaki izrađeni niz znakova, umjesto da se ponovno upotrijebi varijabla koja pruža referencu na unutarnju funkciju, tijekom vremena nastat će mnoge instance tog objekta. Do slučajnog zatvaranja može doći kad se izradi kružna referenca, kao što je sljedeća sa Mozillinih stranica s dokumentacijom:

```js
function leakMemory() {
  var el = document.getElementById('el');
  var newObj = { 'el': el };
  el.newObj = newObj;
}
```

U ovom primjeru koda DOM-u se pristupa radi uzimanja elementa identificiranog s `el`. Element se zatim koristi za izradu nove reference na objekt (`newObj`). Novi literal funkcije pravi neimenovani objekt koji dobiveni DOM objekt dodjeljuje svojstvu `el`.

Ovdje dolazi do obrata: `newObj` dodjeljujemo upravo dodanom svojstvu na izvornom elementu dobivenom od DOM-a (savršeno prihvatljiv postupak u JavaScriptu), što doslovce znači da smo objekt dodijelili kao njegovo vlastito svojstvo. Ovo nije nešto što bih željela ohrabrivati, ali većina preglednika uspijeva prekinuti zatvaranje i osloboditi memoriju, osim starijh inačica Internet Explorera.


Izvor: Naučite JavaScript
