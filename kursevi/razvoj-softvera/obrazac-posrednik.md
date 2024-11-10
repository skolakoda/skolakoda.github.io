---
title: Posrednik (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-posrednik
---

![](/images/koncepti/oop/proxy.png)

**Posrednik (*proxy*) jeste objekat koji kontroliše pristup drugom objektu, koji nazivamo subjekat.** Posrednik i subjekat imaju identičan interfejs, što omogućava da jedan zamenjujemo drugim. Posrednik presreće sve ili neke operacije koje treba da se izvrše nad subjektom, čime proširuje ili dopunjuje njegovo ponašanje. 

Posrednički obrazac se obično koristi u sledećim slučajevima:
- **Kontrola pristupa**: posrednik može da ograniči pristup resursima tako što proverava dozvole ili autentifikaciju korisnika pre nego što dozvoli pristup originalnom objektu.
- **Optimizacija resursa**: Kada rad sa originalnim objektom zahteva znatne resurse, posrednik može da optimizuje učitavanje tako što koristi *lazy initialization* i kreira originalni objekat samo kada je neophodno.
- **Logovanje ili nadgledanje**: posrednik može da služi za praćenje poziva metoda originalnog objekta, što može biti korisno za analitiku, sigurnosne provere ili otklanjanje grešaka.
- **Rad sa udaljenim objektima** (*remote proxy*): Kada je objekat na udaljenom serveru, možemo kreirati lokalnog posrednika koji upravlja pozivima na serveru, omogućujući lakšu komunikaciju.

## Primeri

### Posrednik za lenjo učitavanje

Recimo da imamo objekat koji učitava veliku sliku prilikom instanciranja. Kreiraćemo `ImageProxy` klasu koja će učitati sliku tek kada korisnik zatraži njen prikaz:

{:.ulaz}
```js
class RealImage {
  constructor(filename) {
    this.filename = filename
    this.loadFromDisk()
  }

  loadFromDisk() {
    console.log(`Učitavanje slike sa diska: ${this.filename}`)
  }

  display() {
    console.log(`Prikaz slike: ${this.filename}`)
  }
}

class ImageProxy {
  constructor(filename) {
    this.filename = filename
    this.realImage = null
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename)
    }
    this.realImage.display()
  }
}

const image = new ImageProxy('velikaSlika.jpg')
image.display() // tek sad učitava
```

### Posrednik za praćenje pristupa

Ovaj primer koristi funkciju koja omogućava praćenje pristupa svojstvima objekta:

{:.ulaz}
```js
const createProxy = target => ({
  get(prop) {
    const vrednost = prop in target ? target[prop] : 'Nepoznato svojstvo'
    console.log(`Pokušan pristup za ${prop}:`, vrednost)
  },
  set(prop, value) {
    console.log(`Postavljena vrednost za ${prop}: ${value}`)
    target[prop] = value
  }
})

const osoba = { ime: 'Marko', prezime: 'Marković' }
const proxy = createProxy(osoba)

proxy.get('ime')
proxy.get('mesto')
proxy.set('mesto', 'Beograd')
```

U Javaskriptu postoji i [Proxy klasa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) koju možemo koristiti da kreiramo posrednika:

{:.ulaz}
```js
const osoba = {
  ime: 'Marko',
  prezime: 'Marković'
}

const proxy = new Proxy(osoba, {
  get(target, prop) {
    const vrednost = prop in target ? target[prop] : 'Nepoznato svojstvo'
    console.log(`Pokušan pristup za ${prop}:`, vrednost)
  }
})

proxy.ime
proxy.mesto
```

### Posrednik za validaciju vrednosti

{:.ulaz}
```js
const broj = {
  vrednost: 0
}

const proxy = new Proxy(broj, {
  set(target, prop, value) {
    if (prop === 'vrednost' && value < 0) {
      console.log('Vrednost ne može biti negativna!')
      return
    }
    target[prop] = value
    console.log('Uspešno setovano.')
  }
})

proxy.vrednost = 10
proxy.vrednost = -5
```

## Literatura

- Mario Casciaro, Luciano Mammino, *Node.js: Projektni obrasci*, Mikro knjiga, 2019.
