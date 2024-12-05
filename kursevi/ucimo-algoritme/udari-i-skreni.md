---
title: Udari i skreni
layout: lekcija-algoritmi
permalink: /udari-i-skreni
---

![crash-and-turn](/images/koncepti/algoritmi/crash-and-turn.gif)

**Udari i skreni (*crash and turn*) algoritam je jednostavna heuristička metoda za rešavanje lavirinta ili navigaciju kroz neznane prostore.**

Algoritam podseća na ono što bi neka životinja pokušala da uradi. Kreće iz tačke A i pokušava da stigne do tačke B. Pokuša da se kreće pravolinijski dokle može. Kada naiđe na prepreku, bira jednu stranu i pokušava da je zaobiđe, dok ponovo ne može se vrati pravolinijskom kretanju.

Zamišljen je za robote, simulacije ili igre gde entitet istražuje prostor dok reaguje na prepreke.

## Prednosti i mane

Udari i skreni algoritam je vrlo jednostavan i može se implementirati uz minimalno opterećenje procesora. Međutim, algoritam ima problema sa konkavnim preprekama. Na primer, može se zaglaviti u oblastima oblika slova "C" u beskonačnoj petlji, jer nije u stanju da zaobiđe prepreku kada uđe unutra.

![zaglavljena-putanja](/images/koncepti/algoritmi/zaglavljena-putanja.gif)

## Pseudokod

Algoritam se može formalizovati na sledeći način:

```
dokle god nismo stigli do odredišta
   ako možemo da napredujemo pravolinijski ka cilju, činimo to
   inače
      izaberemo jedan pravac (levo ili desno)
      krećemo se u izabranom pravcu držeći se uz zid prepreke
      kada ponovo možemo da napredujemo pravolinijski ka cilju, činimo to
```

Prilikom izbora pravca postoje dve mogućnosti:  
- strana koja manje odstupa od početne putanje.  
- nasumična strana (zvuči čudno, ali uglavnom dobro funkcioniše).  
