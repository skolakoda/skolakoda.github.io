---
title: Šta je pristupačnost?
layout: lekcija-html
permalink: /pristupacnost
---

**Pristupačnost mera dostupnosti stranica osobama sa invaliditetom.**

Za pristupačnost je potrebno da pišemo validne oznake usaglašene sa standardima, da koristimo prednost HTML funkcija koje poboljšavaju pristupačnost i tagove koji se zasnivaju na specifikaciji.

## Dodatni opisi

Da bi linkovi bili korisniji, možemo koristiti atribut `title` za dodatni opis.

Atribut `alt` na slici obezbeđuje alternativni tekst, koji se prikazuje samo ako se slika iz nekog razloga ne učita, ili ako posetilac koristi samo tekstualni čitač.

## Korišćenje boja

Često upadamo u „zamku“ da upotrebljavamo boje da bi nešto označili. Na primer, koristimo crvenu da označimo grešku. Nažalost, korisnici sa oštećenim vidom ne mogu da razlikuju naše poruke o grešci od ostatka teksta na stranici. Najbolja alternativa je da te elemente označimo tekstom.

Boje mogu da prouzrokuju teškoće prilikom čitanja stranice ukoliko su slične, posebno ako su slične boje teksta i pozadine. Postoji razlog zašto većina programa koristi crni tekst na svetloj pozadini: jak kontrast olakšava čitanje.

## Uveličavanje teksta

Mnogi posetioci povećavaju slova u pregledaču radi lakšeg čitanja, pa je bitno da isprobamo kako stranice rade sa povećanim slovima. 

Veoma je bitno da posetioci imaju mogućnost zumiranja. Nikada ne koristite parametre `user-scalable=no` niti `maximum-scale=1.0`, koji ukidaju zumiranje, zarad fiksne veličine slova.

**Loše rešenje:**

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0">
```

**Dobro rešenje:**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

{:.uokvireno.ideja}
Ukidanjem mogućnosti zumiranja faktički onemogućujemo čitanje stranica osobama sa slabijim vidom.

## Semantički tagovi

U slučajevima kada želimo da istaknemo tekst, poželjno je da koristimo tagove `<em>` i `<strong>`, umesto `<i>` i `<b>`. Ovi tagovi obezbeđuju više značenja, nego osnovni tagovi za formatiranje teksta, koji se često koriste. Neće svi pregledači iskoristiti prednost tih tagova, ali svakako neće škoditi.

## Formulari

Dodeljivanje labele, kao i odgovarajućih `tabindex` vrednosti poljima može da poveća upotrebljivost i pristupačnost obra­zaca.

## Provera pristupačnosti

Baš kao što koristimo W3C validator da bismo proverili da li su HTML stranice u skladu sa standardom, možemo koristiti brojne validatore da bismo proverili da li sajt ima problema sa pristupačnošću. Jedan takav validator je *Cynthia Says*, koji možemo pronaći na adresi [cynthiasays.com](http://www.cynthiasays.com/). On proverava da li je sajt u skladu sa smernicama za pristupačnost veb sadržaja, koje je napisala organizacija W3C.

### Literatura

* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
