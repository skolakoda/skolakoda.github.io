---
title: Dokaz o ulogu
layout: lekcija-blockchain
permalink: /dokaz-o-ulogu
---

**Dokaz o ulogu (*proof of stake*) je još jedan algoritam za postizanje konsenzusa o trenutnom stanju blockchaina među partnerima u distribuiranom sustavu.**

Nastao je od strane kriptovaluta koje su konkurencija Bitcoinu, nešto kasnije od *proof-of-work* algoritma. Mnogi informatički stručnjaci koji se bave proučavanjem kriptovaluta kao najveću zamjerku *proof-of-work* algoritma navode veliku potrošnju računalne snage i mogućnost rudarenja takozvanih vanjskih partnera. Pod vanjskim partnerom se podrazumijeva partner koji ne sudjeluje u stvaranju zapisa u blockchainu, već samo posjeduje dovoljno dobro računalo da bi mogao biti konkurentan u stvaranju novih blokova. 

*Proof-of-stake* algoritam pokušava eliminirati tu slabost sužavanjem kruga partnera koji imaju pravo generiranja novih blokova i manjom težinom algoritma hashiranja, koju ti partneri moraju zadovoljiti kod generiranja novog bloka.

Prosto rečeno, kod ovog metoda ne postoji rudarenje, već dokaz o ulogu. Da bi se sprečilo varanje, čvorovi moraju zaključati deo sredstava u virtuelni sef. Mreža po sistemu lutrije bira učesnika da potvrdi transakcije na osnovu njegovog uloga. U slučaju da čvor pokuša da prevari sistem, ulog će mu biti oduzet. 

Postoji više varijanti ovog algoritma. 

## Primjer: Peercoin

Dok dokaz o radu podrazumijeva korištenje računalne snage kako bi se dodao novi blok u blockchain, dokaz o ulogu omogućava kreiranje novog bloka onim korisnicima koji posjeduju određenu količinu novca u sustavu. Kao i u slučaju dokaza o radu, validatori se natječu tko će prvi izračunati zadovoljavajući hash. Generiranje novog bloka uključuje slanje Peercoin-ova samom sebi, kako bi se dokazalo da validator posjeduje određeni iznos novca.

Najvažnija veličina koja se koristi u Peercoin sustavu je **starost novca**. Starost novca je definirana kao umnožak količine novca i dana koji taj novac stoji u novčaniku partnera nepotrošen. Ako neki partner u sustavu posjeduje 80 Peercoin-ova koje nije potrošio u proteklih 10 dana tada je starost tog novca 800 dana. U trenutku kada partner uplati taj novac nekom drugom partneru u sustavu (ili sam sebi) kažemo da je starost novca uništena odnosno starost je jednaka 0. Kako bi se lakše utvrdila starost novca svaka transakcija u Peercoin sustavu mora sadržavati vrijeme izvršenja.

Kod dokaza o ulogu, čvorovi koji imaju mogućnost uključivanja novih blokova u blockchain nazivaju se još i validatori. Validatori na neki način daju svoj novac kao polog za obavljanje *proof-of-stake* algoritma. Postoji minimalni iznos jedinica kriptovalute koji čvor treba posjedovati kako bi postao kandidat za validatora. Taj minimalni iznos se naziva `cilj` i u sustavu se prilagođava tako da vrijeme između dodavanja dva nova bloka bude otprilike jednako. Primijetimo, kod *proof-of-work* algoritma `cilj` je predstavljao broj u heksadecimalnom zapisu pomoću kojeg se definirala težina izračunavanja zadovoljavajućeg hash-a.

Kod *proof-of-stake* algoritma, broj od kojeg zadovoljavajući hash mora biti manji se mijenja kod svakog novog bloka i za svaki čvor je drugačiji. Glavnu ulogu u definiranju težine pronalaska zadovoljavajućeg hash-a imaju prije spomenuti `cilj` i starost novca prema sljedećoj formuli:


```
zadovoljavajući hash < starost novca * cilj.
```

Pogledajmo primjer kada se dva validatora V1 i V2 natječu u kreiranju zadovoljavajućeg hash-a. Neka validator V1 u novonastali blok uključuje transakciju kojom sebi uplaćuje 100 Percoin-ova starih 10 dana, a validator V2 kao dokaz da posjeduje dovoljno novaca za rudarenje sebi uplaćuje 900 Peercoin-ova starosti 7 dana. Budući da je cilj u datom trenutku jednak za sve validatore, V1 mora proizvesti hash manji od broja `1000*cilj`, a V2 hash manji od `6300*cilj`. Naravno, V2 ima puno veće šanse za pobjedu u ovoj rundi dodavanja bloka jer se natjecao s novcem veće starosti. Ako validator V2 zaista pobjedi i njegov blok bude uključen u blockchain transakcija kojom sam sebi uplaćuje 900 Peercoin-ova također postaje valjana i taj novac sada ima starost 0. Uništavanje starosti novca ima za posljedicu to da validator V2 gotovo pa nema šanse za pobjedu pri uključivanju sljedećih nekoliko blokova. V2 mora prepustiti ostalim partnerima kreiranje novih blokova, dok ne prođe dovoljno vremena da starost njegovog novca ponovo bude konkurentna.

