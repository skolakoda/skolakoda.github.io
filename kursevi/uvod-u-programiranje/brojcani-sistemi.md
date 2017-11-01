---
title: Brojčani sistemi
layout: lekcija-uvod
permalink: /brojcani-sistemi
image: http://pad2.whstatic.com/images/thumb/e/ee/Convert-Binary-to-Octal-Number-Step-9.jpg/aid3607658-v4-728px-Convert-Binary-to-Octal-Number-Step-9.jpg
---

![]({{page.image}})

Razvoj sustava za zapisivanje brojeva možemo smatrati početkom matematike. Jedan od najranijih poznatih sustava razvili su Babilonci oko 2000 godine prije Krista.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Babylonian_numerals.svg/640px-Babylonian_numerals.svg.png)

## Zapisivanje brojeva

Današnji način zapisivanja brojeva potječe iz Indije i vjerojatno je nastao krajem 6. stoljeća. Ponekad se takvi brojevi nazivaju arapskim, jer su ih u srednjem vijeku Arapi donijeli u Europu. Taj je sustav zapisivanja brojeva omogućio razvoj algoritama. U drugom poznatom sustavu, rimskom aditivno-suptraktivnom sustavu, računanje je vrlo nespretno. Pokušajte direktno pomnožiti brojeve CXVII i XXIV!

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BiberachUlmerTor060408_P1040527.jpg/498px-BiberachUlmerTor060408_P1040527.jpg)

U indijsko-arapskom sustavu koristi se deset znamenaka 0, 1, 2, 3, 4, 5, 6, 7, 8 i 9. Značenje znamenaka ovisi o položaju broja, zato se takvi sustavi nazivaju pozicionim. Naprimjer, zapis 2562 znači:
```
2 * 10^3 + 5 * 10^2 + 6 * 10 + 2
```
(prva i zadnja znamenka 2 ne doprinose isto!)

Istaknuta uloga broja 10 posljedica je toga što ljudi imaju 10 prstiju. Na isti način možemo zapisivati brojeve koristeći se bilo kojim skupom od `b` različitih simbola, gdje je `b ≥ 2` prirodan broj koji nazivamo bazom.

Tijekom povijesti koristili su se i sustavi s bazom 20, a spomenuti babilonski sustav bio je pozicioni s bazom 60. Babilonci ipak nisu imali 60 različitih simbola, nego su znamenke zapisivali aditivno s pomoću dvaju simbola (vidi sliku).

## Brojevni sustavi u računarstvu

U računarstvu su posebno pogodni sustavi kojima je baza potencija od 2. Sustav s bazom `b = 2` naziva se binarnim sustavom, sustav s bazom `b = 3` ternarnim sustavom i tako dalje. Uobičajeni sustav s bazom `b = 10` zovemo dekadskim sustavom, a koriste se i oktalni sustav (`b = 8`) te heksadecimalni sustav (`b = 16`).

Naprimjer, binarni broj `101101` znači:
```
1 · 2^5 + 0 · 2^4 + 1 · 2^3 + 1 · 2^2 + 0 · 2 + 1
```

A oktalni broj `2763` predstavlja:

```
2 · 8^3 + 7 · 8^2 + 6 · 8 + 3
```

U sustavima s bazom manjom od 10 kao znamenke koristimo podskup uobičajenih dekadskih znamenaka.

## Heksadecimalni sistem

U heksadecimalnom sustavu trebamo 16 simbola, pa se uz dekadske znamenke koristimo slovima A, B, C, D, E i F koja redom predstavljaju brojeve od 10 do 15. Heksadecimalni broj (7A9FE) znači:
```
7 · 16^4 + 10 · 16^3 + 9 · 16^2 + 15 · 16 + 14
```

Općenito, u sustavu s bazom b skup simbola identificiramo s brojevima koje predstavljaju: `{0, 1, 2, ..., b − 1}`.

Izvor: Vedran Krčadinac, *Osnove algoritama (predavanja)*, Zagreb, 2016./2017.
