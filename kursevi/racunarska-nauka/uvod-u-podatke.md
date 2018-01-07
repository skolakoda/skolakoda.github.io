---
title: Kako računar beleži podatke?
layout: lekcija-racunarstvo
permalink: /kako-racunar-belezi-podatke
redirect_from:
  - /uvod-u-podatke
image: /images/hardver/hard-disk.jpg
---

![]({{page.image}})

> Jeste li se ikada pitali kako računar beleži naše podatke?

**Uobičajene forme podataka su slova, brojevi, zvuk, slika i video zapis.** Čovek prima čulima i druge podatke kao što su dodir, miris, ukus, temperatura. A u prirodi postoje i druge forme podataka kao što su električni i magnetni signali, bio-energetski signali, itd.

**Računari za čuvanje svih vrsta podataka koriste samo cifre 0 i 1.** Bilo da se radi o elektronskim, magnetnim ili optičkim komponentama, tehnologija računara uvek koristi samo dva stanja. Tako, na primer, ukoliko između dve tačke postoji napon viši od određenog praga, onda se smatra da tom paru tačaka odgovara vrednost 1, a inače mu odgovara vrednost 0. Takođe, polje hard diska može biti ili namagnetisano što odgovara vrednosti 1 ili razmagnetisano što odgovara vrednosti 0. Slično, laserski zrak na površini kompakt diska „buši rupice“, pa polje koje nije izbušeno predstavlja vrednost 0, a ono koje jeste izbušesno predstavlja vrednost 1.

**Današnji računari su digitalni. To znači da su svi podaci zapisani kao nizovi brojeva.** Dva simbola su dovoljna za zapisivanje svih vrsta brojeva, pa samim tim i za zapisivanje svih vrsta digitalnih podataka. Tako jedan te isti podatak može imati različita značenja, u zavisnosti od interpretacije.

### Tekst

Na samom početku ere računara (1950-tih godina) napravljen je jedan šifarnik za kodiranje slova brojevima. Ovaj šifarnik poznat je kao ASCII (*American Standard Code for Information Interchange*) tabela i još uvek je u upotrebi.

