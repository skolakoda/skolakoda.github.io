---
title: Sudarni odgovor
layout: lekcija-razvoj-igara
permalink: /sudarni-odgovor
---

Razrešenja sudara (*collision resolution*) ili sudarni odgovor (*collision response*) dolazi nakon što je sudar detektovan, u igrama koje simuliraju fiziku. 

Odgovor na sudar dosta zavisi od mehanike igre. Raketa ispaljena na predmet treba da nanese štetu i eksplodira. Ali čist fizički odgovor je: dva pravougaonika se sudaraju i odbijaju. 

Kod impulsnog rešavanja (*impulse resolution*) dodajemo trenutnu silu da bi se predmeti razdvojili, uzimajući u obzir masu, poziciju i brzinu tela.

## Odbijanje vektora

![odbijanje-vektora](/images/razvoj-igara/refleksija-vektora.png)

Najprostiji sudar za modelovanje je sudar pokretnog i nepokretnog predmeta (npr. lopta udari u zid). Ovo se može rešiti refleksijom vektora - ugao pod kojim lopta ulazi jednak je uglu pod kojim izlazi.

Ako je zid uspravan, samo treba da obrnemo horizontalnu komponentu (`x`) brzine lopte. Ako je zid vodoravan, samo treba da obrnemo vertikalnu komponente (`y`) brzine lopte.

### Primer u kodu

{:.ulaz}
```js
function axisAlignedCollision(vect, b) {
  let newVect = { ...vect }
  if (b === 'v') newVect.x *= -1
  else if (b === 'h') newVect.y *= -1
  return newVect
}

const vector = { x: 5, y: 10 }

console.log(axisAlignedCollision(vector, 'v'))
console.log(axisAlignedCollision(vector, 'h'))
```

## Restitucija

Stvarni objekti nisu savršeno tvrdi, pa uvodimo koeficijent restitucije, koji modeluje elastičnost sudara.

Restitucija je količina odskoka koju predmet ima kada udari nešto. Na primer, koliko će lopta odskočiti kada je pustimo. Ako je restitucija 0.0f, ona će samo ostati na zemlji. Ako je vrednost 0.9f, loptica će dugo skakati.

## Problem preklapanja

Pošto se predmeti u stvarnom životu retko preklapaju kao u računarskoj simulaciji, obično ćemo vratiti njihove pozicije tako da se samo dodiruju, a ne preklapaju.

Kod impulsnog rešavanja, ako impuls nije dovoljno veliki, predmeti će se ponovo sudariti nakon sledećeg ažuriranja. Ovo može prouzrokovati da objekti ostanu trajno zaglavljeni.

## Ugaoni efekat

Sudarni odgovor za rotirajuće predmete je složeniji. Ne samo da se odbijaju, već njihova rotacija zavisi od tački sudara. Dodavanjem ugaonog efekata (*angular effects*) dobijamo realističniji sudarni odgovor za čvrsta tela.

![kolizija-ugaona](/images/razvoj-igara/kolizija-ugaona.png)
