---
title: Razvoj Bitkoin novčanika
layout: lekcija-blockchain
permalink: /bitkoin-novcanik
---

**Novčanik u Bitcoin sustavu je računalni program koji služi za primanje i slanje bitcoina.**

Uloga novčanika je pohrana privatnih ključeva korisnika, prikaz transakcija korištenih za slanje ili primanje bitcoina pomoću adrese korisnika, te prikaz količine bitcoina koje korisnik posjeduje. Bitcoine iz jednog novčanika u drugi prebacujemo Bitcoin transakcijama. Novčanik je moguće instalirati na računalo, pametni telefon ili tablet. Oni su također dostupni kao web aplikacije, kojima je moguće pristupiti sa svakog uređaja povezanog na internet.

## Osnovni pojmovi

Upoznajmo najprije najvažnije pojmove za funkcioniranje novčanika. To su privatni ključ, javni ključ, adresa i transakcija. Privatni ključ je jednostavno rečeno broj koji možemo generirati na razne načine. Da bismo mogli deﬁnirati vezu između privatnog i javnog ključa deﬁnirajmo najprije eliptičku krivulju, vrstu krivulje često korištenu kriptograﬁji.

### Eliptička krivulja

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

### Javni ključ

Dakle **javni ključ** `jk` je točka na krivulji dobivena matematičkom operacijom množenja točke `G` skalarom `pk`, što je zapravo zbrajanja točke `G` sa samom sobom `pk` puta. Nakon toga pomoću kompozicije nekoliko hash funkcija, među kojima je i SHA-256 funkcija, iz javnog ključa možemo računamo Bitcoin adresu `A`. Ako kompoziciju hash funkcija označimo s H<sub>adr</sub>, adresu `A` računamo prema sljedećoj formuli:

A = H<sub>adr</sub>(jk)

### Privatni ključ

**Privatni ključ** koristi se pri kreiranju transakcije. Može biti pohranjen u novčaniku u različitim formatima. WIF (*Wallet Import Format*) je jedan od najčešćih formata zapisa privatnog ključa. Pomoću privatnog ključa korisnik potvrđuje da je upravo on vlasnik određene adrese. Stoga možemo reći da bitcoini na nekoj adresi pripadaju osobi koja posjeduje privatni ključ za tu adresu.

Važno je napomenuti da su operacija množenja na eliptičkoj krivulji i hash funkcije jednosmjerne odnosno nemaju inverz. Tako je u svakom trenutku lako iz privatnog ključa generirati javni i iz javnog ključa generirati adresu. No, ne postoji način da se pomoću adrese generira privatni ili javni ključ.

### Transakcija

**Transakcija** je zapis u Bitcoin mreži kojim se određeni iznos bitcoina prenosi s jedne adrese (ili više njih) na drugu adresu (ili više njih). Transakcije su javne i moguće ih je slobodno pregledavati, primjerice pomoću blockchain pretraživača dostupnih na internetu. One nedvosmisleno potvrđuju da je određena količina bitcoina prenesena s jedne adrese na drugu. Novčanik omogućava korisniku da kreira novu transakciju s adrese koja pripada tom novčaniku. Da bi se transakcija izvršila, potrebno je da korisnik navede adresu primatelja i iznos koji želi uplatiti. Uz transakciju vežemo ulaz, koji se sastoji od prethodnih transakcija uplaćenih na adresu korisnika. Posjedovanjem privatnog ključa korisnik potvrđuje da određena svota novca pripada njemu i da te transakcije može koristiti kao ulaz za novu transakciju. Svaka transakcija ima i svoj izlaz, pomoću kojeg se definira koji se dio od ukupne svote novca prebacuje na adresu primatelja, a koji dio ostaje na adresi pošiljatelja.

## Implementacija novčanika

Implementacija novčanika u sklopu ovog rada koristi open-source projekte `bitcore` i `bitcore-explorers`. Pomoću Node.js JavaScript platforme i modula bitcore i bitcore-explorers, koriste se metode za kreiranje ključeva, stvaranje transakcija, pretraživanje blockchaina i slanje transakcija u Bitcoin mrežu. Bitcoin je za potrebe programera razvio testni sustav pod nazivom `testnet` koji funkcionira na isti način kao i stvarni Bitcoin sustav, samo što bitcoinovi na toj mreži nemaju vrijednost.

Aplikacija je napravljena na modelu klijet-poslužitelj. Klijent (internet preglednik) komunicira s dva poslužitelja: Node.js poslužiteljem koji pruža metode implementirane pomoću bitcore i bitcore-explorers modula i Apache poslužiteljem na koji sprema podatke o svojim korisnicima.

### Generiranje novog privatnog ključa

Da bi se koristile usluge aplikacije korisnik se najprije mora registrirati. Formu za registraciju možemo vidjeti na slici:

![](/images/projekti/novcanik-registracija.png)