![](https://bam.files.bbci.co.uk/bam/live/content/zm46yrd/large)

Tako recimo veliko slovo A ima šifru 65 u dekadnom brojnom sistemu (ili 1000001 u binarnom). ASCII je prvobitno sadržao samo internacionalnu latiničnu azbuku, i bilo ga je nemoguće koristiti za druge jezike osim engleskog.

U poslednje vreme koristi se novi tzv. UNICODE.
Ovaj kod se pojavljuje u više varijanti, a UTF-16 je 16-bitna varijanta koja pokriva 30-tak sistema za pisanje teksta na raznim jezicima.

### Zvuk

Zvuk nastaje vibracijom vazduha, pa kada se vibracija prenese do naše bubne opne, ona vibrira u istom ritmu i proizvodi signal, koji naš mozak interpretira kao zvuk. Pošto je zvuk vibracija vazduha, ta se vibracija u mikrofonu (slično kao u bubnoj opni) pretvara u električni signal. U komjuteru se zvuk takođe pamti pomoću brojeva.

![](//www.karbosguide.com/images/u1727.gif)

S druge strane, reprodukcija zvučnog signala se odvija tako što se brojevi, kojima je registrovan zvuk, pretvaraju ponovo u električni signal.

Zvučni podaci se mogu takođe obrađivati. I kod njih postoji skup osnovnih operacija: brisanje dela zapisa, dodavanje zapisa, zamena zapisa. Pomoću takvih operacija moguće je izvršiti veoma složene transformacije zvučnih zapisa i postići razne zvučne efekte.

Postoji više načina digitalizacije i zapisivanja zvučnih podataka. Fajlovi u kojima se nalazi zvuk mogu imati razne ekstenzije kao što su wav, mp3, aud, midi...

### Grafika (slika i video)

Sledeća slika ilustruje proces digitalizacije crno-bele fotografije:

![](/images/koncepti/podaci/bitmapa.png)

Proces se može opisati ovako: Originalna slika se pretvara u “mozaičku” verziju, gde svaki kamen u mozaiku prestavlja crnu ili belu površinu. Onda se mozaik konvertuje u nizove 0 i 1 tako da 0 odgovara belom a 1 crnom kamičku. Na kraju se te serije 0 i 1 zapisuju u memoriji računara.

Reprodukcija je obrnut proces: Svaka 0 i 1 iz memorije se na ekranu prikazuje kao bela ili crna tačka. Svaki monitor se zapravo i sastoji od određenog broja vertikalnih i horizontalnih linija koje se sastoje od tačaka (piksela). Broj verikalnih i horizontalnih tačaka na ekranu nazivamo rezolucijom.

Kod slika u boji, umesto 0 ili 1 pamtimo boju tačke. Svaka boja na ekranu se može dobiti mešavinom crvene, zelene i plave (*red*, *green*, *blue* - RGB). Ako za svaku osnovnu boju uzmemo jedan bajt memorije onda možemo svaki piksel “obojiti” jednom od 256x256x256 boja.

![rgb](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/AdditiveColor.svg/150px-AdditiveColor.svg.png)

Ako želimo da slika bude u sivim tonovima, možemo svakom pikselu pridužiti jedan bajt kojim se opisuje jedna od 256 nijansi sive.

A šta ako imamo pokretnu sliku (video zapis)? Potrebno je samo pamtiti više uzastopnih slika. Kod klasičnih filmova sa filmskom vrpcom uobičajeno je da se prave 24 slike u sekundi, kod kompjutera taj broj je obično 36 pa je kompjuterska slika stabilnija. Zapisivanje video fajla zahteva veliku količinu memorije, mnogo više nego za sliku i zvuk, a naročito u odnosu na tekst i brojeve.

Grafiku je takođe moguće obrađivati, promenom karakteristika piksela (boje, osvetljenja, kontrasta). Postoji mnogo načina digitalizacije. Najpoznatiji formati su bmp, jpg, png, pic, tiff...

## Čuvanje podataka

Videli smo da nam je za čuvanje bilo koje vrste podataka potrebno da čuvamo samo nizove 0 i 1, od kojih se sve vrste podataka sastoje. Osnovna memorijska ćelija naziva je bit. Naziv dolazi otuda što se u njoj pamti jedna binarna cifra (**bi**nary digi**t**).

Ako 8 bitova povežemo u jednu celinu dobićemo tzv. bajt kao pokazuje sledeća slika.

![](//image.noelshack.com/fichiers/2010/48/1291400659-bytes-5506b22482.png)

U jedan bajt možemo smestiti jednu od 256 mogućih kombinacija 0 i 1. Na primer neko ASCII slovo ili jednu od RGB boja nekog piksela. Svaki bit u bajtu ima svoju adresu (od 0 do 7), te svakom možemo individualno pristupati i menjati ga.

## Računarska memorija

Ima više načina da se tehnološki realizuje računarska memorija – poluprovodnici, magnetni materijali, optički materijali. Od poluprovodnika se najčešće prave RAM i ROM memorije, od magnetnih materijala hard diskovi a od optičkih CD i DVD diskovi.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/MT4C1024-HD.jpg/640px-MT4C1024-HD.jpg)

Kod kompjutera razlikujemo dve osnovne vrste memorije:
- [RAM](https://en.wikipedia.org/wiki/Random-access_memory) i [ROM](https://en.wikipedia.org/wiki/Read-only_memory), u kojima se podacima pristupa preko adresa bajtova;
- disk memorije (magnetni i optički), u kojima su podaci smešteni u fajlove, a pristupa im se čitanjem fajlova deo po deo (čitanjem se prebacuju u RAM, a onda im se pristupa).

Kod diskova je uobičajna podela memorijskog prostora na foldere (direktorijume), uređene u hijerarhiju. Osnovni sadržač podataka na diskovima je fajl (datoteka). Obzirom da su fajlovi veoma dugački nizovi bajtova, pojedinačnim bajtovima se ne pristupa direktno, već se fajl čita deo po deo, pa se onda u učitanom delu pronalaze podaci koje treba koristiti ili menjati.

**Izvori**:

* Milan Popović, *Osnove programiranja (skripta)*
* Filip Marić, Predrag Janičić, *Programiranje 1: Osnove programiranja kroz programski jezik C*, Beograd, 2015.

Priredio: Damjan Pavlica
