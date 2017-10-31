---
title: Logičke kapije za početnike
layout: post
author: damjan
tags: [programiranje, elektronika, logika]
image: /images/koncepti/logika/xor.gif
---

**Logička kapija je prost uređaj nalik prekidaču, koji na osnovu jednog ili više ulaza pušta jedan ili nijedan izlaz. Logička kapija može biti implementirana uz pomoć štapa, kanapa, kartona, klikera, vode ili mikroelektronike.**

Ma koliko proste, logičke kapije su osnovni gradivni blokovi najsloženijih uređaja koje je čovečanstvo izmislilo, računara. Unutar računara postoje elektronske [logičke kapije](https://en.wikipedia.org/wiki/Logic_gate), koje transformišu signal sukladno pravilima Bulove logike. Na taj način su logičke operacije ugrađene u sam hardver.

Pomoću logičkih kapija tok vode, struje ili klikera se reguliše po uzoru na tok ljudske misli. Istraživanje zakona misli na ovaj način započeo je engleski filozof Džordž Bul (*George Boole*), po kome je ova grana logike i dobila ime.

## I (*and*) kapija

Zamislimo strujno kolo koje ima dva prekidača (`p` i `q`) i sijalicu. Uključeni prekidači, kada puštaju struju, imaju vrednost `true`, u suprotnom `false`. Pošto su prekidači redno vezani, struja će teći i sijalica ċe svetleti (kolo ċe imati vrednost `true`), samo ako su oba prekidača uključena. Prema tome, ovo kolo odgovara logičkom iskazu `p i q`, odnosno konjukciji.

Da bismo ovo povezali sa programskom logikom, možemo na jednom prekidaču napisati `jelPunoletan`, a na drugom `jelPrihvatioUslove`. Ako su oba uslova zadovoljena, signal će proći.

![](/images/koncepti/logika/i-kolo.png)

*I* kapiju možemo još lakše implementirati pomoću vode. Dovoljno je na jednom kanalu postaviti dve uzastopne brane. Ako su obe dignute (`true`) voda će proći.

## Ili (*or*) kapija

Sada pogledajmo strujno kolo u kome su prekidači `p` i `q` postavljeni uporedo. U tom slučaju, sijalica ċe svetleti (kolo ċe imati vrednost `true`) ako je bar jedan od prekidača uključen. Stoga, ovo kolo odgovara logičkom iskazu `p ili q`, odnosno disjunkciji.

Na primer, na jednom prekidaču možemo napisati `jelStudent`, na drugom `jelNezaposlen`. Ako je bilo koji uslov ispunjen, signal će proći (i dobiće povlasticu za prevoz).

![](/images/koncepti/logika/ili-kolo.png)

*Ili* kapiju takođe možemo implementirati pomoću vode i mnogih drugih materijala.

## Isključivo ili (*xor*) kapija

*Isključivo ili* je kapija koja pušta jedan ili drugi ulaz, ali ne oba istovremeno. Ovaj logički veznik možemo predstaviti pomoću kartona i klikera, kapijom kroz koju jedan ili drugi kliker može pojedinačno proći, ali ne mogu oba istovremeno.

![xor]({{page.image}})

Tako otprilike radi bulova logika na hardverskom nivou.
