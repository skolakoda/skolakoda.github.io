---
title: Prototipsko nasleđivanje
layout: lekcija-napredni-js
permalink: /prototipsko-nasledjivanje
---

**Pre uvođenja ES6 klasa, nasleđivanje se u Javascriptu ručno implementiralo preko prototipa. Prototipsko nasleđivanje i dalje radi u pozadini, ali je nova sintaksa značajno olakšala stvari.**

Podrazumevani način implementiranja nasleđivanja u Javascriptu je ulančavanje nasleđivanja pomoću prototipa, odnosno prototipsko ulančavanje. Konstruktorska funkcija ima svojstvo `prototype`, koje ukazuje na prototipski objekat. Kada se funkcija pozove sa operatorom `new`, novi objekat će biti kreiran i vraćen. Novi objekt ima vezu sa prototipskim objektom, što mu omogućava da se koristi njegovim metodima i svojstvima.

Preko veze novog objekta sa prototipom se kreiran lanac, koji se naziva **prototipski lanac**.

## Prototipsko ulančavanje

Da bismo implementirali hijerarhiju, definisaćemo tri konstruktor funkcije:

```js
function Oblik() {
  this.ime = 'Oblik'
  this.toString = function() {
    return this.ime
  }
}

function Oblik2D() {
  this.ime = '2D oblik'
}

function Trougao(stranice, visina){
  this.ime = 'Trougao'
  this.stranice = stranice
  this.visina = visina
  this.izracunajPovrsinu = function() {
    return this.stranice * this.visina / 2
  }
}
```

Kod u kome nastaje „magija“ nasleđivanja je sledeći:

```js
Oblik2D.prototype = new Oblik()
Trougao.prototype = new Oblik2D()
```

Sta se ovde dešava? Umesto da prototip funkcije `Oblik2D` proširimo pojedinačnim svojstvima, menjamo ga drugim objektom, kreiranim pomoću `new Oblik()`. Isto primenjujemo i na `Trougao`. Važno je da zapamtimo da JavaScript funkcioniše pomoću objekata, a ne pomoću klasa. Potrebno je kreirati instancu da se nasledi svojstvo - ne nasleđuje se direktno od konstruktora.

Zamena čitavog prototipa, suprotno dodavanju svojstava, ima neželjene efekte na svojstvo `constructor`. Zato je potrebno da ponovo postavimo `constructor` nakon nasleđivanja, na sledeći način:

```js
Oblik2D.prototype.constructor = Oblik2D
Trougao.prototype.constructor = Trougao
```

Sada instanciranje objekta i pozivanje metoda funkcioniše na očekivani način:

```js
const trokut = new Trougao(5, 10)
trokut.izracunajPovrsinu() // 25
```

Objekat `trokut` nema svoju metodu `toString()`, ali je nasleđuje. Primetimo da nasleđeni metod `toString()` povezuje `this` sa objektom `trokut`:

```js
trokut.toString() // "Trougao"
```

## Traženje po prototipskom lancu

Razmotrimo šta JavaScript virtuelna mašina radi kada pozovemo metod `trokut.toString()`:
- Prolazi kroz sva svojstva `trokut` i ne nalazi metod pod nazivom `toString()`.
- Pronalazi da je objekat na koji ukazuje svojstvo `trokut.__proto.__` instanca konstruktora `Oblik2D()`.
- JavaScript virtuelna mašina prolazi kroz instancu objekta `Oblik2D` i ne nalazi metod `toString()`. 
- Zatim, proverava svojstvo `__proto__` tog objekta. Ovoga puta svojstvo `__proto__` ukazuje na instancu koju je kreirao konstruktor `Oblik()`.
- Instanca konstruktora `Oblik()` je pregledana i metod `toString()` je konačno pronađen.
- Ovaj metod se poziva na objektu `trokut`, a `this` iz konstruktora `Oblik` ukazuje na objekat `trokut`.

## Provera nasleđivanja

Ako zatražimo od objekta `trokut` da nam „saopšti“ svoj konstruktor, dobićemo tačan odgovor, jer smo svojstvo `constructor` ponovo postavili nakon nasleđivanja:

```js
trokut.constructor === Trougao // true
```

Ako upotrebimo operator `instanceof`, možemo da potvrdimo da je objekat `trokut` instanca sva tri konstruktora:

```js
trokut instanceof Oblik // true
trokut instanceof Oblik2D // true
trokut instanceof Trougao // true
```

## Premeštanje zajedničkih svojstava u prototip

