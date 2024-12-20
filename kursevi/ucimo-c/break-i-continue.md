---
title: Naredbe break i continue
layout: lekcija-c
permalink: /break-i-continue
---

**Nekad je poželjno imati mogućnost izlaska iz petlje, mimo glavnog uslova.** Naredba `break` osigurava "naprasni" izlaz, odnosno prekid vrtenja bilo koje petlje.

Naredba `continue` usko je povezana s break, ali se znatno ređe koristi. Njen je zadatak da otpočne sledeću iteraciju petlje u kojoj se program vrti. Ona se koristi samo u petljama, za razliku od `break` koji se koristi i kod `switch` skretnice.

## Zaustavljanje petlje (`break`)

Možete izaći iz petlje u bilo kom trenutku, koristeći ključnu reč `break`. Ovo je korisno kada želite da petlja prestane da se vrti, jer je ispunjen neki drugi uslov koji nije osnovni uslov izlaska iz petlje.

{:.ulaz}
```c
#include <stdio.h>
int main()
{
  int i;
  while (i < 10)
  {
    i++;
    printf("%d\n", i);
    if (i == 5) break;
  }
  return 0;
}
```

## Preskakanje kruga (`continue`)

Možete koristiti ključnu reč `continue`, da bi preskočili ostatak trenutnog prolaska kroz petlju i počeli novi prolaz. Sledeći primer nikada neće ispisati „Zdravo“ zbog ključne reči `continue`, ali će brojač biti uvećan u svakom krugu:

{:.ulaz}
```c
#include <stdio.h>
int main()
{
  int i;
  while (i < 10)
  {
    i++;
    continue;
    printf("Zdravo\n");
  }
  printf("Vrednost i je sada %d", i);
  return 0;
}
```


## Literatura

- Brian Kernighan i Dennis Ritchie, *Programski jezik C*
- [profesorka.wordpress.com](https://profesorka.wordpress.com/)
