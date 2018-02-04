---
title: Kriptografske heš funkcije
layout: lekcija-blockchain
permalink: /kriptografske-hash-funkcije
---

**Da bismo mogli proučavati blockchain kao strukturu podataka i blockchain kao tehnologiju najprije moramo definirati što su to kriptografske hash funkcije.**

Kriptografska hash funkcija je posebna klasa hash funkcije koja ima određena svojstva koja je čine prikladnom za uporabu u kriptografiji. Općenito, hash funkcija je bilo funkcija koja za ulaz ima podatke proizvoljne veličine, a kao izlaz vraća podatke fiksne veličine. Vrijednost hash funkcije često naziva hash vrijednost ili kratko *hash* dok se ulazni podatak naziva poruka. Kriptografske hash funkcije su jednosmjerne odnosno nemaju inverz. Jedini način da se kreiraju ulazni podaci kriptografske hash funkcije iz izlaza je pokušati pretraživanje *brute-force* algoritmom, isprobavanjem svih mogućih vrijednosti ulaza kako bi se vidjelo koji od ulaza odgovara izlazu koji posjedujemo.

Poželjno je da kriptografska hash funkcija zadovoljava sljedećih 5 svojstava:
- Deterministička je. Vrijedi, ako su dva izlaza dobivena pomoću iste funkcije različiti, tada su i ulazi bili različiti.
- Lako i brzo se može izračunati vrijednost funkcije za bilo koji ulaz.
- Neisplativo je generirati ulaz za određeni izlaz, isprobavanjem svih mogućih vrijednosti ulaza.
- Mala promjena na ulaznim podacima treba promijeniti vrijednost funkcije, tako da se ne naslućuje nikakva sličnost između stare i nove vrijednosti funkcije.
- Postoji mogućnost kolizije, dobivanja istih vrijednosti za različite ulazne podatke, ali je neisplativo traženje dvaju takvih ulaznih podataka.

Kriptografske hash funkcije imaju mnogo primjena. Mogu se koristiti za implementaciju različitih struktura podataka poput tablica, lista ili stabala. Primjenjuju se za digitalno potpisivanje poruka između korisnika u nekom nesigurnom sustavu. Također pri radu s datotekama hash funkcije omogućuju stvaranje digitalnog "otiska prsta" (eng. *fingerprint*) na sadržaj datoteke. Pomoću "otiska prsta" lako je identificirati je li sadržaj datoteke promijenjen. Mnogi operacijski sustavi koriste kriptografske hash funkcije za enkripciju zaporki te su one sastavni dio mnogih mehanizama za provjeru autentičnosti. Kriptovalute takve funkcije koriste kako bi bez središnjeg autoriteta postigle siguran prijenos novca.


Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
