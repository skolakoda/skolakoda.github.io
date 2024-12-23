---
title: Lenjo učitavanje
layout: lekcija-principi
permalink: /lenjo-ucitavanje
image: /images/koncepti/lazy-loading.png
---

![]({{page.image}})

**Lenjo učitavanje (*lazy loading*) je obrazac dizajna koji se koristi za optimizaciju učitavanja podataka, tako da se podaci učitavaju samo kada su nužni, a ne unapred.** Ovaj pristup može poboljšati performanse aplikacije, posebno kada se radi o velikim količinama podataka. 

Iako lenjo učitavanje može poboljšati performanse, dodaje i složenost programu, pa se preporučuje samo kada je zaista potrebno.

## Upotreba

Lenjo učitavanje je korisno kada je učitavanje podataka skupo (u smislu vremena ili resursa) i kada se očekuje da podaci možda neće biti potrebni odmah. Na primer, ako se podaci koriste samo u određenim situacijama ili interakcijama sa korisnikom, lenjo učitavanje može pomoći da se izbegne nepotrebno učitavanje.

Obrazac je uobičajen u igricama, gde se nivoi ili delovi nivoa ne učitavaju unapred nego kada igrač stigne do njih. Obrazac je čest i u web aplikacijama, gde korisnik inicijalno vidi par stavki, nakon čega dobija više skrolovanjem ili klikom na "Prikaži više".

## Primer: klijentsko učitavanje podataka na skrol

```js
let offset = 0
const limit = 5

function loadItems() {
  fetch(`/api/items?offset=${offset}&limit=${limit}`)
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        const div = document.createElement("div")
        div.textContent = item.name
        document.body.appendChild(div)
      })
      offset += limit
    })
}

document.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadItems()
  }
})

// inicijalno učitavanje
loadItems()
```

## Primer: server za lenjo učitavanje u C#

Implementacija servera u ASP.NET Core. Kada server primi zahtev, on obrađuje upitne parametre (`offset` i `limit`) kako bi generisao odgovarajuće podatke.

```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;

var app = WebApplication.CreateBuilder(args).Build();

app.MapGet("/api/items", async (HttpContext context) => {
    var query = context.Request.Query;
    int offset = int.Parse(query["offset"].FirstOrDefault() ?? "0");
    int limit = int.Parse(query["limit"].FirstOrDefault() ?? "5");

    var items = Enumerable.Range(offset, limit)
                          .Select(i => new { Id = i, Name = $"Item {i}" });

    await context.Response.WriteAsJsonAsync(items);
});

await app.RunAsync();
```

## Primer: server za lenjo učitavanje u Node.js-u

```js
const express = require('express')
const app = express()

app.get('/api/items', (req, res) => {
  const offset = parseInt(req.query.offset || '0', 10)
  const limit = parseInt(req.query.limit || '5', 10)

  const items = Array.from({ length: limit }, (_, i) => ({
    id: offset + i,
    name: `Item ${offset + i}`
  }))

  res.json(items)
})

// pokretanje servera
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/items`)
})
```

## Literatura

- Martin Fowler, *Patterns of Enterprise Application Architecture*