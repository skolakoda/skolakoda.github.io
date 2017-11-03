---
title: Strukture podataka
layout: lekcija-uvod
permalink: /strukture-podataka
image: /images/koncepti/podaci/kockice.jpeg
---

![]({{page.image}})

***U računalnoj znanosti, pojam struktura podataka označava način pohrane podataka u računalu koji omogućava efikasnu uporabu tih podataka. Vrlo često dobar odabir strukture podataka omogućuje i uporabu efikasnijeg algoritma obrade.***

Različite vrste struktura podataka odgovaraju različitim vrstama programskih problema, dapače neke strukture su visokospecijalizirane samo za određene zadatke. U razvoju složenih programskih sustava, izbor struktura podataka koje će
se primjeniti jedan je od najvažnijih koraka. Iskustva razvoja velikih programskih sustava pokazala su da kvaliteta i performanse konačnih rješenja u mnogome ovise o izboru
najpogodnijih struktura podataka. Nakon što su odabrane strukture podataka, često je odmah s time određen i algoritam kojeg treba upotrijebiti.

Ukratko, možemo reći da je “struktura podataka” logički ili matematički model određene organizacije podataka.

## Osnovne strukture

![strukture podataka](/images/koncepti/podaci/strukture-podataka.jpg)

Slijedeće strukture podataka i operacije na njima temelji su računalne znanosti, jer su osnovni elementi brojnih algoritama:

* **Polje** (eng. *array*) – sekvencijalni niz podataka istog tipa koje imaju zajedničko ime
* **Slog** (eng. *record*) - skup podataka koji mogu biti različitog tipa, niz slogova obično je dio datoteke ili tablice
* **Lista, povezana lista** (eng. *linked list*) – niz elemenata koji sadrže podatke i pokazivače na slijedeći element
* **Stog** (eng. *stack*) – niz elemenata u kojem se dodavanje i brisanje mogu obavljati samo na jednom kraju niza
* **Red** (eng. *queue*) – niz elemenata u kojem je dodavanje moguće samo na jednom kraju a brisanje samo na drugom kraju
* **Stablo, binarno stablo** (eng. *binary tree*) – hijerarhijska struktura u kojoj svaki element može imati samo jednog prethodnika
* **Graf** (eng. *graph*) – općenita struktura u kojoj svaki element može biti povezan sa više drugih elemenata

Strukture podataka dijele se na linearne i nelinearne. Struktura je linearna ako njeni elementi tvore niz, odnosno slijed – linearnu listu. Dva su osnovna načina prikaza linearnih struktura u memoriji računala:
* linearna veza između elemenata ostvarena slijedom memorijskih lokacija – karakteristično za polja
* linearna veza između elemenata ostvarena pokazivačima – karakteristično za povezane liste

Pored već navedenih operacija pristupa i obrade, pretraživanja, dodavanja i brisanja, na linearne strukture se primjenjuju i operacije sortiranja po određenom redoslijedu i spajanja (eng. *merging*) – kombiniranja dvije liste u jednu. Izbor određene vrste linearne strukture za danu situaciju ovisi o relativnoj učestalosti primjene pojedine od navedenih operacija.

Nelinearne strukture su stabla i grafovi.

![](/images/koncepti/podaci/data-structures.jpg)

## Osnovne operacije

Četiri osnovne operacije se primjenjuju na svim strukturama:

* **pristup i obrada** preko svih podataka (eng. *traversing*):
  * pristup svakom elementu strukture točno jedanput, da bi se određeni podatak obradio (procesirao); primjer – učitavanje polja ili matrice
* **pretraživanje**:
  * pronalaženje lokacije elementa strukture koji sadrži željenu vrijednost, ili pronalaženje svih elemenata strukture koji ispunjavaju jedan ili više uvjeta
* **dodavanje** novog elementa u strukturu
* **brisanje** određenog elementa iz strukture