Kada kreiramo objekte koristeći konstruktor funkciju, sopstveni atributi se dodaju pomoću rezervisane reči `this`. To znači da, uvek kada kreiramo novi objekat pomoću `new Oblik()`, novo svojstvo `ime` se kreira i skladišti u memoriju. Ovo može biti neefikasno u slučajevima kada se atributi ne menjaju u instancama. 

U prethodnom primeru `Oblik()` je definisan na sledeći način:

```js
function Oblik(){
  this.ime = 'Oblik'
}
```

Druga mogućnost je da se svojstvo `ime` doda u prototip i podeli između svih instanci:

```js
function Oblik() {}

Oblik.prototype.ime = 'Oblik'
```

Tako se ne kreira svojstvo za svaki novi objekat, već koristi svojstvo iz prototipa. Ovaj koncept bi trebalo koristiti za sva svojstva koja se ne menjaju od jedne do druge instance. Metodi su idealni za ovu vrstu deljenja.

Sada ćemo refaktorisati prethodni primer, tako što ćemo sve metode i odgovarajuća svoj­stva premestiti u `prototype`. U metodima `Oblik()` i `Oblik2D()` se svi elementi mogu deliti:

```js
function Oblik() {}
// prosirenje prototipa
Oblik.prototype.ime = 'Oblik'
Oblik.prototype.toString = function() {
  return this.ime
}

function Oblik2D () {}
// nasledjivanje
Oblik2D.prototype = new Oblik()
Oblik2D.prototype.constructor = Oblik2D
// prosirenje prototipa
Oblik2D.prototype.ime = '2D oblik'
```

Kao što vidimo, moramo prvo da izvršimo nasleđivanje pre nego što proširimo prototip. Ako najpre ne izvršimo nasleđivanje, sve što dodamo u prototip `Oblik2D.prototype` se briše kada izvršimo nasleđivanje.

Konstruktor `Trougao` je malo drugačiji, zato što je svaka instanca može imati različite dimenzije. Dobro je da sopstvena svojstva `stranice` i `visina` zadržimo, a delimo ostalo:

```js
function Trougao(stranice, visina) {
  this.stranice = stranice
  this.visina = visina
}
// nasledjivanje
Trougao.prototype = new Oblik2D()
Trougao.prototype.constructor = Trougao
// prosirenje prototipa
Trougao.prototype.ime = 'Trougao'
Trougao.prototype.izracunajPovrsinu = function() {
  return this.stranice * this.visina / 2
}
```

## `hasOwnProperty()`

Možemo da koristimo metod `hasOwnProperty()` da bismo videli razliku između sopstvenog svojstva i svojstva iz prototipskog lanca. Na primer:

```js
trokut.hasOwnProperty('stranice') // true
trokut.hasOwnProperty('ime') // false
```

## Nasleđivanje: ažuriran primer

Nasleđivanje objekta `Oblik.prototype` je bolje od nasleđivanja objekta koji kreira kon­struktor `new Oblik()`, jer on daje samo sopstvena svojstva koja se ne mogu ponovo koristiti. Ovo je ažurirani kod:

{:.ulaz}
```js
function Oblik() {}
// prosirenje prototipa
Oblik.prototype.ime = 'Oblik'
Oblik.prototype.toString = function() {
  return this.ime
}

function Oblik2D() {}
// nasledjivanje
Oblik2D.prototype = Oblik.prototype
Oblik2D.prototype.constructor = Oblik2D
// prosirenje prototipa
Oblik2D.prototype.ime = '2D oblik'

function Trougao(stranice, visina) {
  this.stranice = stranice
  this.visina = visina
}
// nasledjivanje
Trougao.prototype = Oblik2D.prototype
Trougao.prototype.constructor = Trougao
// prosirenje prototipa
Trougao.prototype.ime = 'Trougao'
Trougao.prototype.izracunajPovrsinu = function () {
  return this.stranice * this.visina / 2
}

// proba
const trokut = new Trougao(5, 10)
console.log(trokut.izracunajPovrsinu())
console.log(trokut.toString())
```

Kopiranje prototipa je efikasnije, ali ima neželjene efekte. Kada podređeni element modifikuje prototip, svi ostali u lancu nasleđuju promene, jer svi ukazuju na isti objekat. Na primer:

```js
Trougao.prototype.ime = 'Trougao'
```

Ako sada kreiramo instancu `new Oblik()`, svojstvo `ime` biće "Trougao":

```js
const o = new Oblik ()
o.ime // "Trougao"
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
