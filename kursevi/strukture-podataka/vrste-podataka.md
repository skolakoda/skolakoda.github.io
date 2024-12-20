---
title: Vrste podataka
layout: lekcija-strukture
permalink: /vrste-podataka
redirect_from: /uvod-u-podatke
image: /images/koncepti/podaci/hexdump.png
---

![]({{page.image}})

**Uobičajene forme podataka su slova, brojevi, zvuk, slika i video zapis.** Čovek prima čulima i druge podatke kao što su dodir, miris, ukus, temperatura. A u prirodi postoje i druge forme podataka kao što su električni i magnetni signali, bio-energetski signali, itd.

**Današnji računari su digitalni. To znači da su svi podaci zapisani kao nizovi brojeva.** Dva simbola (0 i 1) su dovoljna za zapisivanje svih brojeva, pa samim tim i za zapisivanje svih vrsta digitalnih podataka. Tako jedan te isti podatak može imati različita značenja, u zavisnosti od interpretacije.

## Tekst

![](/images/koncepti/podaci/podaci-slova.png)

Na samom početku ere računara (1950-tih godina) napravljen je jedan šifarnik za kodiranje slova brojevima. Ovaj šifarnik poznat je kao ASCII (*American Standard Code for Information Interchange*) tabela i još uvek je u upotrebi.

Tako recimo veliko slovo A ima šifru 65 u dekadnom brojnom sistemu (ili 1000001 u binarnom). ASCII je prvobitno sadržao samo internacionalnu latiničnu azbuku, i bilo ga je nemoguće koristiti za druge jezike osim engleskog.

U poslednje vreme koristi se novi tzv. UNICODE.
Ovaj kod se pojavljuje u više varijanti, a UTF-16 je 16-bitna varijanta koja pokriva 30-tak sistema za pisanje teksta na raznim jezicima.

## Zvuk

![](/images/koncepti/podaci/podaci-zvuk.gif)

Zvuk nastaje vibracijom vazduha, a kada se vibracija prenese do naše bubne opne, ona vibrira u istom ritmu i proizvodi signal, koji mozak interpretira kao zvuk. Pošto je zvuk vibracija vazduha, ta se vibracija u mikrofonu (slično kao u bubnoj opni) pretvara u električni signal. U komjuteru se zvuk takođe pamti pomoću brojeva.

S druge strane, reprodukcija zvučnog signala se odvija tako što se brojevi, kojima je registrovan zvuk, pretvaraju ponovo u električni signal.

Zvučni podaci se mogu takođe obrađivati. I kod njih postoji skup osnovnih operacija: brisanje dela zapisa, dodavanje zapisa, zamena zapisa. Pomoću takvih operacija moguće je izvršiti veoma složene transformacije zvučnih zapisa i postići razne zvučne efekte.

Postoji više načina digitalizacije i zapisivanja zvučnih podataka. Fajlovi u kojima se nalazi zvuk mogu imati razne ekstenzije kao što su wav, mp3, aud, midi...

## Slika

![](/images/koncepti/podaci/bitmapa.png)

Proces digitalizacije crno-bele fotografije se može opisati ovako: Originalna slika se pretvara u “mozaičku” verziju, gde svaki kamen u mozaiku prestavlja crnu ili belu površinu. Onda se mozaik konvertuje u nizove 0 i 1 tako da 0 odgovara belom a 1 crnom kamičku. Na kraju se te serije 0 i 1 zapisuju u memoriji računara.

Reprodukcija je obrnut proces: Svaka 0 i 1 iz memorije se na ekranu prikazuje kao bela ili crna tačka. Svaki monitor se zapravo i sastoji od određenog broja vertikalnih i horizontalnih linija koje se sastoje od tačaka (piksela). Broj verikalnih i horizontalnih tačaka na ekranu nazivamo rezolucijom.

Kod slika u boji, umesto 0 ili 1 pamtimo boju tačke. Svaka boja na ekranu se može dobiti mešavinom crvene, zelene i plave (*red*, *green*, *blue* - RGB). Ako za svaku osnovnu boju uzmemo jedan bajt memorije onda možemo svaki piksel “obojiti” jednom od 256x256x256 boja.

![rgb](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/AdditiveColor.svg/150px-AdditiveColor.svg.png)

Ako želimo da slika bude u sivim tonovima, možemo svakom pikselu pridužiti jedan bajt kojim se opisuje jedna od 256 nijansi sive.

Grafiku je takođe moguće obrađivati, promenom karakteristika piksela (boje, osvetljenja, kontrasta). Postoji mnogo načina digitalizacije. Najpoznatiji formati su bmp, jpg, png, pic, tiff...

### Video

A šta ako imamo pokretnu sliku (video zapis)? Potrebno je samo pamtiti više uzastopnih slika. Kod klasičnih filmova sa filmskom vrpcom uobičajeno je da se prave 24 slike u sekundi, kod kompjutera taj broj je obično 36 pa je kompjuterska slika stabilnija. Zapisivanje video fajla zahteva veliku količinu memorije, mnogo više nego za sliku i zvuk, a naročito u odnosu na tekst i brojeve.

## Literatura

* Milan Popović, *Osnove programiranja (skripta)*
* Filip Marić, Predrag Janičić, *Programiranje 1: Osnove programiranja kroz programski jezik C*, Beograd, 2015.
