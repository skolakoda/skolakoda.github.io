# Uvod u prilagodljivi dizajn

Nekada su web sajtovi kreirani sa fiksnom širinom, standardno 960 piksela, i očekivalo se da će svi korisnici imati prilično isto iskustvo prilikom pregleda. Korisnici sa monitorima visoke rezolucije imali su velike margine sa obe strane ekrana.

Činjenica je da sve većom brzinom raste broj ljudi koji koriste male uređaje za pregled interneta, ali je takođe uobičajena upotrebe monitora od 27 i 30 inča. Sada je razlika izmedu najmanjih i najvećih ekrana veća nego ikada ranije. Srećom, postoji rešenje za ovu raznolikost pretraživača i uređaja. Prilagodljiv web dizajn omogućava da web sajt funkcioniše na više različitih uređaja i ekrana.

## Da li postoje situacije kada prilagodljiv dizajn nije dobar izbor?

Ukoliko budžet omogućava i situacija zahteva, prava mobilna verzija web sajta verovatno može da bude najbolja opcija. Ona bi mogla da prikaže različite sadržaje, dizajn i interakciju na osnovu uređaja, lokacije, brzine konekcije i mnogo drugih varijabli, uključujući i tehničke mogućnosti uređaja. Ova vrsta rešenja zahteva mnogo više od onoga što sam prilagodljiv dizajn može da ponudi.

Međutim, ne zahteva svaki projekat taj nivo sofisticiranosti. Na primer, na većini sajtova, kada predstavljam isti sadržaj, voleo bih da varira način na koji je on prikazan. Na malim ekranima elemente koji nisu toliko važni postavite ispod glavnog sadržaja ili, u najgorem slučaju, sakrijte u potpunosti. Možete da pomerite dugmad za navigaciju tako da više odgovaraju dodiru prstom. Tipografija bi takode trebalo da bude skalirana zbog bolje čitljivosti, omogućavajući čitanje teksta bez potrebe stalnog povlačenja prikaza sa jedne na drugu stranu. Isto tako, dok isporučujemo sadržaj za manje prikaze, ne želimo da kompromitujerno dizajn za standardne laptop ili desktop ekrane.

## Definicija prilagodljivog web dizajna

