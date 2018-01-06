---
title: Kako napraviti desktop softver sa Javaskriptom?
author: damjan
layout: lekcija-frontend
permalink: /javaskript-desktop-softver
---

***Web aplikaciju možemo lako pretvoriti u desktop softver, uz pomoć [Electrona](//electron.atom.io/), Javaskript okvira za razvoj desktop softvera.***

Za razliku od tradicionalnih softvera, programi napravljeni sa Elektronom rade na svim sistemima (Mac, Windows, Linux). Pomoću Elektrona su napravljeni Atom Editor, Visual Studio Code, Slack i mnogi drugi višeplatformski programi.

## Korak 1: Web aplikacija

Za početak, potrebna nam je jednostavna web aplikacija. To može biti i obična HTML stranica "Zdravo Svete", ali zanimljivije je kada ima neku funcionalnost.

Ja ću kao polaznu osnovu koristiti jednostavnu aplikaciju za crtanje koju sam pravio za decu. Možete je pronaći ovde: [github.com/mudroljub/bojanka](https://github.com/mudroljub/bojanka)

## Korak 2: Instalacija Elektrona

Pod pretpostavkom da već imaš intaliran `nodejs`, instalacija `electron`-a je veoma laka. Možeš ga instalirati globalno:

```
npm install electron -g
```

Ili lokalno unutar projekta:

```
npm install electron --save-dev
```

pa ga pokretati pomoću npm skripti.

## Korak 3: Dodavanje ulaznog fajla

Da bismo od web aplikacije napravili desktop aplikaciju, dodajemo u `root` projekta fajl `app.js` sledeće sadržine:

```js
const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 800
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
})
```

Ovaj fajl uključuje biblioteku elektron, uzima iz nje šta je potrebno, i kada je sve spremno, otvara našu web aplikaciju u desktop prozoru zadate širine i visine.

## Korak 4: Pokretanje desktop aplikacije

Našu novu desktop aplikaciju pokrećemo na sledeći način:

```
electron app.js
```

Pošto ona radi unutar `Chromiuma`, razvijamo je na potpuno isti način kao što razvijamo web aplikacije. To znači da možemo otvoriti developerske alatke, isto kao u browseru.

## Korak 5: Pakovanje desktop aplikacije

Da bismo našu desktop aplikaciju distribuirali nezavisno od elektrona, potrebno je da je zapakujemo. Pakovanje se može obaviti uz pomoć [Electron Packager](https://github.com/electron-userland/electron-packager) biblioteke, koju možemo instalirati lokalno, za upotrebu preko npm skripti:

```
npm install electron-packager --save-dev
```

ili globalno, za upotrebu putem komandne linije:

```
npm install electron-packager -g
```

Nakon toga pokrenemo packager iz `root` direktorija aplikacije:

```
electron-packager . <ime-aplikacije>
```

Packager će automatski prepoznati naš operativni sistem i spakovati odgovarajuću distribuciju. Uz pomoć raznih alatki moguće je menjati ikonicu, kompresovati fajlove, praviti windows instaler i slično.

I ne zaboravite, neki veoma dobri softveri su napravljeni uz pomoć Elektrona ;)
