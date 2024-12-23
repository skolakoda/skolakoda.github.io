---
title: Bazen objekata
layout: lekcija-principi
permalink: /bazen-objekata
image: /images/koncepti/oop/object-pooling.png
---

![]({{page.image}})

**Bazen objekata (*object pool*) je projektni obrazac koji omogućava ponovnu upotrebu objekata iz skupa u kom se čuvaju, umesto da se objekti stalno kreiraju i uništavaju.** Obično se koristi kada je skupo i neefikasno stalno kreirati i uništavati objekte, potrebne samo za kraći vremenski period (npr. neprijatelji u igrici i slično).

U osnovi, bazen objekata je kontejner koji sadrži određeni broj objekata. Kada klijent preuzme objekat iz kontejnera, taj objekat više neće biti dostupan drugim klijentima dok se ne vrati nazad. Objekti u bazenu imaju svoj životni ciklus: kreiranje, validacija i uništavanje. Bazen objekata obezbeđuje keš memoriju za instancirane objekte i prati koji se trenutno koriste, i koji su na raspolaganju. 

### Primer 

Evo jednostavnog primera Object Pool obrasca u JavaScript-u:

{:.ulaz}
```js
class ObjectPool {
  constructor(createObj, maxSize = 10) {
    this.createObj = createObj
    this.maxSize = maxSize
    this.pool = []
  }

  borrowObject() {
    if (this.pool.length > 0)
      return this.pool.pop()  // vraća objekat iz pool-a
    return this.createObj()   // ako nema, stvara novi objekat
  }

  returnObject(obj) {
    if (this.pool.length < this.maxSize)
      this.pool.push(obj)
  }
}

// kvazi-funkcija za kreiranje objekta
const createObject = () => ({ id: Math.random(), status: 'active' })

// kreiramo pool sa maksimalno 5 objekata
const pool = new ObjectPool(createObject, 5)

// uzimanje objekta iz pool-a
const pooledObject = pool.borrowObject()

// vraćanje objekta u pool
pool.returnObject(pooledObject)
```

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.