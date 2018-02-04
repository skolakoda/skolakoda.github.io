---
title: Bitkoinov čvor
layout: lekcija-blockchain
permalink: /bitkoinov-cvor
---

U sustavu kriptovaluta i blockchaina, često ćete čuti riječ čvor (*node*). u stvarnosti postoje dvije glavne vrste čvorova. 

## Validacijski čvor

Validacijski čvor (*validation node*) je računalo koje vrti određeni softver. U Bitcoinovom slučaju, jedan čvor je Bitcoin program koji se spaja s drugim Bitcoin čvorovima, na istom računalu ili drugim računalima. Postoji više verzija Bitcoin softvera. Odabirom verzije softvera vlasnik čvora “glasa” za određene promjene protokola. Na primjer, ako se predloži da se limit od 21 miljun ukupno proizvedenih bitcoina pomakne na 42 miljuna, potrebna je većina mreže koja glasa “da” nadogradnjom softvera na određenu verziju. Većina mreže u ovom slučaju znači “većina čvorišta u mreži”.

Ono kod čega taj koncept malo pada u vodu je relativno mali broj Bitcoin čvorišta – trenutno ih je na svijetu samo 10000:

![](https://bitfalls.com/wp-content/uploads/2017/11/01-4.png)

… dok ih Ethereum – kriptovaluta koja je 5 godina mlađa – ima čak dvostruko više.

Ni jedan ni drugi broj, globalno gledano, nisu impresivni. Prema nekim računicama, pokrenuti Bitcoin čvor na AWS (Amazonovom cloud sustavu) košta otprilike $10 na mjesec. To znači da bi netko preuzeo većinu i napravio 10000 novih Bitcoin čvorišta na AWSu potrebno mu je 100000 mjesečno, ili samo $1.2 miljuna godišnje – trivijalan iznos za velike igrače Bitcoin sustava koji su ušli dovoljno rano.

**Bitno je napomenuti da validacijski čvorovi bivaju isključivo trošak svojim korisnicima** – npr. *Bitcoin Core* zahtjeva 150 GB diskovnog prostora, 2GB RAM, i brzu internetsku vezu s dopuštenih barem 200 GB prometa uploada mjesečno. Validacioni čvorovi su volonterski, i služe za decentralizaciju sustava. Ako uzmemo u obzir da je bankarski sustav preuzeo financiranje razvoja Bitcoina, i da se cijena umjetno napuhava kriminalnim operacijama nije ni čudno da sve više i više ljudi gubi entuzijazam i prebacuje se na druge blockchaine i kriptovalute uvidjevši korumpiranu prirodu Bitcoin sustava. Broj čvorišta pada – prije samo mjesec dana bilo ih je 20% više: 12000. S padom broja čvorišta, preuzimanje većinske kontrole postaje sve vjerojatnije.

## Rudarski čvor

Rudarski čvor (*mining node*) je softver koji rudari i jedini koji može “proizvesti” novi Bitcoin. To je softver koji koristi hardver vašeg ili iznajmljenog računala da bi pogađao kombinacije koje dovode do otkrića novog bloka. Rudarski čvor može raditi u kombinaciji s drugim rudarskim čvorovima kako bi zajedno rudarili (*pool mining*).

Rudarski čvor također validira transakcije i time je istovremeno validacioni čvor. Budući da se danas većina rudarenja obavlja zajednički tj. u bazenima (*mining pool*), tako da više čvorova šalje svoje pokušaje u jedan, takav se bazen broji kao jedan čvor. Zbog tendencije da se novi rudari pridružuju najvećim bazenima jer takvi najčešće otkrivaju blokove i dobivaju nagrade, dešava se velika tehnološka centralizacija rudarenja u kojoj 20-ak najvećih bazena kontroliraju gotovo cijeli sustav rudarenja.

Ovdje je [popis](https://www.buybitcoinworldwide.com/mining/pools/) najvećih poolova, od kojih prvi rudari čak 25% svjetskog Bitcoina.

**Za pokretanje i isplativost rudarskog čvora potrebna je izuzetno velika računalna moć ili besplatna struja.**

Izvor: [Što je to Bitcoin čvor?](https://bitfalls.com/hr/2017/11/26/whats-bitcoin-node-mining-vs-validation/)