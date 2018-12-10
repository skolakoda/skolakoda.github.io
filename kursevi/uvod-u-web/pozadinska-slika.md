---
title: Pozadinska slika
layout: lekcija-html
permalink: /pozadinska-slika
---

**Korišćenjem CSS-a možemo dodati pozadinsku sliku na bilo koji element, i podešavati kako se ona prikazuje i kako je pozicionirana.** 

Da bismo dodali pozadinsku sliku, koristimo svojstvo `background-image`.

## `background-repeat`

Svojstvo `background-repeat` se koristi za određivanje kako se pozadinska slika ponavlja. Mogućnosti obuhvataju `repeat` (podrazumevana vrednost, ponavlja sliku horizontalno i vertikalno), `repeat-x` (ponavlja samo horizontalno), `repeat-y` (ponavlja samo vertikalno) i `no-repeat` (ne ponavlja sliku).

## `background-position`

Svojstvo `background-position` omogućava da pozicioniramo pozadinsku sliku unutar elementa. Možemo podesiti horizontalnu poziciju (`left`, `right`, `cen­ter`), vertikalnu poziciju (`top`, `bottom`, `center`) ili obe pozicije. Ako postavimo samo jednu vrednost, podrazumevana pozicija (`center`) će se koristiti za drugu. Ako nave­demo samo dve vrednosti koje se mogu primeniti kao vertikalne ili horizontalne pozicije (procenat ili `center`), pregledač interpretira prvu vrednost kao horizontalnu, a drugu kao vertikalnu.

Možemo podesiti istu poziciju na više načina. Na primer, gore desno:

```
100% 0%
top right
right top
```

ili centrirano pri dnu:

```
50% 100%
bottom center
center bottom
```

ili centrirano po obe ose:

```
50% 50%
center center
50%
```

Možemo staviti i negativne procente ako želimo da slika bude delimično izvan svog okvira.

## `background-attachment`

Još jedno svojstvo povezano sa pozadinom je `background-attachment`. Ono podržava vrednosti `scroll`, `fixed` i `local`. Podrazumevana vrednost je `scroll`, što znači da se pozadina pomera zajedno sa elementom u kome se nalazi. Vrednost `fixed` znači da se pozadina ne pomera, tj. slika zadržava svoju poziciju kada se pomera prikaz u pregledaču. Postavka `local` znači da se slika ne pomera kada se njen element pomera.

## Skraćenica `background`

Umesto da koristimo sva prethodna svojstva za određivanje pozadine, možemo koristiti samo skraćeno svojstvo `background`. Pomoću njega možemo odrediti boju pozadine, sliku, poziciju, ponavljanje i prilog. Sve vrednosti su opcione, ali moraju ići u određenom redosledu. Ovo je sintaksa:

```
background: boja slika ponavljanje prilog pozicija;
```

Skraćenicu `background` možemo koristiti na sledeći način:

```css
div {
  background: url("slike/priroda.png") no-repeat fixed center right;
}
```

## Pozadinska ili obična slika?

Stavljanje pozadinske slike je alternativa korišćenju `<img>` taga. 

Postoji praktično pravilo za izbor između ove dve alternative. Ako je slika čisto dekorativna, treba da se postavi kao pozadina. Ako je deo sadržaja, treba je dodati kao sliku. Na primer, ako imamo novinski članak, i želimo da dodamo sliku kao ilustraciju, `<img>` tag će odgovarati. Ako želimo da dodamo sliku pejzaža da bismo ulepšali zaglavlje, koristićemo pozadinsku sliku. Jedan od razloga je da se olakša čitanje slepima. Ako ulepšamo zaglavlje pomoću `<img>` taga, čitač ekrana će posetiocima reći da se slika nalazi na svakoj stranici koju posete. 

Drugo pravilo je da razmislimo šta bismo stavili u `alt` atribut. Ako je alternativni tekst zanimljiv ili koristan, treba da koristimo sliku. Ako ne možemo da smislimo ništa zanimljivo, onda verovatno treba da bude pozadina.

### Literatura

* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