## Polje (*array*)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Las_filas_003.jpg/640px-Las_filas_003.jpg)

Struktura polja vrlo se često upotrebljava. Na poljima se jednostavno primjenjuju operacije prolaza, pretraživanja i sortiranja, stoga se polja koriste za pohranu relativno permanentnih (statičnih) skupova podataka. S druge strane, u situacijama gdje se veličina strukture ili sami podaci konstantno mijenjaju, povezane liste su pogodnije strukture od polja.

Polje zauzima sekvencijalni niz memorijskih lokacija, a elementima polja pristupa se preko indeksa, dakle fizički redoslijed memorijskih lokacija određuje povezanost elemenata polja.

Osnovni nedostaci polja su slijedeći:
* teško je dodavati i brisati elemente nakon što se elementima pridruže vrijednosti
* u većini jezika problematično je povećati alokaciju memorije za elemente polja

Zbog navedenih nedostataka polja se smatraju statičkim strukturama podataka.

Algoritam "pristupa i obrade" (eng. *traversing*) svih elemenata polja vrlo često se koristi, npr. kod učitavanja ili ispisa elemenata polja ili kao dio drugih algoritama:
1. postavi brojač na početnu vrijednost jednaku indeksu početnog elementa polja
2. ponavljaj korake 3 i 4 tako dugo dok je brojač manji od indeksa krajnjeg elementa polja
3. pristupi elementu polja i primjeni željenu obradu na njemu
4. povećaj vrijednost brojača za 1

## Slog (*record*)

![](/images/koncepti/podaci/census-record.jpg)

Slog je skup međusobno povezanih (ali heterogenih) podataka koje obično nazivamo polja ili atributi. Zapisi nekih vrsta datoteka su zapravo skupovi slogova, odnosno
takve datoteke su linearne liste slogova.

Važno je naglasiti osnovne razlike između sloga i polja:
* elementi sloga mogu biti nehomogeni podaci (različitih tipova)
* ne mora postojati "prirodni" redoslijed elemenata sloga, elementi se označavaju imenima atributa

Skup slogova možemo promatrati i kao tablicu u kojoj svaki stupac ima svoje ime i odgovara pojedinom polju (atributu) sloga. Takva struktura čini osnovu tzv. relacijskih baza podataka.

Pojedini atribut sloga mora imati isti tip u svim slogovima. Jedan od mogućih načina pohrane i manipulacije sa slogovima je korištenje više paralelnih polja pri čemu svakom atributu sloga
odgovara jedno polje, odnosno elementi različitih polja sa istom vrijednošću indeksa pripadaju jednom slogu. Drugi način manipulacije sa slogovima je korištenje različitih sintaktičkih
elemenata specifičnih za određeni jezik – neki jezici imaju ugrađenu strukturu sloga.

Primjer slogova sa podacima o studentima - prvi redak tablice sadrži nazive atributa u slogu:

IME | PREZIME | MATIČNI BROJ | DATUM ROĐENJA | UPISANA GODINA
----|---------|--------------|---------------|---------------
Ana | Savić | 0038512345 | 05.04.1984. | 1
Azra | Delibašić | 0038512766 | 12.08.1984. | 1
Darko | Mraković | 0038576238 | 30.01.1982. | 3
Ahmet | Ahmetovski | 0038636686 | 25.10.1983. | 2
Isak | Asimov | 0038578798 | 05.04.1984. | 2
Vladimir | Ilić | 0037987987 | 09.07.1980. | 4

## Povezana lista (*linked list*)

![](/images/koncepti/podaci/povezana-lista.jpg)

Povezana lista je linearna struktura elemenata u kojoj je redoslijed određen pokazivačima. Za razliku od polja, svaki element liste sadrži pokazivač (eng. *pointer*) na slijedeći element. Pošto pokazivač sadrži adresu slijedećeg elementa u listi, sukcesivni elementi liste ne moraju biti spremljeni u sukcesivnom nizu memorijskih lokacija. Na taj način fizički redoslijed memorijskih lokacija nema nikakav utjecaj na redoslijed elemenata u listi. Za razliku od polja, vrlo jednostavno je dodavanje i brisanje elemenata iz liste.

