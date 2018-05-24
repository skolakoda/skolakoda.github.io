---
title: C funkcije za čitanje i pisanje
layout: lekcija-c
permalink: /c-funkcije-za-citanje-i-pisanje
---

Funkcije `getchar`, `putchar`, `gets`, `puts`, `printf` i `scanf` imaju analogne verzije `getc`, `putc`, `fgets`, `fputs`, `fprintf` i `fscanf` koje rade s datotekama. Sve te funkcije kao prvi argument uzimaju pokazivač na spremnik (`FILE`) povezan s datotekom.

## Čitanje i pisanje znak po znak

Funkcije:

```c
int getc(FILE *fp)
int fgetc(FILE *fp)
```

vraćaju sljedeći znak iz datoteke na koju pokazuje `fp`. Razlika izmedu `getc` i `fgetc` je u tome da `getc` može biti implementirana kao makro naredba dok `fgetc` ne smije. U slučaju greške ili kraja datoteke vraća se `EOF`. To je razlog što je tip vraćene vrijednosti `int` umjesto `char`. Funkcija `getchar()`, koju smo ranije upoznali, implementira se kao `getc(stdin)`.

### Primjer: brojač znakova

Program u sljedećem primjeru broji znakove u datoteci, koja je navedena kao argument komandne linije:

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
        int ch,count=0;
        FILE *fpt;

        if(argc==1) { /* ime datoteke nedostaje */
                printf("\nUporaba: %s ime_datoteke\n",argv[0]);
                exit(-1);
        }
        else if((fpt=fopen(argv[1],"r"))==NULL) {
                printf("Ne mogu otvoriti datoteku %s\n",argv[1]);
                exit(-1);
        }
        while((ch=fgetc(fpt))!=EOF) count++;

        fclose(fpt);
        printf("\nBroj znakova = %d\n",count);
        return 0;
}
```

Znak pročitan sa `getc` ili `fgetc` može biti vraćen u datoteku pomoću funkcije:

```c
int ungetc(int c, FILE *fp);
```

Prvi argument je znak koji vraćamo. Znak može biti upisan u datoteku pomoću funkcija:

```c
int putc(int c, FILE *fp)
int fputc(int c, FILE *fp)
```

Ponovo, razlika izmedu `putc` i `fputc` je u tome što `putc` može biti implementirana kao makro naredba dok `fputc` ne smije. Funkcije vraćaju ispisani znak ili `EOF` ako je došlo do greške prilikom ispisa. Funkcija `putchar(c)`u radu sa fajlovima je definirana kao `putc(c, stdout)`.

### Primjer: program `cat`

Funkcija koja kopira jednu datoteku u drugu može biti napisana na sljedeći način:

```c
void cpy(FILE *fpulaz, FILE *fpizlaz) {
        int c;
        while((c=getc(fpulaz))!=EOF)
                putc(c,fpizlaz);
}
```

Pomoću nje možemo napisati program `cat`, koji uzima imena datoteka i ispisuje datoteke na standardnom izlazu, redom kojim su imena navedena. Ukoliko se ne navede ni jedno ime, onda se standardni ulaz kopira na standardni izlaz.

```c
#include <stdio.h>

void cpy(FILE *, FILE *);

int main(int argc, char *argv[]) {
        FILE *fpt;
        if(argc==1) /* ime datoteke nedostaje */
                cpy(stdin,stdout);
        else
                while(--argc>0)
                        if((fpt=fopen(*++argv,"r"))==NULL) {
                                printf("cat: ne mogu otvoriti datoteku %s\n",*argv);
                                exit(1);
                        }
                        else {
                                cpy(fpt,stdout);
                                fclose(fpt);
                        }
        return 0;
}
```

Uočimo da smo u programu posve izbjegli upotrebu brojača time što inkrementiramo i dekrementiramo `argc` i `argv`.

## Čitanje i pisanje liniju po liniju

Funkcija koja učitava podatke iz datoteke liniju po liniju je:

```c
char *fgets(char *buf, int n, FILE *fp);
```

Prvi argument je pokazivač na dio memorije (eng. *buffer*) u koji će ulazna linija biti spremljena, a drugi veličina memorije na koju prvi argument pokazuje. Treći argument je pokazivač na datoteku iz koje se učitava. Funkcija će pročitati liniju uključujući i znak za prijelaz u novi red i na kraj će dodati nul znak `\0`. Pri tome će biti učitano najviše n-1 znakova, uključivši `\n`. Ukoliko je ulazna linija dulja od toga, ostatak će biti pročitan pri sljedećem pozivu funkcije `fgets`. Funkcija vraća `buf` ako je sve u redu ili `NULL` ako se došlo do kraja datoteke ili se pojavila greška.

Funkcija:

```c
char *gets(char *buf);
```

čita uvjek sa standardnog ulaza. Ona ne uzima veličinu *buffera* kao argument i stoga se može desiti da je ulazna linija veća od memorije koja je za nju rezervirana. Stoga je bolje umjesto `gets(buf)` koristiti `fgetf(buf,n,stdin)`. Pri tome treba uzeti u obzir razliku da `fgets` učitava i znak `\n`, dok `gets` znak za prijelaz u novi red učitava, ali na njegovo mjesto stavlja `\0`.

Funkcija za ispis podataka u datoteku, liniju-po-liniju je:

```c
int fputs(const char *str, FILE *fp);
```

Funkcija vraća nenegativnu vrijednost ako je ispis uspio ili `EOF` u slučaju greške. `fputs` ispisuje znakovni niz na koji pokazuje `str`, u datoteku na koju pokazuje `fp`. Zadnji nul znak neće biti ispisan i znak za prijelaz u novi red neće biti dodan.

Funkcija:

```c
int puts(const char *str);
```

ispisuje znakovni niz na koji pokazuje `str` na standardni izlaz. Na kraj niza ona dodaje znak za prijelaz u novi red, što ju razlikuje od `fputs(str,stdout)`.

## Prepoznavanje greške

Budući da ulazne funkcije vraćaju `EOF` i u slučaju kada je došlo do greške i u slučaju kada se naiđe na kraj datoteke postoje funkcije:

```c
int ferror(FILE *fp);
int feof(FILE *fp);
```

koje služe za razlikovanje izmedu pojedinih situacija. `ferror` vraća broj različit od nule (istina) ako je došlo do greške, a nulu (laž) ako nije. Funkcija `feof` vraća broj različit od nule (istina) ako smo došli do kraja datoteke, a nulu (laž) u suprotnom.

### Primjer: detekcija greške

Sljedeći program kopira standardni ulaz na standardni izlaz i detektira ulaznu grešku pomoću funkcije `ferror`:

```c
#include <stdio.h>
#define MAXLINE 128

int main(void) {
        char buf[MAXLINE];
        while(fgets(buf,MAXLINE,stdin) != NULL)
                if(fputs(buf,stdout)==EOF) {
                        fprintf(stderr,"\nIzlazna greska.\n");
                        exit(1);
                }
        if(ferror(stdin)) {
                fprintf(stderr,"\nUlazna greska.\n");
                exit(2);
        }
        return 0;
}
```


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
