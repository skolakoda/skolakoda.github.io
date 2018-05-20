---
title: Operatori uvećavanja i umanjivanja (inkrement i dekrement)
layout: lekcija-c
permalink: /c-inkrement-i-dekrement-operator
---

C ima dva neuobičajena operatora za uvećavanje i smanjivanje (za jedan) varijabli. Operator inkrementiranja ++ dodaje 1 svom operandu, dok operator dekrementiranja oduzima 1. Često ćemo koristiti ++ za uvećavanje varijabli kao u

```c
if(c=='\n')
    ++nl;
```

Neobičnost ovih operatora jest da se mogu koristiti kao prefiks operatori (++n) ili kao sufiks (n++). Učinak je u oba slučaja jednak - varijabla se uveća za jedan. Međutim, izraz ++n uvećava vrijednost n prije negoli njegova vrijednost bude upotrijebljena (pretpostavimo da je ++n dio neke relacije ili jednakosti), a n++ nakon korištenja. To zapravo znači da ta dva izraza nikako ne možemo smatrati ekvivalentnima osim ako nisu izdvojene programske linije. Neka je n 5, tada

```c
x=n++;
```

postavlja x na 5, dok

```c
x=++n;
```

postavlja x na 6. U oba slučaja, n postaje 6. Operatori uvećavanja i umanjivanja pridjeljuju se samo varijablama; izraz kakav je (i+j)++ jest nekorektan. U slučaju kad se određena vrijednost ne koristi već je bitno samo uvećanje kao

```c
if(c=='\n')
    nl++;
```

prefiks i sufiks oblik izraza postaju ekvivalentni. Ima situacija, međutim, kad se jedan ili drugi ciljano zovu. Primjerom kazano, načinimo prispodobu funkcije squeeze(s, c) koja uklanja znak c kad god se pojavi u nizu s.

```c
/* squeeze: brisanje svih c iz s */
void squeeze(chars[], int c){
    int i,j;

    for(i=j=0;s[i]!='\0';i++)
        if(s[i]!=c)
            s[j++]=s[i];
    s[j]='\0';
}
```

Za svaki znak različit od c, operator uvećava j da bi prihvatio slijedeći znak. Ovo je potpuno
ekvivalentno s

```c
if(s[i]!=c){
    s[j]=s[i];
    j++;
}
```

Slijedeći primjer je slična konstrukcija iz getline funkcije o kojoj je već bilo riječi, gdje dio programa

```c
if(c=='\n'){
    s[i]=c;
    ++i;
}
```

može biti napisan i kao

```c
if(c=='\n')
    s[i++]=c;
```

Kao treći primjer, prispodobimo standardnu funkciju strcat(s, t), koja spaja kraj znakovnog niza s s početkom niza t. Funkcija strcat pretpostavlja da ima dovoljno mjesta u s da smjesti oba niza. Kako smo već napisali, strcat ne vraća nikakvu vrijednost osim pokazivača (pointera) na rezultirajući znakovni niz.

```c
/* strcat: povezivanje znakovnih nizova */
void strcat(char s[], char t[]){
    int i, j;

    i=j=0;
    while(s[i]!='\0') /* Gdje je kraj niza s ? */
        i++;
    while((s[i++]=t[j++])!='\0') /* prebaci t */
        ;
}
```

Kada se znakovi prebacuju iz t u s, sufiks ++ pridružuje se i varijabli i i varijabli j kako bi smo bili sigurni da su u poziciji za naredni prolaz kroz petlju.

### Vježba 2-4. 

Napisati alternativnu inačicu funkcije squeeze(s1, s2) koja briše svaki znak u s1 koji postoji u s2.

### Vježba 2-5. 

Napisati funkciju any(s1, s2) koja vraća prvo mjesto u nizu s1 gdje se nalazi bilo koji znak iz niza s2 ili -1 ako niz s1 nema nijednog znaka iz niza s2 (funkcija strcpbrk iz standardne biblioteke radi isto, osim što vraća pokazivač na mjesto).


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
