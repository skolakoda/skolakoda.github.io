---
title: Aritmetički operatori u jeziku C
layout: lekcija-c
permalink: /aritmeticki-operatori
---

Binarni aritmetički operatori su `+`, `-`, `*`, `/`, i modulo operator `%`. Binarni operatori `+` i `-` imaju isti prioritet, koji je niži od prioriteta operatora `*`, `/` i `%`. Aritmetički su operatori asocijativni slijeva nadesno.

## Modulo operator `%`

Izraz:

```c
x % y
```

daje ostatak pri dijeljenju x sa y, a jednak je nuli ako je x djeljivo sa y. U primjeru, godina se smatra prestupnom ako je djeljiva s 4, ali ne sa 100, osim ako nisu djeljive s 400:

```c
if((godina % 4 == 0 && godina % 100 !=0 || godina % 400 == 0)
    printf("%d je prestupna godina\n", godina);
else
    printf("%d nije prestupna godina\n");
```

Operator `%` ne može biti pridružen tipovima `float` i `double`. Smjer zaokruživanja za operator `/` i predznak rezultata operacije `%` ovisni su o tipu računala za negativne operande kao i kod pojave prekoračenja i potkoračenja (*overflow* i *underflow*).


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
