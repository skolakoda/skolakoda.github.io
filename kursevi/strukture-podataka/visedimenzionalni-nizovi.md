---
title: Višedimenzionalni nizovi
layout: lekcija-strukture
permalink: /visedimenzionalni-nizovi
image: /images/koncepti/trodimenzionalni-niz.gif
---

**Pored jednodimenzionalnih nizova, koji imaju samo jedan indeks za indeksiranje elementa niza, programski jezici podržavaju i višedimenzionalne nizove.**

## Dvodimenzionalni nizovi

Među višedimenzionalnim nizovima, najčešći i najjednostavniji su **dvodimenzionalni nizovi**, koje često nazivamo matricama ili tabelama. U dvodimenzionalnom nizu prvi indeks određuje red u tabeli, a drugi kolonu u okviru tog reda. Na primer, programi koji rešavaju Sudoku ili ukrštene reči su primeri programa u kojima je pogodno koristiti dvodimenzionalne nizove. Takođe, radni list u programskom alatu Excel je dobar primer dvodimenzionalnog niza gde se ćelije indeksiraju pomoću slova koje određuje kolonu i broja koji određuje red.

## Trodimenzionalni nizovi

![]({{page.image}})

**Trodimenzionalni niz** možemo zamisliti kao niz od više dvodimenzionalnih tabela, gde prvi indeks niza određuje koju od tabela posmatramo, drugi – koji red u tabeli posmatramo i treći indeks kolonu u okviru reda u kojoj se nalazi željeni element. Dobar primer za ovo je Excel koji u jednom dokumentu može da ima više radnih listova. U tom slučaju prvi indeks označava kom radnom listu pristupamo, zatim slovo određuje u kojoj koloni na tom listu se nalazi ćelija, a broj u kom redu.

Takođe, kao primer za trodimenzionalni niz može da posluži i kalendar u nekoj aplikaciji koja beleži prosečne temperature za svaki dan. U tom slučaju prvi indeks predstavlja godina, drugi mesec u okviru godine, a treći dan u godini.

```
type yearlyTemps = Array [0..2020, 1..12, 1..31] of real
```

Moguće je definisati i nizove sa četiri i više dimenzija, ali se takvi nizovi ne sreću toliko često u praksi.


Izvor: [*Nizovi*, petlja.org](https://petlja.org/BubbleBee/r/Lectures/osnovne-strukture-podataka)
