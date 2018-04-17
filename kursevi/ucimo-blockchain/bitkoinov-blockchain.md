---
title: Bitkoinov blockchain
layout: lekcija-blockchain
permalink: /bitkoinov-blockchain
---

**Bitkoinov blockchain je zapravo mreža servera koji se ponašaju kao replicirana baza podataka.**

Blokčein je registar svih transakcija koje su se ikad desile u bitkoinovom sistemu. To samo po sebi nije ništa spektakularno, jer svaki sistem u kojem se vrše neka plaćanja vodi evidenciju o tim transakcijama i čuva ih kao neku bazu podataka. Ono što je kod blokčeina velika inovacija je način na koji se informacije o transakcijama šalju i skladište.

Pođimo od samog imena. *Blockchain* je sastavljen od reči *block* (blok) i *chain* (lanac). Dakle, bukvalno prevedeno, lanac blokova. Naime, kod bitkoina se transakcije pakuju u blokove, a blokovi se vezuju u lanac. Za vezivanje blokova koristi se kriptografija, preciznije HASH funkcija, na način da je nemoguće promeniti sadržaj jednog bloka, a da se ne promeni sadržaj svih blokova koji idu nakon njega. Ovo je izuzetno bitno svojstvo blokčeina jer obezbeđuje nepromenjivost podataka koji su upisani u blokčein.

## Jednak ka jednakom

<!-- ![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/P2P-network.svg/464px-P2P-network.svg.png) -->

