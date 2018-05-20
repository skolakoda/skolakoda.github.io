---
title: Konverzije tipova
layout: lekcija-c
permalink: /c-konverzije-tipova
---

**Kada jedan operator ima operande različitih tipova, obavlja se pretvorba u zajednički tip pomoću nekoliko pravila.**

Općenito, jedine pretvorbe koje se obavljaju automatski su one koje pretvaraju operande iz "manjeg skupa" u operande iz "većeg skupa" bez gubitka informacije, kakva je primjerice pretvorba cijelih u realne brojeve. Pretvorba realnih u cijele brojeve, pri čemu se gubi dio informacije, izaziva upozorenje prilikom prevođenja, ali takvi izrazi nisu nedopušteni.

## Pretvaranje znaka u broj

Kako je `char` mala cjelobrojna vrijednost, dade se koristiti u aritmetičkim izrazima. Ta osobina rezultira velikom fleksibilnošću pri znakovnim transformacijama. Primjer toga je i jednostavna uporaba funkcije `atoi`, koja pretvara znakovni niz sastavljen od brojeva u njegov brojčani ekvivalent.

```c
/* atoi: pretvorba s u cijeli broj */
int atoi(char s[]){
        int i, n;

        n=0;
        for(i=0; s[i]>='0'&&s[i]<='9'; ++i)
                n=10*n+(s[i]-'0');
        return n;
}
```

Kao što smo vidjeli, izraz:

```c
s[i]-'0'
```

daje brojčanu vrijednost znaka pohranjenog u `s[i]`, stoga što vrijednosti '0', '1', itd. tvore kontinuirano rastući niz.

Slijedeći primjer pretvorbe tipa `char` u `int` je funkcija `lower`, koja transformira pojedini znak u mala slova u ASCII setu znakova. Ako znak nije veliko slovo vraća se nepromijenjen.

```c
/* lower: pretvorba c u mala slova; ASCII skup znakova */
int lower(int c){
        if(c>='A'&&c<='Z')
                return c+'a'-'A';
        else
                return c;
}
```

Ovo vrijedi za ASCII skup znakova, jer odgovarajuća velika i mala slova imaju jednak razmak od početka do kraja abecede, jer između nema nikakvih drugih znakova osim slova.

Standardno zaglavlje `<ctype.h>` definira cijeli niz funkcija koje osiguravaju provjeru i pretvorbu za različite skupove znakova. Primjerice, funkcija `tolower(c)` vraća brojčanu vrijednost malog slova varijable `c` ako ona reprezentira veliko slovo, odnosno, ona predstavlja zamjenu za funkciju `lower` koju smo napisali. Slično tome, test:

```c
c>='0'&&c<='9'
```

dade se zamijeniti sa `isdigit(c)`.

Postoji jedan trik kod pretvorbe znakova u cijele brojeve. Jezik ne određuje da li su varijable tipa `char` veličine iz skupa pozitivnih ili negativnih brojeva. Da li se prilikom pretvorbe tipa `char` u tip `int` mogu dobiti negativni cijeli brojevi? Odgovor nije jedinstven jer varira od računala do računala. Na nekim računalima `char` čiji je krajnji lijevi bit 1 bit će pretvoren u negativan cijeli broj, a na drugima `char` se prevodi u `int` dodavanjem nule na krajnji lijevi bit, pa je uvijek pozitivan.

Definicija C-a jamči da bilo koji znak za ispis, u standardnom skupu znakova, nikad neće biti negativan, pa će ti znakovi uvijek predstavljati pozitivne veličine u izrazima. Ipak, neki nizovi bitova pohranjena u znakovnim varijablama može se interpretirati kao negativna vrijednost na nekim računalima, a pozitivna na drugim. Zbog prenosivosti (portabilnosti) treba obvezno uključiti `signed` ili `unsigned` kvalifikatore ako se neznakovni podatak pohranjuje u `char` varijablu.

## Logički tipovi

Relacijski izrazi kao `i>j` i logički izrazi povezani s `&&` ili `||` su definirani tako da imaju vrijednost 1 ako su točni, a 0 ako nisu. U tom smislu, dodjela:

```c
d=c>='0'&&c<='9'
```

postavlja `d` na vrijednost 1 ako je c broj, a na 0 ako nije. Bilo kako bilo, funkcije poput `isdigit` mogu vratiti bilo koju vrijednost različitu od nule, kao signal da je ulazni znak broj. U provjeri kod `if`, `while` i `for` naredbi točan izraz isto ima vrijednost koja nije nula.

## Pravila pretvorbe

Ako operator kao što je `+` ili `*` koji traži dva operanda (binarni operator) dobije operande različitih tipova, niži tip se promovira u viši prije početka same operacije. Rezultat je viši tip. Da nema `unsigned` operanada, slijedeći skup pravila bi bio dovoljan:

