---
title: "Red (<i>queue</i>)"
layout: lekcija-algoritmi
permalink: /red
image: https://upload.wikimedia.org/wikipedia/commons/f/f7/Queue_outside_a_soup_kitchen_at_Klostertorv_in_%C3%85lborg_1943.jpg
---

![]({{page.image}})

**Red je linearna struktura u kojoj se elementi dodaju isključivo na jednom kraju, a oduzimaju isključivo na drugom kraju.** Strukturu reda lako je predočiti analogijom sa istim pojmom u svakodnevnom životu – npr. redom ispred blagajne u dućanu. Svaka nova osoba koja dođe zauzima mjesto na kraju reda, a osoba sa početka reda plaća svoju robu i odlazi. Drugi uobičajeni naziv za ovu strukturu je “**FIFO**” lista (eng. *first in – first out*).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Queue_algorithmn.jpg/600px-Queue_algorithmn.jpg)

## Implementacija

Struktura reda može se u računalu implementirati na različite načine, a najčešće se koristi jedan niz i dvije varijable (pokazivača) koje sadrže lokacije početka i kraja reda, odnosno lokacije početnog i krajnjeg elementa u redu.

Sledi prosta implementacija reda u Javascriptu:

{:.ulaz}
```js
red = []
red.push(2)           // red je sada [2]
red.push(5)           // red je sada [2, 5]
element = red.shift() // red je sada [5]
console.log(element)  // stampa 2
```

Malo naprednija implementacija, sa klasom omotačem, izgledala bi otprilike ovako:

{:.ulaz}
```js
class Red {
    constructor() {
      this.niz = []
    }

    dodaj(el) {
        this.niz.push(el)
    }

    ukloni() {
        return this.niz.shift()
    }
}

red = new Red()
red.dodaj(2)           // red je sada [2]
red.dodaj(5)           // red je sada [2, 5]
element = red.ukloni() // red je sada [5]
console.log(element)   // stampa 2
```

## Vežba

Potrebno je simulirati red u prodavnici. Mogući događaju su da nova mušterija stane na kraj reda, da naplatimo mušteriji koja je prva u redu, i da ta mušterija koja je platila ode.

Analiziranjem problema možemo doći do zaključka da su nam i ovde potrebne 3 metode. Prva metoda treba da ubacuje element u skup, druga da izbacuje iz skupa element koji je prvi ubačen ukoliko posmatramo samo elemente koji se trenutno nalaze u skupu, dok treća treba da odgovara na pitanje koji je element od trenutnih u skupu prvi bio ubačen.

Koristeći strukturu *queue* možemo rešiti ovaj problem. Primetimo da je vremenska složenost opisanih metoda O(1).


### Izvori

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- [Petlja.org](https://petlja.org/BubbleBee/r/Lectures/strukture-podataka-1), *Strukture podataka*
