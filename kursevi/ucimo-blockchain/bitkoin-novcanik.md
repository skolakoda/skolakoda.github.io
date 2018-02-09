---
title: Bitkoin novčanik
layout: lekcija-blockchain
permalink: /bitkoin-novcanik
---

**Novčanik u Bitcoin sustavu je računalni program koji služi za primanje i slanje bitcoina.**

Uloga novčanika je pohrana privatnih ključeva korisnika, prikaz transakcija korištenih za slanje ili primanje bitcoina pomoću adrese korisnika, te prikaz količine bitcoina koje korisnik posjeduje. Bitcoine iz jednog novčanika u drugi prebacujemo Bitcoin transakcijama. Novčanik je moguće instalirati na računalo, pametni telefon ili tablet. Oni su također dostupni kao web aplikacije, kojima je moguće pristupiti sa svakog uređaja povezanog na internet.

Upoznajmo najprije najvažnije pojmove za funkcioniranje novčanika. To su privatni ključ, javni ključ, adresa i transakcija. Privatni ključ je jednostavno rečeno broj koji možemo generirati na razne načine. Da bismo mogli deﬁnirati vezu između privatnog i javnog ključa deﬁnirajmo najprije eliptičku krivulju, vrstu krivulje često korištenu kriptograﬁji.

## Eliptička krivulja

{:.uokvireno}
Definicija: *Neka je K polje karakteristike različite od 2 i 3, te neka je f(x) = x<sup>3</sup> + ax + b (gdje su a,b ∈ K) kubni polinom bez višestrukih korijena. **Eliptička krivulja** E nad K je skup svih točaka (x,y) ∈ K × K koje zadovoljavaju jednadžbu y<sup>2</sup> = x<sup>3</sup> + ax + b, zajedno s još jednim elementom kojeg označavamo s O i zovemo "točka u beskonačnosti"*.

Polje je algebarska struktura, a karakteristika polja K je najmanji prirodni broj n takav da je 1 + 1 + ... + 1 = n · 1 = 0, gdje su 0 i 1 neutralni elementi za zbrajanje, odnosno množenje u K. Eliptičke krivulje se koriste pri generiranju javnog ključa iz privatnog.

Najčešće se generiranje privatnog ključa svodi na nasumični odabir broja između 1 i 2<sup>256</sup> na koji primjenjujemo SHA-256 hash funkciju. Jednom kad smo generirali privatni ključ možemo pomoću njega i eliptičke krivulje izračunati javni ključ.

Bitcoin sustav koristi eliptičku krivulju zadanu jednadžbom:

```
(y^2 = x^3 + 7) mod p
```

gdje je

```
p= 2^256 - 2^32 - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 - 1
```

Uz zadanu krivulju vežemo točku G koja se naziva generator eliptičke krivulje. Ukoliko privatni ključ označimo s `pk` tada pripadajući javni ključ `jk` računamo po formuli:

```
jk = pk*G
```

## Javni ključ

Dakle **javni ključ** `jk` je točka na krivulji dobivena matematičkom operacijom množenja točke `G` skalarom `pk`, što je zapravo zbrajanja točke `G` sa samom sobom `pk` puta. Nakon toga pomoću kompozicije nekoliko hash funkcija, među kojima je i SHA-256 funkcija, iz javnog ključa možemo računamo Bitcoin adresu `A`. Ako kompoziciju hash funkcija označimo s H<sub>adr</sub>, adresu `A` računamo prema sljedećoj formuli:

A = H<sub>adr</sub>(jk)

## Privatni ključ

**Privatni ključ** koristi se pri kreiranju transakcije. Može biti pohranjen u novčaniku u različitim formatima. WIF (*Wallet Import Format*) je jedan od najčešćih formata zapisa privatnog ključa. Pomoću privatnog ključa korisnik potvrđuje da je upravo on vlasnik određene adrese. Stoga možemo reći da bitcoini na nekoj adresi pripadaju osobi koja posjeduje privatni ključ za tu adresu.

Važno je napomenuti da su operacija množenja na eliptičkoj krivulji i hash funkcije jednosmjerne odnosno nemaju inverz. Tako je u svakom trenutku lako iz privatnog ključa generirati javni i iz javnog ključa generirati adresu. No, ne postoji način da se pomoću adrese generira privatni ili javni ključ.

## Transakcija

**Transakcija** je zapis u Bitcoin mreži kojim se određeni iznos bitcoina prenosi s jedne adrese (ili više njih) na drugu adresu (ili više njih). Transakcije su javne i moguće ih je slobodno pregledavati, primjerice pomoću blockchain pretraživača dostupnih na internetu. One nedvosmisleno potvrđuju da je određena količina bitcoina prenesena s jedne adrese na drugu. Novčanik omogućava korisniku da kreira novu transakciju s adrese koja pripada tom novčaniku. Da bi se transakcija izvršila, potrebno je da korisnik navede adresu primatelja i iznos koji želi uplatiti. Uz transakciju vežemo ulaz, koji se sastoji od prethodnih transakcija uplaćenih na adresu korisnika. Posjedovanjem privatnog ključa korisnik potvrđuje da određena svota novca pripada njemu i da te transakcije može koristiti kao ulaz za novu transakciju. Svaka transakcija ima i svoj izlaz, pomoću kojeg se definira koji se dio od ukupne svote novca prebacuje na adresu primatelja, a koji dio ostaje na adresi pošiljatelja.


Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
