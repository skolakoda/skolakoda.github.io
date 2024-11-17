---
title: Posmatrač (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-posmatrac
image: /images/koncepti/oop/posmatrac.png
---

![]({{page.image}})

**Posmatrač (*observer pattern*) je obrazac ponašanja koji služi da delovi programa posmatraju i reaguju na promene u drugom delu programa.** Ovaj obrazac omogućava automatsko obaveštavanje zainteresovanih objekata o svim promenama koje se dešavaju posmatranom subjektu. 

Model posmatrača se obično implementira kada subjekat želi da šalje poruke svojim posmatračima. Subjekt ne treba da zna ništa o tome kako rade posmatrači.

Posmatrač je jedan od najpoznatijih softverskih obrazaca i široko je rasprostranjen - Java ga je uključila u osnovnu biblioteku (`java.util.Observer`), a C# ugradio direktno u jezik (ključna reč `event`).

## Uloge

Kod ovog obrasca postoje dve glavne uloge:

- **subjekt** ili **izdavač** (*publisher*), koji obaveštava posmatrače kada se desi nešto važno.
- **posmatrači** (*observers*) ili **pretplatnici** (*subscribers*), koji čekaju obaveštenje izdavača da bi preduzeli akciju.

## Primena

Posmatrački obrazac ima široku primenu. 

Recimo da dodajemo sistem dostignuća u našu igru. Model posmatrača omogućava jednom modulu da objavi da se nešto zanimljivo dogodilo, ne brinući ko prima obaveštenje. Na primer, u igricama neki karakteri (*posmatrači*) menjaju ponašanje nakon što je kraljica (*subjekt*) ubijena. 

Takođe, događaji pregledača su primer posmatračkog obrasca. Pregledač objavljuje događaj svim funkcijama koje su pretplaćene na njega. Konačno, i *Redux* biblioteka primenjuje ovaj obrazac. Kad se stanje promeni, prikaz se ažurira u skladu s novim stanjem.

Često je potrebno imati više uporednih prikaza istih podataka, na primjer grafički i tabularni prikaz. Kad se stanje promijeni, svi prikazi moraju se ažurirati. Obrazac posmatrača omogućuje postojanje više prikaza jednog objekta, a kad se stanje objekta promijeni, svi prikazi automatski se ažuriraju.

![](/images/koncepti/oop/observer.jpg)

## Primer obrasca u JS-u

{:.ulaz}
```js
class Subject {
  constructor() {
    this.observers = []
  }
  addObserver(observer) {
    this.observers.push(observer)
  }
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }
  notify() {
    this.observers.forEach(observer => observer.update())
  }
}

class Observer {
  update() {
    console.log('State updated!')
  }
}

// upotreba
const subject = new Subject()
const observer1 = new Observer()
const observer2 = new Observer()

subject.addObserver(observer1)
subject.addObserver(observer2)

subject.notify() // 'State updated!' for both observers
```

## Primer obrasca u C#

```cs
using System;
using System.Collections.Generic;

class Subject {
    private List<IObserver> observers = new List<IObserver>();

    public void AddObserver(IObserver observer) {
        observers.Add(observer);
    }

    public void RemoveObserver(IObserver observer) {
        observers.Remove(observer);
    }

    public void Notify() {
        foreach (var observer in observers) {
            observer.Update();
        }
    }
}

public interface IObserver {
    void Update();
}

class ConcreteObserver : IObserver {
    public void Update() {
        Console.WriteLine("State updated!");
    }
}

class Program {
    static void Main() {
        var subject = new Subject();
        var observer1 = new ConcreteObserver();
        var observer2 = new ConcreteObserver();

        subject.AddObserver(observer1);
        subject.AddObserver(observer2);

        subject.Notify(); // 'State updated!' for both observers
    }
}
```

## Primer: render na promenu stanja

Recimo da imamo objekat `store`, koji čuva stanje naše aplikacije. S druge strane, imamo `header` i `footer`, čije su *render* metode pretplaćene na stanje skladišta, i pozivaju se sa svakom njegovom izmenom:

{:.ulaz}
```js
const store = {
  state: {},
  subscribers: [],

  subscribe(callback) {
    this.subscribers.push(callback)
  },

  publish() {
    this.subscribers.forEach(callback => callback())
  },

  setState(newState) {
    this.state = newState
    this.publish()
  }
}

const header = {
  render() {
    console.log("Azurira se header...")
  }
}

const footer = {
  render() {
    console.log("Azurira se footer...")
  }
}

// render metode se pretplaćuju da posmatraju skladište
store.subscribe(header.render)
store.subscribe(footer.render)

// stanje skladišta se menja, usled čega se posmatrači pozivaju
store.setState({ ulogovan: true })
```

U navedenom primeru imamo:

- niz `subscribers`, koji sadrži povratne funkcije
- metod `subscribe()`, koji dodaje pretplatnika u taj niz
- metod `publish()` koji poziva sve pretplaćene funkcije

Svaki put kada se setuje novo stanje skladišta, biće pozvani svi pretplatnici pomoću metode `publish`.

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.