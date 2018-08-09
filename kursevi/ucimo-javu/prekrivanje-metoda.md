---
title: "Prekrivanje metoda (<i>overriding</i>)"
layout: lekcija-java
permalink: /java-prekrivanje-metoda
---

Pretpostavimo da se, nakon što je klasa `Kola` dovršena i koristi se u raznim programima, ukaže potreba za isto takvom klasom u kojoj će maksimalna brzina biti ograničena na 70 mph.

Prva reakcija bi bila prepraviti klasu `Kola` uvođenjem ograničenja za sve automobile, no to bi dovelo do problema u svim programima koji je već koriste jer oni pretpostavljaju da takvog ograničenja nema. Drugo rješenje bilo bi napraviti potpuno novu klasu. Nedostatak je što biste nakon toga svaku uočenu pogrešku u staroj klasi morali popravljati i u novoj, a takođe ako biste htjeli dodati neku metodu, morali biste to činiti na dva mjesta. U tradicionalnim jezicima, pa i u jeziku C, to bi ipak bilo jedino razumno rješenje.

U Javi, međutim, taj problem ćete riješiti uvođenjem nove klase, nazovimo je `SporaKola`, koja će od klase `Kola` sve jednostavno naslijediti, a eksplicitno uvesti samo dodatno ograničenje na maksimalnu brzinu.

Bit će potrebno prilagoditi dva mjesta na kojima se brzina može mijenjati, dakle konstruktor i metoda `ubrzaj()`. Konstruktor će imati novo ime jer mora biti nazvan prema svojoj klasi, a metoda `ubrzaj()` bit će **prekrivena** ili **pregažena** (*overridden*). To znači da će podklasa imati metodu sa istim potpisom kao i odgovarajuća metoda u nadklasi.

```java
public class SporaKola extends Kola {

  private static final double ogranicenjeBrzine = 112.65408; // kph == 70 mph

  public SporaKola(String tablica, double brzina, double maxBrzina) {
    super(tablica, brzina, maxBrzina);
    if (brzina > ogranicenjeBrzine) this.brzina = ogranicenjeBrzine;
  }

  public void ubrzaj(double deltaV) {
     this.brzina = this.brzina + deltaV;
     if (this.brzina > this.maxBrzina) {
       this.brzina = this.maxBrzina;
     }
     if (this.brzina > ogranicenjeBrzine) {
       this.brzina = ogranicenjeBrzine;
     }
     if (this.brzina <  0.0) {
       this.brzina = 0.0;
     }     
  }
}
```

Primijetimo da u potklasi nemamo ostale metode iz nadklase, jer su sve naslijeđene. Jedino je tu metoda `ubrzaj()` koja nije ista kao istoimena metoda nadklase, tj. prekriva je. Konstruktor mora pozvati odgovarajući konstruktor nadklase, pomoću ključne riječi `super`.

Naravno, osim prekrivanja metoda (i varijabli) iz nadklase, podklasa uvijek može dodavati i svoje vlastite metode (i varijable).


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
