---
title: Hash funkcija
layout: lekcija-blockchain
permalink: /hash-funkcija
---

<!-- **Hash funkcije kao argument uzimaju podatke varijabilne duljine, dok je rezultat uvijek fiksne duljine.** -->

**Hash funkcija je bilo funkcija koja za ulaz ima podatke proizvoljne veličine, a kao izlaz vraća podatke fiksne veličine. Vrijednost hash funkcije naziva se *hash* dok se ulazni podatak naziva poruka.**

Kriptografska hash funkcija je posebna klasa hash funkcije koja ima određena svojstva koja je čine prikladnom za uporabu u kriptografiji. Kriptografske hash funkcije su jednosmjerne odnosno nemaju inverz. Jedini način da se kreiraju ulazni podaci iz izlaza je pokušati pretraživanje *brute-force* algoritmom, isprobavanjem svih mogućih vrijednosti ulaza kako bi se vidjelo koji odgovara izlazu.

Blockchain tehnologija iskorištava važna svojstva *hash*-eva. Vrlo je lako proizvesti hash iz podataka kao što je Bitcoin blok, ali je gotovo nemoguće otkriti koji su to podatci gledajući hash. Vrlo lako je proizvesti hash iz velike količine podataka, ali svaki hash je jedinstven. Ako se promijeni samo jedno slovo ili brojka, hash se kompletno mijenja.

## Primjer

Uzmimo tekst *"Ovo je diplomski rad o blockchain tehnologiji"*, na njega nadodajemo broj `X` gdje je X=0, 1, 2, ... i računamo vrijednost SHA-256 hash funkcije.

```
SHA-256("Ovo je diplomski rad o blockchain tehnologiji0") =
    4a8140c36617e405529468263582cd553b8ba949fff2a4ee4466eb769d054e21

SHA-256("Ovo je diplomski rad o blockchain tehnologiji1") =
    a44d0a6b0c79f53827f9a99d1bc8d36474106f638d411cf4cf629d3e0754d94e

SHA-256("Ovo je diplomski rad o blockchain tehnologiji2") =
    3758b36cd3f7113090decd8267914bf2a45166537601130a081d190e65f31717

SHA-256("Ovo je diplomski rad o blockchain tehnologiji3") =
    16682e08d6c5fdc590acf40c49a9c24c351465d576c50951b69abe75038f96c5

SHA-256("Ovo je diplomski rad o blockchain tehnologiji4") =
    ba891692b7642d087deF7f7267c9732487f73d7269e0caa6b58ed54496f06565d

SHA-256("Ovo je diplomski rad o blockchain tehnologiji5") =
    b3e213fbc4b84d315c4e16fb64695c8dc087ffd1cfdeb522f73d4f56b7d31e17

SHA-256("Ovo je diplomski rad o blockchain tehnologiji20") =
    9c3b4fa42488da75f47849c455e0bd7ca4d6416c65a4bb1e16d54dcfb3edcdce

SHA-256("Ovo je diplomski rad o blockchain tehnologiji21") =
    098bd24561e3491df483fd8b41db24b2362588ae558d1f943aaec8edaf11c21a
```

Želimo li u navedenom primjeru pronaći hash koji započinje znamenkom 0 ili koji je u numeričkom smislu manji od heksadecimalnog broja `0x1000000000000000000000000000000000000000000000000000000000000` potrebno je doći do vrijednosti X =21. Da je traženi broj 0 na početku hash-a bio veći trebalo bi nam dulje vrijeme da pronađemo X uz koji bi izračunati hash bio zadovoljavajući.

## Bitkoin primjena

Ako pogledamo korake algoritma koje smo prije naveli, posao Bitkoin rudara je vrlo sličan. Oni najprije prikupljaju nove zapise koje treba upisati u blockchain i konstruiraju novi blok. Na podatke iz zaglavlja tog bloka nadodaju redom različite vrijednosti broja `nonce`, te na taj podatak dva puta primjenjuju SHA-256 funkciju sve dok rezultantni hash ne postane manji od broja `cilj`. Rudar koji prvi pronađe zadovoljavajući hash to javlja ostalim partnerima u sustavu, kako bi oni prestali raditi na uključenju tog bloka u blockchain.

Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
