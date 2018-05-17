---
title: Heksadecimalni brojevi
layout: lekcija-c
permalink: /heksadecimalni-brojevi
image: https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2011/05/color-hex-examples.png
---

![]({{page.image}})

***Heksadecimalni (šesnaestični) sistem je uveden da bi se prevazišao problem dužine binarnog zapisa. Heksadecimalni zapis zahteva manje cifara, što je mnogo prihvatljivije za čoveka. Iako računar operiše nad binarnim brojevima, oni se mogu jednostavno prevesti u heksadecimalni oblik zahvaljajući pogodnom odnosu osnova ova dva sistema (2<sup>4</sup> = 16).***

Heksadecimalni brojni sistem ima 16 cifara (heksa na grčkom znači šestnaest). Pored deset cifara koje su preuzete iz dekadnog sistema, heksdecimalni sistem koristi i slova, tako da ima:

```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
```

Cifre 0-9 imaju uobičajene vrednosti, a slova A-F imaju vrednosti od 10-15. Obzirom da `A` ima vrednost 10, heksadecimalni broj `4A2` je zapravo:

```
4A2
= 4 * 16^2 + 10 * 16^1 + 2 * 16^0
= 1024 + 160 + 2
```

Dakle 4A2 heksadecimalno ima vrednost 1186.

## Konverzija

Konverzija iz dekadnog u heksadecimalni oblik (i obrnuto) vrši se analogno kao kod [binarnih brojeva](/binarni-brojevi). Međutim, konverzija iz binarnog u heksadecimalni oblik (i obrnuto) je mnogo jednostavnija.

### Prevođenje heksadecimalnog broja u binarni

Recimo da želimo da heksadecimalni broj 4A2 (iz gornjeg primera) prevedemo u binarni oblik. Sve što treba da uradimo je da svaku heksadecimalnu cifu prevedemo u binarni oblik.

Dakle, `4A2` hesadecimalno je `100101010` binarno, jer:

- 4 je 100
- A je 1010
- 2 je 10

pa kad ova tri binarna niza spojimo dobijamo 100101010.

### Prevođenje binarnog broja u heksadecimalni

Obrnuto, ako želimo da neki binarni broj prevedemo u hesadecimalni oblik, sve što treba da uradimo je da binarni broj razdelimo u grupe od po četiri cifre (počev s desna) i svaku grupu prevedemo u heksadecimalnu cifru.

Na primer binarni broj 1000101010101110100100111 koji na prvi pogled izgleda zastrašujuće dugačak, lako se prevodi u heksadecimalni zapis. Najpre broj razdelimo u grupe od po četiri cifre:

```
1 0001 0101 0101 1101 0010 0111
```

Sada svaku grupu prevedimo u heksadecimalnu cifru:

```
1 prevodimo u 1
0001 takođe u 1
0101 prevodimo u 5
0101 takođe u 5
1101 prevodimo u D (13)
0010 prevodimo u 2
0111 prevodimo u 7
```

Pa je tako 1000101010101110100100111 binarno jednako 1155D27 heksadecimalno. Lako, zar ne?

### Izvori

- dr Milan Popović, *Osnove programiranja (skripta)*
- dr Violeta Tomašević, *Osnovi računarske tehnike*, Beograd, 2009.
