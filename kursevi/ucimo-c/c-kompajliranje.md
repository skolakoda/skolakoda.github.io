---
title: Kompajliranje C programa
layout: lekcija-c
permalink: /c-kompajliranje
---

**Dok programiramo, mi ne pravimo izvršnu verziju programa, već samo izvorni fajl, koji je u C-u ima ekstenziju `.c`.** Da bi od izvornog fajla napravili izvršni (`exe` na Windowsu) potreban nam je kompajler ili prevodilac. 

I za Windows i za Linux platforme postoji dosta programa za kompaliranje.

## Code::Blocks editor

Verovatno je najprostije rešenje instalirati [Code::Blocks](http://www.codeblocks.org/) editor, razvojno okruženje za kompajliranje i pokretanje C fajlova. Code::Blocks je dostupan na svim glavnim operativnim sistemima (Windows, Lunux, Mac).

## Prevođenje iz komandne linije

`C` se već nalazi na svim Unix sistemima (Linux i OS X). Na Unix sistemima ima nekoliko prevodilaca za `C`, te kompajlirati možemo na razne načine.

### CC

C kompajleru prosleđujemo izvorni fajl i izlaz:
```
cc zdravo.c -o zdravo
```

Nakon toga, u direktorijumu se pojavljuje izvršni fajl `zdravo` koji pokrećemo iz konzole:
```
./zdravo
```

### GCC

GNU C prevodilac pokrećemo `gcc` komandom:
```
gcc zdravo.c
```

Ukoliko je bez argumenata, u direktorijumu se pojavljuje izvršni fajl `a.out` koji pokrećemo na sledeći način:
```
./a.out
```

Prevodiocu možete proslediti argument `-o` sa imenom izlaznog fajla:
```
gcc -o zdravo zdravo.c
```

### make

Komanda `make` od fajla `zdravo.c` automatski pravi izvršni fajl `zdravo`:
```
make zdravo
```

U pozadini, `make` zapravo radi:
```
cc zdravo.c -o zdravo
```
