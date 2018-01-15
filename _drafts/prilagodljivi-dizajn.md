# Uvod u prilagodljivi dizajn

Nekada su web sajtovi kreirani sa fiksnom širinom, kao što je 960 piksela, i očekivalo se da će svi korisnici imati prilično isto iskustvo prilikom pregleda. Ova fiksna širina nije bila dovoljna za ekrane laptopa i korisnici sa monitorima visoke rezolucije imali su velike margine sa obe strane ekrana.

Nesporna je činjenica da sve većom brzinom raste broj ljudi koji koriste male uređaje sa malim ekranom za pregled interneta, ali je isto tako, sa druge strane, uobičajena i pojava upotrebe monitora od 27 i 30 inča. Sada je razlika izmedu najmanjih i najvećih ekrana za pretraživanje weba veća nego ikada ranije. Srećom, postoji rešenje za ovu raznolikost pretraživača i uređaja. Prilagodljiv web dizajn omogućava da web sajt funkcioniše na više različitih uređaja i ekrana.

## Da li postoje situacije kada prilagodljiv dizajn nije dobar izbor?

Ukoliko budžet omogućava i situacija zahteva, prava mobilna verzija web sajta verovatno može da bude najbolja opcija. Ona bi mogla da prikaže različite sadržaje, dizajn i interakciju na osnovu uređaja, lokacije, brzine konekcije i mnogo drugih varijabli, uključujući i tehničke mogućnosti uređaja. Ova vrsta rešenja zahteva mnogo više od onoga što sam prilagodljiv dizajn može da ponudi.

Međutim, ne zahteva svaki projekat taj nivo sofisticiranosti. Na primer, na većini sajtova, kada predstavljam isti sadržaj, voleo bih da
varira način na koji je on prikazan. Na malim ekranima elemente koji nisu izuzetno vaini postavite ispod glavnog sadržaja ili, u najgorem slučaju, sakrijte ih u potpunosti. Moiete da pomerite dugmad za navigaciju tako da Više odgovaraju dodiru prstom i nemojte nuditi dugmad koja odgovaraju samo korisnicima koji upotrebljavaju miš. Tipografija bi takode trebalo da bude skalirana zbog bolje čitljivosti, omogućavajući čitanje teksta bez potrebe stalnog povlačenja prikaza sa jedne na drugu stranu. Isto tako, dok isporučujemo sadržaj za manje prikaze, ne želimo da kompromitujerno dizajn za one koji koriste standardne laptop ili desktop ekrane. Kada već uključujemo sve, zašto ne bismo dodali nekoliko poboljšanja za one koji koriste velike ekrane, široke 1.900 piksela i Više?

## Definicija prilagodljivog web dizajna

