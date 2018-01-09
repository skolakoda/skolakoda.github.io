---
title: Efikasnost algoritama
layout: lekcija-algoritmi
permalink: /efikasnost-algoritama
author: damjan
image: /images/koncepti/algoritmi/efikasnost-algoritama.png
---

![]({{page.image}})

***Kada pišemo neku proceduru, veoma je bitno da smo u stanju da procenimo koliko je ona skupa, odnosno složena u smislu vremena i resursa. Složenost se meri brojem operacija koje neki algoritam izvršava. Složenost je direktno proporcionalna trajanju, a obrnuto proporcionalna efikasnosti algoritma.***

## Konstantna složenost: O(1)
> ***vreme uvek isto, nezavisno od unosa***

Algoritmi konstantne složenosti izvode uvek isti broj operacija, bez obzira na veličinu unosa. Dobar primer je uzimanje nasumičnog člana niza. Dužina niza ne utiče na složenost, jer svakom članu pristupamo jednako brzo.

Ovako izgleda funkcija koja prima niz, a vraća nasumični član:

```js
niz => niz[Math.floor(Math.random() * niz.length)]
```

## Podlinearna složenost: O(log n), O(&radic;n)
> ***vreme raste korenski ili sporije od unosa***

Algoritmi sublinearne složenosti su vrlo efikasni algoritmi, čije vreme izvršenja raste znatno sporije (logaritamski ili korenski) od rasta unosa.

Reč logaritam podseća na algoritam, ali nemaju nikakve veze. Logaritam je operacija suprotna stepenovanju (u računarstvu se podrazumeva logaritam sa osnovom 2). Izuzetno, logaritam i koren mogu imati isti rezultat (`log 16` jednak je korenu od 16), no logaritam je redovno manji. Npr. `log 100` je 6.6, dok je koren istog broja 10, `log 128` je 7, dok je koren 11.3, itd.

Algoritmi logaritamske efikasnosti za svaku radnju nad članom eliminišu procenat unosa. Najpoznatiji primer logaritamske složenosti je binarna pretraga, koja u svakom prolasku deli sortirani niz na pola, i odbacuje jednu polovinu.

U praksi, za unos veličine 16 potrebno je da najviše 4 puta ponovimo proceduru.

## Linearna složenost: O(n)
> ***vreme raste isto kao unos***

Algoritam ima linearnu složenost kada nad svakim članom ulaza obavlja isti broj operacija (može i samo jednu). Na primer:

```js
for (let i = 0; i < 100; i++) {  
    console.log(i)
}
```

Količina rada po elementu je konstantna i ne zavisi od veličine unosa. Vreme izvršenja jednako je nekom količniku unosa.

## Kvadratna složenost: O(n^2)
> ***vreme raste unos na kvadrat***

Kod kvadratnih algoritama količina rada po svakom elementu zavisi od ukupnog broja elemenata. Svaki od `n` unosa zahteva `n` količinu rada, pa je ukupan broj prolazaka jednak unosu na kvadrat. Klasičan primer je petlja unutar petlje:

```js
const brojUnosa = 100
let brojProlazaka = 0

for(i = 0; i < brojUnosa; i++){
  for(j = 0; j < brojUnosa; j++){
    brojProlazaka++
  }
}
// brojProlazaka je 10000
```

Jedna od praktičnih primena je kombinacija svakog elementa sa svakim:

```js
const osobe = ["Ana", "Milovan", "Azra", "Senad", "Petra", "Petar"]

for(let i = 0; i < osobe.length; i++){
  for(let j = i+1; j < osobe.length; j++){
    console.log(osobe[i], osobe[j])
  }
}
```

Ako imamo 3 petlje jednu unutar druge, onda imamo `O(n^3)` odnosno kubnu složenost.

## Eksponencijalna složenost: O(x^n)
> ***vreme raste na stepen unosa***

Kod eksponencijalnih algoritama svako uvećenje unosa uvećava vreme izvršenja za jedan stepen. Ako na primer, za jedan unos imamo 10 operacija, za dva unosa 10 * 10, već za tri unosa imamo 10 * 10 * 10 operacija.

Primer eksponencijalne složenosti je naivna rekurzija za zbir fibonačijevih brojeva:

```js
const fibonaci = n => {
  if (n < 3) return 1
  return fibonaci(n - 1) + fibonaci(n - 2)
}
```

Takođe, pokušaj nalaženja lozinke putem svim mogućih kombinacija.
