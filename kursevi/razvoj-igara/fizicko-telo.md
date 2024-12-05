---
title: Fizičko telo
layout: lekcija-razvoj-igara
permalink: /fizicko-telo
image: /images/razvoj-igara/fizicko-telo.png
---

![]({{page.image}})

**Fizička tela su prosti oblici koji grubo definišu veličinu i oblik lika. Svaki fizički predmet igre ima prikačeno fizičko telo.**

Fizičko telo je obično nevidljivo u igri. Oblik kreiramo pozivanjem metode za crtanje oblika. Zatim povezujemo telo sa likom i stičemo pristup simuliranim efektima i svojstvima dodeljenim tom telu. Obično je fizičko telo malo manje od slike lika.

**Većina fizičkih tela su čvrsta tela**, ali ne sva. Fizičko telo može biti i savitljivo (poput tkanine ili tečnosti), dok čvrsto telo ne može menjati oblik ili zapreminu.

## Primer: više tela povezanih sa jednim likom

Možemo imati više fizičkih tela povezanih sa jednim likom. Na primer, ako heroj nosi mač, ima smisla kreirati jedno telo za junaka, a drugo za mač, kako bismo kreirali logiku igre na osnovu sudara različitih tela:

```js
function collisionDidOccur() {
  switch (collision) {
  case (player && sword):
    //do nothing;
    break;
  case (player && enemy):
    //ouch!!;
    break;
  case (sword && enemy):
    //do damage!!;
    break;
  }
}
```

## Ograničenja

![](/images/razvoj-igara/ConcaveVsConvex1.png)

Većina fizičkih pogona ima sledeća ograničenja:
* moraju se koristiti konveksni oblici (nijedan unutrašnji ugao nije manji od 180 stepeni)
* primenjuje se samo fizika čvrstih tela

Kada loptica udari zid u "stvarnom" svetu, nešto slično ovome će se dogoditi:

![](/images/razvoj-igara/elasticno-telo.gif)

Slika lika može proći ovaj tip transformacije, ali njegovo fizičko telo ne može. Možemo kontrolisati određene osobine tela da utiču na njegovu "skočnost", ali ne može zaista imati promenljiv oblik. Ovo se zove čvrsto telo, što znači da se ne može deformisati ili istisnuti.

## Svojstva

Ovo su neka od tipičnih svojstava dostupnih na fizičkom telu:

* `Restitucija` je mera "skočnosti" objekta. Formalno, to je mera koliko energije predmet zadržava nakon što se sudari s drugim predmetom.
* `Gustina` je mera koliko je objekat "težak". Koristi se kao relativna osobina — na primer, kamen je gušći od lopte, pa će lopta biti više pogođena kada udari u kamen.
* `Trenje` je mera koliko je objekat "klizav". Koristi se kada jedan objekat klizi preko drugog i određuje koliko će mu vremena trebati da se zaustavi.
* Ako je telo `dinamično`, onda sile koje na njega deluju imaju učinak, ako je `statično`, nemaju.
* `Rotacija` je tipično bulova promenljiva koja se može postaviti na fizičko tijelo. U nekim slučajevima možemo ograničiti telo da se ne rotira, ali da i dalje reaguje na sile.
