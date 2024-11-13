---
title: Strategija (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-strategija
redirect_from: /strategija
image: /images/koncepti/oop/strategija.png
---

![]({{page.image}})

**Strateški obrazac (*strategy pattern*) je obrazac ponašanja koji definiše grupu algoritama za ostvarenje cilja i bira jedan od njih tokom izvršenja programa.**

Obrazac uključuje različite algoritme (ili strategije) koji se mogu primeniti za posmatrani problem. Strateški šablon omogućava klijentu da odabere koji algoritam želi da koristi iz familije postojećih algoritama i pruža jednostavan način da se pristupi tom algoritmu. 

U nekim slučajevima klijent bira strategiju, a u drugim *context*, na osnovu unutrašnjih uslova. Kad klijent bira, strategija se pomoću delegiranja može ubaci u *context* u vreme izvršenja. 

Razdvajanje strategija u posebne fajlove je preporučljivo za složenije programe, inače će kod biti nečitak sa dosta uslova. Ako su strategije jednostavne, mogu se implementirati i kao funkcije umesto posebnih klasa. 

## Primer u JS-u

Primer strateškog obrasca za izbor prevoza do aerodroma. Imamo opcije `Car`, `Taxi`, i `Bus` kao strategije sa metodom `travel`. Klasa `AirportTransport` omogućava promenu prevoza u toku rada programa.

{:.ulaz}
```js
// interfejs strategije
class TransportStrategy {
  travel() {
    throw 'Metod travel() mora biti implementiran'
  }
}

// konkretne strategije
class CarStrategy extends TransportStrategy {
  travel() {
    console.log('Idemo kolima do aerodroma')
  }
}

class TaxiStrategy extends TransportStrategy {
  travel() {
    console.log('Idemo taksijem do aerodroma')
  }
}

class BusStrategy extends TransportStrategy {
  travel() {
    console.log('Idemo autobusom do aerodroma')
  }
}

// kontekst
class AirportTransport {
  constructor(strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  goToAirport() {
    return this.strategy.travel()
  }
}

// upotreba
const car = new CarStrategy()
const taxi = new TaxiStrategy()
const bus = new BusStrategy()

const transport = new AirportTransport(car)
transport.goToAirport()

transport.setStrategy(taxi)
transport.goToAirport()

transport.setStrategy(bus)
transport.goToAirport() 
```

## Literatura

- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.