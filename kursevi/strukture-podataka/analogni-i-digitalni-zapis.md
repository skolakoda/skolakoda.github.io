---
title: Analogni i digitalni zapis
layout: lekcija-strukture
permalink: /analogni-i-digitalni-zapis
image: /images/koncepti/podaci/analogni-i-digitalni-zapis.png
---

![]({{page.image}})

**Šta je analogni, a šta digitalni zapis? Koje su prednosti i mane jednog i drugog načina beleženja podataka?**

## Analogni zapis

Osnovna tehnika analognog zapisa signala je da se kontinualne promene signala opišu kontinualnim promenama određenog svojstva medijuma na kojem se signal zapisuje. Tako, na primer, promene pritiska vazduha koje čine zvučni signal, predstavljene su promenama nivoa namagnetisanja na magnetnoj traci na kojoj se zvuk zapisuje. Količina boje na papiru direktno odgovara intenzitetu svetlosti u trenutku kada je fotografija bila snimljena. Dakle, **analogni zapis uspostavlja analogiju između signala koji je zapisan i određenog svojstva medijuma na kome je signal zapisan.**

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ton_S.b%2C_tape_unit.jpg/800px-Ton_S.b%2C_tape_unit.jpg)

### Prednosti i nedostaci

Osnovna **prednost** analogne tehnologije je da je ona relativno jednostavna. Još su drevni narodi mogli da naprave nekakav zapis zvuka uz pomoć jednostavne igle prikačene na trepereću membranu.

Osnovni **problem** analogne tehnologije je što je izrazito je teško napraviti dva identična zapisa istog signala. Takođe, problem predstavlja i inherentna nestalnost medijuma, njegova promenljivost tokom vremena i podložnost spoljašnjim uticajima. Obzirom da varijacije medijuma direktno dovode do varijacije zapisanog signala, vremenom neizbežno dolazi do pada kvaliteta analognog zapisa. Obrada analognih zapisa je obično komplikovana i za svaku vrstu signala potreban je uređaj specijalizovan za tu vrste obrade.

## Digitalni zapis

Osnovna tehnika digitalnog zapisa je da se vrednost signala izmeri u određenim trenucima ili tačkama prostora i da se onda na medijumu zapišu izmerene vrednosti. **Svaki digitalni zapis je predstavljen nizom brojeva koji se nazivaju odbirci ili semplovi** (engl. *sample*). Svaki od brojeva predstavlja vrednost signala u jednoj tački diskretizovanog domena. Obzirom da izmerene vrednosti pripadaju kontinualnoj skali, neophodno je izvršiti diskretizaciju, odnosno zapisati samo određen broj nivoa različitih vrednosti.

Digitalni zapis predstavlja diskretnu aproksimaciju izvornog signala. Važno pitanje je koliko često treba vršiti merenje da bi se izvorni signal mogao verno rekonstruisati. Odgovor daje tzv. Najkvist-Šenonova teorema, koja kaže da je signal dovoljno meriti dva puta češće od najviše frekvencije koja sa u njemu javlja. Na primer, pošto čovekovo uho čuje frekvencije do 20KHz, dovoljno je da frekvencija odabiranja (sempliranja) bude 40KHz. 

### Prednosti i nedostaci

Za razliku od analogne tehnologije, kvalitet reprodukcije digitalnog zapisa ne zavisi od kvaliteta medija na kome su podaci zapisani, sve dok je medijum ispravan (da se zapisani brojevi mogu razaznati). Tako kvarljivost inherentna za sve medije postaje nebitna. Na primer, papir vremenom žuti što uzrokuje pad kvaliteta analognih fotografija. Međutim, ukoliko bi papir sadržao zapis brojeva koji predstavljaju digitalno zapisane fotografije, činjenica da papir žuti ne bi predstavljala problem dok god se brojevi mogu razaznati.

**Digitalni zapis omogućava kreiranje apsolutno identičnih kopija što omogućava prenos podataka na daljinu**. Na primer, ukoliko fotokopiramo fotografije, kopija je daleko lošijeg kvaliteta od originala. Međutim, ukoliko umnožimo CD na kojem su zapisani brojevi koji čine zapis neke fotografije, kvalitet slike ostaje apsolutno isti. Ukoliko bi se dva CD-a pregledala pod mikroskopom, oni bi izgledali delimično različito, ali to ne predstavlja problem sve dok se brojevi koji su na njima zapisani mogu razaznati.

Obrada digitalnih zapisa se svodi na matematičku manipulaciju brojevima i ne zahteva (za razliku od analognih) korišćenje specijalizovanih mašina.

Osnovni nedostatak predstavlja činjenica da je neophodno imati veoma razvijenu tehnologiju da bi se uopšte stiglo do digitalnog zapisa. Na primer, izuzetno je komplikovano napraviti uređaj koji je u stanju da 40 hiljada puta izvrši merenje intenziteta zvuka. Jedna sekunda zvuka se predstavlja sa 40 hiljada brojeva, za čiji je zapis neophodna gotovo cela jedna sveska. Ovo je osnovni razlog zbog čega se digitalni zapis istorijski javio kasno.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/DigitalDAQv2.pdf/page1-1024px-DigitalDAQv2.pdf.jpg)

### Izvori

- Filip Marić, Predrag Janičić, *Programiranje 1: Osnove programiranja kroz programski jezik C*, Beograd, 2015.
