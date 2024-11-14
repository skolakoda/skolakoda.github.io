---
title: Objekat za pristup podacima
layout: lekcija-razvoj
permalink: /data-access-object
image: /images/koncepti/oop/dao.jpg
---

![]({{page.image}})

**Objekat za pristup podacima (*data-access-object*, skraćeno DAO) je obrazac koji apstrahuje pristup podacima i omogućava da aplikacija komunicira sa bazom, API-jem ili drugim izvorima podataka bez direktne zavisnosti od konkretne tehnologije.**

Objekat za pristup podacima se koristi za obavljanje standardnih operacija kao što su čitanje, upisivanje, ažuriranje i brisanje podataka (CRUD).

## Primer u JavaScript-u

Primer objekta za pristup API podacima u JavaScriptu:

{:.ulaz}
```js
class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  async GET(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`)
      if (!response.ok) throw new Error('Network error')
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  async POST(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Network error')
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  async PUT(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Network error')
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  async DELETE(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Network error')
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }
}

// upotreba
const API = new Api('https://lorem-api.com/api/')

API.GET('user/1')
  .then(data => console.log('Response: ' + data))
  .catch(error => console.log('Error:', error))

API.POST('user', { name: 'John Doe', email: 'john@example.com' })
  .then(data => console.log('Response: ' + data))
  .catch(error => console.log('Error:', error))

API.PUT('user/1', { name: 'John Doe Junior' })
  .then(data => console.log('Response: ' + data))
  .catch(error => console.log('Error:', error))

API.DELETE('user/1')
  .then(data => console.log('Response: ' + data))
  .catch(error => console.log('Error:', error))
```

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.