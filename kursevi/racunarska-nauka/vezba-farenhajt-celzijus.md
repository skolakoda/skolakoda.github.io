---
title: "Primer: Farenhajt-Celzijus program"
layout: lekcija-racunarstvo
permalink: /primer-farenhajt-celzijus
---

Slijedeći program koristi formulu `C=(5/9)(F-32)` da ispiše tablicu temperatura u Fahrenheitovim stupnjevima i njihove ekvivalente u Celsiusovim:

Program se sastoji od definicije funkcije pod imenom `main`. Program uvodi dosta novih ideja, uključujući komentare, deklaracije, varijable, aritmetičke izraze, petlje i formatirani izlaz.

{:.ulaz}
```c
#include <stdio.h>

/* Ispiši Fahrenheit-Celsius tablicu za fahr=0, 20, 40, ..., 300 */
main()
{
    int fahr, celsius;
    int lower, upper, step;
    lower = 0;    /* donja granica tablice tempreratura */
    upper = 300;  /* gornja granica */
    step = 20;
    fahr = lower;
    while (fahr <= upper) {
        celsius = 5 * (fahr - 32) / 9;
        printf("%d\t%d\n", fahr, celsius);
        fahr = fahr + step;
    }
}
```

## Tumačenje programa

Linija

```c
/* Ispiši Fahrenheit-Celsius tablicu za fahr=0, 20, 40, ..., 300 */
```

predstavlja komentar, koji u prikazanom primjeru pojašnjava što program točno radi. Bilo koje znakove između /* i */ prevoditelj ne prepoznaje; oni se slobodno mogu upotrebljavati kako bi se program lakše razumijevao.

### Varijable

U C-u sve varijable moraju biti prijavljene prije upotrebe, najčešće na početku funkcije, prije bilo koje izvršne naredbe. Deklaracija prijavljuje osobine varijabli; ona se sastoji iz imena tipa i liste varijabli kao npr.:

```c
int fahr, celsius;
int lower, upper, step;
```

Tip `int` znači da su navedene varijable cijeli brojevi, za razliku od funkcije `float`, koja označava realne brojeve, tj. brojeve koji mogu imati decimalni dio. Opseg obaju tipova, i int i float, zavisi o mogućnostima računala na kojemu radite: 16-bitni `int` brojevi imaju opseg [-32768 - 32767], a jednostavni su kao i 32-bitni. Tipična dužina `float` broja je 32 bita, sa posljednjih šest značajnih znamenki i najčešćom vrijednošću između [10-38 - 10+38].

Izračunavanje programa konverzije temperature počinje s naredbama dodjele

```c
lower=0;
upper=300;
step=20;
fahr=lower;
```

koji predstavljaju varijable na početne vrijednosti. Pojedinačne naredbe se završavaju točkom-zarezom.

### Petlja

Svaka linija u tablici izračunava se na isti način, pa zato koristimo petlju koja se ponavlja jednom po izlaznoj liniji; to je svrha while petlje.

```
while(fahr<=upper){
  ...
}
```

Petlja while radi na slijedeći način: Uvjet u zagradi se provjeri. Ako je ispunjen (`fahr` je manji ili jednak `upper`), tijelo petlje (tri naredbe unutar vitičastih zagrada) se izvršavaju. Zatim se uvjet nanovo testira, i ako je ispunjen, ponovno se izvršavaju. Kada uvjet ne bude istinit (`fahr` dosegne `upper`), petlja se završava, a izvršenje programa nastavlja prvom naredbom iza petlje. Kako u prikazanom programu nema više naredbi, on se završava. Tijelo while petlje može biti jedna ili više naredbi u zagradama (vitičastim), kao u programu za pretvaranje temperatura ili jedna naredba bez zagrada, kao

```c
while(i<j)
  i=2*i;
```

U oba slučaja, naredbe kontrolirane pomoću while uvučene su tabulatorom (ma koliko razmaka on iznosio) tako da su lako uočljive. Ovakvo lociranje ističe logičku strukturu programa. Iako C prevoditelji ne vode računa o tome kako program izgleda, pravilno definiranje i dimenzioniranje bitno je radi čitljivosti programa.

Najveći dio posla obavi se u tijelu petlje. Celsiusova temperatura se izračunava i pridjeljuje varijabli celsius naredbom:

```c
celsius=5*(fahr-32)/9;
```

Razlog množenja s 5 i dijeljenja s 9 umjesto samo množenja s 5/9 je da u se C-u, kao i u mnogim jezicima, kao rezultat dijeljenja dva cijela broja dobiva cijeli broj i ostatak koji se odbacuje. Kako su 5 i 9 cijeli brojevi, 5/9 bio bi jednak nuli, te bi sve Celsiusove temperature bile nula.

Ovaj princip također pokazuje malo bolje kako printf radi.

### Štampanje

Funkcija printf je izlazna formatirajuća funkcija opće namjene. Njen prvi argument je niz znakova za ispis, koji svakim `%` pokazuje gdje su neki od slijedećih argumenata zamijenjeni i u kojoj će formi biti ispisana. Npr. `%d` određuje cjelobrojni argument, tako da naredba

