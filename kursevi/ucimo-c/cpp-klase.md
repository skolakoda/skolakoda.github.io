---
title: Klase u programskom jeziku C++
layout: lekcija-c
permalink: /cpp-klase
---

**Klase su najznačajnije obeležje programskog jezika C++, koje nas uvodi u objektno orijentisano programiranje. Klasa nam omogućava da svojstva i metode svrstamo zajedno, odnosno da modelujemo objekat koji ima stanje i ponašanje.**

C++ ima ugrađene klase, ali možemo kreirati i sopstvene klase. Klasa je nacrt neke apstrakcije koja ima:

- svoje osobine (atribute) i 
- operacije koje se izvršavaju nad elementima klase (funkcije članice).

Klasa definiše novi tip. Primerak definisanog tipa naziva se objekat ili instanca klase.

## Članovi klase

Podaci koji su deo klase nazivaju se podaci članovi (en. *data members*).

Funkcije koje su deo klase nazivaju se funkcije članice (en. *member functions*) ili metode.

Članovi klase (podaci ili funkcije) mogu biti:

- privatni (`private`): zaštićeni su od pristupa spolja (enkapsulirani). Ovim članovima mogu pristupati samo funkcije članice klase.
- javni (`public`): dostupni su spolja i nazivaju se JAVNI članovi klase (engl. public class members).

Podrazumevano, ako se ne navede specifikator, članovi su privatni. Preporuka je da klase nemaju javne podatke članove.

## Deklaracija klase

Deklaracijom klase navodimo članove podatke i metode klase.

```cpp
class Ime_Klase{
  podaci_clanovi
  objekti_clanovi
  funkcije_clanice
};
```

Na primer:

```cpp
class Tacka {

    private:

        double x, y;

    public:

        void podesiTacku(double xx, double yy) {
            x = xx;
            y = yy;
        }

        double preuzmiX() {
            return x;
        }

        double preuzmiY() {
            return y;
        }

};
```

Izvor: [Klase, objekti, članovi klase](https://biljanaivanovic.wordpress.com/category/dev-c/klase-i-objekti/)