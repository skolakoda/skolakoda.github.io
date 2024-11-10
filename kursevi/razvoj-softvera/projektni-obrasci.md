---
title: Projektni obrasci (<i>Design patterns</i>)
layout: lekcija-razvoj
permalink: /projektni-obrasci
---

<!-- ![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmethodpoet.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fdesign-patterns-division.png&f=1&nofb=1&ipt=73ccfd6b2dce1d243025f6bda7a5c2ea3efe682af47ac9e23a4845e08ba268a3&ipo=images) -->

**Projektni obrasci (*design patterns*) su višekratno upotrebljiva rešenje za poznate probleme. Softverski projektni obrasci predstavljaju rešenja osnovnih programerskih problema na visokom nivou apstrakcije. Nastali su kao rezultat dobre prakse i iskustva generacija programera.** 

Gotovo je nemoguće pronaći okvir (*framework*) koji rešava sve probleme jedne aplikacije. Umesto toga, programeri uopštavaju probleme kako bi prepoznali obrasce koje treba primeniti. 

**Projektni obrasci su nezavisni od programskog jezika.** Njihova primena je identična u svim objektno-orjentisanim jezicima.

## Prepoznavanje rešenih problema

**Posao softverskih inženjera je pre svega rešavanje softverskih problema.** To su problemi koje su drugi inženjeri verovatno već rešavali veliki broj puta u različitim oblicima. 

Projektni obrasci imaju za cilj ponovnu upotrebu postojećih dobrih rešenja. Iako problemi nisu isti, ako je moguće naći sličnost moguće je primeniti uniformno rešenje. **Većina problema na koje se nailazi tokom programiranja je već rešena nebrojeno puta**, pa verovatno postoji obrazac koji može pomoći.

Tokom decenija kreiranja softvera, veliki broj obrazaca, principa i slučajeva najbolje prakse je otkriven, imenovan i unet u katalog. Poznavanjem ovih obrazaca, inženjeri mogu da prepoznaju složene probleme i razviju aplikacije sa oprobanim i pouzdanih rešenjima.

## Izražavanje namera kroz zajednički rečnik

**Projektni obrasci omogućuju izražavanje namera kroz zajednički rečnik**, prilikom projektovanja i pisanja koda. Oni predstavljaju efikasan način da se opiše rešenje složenih problema. Sa poznavanjem dizajn paterna, moguća je brza komunikacija unutar tima bez obraćanja pažnje na detalje implementacije. Njihova posebna vrednost je što su to oprobana i testirana rešenja.

## Četvroročlana banda (*Gang of Four*)

![](/images/ljudi/Gang of Four.png)

**Skup najvažnijih i najčešće korišćenih obrazaca je skupljen u knjizi *Design Patterns: Elements of Reusable Object-Oriented Software*, koju su 1994. godine objavili Erich Gamma, Richard Helm, Ralph Johnson i John Vlissides, poznati kao *Gang of Four*.**

U svojoj knjizi oni su sakupili i opisali 23 klasična projektna obrasca, koje su podelili u 3 grupe:

- Tvorbeni (*creational*)
- Strukturni (*structural*)
- Ponašajni (*behavioral*)

Taj konkretan skup obrazaca često ćemo nazivati tradicionalni projektni obrasci ili GoF projektni obrasci.

## Kada ih ne koristiti?

Međutim, ne zahtevaju svi problemi primenu dizajn paterna. Tačno je da **obrasci mogu učiniti da kompleksni problemi postanu jednostavni, ali oni takođe mogu jednostavne probleme učiniti kompleksnim.** Nakon prvog upoznavanja sa dizajn paternima, mnogi inženjeri upadaju u problem da pokušavaju da primene obrasce na svaki deo koda. Ovim se postiže suprotan efekat od željenog, odnosno, sam softver se dodatno komplikuje.

## Literatura

- Zdravko Ivanković, Dejan Lacmanović, *Softversko inženjerstvo 2*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Mario Casciaro, Luciano Mammino, *Node.js: Projektni obrasci*, Mikro knjiga, 2019.
- Wikipedia, [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)