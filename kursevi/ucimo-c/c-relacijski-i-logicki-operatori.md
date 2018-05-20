---
title: Relacijski i logički operatori
layout: lekcija-c
permalink: /c-relacijski-i-logicki-operatori
---

**Relacijski operatori** su `>`, `>=`, `<`, `<=`. Svi imaju isti prioritet. Odmah ispod njih po prioritetu su operatori jednakosti `==` i `!=`. Relacijski operatori imaju niži prioritet od aritmetičkih operatora, pa izraz `i<lim-1` se tretira kao i i<(lim-1), što je prirodno.

### Logički operatori `&&` i `||`

Mnogo zanimljiviji su logički operatori `&&` i `||`. Izrazi povezani ovim operatorima računaju se slijeva udesno, računanje se prekida čim se ustanovi točnost ili netočnost rezultata. Mnogi C programi napisani su s jakim osloncem u ovim pravilima. Npr. evo petlje ulazne funkcije `getline`:

```c
for(i=0; i<lim-1&&(c=getchar())!='\n'&&c!=EOF; ++i)
    s[i]=c;
```

Prije čitanja novog znaka treba obavezno provjeriti ima li za njega mjesta u znakovnom nizu `s`, tako da se najprije obavi provjera `i<lim-1`. Ako je odgovor negativan, nema smisla dalje čitati znakove. Bilo bi jednako tako pogrešno ako bi se prije pozivanja funkcije `getchar`, obavila provjera `c!=EOF`, jer pozivanje i dodjela vrijednosti moraju izvršiti prije negoli se testira znak pohranjen u `c`.

Prioritet `&&` je viši od `||`, a oba su operatora nižeg ranga od relacijskih i operatora jednakosti, pa zato u slijedećem izrazu nije potrebno dodavati zagrade:

```c
i<lim-1&&(c=getchar())!='\n'&&c!=EOF
```

No, kako je prioritet `!=` viši od operatora dodjele, zagrade su obavezne u izrazu što slijedi:

```c
(c=getchar())!='\n'
```

da bi se osigurala dodjela varijabli `c`, a potom i usporedba sa '\n'.

Po definiciji, brojčana vrijednost relacijskog ili logičkog izraza je 1 ako je relacija točna, a 0 ako je netočna.

### Negacija

Operator unarne negacije `!` pretvara 1 u 0 i obratno. Najčešća je upotreba ovog operatora u izrazima poput:

```c
if(!valid)
```

umjesto

```c
if(valid==0)
```

Teško je kazati koja je forma bolja. Konstrukcije kao `!valid` lijepo izgledaju ("ako nije valid"), dok bi zahtjevnije konstrukcije bile i teže za čitanje.

### Vježba 2-2.

Napišite petlju ekvivalentnu gore napisanoj for petlji bez upotrebe `&&` ili `||`.


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
