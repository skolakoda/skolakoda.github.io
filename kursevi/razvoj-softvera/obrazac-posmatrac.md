---
title: Posmatrač (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-posmatrac
image: /images/koncepti/oop/observer-pattern.png
---

![]({{page.image}})

**Projektni obrazac posmatrač (*observer pattern*) je jedan od najpoznatijih softverskih obrazaca, koji služi da delovi programa posmatraju i reaguju na promene u drugom delu programa.**

Kod ovog obrasca postoje dve glavne uloge:

- **subjekt** ili **izdavač** (*publisher*), koji obaveštava posmatrače kada se desi nešto važno.
- **posmatrači** (*observers*) ili **pretplatnici** (*subscribers*), koji čekaju obaveštenje izdavača da bi preduzeli akciju.

Posmatrački obrazac ima široku primenu. Na primer, u igricama neki karakteri (*posmatrači*) menjaju ponašanje nakon što je kraljica (*subjekt*) ubijena. Takođe, događaji pregledača su primer posmatračkog obrasca. Pregledač objavljuje događaj svim funkcijama koje su pretplaćene na njega. Konačno, i *Redux* biblioteka primenjuje ovaj obrazac. Kad se stanje promeni, prikaz se ažurira u skladu s novim stanjem.

Često je potrebno imati više uporednih prikaza istih podataka, na primjer grafički i tabularni prikaz. Kad se stanje promijeni, svi prikazi moraju se ažurirati. Obrazac posmatrača omogućuje postojanje više prikaza jednog objekta, a kad se stanje objekta promijeni, svi prikazi automatski se ažuriraju.

## Primer

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

// render metode se pretplacuju da posmatraju promene skladista
store.subscribe(header.render)
store.subscribe(footer.render)

// stanje skladista se menja, usled cega se posmatraci pozivaju
store.setState({ ulogovan: true })
```

U navedenom primeru imamo:

- niz `subscribers`, koji sadrži povratne funkcije
- metod `subscribe()`, koji dodaje pretplatnika u taj niz
- metod `publish()` koji poziva sve pretplaćene funkcije

Svaki put kada se setuje novo stanje skladišta, biće pozvani svi pretplatnici pomoću metode `publish`.
