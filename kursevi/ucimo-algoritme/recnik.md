---
title: Rečnik ili heš tabela
layout: lekcija-algoritmi
permalink: /recnik
image: //upload.wikimedia.org/wikipedia/commons/thumb/c/c2/HASHTB08.svg/600px-HASHTB08.svg.png
---

![]({{page.image}})

**Rečnik, mapa ili heš tabela (eng. *hash table*) je struktura podataka koja čuva parove ključeva i vrednosti. Ova struktura koristi heš funkciju za indeksiranje elemenata, što omogućava brz pristup vrednostima na osnovu ključeva.** 

Rečnik omogućava brzo nalaženje, dodavanje i brisanje vrednosti, bez obzira na veličinu rečnika.

## Kako radi?

Kada se novi par ključ-vrednost doda u rečnik, ključ prolazi kroz heš funkciju koja generiše heš kod, tj. broj koji se koristi kao indeks za pozicioniranje vrednosti u memoriji. Heš kod određuje gde će vrednost biti sačuvana u tabeli. Kada želimo da pristupimo vrednosti pomoću ključa, ključ ponovo prolazi kroz heš funkciju kako bi ukazao na mesto u tabeli gde je vrednost pohranjena.

##  Primer

Rečnici su izuzetno korisni kada je potrebno da brzo pristupimo podacima na osnovu ključa. Na primer, ako imamo rečnik imena i brojeva telefona, možemo dobiti nečiji broj telefona koristeći ime kao ključ.

```python
telefonski_imenik = {
    "Marko": "064123456",
    "Ana": "063987654",
    "Petar": "065543210"
}
# pristup broju telefona pomoću ključa
print(telefonski_imenik["Ana"])  # izlaz: 063987654
```

## Vremenska složenost

Pristup, umetanje i brisanje u haš tabeli obično imaju O(1) vremensku složenost u prosečnom slučaju, što znači da su izuzetno brze operacije i ne zavise od broja elemenata.

## Mogućnost kolizije

Kolizija se dešava kada dva različita ključa dobiju isti heš kod, tj. kad više ključeva pokazuje na istu memorijsku lokaciju. Postoji nekoliko tehnika za rešavanje kolizija, uključujući lančanje (*chaining*) i otvoreno adresiranje (*open addressing*).
