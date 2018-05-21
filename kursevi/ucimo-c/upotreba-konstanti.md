---
title: Upotreba konstanti umesto magičnih brojeva
layout: lekcija-c
permalink: /upotreba-konstanti
---

Konstantne vrednosti, veličina nizova, pozicije karaktera u niskama, faktori za konverzije i druge slične vrednosti koje se pojavljuju u programima često se zovu **magični brojevi** (jer obično nije jasno odakle dolaze, na osnovu čega su dobijeni). Kernigen i Pajk kažu da je, osim 0 i 1, svaki broj u programu kandidat da se može smatrati magičnim, te da treba da ima ime koje mu je pridruženo. Na taj način, ukoliko je potrebno promeniti vrednost magične konstante (na primer, maksimalna dužina imena ulice) – to je dovoljno uraditi na jednom mestu u kôdu. Na primer, u narednoj deklaraciji:

```c
char imeUlice[50];
```

pojavljuje se magična konstanta 50, te se u nastavku programa broj 50 verovatno pojavljuje u svakoj obradi imena ulica. Promena tog ograničenja zahtevala bi mnoge izmene koje ne bi mogle da se sprovedu automatski (jer se broj 50 možda pojavljuje i u nekom drugom kontekstu). Zato je bolja, na primer, sledeća varijanta:

```c
#define MAKS_IME_ULICE 50
char imeUlice[MAKS_IME_ULICE];
```

ili, još bolje, ako upotreba to dozvoljava (naime, konstantne promenljive ne mogu se koristiti kao dimenzije nizova; u tu svrhu mogu da posluže enumerisane konstante):

```c
const unsigned int MAKS_IME_ULICE = 50;
```

U većim programima, konstante od značaja za čitav program (ili veliki njegov deo) obično se čuvaju u zasebnoj datoteci zaglavlja (koju koriste sve druge datoteke kojima su ove konstante potrebne).

Konstante se u programima mogu koristiti i za kôdove karaktera. To je loše ne samo zbog narušene čitljivosti, već i zbog narušene prenosivosti – naime, nije na svim računarima podrazumevana ASCII karakterska tabela. Dakle, umesto, na primer:

```c
if (c >= 65 && c <= 90)
  ...
```

bolje je pisati

```c
if (c >= 'A' && c <= 'Z')
  ...
```

a još bolje koristiti funkcije iz standardne biblioteke, kad god je to moguće:

```c
if (isupper(c))
  ...
```


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
