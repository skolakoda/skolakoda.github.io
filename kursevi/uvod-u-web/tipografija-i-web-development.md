---
title: Tipografija i web development
layout: lekcija-html
permalink: /tipografija-i-web-development
author: damjan
---

***Ceo internet je sačinjen od stranica. I knjige su sačinjene od stranica. Tipografija, drevna nauka o slovima, povezuje ova dva naigled tako različita polja, kao što su štampanje knjiga i web development.***

## Pravila knjige

Moje zanimanje za tipografiju potiče od grešaka koje mi je izbacio [CSS linter](https://github.com/CSSLint/csslint) tokom rada na jednom od projekata. Prva greška je glasila *[Don't use too many font size declarations](https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-font-size-declarations)*, a druga *[Disallow qualified headings](https://github.com/CSSLint/csslint/wiki/Disallow-qualified-headings)*.

Pravila CSS lintera naterala su me da se zamislim o tipografiji. Zašto nije dozvoljeno redefinisanje naslova? Zašto nije dozvoljeno previše font definicija? Sve ovo postaje očigledno kada web projekat uporedimo sa knjigom.

Pravila knjige su jednostavna - na svim stranicama je **isti font iste veličine**. Pored osnovnog teksta, postoje naslovi (koji su veliki) i fusnote (koje su male), takođe isti za sve stranice, što povećava čitkost i jedinstvo sadržaja. Ova pravila su oprobana vekovima i rade.

Tvorci lintera su ovo prihvatili kao dobru praksu i sankcionisali preveliko odstupanje od ovih pravila. Zato se definisanje naslova i fontova za svaku stranu smatra izuzetno lošom praksom. Tipografija se definiše jednom za sve stranice.

## Malo istorije

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Forum_inscription_and_lizard.jpg/640px-Forum_inscription_and_lizard.jpg)

Nekada davno su knjige pisane rukom pa slova nisu mogla biti identična.

Tipografija je nastala sa izumom štamparske mašine (u Evropi u 15. veku, a vekovima pre toga u Kini i Koreji). Od tada, ljudi nastoje da usavrše pravila koja pospešuju čitkost stranice.

*Roman*, prvi standardni font stvoren u 15. veku, i danas koristimo na računarima. Inspirisan stilom sa starih rimskih natpisa, bio je mnogo čitljiviji od tada preovlađujućeg gotskog pisma. Odmah je stekao popularnost i postao štampani standard. Tek par vekova kasnije, od 18. veka naovamo, počeli su da nastaju novi fontovi. Gotovo svi se i danas koriste.

## Tipovi fontova

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Serif_and_sans-serif_03.svg/640px-Serif_and_sans-serif_03.svg.png)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Serif_and_sans-serif_01.svg/640px-Serif_and_sans-serif_01.svg.png)

Dve glavne porodice fontova su *serif* i *sans serif*, odnosno "kvačice" i "bez kvačica" (na francuskom *sans* znači bez). Najpoznatija slova sa kvačicama su Times New Roman, a bez kvačica Arial. Poreklo kvačica se vezuje za klesanje slova u kamen.

Kvačasta slova se smatraju klasičnim, a bez kvačica modernijim. Ako je verovati Wikipediji, kvačasta slova se tradicionalno više koriste u štampi, a ona bez kvačica na webu. Postoje razne studije o čitkosti, ali rezultati nisu jednoznačni.

Pored ove dve glavne porodice, za developere su posebno bitni `monospace` fontovi, koje karakteriše "jednak prostor" za svako slovo. Dakle, za razliku od standardnih slova koja zauzimaju prostor u skladu sa svojom širinom (npr. slovo "i" zauzima manje od "w"), monospace fontovi uvek dobijaju jednako prostora. Ovo značajno otežava čitanje, ali omogućava upotrebu slova u tabelarne i grafičke svrhe, kao što je npr. ASCII umetnost.

Jednakoprostorni fontovi se po pravilu koriste u terminalu, kodnim editorima, i na web stranicama za prikaz koda. Znakovi jednake širine povećavaju čitljivost izvornog koda i smanjuju mogućnost greške, odnosno previda nekog znaka.

```

888                     888                     
888                     888                     
888                     888                     
88888b.  8888b.  .d8888b888  888 .d88b. 888d888
888 "88b    "88bd88P"   888 .88Pd8P  Y8b888P"   
888  888.d888888888     888888K 88888888888     
888  888888  888Y88b.   888 "88bY8b.    888     
888  888"Y888888 "Y8888P888  888 "Y8888 888     

```

Najpoznatiji monospace font verovatno je Courier New.

## Osnovna pravila

Iako se web developeri, u teoriji, ne bave dizajnom, u praksi se redovno bavimo fontovima, rastojanjima između linija, marginama, prazninama, a neretko donosimo i čisto dizajnerske odluke. Stoga je veoma bitno da upoznamo bar osnovna tipografska pravila, što je posebno korisno za hobi projekte, gde sve radimo sami.

### Koristi prazan prostor

Prazan prostor je luksuz digitalnog doba. U vekovima štampe, prazan prostor se skupo plaćao (novčano i životima stabala). Pojavom digitalnih stranica prazan prostor je postao široko dostupan, što je značajno uticalo na trendove u dizajnu.

Više nije morao da se sabija tekst zbog cene. Povećane su margine, razmaci između redova, razmaci između slova. Sadržaj je prodisao. Koristi ovaj luksuz.

### Ograniči dužinu reda

Preduge linije su generalno teže za čitanje. Zato je trend da se tekstualni sadržaj uokviruje u `wrapper` ili `container` elemente koji ograničavaju dužinu reda, i kojima po pravilu rastu margine sa veličinom uređaja.

### Ne koristi previše fontova

Generalno se smatra da u tekstualnom sadržaju ne treba koristiti više od dva fonta. Nakon toga, počinje kolaž. Ta dva glavna fonta mogu biti iz dve različite familije kako bi se naglasio kontrast - na primer naslovi sa kvačicama a tekst bez, ili obratno.

Obično se za naslove koristi jedna familija a za ostatak teksta druga.

### Ne koristi previše stilova

Veoma česta greška je upotreba previše različitih stilova za tekst. Čitalac na svaki stil mora da se prilagođava, a kakofonija stilova odvlači pažnju sa sadržaja.

Uvek treba imati na umu paralelu sa knjigom i koristiti samo nekoliko osnovnih stilova teksta (npr. obična slova, podebljana slova, mala slova, naslovi, podnaslovi). Za siže obično idu podebljana (i ponekad zakrivljena) slova.
