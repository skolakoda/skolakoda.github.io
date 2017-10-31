# Planiranje softvera

Faza planiranja može da obuhvati sledeće zadatke:
- analizu i specifikovanje problema,
- modelovanje rešenja,
- dizajn softverskog rešenja.

Analiza se pre svega bavi samim problemom tj. njegovom preciznom postavkom i formulacijom, dok se modelovanje i dizajn bave rešenjem problema koji je definisan u fazi analize. U fazi planiranja sistema obično se koriste različite dijagramske tehnike i specijalizovani alati koji podržavaju kreiranje ovakvih dijagrama (tzv. CASE alati – Computer Aided Software Engineering).

## Analiza i specifikovanje problema

S obzirom na to da se softver obično piše za naručioce, u procesu analize i specifikovanja problema vrši se intenzivna komunikacija analitičara sa njima. Kada se softver pravi po narudžbini, naručioci mogu da budu krajnji korisnici ili njihovi predstavnici, ali čest slučaj u velikim kompanijama je da ulogu naručioca preuzimaju radnici zaposleni u odeljenju prodaje ili marketinga (koji imaju ideju kakav proizvod bi kasnije mogli da prodaju).

Tokom sastanaka često se najpre vrši analiza postojećih rešenja (na primer, postojećeg poslovnog procesa u kompaniji koja uvodi informacioni sistem) i razmatraju se mogućnosti njihovog unapređenja uvođenjem novog softvera. Kako naručioci obično nemaju potrebno informatičko obrazovanje, oni često nisu svesni svih mogućnosti koje novi softver može da im pruži. Jedan od zadataka analitičara je da ovakve mogućnosti uočava i da o njima komunicira sa naručiocima. Naručioci formulišu zahteve (engl. requirements) koje softver koji se proizvodi treba da zadovolji. Zahtevi su često neprecizni, pa čak i kontradiktorni, i zadatak analitičara je da ih u saradnji sa naručiocima precizira i uobliči.

Pored precizne analize zahteva, zadatak analize je i da se naprave procene obima, cene i vremena potrebnog da se projekat realizuje. Preciznije, analiza treba da proceni:

- obim posla koji će da se radi (potrebno je precizno definisati šta projekat treba da obuhvati, a šta ne);
- rizike koji postoje (i da definiše odgovarajuće reakcije projektnog tima u slučaju da nešto pođe drugačije nego što je planirano);
- resurse (ljudske, materijalne) koji su potrebni;
- očekivanu cenu realizacije projekta i njegovih delova;
- plan rada (po fazama) koji je neophodno poštovati.

Obim posla često se izražava u terminima broja potrebnih čovek-meseci (1 čovek-mesec podrazumeva da jedan čovek na projektu radi mesec dana).

Rezultat analize je precizna specifikacija problema. Specifikacijom je potrebno što preciznije opisati problem, prirodu ulaznih podataka i oblik u kome se žele rešenja — izlazni rezultati. Specifikacija programa bavi se pitanjem šta program treba da uradi, kojom brzinom, koja mu je maksimalna dozvoljena veličina, itd. Kada je problem precizno specifikovan, prelazi se na sledeće faze u kojima se modeluje i dizajnira rešenje specifikovanog problema.

## Modelovanje rešenja

Modelovanje rešenja obično sprovodi projektant, koji mora da razume specifikaciju problema i da je u stanju da izradi matematičke modele problema i da izabere adekvatna softverska rešenja, npr. programski jezik, bazu podataka, relevantne biblioteke, strukture podataka, matematički opis problema, algoritamska rešenja, itd.

## Dizajn softverskog rešenja

Tokom dizajna vrši se preciziranje rešenja imajući u vidu konkretnu hardversku i softversku platformu na kojoj rešenje treba da bude realizovano. Koncepti koji su u ranijim fazama nezavisni od konkretnih tehnologija se razrađuju i dobija se opšti plan kako sistem treba da bude izgrađen na konkretnoj tehnologiji. Tokom dizajna često se koriste neki unapred ponuđeni uzorci (engl. design patterns) za koje je praksa pokazala da predstavljaju kvalitetna rešenja za određenu klasu problema.

U jednostavnijim slučajevima (na primer kada softver treba da radi autonomno, bez korisnika i korisničkog interfejsa), dizajn može biti dat i u neformalnom tekstualnom oblik ili u vidu jednostavnog dijagrama toka podataka tj. tokovnika (engl. data flow diagram). U kompleksnijim slučajevima mogu se koristiti napredniji sistemi poput UML (Unified Modeling Language). UML je standardizovana grafička notacija (kaže se i grafički jezik ) koja omogućava modelovanje podataka, modelovanje poslovnih procesa i modelovanje softverskih komponenti. UML može biti korišćen i u drugim fazama životnog ciklusa softvera.

Osnovni pojmovi dizajna softvera su:
- Apstrahovanje (engl. abstraction) – apstrahovanje je proces generalizacije kojim se odbacuju nebitne informacije tokom modelovanja nekog entiteta ili procesa i zadržavaju samo one informacije koje su bitne za sam softver. Tokom apstrakcije vrši se i identifikacija srodnih entiteta. Na primer, apstrahovanjem se uočava da boja očiju studenta nema nikakvog značaja u informacionom sistemu fakulteta i ta informacija se onda odbacuje prilikom predstavljanja studenta u sistemu. Apstrahovanje podrazumeva i apstrahovanje kontrole programa, i apstrahovanje podataka. Objekti i klase u objektno-orijentisanom programiranju kombinuju ova dva oblika apstrahovanja.
- Profinjavanje (engl. refinement) – profinjavanje je proces razvoja programa odozgo-naniže. Nerazrađeni koraci se tokom profinjavanja sve više preciziraju dok se na samom kraju ne dođe do sasvim preciznog opisa u obliku izvršivog programskog kôda. U svakom koraku jedna ili više funkcija tj. naredbi se razlaže na detaljnije funkcije tj. naredbe. Na primer, poziv pozovi_prijatelja() može da se razloži na idi_do_telefona() , podigni_slusalicu() , okreni_broj() , itd. Apstrahovanje i profinjavanje međusobno su suprotni procesi.
- Modularnost (engl. modularity) – softver se deli na komponente koje se nazivaju moduli. Svaki modul ima precizno definisanu funkcionalnost i poželjno je da moduli što manje zavise jedni od drugih kako bi mogli da se koriste i u drugim programima.

- Sakrivanje informacija (engl. information hiding) – moduli treba da budu dizajnirani tako da njihove unutrašnje informacije ne mogu biti dostupne iz drugih modula (tako se smanjuje zavisnost između modula i postiže se unutrašnja koherentnost svakog modula). Korisnicima modula važno je samo koju funkcionalnost im taj modul pruža, ali ne i način na koji je ta funkcionalnost realizovana.
- Arhitektura softvera (engl. software architecture) – arhitektura se odnosi na celokupnu strukturu softvera i načine na koje ta struktura obezbeđuje integritet i uspeh sistema. Dobra arhitektura treba da obezbedi željeni ishod projekta (dobre performanse, kvalitetan softver, poštovanje rokova i uklapanje u planirane troškove).
- Podela strukture (engl. structural partitioning) – struktura programa treba da bude podeljena i vertikalno i horizontalno. Horizontalna podela definiše hijerarhiju modula za svaku krupniju funkcionalnost softvera. Vertikalna podela sugeriše da kontrola i podela posla treba da bude distribuirana odozgo naniže u strukturi programa.

Jedna od najznačajnijih veština potrebnih za razvoj dobrih programa je strukturna dekompozicija.

Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
