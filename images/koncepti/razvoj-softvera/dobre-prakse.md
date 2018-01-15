---
title: Dobre prakse pisanja programa
layout: lekcija-razvoj
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

## Imenovanje promenljivih i funkcija

![](https://cdn.tutsplus.com/net/uploads/legacy/516_code/preview.jpg)

Imenovanje promenljivih i funkcija veoma je važno za razumljivost programa i sve je važnije što je program duži. Imena promenljivih i funkcija (pa i datoteka programa) treba da sugerišu njihovu ulogu i tako olakšaju razumevanje programa. Globalne promenljive, strukture i funkcije treba da imaju opisna imena, potencijalno sačinjena od više reči. U kamiljoj notaciji (popularnoj među Java i C++ programerima), imena od više reči zapisuju se tako što svaka nova reč (sem eventualno prve) počinje velikim slovom, na primer, `brojKlijenata`. U notaciji sa podvlakama (popularnoj među C programerima), sve reči imena se pišu malim slovima a reči su razdvojene podvlakama, na primer, `broj_klijenata`. Imena makroa i konstanti pišu se obično svim velikim slovima, a imena globalnih promenljivih počinju velikim slovom.

Lokalne promenljive, a posebno promenljive koje se koriste kao brojači u petljama treba da imaju kratka i jednostavna, a često najbolje, jednoslovna imena – jer se razumljivost lakše postiže sažetošću. Imena za brojače u petljama su često `i`, `j`, `k`, za pokazivače `p` i `q`, a za niske `s` i `t`. Preporuka je i da se lokalne promenljive deklarišu što kasnije u okviru funkcije i u okviru bloka u kojem se koriste (a ne u okviru nekog šireg bloka). Jedan, delimično šaljiv, savet za imenovanje (i globalnih i lokalnih) promenljivih kaže da broj karaktera u imenu promenljive treba da zavisi od broja linija njenog dosega i to tako da bude proporcionalan logaritmu broja linija njenog dosega.

Za promenljive i funkcije nije dobro koristiti generička imena kao `rezultat`, `izracunaj()`, `uradi()` i slično, već sugestivnija, kao što su, na primer, `kamata`, `izracunaj_kamatu()`, `odstampaj_izvestaj_o_kamati()`. Imena funkcija dobro je da budu bazirana na glagolima, na primer, `izracunaj_kamatu()`, umesto `kamata()` i `get_time()` umesto `time()`. Za funkcije koje vraćaju istinitosnu vrednost, ime treba da jasno sugeriše u kom slučaju se vraća vrednost tačno, na primer, bolje je ime `is_prime()` nego `check_prime()`.

Mnoge promenljive označavaju neki broj entiteta (na primer, broj klijenata, broj studenata, broj artikala) i za njih se može usvojiti konvencija po kojoj imena imaju isti prefiks ili sufiks (na primer, `br_studenata` ili `num_students`. U ovom smislu, znatno dalje ide mađarska notacija. Postoje zapravo dve varijante mađarske notacije: sistemska i aplikacijska. U sistemskoj mađarskoj notaciji ime promenljive počinje uvek slovom ili slovima koja odgovaraju njenom tipu, na primer, `uBrojKlijenata` može da bude promenljiva tipa `unsigned int`.

Ideja je da se na ovaj način tip promenljive vidi na svakom mestu gde se ona koristi (pa ne mora da se proverava njena deklaracija). U aplikacijskoj mađarskoj notaciji, ime promenljive se kreira na osnovu njene uloge u programu, a ne na osnovu tipa. Na primer, imena promenljivih mogu da počinju sa `rw` i `col` i označavaju poziciju kurzora u dokumentu. Jedan par takvih promenljivih mogu da budu, na primer, `rwOutputWindow` i `colOutputWindow`. Ove dve promenljive su istog tipa, ali nema smisla vrednost jedne pridružiti drugoj i to sugerišu izabrani prefiksi (te se u kôdu lako mogu primetiti neka pogrešna izračunavanja). Mađarska notacija (posebno „sistemska“) ima mnogo kritičara (uključujući Torvaldsa) koji smatraju da je informacija o tipovima ionako poznata kompilatoru a da dodatni prefiksi više zbunjuju programera nego što mu pomažu.

I programeri kojima to nije maternji jezik, iako to nije zahtev projekta, često imenuju promenljive i funkcije na osnovu reči engleskog jezika. To je posledica istorijskih razloga i dominacije engleskog jezika u programerskoj praksi, kao i samih ključnih reči skoro svih programskih jezika (koje su na engleskom). Prihvatljivo je (ako nije zahtev projekta drugačiji) imenovanje i na maternjem jeziku i na engleskom jeziku — jedino je neprihvatljivo mešanje ta dva. Imenovanje na bazi engleskog i komentari na engleskom mogu biti pogodni ukoliko postoji i najmanja mogućnost da se izvorni program koristi u drugim zemljama, ili od strane drugih timova, ili da se učini javno dostupnim i slično.

Kvalitet imenovanja promenljivih i funkcija može se „testirati“ na sledeći zanimljiv način: ako se kôd može pročitati preko telefona tako da ga sagovornik na drugoj strani razume, onda je imenovanje dobro.

## Pisanje izraza

Za dobrog programera neophodno je da poznaje sva pravila programskog jezika, jer će verovatno češće i više raditi na tuđem nego na svom kôdu. S druge strane, programer u svojim programima ne mora i ne treba da koristi sva sredstva izražavanja tog programskog jezika, već može i treba da ih koristi samo delom, oprezno i uvek sa ciljem pisanja razumljivih programa. Sve ovo se odnosi na mnoge aspekte pisanja programa, uključujući pisanje izraza.

Preporučuje se pisanje izraza u jednostavnom i intuitivno jasnom obliku. Na primer, umesto:

```c
(!(c < '0') && !(c > '9'))
```

bolje je:
```c
(c >= '0' && c <= '9')
```

Zagrade, čak i ako nisu neophodne, mogu da olakšaju čitljivost. Prethodni primer može da se zapiše na sledeći način:
```c
((c >= '0') && (c <= '9'))
```

Suviše komplikovane izraze treba zameniti jednostavnijim i razumljivijim. Kernigen i Pajk navode primer:

```c
*x += (*xp=(2*k < (n-m) ? c[k+1] : d[k--]));
```

i bolju, jednostavniju varijantu:

```c
if (2*k < n-m)
  *xp = c[k+1];
else
  *xp = d[k--];
*x += *xp;
```

## Korišćenje idioma

Idiomi su ustaljene jezičke konstrukcije koje predstavljaju celinu. Idiomi postoje u svim jezicima, pa i u programskim. Tipičan idiom u jeziku C je sledeći oblik `for`-petlje:

```c
for (i = 0 ; i < n; i++)
  ...
```

Kernigen i Pajk zagovaraju korišćenje idioma gde god je to moguće. Na primer, umesto varijanti:

```c
i=0;
while (i <= n-1)
  a[i++] = 1.0;
```

```c
for (i = 0; i<n; )
  a[i++] = 1.0;
```

```c
for (i = n; --i >= 0; )
  a[i] = 1.0;
```

smatraju da je bolja varijanta:

```c
for (i = 0 ; i < n; i++)
  a[i] = 1.0;
```

jer je najčešća i najprepoznatljivija. Štaviše, Kernigen i Pajk predlažu, delom i ekstremno, da se, bez dobrog razloga i ne koristi nijedna forma for-petlji osim navedene.

Glavni argument za korišćenje idioma je da se kôd brzo razume, a i da svaki drugi („neidiomski“) konstrukt privlači dodatnu pažnju što je dobro, jer se bagovi češće kriju u njima.

## Korišćenje konstanti

Konstantne vrednosti, veličina nizova, pozicije karaktera u niskama, faktori za konverzije i druge slične vrednosti koje se pojavljuju u programima često se zovu **magični brojevi** (jer obično nije jasno odakle dolaze, na osnovu čega su dobijeni). Kernigen i Pajk kažu da je, osim 0 i 1, svaki broj u programu kandidat da se može smatrati magičnim, te da treba da ima ime koje mu je pridruženo. Na taj način, ukoliko je potrebno promeniti vrednost magične konstante (na primer, maksimalna dužina imena ulice) – to je dovoljno uraditi na jednom mestu u kôdu. Na primer, u narednoj deklaraciji:

```c
char imeUlice[50];
```

pojavljuje se magična konstanta 50, te se u nastavku programa broj 50 verovatno pojavljuje u svakoj obradi imena ulica. Promena tog ograničenja zahtevala bi mnoge izmene koje ne bi mogle da se sprovedu automatski (jer se broj 50 možda pojavljuje i u nekom drugom kontekstu). Zato je bolja, na primer, sledeća varijanta:

```c
#define MAKS_IME_ULICE 50
char imeUlice[MAKS_IME_ULICE];
```

ili, još bolje, ako upotreba to dozvoljava (naime, konstantne promenljive ne mogu se koristiti kao dimenzije nizova; u tu svrhu mogu da posluže enumerisane konstante):

```c
const unsigned int MAKS_IME_ULICE = 50;
```

U većim programima, konstante od značaja za čitav program (ili veliki njegov deo) obično se čuvaju u zasebnoj datoteci zaglavlja (koju koriste sve druge datoteke kojima su ove konstante potrebne).

Konstante se u programima mogu koristiti i za kôdove karaktera. To je loše ne samo zbog narušene čitljivosti, već i zbog narušene prenosivosti – naime, nije na svim računarima podrazumevana ASCII karakterska tabela. Dakle, umesto, na primer:

```c
if (c >= 65 && c <= 90)
  ...
```

bolje je pisati

```c
if (c >= 'A' && c <= 'Z')
  ...
```

a još bolje koristiti funkcije iz standardne biblioteke, kad god je to moguće:

```c
if (isupper(c))
  ...
```

## Pisanje komentara

Čak i ako se autor pridržavao mnogih preporuka za pisanje jasnog i kvalitetnog kôda, ukoliko kôd nije dobro komentarisan njegovo razumevanje može i samom autoru predstavljati teškoću već nekoliko nedelja nakon pisanja. Komentari treba da olakšaju razumevanje kôda i predstavljaju njegov svojevrsni dodatak.

Postoje alati koji olakšavaju kreiranje dokumentacije na osnovu komentara u samom kôdu i delom je generišu automatski (npr. Doxygen).

***Komentari ne treba da objašnjavaju ono što je očigledno:*** Komentari ne treba da govore kako kôd radi, već šta radi (i zašto). Na primer, naredna dva komentara su potpuno suvišna:

```c
k += 1.0; /* k se uvecava za 1.0 */
```

```c
return OK; /* vrati OK */
```

U prvom slučaju, komentar ima smisla ako objašnjava zašto se nešto radi, na primer:

```c
k += 1.0; /* kamatna stopa veca je za 1.0 */
```

U slučajevima da je neki deo programa veoma komplikovan, potrebno je u komentaru objasniti zašto je komplikovan, kako radi i zašto je izabrano takvo rešenje.

***Komentari treba da budu koncizni.*** Kako ne bi trošili preterano vreme, komentari treba da budu što je moguće kraći i jasniji, da ne ponavljaju informacije koje su već navedene drugde u komentarima ili su očigledne iz kôda. Previše komentara ili predugi komentari predstavljaju opasnost za čitljivost programa.

***Komentari treba da budu usklađeni sa kôdom.*** Ako se promeni kôd programa, a ne i prateći komentari, je to može da uzrokuje mnoge probleme i nepotrebne izmene u programu u budućnosti. Ukoliko se neki deo programa promeni, uvek je potrebno proveriti da li je novo ponašanje u skladu sa komentarima (za taj ali i druge delove programa). Usklađenost kôda i komentara je lakše postići ako komentari ne govore ono što je očigledno iz kôda.

***Komentarima treba objasniti ulogu datoteka i globalnih objekata.*** Komentarima treba, na jednom mestu, tamo gde su definisani, objasniti ulogu datoteka, globalnih objekata kao što su funkcije, globalne promenljive i strukture. Funkcije treba komentarisati pre same definicije a Torvalds čak savetuje da se izbegavaju komentari unutar tela funkcije. Čitava funkcija može da zaslužuje komentar (pre prvog reda), ali ako pojedini njeni delovi zahtevaju komentarisanje, onda je moguće da funkciju treba reorganizovati i/ili podeliti na nekoliko funkcija. Ni ovo pravilo nije kruto i u specifičnim situacijama prihvatljivo je komentarisanje delikatnih delova funkcije („posebno pametnih ili ružnih“).

***Loš kôd ne treba komentarisati, već ga popraviti.*** Često kvalitetno komentarisanje kako i zašto neki loš kôd radi zahteva više truda nego pisanje tog dela kôda iznova tako da je očigledno kako i zašto on radi.

***Komentari treba da budu laki za održavanje:*** Treba izbegavati stil pisanja komentara u kojem i mala izmena komentara zahteva dodatni posao u formatiranju. Na primer, promena narednog opisa funkcije zahteva izmene u tri reda komentara:

```c
/****************************************
* Funkcija area racuna povrsinu trougla *
*****************************************/
```

***Komentari mogu da uključuju standardne fraze.*** Vremenom se nametnulo nekoliko na bazi fraza koje se često pojavljuju u okviru komentara. Njih je lako pronaći u kôdu, a mnoga razvojna okruženja prepoznaju ih i prikazuju u istaknutoj boji kako bi privukli pažnju programera kao svojevrsna lista stvari koje treba obaviti. Najčešći markeri su:

- **TODO**: označava zadatke koje tek treba obaviti, koji kôd treba napisati.
- **FIXME**: označava deo kôda koji radi ali treba ga popraviti, u smislu opštijeg rešenja, lakšeg održavanja, ili bolje efikasnosti.
- **HACK**: označava deo kôda u kojem je, kako bi radio, primenjen neki trik i loše rešenje koje se ne prihvata kao trajno, te je potrebno popraviti ga.
- **BUG**: označava deo kôda koji je gotov i očekuje se da radi, ali je pronađen bag.
- **XXX**: obično označava komentar programera za sebe lično i treba biti obrisan pre nego što kôd bude isporučen drugima. Ovim markerom se obično označava neko problematično ili nejasno mesto u kôdu ili pitanje programera.

## Modularnost

Veliki program je teško ili nemoguće razmatrati ako nije podeljen na celine. Podela programa na celine (na primer, datoteke i funkcije) neophodna je za razumevanje programa i nametnula se veoma rano u istoriji programiranja. Svi savremeni programski jezici su dizajnirani tako da je podela na manje celine ne samo moguća već tipičan način podele određuje sam stil programiranja (na primer, u objektno orijentisanim jezicima neki podaci i metode za njihovu obradu se grupišu u takozvane klase). Podela programa na module treba da omogući:

***Razumljivost:*** podela programa na celine popravlja njegovu čitljivost i omogućava onome ko piše i onome ko čita program da se usredsredi na ključna pitanja jednog modula, zanemarujući u tom trenutku i iz te perspektive sporedne funkcionalnosti podržane drugim modulima.

***Upotrebljivost:*** ukoliko je kôd kvalitetno podeljen na celine, pojedine celine biće moguće upotrebiti u nekom drugom kontekstu. Na primer, proveravanje da li neki trinaestocifreni kôd predstavlja mogući JMBG (jedinstveni matični broj građana) može se izdvojiti u zasebnu funkciju koja je onda upotrebljiva u različitim programima.

Obično se program ne deli u funkcije i onda u datoteke tek onda kada je kompletno završen. Naprotiv, podela programa u dodatke i funkcije vrši se u fazi pisanja programa i predstavlja jedan od njegovih najvažnijih aspekata.

### Modularnost i podela na funkcije

Za većinu jezika osnovna je funkcionalna dekompozicija ili podela na funkcije. U principu, funkcije treba da obavljaju samo jedan zadatak i da budu kratke. Tekst jedne funkcije treba da staje na jedan ili dva ekrana (tj. da ima manje od pedesetak redova), radi dobre preglednosti. Duge funkcije poželjno je podeliti na manje, na primer, one koje obrađuju specijalne slučajeve. Ukoliko je brzina izvršavanja kritična, kompilatoru se može naložiti da inlajnuje funkcije (da prilikom kompilacije umetne kôd kratkih funkcija na pozicije gde su pozvane).

Da li funkcija ima razuman obim često govori broj lokalnih promenljivih: ako ih ima više od, na primer, 10, verovatno je funkciju poželjno podeliti na nekoliko manjih. Slično važi i za broj parametara funkcije.

### Modularnost i podela na datoteke (fajlove)

Veliki programi sastoje se od velikog broja datoteka koje bi trebalo da budu organizovane na razuman način u direktorijume. Jednu datoteku treba da čine definicije funkcija koje su međusobno povezane i predstavljaju nekakvu celinu.

Organizacija u datoteke treba da bude takva da izoluje delove koji se trenutno menjaju i razdvoji ih od delova koji su stabilne, zaokružene celine. U fazi razvoja, često je preporučljivo čak i napraviti privremeni deo organizacije kako bi modul koji se trenutno razvija bio izolovan i razdvojen od drugih delova.

Program treba deliti na datoteke imajući u vidu delom suprotstavljene zahteve. Jedna datoteka ne treba da bude duža od nekoliko, na primer - dve ili tri, stotine linija. Ukoliko logička struktura programa nameće dužu datoteku, onda vredi preispitati postojeću organizaciju podataka i funkcija. S druge strane, datoteke ne treba da budu prekratke i treba da predstavljaju zaokružene celine. Preterana usitnjenost (u preveliki broj datoteka) može da oteža upravljanje programom i njegovu razumljivost.

Rad sa programima organizovanih u više datoteka olakšavaju integrisana razvojna okruženja.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
