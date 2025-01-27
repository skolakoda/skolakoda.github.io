---
title: Dekorator (projektni obrazac)
layout: lekcija-principi
permalink: /obrazac-dekorator
image: /images/koncepti/oop/decorator.jpg
---

![]({{page.image}})

**Dekorator je projektni obrazac koji "dekoriše" objekte tako što im dinamički kači dodatnu funkcionalnost, bez promene njihove strukture.** 

Koristimo ga kada imamo previše mogućih kombinacija funkcionalnosti, da ne bismo pravili podklase za sve. Dekorator dinamički proširuje klasu koristeći kompoziciju i predstavlja fleksibilnu alternativu nasljeđivanju.

Jedan od najvažnijih principa u razvoju softvera je otvoreno-zatvoreni princip, koji glasi da klase treba da budu otvorene za proširenje a zatvorene za modifikaciju. Obrazac dekoratera utjelovljuje taj princip.

## Prednosti

Dvije glavne prednosti dekoratera su sigurnost i fleksibilnost. Obrazac dekoratera nam omogućava da dodamo nov kod ne kvareći već postojeći, čime efikasno sprečava uvođenje grešaka ili neželjenih nuspojava.

Druga prednost je fleksibilnost. Možemo kombinovati dekoratore u različitom redosledu (prvo sir, pa masline, ili obratno) i tako dinamički proširivati funkcionalnost objekta bez potrebe za stvaranjem podklasa.

## Delovi

- **Osnovna komponenta** (npr. `Pizza`), na koju će se primenjivati dekoratori.
- **Apstraktni dekorator** (npr. `PizzaDecorator`), koji deluje kao *proxy* za osnovnu komponentu, sadrži referencu na nju i omogućava pristup njenim metodama. Služi kao osnova za konkretne dekoratore. 
- **Konkretni dekoratori** (npr. `CheeseDecorator` i `OliveDecorator`), koji proširuju funkcionalnost osnovne klase.

## Primer dekorator obrasca

Imamo osnovna komponentu `Pizza`, i različite dekoratore za priloge. Svaki prilog pici dodaje novu cenu i opis.

{:.ulaz}
```js
class Pizza {
  get cost() {
    return 5
  }

  get description() {
    return "Pizza"
  }
}

// apstraktni dekorator
class PizzaDecorator {
  constructor(pizza) {
    this.pizza = pizza
  }

  get cost() {
    return this.pizza.cost
  }

  get description() {
    return this.pizza.description
  }
}

// konkretni dekoratori
class CheeseDecorator extends PizzaDecorator {
  get cost() {
    return this.pizza.cost + 2
  }

  get description() {
    return `${this.pizza.description}, sir`
  }
}

class OliveDecorator extends PizzaDecorator {
  get cost() {
    return this.pizza.cost + 1
  }

  get description() {
    return `${this.pizza.description}, masline`
  }
}

// upotreba
const pizza = new Pizza()
console.log(pizza.description)
console.log(pizza.cost)

const pizza2 = new CheeseDecorator(pizza)
console.log(pizza2.description)
console.log(pizza2.cost)

const pizza3 = new OliveDecorator(pizza2)
console.log(pizza3.description)
console.log(pizza3.cost)
```

## Primer dekorator funkcije

U JavaScriptu, dekorator ne mora biti striktno strukturiran kao u objektnim jezicima. Obrazac možemo primeniti na pojednostavljen način, kao funkciju koja prima funkciju, i vraća je sa proširenim ponašanjem. I ovde, dekorator omogućava da se funkcija proširi bez menjanja njenog osnovnog koda.

Na primer, funkcija `log` je dekorator jer uzima funkciju `sum` i dodaje joj funkcionalnost (ispis argumenata pre izvršenja): 

{:.ulaz}
```js
const log = fn => {
  return function(...args) {
    console.log(`funkcija je pozvana sa argumentima: ${args}`)
    return fn(...args)
  }
}

const sum = (a, b) => a + b
const loggedSum = log(sum)

console.log(loggedSum(2, 3))
```

## Literatura
- The Gang of Four, *Design Patterns: Elements of Reusable Object-Oriented Software*, 1994.