- ako je jedan od dva operanda tipa `long double`, drugi se pretvara u `long double`
- ako je jedan operand tipa `double`, pretvara se i drugi u `double`.
- ako je jedan operand tipa `float`, pretvara se i drugi u `float`.
- u drugim slučajevima obavlja se pretvorba `char` i `short` u `int`.
- naposlijetku, ako je jedan od operanda tipa `long` i drugi se pretvara u `long`.

Primijetimo da `float` u izrazima ne pretvara automatski u `double` što je ozbiljna promjena u odnosu na originalnu definiciju. Generalno gledano, matematičke funkcije kakve su u `<math.h>` rabe dvostruku točnost. Glavni razlog za upotrebu `float` jest očuvanje memorijskog prostora u radu s velikim poljima ili, što je rjeđi slučaj, ušteda vremena na računalima na kojima je rad s dvostrukom točnošću prilično spor.

Pravila pretvorbe postaju teža kad se u igru uključe operatori tipa `unsigned`. Problem je usporedba vrijednosti koje mogu biti pozitivne i negativne, zavisno o računalu. Npr. pretpostavimo da `int` uzima 16 bitova, a `long` 32 bita. Tada je `-1L` isto što i `1U`, jer je `1U` koji je `int` promoviran u `signed long`. Međutim, i `-1L` je isto što i `1UL`, jer se `-1L` isto tako promovira u `unsigned long` i pojavljuje kao veliki pozitivni cio broj.

Pretvorbe se ostvaruju preko naredbi dodjele; vrijednost s desne strane se pretvara u tip s lijeve strane, što je zapravo tip rezultata. Znak se pretvara u cijeli broj, to smo već riješili. Duži cijeli brojevi pretvaraju se u kraće ili u vrijednosti tipa `char`. Tako u izrazima:

```c
int i;
char c;
i=c;
c=i;
```

vrijednost `c` ostaje nepromijenjena. To vrijedi bez obzira na to je li uračunat krajnji lijevi bit ili ne. Promjena slijeda dodjela dovodi do mogućeg gubitka informacija.

Ako je `x` tipa `float` i `i` tipa `int`, tada i za `x=i` i za `i=x` dolazi do pretvorbe pri čemu pretvorba `float` u `int` gubi dio informacije (onaj iza decimalne točke). Kad se double pretvara u `float`, pretvorba ovisi o primjeni bez obzira je li vrijednost zaokružena ili dolazi do gubitka decimalnog dijela.

Kada je argument poziva neke funkcije izraz, pretvorba se događa kad argument pripadne funkciji. Ako funkcije nema tip, `char` i `short` postaju `int`, a `float` postaje `double`. To je razlog zašto prijavljujemo argumente funkcija kao int i `double` čak i kad se funkcija poziva `char` i `float` tipovima.

## *cast* operator

U krajnjem slučaju, eksplicitna pretvorba tipa se može ostvariti u bilo kom izrazu, unarnim operatorom koji se zove *cast*. U konstrukciji:

```
(tip) izraz
```

izraz se pretvara u navedeni tip pravilima pretvorbe o kojima je već bilo riječi. Pravo značenje *cast* operatora vidi se kad se izraz dodjeli varijabli određenog tipa, pa se ona rabi mjesto cijele konstrukcije. Npr., funkcija iz biblioteke `sqrt` očekuje `double` kao argument, pa ukoliko argument nije tog tipa rezultat nije moguće predvidjeti (`sqrt` je deklarirana u `<math.h>`). Ukoliko je `n` cijeli broj, možemo koristiti:

```c
sqrt((double) n)
```

za pretvorbu vrijednosti `n` u `double` prije negoli se nad njim obavi `sqrt`. Pripomenimo da *cast* prevodi vrijednost n u navedeni tip pri čemu se `n` ne mijenja. Cast operator ima visoki prioritet kao i drugi unarni operatori, što ćemo pokazati tablicom na kraju ovog poglavlja.

Ako su argumenti deklarirani funkcijskim prototipom kako se i očekuje, deklariranje pokreće automatsku pretvorbu svih argumenata prilikom poziva funkcije. Tako, dani model funkcije za `sqrt`:

```c
double sqrt(double);
```

pri pozivu

```c
root2=sqrt(2);
```

pretvara cijeli broj 2 u vrijednost 2.0 tipa double bez upotrebe operatora *cast*. U standardnoj biblioteci postoji mali generator slučajnih brojeva i funkcija za pokretanje, a slijedeći primjer ilustrira operator *cast*:

```c
unsigned long int next=1;
/* rand: vraća slučajni cijeli broj iz intervala [0,32767] */
int rand(void){
        next=next*1103515245+12345;
        return (unsigned int) (next/65536)%32768;
}
/* srand: postavljanje parametra za rand funkciju */
void srand(unsigned int pocetak){
        next=pocetak;
}
```

### Vježba 2-3.

Napisati funkciju `htoi(s)`, koja pretvara niz heksadecimalnih brojeva (uključujući opcijske 0x ili 0X) u njenu ekvivalentnu cjelobrojnu vrijednost. Dopuštene znamenke su [0-9], [a-f] ili [A-F].


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
