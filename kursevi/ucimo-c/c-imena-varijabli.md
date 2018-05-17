---
title: Imena varijabli u jeziku C
layout: lekcija-c
permalink: /c-imena-varijabli
---

Napomenimo kako postoje neka ograničenja vezana za imena varijabli i konstanti. **Ime se sastoji od slova i znamenki pri čemu prvi znak mora biti slovo**. Podcrta (`_` - *underscore*) se uvažava kao slovo što je ponekad korisno jer povećava čitljivost kod varijabli s dugim imenima. Ipak, ne počinjite imena varijabli podcrtom jer rutine iz standardne biblioteke često koriste takva imena. **Velika i mala slova se razlikuju**, pa `x` i `X` nisu isto ime. Praksa je u C-u da se mala slova rabe za imena varijabli, a velika slova za simboličke konstante.

Barem prvih 31 znakova nekog imena jesu bitni znakovi. Za imena funkcija i vanjskih varijabli broj mora biti manji od 31 jer se imena vanjskih varijabli mogu koristiti prevoditelja na strojni jezik (*assembler*) i učitavača (*loader*) nad kojima program nema kontrolu. Kod vanjskih imena standard garantira jednoznačnost samo za prvih 6 znakova. Ključne riječi kao što su `if`, `else`, `int`, `float`, itd. su **rezervirane** i ne mogu se upotrebljavati kao imena varijabli. One moraju biti pisane malim slovima.

Preporuka je koristiti takva imena iz kojih je vidljiva namjena varijable, a da nisu međusobno slična u tipografskom smislu. Naša je politika koristiti kratka imena za lokalne varijable, posebice za petlje, a duža za vanjske varijable.


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
