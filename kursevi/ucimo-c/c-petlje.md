---
title: Petlje u jeziku C
layout: lekcija-c
permalink: /c-petlje
image: /images/fore/bart.png
---

![]({{page.image}})

Ponekad ćete želeti da uradite nešto mnogo puta. Primer bi bio ispisivanje nekog znaka na početku svakog od 24 reda na ekranu. Da biste ovo uradili, morali biste da otkucate 24 `printf` naredbe. Možemo da koristimo petlju ovo odradi za nas, a onda moramo samo jednom da otkucamo `printf` naredbu.

Postoje tri osnovne vrste petlji, a to su:
* `for` petlja,
* `while` petlja i
* `do while` petlja.

## For petlja

`For` petlja Vam omogućava da u svakom prolazu baratate brojem koji se povećava za neku vrednost pri svakom prolazu. Ova petlja je najbolja za gornji problem, jer nam je poznato koliko puta treba da prođemo kroz petlju. For petlja se koristi u sledećem obliku:

```
for (pocetni broj; uslov petlje; povecavanje promenljive) {
  naredba;  
}
```

Kada koristite petlje, takođe morate staviti naredbe među vitičaste zagrade, ako ih ima više od jedne. Evo rešenja problema sa 24 printf naredbe:

{:.ulaz}
```c
#include <stdio.h>
int main()
{
  int i;
  for (i = 0; i < 11; i++) {
    printf("I shall never use a computer again\n");
  }
  return 0;
}
```

{:.uokvireno.ideja}
Za izvršenje programa pritisni dugme izvrši.

For petlja se sastoji od tri dela unutar svojih zagrada, koji su odvojeni znakom tačka-zarez.

Prvi deo inicijalizuje promenljivu petlje. Ta promenljiva kontroliše i broji koliko puta smo prošli kroz petlju. U primeru, promenljiva petlje se zove `i` i inicijalizovana je vrednošću 1.

Drugi deo petlje je uslov koji mora biti ispunjen da bi petlja nastavila da se vrti. U primeru, petlja će se vrteti, sve dok je i manje ili jednako 24, drugim rečima, vrteće se 24 puta.

Treći deo je povećavanje promenljive petlje. U primeru je upotrebljeno `i++`, što je isto kao da je pisalo `i=i+1`. Ovo se zove inkrementacija. Svaki put kada prođemo kroz petlju, promenljivoj i se dodaje 1. Takođe je moguće koristiti `i--` da bismo oduzeli 1 od promenljive, što se u tom slučaju naziva dekrementacija.

## While petlja

`While` petlja se razlikuje od `for` petlje po tome što se koristi kad ne znamo koliko puta želimo da se petlja vrti. Takođe morate uvek inicijalizovati promenljivu pre nego što uđete u petlju. Druga stvar koju morate da uradite, je da povećate promenljivu unutar petlje.

Evo primera while petlje koja se vrti onoliko puta koliko je korisnik uneo:

```c
#include <stdio.h>
int main()
{
  int i, puta;
  printf("Unesite broj: ");
  scanf("%d", &puta);
  i = 0;
  while (i < puta)
  {
    i++;
    printf("%d\n", i);
  }
  return 0;
}
```

Ovaj program daje izlaz:
```
1
2
3
4
5
```

## Do while petlja

`Do while` petlja je isto što i `while` petlja, sem što proverava uslov na kraju petlje. Zato ćemo koristiti program sa istim izlazom:

{:.ulaz}
```c
#include <stdio.h>
int main()
{
  int puta = 5;
  int i = 0;
  do
  {
    i++;
    printf("%d\n", i);
  }
  while (i < puta);
  return 0;
}
```

## Break i continue

Možete izaći iz petlje u bilo kom trenutku, koristeći ključnu reč `break`. Ovo je korisno kada želite da petlja prestane da se vrti, jer je ispunjen neki drugi uslov koji nije uslov izlaska iz petlje.

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

Možete koristiti i ključnu reč `continue`, da bi preskočili ostatak trenutnog prolaska kroz petlju i počeli novi prolaz. Sledeći primer nikada neće ispisati „Zdravo“ zbog ključne reči `continue`:

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
  return 0;
}
```

## Zadaci za vežbanje

1. Napišite program koji učitava 10 brojeva i računa njihov prosek.
2. Napišite program koji učitava 10 brojeva i računa njihov maksimum.
3. Napišite program koji učitava 10 brojeva i računa njihov minimum.
4. Napišite program koji ispisuje sve parne brojeve između dva uneta broja.
5. Napišite program koji učitava tri broja, koji predstavljaju količinu novca na štednom računu, kamatnu stopu i broj godina. Izračunajte godišnju kamatu i ukupan iznos štednje posle svake godine.
6. Napišite program koji broji samoglasnike u rečenici koja se unosi sa tastature. Čitajte tekst slovo po slovo dok ne dođete do tačke. Onda ispišite broj pojavljivanja svakog samoglasnika u tekstu, ukupan broj slova i procentualno pojavljivanje svakog od samoglasnika u tekstu.

Izvor: [profesorka.wordpress.com](https://profesorka.wordpress.com/)
