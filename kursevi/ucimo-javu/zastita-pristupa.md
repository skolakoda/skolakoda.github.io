---
title: Zaštita pristupa u Javi
layout: lekcija-java
permalink: /java-zastita-pristupa
---

**Većina objektno orijentiranih jezika omogućuje zaštitu varijabli od modifikacije izvana. To vam daje garanciju da će vaša klasa ostati konzistentna sve dok su njene vlastite metode u redu.**

## Neovlašteno menjanje vrednosti

Globalne varijable su klasični izvor pogrešaka u većini programskih jezika. Neka nepoznata funkcija može promijeniti vrijednost varijable tamo gdje programer ne očekuje.

Na primjer, u klasi `Car` željeli bismo biti sigurni da ni jedan blok programskog koda iz neke druge klase neće moći promijeniti varijablu `speed` tako da bude veća od `maxSpeed`. Želimo pronaći način da sljedeći primjer koda učinimo nelegalnim:

```java
Car c = new Car("New York A234 567", 100.0);
c.speed = 150.0;
```

Ovaj kod narušava uvjet koji smo ranije postavili na našu klasu. Želimo omogućiti kompajleru da provede poštivanje takvih uvjeta.

## Četiri razine zaštite pristupa

Bilo koja dva različita Java objekta mogu jedan prema drugom biti u jednoj od sljedećih relacija:

- Oba objekta su u istoj klasi
- Jedan objekt je u podklasi klase kojoj pripada drugi objekt
- Oba objekta su u istom paketu
- Ništa od navedenog (oba objekta su u nepovezanim klasama i različitim paketima)

Možete definirati koji će članovi klase biti dostupni drugim objektima, iz svake od ove četiri skupine.

### `public`

Želite li da bilo koji objekt može pozvati određenu metodu ili promijeniti određeni atribut, označit ćete taj član kao `public`. Javnim članovima može se pristupiti s bilo kojeg mjesta odakle je sam objekt vidljiv. Njihov broj treba držati na minimumu i oni trebaju biti usko povezani sa ključnom funkcionalnošću klase. Osim rijetkih izuzetaka, atributi ne bi trebali biti `public`.

### `private`

Želite li da samo objekti iz iste klase mogu pozvati određenu metodu ili promijeniti određeni atribut, označit ćete taj član kao `private`. Privatnim članovima može pristupiti jedino objekt sam ili drugi objekt iste klase (tzv. *sibling*).

### `protected`

Želite li pristup dozvoliti samo objektima koji pripadaju podklasi ili se nalaze unutar istog paketa, označit ćete ih kao `protected`.

### `package`

Konačno, želite li pristup do određenog člana omogućiti samo objektima iz istog paketa, izostavit ćete specifikaciju pristupa. Taj default pristup naziva se `package`, ali nema svoju ključnu riječ. Po pretpostavci, sve klase koje pišete pripadaju istom paketu. Međutim, one nisu u istim paketima sa Java klasama.

## Što treba biti public, a što private?

- Klase su u pravilu javne.
- Varijable su u pravilu privatne.
- Konstruktori su u pravilu javni.
- Getter i setter metode su u pravilu javne.
- O ostalim metodama treba odlučivati od slučaja do slučaja.

Ova se pravila mogu po volji mijenjati ako za to postoji razlog. Međutim, dobro ih je imati na umu jer pokrivaju veliku većinu praktičnih potreba.

## Tri koristi od zaštite pristupa

Korištenje mogućnosti zaštite podataka osigurava tri bitne koristi:

1. Omogućuje uvođenje ograničenja na stanje objekta.
2. Osigurava jednostavnije korisničko sučelje. Programeri korisnici ne moraju znati sve što se nalazi unutar klase, dovoljno im je da poznaju javne segmente.
3. Odvaja sučelje od implementacije, čime se omogućuje da se jedno mijenja nezavisno od drugoga.

## Primjer zaštite pristupa

Evo kako bi klasa `Car` u praksi zaista izgledala. Primijetite da su svi atributi sada privatni, a može im se pristupiti jedino kroz javne metode. To je uobičajeni obrazac za pisanje klasa.

```java
class Car {

  private String licensePlate;
  private double speed;
  private double maxSpeed;

  public Car() {
    this.licensePlate = "";
    this.speed  = 0.0;
    this.maxSpeed = 120.0;
  }

  public Car(String licensePlate, double speed, double maxSpeed) {
    this.licensePlate = licensePlate;
    this.speed  = speed;
    if (maxSpeed > 0) this.maxSpeed = maxSpeed;
    else this.maxSpeed = 0.0;
    if (speed > this.maxSpeed) this.speed = this.maxSpeed;
    if (speed < 0) this.speed = 0.0;
    else this.speed = speed;
  }

  public Car(String licensePlate, double maxSpeed) {
    this.licensePlate = licensePlate;
    this.speed  = 0.0;
    if (maxSpeed > 0) this.maxSpeed = maxSpeed;
    else this.maxSpeed = 0.0;
  }

  public String getLicensePlate() {
    return this.licensePlate;
  }

  public double getMaxSpeed() {
    return this.maxSpeed;
  }

  public double getSpeed() {
    return this.speed;
  }

  public void setLicensePlate(String licensePlate) {
    this.licensePlate = licensePlate;
  }

  public void setMaximumSpeed(double maxSpeed) {
    if (maxSpeed > 0) this.maxSpeed = maxSpeed;
    else this.maxSpeed = 0.0;
  }

  public void floorIt() {
    speed = maxSpeed;  
  }

  public void accelerate(double deltaV) {
     this.speed = this.speed + deltaV;
     if (this.speed > this.maxSpeed) {
       this.speed = this.maxSpeed;
     }
     if (this.speed <  0.0) {
       this.speed = 0.0;
     }
  }

}
```

Pokušajmo sada iz neke druge klase direktno pristupiti atributima klase Car da vidimo što će se dogoditi:

```java
class CarTest8 {

  public static void main(String args[]) {

    Car c = new Car("New York A45 636", 100.0);
    c.licensePlate = "New York A45 636";
    c.speed = 0.0;
    c.maxSpeed = 123.45;

    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed + " kilometara na sat.");

    c.floorIt();

    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed + " kilometara na sat.");

  }

}
```

Evo što bi se dogodilo ako pokušate kompilirati `CarTest8` uz revidiranu klasu Car:

```
% javac Car.java
% javac CarTest8.java
CarTest8.java:7: Variable licensePlate in class Car not accessible from class CarTest8.
    c.licensePlate = "New York A45 636";
     ^
CarTest8.java:8: Variable speed in class Car not accessible from class CarTest8.
    c.speed = 0.0;
     ^
CarTest8.java:9: Variable maxSpeed in class Car not accessible from class CarTest8.
    c.maxSpeed = 123.45;
     ^
CarTest8.java:11: Variable licensePlate in class Car not accessible from class CarTest8.
    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed +
                        ^
CarTest8.java:11: Variable speed in class Car not accessible from class CarTest8.
    System.out.println(c.licensePlate + " is moving at " + c.speed +
                                                            ^
CarTest8.java:16: Variable licensePlate in class Car not accessible from class CarTest8.
    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed +
                        ^
CarTest8.java:16: Variable speed in class Car not accessible from class CarTest8.
    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed +
                                                            ^
7 errors
```

U mnogim slučajevima atributi bit će protected ili će imati default pristup, dok su, međutim, javne varijable rijetke. Takva koncepcija omogućuje programerima promjenu implementacije klase i istovremeno zadržavanje nepromijenjenog sučelja prema vanjskom svijetu.

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