Svaki element (čvor) povezane liste sastoji se od dva dijela:
1. Podatak
2. Pokazivač koji sadrži adresu slijedećeg čvora u listi

Zadnji čvor sadrži tzv. “null” pokazivač koji označava kraj liste. Lista sadrži posebni pokazivač koji sadrži adresu prvog čvora u listi.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/640px-Singly-linked-list.svg.png)

Algoritam operacije “pristupa i obrade” svih elemenata povezane liste (eng. *traversing a linked list*):
1. Postavi pokazivač na početak
2. Ponavljaj korake 3 i 4 dok je pokazivač različit od “null”
3. Pristupi elementu liste i izvrši željenu obradu
4. Postavi pokazivač na slijedeći element

Na slici 5 shematski je prikazano dodavanje elementa u povezanu listu. Prije dodavanja novog
elementa čvor A pokazuje na slijedeći čvor B. Nakon umetanja novog čvora između čvorova A i B, čvor A pokazuje na novi čvor N, a čvor N pokazuje na čvor B.

![](/images/koncepti/podaci/dodavanje-u-listu.png)

Na sličan način, mijenjanjem lokacije na koju pokazuje pokazivač realizira se i brisanje elementa
iz povezane liste.

## Stog (*stack*)

![](/images/koncepti/podaci/stack.jpg)

Polja i povezane liste dozvoljavaju dodavanje i oduzimanje (brisanje) elemenata na bilo kojem mjestu – početku, kraju ili između. Postoje određene situacije u programiranju kada želimo
ograničiti dodavanja i brisanja elemenata samo na kraj ili početak liste. Linearna struktura u kojoj se elementi mogu dodavati ili oduzimati samo na jednom kraju zove se stog.

Osnovne operacije na stogu su:
* dodavanje (umetanje) elementa na stog (eng. push)
* brisanje (oduzimanje) elementa iz stoga (eng. pop)

Nije moguće izvaditi ili umetnuti bilo koji element
iz sredine prije nego se "skinu" svi elementi iznad njega. Iz toga slijedi da je zadnji dodani element ujedno i onaj koji će se prvi izvaditi. Stoga je drugi uobičajeni naziv za strukturu stoga : “LIFO” lista (eng. *last in – first out*). Drugim riječima stog je struktura podataka kod koje se posljednji pohranjeni podatak prvi uzima u obradu.

![](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg)

Premda se čini da je stog vrlo restriktivna struktura podataka, on ima brojne vrlo važne primjene u računalnoj znanosti. Prikaz i manipulacija sa stogom može se realizirati statičkom strukturom podataka. U jednodimenzionalno polje zadane strukture dodaju se ili brišu pojedine stavke po principu "LastInFirstOut" (LIFO). Pojedina operacija dodaj ili briši zahtijeva jednako vremena bez obzira na broj pohranjenih podataka. Situacija da je stog pun može zahtijevati alociranje
dodatne memorije i ponovno izvođenje programa. Prazan stog ne mora značiti pogrešku.

Struktura stoga često se upotrebljava u situacijama kada određene korake obrade treba odgoditi do trenutka ispunjenja drugih uvjeta.

## Red (*queue*)

![](//cdn.newsapi.com.au/image/v1/407e6d170faa1120aaf8ec08e2c92d5a?width=650)

Red je linearna struktura u kojoj se elementi dodaju isključivo na jednom kraju, a oduzimaju isključivo na drugom kraju. Strukturu reda lako je predočiti analogijom sa istim pojmom u svakodnevnom životu – npr. redom ispred blagajne u dućanu. Svaka nova osoba koja dođe zauzima mjesto na kraju reda, a osoba sa početka reda plaća svoju robu i odlazi. Drugi uobičajeni naziv za ovu strukturu je “FIFO” lista (eng. *first in – first out*).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Queue_algorithmn.jpg/600px-Queue_algorithmn.jpg)