Termin prilagodljivi web dizajn je smislio Ethan Marcotte. U svom [izvornom članku](https://alistapart.com/article/responsive-web-design) iz 2010. godine, Marcotte je ujedinio tri postojeće tehnike (fleksibilan grid razmeštaj, fleksibilne slike i medije i medija upite) u jedan jedinstveni pristup i nazvao ga je prilagodljivi web dizajn.

Stvarna prilagodljiva metodologija je, u stvari, više od samog pomeranja razmeštaja sajta na osnovu veličina prikaza. Potrebno je da izokrenemo ceo naš aktuelni pristup web dizajnu. Umesto da započinjemo sa dizajnom desktop sajta fiksne širine i smanjujemo ga tako da sadržaj odgovara i manjim prikazima, trebalo bi prvo da dizajniramo sajt za manje prikaze, a zatim da postepeno poboljšavamo dizajn i sadržaj za veće prikaze.

Ukratko rečeno, prilagodljiv web dizajn je prikaz sadržaja na najprihvatljiviji način za bilo koju veličinu ekrana preko kojeg se pristupa sadržaju. Nasuprot tome, pravi mobilni web sajtje potreban kada iskustvo zahteva specifičan sadržaj i funkcionalnost na osnovu uređaja sa kojeg mu pristupate.

{:.uokvireno}
**Vezani ste za piksele? Prebolite to!** Nemojte se vezivati za piksele kao jedinicu mere, zato što ćete koristiti relativne jedinice mere (obično: em ili procente) kada budete dobro savladali prilagodljiv dizajn.

## Prikaz ili veličina ekrana

Važno je da razumete da prikaz i veličina ekrana nisu jedno isto. Prikaz se odnosi na područje sadržaja unutar prozora pretraživača, isključujući Iinije sa alatkama, kartice i tako dalje, a veličina ekrana na fizičko područje prikaza na uređaju. Budite pailjivi, jer neke alatke za promenu veličine pretraživača prikazuju veličinu, uključujući i elemente pretraživača, kao što su linija adrese, kartice i polja za pretraživanje, a druge alatke ih ne uključuju.

## CSS3 omogućava prilagodljiv dizajn i više od toga

Ako ste se sredinom 1990—tih godina bavili web dizajnom, sećate se da je tada svaki dizajn bio zasnovan na tabelama i bio unutar sadržaja. Cascading Style Sheets (CSS) predstavljeni su kao način razdvajanja dizajna od sadržaja. Bilo je potrebno dosta vremena za web dizajnere da prihvate novi svet dizajna zasnovanog na CSS-u, ali pojedim' sajtovi, kao sto je [CSS Zen Garden](http://www.csszengarden.com/), utrli su put, prikazujući sta se sve može postići na vizuelnom planu pomoću takvog dizajna.

Od tada CSS je postao uobičajeni način definisanja prezentacionog razmestaja web stranice, sa aktuelnom verzijom CSS 2.1 specifikacije.

## Kako CSS3 može da reši svakodnevne probleme u dizajnu?

Ja na početku obično pitarn sledeće:

- Da li klijent želi da podrži najveće tržište korisnika interneta? Ako je odgovor potvrdan, prilagodljiva metodologija je odgovarajuća.
- Da li klijent razume da iskustvo pretrage može i treba da bude malo drugačije u različitim pretraživačima? Ako je odgovor potvrdan, prilagodljiva metodologija je odgovarajuća.
- Da li klijent zahteva da dizajn izgleda identično u svim pretraživačima, uključujući i starije verzije Internet Explorer-a? Ako je odgovor potvrdan, prilagodljiva metodologija nije odgovarajuća.

Takode je važno da ponovim da će, ako budžet omogućava, možda biti prilike kada je mobilna verzija web sajta "skrojenog" po meri mnogo bolja opcija od prilagodljivog dizajna. Da bih to preciznije objasnio, rešenja fokusirana na mobilne uređaje koja pružaju različite sadržaje korisnicima takvih uređaja nazivam mobilni web sajtovi.

## Sajtovi ne treba da izgledaju isto u svim pretraživačima

Od mene se često traži da konvertujem postojeći grafički dizajn u standardne web stranice zasnovane na HTML-u/CSS-u i jQueryju. Nikada se nije desilo da grafički dizajneri imaju bilo šta druge na umu osim desktop verzije sajta fiksne širine kada kreiraju dizajn. Moj zadatak je tada da kreiram savršenu interpretaciju piksela konkretnog dizajna u svakom poznatom pretraživaču. Moj neuspeh ili uspeh u izvršenju ovog zadatka definiće uspeh u očima mog klijenta, grafičkog dizajnera. Ovaj način razmišljanja je posebno karakerističan za klijente koji su radili medijski dizajn u štampanom izdanju. Njihovo rezonovanje je jednostavno razumeti; kompoziciju dizajna potpišu klijenti, oni ga prosleduju frontend dizajneru/programeru (vama ili meni), a mi se tada trudimo da završeni kod izgleda najbolje moguće za taj dizajn u svim glavnim pretraživačima.

Međutim, ako ste ikada pokušali da dobijete moderni web sajt koji izgleda isto u Internet Exploreru 6 i 7 kao i u modernim, standardnim i kompatibilnim pretraživačima, kao što su Safari, Firefox ili Chrome, razumećete teškoće pri obavljanju tog zadatka. Cesto mi je potrebno 30 procenata vremena/budieta namenjenog za projekat da bih ispravio sve mane i nedostatke u ovim starijim pretraživačima. To vreme bi moglo da se utroši za kreiranje pobolj šanja i uštedu koda za veliki broj korisnika koji sajtove pregledaju u modernim pretraživačima, a me 23 "krpljenje" i hakovanje osnove koda da bi se za mali broj korisnika Internet Explorera obezbedili zaobljeni uglovi, transparentne slike, korektno poravnanje elemenata formulara i tako dalje.

Klijentu je potrebno objašnjenje zbog čega zavrfieni dizajn ne treba da izgleda isto u svim prikazima i pretraživačima. Neki klijenti 66 to razumeti, neki neće - pojedinci iele da svi zaobljeni uglovi i senke izgledaju identično i 11 Internet Explorera 6! Kada pristupam novom projektu, bez obzira da li je prilagodljiv dizajn primenjiv ili ne, pokušavam da mom klijentu objasnim sledeće tačke:

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
