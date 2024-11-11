---
title: Dekorator (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-dekorator
image: /images/koncepti/oop/decorator.jpg
---

![]({{page.image}})

**Dekorator je strukturni obrazac koji omogućava dinamičko dodavanje novih funkcionalnosti klasi bez menjanja izvornog koda.** Dekorator koristimo kada imamo previše kombinacija dodatnih funkcionalnosti, da ne bismo pravili podklase za svaku od njih.

Ključna prednost dekorator pattern-a je fleksibilnost. Možemo kombinovati dekoratore u različitim redosledima (prvo sir, pa masline, ili obrnuto) i na taj način dinamički proširivati funkcionalnost originalnog objekta bez potrebe za stvaranjem novih podklasa.

## Delovi dekorator obrasca

- **Osnovna komponenta** (npr. `Pizza`), na koju će se primenjivati dekoratori.
- **Apstraktni dekorator** (npr. `PizzaDecorator`), koji deluje kao *proxy* za osnovnu komponentu, sadrži referencu na nju i omogućava pristup njenim metodama. Služi kao osnova za konkretne dekoratore. 
- **Konkretni dekoratori** (npr. `CheeseDecorator` i `OliveDecorator`), koji proširuju funkcionalnost osnovne klase.

## Primer u JavaScript-u

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

## Prost primer u JavaScript-u

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

<!-- ## Literatura
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023. -->