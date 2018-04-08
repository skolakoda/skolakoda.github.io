---
title: Komponente i njihovo korištenje
layout: lekcija-razvoj
permalink: /komponente
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lines_of_the_IBM_Building%2C_Buenos_Aires_%286476065839%29.jpg/1024px-Lines_of_the_IBM_Building%2C_Buenos_Aires_%286476065839%29.jpg)

**Tehnika razvoja softvera zasnovana na komponentama** pojavila se kasnih 1990-ih, a razvija se i danas. Ta tehnika je nastala kao rezultat frustracije činjenicom da objektni pristup sam po sebi nije doveo do intenzivne ponovne upotrebe. Naime, uvidjelo se da su za rentabilnu ponovnu upotrebu potrebne veće i zatvorenije cjeline od objekata. Komponente predstavljaju jednu vrstu takvih cjelina.

**Komponentu treba promatrati kao samostalnog pružatelja usluga.** Kad naš sustav treba neku uslugu, on poziva komponentu preko njezinog javnog sučelja, ne brinući se o tome gdje i kako se ona izvršava.

## Svojstva komponente

Razni autori daju donekle različite definicije komponente, no svi se otprilike slažu da ona mora imati sljedeća svojstva:

- Komponenta je nezavisna izvršiva cjelina. Nije nam dostupan njezin izvorni kod, ona se ne kompilira zajedno s ostalim dijelovima našeg sustava, već se instalira u binarnom obliku i pokreće kao zasebni proces.
- Komponenta objavljuje svoje sučelje. Sve interakcije s njom odvijaju se kroz to sučelje. Samo sučelje zadaje se u obliku parametriziranih operacija, slično kao kod objekta.
- Sučelje komponente sastoji se od dva dijela.
  - Ponuđeno sučelje (*provides interface*) definira usluge koje komponenta pruža.
  - Traženo sučelje (*requires interface*) definira koje usluge moraju biti dostupne samoj komponenti u sustavu koji je koristi. Ako tih usluga nema, komponenta neće moći raditi.
- Komponenta se ponaša kao crna kutija. Nije nam vidljivo njezino unutrašnje stanje. Ne znamo na koji način ona implementira svoje operacije. U pravilu je nevažno u kojem programskom jeziku je ona razvijena.
- Komponenta je zamjenjiva cjelina. Dakle ako imamo dvije komponente koje pružaju iste usluge preko istih sučelja, tada jednu od njih možemo zamijeniti drugom.
- Svaka komponenta pokorava se jednom od standardnih modela za komponente. Taj model određuje pravila kako se zadaju sučelja za komponente, dakle pravila vezana uz imena operacija, parametre, tipove podataka, iznimke, meta-podatke.
- Komponente se međusobno integriraju pomoću posebnog softvera koji se zove *middleware*. Na svakom stroju gdje je instalirana komponenta mora biti instaliran i *middleware*. Bez obzira nalaze li se na istom ili na različitim strojevima, dvije komponente međusobno komuniciraju posredstvom *middleware*-a- Svaki *middleware* implementira jedan određeni model za komponente.
- Komponenta mora biti detaljno dokumentirana, tako da njeni potencijalni korisnicu mogu odlučiti da li ona ispunjava njihove potrebe. Dokumentacija u prvom redu mora definirati sintaksu i semantiku svih operacija iz sučelja.


Izvor: Robert Manger, *Softversko inženjerstvo (skripta)*, Zagreb, 2012.
