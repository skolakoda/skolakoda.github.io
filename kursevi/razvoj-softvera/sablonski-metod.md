---
title: Šablonski metod
layout: lekcija-razvoj
permalink: /sablonski-metod
image: /images/koncepti/oop/template-method.png
---

![]({{page.image}})

**Šablonski metod (*template method*) je obrazac ponašanja koji postavlja osnovne korake algoritma, ostavljajući slobodu implementacije podklasama.** Ovaj obrazac dozvoljava podklasama da redefinišu određene korake, bez menjanja osnovne strukture algoritma. 

Na primer, na slici, generalizovana klasa je radnik (Worker) u okviru koje se nalaze zajedničke metode za potklase vartogasci (FireFighter), poštari (Postman) i dr. U generalilzovanoj klasi se nalazi template metoda, koja je nazvana DailyRoutine(), u okviru koje je definisan redosled izvršavanja metoda: getup(), eatBreakfast(), goToWork(), work(), returnToHome(), relax() i sleep(). Određene metode u potklasama mogu biti predefinisane, kao na primer, metoda work(), koja će pokazati kako radnici obavljaju svoj svakodnevni posao.

## Upotreba

Primeri upotrebe:
- Upravljanje procesima sa fiksnim redosledom koraka (npr. proizvodnja u fabrici)
- Obrada dokumenata ili datoteka (PDF, Word, CSV)
- Testiranje softverskih sistema (automatizovani testovi)
- Obrada narudžbi u trgovini (dodavanje proizvoda u korpu, obračun cene, popusti)
- Obrada transakcija u finansijskim aplikacijama (uplata, isplata, prenos)
- Generisanje izveštaja (finansijski, statistički)
- Glavna petlja (*game loop*) u igrama

## Primer: radnici

Evo kako bi izgledao šablonski metod za definisanje svakodnevne rutine različitih radnika, kao što su vatrogasci i poštari:

{:.ulaz}
```js
class Worker {
  // template metoda koja definiše korake
  dailyRoutine() {
    this.getUp();
    this.eatBreakfast();
    this.goToWork();
    this.work();
    this.returnToHome();
    this.relax();
    this.sleep();
  }

  // zajedničke metode za sve radnike
  getUp() {
    console.log('Getting up...');
  }

  eatBreakfast() {
    console.log('Eating breakfast...');
  }

  goToWork() {
    console.log('Going to work...');
  }

  returnToHome() {
    console.log('Returning home...');
  }

  relax() {
    console.log('Relaxing...');
  }

  sleep() {
    console.log('Sleeping...');
  }

  // metoda koja se implementira u potklasama
  work() {
    throw 'Method work() must be implemented in subclass';
  }
}

class FireFighter extends Worker {
  work() {
    console.log('Fighting fire and saving lives...');
  }
}

class Postman extends Worker {
  work() {
    console.log('Delivering mail...');
  }
}

// upotreba
const firefighter = new FireFighter();
firefighter.dailyRoutine();

console.log('---');

const postman = new Postman();
postman.dailyRoutine();
```

## Primer: priprema napitka

Zamislimo da imamo klasu koja upravlja procesom pripreme napitka, a konkretne klase implementiraju specifične načine pripreme za različite napitke (kao što su kafa, čaj).

{:.ulaz}
```js
class Beverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater() {
    console.log("Boiling water");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }

  // Ove metode će biti implementirane u podklasama
  brew() {
    throw "brew() mora biti implementiran";
  }

  addCondiments() {
    throw "addCondiments() mora biti implementiran";
  }
}

class Tea extends Beverage {
  brew() {
    console.log("Steeping the tea");
  }

  addCondiments() {
    console.log("Adding lemon");
  }
}

class Coffee extends Beverage {
  brew() {
    console.log("Dripping coffee through filter");
  }

  addCondiments() {
    console.log("Adding sugar and milk");
  }
}

const tea = new Tea();
tea.prepareRecipe();

const coffee = new Coffee();
coffee.prepareRecipe();
```

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.