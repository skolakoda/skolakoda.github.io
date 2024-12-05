---
title: Fasada (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-fasada
redirect_from: /fasada
image: /images/koncepti/oop/fasada.gif
---

![]({{page.image}})

**Fasada (*facade pattern*) je obrazac koji pruža jednostavan objedinjen interfejs ka složenom podsistemu.** Fasadni obrazac omogućuje klijentskim aplikacijama lakšu komunikaciju sa modulima, skrivajući njihovu unutrašnju logiku i funkcionalnost.

U stvarnom životu, fasada je ono što posmatrač vidi spolja i što skriva unutrašnjost kuće. Analogno tome, fasadni obrazac skriva klase čije realizacije klijent ne mora da vidi. Za klijenta kreiramo jednu klasu koju vidi i čije metode može koristiti. Metode fasadne klase kreiramo kombinovanjem metoda sakrivenih klasa.

## Upotreba

![](/images/koncepti/oop/bad-coupling.png)

Fasadni obrazac se koristi kada:
- Želimo da pojednostavimo upotrebu kompleksnog sistema koji ima mnogo međusobno povezanih klasa.
- Metode biblioteke nam ne odgovaraju u potpunosti, pa ih posredno modifikujemo preko fasade.
- Imamo funkcionalnosti koje klijent traži, ali ne želimo da mu izložimo skrivene klase.

## Primer u Javaskriptu

Naš sistem za rezervaciju putovanja uključuje rezervaciju leta, hotela i automobila. Klijent mora pojedinačno da komunicira sa sve tri klase za rezervaciju. Korišćenjem fasadnog obrasca, možemo ih sakriti iza jedne fasade, koja se brine o svim rezervacijama, bez potrebe da klijent zna detalje o svakom podsistemu.

{:.ulaz}
```js
class FlightBooking {
  bookFlight(destination) {
    console.log(`Let rezervisan za ${destination}`)
  }
}

class HotelBooking {
  bookHotel(destination) {
    console.log(`Hotel rezervisan u ${destination}`)
  }
}

class CarRental {
  rentCar(destination) {
    console.log(`Auto iznajmljen u ${destination}`)
  }
}

class TravelFacade {
  constructor() {
    this.flightBooking = new FlightBooking()
    this.hotelBooking = new HotelBooking()
    this.carRental = new CarRental()
  }

  makeReservation(destination) {
    this.flightBooking.bookFlight(destination)
    this.hotelBooking.bookHotel(destination)
    this.carRental.rentCar(destination)
    console.log(`Kompletna rezervacija za ${destination} je završena!\n`)
  }
}

// upotreba
const travelFacade = new TravelFacade()
travelFacade.makeReservation('Pariz')
```

## Primer u Javi

Primer fasade za putovanja u Javi:

```java
class FlightBooking {
    public void bookFlight(String destination) {
        System.out.println("Let rezervisan za " + destination);
    }
}

class HotelBooking {
    public void bookHotel(String destination) {
        System.out.println("Hotel rezervisan u " + destination);
    }
}

class CarRental {
    public void rentCar(String destination) {
        System.out.println("Auto iznajmljen u " + destination);
    }
}

class TravelFacade {
    private FlightBooking flightBooking;
    private HotelBooking hotelBooking;
    private CarRental carRental;

    public TravelFacade() {
        flightBooking = new FlightBooking();
        hotelBooking = new HotelBooking();
        carRental = new CarRental();
    }

    public void makeReservation(String destination) {
        flightBooking.bookFlight(destination);
        hotelBooking.bookHotel(destination);
        carRental.rentCar(destination);
        System.out.println("Kompletna rezervacija za " + destination + " je završena!\n");
    }
}

// upotreba
public class Main {
    public static void main(String[] args) {
        TravelFacade travelFacade = new TravelFacade();
        travelFacade.makeReservation("Pariz");
    }
}
```

## Literatura

- The Gang of Four, *Design Patterns: Elements of Reusable Object-Oriented Software*, 1994.
- Sensei’s thoughts, *[Velika četvorka (Design patterns) – Facade](https://senseithoughts.wordpress.com/2007/05/29/velika-cetvorka-design-patterns-facade/)*
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.