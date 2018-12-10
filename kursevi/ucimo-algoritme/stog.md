---
title: Stog (<i>stack</i>)
layout: lekcija-algoritmi
permalink: /stog
image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Spreewald_2014_21.jpg/800px-Spreewald_2014_21.jpg
---

![]({{page.image}})

**Linearna struktura u kojoj se elementi mogu dodavati ili oduzimati samo na jednom kraju zove se stog (en. *stack*).**

Nizovi i liste dozvoljavaju dodavanje i brisanje elemenata na bilo kojem mjestu – početku, kraju ili između. Postoje određene situacije u programiranju kada želimo ograničiti dodavanja i brisanja elemenata samo na jedan kraj liste.

## Osnovne operacije

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/The_land_of_heather_%281904%29_%2814793181483%29.jpg/400px-The_land_of_heather_%281904%29_%2814793181483%29.jpg)

Osnovne operacije na stogu su:
* dodavanje (umetanje) elementa na stog (eng. *push*)
* brisanje (uklanjanje) elementa iz stoga (eng. *pop*)

Nije moguće izvaditi ili umetnuti bilo koji element iz sredine prije nego se "skinu" svi elementi iznad njega. Iz toga slijedi da je zadnji dodani element ujedno i onaj koji će se prvi izvaditi. Stoga je drugi uobičajeni naziv za strukturu stoga : **LIFO** (eng. *last in – first out*). Drugim riječima **stog je struktura kod koje se posljednji pohranjeni podatak prvi uzima u obradu**.

![](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg)

**Pojedina operacija dodaj ili briši zahtijeva jednako vremena bez obzira na broj pohranjenih podataka.**

Premda se čini da je stog vrlo restriktivna struktura podataka, on ima brojne vrlo važne primjene u računalnoj znanosti. Često se upotrebljava u situacijama kada određene korake obrade treba odgoditi do trenutka ispunjenja drugih uvjeta.

Situacija da je stog pun može zahtijevati alociranje dodatne memorije i ponovno pokretanje programa (tzv. *stack overflow*). Prazan stog ne mora značiti pogrešku.

## Implementacija

Prikaz i manipulacija sa stogom može se realizirati statičkom strukturom podataka. U niz zadane strukture dodaju se ili brišu pojedine stavke po principu "LastInFirstOut" (LIFO).

Sledi prosta implementacija stoga u Javascriptu:

{:.ulaz}
```js
stog = []
stog.push(2)             // stog je sada [2]
stog.push(5)             // stog je sada [2, 5]
element = stog.pop()     // stog je sada [2]
console.log(element)     // stampa 5
```

Malo naprednija implementacija, sa klasom omotačem, izgledala bi otprilike ovako:

{:.ulaz}
```js
class Stog {
    constructor() {
      this.niz = []
    }

    dodaj(el) {
        this.niz.push(el)
    }

    ukloni(){
        return this.niz.pop()
    }
}

stog = new Stog
stog.dodaj(2)             // stog je sada [2]
stog.dodaj(5)             // stog je sada [2, 5]
element = stog.ukloni()   // stog je sada [2]
console.log(element)      // stampa 5
```

## Vežba

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kaartspel_van_Edgar_van_Haelst.jpg/640px-Kaartspel_van_Edgar_van_Haelst.jpg)

Potrebno je simulirati sledeće poteze sa kartama. U ruci imamo ceo špil karata dok na stolu na početnu ne stoji ni jedna karta. U jednom trenutku možemo ili da uzmemo bilo koju kartu iz špila i da je stavimo na vrh trenutne gomile na stolu (na početku je gomila prazna) ili da pogledamo vrednost karte koja je na vrhu gomile i da je sklonimo sa gomile.

Analiziranjem ovog problema možemo da zaključimo da su nam dovoljne 3 metode, od toga jedna treba da ubacuje element u skup, druga da odgovara koji je element poslednji ubačen u skup, i treća da izbacuje iz skupa element koji je poslednji ubačen. Struktura stek rešava ovaj problem.

Primetimo da sve pomenute metode imaju vremensku složenost O(1).

### Literatura

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- [Petlja.org](https://petlja.org/BubbleBee/r/Lectures/strukture-podataka-1), *Strukture podataka*
