---
title: Greške u programu
layout: lekcija-c
permalink: /greske-u-programu
---

![](https://petljamedia.blob.core.windows.net/root/Media/Default/Lecture/Greske.png)

**Sigurno ti se desilo u običnom govoru ili dopisivanju da se ne izraziš dovoljno jasno ili tačno, pa te sagovornik zbog toga ne razume.** 

Na primer, ako nekome napišeš: „donesi kopu“, verovatno neće razumeti šta želiš (šta je kopa). Primalac poruke će možda pretpostaviti da je ona pogrešno otkucana, pa će iz ranijeg razgovora pokušati da pogodi šta želiš da donese (kofu, kapu, klopu, korpu… Ipak, najverovatnije će te pitati šta treba da donese i daće ti priliku da pojasniš svoj zahtev.

## Greške u pisanju (sintaksne greške)

Slično se dešava i u programiranju. Pravila za pisanje programa su vrlo precizna i za svaki deo programa je tačno određeno kako se može napisati i šta u tom slučaju znači. Skup pravila za pisanje programa na nekom jeziku naziva se sintaksa. Sintaksna greška nastaje kada kompjuter ne razume neki deo tvog programa, zato što nije napisan tačno po pravilima.

Kao što smo videli, može biti dovoljno da se u rečenici zameni samo jedno slovo, pa da ona dobije smisao. Ipak, kompjuteru je sasvim svejedno da li je rečenica (program) skoro ispravna ili potpuno besmislena, poput „Dobrome dva nežno krug“ ili "adf#fgh$ty!p o?e&c*nm^,.%". Kompjuter zahteva potpunu preciznost u izražavanju i uvek samo prijavljuje šta tačno ne razume, jer nije sposoban da pogodi šta je trebalo da bude napisano i da sam ispravi grešku, ma koliko mala bila.

Zato je važno da razumeš poruke o greškama. Na primer, za ovaj program:

{:.ulaz}
```cpp
// moj prvi C++ program
#include <iostream>
using namespace std;

int main(){
    cout << "Zdravo Svete!"
}
```

računar u *output* prozoru (*output* možemo prevesti kao ishod ili učinak) prijavljuje sledeću  sintaksnu grešku:

![](https://petljamedia.blob.core.windows.net/root/Media/Default/Lecture/sintaksne%20greske%203.png)

U ovom primeru, program ima jednu grešku. Naredni tekst:

```
1>d:\wrk\testapp\mojprviprogram\program1.cpp(8): error C2143:
```

daje puno ime fajla i broj linije u programu (linija 8) u kojoj se nalazi greška. `C2143` je oznaka za ovu vrstu greške. Koristeći taj kod, možeš lako da pronađeš na internetu više informacija (uglavnom na engleskom) o ovoj vrsti greške: u čemu se sastoji, kako može da nastane, često i jednostavan primer - program u kome se ova greška pojavljuje. Objašnjenja koja na ovaj način pronađeš će ti verovatno biti korisnija nakon što stekneš malo iskustva.

Na kraju, tekst:

```
missing ';' before '}
```

daje kratko objašnjenje greške, koje pomaže da je uočiš i ispraviš. Tekst kaže da nedostaje tačka-zarez `;` pre zatvorene vitičaste zagrade `}`. Dodaj `;` nakon "Zdravo Svete!" i prevedi program ponovo. Trebalo bi da dobiješ ovakav izlaz:

![](https://petljamedia.blob.core.windows.net/root/Media/Default/Lecture/sintaksne%20greske%204.png)

Ovaj tekst znači da od svih projekata čije prevođenje je traženo, 1 je bilo uspešno, 0 neuspešnih, i 0 izostavljenih (urađenih ranije). Kraće rečeno, tvoj (jedini) projekat je uspešno preveden.

**Svaka poruka o sintaksnoj grešci sadrži ove delove:**

- Mesto u programu (ime fajla i redni broj linije) gde se greška pojavila;
- Oznaka (kod) greške.
- Kratak opis greške, koji će ti ubrzo postati dovoljan da razumeš o čemu se radi

Takvim porukama kompjuter ti govori da određeni deo programa nije napisan ispravno i zato nije jasan. Ove poruke služe da lakše uočiš šta je u programu neispravno, i da to onda ispraviš.

Pri ispravljanju se uvek usredsredi na prvu prijavljenu grešku, jer je moguće da njenim ispravljanjem nestane još nekoliko prijavljenih grešaka. Ako neke greške ne razumeš, možeš da, nakon što ispraviš prvu, prevedeš program ponovo. Pojaviće se nova lista grešaka, koja bi trebalo da bude kraća.

Pravljenje ovakvih grešaka je normalno, pogotovo u početku. Zato se naoružaj strpljenjem tokom pisanja svojih prvih programa, jer će se ovakve stvari skoro sigurno dešavati. Važno je da ne odustaneš pri ovim početnim teškoćama, jer se one uglavnom brzo savladaju, a posle toga imaćeš zadovoljstvo da vidiš kako tvoji programi rade i to sve teže i zanimljivije stvari.

Nije loše da grešku prvi put napraviš namerno, da vidiš kako izgleda poruka. To može da ti pomogne da kasnije, kada grešku napraviš slučajno, lakše razumeš (prepoznaš) poruku o grešci.

## Greške u značenju (semantičke greške)

Osim sintaksnih, postoji još jedna vrsta grešaka, a to je kada tvoja rečenica ima značenje, ali ne ono koje je tebi bilo na umu. Na primer, ako pitaš: „Kada polazi avion iz Atine?“ umesto „Kada dolazi avion iz Atine?“, niko neće primetiti tvoju grešku, jer je pitanje razumljivo i ima smisao. U ovakvoj situaciji ćeš najverovatnije dobiti informaciju koja je za tebe pogrešna (nije ona koju želiš da dobiješ) i zbog toga ćeš možda propustiti let avionom ili nepotrebno čekati na aerodromu.

Ovakve greške se zovu greške u značenju, ili semantičke greške. **One lako mogu da prođu nezapaženo**, jer kompjuteru je „sve jasno“ i on može da izvrši program. Na žalost, rezultat rada programa je u takvim slučajevima nekad ispravan, nekad neispravan, a ponekad je nesporazum između nas i kompjutera toliko veliki da rezultata uopšte i ne bude. Možda se pitaš kako uopšte možeš da proveriš da tvoj program (koji može da se izvrši) nema semantičke greške i da radi ispravno. **Jedini efikasan način je testiranje programa**. Testiranje programa je kao kada nekome postavljaš pitanja na koja znaš odgovor. Još bolje, to je kao kada nekome ko ume da računa daješ računski zadatak (na primer izdiktiraš neki brojni izraz), a rezultat znaš unapred. Na taj način proveravaš da li taj neko ono što govoriš razume na isti način kao i ti. Ako daje odgovor koji očekuješ, znači da ste se lepo razumeli (ili ste samo imali sreće), u protivnom je bilo nesporazuma, to jest grešaka u značenju. Dakle, testiranje programa nam služi da otkrijemo što više grešaka u značenju, koje smo napravili pišući program. Testiranjem programa i otkrivanjem grešaka u značenju ćemo se detaljno baviti u nekim od narednih lekcija.

Za sada dok učiš programiranje, kada rešavaš zadatke koje smo postavili na Bubble Bee, možeš da koristiš naš sistem za testiranje rešenja koja nam šalješ. Sistem za testiranje radi upravo na opisani način - on ima pripremljena pitanja za tvoj program i proverava da li dobija odgovor koji očekuje. Bilo bi dobro da kasnije, kada se malo uhodaš, počneš da gradiš naviku da na isti način i samostalno testiraš svaki svoj program.


Izvor: [Petlja.org](https://petlja.org/BubbleBee/r/Lekcije/sintaksne-greske)