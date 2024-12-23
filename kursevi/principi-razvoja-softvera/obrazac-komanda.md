---
title: Komanda (projektni obrazac)
layout: lekcija-principi
permalink: /obrazac-komanda
---

![](https://refactoring.guru/images/patterns/content/command/command-comic-1.png)

**Komanda (*command pattern*) razdvaja onog ko zahteva akciju od onog ko je izvršava.** Komandni obrazac omogućava da se akcije ili komande smeste u objekat, omogućujući njihovo fleksibilno izvršenje, poništenje ili odlaganje. Na taj način se olakšava rukovanje akcijama, uključujući i vraćanje na prethodno stanje.

Analogija komandnog obrasca iz stvarnog života bila bi poručivanja hrane u restoranu.

## Opcije

Komandni obrazac omogućava da se komande tretiraju kao objekti. Na taj on podržava:
- dodavanje nove komande bez menjanja postojećeg koda.
- poništenje (*undo*) i ponovo izvršenje (*redo*) komande.
- odlaganje komandi za kasnije izvršenje.
- smeštanje zahteva u redove, logovanje i odbijanje zahteva
- slanje zahteva ka različitim objektima
- kreiranje transakcija višeg nivoa od primitivnih operacija

## Primer: upravljanje dokumentima (undo/redo)

{:.ulaz}
```js
class Document {
  constructor() {
    this.content = ''
  }

  addText(text) {
    this.content += text
    console.log(`Dodano: "${text}" | Trenutni sadržaj: ${this.content}`)
  }

  removeText(text) {
    this.content = this.content.replace(text, '')
    console.log(`Uklonjeno: "${text}" | Trenutni sadržaj: ${this.content}`)
  }
}

class Command {
  constructor(execute, undo) {
    this.execute = execute
    this.undo = undo
  }
}

class History {
  constructor() {
    this.commands = []
    this.index = -1
  }

  execute(command) {
    command.execute()
    this.commands.splice(this.index + 1)
    this.commands.push(command)
    this.index++
  }

  undo() {
    if (this.index >= 0) {
      this.commands[this.index--].undo()
    }
  }

  redo() {
    if (this.index < this.commands.length - 1) {
      this.commands[++this.index].execute()
    }
  }
}

const document = new Document()
const history = new History()

const addHello = new Command(
  () => document.addText('Hello '),
  () => document.removeText('Hello ')
)

const addWorld = new Command(
  () => document.addText('World!'),
  () => document.removeText('World!')
)

history.execute(addHello)
history.execute(addWorld)

history.undo()
history.redo()
```

## Primer: upravljanje pozadinskim procesima

Ovaj primer koristi komandni obrazac za upravljanje zadacima u pozadini, kao što su slanje email-a, čuvanje podataka u bazi itd.

{:.ulaz}
```js
class BackgroundTaskExecutor {
  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  executeAll() {
    this.tasks.forEach(task => task())
  }
}

const emailService = { 
  send: email => console.log(`Slanje email-a na adresu: ${email}`)
}

const databaseService = { 
  save: data => console.log(`Čuvanje podataka u bazi: ${JSON.stringify(data)}`)
}

const sendEmailTask = () => emailService.send('example@example.com')
const saveDataTask = () => databaseService.save({ userId: 1, name: 'John Doe' })

const taskExecutor = new BackgroundTaskExecutor()
taskExecutor.addTask(sendEmailTask)
taskExecutor.addTask(saveDataTask)

taskExecutor.executeAll()
```

## Literatura

- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.