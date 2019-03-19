---
title: "Projektni obrazac posmatrač u Javascriptu"
layout: lekcija-napredni-js
permalink: /javascript-obrazac-posmatrac
---

**Projektni obrazac posmatrač (*observer*) je jedan od najpoznatijih softverskih obrazaca, koji služi da delovi programa posmatraju i reaguju na promene u drugom delu programa.**

Kod ovog obrasca postoje dve glavne uloge:

- **posmatrači** (ili *pretplatnici*), koji čekaju obaveštenje od izdavača i ponašaju se u skladu sa tim.
- **subjekt** (ili *izdavač*), koji obaveštava posmatrače kada uradi nešto važno.

Posmatrački obrazac ima široku primenu. Na primer, u igricama neki karakteri (*posmatrači*) menjaju ponašanje nakon što je kraljica (*subjekt*) ubijena. Takođe, događaji pregledača su primer primene ovog obrasca. Pregledač objavljuje događaj funkcijama koje slušaju i reaguju na njega. Konačno, i *Redux* biblioteka primenjuje ovaj obrazac. Kad se stanje promeni, svi prikazi se ažuriraju u skladu s novim stanjem.

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
store.setState({ulogovan: true})
```

U navedenom primeru imamo:

- niz `subscribers`, koji sadrži funkcije povratnog poziva
- metod `subscribe()`, koji dodaje pretplatnika u niz
- metod `publish()` koji poziva sve funkcije (pretplatnike)

Svaki put kada se stanje skladišta promeni, biće pozvani svi pretplatnici pomoću metode `publish`.
