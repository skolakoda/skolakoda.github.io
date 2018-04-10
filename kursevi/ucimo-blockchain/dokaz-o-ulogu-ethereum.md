---
title: Dokaz o ulogu u Ethereum sustavu
layout: lekcija-blockchain
permalink: /dokaz-o-ulogu-ethereum
---

Dokaz o ulogu u funkcionira tako da se nasumično odredi “validator” – vlasnik dovoljno Ethera da bi ga se smatralo vjerodostojnim. Čim više Ethera potencijalni validator ima, i čim je taj Ether dulje na računu kandidata, tim više šanse ima. Taj validator tada ulaže svoj Ether (koliko god, ali najmanje 1000) i garantira da će istinito potvrditi transakcije. Njegov Ether je pritom zaključan u sustavu na nekoliko mjeseci. Kad stigne nova transakcija, validator je ovjerava i šalje na mrežu svim drugim validatorima koji potvrđuju tu informaciju. Za taj posao, validator uzima troškove provizije.

Zbog nestanka potrebe za pogađanjem kombinacija, procesuiranje je brzo i lako, pa je lako generirati lažne transakcije. No, jer validatori moraju potvrditi informacije jedni drugima, gotovo je nemoguće da će većina validatora odlučiti da je transakcija malicioznog validatora vjerodostojna. Da bi se to desilo, skupina koja validira ilegalnu transakciju mora ne samo biti istovremeno nasumično odabrana, nego i imati više od 51% Ethera u skupu tih validatora, što je ogromna količina novca.

Ako je validator u prekršaju, on gubi svoj ulog – time varanje postaje izuzetno skup sport. Netko tko ima dovoljno novca uloženog u Ethereum ekosustav da postane validator nema razloga da taj sustav sabotira, jer njegov novac time gubi vrijednost (zbog skandala koji je sam uzrokovao ako uspije, ili gubitka uloga ako nije).

## Prednosti

Prednosti ovog načina rada su:

- brzina obrade transakcija
- nije štetno za okoliš, za razliku od dokaza rada
- nije ranjivo od strane države – ogromne količine struje nisu potrebne
- može se odrađivati na manjim i slabijim uređajima, što dramatično pospješuje ulaz kriptovalute u širu javnost.

## Nedostaci

Nedostaci su:

- nema eksternih faktora. Budući da se za ulog jamči samim dijelom sustava (npr. da bi se verificirale transakcije Ethereum blockchaina potrebno je uložiti Ether), cijela igra je “interna”. To znači da netko s dovoljno sredstava da uloži isključivo u uništenje tog sustava (banke, vlade, itd.) može žrtvovati samo novčanu vrijednost za efektivni napad na sustav. To se razlikuje od Bitcoina kod kojeg je potrebno uložiti trud, znanje, hardver, struju, i vrijeme – sve eksterni faktori.

- bogatiji se bogate. Npr. oni koji najdulje imaju najviše Ethera (boduje se starost Ethera na računu i količina) imaju i najviše šanse da postaju validatori, i time najviše šanse da služe dodatne Ethere na svojoj trenutnoj zalihi. To je drukčije od “bogatiji se bogate” sustava kod Bitcoina, u kojem bogatiji moraju uložiti svoje bogatstvo u vanjski faktor – struju i hardver – i time imaju malo opipljiviji ulog koji će ih više ozlijediti ako sabotiraju mrežu.

Ovakav sistem je često na meti kritike da je zapravo centralizovan, jer što je neko duže na mreži ima veći udeo, te samim tim ima veću kontrolu nad mrežom.


Izvor: bitfalls.com, *[Po čemu se razlikuju Proof of Work, Proof of Stake, i Delegated PoS metoda?](https://bitfalls.com/hr/2017/10/23/whats-the-difference-between-proof-of-work-pow-proof-of-stake-pos-and-delegated-pos/)*
