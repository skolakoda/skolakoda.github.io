---
title: Strukture u jeziku C
layout: lekcija-c
permalink: /c-strukture
---

**Struktura je skup jedne ili više varijabli, koje mogu biti različitih tipova, svrstanih zajedno radi lakše manipulacije**. Strukture pomažu pri organizaciji kompleksnih podataka, posebno u velikim programima, jer one omogućuju obradu grupe međusobno povezanih varijabli kao jedne cjeline (ovakav oblik podataka se u Pascalu naziva RECORD ili zapis).

Tradicionalan primjer strukture je stvaranje platnog spiska: zaposlenik je opisan skupom atributa tipa imena, adrese, broja socijalnog osiguranja, plaće i sl. Neki od ovih atributa mogu se, također, predstaviti preko struktura ako se sastoje od više komponenti. 

## Deklaracija i inicijalizacija

Kreirajmo nekoliko struktura koje su pogodne za grafički prikaz. Osnovni objekt je točka, koja ima `x` i `y` koordinatu, cijele brojeve. Te dvije komponente dadu se smjestiti u strukturu koja je ovako deklarirana

```c
struct point
{
        int x;
        int y;
};
```

Ključna riječ `struct` upoznaje nas s deklaracijom strukture, koja predstavlja listu deklaracija u vitičastoj zagradi. Opciono ime koje je ime strukture prati ključnu riječ (u našem primjeru to je `point`). Ono imenuje ovu strukturu, te se kasnije dade upotrebiti kao skraćenica za dio deklaracije u vitičastim zagradama. Varijable deklarirane u strukturi nazivamo članovima. Član strukture i obična varijabla (koja nema veze sa strukturom) mogu nositi isto ime bez problema, jer se uvijek mogu razlikovati po kontekstu. Štoviše, ista imena članova mogu se pojaviti u različitim strukturama.

Deklaracija `struct` definira tip. Iza desne vitičaste zagrade kojom se završava lista članova može doći lista varijabli kao, uostalom, iza svakog drugog tipa. To znači,

```c
struct {
        ...
} x, y, z;
```

jest sintaksno identično s

```c
int x, y, z;
```

jer oba izraza deklariraju `x`, `y`, `z` kao varijable zadanog tipa, te stvaraju za njih mjesto. Deklaracija strukture koja nije popraćena listom varijabli ne rezervira mjesto u memoriji nego samo opisuje strukturu. Međutim, ako je deklaracija obavljena, ona se može kasnije uporabiti u definicijama. Primjerice, zadana deklaracija strukture point u gornjem slučaju

```c
struct point pt;
```

definira varijablu `pt` koja jest struktura tipa `point`. Struktura se dade inicijalizirati tako je popraćena listom inicijalizatora u kojoj je svaki od njih konstantan izraz članova strukture

```c
struct point maxpt = {320, 200};
```

Automatska struktura inicijalizira se i dodjelom ili pozivom funkcije koja vraća strukturu pravog tipa. 

## Pristup članovima strukture

Članu određene strukture pristupa se slijedećim izrazom

```
ime_strukture.član
```

Operatorom `.` povezujemo ime strukture i ime člana. Da bi se ispisale koordinate točke `pt`, npr.,

```c
printf("%d, %d", pt.x, pt.y);
```

ili da bi se izračunala udaljenost od ishodišta do točke `pt`,

```c
double dist, sqrt(double);
dist = sqrt((double)pt.x * pt.x + (double)pt.y * pt.y);
```

## Ugniježdene strukture

Strukture možemo ugnijezditi. Pravokutnik (`rect`) možemo predstaviti parom točaka koje označuju dijagonalno suprotne kutove.

```c
struct rect
{
        struct point pt1;
        struct point pt2;
};
```

Struktura `rect` ima dvije vlastite strukture `point`. Ako deklariramo strukturu `screen` kao

```c
struct rect screen;
```

tada se izraz

```c
struct.pt1.x
```

odnosi na `x` koordinatu, tj., na član `pt1` strukture `screen`.


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*