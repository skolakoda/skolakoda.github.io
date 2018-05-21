---
title: Imenovanje promenljivih
layout: lekcija-c
permalink: /imenovanje-promenljivih
---

![](https://cdn.tutsplus.com/net/uploads/legacy/516_code/preview.jpg)

**Imenovanje promenljivih veoma je važno za razumljivost programa i sve je važnije što je program duži. Imena promenljivih i funkcija (pa i datoteka) treba da sugerišu njihovu ulogu i tako olakšaju razumevanje programa.**

## Imenovanje globalnih promenljivih

Globalne promenljive, strukture i funkcije treba da imaju opisna imena, potencijalno sačinjena od više reči. U kamiljoj notaciji (popularnoj među Java i C++ programerima), imena od više reči zapisuju se tako što svaka nova reč (sem eventualno prve) počinje velikim slovom, na primer, `brojKlijenata`. U notaciji sa podvlakama (popularnoj među C programerima), sve reči imena se pišu malim slovima a reči su razdvojene podvlakama, na primer, `broj_klijenata`. 

Imena makroa i konstanti pišu se obično svim velikim slovima, a imena globalnih promenljivih počinju velikim slovom.

## Imenovanje lokalnih promenljivih

Lokalne promenljive, a posebno promenljive koje se koriste kao brojači u petljama treba da imaju kratka i jednostavna, a često najbolje, jednoslovna imena – jer se razumljivost lakše postiže sažetošću. Imena za brojače u petljama su često `i`, `j`, `k`, za pokazivače `p` i `q`, a za niske `s` i `t`. Preporuka je i da se lokalne promenljive deklarišu što kasnije u okviru funkcije i u okviru bloka u kojem se koriste (a ne u okviru nekog šireg bloka). 

Jedan, delimično šaljiv, savet za imenovanje (i globalnih i lokalnih) promenljivih kaže da broj karaktera u imenu promenljive treba da zavisi od broja linija njenog dosega i to tako da bude proporcionalan logaritmu broja linija njenog dosega.

## Imenovanje funkcija

Za promenljive i funkcije nije dobro koristiti generička imena kao `rezultat`, `izracunaj()`, `uradi()` i slično, već sugestivnija, kao što su, na primer, `kamata`, `izracunaj_kamatu()`, `odstampaj_izvestaj_o_kamati()`. 

Imena funkcija dobro je da budu bazirana na glagolima, na primer, `izracunaj_kamatu()`, umesto `kamata()` i `get_time()` umesto `time()`. Za funkcije koje vraćaju istinitosnu vrednost, ime treba da jasno sugeriše u kom slučaju se vraća vrednost tačno, na primer, bolje je ime `is_prime()` nego `check_prime()`.

## Prefiks na osnovu tipa

Mnoge promenljive označavaju neki broj entiteta (na primer, broj klijenata, broj studenata, broj artikala) i za njih se može usvojiti konvencija po kojoj imena imaju isti prefiks ili sufiks (na primer, `br_studenata` ili `num_students`. U ovom smislu, znatno dalje ide mađarska notacija. Postoje zapravo dve varijante mađarske notacije: sistemska i aplikacijska. U sistemskoj mađarskoj notaciji ime promenljive počinje uvek slovom ili slovima koja odgovaraju njenom tipu, na primer, `uBrojKlijenata` može da bude promenljiva tipa `unsigned int`.

Ideja je da se na ovaj način tip promenljive vidi na svakom mestu gde se ona koristi (pa ne mora da se proverava njena deklaracija). U aplikacijskoj mađarskoj notaciji, ime promenljive se kreira na osnovu njene uloge u programu, a ne na osnovu tipa. Na primer, imena promenljivih mogu da počinju sa `rw` i `col` i označavaju poziciju kurzora u dokumentu. Jedan par takvih promenljivih mogu da budu, na primer, `rwOutputWindow` i `colOutputWindow`. Ove dve promenljive su istog tipa, ali nema smisla vrednost jedne pridružiti drugoj i to sugerišu izabrani prefiksi (te se lako mogu primetiti neka pogrešna izračunavanja). 

Mađarska notacija (posebno „sistemska“) ima mnogo kritičara (uključujući Torvaldsa) koji smatraju da je informacija o tipovima ionako poznata kompilatoru a da dodatni prefiksi više zbunjuju programera nego što mu pomažu.

## Maternji vs. engleski jezik

I programeri kojima to nije maternji jezik, iako to nije zahtev projekta, često imenuju promenljive i funkcije na osnovu reči engleskog jezika. To je posledica istorijskih razloga i dominacije engleskog jezika u programerskoj praksi, kao i samih ključnih reči skoro svih programskih jezika (koje su na engleskom). Prihvatljivo je (ako nije zahtev projekta drugačiji) imenovanje i na maternjem jeziku i na engleskom jeziku — jedino je neprihvatljivo mešanje ta dva. 

Imenovanje na bazi engleskog i komentari na engleskom mogu biti pogodni ukoliko postoji i najmanja mogućnost da se izvorni program koristi u drugim zemljama, ili od strane drugih timova, ili da se učini javno dostupnim i slično.

## Test razumljivosti

Kvalitet imenovanja promenljivih i funkcija može se „testirati“ na sledeći zanimljiv način: ako se kôd može pročitati preko telefona tako da ga sagovornik na drugoj strani razume, onda je imenovanje dobro.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
