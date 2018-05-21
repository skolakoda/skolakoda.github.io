---
title: Dobre prakse pisanja programa
layout: lekcija-c
permalink: /dobre-prakse
---

***Programi napisani na višem programskom jeziku sredstvo su komunikacije između čoveka i računara ali i između ljudi samih. Razumljivost, čitljivost programa, iako nebitna za računar, od ogromne je važnosti za kvalitet i upotrebljivost programa.***

U održavanje programa se obično uloži daleko više vremena i truda nego u njegovo pisanje, a održavanje sistema često ne rade oni programeri koji su napisali program. Pored toga, razumljivost programa omogućava lakšu analizu njegove ispravnosti i složenosti. Preporuke za pisanje obično nisu kruta pravila i ona najpre predstavljaju ideje kojima se treba rukovoditi u pisanju programa, u aspektima formatiranja, nazubljivanja, imenovanja promenljivih i funkcija itd.

U daljem tekstu će, kao na jedan primer konvencija za pisanje programa, biti ukazivano na preporuke iz teksta [Linux Kernel Coding Style](https://www.kernel.org/doc/html/v4.10/process/coding-style.html), Linusa Torvaldsa, autora operativnog sistema Linux koji je napisan na jeziku C.

![](https://finland.fi/wp-content/uploads/2015/05/3195-torvalds-jpg.jpg)

## Timski rad i konvencije

Za svaki obimniji projekat potrebno je usaglasiti konvencije za pisanje programa. Da bi ih se lakše pridržavalo, potrebno je detaljno motivisati i obrazložiti pravila. Ima različitih konvencija i one često izazivaju duge i zapaljive rasprave između programera. Mnogi će, međutim, reći da nije najvažnije koja konvencija se koristi nego koliko strogo se nje pridržava. Strogo i konzistentno pridržavanje konvencije u okviru jednog projekta izuzetno je važno za njegovu uspešnost. Jedan isti programer treba da bude spreman da u različitim timovima i različitim projektima koristi različite konvencije.

Kako bi se olakšalo baratanje programom, koji ima na stotine datoteka koje menja veliki broj programera, u timskom radu obično se koriste sistemi za kontrolu verzija (kao što su CVS, SVN, Git, Bazaar, Mercurial, Visual SourceSafe). I ovi sistemi nameću dodatna pravila i omogućavaju dodatne konvencije koje tim treba da poštuje.

## Vizualni elementi programa

Prva ideja o programu formira se na osnovu njegovog izgleda – njegovih vizualnih elemenata, kao što su broj linija u datoteci, broj karaktera u liniji, nazubljivanje, grupisanje linija i slično. Vizualni elementi programa i njegovo formatiranje često su od ključne važnosti za njegovu čitljivost. Formatiranje, konkretno nazubljivanje (poravnanje), u nekim jezicima (npr. python) čak utiče na značenje programa.

Formatiranje i vizualni elementi programa treba da olakšaju razumevanje kôda koji se čita, ali i pronalaženje potrebnog dela kôda ili datoteke sa delom programa. Formatiranje i vizualni elementi programa treba da olakšaju i proces pisanja programa. U tome, pomoć autoru programa pružaju alati u okviru kojih se piše program – specijalizovani editori teksta ili integrisana razvojna okruženja (engl. **IDE**, *Integrated Development Environment*) koja povezuju editor, kompilator, debager i druge alate potrebne u razvoju softvera.

## Broj karaktera u redu

U modernim programskim jezicima dužina reda programa nije ograničena. Ipak, predugi redovi mogu da stvaraju probleme. Na primer, predugi redovi mogu da zahtevaju horizontalno „skrolovanje“ kako bi se video njihov kraj, što može da drastično oteža čitanje i razumevanje programa. Takođe, ukoliko se program štampa, dugi redovi mogu da budu presečeni i da naruše formatiranje. Zbog ovih i ovakvih problema, preporučuje se pridržavanje nekog ograničenja – obično 80 karaktera u redu.

Konkretna preporuka za 80 karaktera u redu je istorijska i potiče od ograničenja na starim ekranima i štampačima i drugim uređajima. Ipak, ona je i danas široko prihvaćena kao pogodna. Ukoliko red programa ima više od 80 karaktera, to najčešće ukazuje na to da kôd treba reorganizovati uvođenjem novih funkcija ili promenljivih. Broj 80 (ili bilo koji drugi) kao ograničenje za broj karaktera u redu ne treba shvatati kruto već kao načelnu preporuku koja može biti narušena ako se tako postiže bolja čitljivost.

## Broj naredbi u redu, zagrade i razmaci

Red programa može da bude prazan ili da sadrži jednu ili više naredbi. Prazni redovi mogu da izdvajaju
blokove blisko povezanih naredbi (na primer, blok naredbi za koje se može navesti komentar o tome šta je
njihova svrha). Ako se prazni redovi koriste neoprezno, mogu da naruše umesto da poprave čitljivost. Naime,
ukoliko ima previše praznih linija, smanjen je deo kôda koji se može videti i sagledavati istovremeno na ekranu.

![](https://i2.wp.com/www.fatosmorina.com/wp-content/uploads/2017/04/coding-style.jpg)

Po jednoj konvenciji, zagrade koje označavaju početak i kraj bloka navode se u zasebnim redovima (u istoj
koloni), a po drugoj, otvorena zagrada se navodi u nastavku prethodne naredbe, a zatvorena u zasebnom redu
ili u redu zajedno sa ključnom rečju `while` ili `else` . Torvalds preporučuje ovu drugu konvenciju, uz izuzetak da se otvorena vitičasta zagrada na početku definicije funkcije piše u zasebnom redu.

Jedan red može da sadrži i više od jedne naredbe. To je prihvatljivo samo (a tada može da bude i preporučljivo) ako se radi o jednostavnim inicijalizacijama ili jednostavnim dodelama vrednosti članovima strukture, na primer:

```c
int i = 10; double suma = 0;
tacka.x = 0; tacka.y = 0;
```

Ukoliko je u petlji ili u `if` bloku samo jedna naredba, onda nisu neophodne zagrade koje označavaju početak i kraj bloka i mnogi programeri ih ne pišu. Međutim, iako nisu neophodne one mogu olakšati razumevanje kôda u kojem postoji višestruka `if` naredba. Dodatno, ukoliko se u blok sa jednom naredbom i bez vitičastih zagrada u nekom trenutku doda druga naredba lako može da se previdi da postaje neophodno navesti i zagrade.

Veličina blokova kôda je takođe važna za preglednost, pa je jedna od preporuka da vertikalno rastojanje između otvorene vitičaste zagrade i zatvorene vitičaste zagrade ne bude veće od jednog ekrana.

Obično se preporučuje navođenje razmaka oko ključnih reči i oko binarnih operatora.

```js
if (uslov) {
    *a = -b + c + sizeof (int) + f(x);
    return -1;
}
```

## Nazubljivanje (uvlačenje) koda

Nazubljivanje teksta programa nebitno je kompilatoru, ali je skoro neophodno programeru. Nazubljivanje naglašava strukturu programa i olakšava njegovo razumevanje. Red programa može biti uvučen u odnosu na početnu kolonu za nekoliko blanko karaktera ili nekoliko tab karaktera. Tab karakter može da se u okviru editora interpretira na različite načine (tj. kao različit broj belina), te je preporučljivo u programu sve tab karaktere zameniti razmacima (za šta u većini editora postoji mogućnost) i čuvati ga u tom obliku. Na taj način, svako će videti program (na ekranu ili odštampan) na isti način.

```js
if (godine > 17)
  console.log('Ti si punoletan, mozes uci')
else
  console.log('Zao nam je, ne mozes na sajt')
```

Ne postoji kruto pravilo za broj karaktera za jedan nivo uvlačenja. Neki programeri koriste 4, a neki 2 – sa motivacijom da u redovima od 80 karaktera može da stane i kôd sa dubokim nivoima. Torvalds, sa druge strane, preporučuje broj 8, jer omogućava bolju preglednost. Za programe koji imaju više od tri nivoa nazubljivanja, on kaže da su ionako sporni i zahtevaju prepravku.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
