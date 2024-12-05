---
title: Otkrivanje sudara
layout: lekcija-razvoj-igara
permalink: /detekcija-sudara
---

![](https://camo.githubusercontent.com/0a019c821238ef54fc0b7dabf0dadc74cdd180930f30598349260d8adc163e65/68747470733a2f2f7261772e6769746875622e636f6d2f6a65666654686f6d70736f6e2f436f6c6c6973696f6e446574656374696f6e46756e6374696f6e73466f7250726f63657373696e672f6d61737465722f436f6c6c6973696f6e4c6f676f2e706e67)

**Otkrivanje sudara (ili detekcija kolizije) podrazumeva niz metoda kojima otkrivamo da li se dva geometrijska tela dodiruju.**

Otkrivanje sudara je najkomplikovaniji deo svakog fizičkog pogona igre. Fizički pogon obično radi detekciju sudara kreiranjem fizičkog tela, koje je povezano sa njegovom vizuelnom reprezentacijom. Ovo telo ima svojstva kao što su brzina, pozicija, rotacija, obrtni moment, itd., kao i fizički oblik.

Detekcija sudara je vrlo skupa operacija, a pošto igra može imati desetine ili stotine objekata, puno truda se ulaže u optimizaciju algoritama za detekciju sudara. Dodatni sloj složenosti nastaje kada se sudaraju objekti koji mogu da se rotiraju. Takođe, veoma brzi predmeti, kao što su meci, mogu proći kroz cilj između dva kadra i izbeći detekciju sudara. Rešenje za ovo se zove **kontinuirana detekcija sudara**.

## Faze detekcije sudara

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Example_of_bounding_volume_hierarchy.svg/640px-Example_of_bounding_volume_hierarchy.svg.png)

Detekcija sudara se obično vrši u dve faze: široka i uska faza.

**Široka faza** detekcije je jeftina operacija koja brzo odgovara na pitanje: koji objekti se mogu sudariti? Služi da filtrira predmete koji nisu u potencijalnom sudaru. To se obično postiže korišćenjem algoritama za brzo pretraživanje, kao što su *bounding volume hierarchy* ili *spatial hashing*. 

**Uska faza** koja otkriva koji deo objekta A se sudario sa objektom B obično je računarski zahtevna.

## Koraci algoritma

Rutina za detekciju sudara može izgledati ovako:

* Podelite svet na sekcije putem mreže.
* Ako su dva objekta u istoj sekciji mreže, koristite vrlo jednostavnu rutinu za detekciju sudara kako biste proverili treba li dalje istraživati. Obično se koristi AABB za ovo.
* Ako deluje da se sudaraju, koristite detaljniji algoritam kako biste to utvrdili.
* Ako se sudaraju, izvucite informacije o sudaru i odlučite kako da objekti reaguju.

{:.uokvireno}
**Savet**: napravite telo sudara nešto manjim od vidljivog tela. Predmeti se neće toliko zaglaviti, niti će izgledati da udaraju u nešto što ne postoji.

![kolizija-cilindar](/images/razvoj-igara/kolizija-cilindar.png)

## Gruba sila

U detekciji sudara, svaki predmet mora biti testiran barem jednom. Najjednostavniji pristup je gruba sila (*brute force*), gde se svaki predmet testira na sudar sa svakim drugim objektom. Za igre sa malim brojem objekata, ovo je verovatno najbrža i najprostija metoda. Međutim, računska složenost ove metode raste kvadratno sa svakim objektom koji dodate. Ovo brzo postaje najveće usko grlo igre.

## Raslojavanje

Raslojavanje (*layering*) je tehnika da neki predmeti nikada ne dođu u sudar jedni s drugima. Ovo je ključno za situacije kada meci koje ispale određeni likovi ne utiču na druge likove. Na primer, da projektili koje ispale igrači iste ekipe nanose štetu samo neprijateljima, ali ne i svojima.

Ukratko, ako predmeti nisu na istom sloju, ne proverava sudar:
```js
if (a.layer != b.layer) continue;
```

## Literatura

- Jeff Thompson, [*Collision detection*](http://www.jeffreythompson.org/collision-detection/)