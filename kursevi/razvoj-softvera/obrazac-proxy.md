---
title: Posrednik (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-proxy
---

![](/images/koncepti/oop/proxy.png)

**Posrednik (*proxy*) jeste objekat koji kontroliše pristup drugom objektu, koji nazivamo subjekat.** Posrednik i subjekat imaju identičan interfejs, što omogućava da jedan zamenjujemo drugim. Posrednik presreće sve ili neke operacije koje treba da se izvrše nad subjektom, čime proširuje ili dopunjuje njegovo ponašanje. 

## Upotreba 

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

### Posrednik za keširanje

Ovde koristimo *proxy* obrazac za keširanje videa - `createProxyDownloader` proverava keš i preuzima novi video samo ako nije keširan, inače vraća keširanu verziju.

{:.ulaz}
```js
const downloadVideo = async name => {
  console.log("Connecting to https://www.youtube.com/")
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000))
  console.log("Downloaded", name)
  return { name, downloaded: true }
}

const createProxyDownloader = () => {
  const videoCache = new Map()
  return async name => {
    if (!videoCache.has(name))
      videoCache.set(name, downloadVideo(name))
    return videoCache.get(name)
  }
}

// upotreba
const log = item => console.log(`Video "${item.name}" is ready and cached`)

const getVideo = createProxyDownloader()
getVideo("Geekific").then(log)
getVideo("Geekific").then(log)
getVideo("Sean Study").then(log)
getVideo("Sean Study").then(log)
getVideo("Geekific").then(log)
```

### Posrednik za autorizaciju

U okviru *proxy* obrasca proveriti da li je korisnik uspešno autentifikovan na sistem, ako jeste, autorizovati plaćanje kreditnom karticom, a ako nije izbaciti poruku.

{:.ulaz}
```js
const pay = () => {
  console.log("Plaćanje je izvršeno.")
}

const createProxy = authenticated => {
  return () => {
    if (authenticated)
      pay()
    else 
      console.log("Morate se ulogovati pre plaćanja.")
  }
}

// upotreba
const authenticatedPay = createProxy(true)
authenticatedPay()

const unauthenticatedPay = createProxy(false)
unauthenticatedPay()
```

## Literatura

- Mario Casciaro, Luciano Mammino, *Node.js: Projektni obrasci*, Mikro knjiga, 2019.
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.