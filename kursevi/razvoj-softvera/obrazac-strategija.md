---
title: Strategija (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-strategija
image: /images/koncepti/oop/strategija.png
---

![]({{page.image}})

**Strateški obrazac (*strategy pattern*) je obrazac ponašanja koji definiše grupu algoritama za ostvarenje cilja i bira jedan od njih tokom izvršenja programa.**

Obrazac uključuje različite algoritme (ili strategije) koji se mogu primeniti za posmatrani problem. Strateški šablon omogućava klijentu da odabere koji algoritam želi da koristi iz familije postojećih algoritama i pruža jednostavan način da se pristupi tom algoritmu. 

Razdvajanje strategija u posebne fajlove je preporučljivo za složenije programe, inače će kod biti nečitak sa dosta uslova. Ako su strategije jednostavne, mogu se implementirati i kao funkcije umesto posebnih klasa. 

## Delovi obrasca

Strateški obrazac konceptualno čine sledeći delovi:
- Strategija (*Strategy*) je zajednički interfejs za sve algoritme, koji koristi i kontekst prilikom poziva.
- Konkretna strategija (*ConcreteStrategy*) implementira algoritam koristeći interfejs Strategije.
- Kontekst (*Context*) je odgovoran za odabir strategije. On sadrži referencu na objekat koji implementira interfejs Strategije i koristi tu strategiju za izvršavanje konkretnog algoritma.

Obično kontekst bira strategiju na osnovu unutrašnjih uslova. U nekim slučajevima klijent bira strategiju, i tada se ona može proslediti kontekstu u vreme izvršenja. 

## Primer: strategija izbora prevoza

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

## Primer: društvene mreže

Kreirati aplikaciju koja omogućava korisniku da se poveže sa svojim prijateljima putem društvenih mreža i to Instagram-a, Facebook-a i LinkedIn-a. Korisnik će proslediti ime prijatelja i željenu platformu, a aplikacija će ga povezati. Ako korisnik želi da proširi broj platformi, dodati ih bez degradiranja dizajna aplikacije.

{:.ulaz}
```js
class SocialMediaStrategy {
  connect(friendName) {
    throw 'connect() mora biti implementiran'
  }
}

class InstagramStrategy extends SocialMediaStrategy {
  connect(friendName) {
    console.log(`Connecting with ${friendName} on Instagram.`)
  }
}

class FacebookStrategy extends SocialMediaStrategy {
  connect(friendName) {
    console.log(`Connecting with ${friendName} on Facebook.`)
  }
}

class LinkedInStrategy extends SocialMediaStrategy {
  connect(friendName) {
    console.log(`Connecting with ${friendName} on LinkedIn.`)
  }
}

class User {
  constructor(name) {
    this.name = name
  }

  setSocialMediaStrategy(strategy) {
    this.strategy = strategy
  }

  connectToFriend(friendName) {
    this.strategy.connect(friendName)
  }
}

const user = new User('John Doe')

user.setSocialMediaStrategy(new InstagramStrategy())
user.connectToFriend('Jane Smith')

user.setSocialMediaStrategy(new FacebookStrategy())
user.connectToFriend('Michael Johnson')

user.setSocialMediaStrategy(new LinkedInStrategy())
user.connectToFriend('Emily Davis')

// dodavanje nove mreže
class TwitterStrategy extends SocialMediaStrategy {
  connect(friendName) {
    console.log(`Connecting with ${friendName} on Twitter.`)
  }
}

const twitterStrategy = new TwitterStrategy()
user.setSocialMediaStrategy(twitterStrategy)
user.connectToFriend('Sarah Brown')
```

## Literatura

- The Gang of Four, *Design Patterns: Elements of Reusable Object-Oriented Software*, 1994.
- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.