```c
printf("%d\t%d\n", fahr, celsius);
```

ispisuje vrijednosti dvaju cijelih brojeva fahr i celsius, sa tabulatorom (\t) između njih.

Svaka `%` konstrukcija u prvom argumentu printf-a je u skladu s argumentima iza navodnika (drugim, trećim, ...); oni moraju biti složeni točno po tipu i broju, inače ispis neće biti korektan.

Uzgred, printf nije dio C-a; ne postoji ulaz i izlaz definiran u samom C-u. Funkcija printf je iz standardne biblioteke funkcija koje su dostupne C programima. Rad printf funkcije je definiran prema ANSI standardu, pa su njene osobine iste kod svih prevoditelja koji mu odgovaraju.

## Poboljšana verzija

Postoji nekoliko problema u vezi s programom za pretvaranje temperature. Najjednostavniji je vezan uz izgled izlaznog dokumenta jer brojevi nisu udesno poravnati. To je lako riješiti; ako povećamo svaki `%d` u printf naredbi po širini, ispisani brojevi će biti poravnati s desne strane u svojim poljima. Npr. mogli smo kazati

```c
printf("%3d %6d\n", fahr, celsius);
```

da bi se ispisao prvi broj svake linije u polju širokom tri znamenke, te drugi u polju širokom šest znamenki.

Ozbiljniji problem nalazi se u činjenici da koristimo aritmetiku cijelih brojeva, pa Celsiusove temperature nisu baš egzaktne; npr., 0<sup>o</sup>F jest zapravo -17.8<sup>o</sup>C, a ne -17. U cilju rješavanja ovakovih problema, potrebno je upotrebljavati aritmetiku realnih brojeva (brojevi s pokretnom decimalnom točkom). To zahtjeva određene izmjene u programu:

{:.ulaz}
```c
#include <stdio.h>
/* Ispiši Fahrenheit-Celsius tablicu za fahr=0, 20, 40, ..., 300 */
main()
{
    float fahr, celsius;
    int lower, upper, step;
    lower = 0;
    /* donja granica tablice tempreratura */
    upper = 300; /* gornja granica */
    step = 20;
    fahr = lower;
    while (fahr <= upper) {
        celsius = (5.0 / 9.0) * (fahr - 32);
        printf("%3.0f %6.1f\n", fahr, celsius);
        fahr = fahr + step;
    }
}
```

Ova verzija je jako slična prethodnoj, osim što su varijable `fahr` i `celsius` tipa `float`, a izraz za konverziju napisan prirodnije. Nismo bili u prilici koristiti 5/9 u ranijoj verziji, jer bi dijeljenje cijelih brojeva dalo vrijednost nula. Decimalna točka u konstanti kaže da je to realan broj, pa 5.0/9.0 ne daje nulu jer je to odnos dviju realnih veličina.

### Konverzija brojeva

Ako aritmetički operator ima cjelobrojne operande, obavlja se operacija sa cijelim brojevima. Ako aritmetički operator ima jedan realan broj kao operand, a cijeli broj kao drugi, cijeli će se broj pretvoriti u realni da bi se operacija izvela kako treba. Ako napišemo fahr-32, 32 će biti pretvoreno u realan broj. Ipak, blaga je preporuka da se realni brojevi pišu s eksplicitnim decimalnim točkama čak i kad imaju vrijednosti kao cjelobrojni, jer tako naglašavamo njihovu realnu prirodu.

Primijetimo da naredba

```c
fahr=lower;
```

i uvjet

```c
while(fahr<=upper)
```

djeluje na isti način - `int` se pretvara u `float` prije negoli se obavi operacija.

### Parametri štampanja

Parametar `printf` pretvorbe `%3.0f` nam kaže da realni broj (u ovom slučaju `fahr`) treba biti ispisan sa zauzećem najviše tri znaka, bez decimalne točke i decimalnih znamenki. Parametar `%6.1` opisuje drugi broj (`celsius`) koji treba biti ispisan u najviše šest znakova, s jednom znamenkom iza decimalne točke.

Širina i točnost ne moraju biti navedene: `%6f` kaže da broj mora biti širok najviše šest znakova; `%.2f` određuje dva znaka iza decimalne točke, ali širina nije naglašena; `%f` jedino kazuje kako se radi o broju s pomičnom decimalnom točkom.

```
%d      ispiši kao decimalni cijeli broj
%6d     ispiši kao decimalni cijeli broj, širok najviše šest znakova
%f      ispiši kao realan broj
%6f     ispiši kao realan broj, širok najviše šest znakova
%.2f    ispiši kao realan broj, sa dva znaka iza decimalne točke
%6.2f   ispiši kao realan broj, širok najviše šest znakova, sa dva znaka iza decimalne točke
```

Između ostalog, printf prepoznaje `%0` kao oktalni broj, `%x` kao heksadecimalni, `%c` kao znak, `%s` kao niz znakova i `%%` kao %.

## Vežbe

Vježba 1-3. Izmijenite program pretvorbe temperature da ispisuje zaglavlje iznad tablice.

Vježba 1-4. Napišite odgovarajući program za ispis tablice pretvorbe Celsiusovih u Fahrenheitove stupnjeve.


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