Termin prilagodljivi web dizajn je smislio Ethan Marcotte. U svom [izvornom članku](https://alistapart.com/article/responsive-web-design) iz 2010. godine, Marcotte je ujedinio tri postojeće tehnike (fleksibilan grid razmeštaj, fleksibilne slike i medija upite) u jedan jedinstveni pristup i nazvao ga prilagodljivi web dizajn.

Stvarno prilagodljiva metodologija je, u stvari, više od pukog razmeštaja na osnovu veličina prikaza. Potrebno je da izokrenemo ceo naš aktuelni pristup web dizajnu. Umesto da započinjemo sa dizajnom desktop sajta fiksne širine i smanjujemo ga da odgovara i manjim prikazima, trebalo bi prvo da dizajniramo sajt za manje prikaze, a zatim da postepeno poboljšavamo dizajn za veće.

Ukratko rečeno, **prilagodljiv web dizajn je prikaz sadržaja na najprihvatljiviji način za bilo koju veličinu ekrana preko kojeg se pristupa**. Nasuprot tome, pravi mobilni web sajt je potreban kada korisničko iskustvo zahteva specifičan sadržaj i funkcionalnost na osnovu uređaja.

{:.uokvireno}
**Vezani ste za piksele? Prebolite to!** Nemojte se vezivati za piksele kao jedinicu mere, zato što ćete koristiti relativne jedinice mere (obično em ili procente) kada budete savladali prilagodljiv dizajn.

## Razlika prikaza i veličina ekrana

Važno je razumeti da prikaz i veličina ekrana nisu isto. Prikaz se odnosi na unutrašnjost prozora pretraživača, isključujući liniju adrese, alatke, kartice i ostalo, a veličina ekrana na čitav ekran. 

## Kratka istorija

Ako ste se sredinom 1990—tih godina bavili web dizajnom, sećate se da je tada svaki dizajn bio zasnovan na tabelama, i nalazio se unutar sadržaja. Kaskadni stilovi (*Cascading Style Sheets*, **CSS**) predstavljeni su kao način razdvajanja dizajna od sadržaja. Bilo je potrebno dosta vremena da web dizajneri prihvate novi svet dizajna zasnovanog na CSS-u, ali pojedini sajtovi, kao sto je [CSS Zen Garden](http://www.csszengarden.com/), utrli su put, prikazujući sta se sve može postići.

Od tada CSS je postao uobičajeni način definisanja prezentacionog razmestaja web stranice, sa aktuelnom verzijom CSS 2.1 specifikacije.

## Mobilni sajtovi

Nekada je mobilna verzija sajta "skrojenog" po meri mnogo bolja opcija od prilagodljivog dizajna. Rešenja fokusirana na mobilne uređaje koja pružaju različit sadržaj korisnicima takvih uređaja nazivam mobilni web sajtovi.

## Sajtovi ne treba da izgledaju isto u svim pretraživačima

Od mene se često traži da prevedem postojeći dizajn u web stranice zasnovane na HTML-u, CSS-u i JS-u. Grafički dizajneri često nemaju ništa druge na umu osim desktop verzije sajta, fiksne širine. Moj zadatak je tada da kreiram savršenu implementaciju dizajna u svakom poznatom pretraživaču.

Međutim, ako ste ikada pokušali da dobijete moderni web sajt koji izgleda isto u starom Internet Exploreru kao i modernim, standardnim, kompatibilnim pretraživačima, kao što su Safari, Firefox ili Chrome, razumećete teškoće pri obavljanju tog zadatka. Često mi je potrebno 30 procenata vremena/budžeta namenjenog za projekat da bih ispravio sve mane i nedostatke u starijim pretraživačima. To vreme bi moglo da se utroši za kreiranje poboljšanja i uštedu koda za veliki broj korisnika koji sajtove pregledaju u modernim pretraživačima, a me za "krpljenje" i hakovanje osnove koda, da bi se za mali broj korisnika Internet Explorera obezbedili zaobljeni uglovi, transparentne slike, korektno poravnanje elemenata formulara i tako dalje.

Klijentu je potrebno objašnjenje zbog čega završeni dizajn ne treba da izgleda isto u svim prikazima i pretraživačima. Neki klijenti 66 to razumeti, neki neće - pojedinci iele da svi zaobljeni uglovi i senke izgledaju identično i 11 Internet Explorera 6! Kada pristupam novom projektu, bez obzira da li je prilagodljiv dizajn primenjiv ili ne, pokušavam da mom klijentu objasnim sledeće tačke:

- Omogućavajući starijim pretraživačima da prikazuju stranice malo drugačije, pokazujem da je kod Iako održiv i jeftiniji za aiuriranje u budućnosti.
- Ako svi elementi izgledaju isto, čak i u starijim pretraZivačima (na primer, 11 Internet Exploreru 8 i starijirn verzijama) dodaje se značajan broj slika u web sajt. Zbog toga će sajt biti sporiji, skuplji za kreiranje i teži za održavanje.
- Prilagodljiv kod koji moderni pretraživači razumeju znači da je brži i web sajt. A brži web sajt se rangira mnogo bolje u mašinama za pretragu nego sporiji.
- Broj korisnika koji koriste starije pretraživače se smanjuje, a broj korisnika koj i koriste moderne pretraZivače raste — podržimo ih!
- Najvažnije je da, podrzavajući modeme pretraživače, možete da uživate u prilagodljivom web dizajnu koji odgovara različitim prikazima pretraZivača na različitim uređajima.

## Prihvatanje tečnih razmeštaja

Kada sam krajem 1990—tih godina započeo da kreiram web sajtove, strukture razmeštaja su bile zasnovane na tabeli. Najčešće je deljenje prostora na ekranu bilo izraieno procentima. Na primer, leva kolona navigacije je mogla da bude 20 procenata, dok bi područje glavnog sadržaja obuhvatalo 80 procenata. Nije bilo velikih razlika izmedu prikaza pretraživača, kao danas, pa su ovi razmeštaji funkcionisali i skalirani su dobro u ograničenom broju prikaza. Niko nije brinuo što rečenice izgledaju malo drugačije na jednom ekranu nego na drugom. Međutim, mesto ovog dizajna je preuzeo onaj koji je zasnovan na CSS—u - on omogućava da dizajn zasnovan na webu bolje oponaša otisak. Ovom promenom za mnoge programere (uključujući i mene) smanjila se upotreba dugo godina korišćenog proporcionalno zasnovanog razmeštaja u korist njegovog rigidnog konkurenta koji je zasnovan na pikselu.

Mnogo štošta staro se, s vremena na vreme, vraća "u modu". To se, na primer, dogodilo, sa mini automobilima, mini valom u kosi i izbeljenim farmericama. A sada je vreme za povratak proporcionalnih razmeštaja.

U ovom poglavlju ćete:

- naučiti zašto su proporcionalni razmeštaji potrebni za prilagodljivi dizajn
- konvertovati širine elemenata zasnovane na pikselu u proporcionalne procente
- konvertovati veličine tipografije zasnovane na pikselu u njihove ekvivalente zasnovane na emu
- naučiti kako se pronalazi kontekst za bilo koji element
- naučiti kako se slike tečno skaliraju
- naučiti kako se kreiraju različite slike za različite veličine ekrana
- razumeti kako medija upiti mogu da funkcionišu sa tečnim slikama i razmeštajima
- kreirati prilagodljivi razmeštaj od početka, koristeći CSS grid sistem

## Fiksni razmeštaji nisu za buducnost

Od davnih dana tabelarnog razmeštaja ja sam imao veoma malo potrebe da upotrebljavam proporcionalne razmeštaje. Obično su klijenti od mene tražili HTML i CSS kod koji se najbolje poklapa sa kompozicijom dizajna koji je skoro uvek bio širine 950-1.000 piksela. Ako je razmeštaj ikada bio kreiran pomoću proporcionalne širine (recimo, 90 procenata), vrlo brzo bi stigle i pritužbe: ,,Izgleda drugačije na mom monitoru“. Web stranice fiksne širine koje su zasnovane na pikselu su bile najlakši način za poklapanje fiksne dimenzije kompozicije, zasnovane na pikselu.

## Upotreba ema, umesto piksela, za tipografiju

Zašto je poželjna upotreba em jedinice mere, umesto piksela? To će svakom dizajneru/programeru olakšati život. Veličina ema je povezana sa veličinom konteksta. Ako podesimo veličinu fonta od 100 procenata za `<body>` tag i dodamo stil daljem tekstu, koristeći em jedinicu, na ceo tekst će imati uticaj inicijalna deklaracija. Kao rezultat toga, ako ste podesili sve potrebne opcije za tipografiju i klijent zatraži da svi fontovi budu malo veći, možete da promenite samo veličinu fonta za `body` i sva ostala tipografija će se proporcionalne promeniti.

Vredno je znati da svi moderni desktop pretraživači koriste 16 piksela kao standardnu veličinu fonta. Zbog toga, od samog početka, primena bilo kojeg od sledećih pravila na body tag će dati isti rezultat:

```css
body {
  font-size: 100%;
  font-size: 16px;
  font-size: 1em;
}
```

{:.uokvireno}
**Zašto em?** Nekada je slovo M korišćeno za određivanje veličine fonta, zato što je ono najšire od svih slova.

Izvor: Ben Frain, *HTML5 i CSS3: Prilagodljiv web dizajn*, Beograd, 2014.
