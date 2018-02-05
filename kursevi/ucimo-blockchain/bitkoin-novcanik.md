---
title: Implementacija jednostavnog Bitkoin novčanika
layout: lekcija-blockchain
permalink: /bitkoin-novcanik
---

Novčanik u Bitcoin sustavu je računalni program koji služi za primanje i slanje bitcoina. Uloga novčanika je pohrana privatnih ključeva korisnika, prikaz transakcija korištenih za slanje ili primanje bitcoina pomoću adrese korisnika te prikaz količine bitcoina koje korisnik posjeduje. Bitcoine iz jednog novčanika u drugi prebacujemo Bitcoin transakcijama. Novčanik je moguće instalirati na računalo, pametni telefon ili tablet. Oni su također dostupni kao web aplikacije, kojima je moguće pristupiti sa svakog uređaja povezanog na internet. 

Upoznajmo najprije najvažnije pojmove za funkcioniranje novčanika. To privatni ključ, javniključ, adresaitransakcija. Privatni ključjejednostavnorečenobrojkoji možemo generirati na razne načine. Da bismo mogli deﬁnirati vezu između privatnog i javnog ključa deﬁnirajmo najprije eliptičku krivulju, vrstu krivulje često korištenu kriptograﬁji.

**Eliptička krivulja** definicija:

http://sites.psu.edu/symbolcodes/codehtml/#math
https://www.keynotesupport.com/websites/greek-letters-symbols.shtml

Neka je `K` polje karakteristike različite od 2 i 3, te neka je `f(x)` = x^3 + ax + b (gdje su a,b 	&#1013; K) kubni polinom bez višestrukih korijena. Eliptička krivulja E nad K je skup svih točaka (x,y) ∈ K × K koje zadovoljavaju jednadžbu y2 = x3 + ax + b, zajedno s još jednim elementom kojeg označavamo s O i zovemo "točka u beskonačnosti".


Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
