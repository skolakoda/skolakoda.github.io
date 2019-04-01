---
title: Uvod u asinhrono programiranje
layout: lekcija-napredni-js
permalink: /asinhrono-programiranje
---

Programi po načinu izvršavanja mogu biti:

- sinhroni (program se izvršava sukcesivno)
- višenitni (više procesa se izvršava uporedo)
- asinhroni (program se izvšava na preskok, kako šta postaje dostupno)

## Sinhroni model

Sinhroni model je najstariji i najjednostavniji model pro­gramiranja. Zadaci se izvršavaju sukcesivno, jedan po jedan, i tek kada se izvrši prethodni, počinje sledeći. Na primer:

```js
const rezultat = database.query("SELECT * FROM table")
console.log("Baza podataka je pročitana")
```

U sinhronom modelu, druga naredba će biti izvršena tek nakon što se izvrši prva. Ako pretpostavimo da je prva naredba skupa i da traje 5 sekundi (čitanje iz udaljene baze podataka može trajati i duže), druga naredba će biti blo­kirana. Ovo je ozbiljan problem kada razvijamo sisteme visokih performansi. 

Postoji još jedan problem koji se manifestuje kada pravimo interfejs za ljudsku interakciju. Dok program izvršava zadatak koji može da potraje neko vreme, ne možemo da blo­kiramo korisnike. Oni mogu da unose nešto u polje za unos dok se izvršava skupi zadatak. Ne bi bilo dobro da blokiramo unos korisnika dok izvršavamo skupu operaciju. U takvom slučaju zahtevni zadaci treba da se izvršavaju u pozadini. 

## Višenitni model

Jedno od rešenja ovog problema je da svaki zadatak podelimo na programske niti kontrole. Ovo se zove višenitni model (*multithreading*). U višenitnom modelu svaki zadatak se izvršava u nitima kontrole. Nitima, obično, upravlja operativni sistem i one mogu da se izvršavaju uporedo na drugom procesoru. Zahvaljujući moder­nim procesorima, višenitni model može da ima izuzetno optimalne performanse. Neko­liko jezika podržava ovaj model (C#, C++, Java, Rust...).

Višenitni model može biti kompleksan za implementiranje. Niti treba međusobno da sarađuju, što može vrlo brzo da postane „nezgodno“. No, postoje varijacije višenitnog modela u kojima je stanje nepromenljivo. U takvim slučajevima model se pojednostavljuje, jer svaka nit je odgovorna za nepromenljivo stanje i nema potrebe da se upravlja stanjima između niti.

## Asinhroni model

Model asinhronog programiranja ima jednu nit kon­trole, unutar koje se zadaci prepliću. Kada izvršavamo jedan zadatak, možemo biti sigurni da je samo on izvršen. U asinhronom modelu nije potreban složen mehanizam za komunikaciju između niti, pa je zato predvidljiviji. Postoji još jedna razlika - u višenitnom modelu ne postoji način na koji možemo da kontrolišemo izvršavanje niti, jer raspored izvršenja određuje operativni sistem. Međutim, u asinhronom modelu ne postoji takav problem.

Kad je asinhroni model bolji od sinhronog? Kada god program čeka nešto - učitavanje diska, upit bazi podataka ili mrežne zahteve. Ovo su sve blokirajuće operacije. Kada program ima mnogo ulaza/izlaza iz izvora kao što su učitavanje diska ili mrežni pozivi, kašnjenje se ne može predvideti. U sinhronom programu nepredvidljivost je „recept“ za lošu performansu. Kada se asinhroni program suoči sa blokirajućim zadatkom, izvršava se naredni zadatak, bez čekanja da se blokirajuća operacija završi.

## Primer

Možete li pogoditi kojim redosledom će brojevi biti ispisani?

{:.ulaz}
```js
console.log(1)

fetch('https://baza-filmova.herokuapp.com/filmovi/')
  .then(data => console.log(2))

console.log(3)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
