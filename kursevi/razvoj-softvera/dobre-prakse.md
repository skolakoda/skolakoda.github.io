---
title: Dobre prakse pisanja programa
layout: lekcija-razvoj
permalink: /dobre-prakse
---

**Programi napisani na programskom jeziku sredstvo su komunikacije između čoveka i računara ali i između ljudi samih. Razumljivost, čitljivost programa, iako nebitna za računar, od ogromne je važnosti za ljude.**

U održavanje programa se obično uloži daleko više vremena i truda nego u razvoj, a održavanje često ne rade isti oni koji su pisali program. Stoga, razumljivost programa omogućava lakšu analizu njegove ispravnosti i složenosti. Preporuke za pisanje obično nisu kruta pravila i ona najpre predstavljaju ideje kojima se treba rukovoditi u pisanju programa, u aspektima formatiranja, nazubljivanja, imenovanja promenljivih i funkcija itd.

Jedna od najpoznatijih konvencija za pisanje programa je [Linux Kernel Coding Style](https://www.kernel.org/doc/html/v4.10/process/coding-style.html) Linusa Torvaldsa, autora operativnog sistema Linux, koji je napisan na jeziku C.

![](https://finland.fi/wp-content/uploads/2015/05/3195-torvalds-jpg.jpg)

## Timski rad i konvencije

Za svaki obimniji projekat potrebno je usaglasiti konvencije pisanja programa. Da bi ih se lakše pridržavalo, potrebno je detaljno obrazložiti motive i pravila. Ima različitih konvencija i one često izazivaju duge i zapaljive rasprave između programera. Ipak, mnogi će reći da nije najvažnije koja konvencija se koristi, sve dok se neka koristi. Konzistentno pridržavanje konvencije u okviru projekta izuzetno je važno za njegovu uspešnost. Jedan isti programer treba da bude spreman da na različitim projektima koristi različite konvencije.

Kako bi se olakšalo upravljanje programom, koji ima na stotine datoteka koje menja veliki broj programera, u timskom radu obično se koriste sistemi za kontrolu verzija (kao što su CVS, SVN, Git, Bazaar, Mercurial, Visual SourceSafe). I ovi sistemi nameću dodatna pravila i konvencije koje tim treba da poštuje.

## Vizualni elementi programa

Prva ideja o programu formira se na osnovu njegovog izgleda – njegovih vizualnih elemenata, kao što su broj linija u datoteci, broj karaktera u liniji, nazubljivanje, grupisanje linija i slično. Vizualni elementi programa i njegovo formatiranje često su od ključne važnosti za njegovu čitljivost. Formatiranje, konkretno nazubljivanje (poravnanje), u nekim jezicima (npr. python) čak utiče na rad programa.

Formatiranje i vizualni elementi treba da olakšaju proces pisanja programa, razumevanje koda koji se čita, ali i pronalaženje koda. U tome nam pomažu razvojni alati – specijalizovani editori teksta ili integrisana razvojna okruženja (eng. **IDE**, *Integrated Development Environment*) koja povezuju editor, kompilator, debager i druge potrebne alate.

## Broj karaktera u redu

U modernim programskim jezicima dužina reda programa nije ograničena. Ipak, predugi redovi mogu da stvaraju probleme. Na primer, predugi redovi mogu da zahtevaju horizontalno „skrolovanje“ kako bi se video njihov kraj, što može drastično otežati čitanje i razumevanje programa. Takođe, ukoliko se program štampa, dugi redovi mogu da budu presečeni i da naruše formatiranje. Zbog ovih i ovakvih problema, preporučuje se pridržavanje nekog ograničenja – npr. 80 karaktera u redu.

Preporuka za 80 karaktera u redu je istorijska i potiče od ograničenja na starim ekranima, štampačima i drugim uređajima. Ipak, i danas je široko prihvaćena kao pogodna. Ukoliko red ima više od 80 karaktera, to najčešće ukazuje na to da program treba reorganizovati uvođenjem novih funkcija ili promenljivih. Broj karaktera u redu ne treba shvatati kruto već kao načelnu preporuku koja može biti narušena ako se time postiže bolja čitljivost.

## Broj naredbi u redu, zagrade i razmaci

Prazni redovi mogu odvajati blokove blisko povezanih naredbi, ali ako se koriste preterano mogu narušiti čitljivost. Naime, ukoliko ima previše praznih linija, smanjen je deo programa koji se može sagledati na ekranu.

![](https://i2.wp.com/www.fatosmorina.com/wp-content/uploads/2017/04/coding-style.jpg)

Po jednoj konvenciji, zagrade koje označavaju početak i kraj bloka navode se u zasebnim redovima (u istoj
koloni), a po drugoj, otvorena zagrada se navodi u nastavku prethodne naredbe, a zatvorena u zasebnom redu
ili u redu zajedno sa ključnom rečju `while` ili `else` . Torvalds preporučuje ovu drugu konvenciju, uz izuzetak da se otvorena vitičasta zagrada na početku definicije funkcije piše u zasebnom redu.

Jedan red može da sadrži i više od jedne naredbe. To je prihvatljivo (a može biti i preporučljivo) samo ako se radi o jednostavnim inicijalizacijama ili dodelama vrednosti članovima strukture, na primer:

```c
int i = 10; double suma = 0;
tacka.x = 0; tacka.y = 0;
```

Ukoliko je u petlji ili u `if` bloku samo jedna naredba, onda nisu neophodne zagrade koje označavaju početak i kraj bloka i mnogi programeri ih ne pišu. Međutim, iako nisu neophodne one mogu olakšati razumevanje kôda u kojem postoji višestruka `if` naredba. Dodatno, ukoliko se u blok sa jednom naredbom i bez vitičastih zagrada u nekom trenutku doda druga naredba lako se može prevideti da je neophodno uvesti zagrade.

Veličina blokova kôda je takođe važna za preglednost, pa je jedna od preporuka da vertikalno rastojanje između otvorene vitičaste zagrade i zatvorene vitičaste zagrade ne bude veće od jednog ekrana.

Obično se preporučuje navođenje razmaka oko ključnih reči i oko binarnih operatora.

```js
if (uslov) {
    *a = -b + c + sizeof (int) + f(x);
    return -1;
}
```

## Uvlačenje (poravnanje) koda

Poravnanje teksta programa nebitno je kompilatoru, ali je skoro neophodno programeru. Nazubljivanje naglašava strukturu programa i olakšava njegovo razumevanje. Red programa može biti uvučen za nekoliko praznih karaktera ili tab karaktera. Tab karakter može da se u okviru editora interpretira na različite načine (tj. kao različit broj praznina), te je preporučljivo u programu sve tab karaktere zameniti razmacima (za šta u većini editora postoji mogućnost). Na taj način, svako će videti program (na ekranu ili odštampan) na isti način.

```js
if (godine > 17)
  console.log('Ti si punoletan, mozes uci')
else
  console.log('Zao nam je, ne mozes na sajt')
```

Ne postoji kruto pravilo za broj karaktera za jedan nivo uvlačenja. Neki programeri koriste 4, a neki 2. Torvalds, sa druge strane, preporučuje broj 8, jer omogućava bolju preglednost. Za programe koji imaju više od tri nivoa ugnježdenja, on kaže da su ionako sporni i zahtevaju prepravku.

## Literatura

- Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