Korisnik unosi podatke za registraciju. Pritiskom na gumb `Registriraj se`, na strani klijenta obavlja se validacija podataka. Ako su podaci ispravni klijent šalje zahtjev pomoću metoda klase `XMLHttpRequest()` i traži od Node.js poslužitelja generiranje novog privatnog ključa.

Kod za generiranje novog ključa na strani Node.js poslužitelja izgleda ovako:

```js
var bitcore = require('bitcore');
var rand_buffer = bitcore.crypto.Random.getRandomBuffer(32);
var rand_number = bitcore.crypto.BN.fromBuffer(rand_buffer);
var privateKey = new bitcore.PrivateKey(rand_number, 'testnet');
var privateKeyWif = privateKey.toWIF();
```

### Enkripcija javnog ključa i SHA-256 hash

Po primitku novog privatnog ključa, klijent registrira novog korisnika na bazi. Podaci koji se spremaju na bazu su korisničko ime, hash korisničkog imena i lozinke dobiven SHA-256 algoritmom i kriptirani javni ključ potpisan s lozinkom pomoću AES (*Advanced Encryption Standard*), kriptografskog algoritma za zaštitu digitalnih podataka.

Kriptirani javni ključ i *hash* dobivamo pomoću sljedećeg JavaScript koda na strani klijenta:

```js
var hash = asmCrypto.SHA256.hex(uname.value + pass.value);
var key = aesjs.util.convertStringToBytes(pass.value);
// privateKeyWif dobiven od strane Node .js posluzitelja
var textBytes = aesjs.util.convertStringToBytes(privateKeyWif);
var aesCtr = new aesjs.ModeOfOperation.ctr(key, newaesjs.Counter(5));
var encryptedBytes = aesCtr.encrypt(textBytes);
var encryptedText = aesjs.util.convertBytesToString(encryptedBytes);
```

Ako je registracija uspješno prošla. Korisnik je spreman za prijavu.

![](/images/projekti/novcanik-prijava.png)

### Dekripcija privatnog ključa

Nakon popunjavanja podataka, pritiskom na gumb `Prijava`, klijent traži od Apache poslužitelja podatke o tom korisniku. Ponovo računa hash pomoću upisanog korisničkog imena i lozinke i ako se hash vraćen s baze podataka podudara s izračunatim korisnik može početi s korištenjem aplikacije. U ovom trenutku klijentu je potrebna Bitcoin adresa korisnika. Sada pomoću lozinke dekriptira privatni ključ:

```js
key = aesjs.util.convertStringToBytes(pass.value);
var aesCtr = new aesjs.ModeOfOperation.ctr(key, newaesjs.Counter(5));
// encriptedData podatak iz baze
var decryptedBytes = aesCtr.decrypt(encriptedData);
var pk = aesjs.util.convertBytesToString(decryptedBytes);
```

### Generiranje Bitcoin adrese

Pomoću privatnog ključa `pk` i klase `XMLHttpRequest()` traži se adresa koja odgovara tom privatnom ključu. Adresu generiramo metodama `bitcore` modula:

```js
var bitcore = require('bitcore');
// pk primljen od klijenta
var privateKey = bitcore.PrivateKey.fromWIF(pk);
var add = privateKey.toAddress();
```

### Sučelje aplikacije

Sučelje aplikacije možemo vidjeti na slici. Korisnik može pomoću sučelja doznati stanje svog računa ili izvršiti novu transakciju:

![](/images/projekti/novcanik-sucelje.png)

### Provjera stanja računa

Stanje računa je u aplikaciji prikazano u satoshi jedinicama kriptovalute Bitcoin. Vrijedi 1 BTC = 100,000,000 satoshi i to je najmanja jedinica na koju se dijeli valuta. Stanje računa je jedno od svojstava svake adrese u Bitcoin sustavu. Pomoću metode `address` `bitcore-explorers` modula dobivamo ga na sljedeći način:

```js
var Insight = require('bitcore-explorers').Insight;
var insight = new Insight('testnet');
insight.address(body.trim(), function(err, addInfo) {
  var stanjeRacuna = addInfo['balance'] + 'satoshis';
});
```

`Korisnik1` je novi korisnik Bitcoin testnet mreže i ne postoji ni jedna izvršena transakcija kojom bi se na njegovu adresu uplatio neki iznos. Pritiskom na gumb `Prikaži stanje računa` korisnik dobiva informaciju da stanje računa iznosi 0 satoshi, kao što možemo vidjeti na slici:

(dodati sliku)

### Dobivanje prvih bitcoinova

Budući da je Bitcoin `testnet` mreža osmišljena za razvoj i testiranje aplikacija i da novac na toj mreži nema nikakvu vrijednost, postoje internetske stranice koje kreiraju transakciju s adresa koje posjeduju `testnet` novac, na vašu adresu. To je način da `Korisnik1` dođe do svojih prvih bitcoinova. Na slici je prikazan zahtjev za dobivanjem `testnet` bitcoinova na adresu mwVDDCAcsQ3kaf86y56gNzQFTi6NdQrv65, koja pripada korisniku `Korisnik1`:

