---
title: Polimorfizam
layout: lekcija-principi
permalink: /polimorfizam
image: /images/koncepti/oop/polimorfizam.png
---

![]({{page.image}})

**Polimorfizam (*"višeobličnost"*) je princip koji različitim objektima omogućuje da dele isti interfejs.** 

U objektno orjentisanim jezicima polimorfizam omogućuje da osnovna klasa definiše opšti interfejs, odnosno metode zajedničke za sve izvedene klase, ali izvedenim klasama ostavlja da implementiraju te metode. Zbog toga se polimorfizam često opisuje frazom “jedan interfejs, više metoda”. Pošto interfejs diktira osnovna klasa, deliće ga sve izvedene klase, ali će implementacija interfejsa biti specifična za svaku od njih.

## Prednosti

Isti interfejs sa različitim implementacijama služi da olakša održavanje složenih programa. Ako je program pravilno projektovan, svim objektima izvedenim iz osnovne klase se pristupa na isti način, iako će se njihovo ponašanje razlikovati. To znači da programer treba da zapamti samo jedan interfejs, umesto više njih.

Razdvajanje interfejsa i implementacije omogućuje projektovanje biblioteka klasa, koje zadovoljavaju postavljene zahteve. To je veliko olakšanje u programiranju složenih sistema.

## Primer: polimorfizam bez nasleđivanja

{:.ulaz}
```js
class Pas {
  zvuk() {
    console.log('Av av')
  }
}

class Macka {
  zvuk() {
    console.log('Mjau')
  }
}

const pas = new Pas()
const macka = new Macka()

pas.zvuk()
macka.zvuk()
```

## Primer: polimorfizam sa nasleđivanjem

{:.ulaz}
```js
class Oblik {
  povrsina() {
    throw 'Metoda nije implementirana'
  }
}

class Kvadrat extends Oblik {
  constructor(stranica) {
    super()
    this.stranica = stranica
  }
  povrsina() {
    return this.stranica ** 2
  }
}

class Krug extends Oblik {
  constructor(poluprecnik) {
    super()
    this.poluprecnik = poluprecnik
  }
  povrsina() {
    return Math.PI * this.poluprecnik ** 2
  }
}

const kvadrat = new Kvadrat(4)
const krug = new Krug(3)

console.log(kvadrat.povrsina())
console.log(krug.povrsina())
```

## Literatura
- Irina Branović, *Objektno orijentisano programiranje: C++*, Beograd, 2011.
