---
title: Euklidov algoritam
layout: lekcija-algoritmi
permalink: /euklidov-algoritam
---

***Euklidov algoritam je efikasan način za određivanje najvećeg zajedničkog delioca (NZD) dva broja.***

Algoritam je nazvan po starogrčkom matematičaru Euklidu, koji ga je naveo u VII i X knjizi svojih Elemenata (oko 300. p.n.e.). Prema rečima Donalda Knuta, „*Euklidov algoritam je deda svih algoritama, pošto je najstariji netrivijalni algoritam koji je preživeo do danas.*“

## Sled koraka

Algoritam otkriva najveći zajednički delilac tako što od većeg broja neprestano oduzimamo manji.  Zasnovan je na principu da se najveći zajednički delilac ne menja ukoliko se manji broj oduzme od većeg, pa se potom odredi NZD novog broja i manjeg od prethodna dva.

Na primer, imamo brojeve 48 i 18. Ukoliko od 48 oduzmemo 18 dobićemo 30, dakle, ostaju nam 30 i 18. Zatim od 30 oduzimamo 18, pa imamo 12 i 18. Ponavljamo ovaj postupak dok jedan od brojeva ne postane nula. Na kraju, jedini preostali broj (6) je najveći zajednički delilac.

![](https://upload.wikimedia.org/wikipedia/commons/e/e2/Euclidean_algorithm_252_105_animation_flipped.gif)

## Iterativna implementacija

{:.ulaz}
```js
function nzd(a, b) {
  while (b != 0)
    [a, b] = [b, a % b]
  return a
}

console.log(nzd(48, 18))
```

## Rekurzivna implementacija

Najveći zajednički delilac se, pomoću Euklidovog algoritma, može izračunati i rekurzivnom funkcijom:

{:.ulaz}
```js
function nzd(a, b) {
  if (b == 0) return a
  return nzd(b, a % b)
}

console.log(nzd(48, 18))
```