Starost novca u Peercoin sustavu ima još jednu ulogu. Ako dođe do račvanja u blockchainu, ukupna starost novca u cijelom lancu određuje na koju granu treba nastaviti dodavati blokove. Kako svaka transakcija u bloku sadrži informaciju o starosti novca, sumiranjem tih vrijednosti lako je izračunati ukupnu starost novca po bloku i u cijelom lancu. Lanac s najvećim zbrojem čvorovi u sustavu izabiru kao glavni lanac.

## Primjer: Ethereum

Dokaz o ulogu funkcionira tako da se nasumično odredi “validator” – vlasnik dovoljno Ethera da bi ga se smatralo vjerodostojnim. Čim više Ethera potencijalni validator ima, i čim je taj Ether dulje na računu tog kandidata, tim više šanse ima. Taj validator tada ulaže svoj Ether (koliko god, ali najmanje 1000) i garantira da će istinito potvrditi transakcije. Njegov Ether je pritom zaključan u sustavu na nekoliko mjeseci. Kad stigne nova transakcija, validator je ovjerava i šalje na mrežu svim drugim validatorima koji potvrđuju tu informaciju. Za taj posao, validator uzima troškove provizije.

Zbog nestanka potrebe za pogađanjem kombinacija, procesuiranje je brzo i lako, pa je lako generirati lažne transakcije. No, jer validatori moraju potvrditi informacije jedni drugima, gotovo je nemoguće da će većina validatora odlučiti da je transakcija malicioznog validatora vjerodostojna. Da bi se to desilo, skupina koja validira ilegalnu transakciju mora ne samo biti istovremeno nasumično odabrana (matematički nemoguće), nego i imati više od 51% Ethera u skupu tih validatora, što je ogromna količina novca.

Ako je validator u prekršaju, on gubi svoj ulog – time varanje postaje izuzetno skup sport. Netko tko ima dovoljno novca uloženog u Ethereum ekosustav da postane validator nema razloga da taj sustav sabotira, jer njegov novac time gubi vrijednost (zbog skandala koji je sam uzrokovao ako uspije, ili gubitka uloga ako nije).

### Prednosti

Prednosti ovog načina rada su:

- brzina obrade transakcija
- nije štetno za okoliš za razliku od dokaza rada
- nije ranjivo od strane države – ogromne količine struje nisu potrebne
- može se odrađivati na manjim i slabijim uređajima, jer se ne treba preuzeti cijeli blockchain od nekoliko stotina gigabajta, i ujedno nema tolike potrošnje struje pa se lako odrađuje validacija i na mobilnim uređajima. To dramatično pospješuje ulaz kriptovalute u širu javnost.

### Nedostaci

Nedostaci su:

- nema eksternih faktora. Budući da se za ulog jamči samim dijelom sustava (npr. da bi se verificirale transakcije Ethereum blockchaina potrebno je uložiti Ether), cijela igra je “interna”. To znači da netko s dovoljno sredstava da uloži isključivo u uništenje tog sustava (banke, vlade, itd.) može žrtvovati samo novčanu vrijednost za efektivni napad na sustav. To se razlikuje od Bitcoina kod kojeg je potrebno uložiti trud, znanje, hardver, struju, i vrijeme – sve eksterni faktori.

- bogatiji se bogate. Npr. oni koji najdulje imaju najviše Ethera (boduje se starost Ethera na računu i količina) imaju i najviše šanse da postaju validatori, i time najviše šanse da služe dodatne Ethere na svojoj trenutnoj zalihi. To je drukčije od “bogatiji se bogate” sustava kod Bitcoina, u kojem bogatiji moraju uložiti svoje bogatstvo u vanjski faktor – struju i hardver – i time imaju malo opipljiviji ulog koji će ih više ozlijediti ako sabotiraju mrežu.

Ovakav sistem je često na meti kritike da je zapravo centralizovan, jer što je neko duže na mreži ima veći udeo, te samim tim ima veću kontrolu nad mrežom.


Izvori: 
- Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
- [Po čemu se razlikuju Proof of Work, Proof of Stake, i Delegated PoS metoda?](https://bitfalls.com/hr/2017/10/23/whats-the-difference-between-proof-of-work-pow-proof-of-stake-pos-and-delegated-pos/)
