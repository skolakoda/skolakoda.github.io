---
title: Objekat za pristup podacima
layout: lekcija-principi
permalink: /objekat-za-pristup-podacima
image: /images/koncepti/oop/dao.jpg
---

![]({{page.image}})

**Objekat za pristup podacima (*data access object*, skraćeno DAO) je obrazac koji apstrahuje pristup podacima i omogućava da aplikacija komunicira sa bazom, API-jem ili drugim izvorima podataka bez direktne zavisnosti od konkretne tehnologije.**

Objekat za pristup podacima se koristi za obavljanje standardnih operacija kao što su čitanje, upisivanje, ažuriranje i brisanje podataka (CRUD).

DAO obrazac smanjuje zavisnost komponenti od konkretnog izvora podataka. Na primjer, ako razmišljamo o prelasku s `MySQL` na `MongoDB`, sve promjene je potrebno izvršiti samo u jednom objektu.

## Primer u Javaskriptu

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


## Primer u Node.js-u

Prost primer objekta za interakciju sa bazom podataka (koristeći, na primer, MongoDB):

```js
class UserDAO {
  constructor(db) {
    this.db = db
    this.collection = db.collection('users')
  }

  async createUser(user) {
    return await this.collection.insertOne(user)
  }

  async getUserById(userId) {
    return await this.collection.findOne({ _id: userId })
  }

  async updateUser(userId, updateData) {
    return await this.collection.updateOne({ _id: userId }, { $set: updateData })
  }

  async deleteUser(userId) {
    return await this.collection.deleteOne({ _id: userId })
  }
}
```

## Primer u C#

Prost primer u C# koji koristi Entity Framework:

```cs
using System;
using System.Linq;

public class UserDAO {
    private readonly AppDbContext _context;

    public UserDAO(AppDbContext context) {
        _context = context;
    }

    public User GetUserById(int userId) {
        return _context.Users.SingleOrDefault(u => u.Id == userId);
    }

    public void CreateUser(User user) {
        _context.Users.Add(user);
        _context.SaveChanges();
    }

    public void UpdateUser(User user) {
        _context.Users.Update(user);
        _context.SaveChanges();
    }

    public void DeleteUser(int userId) {
        var user = _context.Users.SingleOrDefault(u => u.Id == userId);
        if (user != null) {
            _context.Users.Remove(user);
            _context.SaveChanges();
        }
    }
}
```