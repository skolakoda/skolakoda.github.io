---
title: Prototip (projektni obrazac)
layout: lekcija-principi
permalink: /obrazac-prototip
image: /images/koncepti/oop/prototype.png
---

![]({{page.image}})

**Prototip (*prototype pattern*) je tvorbeni obrazac koji omogućava kreiranje novog objekta kloniranjem postojećeg, umesto ponovnim instanciranjem klase.**

Ovaj obrazac je naročito koristan kada je instanciranje složeno ili skupo u pogledu resursa (npr. dovlačenje podataka iz baze, čitanje sa diska, izvođenje skupih proračuna). Kod kloniranja preskačemo ove procese, jer koristimo postojeći objekat kao osnovu, sa već završenom inicijalizacijom.

Na primer, bez kloniranja objekta, moramo svaki put pozivati bazu podataka da bismo dohvatili listu zaposlenih. Takođe, ukoliko razvijamo igricu sa više nivoa. Svaki nivo je zasnovan na osnovnom nivou, sa nekim modifikacijama. U ovom slučaju možemo klonirati osnovni nivo za kreiranje narednog, kako bismo izbegli složenu inicijalizaciju. Nakon kloniranja, novi objekat prilagođavamo po potrebi. 

## Vrste kopiranja

Postoje dve vrste kopiranja objekata: 
- plitko kopiranje (*shallow copy*) kopira samo prvi nivo svojstava objekta. Ako original sadrži unutrašnje objekte, kopije će deliti iste reference na njih.
- duboko kopiranje (*deep copy*) kopira objekt zajedno sa svim njegovim ugrađenim strukturama (rekurzivno). Na ovaj način, kopija postaje nezavisna i promene u kopiji ne utiču na original.

## Primer u Javi

Evo programa koji prikazuje primjer obrasca prototipa u Javi:

```java
package com.journaldev.design.prototype;

import java.util.ArrayList;
import java.util.List;

public class Employees implements Cloneable{

	private List<String> empList;
	
	public Employees(){
		empList = new ArrayList<String>();
	}
	
	public Employees(List<String> list){
		this.empList=list;
	}
	public void loadData(){
		// read all employees from database and put into list
		empList.add("Pankaj");
		empList.add("Raj");
		empList.add("David");
		empList.add("Lisa");
	}
	
	public List<String> getEmpList() {
		return empList;
	}

	@Override
	public Object clone() throws CloneNotSupportedException{
			List<String> temp = new ArrayList<String>();
			for(String s : this.getEmpList()){
				temp.add(s);
			}
			return new Employees(temp);
	}	
}
```

Primijetite da je metoda `clone` nadjačana kako bi se obezbijedila duboka kopija liste. Evo primjera prototipa testnog programa koji će pokazati prednosti uzorka prototipa:

```java
package com.journaldev.design.test;

import java.util.List;

import com.journaldev.design.prototype.Employees;

public class PrototypePatternTest {

	public static void main(String[] args) throws CloneNotSupportedException {
		Employees emps = new Employees();
		emps.loadData();
		
		// use clone to get the Employee object
		Employees empsNew = (Employees) emps.clone();
		Employees empsNew1 = (Employees) emps.clone();
		List<String> list = empsNew.getEmpList();
		list.add("John");
		List<String> list1 = empsNew1.getEmpList();
		list1.remove("Pankaj");
		
		System.out.println("emps List: " + emps.getEmpList());
		System.out.println("empsNew List: " + list);
		System.out.println("empsNew1 List: " + list1);
	}
}
```

Ispis ovog primjera je:

```
emps List: [Pankaj, Raj, David, Lisa]
empsNew List: [Pankaj, Raj, David, Lisa, John]
empsNew1 List: [Raj, David, Lisa]
```

## Primer kopiranja objekata u JS-u

### Primer plitkog kopiranja

Koristeći metodu [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign):

{:.ulaz}
```js
const original = { 
  name: 'Auto', 
  details: { color: 'plava' } 
}
const kopija = Object.assign({}, original)

// menjamo kopiju
kopija.name = 'Bicikl'
kopija.details.color = 'crvena'

console.log(original.name)
console.log(original.details.color) // promenjen original
```

Koristeći metodu [Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create), koja radi po principu prototipa:

{:.ulaz}
```js
const original = { 
  name: 'Auto', 
  details: { color: 'plava' } 
}
const kopija = Object.create(original)

// menjamo kopiju
kopija.name = 'Bicikl'
kopija.details.color = 'crvena'

console.log(original.name)
console.log(original.details.color) // promenjen original
```

### Primer dubinskog kopiranja

Duboko kopiranje nije prirodno podržano u JavaScript-u, ali možemo ga implementirati pomoću rekurzije:

{:.ulaz}
```js
function deepCopy(struct) {
  // vraćamo primitive i nepostojeće vrednosti
  if (typeof struct !== 'object' || struct === null) return struct

  // kreiramo novu strukturu
  const kopija = Array.isArray(struct) ? [] : {}

  // rekurzivno kopiramo svojstva
  for (const key in struct) {
    if (struct.hasOwnProperty(key)) {
      kopija[key] = deepCopy(struct[key]);
    }
  }
  return kopija
}

// test
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  },
  hobbies: ['reading', 'traveling']
}

const kopija = deepCopy(original)

// izmena kopije ne utiče na original
kopija.address.city = 'Los Angeles'
kopija.hobbies.push('gaming')

console.log(original.address.city)  // "New York"
console.log(original.hobbies)       // ["reading", "traveling"]
console.log(kopija.address.city)    // "Los Angeles"
console.log(kopija.hobbies)         // ["reading", "traveling", "gaming"]
```

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.
- [Obrazac dizajna prototipa u Javi](https://bs.linux-console.net/?p=4252#gsc.tab=0)