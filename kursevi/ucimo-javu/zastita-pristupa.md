---
title: Zaštita pristupa u Javi
layout: lekcija-java
permalink: /java-zastita-pristupa
---

**Većina objektno orijentiranih jezika omogućuje zaštitu varijabli od modifikacije izvana. To vam daje garanciju da će vaša klasa ostati konzistentna sve dok su njene vlastite metode u redu.**

## Neovlašteno menjanje vrednosti

Globalne varijable su klasični izvor grešaka u većini programskih jezika. Neka nepoznata funkcija može promijeniti vrijednost varijable tamo gdje programer ne očekuje.

Na primjer, u klasi `Kola` željeli bismo biti sigurni da ni jedan blok koda iz neke druge klase neće moći promijeniti varijablu `brzina` tako da bude veća od `maxBrzina`. Želimo pronaći način da sljedeći primjer koda učinimo nelegalnim:

```java
Kola k = new Kola("New York A234 567", 100.0);
k.brzina = 150.0;
```

## Četiri razine zaštite pristupa

Bilo koja dva različita Java objekta mogu jedan prema drugom biti u jednoj od sljedećih relacija:

- Oba objekta su u istoj klasi
- Jedan objekt je u podklasi klase kojoj pripada drugi
- Oba objekta su u istom paketu
- Ništa od navedenog (oba objekta su u nepovezanim klasama i različitim paketima)

Možete definirati koji će članovi klase biti dostupni drugim objektima, iz svake od ove četiri skupine.

### `public`

Ako želite da bilo koji objekt može pozvati metodu ili promijeniti atribut, označite taj član kao `public`. Javnim članovima može se pristupiti s bilo kojeg mjesta odakle je sam objekt vidljiv. Njihov broj treba držati na minimumu i oni trebaju biti usko povezani sa ključnom funkcionalnošću klase. Osim rijetkih izuzetaka, atributi ne bi trebali biti `public`.

### `private`

Želite li da samo objekti iz iste klase mogu pozvati metodu ili promijeniti atribut, označite taj član kao `private`. Privatnim članovima može pristupiti jedino objekt sam ili drugi objekt iste klase (tzv. *sibling*).

### `protected`

Želite li pristup dozvoliti samo objektima koji pripadaju podklasi ili se nalaze unutar istog paketa, označite ih kao `protected`.

### `package`

Konačno, želite li pristup do određenog člana omogućiti samo objektima iz istog paketa, izostavit ćete specifikaciju pristupa. Taj default pristup naziva se `package`, ali nema svoju ključnu riječ. Po pretpostavci, sve klase koje pišete pripadaju istom paketu.

## Što treba biti javno, a što privatno?

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

## Primjer: klasa Kola

Evo kako bi klasa `Kola` u praksi zaista izgledala. Primijetite da su svi atributi sada privatni, a može im se pristupiti jedino kroz javne metode. To je uobičajeni obrazac za pisanje klasa.

Pokušajmo sada iz neke druge klase direktno pristupiti atributima klase Kola da vidimo što će se dogoditi:

{:.ulaz}
```java
class Kola {

  private String tablica;
  private double brzina;
  private double maxBrzina;

  public Kola() {
    this.tablica = "";
    this.brzina  = 0.0;
    this.maxBrzina = 120.0;
  }

  public Kola(String tablica, double brzina, double maxBrzina) {
    this.tablica = tablica;
    this.brzina  = brzina;
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
    if (brzina > this.maxBrzina) this.brzina = this.maxBrzina;
    if (brzina < 0) this.brzina = 0.0;
    else this.brzina = brzina;
  }

  public Kola(String tablica, double maxBrzina) {
    this.tablica = tablica;
    this.brzina  = 0.0;
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
  }

  public String getTablica() {
    return this.tablica;
  }

  public double getMaxBrzina() {
    return this.maxBrzina;
  }

  public double getBrzina() {
    return this.brzina;
  }

  public void setTablica(String tablica) {
    this.tablica = tablica;
  }

  public void setMaxBrzina(double maxBrzina) {
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
  }

  public void doDaske() {
    brzina = maxBrzina;  
  }

  public void ubrzaj(double deltaV) {
     this.brzina = this.brzina + deltaV;
     if (this.brzina > this.maxBrzina) {
       this.brzina = this.maxBrzina;
     }
     if (this.brzina <  0.0) {
       this.brzina = 0.0;
     }
  }
}

class KolaProba {
  public static void main(String args[]) {

    Kola k = new Kola("DYD 666", 100.0);
    k.tablica = "DYD 777";
    k.brzina = 150.0;
    k.maxBrzina = 200.0;

    System.out.println(k.tablica + " se krece brzinom od " + k.brzina + " kilometara na sat.");
    k.doDaske();
    System.out.println(k.tablica + " se krece brzinom od " + k.brzina + " kilometara na sat.");

  }
}
```

Ukoliko pokušate kompilirati gornje dve klase, dobićete gomilu grešaka, koje valja pažljivo čitati.

## Promena implementacije uz nepromenjen interfejs

U mnogim slučajevima atributi bit će `protected` ili će imati default pristup, dok su, međutim, javne varijable rijetke. Takva koncepcija omogućuje programerima promjenu implementacije klase i istovremeno zadržavanje nepromijenjenog sučelja prema vanjskom svijetu.

Radi uštede memorije, brojčani atributi klase `Kola` su promenenjeni iz `double` u `float`. Seter metode i dalje primaju tip podatka `double`, ali ga interno konvertuju u `float`.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
