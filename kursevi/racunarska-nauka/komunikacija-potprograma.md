---
title: Komunikacija potprograma
layout: lekcija-racunarstvo
permalink: /komunikacija-potprograma
---

![moduli](/images/koncepti/moduli.png)

Potprogrami su zasebne programske jedinice koje alociraju i različite (nepovezane) dijelove memorije za svoje varijable. Jedan potprogram ne zna za varijable drugoga, odnosno
nema direktnog pristupa do adresa memorijskih lokacija na kojima su varijable drugih potprograma.

**Drugim riječima, potprogrami i ne znaju za postojanje drugih potprograma.** Stoga pri pozivu potprograma ili funkcije pozvanoj cjelini treba "prenijeti" ulazne podatke, a pri završetku pozvana cjelina treba vratiti rezultate programu koji ga je pozvao.

Postoji nekoliko načina razmjene podataka između potprograma:

## Globalne varijable

U ovom načinu varijable kojima treba pristupati više programskih cjelina deklariraju se izvan svake od njih, u posebnom zajedničkom dijelu memorije kojem imaju pristup sve programske cjeline. Uobičajeno je reći da su globalne
varijable vidljive u svim potprogramima.

## Poziv po vrijednosti (*call by value*)

Kopira se vrijednost lokalne varijable iz pozivajuće procedure, u lokalnu varijablu pozvane procedure. Ako pozvana procedura promijeni vrijednost varijable, to utječe samo na lokalnu kopiju u pozvanoj proceduri.

## Poziv po adresi (*call by reference*)

Pozvana procedura dobiva pristup lokalnim varijablama iz pozivajuće procedure. Pozvana procedura može trajno promijeniti vrijednost varijablama čije su adrese prenesene.

![](//www.sitesbay.com/cpp/images/function/callbyvalue-callbyreference.png)

## Opseg i trajanje varijabli

Pojmovi dosega i trajanja varijabli važni su za razumijevanje prijenosa podataka (vrijednosti varijabli) između potprograma. Trajanje varijable je važno ako želimo zadržati vrijednost lokalne varijable pri ponovnom pozivu potprograma – u tom slučaju lokalnu varijablu treba deklarirati kao "statičku", ali tu mogućnost nemaju svi jezici.


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi I*, Zagreb, 2005.