(dodati sliku)

Prva transakcija na adresu korisnika `Korisnik1` je izvršena. Na slici vidimo da je broj a33e7bb68283598cb58c20294e4d7608e112af788459beb813ead420d8cd30cc id te transakcije. Pomoću tog podatka možemo korištenjem bilo kojeg `testnet` blockchain pretraživača dostupnog na internetu pronaći dodatne informacije o transakciji. Transakciju možemo pronaći gotovo istog trenutka kada je kreirana. No, prisjetimo se da je zbog proof-of-work algoritma koji koristi Bitcoin sustav potrebno neko vrijeme da transakcija bude potvrđena odnosno upisna u novi blok. Slika 5.6 prikazuje informacije o transakciji dobivenih pomoću Blocktrail `testnet` blockchain pretraživača.

Primijetimo da je ukupan ulaz transakcije nešto već od ukupnog izlaza. Razlog tome je taj što se na svaku transakciju pridodaje naknada koja će kasnije biti dodijeljena rudaru koji zapisuje novi blok u blockchain. Transakcija sa slike sadrži dva izlaza i je jedan od njih uplaćen na adresu mwVDDCAcsQ3kaf86y56gNzQFTi6NdQrv65. Ako sada ponovo u našoj novčanik aplikaciji zatražimo prikaz stanja korisnik `Korisnik1` dobivamo rezultat sa slike 5.7

(dodati sliku)

### Kreiranje nove transakcije

`Korisnik1` je sada vlasnik 203125000 testnih satoshija odnosno 2,03125 testnih
BTC-a. Preostaje nam pokazati kako aplikacija Jednostavni novčanik kreira novu
transakciju. Pretpostavimo da, iz nekog razloga `Korisnik1` želi uplatiti iznos od
10000000 satoshi (0,1 BTC) na adresu n3E6TeYixEedVLjkJ3q5X4amnaEVC99DbD. On
tada popunjava formu u aplikaciji na način na koji je prikazano na slici 5.8 i pritišće
gumb Izvrši transakciju.

(dodati sliku)

### Potvrda nove transakcije

Aplikacija nakon toga preusmjerava korisnika na novu formu sa slike 5.9. Od
korisnika se traži da potvrdi svoju transakciju lozinkom. `Korisnik1` provjerava jesu li
podaci točni, pa upisuje lozinku i pritiskom na gumb Izvrši transakciju kreira novu
transakciju na Bitcoin `testnet` mreži.

(dodati sliku)

### Kreiranje nove transakcije

Klijentski dio aplikacije nakon što je korisnik ponovo upisao svoju lozinku može
dekriptirati privatni ključ korisnika i poslati zahtjev za kreiranjem nove transakcije
Node.js poslužitelju. Podaci koje mora priložiti uz taj zahtjev su adresa pošiljatelja, adresa primatelja, iznos transakcije i privatni ključ pošiljatelja. Pogledajmo
kako izgleda isječak koda na strani Node.js poslužitelja koji kreira transakciju i šalje
je difuzijom (broadcast) u Bitcoin mrežu. Za izvršenje tog koda opet su potrebni
moduli bitcore i bitcore-explorers. Svaka transakcija kako ulaz prima prijašnje
transakcije pošiljatelja, pa je najprije potrebno pretražiti blockchain i pronaći takve
transakcije metodom getUnspentUtxos. Nakon toga se zadaju iznos i adresa primatelja i transakcija se potpisuje privatnim ključem pošiljatelja.

```js
var bitcore = require('bitcore');
var Insight = require('bitcore-explorers').Insight;
var insight = new Insight('testnet');

insight.getUnspentUtxos(parsedData['addPos'], function(err, trPos) {
  var tx = bitcore.Transaction();
  tx.from(trPos);
  tx.to(parsedData['addPrim'], parseInt(parsedData['iznos']));
  tx.change(parsedData['add']);
  tx.sign(parsedData['privateKey']);
  tx.serialize();

  insight.broadcast(tx, function(err, returnedTxId) {
  var toReturn = 'Transakcija uspjesno izvrsena . '
    + 'Mozete je potraziti u bilo kojem blockchain exploreru : '
    + returnedTxId;
  });
});
```

Ako je sve prošlo bez greške poslužitelj će klijentu vratiti poruku koja sadrži id nove
transakcije. Klijent tu poruku ispisuje korisniku

(dodati sliku)

Zaista, transakcija iz naše aplikacije poslana je na Bitcoin testnet mrežu. Što dokazuje slika 5.11 i činjenica da je možemo prikazati u blockchain pretraživaču. Također,
slika 5.12 prikazuje stanje računa korisnika `Korisnik1` umanjeno je za iznos transakcije
i transakcijsku naknadu.

(dodati sliku)


http://sites.psu.edu/symbolcodes/codehtml/#math
https://www.keynotesupport.com/websites/greek-letters-symbols.shtml

Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
