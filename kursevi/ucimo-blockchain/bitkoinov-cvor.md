---
title: Bitkoinov čvor
layout: lekcija-blockchain
permalink: /bitkoinov-cvor
---

U sustavu kriptovaluta i blockchaina, često ćete čuti rijeć “čvor” (*node*). u stvarnosti postoje dvije glavne vrste čvorova. 

## Validation Node

Jedan node je računalo koje vrti određeni softver. U Bitcoinovom slučaju, jedan node je Bitcoin program koji se spaja s drugim Bitcoin nodeovima, tj. drugim Bitcoin programima na istom računalu ili drugim računalima – bilo to preko ceste ili na drugom kraju svijeta. Postoji više vrsta i verzija Bitcoin softvera. Odabirom verzije softvera vlasnik node-a “glasa” za određene promjene protokola. Na primjer, ako se predloži da se limit od 21 miljun ukupno proizvedenih bitcoina pomakne na 42 miljuna, potrebna je većina mreže koja glasa “da” nadogradnjom softvera na određenu verziju. Većina mreže u ovom slučaju znači “većina nodeova u mreži”; odlukama u softveru pristupa se demokratski.

Ono kod čega taj koncept malo pada u vodu je relativno mali broj Bitcoin nodeova – trenutno ih je na svijetu samo 10000:

![](https://bitfalls.com/wp-content/uploads/2017/11/01-4.png)

… dok ih Ethereum – kriptovaluta koja je 5 godina mlađa – ima čak dvostruko više.

Ni jedan ni drugi broj, globalno gledano, nisu impresivni. Prema nekim računicama, pokrenuti Bitcoin node na AWS (Amazonovom cloud sustavu) košta otprilike $10 na mjesec. To znači da bi netko preuzeo većinu i napravio 10000 novih Bitcoin nodeova na AWSu potrebno mu je 100000 mjesečno, ili samo $1.2 miljuna godišnje – trivijalan iznos za velike igrače Bitcoin sustava koji su ušli dovoljno rano.

Bitno je napomenuti da validation nodes sami po sebi bivaju isključivo trošak svojim korisnicima – npr. Bitcoin Core zahtjeva 150 GB diskovnog prostora, 2GB RAM, i brzu internetsku vezu s dopuštenih barem 200 GB prometa uploada mjesečno. Validacijski nodeovi su volonterski, i služe za decentralizaciju sustava. Ako uzmemo u obzir da je bankarski sustav preuzeo financiranje razvoja Bitcoina, i da se cijena umjetno napuhava kriminalnim operacijama nije ni čudno da sve više i više ljudi gubi entuzijazam i prebacuje se na druge blockchaine i kriptovalute uvidjevši korumpiranu prirodu Bitcoin sustava. Broj nodeova pada – prije samo mjesec dana bilo ih je 20% više: 12000. S padom broja nodeova, preuzimanje većinske kontrole postaje sve vjerojatnije.

## Mining Node


Mining Node je softver koji rudari. To je softver koji koristi hardver vašeg ili iznajmljenog računala da bi pogađao kombinacije koje dovode do otkrića novog blocka. Mining node može raditi u kombinaciji s drugim mining nodeovima kako bi isti rudarili zajedno (pool mining).

Mining node također validira transakcije i time je istovremeno validation node. Budući da se danas većina rudarenja obavlja u poolovima, tj. zajednički tako da više nodeova šalje svoje pokušaje pogodaka u jedan, takav jedan pool se broji kao jedan node. Zbog tendencije da se novi rudari pridružuju najvećim poolovima jer takvi ujedno najčešće otkrivaju blokove i time dobivaju nagrade, dešava se velika tehnološka centralizacija rudarenja u kojoj 20ak najvećih poolova kontroliraju gotovo cijeli sustav rudarenja Bitcoina.

Ovdje je [popis](https://www.buybitcoinworldwide.com/mining/pools/) najvećih poolova, od kojih prvi rudari čak 25% svjetskog Bitcoina.

Mining node je jedini softver koji može “proizvesti” novi Bitcoin, i za pokretanje i isplativost istog potrebna je izuzetno velika računalna moć ili besplatna struja. 



Izvor: https://bitfalls.com/hr/2017/11/26/whats-bitcoin-node-mining-vs-validation/