Struktura reda može se u računalu implementirati na različite načine, a najčešće se koristi jedno jednodimenzionalno polje i dvije varijable (pokazivača) koje sadrže lokacije početka i kraja reda, odnosno lokacije početnog i krajnjeg elementa u redu.

## Stablo (*tree*)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Buddhisme.jpg/503px-Buddhisme.jpg)

Za razliku od prethodno razmatranih linearnih struktura, stablo je nelinearna struktura koja se koristi za prikaz hijerarhijskih odnosa između elemenata. Primjer strukture stabla koju koristimo u svakodnevnom radu je struktura direktorija, odnosno organizacija datotečnog sustava
na računalu. Strukture stabla koje ćemo ovdje razmatrati sastoje se od čvorova (eng. *nodes*) i veza između njih koje uobičajeno nazivamo grane. Takva stabla imaju jedan početni čvor na vrhu hijerarhije, npr. u strukturi direktorija to je tzv. korijenski (osnovni) direktorij (eng. *root directory*).

![](https://www.tutorialspoint.com/data_structures_algorithms/images/binary_tree.jpg)

Jedna od najvažnijih vrsta strukture stabla u računalstvu je tzv. binarno stablo. U binarnom stablu (eng. *binary tree*) svaki čvor ima ili najviše dva sljedbenika ili samo jednog ili nijednog sljedbenika.

Jedna od primjena strukture binarnog stabla je prikaz aritmetičkog izraza koji se koristi u procesu prevođenja programa u strojni jezik. Korištenje tri paralelna polja jedan je od načina prikaza binarnog stabla u memoriji.

## Binarno stablo pretrage (*binary search tree*)

Binarno stablo pretraživanja jedna je od najvažnijih struktura podataka u računalnoj znanosti. Za svaki čvor ove strukture vrijedi: vrijednost u čvoru je veća od svih vrijednosti u lijevom podstablu i manja od svih vrijednosti u desnom podstablu.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/400px-Binary_search_tree.svg.png)

## Gomila (*heap*)

Gomila je vrsta strukture stabla koja se koristi u jednom od algoritama sortiranja. Struktura gomile je binarno stablo u kojem za svaki čvor vrijedi slijedeće: vrijednost u čvoru je veća ili jednaka od vrijednosti svih čvorova ispod njega (svih sljedbenika).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/500px-Max-Heap.svg.png)

## Graf (*graph*)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Gabriel_graph.svg/600px-Gabriel_graph.svg.png)

Struktura grafa također je nelinearna.

Graf `G` sadrži dva konačna skupa: skup točaka `V`, koje nazivamo čvorovima, i skup linija povezivanja `E`, koje nazivamo bridovima. Pri tome svaki brid povezuje dva čvora.

```
G = (V, E)
```

Usmjereni graf `G = (V, E)` je graf u kojem svaki brid `e = (i,j)` ima smjer od "inicijalne točke" (čvora) do "terminalne točke" (čvora). Pod uvjetom da su suprotnih smjerova, u usmjerenom grafu mogu postojati dva brida koja povezuju iste čvorove.

Graf `G` je povezan ako i samo ako postoji jednostavna putanja između bilo koja dva čvora u `G`.

Ako svakom bridu grafa pripada neki podatak, takav graf se naziva označenim. Ako su bridovima grafa pridružene pozitivne numeričke vrijednosti, onda se takav graf naziva težinski ili
graf sa težinskim faktorima.

![](https://upload.wikimedia.org/wikipedia/commons/a/a9/UCS_graph.jpg)

Za računalni prikaz grafova najpogodnije je koristiti matrice.

Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
