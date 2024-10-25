---
title: Rečnik ili heš tabela
layout: lekcija-algoritmi
permalink: /recnik
image: //upload.wikimedia.org/wikipedia/commons/thumb/c/c2/HASHTB08.svg/600px-HASHTB08.svg.png
---

![]({{page.image}})

**Rečnik, mapa, asocijativni niz ili heš tabela (eng. *hash table*) je struktura podataka koja čuva parove ključeva i vrednosti. Ova struktura koristi heš funkciju za indeksiranje elemenata, što omogućava brz pristup vrednostima na osnovu ključeva.** 

Rečnik omogućava brzo nalaženje, dodavanje i brisanje vrednosti, bez obzira na veličinu rečnika.

## Kako radi rečnik?

Kada se novi par ključ-vrednost doda u rečnik, ključ prolazi kroz **heš funkciju** koja generiše heš kod, tj. broj koji se koristi kao indeks za pozicioniranje vrednosti u memoriji. Heš kod određuje gde će vrednost biti sačuvana u tabeli. Kada želimo da pristupimo vrednosti pomoću ključa, ključ ponovo prolazi kroz heš funkciju kako bi ukazao na mesto u tabeli gde je vrednost pohranjena.

## Kako radi heš funkcija?

Heš funkcija je funkcija koja prima ulazne podatke promenljive dužine i pretvara ih u fiksnu vrednost, poznatu kao heš kod. Ovaj kod je obično broj ili niz koji reprezentuje ulazne podatke na jedinstven način, a koristi se u strukturama kao što su heš tabele, te u šifrovanju i proveri podataka.

## Vremenska složenost

Pristup, umetanje i brisanje u haš tabeli obično imaju O(1) vremensku složenost u prosečnom slučaju, što znači da su izuzetno brze operacije i ne zavise od broja elemenata.

<!-- ## Mogućnost kolizije

Kolizija se dešava kada dva različita ključa dobiju isti heš kod, tj. kad više ključeva pokazuje na istu memorijsku lokaciju. Postoji nekoliko tehnika za rešavanje kolizija, uključujući lančanje (*chaining*) i otvoreno adresiranje (*open addressing*). -->

<!-- ## Prazni indeksi

Prazni indeksi u heš tabelama obično ne zauzimaju značajnu količinu memorije za same podatke, ali rezervišu prostor u memoriji za strukturu tabele. Uglavnom prazni indeksi zauzimaju samo onoliko memorije koliko je potrebno za čuvanje pokazivača ili reference (4 ili 8 bajtova u zavisnosti od sistema).

Veći broj praznih indeksa znači nižu gustinu popunjenosti, što može biti korisno za smanjenje sudara. Ipak, preniska gustina može uzrokovati rasipanje memorije. Kod nekih heš tabela, kada gustina popunjenosti dostigne određeni prag (npr. 70-80%), tabela se automatski proširuje kako bi se smanjio broj sudara.  -->

##  Primer: telefonski imenik

Pretpostavimo da imamo sledeće podatke za telefonski imenik koji želimo da implementiramo. Ključ za svaki unos će biti ime osobe, a vrednost broj telefona.

| Ime    | Broj telefona |
|--------|-----------|
| Marko  | 555-1234  |
| Ana    | 555-5678  |
| Jovan  | 555-8765  |
| Milan  | 555-4321  |

### Prevođenje imena u indekse

Koristićemo prostu heš funkciju koja prevodi ime u broj, te računa njegov modulo na osnovu veličine rečnika. Rezultat ove funkcije postaje index elementa. Za početak, uzmimo da je veličina rečnika 10.

Naša heš funkcija prevodi ime u broj tako što sabira ASCII vrednosti slova. Vrednosti imena Marko su:

- `M` = 77
- `a` = 97
- `r` = 114
- `k` = 107
- `o` = 111

Sabiranjem vrednosti slova dobijamo sledeći broj: 
```
77 + 97 + 114 + 107 + 111 = 506
```

Kada na zbir primenimo modulo 10 dobijamo sledeći indeks: 
```
506 % 10 = 6
```

Istom procedurom, za ostala imena dobijamo njihove indekse:

- Ana: ASCII vrednosti su A = 65, n = 110, a = 97. Ukupno: 272. Indeks = 272 % 10 = `2`
- Jovan: ASCII vrednosti su J = 74, o = 111, v = 118, a = 97, n = 110. Ukupno: 510. Indeks = 510 % 10 = `0`
- Milan: ASCII vrednosti su M = 77, i = 105, l = 108, a = 97, n = 110. Ukupno: 497. Indeks = 497 % 10 = `7`

Sada naš rečnik izgleda ovako:

| Indeks | Podaci                |
|--------|-----------------------|
| 0      | (Jovan, 555-8765)     |
| 1      |                       |
| 2      | (Ana, 555-5678)       |
| 3      |                       |
| 4      |                       |
| 5      |                       |
| 6      | (Marko, 555-1234)     |
| 7      | (Milan, 555-4321)     |
| 8      |                       |
| 9      |                       |

Imamo rezervisano deset indeksa, od čega su četiri popunjena.

### Rešavanje sudara

Zbog prirode heš funkcije, u nekom trenutku će dva različita imena dobiti isti indeks i tada dolazi do sudara. Na primer, kada u rečnik dodamo Miloša, koji ima isti indeks kao Ana.

ASCII vrednosti: 
- `M` = 77
- `i` = 105
- `l` = 108
- `o` = 111
- `š` = 161 (u UTF-8)

Zbir slova je 562 (77 + 105 + 108 + 111 + 161), a indeks `2` (562 % 10). Tako dolazi do sudara jer se `Miloš` hešira na isti indeks kao `Ana`. Sudar se rešava korišćenjem **lančanja**, odnosno pravljenjem liste na zauzetom indeksu:

| Indeks | Podaci                   |
|--------|--------------------------|
| 0      | (Jovan, 555-8765)        |
| 1      |                          |
| 2      | (Ana, 555-5678) -> (Miloš, 555-6789) |
| 3      |                          |
| 4      |                          |
| 5      |                          |
| 6      | (Marko, 555-1234)        |
| 7      | (Milan, 555-4321)        |
| 8      |                          |
| 9      |                          |

Kada imamo lančanje na nekom indeksu, vrednosti se ne pristupa u jednom koraku. Prvo, heš funkcija prevodi ime u indeks i nalazi listu. Potom traži ime u listi.

## Primer u kodu

U python-u, telefonski imenik bismo napravili na sledeći način, ne razmišljajući o heširanju i sudarima:

```python
telefonski_imenik = {
    "Marko": "555-1234",
    "Ana": "555-5678",
    "Jovan": "555-8765",
    "Milan": "555-4321",
    "Miloš": "555-6789"
}
# pristup broju telefona pomoću ključa
print(telefonski_imenik["Ana"])  # izlaz: 555-5678
```
