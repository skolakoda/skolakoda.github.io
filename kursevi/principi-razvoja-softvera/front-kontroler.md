---
title: Front kontroler
layout: lekcija-principi
permalink: /front-kontroler
image: /images/koncepti/oop/front_controller.png
---

**Prednji kontroler** (*front controller*) je arhitektonski obrazac koji služi za centralizovanje obrade zahteva koje aplikacija prima. Prema ovom obrascu, jedan kontroler prima sve zahteve izvana i prosleđuje ih gde treba unutar aplikacije. Ovo omogućuje objedinjeno upravljanje rutama, sigurnošću i filtriranjem zahteva.

Front kontroler se često koristi u web aplikacijama i MVC arhitekturi, gde omogućuje upravljanje zahtevima pre nego što stignu do konkretnih kontrolera. Koristi se u okviru popularnih web okvira kao što su **Spring MVC** (Java), **ASP.NET MVC** (.NET), **Express.js** (Node.js) i mnogim drugim.

![]({{page.image}})

## Karakteristike

1. **Centralizovana kontrola**. Svi zahtevi prolaze kroz jedan centralni kontroler, što olakšava upravljanje pristupom, proveru autentikacije i autorizacije, kao i primenu filtera.
2. **Jednostavnije rutiranje**. Front kontroler može da usmerava zahteve ka odgovarajućim kontrolerima ili akcijama, što pojednostavljuje rutiranje u aplikaciji.
3. **Ekstenzibilnost**. Dodavanje novih funkcionalnosti, kao što su logovanje i autentifikacija, može se obaviti na jednom mestu bez izmene drugih delova koda.
4. **Poboljšana konzistentnost**. Korišćenjem front kontrolera postiže se doslednost u rukovanju zahtevima jer svi zahtevi prolaze kroz isti kontrolni sloj.

## Primer

U ovom primeru koristimo Express.js u Node.js aplikaciji kao front kontroler koji rukuje zahtevima.

```javascript
const express = require('express')
const app = express()

// middleware za autentifikaciju
app.use((req, res, next) => {
  console.log(`Pristup zahtevu: ${req.method} ${req.url}`)
  next()
})

// definisanje ruta
app.get('/home', (req, res) => {
  res.send('Početna stranica')
})

app.get('/user', (req, res) => {
  res.send('Korisnička stranica')
})

// pokretanje servera
app.listen(3000, () => {
  console.log('Server radi na portu 3000')
})
```

U ovom primeru, `app` predstavlja front kontroler. Svi zahtevi dolaze prvo do njega, gde se primenjuje posrednik (*middleware*) za autentifikaciju zahteva, pre nego što budu usmereni ka odgovarajućim rutama.