![](http://pcchip.hr/wp-content/uploads/2017/03/blockchain-5.jpg)

Kao što verovatno već znamo, bitkoin je decentralizovan, što znači da ne postoji centralni server ili bilo šta slično, na šta se korisnici povezuju. Svi korisnici bitkoina su povezani u *peer-to-peer* (jednak ka jednakom) mrežu i svaki korisnik predstavlja jedno čvorište (*node*) te mreže. Pošto je peer-to-peer mreža takva da svaki korisnik može biti direktno povezan samo sa nekoliko drugih korisnika, to znači da je sa svima ostalima povezan indirektno. Informacija kroz *peer-to-peer* mrežu putuje tako što svaki učesnik šalje poruku samo onima sa kojima je direktno povezan, zatim svaki od njih tu poruku dalje šalje onima sa kojima je direktno povezan i tako sve dok poruka ne dođe do svih učesnika u mreži. Dakle, ovde imamo primer slanja informacija preko velikog broj posrednika i sjajan primer problema vizantijskih generala, samo mnogo komplikovaniji primer od onog kojeg smo prethodno razmatrali.

Da bismo shvatili kako bitkoin rešava problem vizantijskih generala, bitno je da napomenemo još jednu bitnu osobinu bitkoina. Naime, neka od čvorišta u mreži (koja se nazivaju *full node*) imaju na svom hard disku kompletan blokčein (bazu svih transakcija koje su se ikada desile) i takvih čvorišta je na hiljade. Pošto svi oni stalno međusobno komuniciraju, uvek proveravaju da li se njihova kopija blokčeina slaže sa ostalima. Ako se ne slaže, oni automatski ažuriraju svoju verziju tako da se slaže sa ostatkom mreže. Zamislite to kao bazu podataka koja je replicirana na hiljadama računara i koja se na svim tim računarima ažurira u realnom vremenu. Koliko je teško izmeniti neki podatak u takvoj bazi?

## Privatni i javni ključ

Svaki korisnik bitkoina ima privatni ključ, javni ključ i bitkoin adresu. Javni ključ se kreira od privatnog ključa, ali na način da je nemoguće uraditi obrnut proces, to jest, od javnog ključa napraviti privatni. Zatim se od javnog ključa kreira bitkoin adresa na koju se primaju bitkoini, i njega nema potrebe kriti. Sa druge strane, vrlo je važno da se čuva privatni ključ. Privatnim ključem se potpisuju transakcije. Zamislite da je bitkoin adresa vaš broj bankovnog računa, a privatni ključ vaš pin kojim verifikujete plaćanja sa tog računa. Otprilike tako funkcioniše, uz jednu vrlo bitno razliku: Ako izgubite pin, banka će vam izdati novi. Ako izgubite privatni ključ, izgubili ste zauvek bitkoine na adresi za koju je taj privatni ključ vezan. Ti bitkoini i dalje postoje, ali im niko ne može pristupiti bez privatnog ključa.

Kako se zapravo šalje transakcija u ovakvoj mreži? Kada želim da pošaljem bitkoine nekome, moram da unesem bitkoin adresu primaoca, iznos koji želim da pošaljem i da transakciju potpišem mojim privatnim ključem. Zatim informaciju o toj transakciji šaljem učesnicima sa kojima sam direktno povezan u *peer-to-peer* mreži, da bi je oni dalje prosledili sve do primaoca.

## Posrednici

Možda ste čuli da se kod bitkoina transakcije šalju bez posrednika? Ovo je zapravo vrlo netačno. Nema posrednika u onom klasičnom smislu u kojem doživljavamo posrednika – neko ko šalje našu transakciju i koji za to uzima novac i unosi kašnjenje, ali ima i pravo da tu transakciju odbije, zamrzne, odloži… Ipak, pri slanju bitkoin transakcije ima posrednika, čak hiljade njih, samo je njihova uloga malo drugačija. Svako čvorište u bitkoin mreži je zapravo posrednik koji transakciju proveri i prosledi dalje sve dok ona ne dođe do svih čvorišta u mreži. Kad su je svi proverili i transakcija je došla do svih u mreži, ona ispunjava uslov da se ubaci u blok i time postane deo blokčeina.

Šta svi ti posrednici zapravo proveravaju?

1. Da li pošiljalac ima na svojoj bitkoin adresi dovoljno bitkoina da bi mogao da izvrši transakciju?
2. Da li je adresa primaoca validna?
3. Da li je potpis pošiljaoca validan?

Kako oni mogu sve to da provere? Setimo se da postoje čvorišta koja na svom hard disku imaju kompletan blokčein (sve transakcije koje su se ikad desile). Baš zbog toga, oni u svakom trenutku znaju tačno na kojoj adresi koliko bitkoina ima i koje su adrese validne, a koje nisu. Ako transakcija prođe sve 3 provere, ona se prosleđuje dalje kroz mrežu dok ne dođe do svih.

Iako sve ovo deluje kao veoma kompleksan proces, u praksi je bitkoin transakciji uglavnom potrebno manje od 1 sekunde da dođe do svih čvorišta u bitkoin mreži.

Za kraj ovog dela, vratimo se na problem vizantijskih generala. Šta ako su posrednici nepouzdani? Bitkoin je ovaj problem rešio na veoma zanimljiv način – povećao je broj posrednika! **Ako ne možeš da veruješ jednom posredniku – koristi na hiljade njih!** Deluje neverovatno, ali zaista funkcioniše. Hajde da razmislimo šta bi se desilo ako bi neki od učesnika u bitkoin mreži pokušao da promeni transakciju koju je primio, pre nego je prosledi dalje. Ne bi se desilo ništa, zbog načina na koji mreža funkcioniše. Učesnici u mreži konstanto komuniciraju i porede svoje kopije baze sa drugima. Ako primete da se njihova kopija razlikuje od drugih, oni svoju kopiju prilagode tako da bude ista. Međutim, svaki od učesnika je povezan direktno sa nekoliko drugih. Ako od jednog od njih dobija jednu informaciju, a od svih ostalih drugu, on će tog jednog učesnika jednostavno ignorisati, tako da izmenjena informacija ne može da propagira kroz mrežu.

## Ranjivost

U mreži od nekoliko hiljada učesnika jedan „izdajnik“ ne može da učini nikakvu štetu, što je nekako i logično. Međutim, šta ako imamo više „izdajnika“? Dok god je njihov broj ispod 50%, cela mreža je bezbedna, jer su čvorišta programirana tako da stav većine prihvataju kao tačan. Dakle, da bi se mreža ugrozila, potrebno je pošteni članovi mreže budu u manjini, ali to nije jedini uslov, što napad na mrežu čini još težim. Da bi napad uspeo, neophodno je da napadači budu u većini i da budu savršeno sinhronizovani. Sinhronizacija hiljada učesnika je sama po sebi dovoljno teška, a napad čini još težim to što bi oni morali da deluju istovremeno i trenutno čim se pojavi transakcija koju žele da izmene. Problem je što vrlo teško mogu unapred da znaju kada će se tačno transakcija desiti i kako će izgledati.

Napad na bitkoin mrežu je teoretski moguć, ali se u praksi pokazao kao nemoguć skoro punih 9 godina. Ovde vidimo zašto je bitkoin mnogo više od internet novca – on je rešio problem poverenja u decentralizovanoj mreži učesnika koji se međusobno ne poznaju, što je zapravo problem vizantijskih generala (koji je do pojave bitkoina bio smatran nerešivim, punih 26 godina). Možemo slati novac (ili bilo koji elektronski zapis) pomoću posrednika koje ne poznajemo i kojima ne verujemo, a opet biti potpuno sigurni da će novac stići tačno onome kome treba i tačno u iznosu koji je poslat.


Izvor: Aleksandar Matanović, *[Šta je to blokčein i kako radi? ](https://www.mojafirma.rs/magazin/sta-je-to-blokcein-blockchain-i-kako-radi/)*, Mojafirma, 2017.
