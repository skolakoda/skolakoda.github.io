Na početku je Veb bio samo niz naučnih publikacija u obliku statičkih HTML dokumenata
koji su bili povezani hiperlinkovima. Verovali ili ne, tada nije postojao način da se slike
postave na stranicu, ali to se ubrzo promenilo. Kako je rasla popularnost i veličina Veba,
tako su administratori veb sajtova koji su kreirali HTML stranice shvatili da im treba nešto
bolje. Hteli su da kreiraju bogatije korisničke interakcije, uglavnom zbog želje da uštede
prostor na serveru za jednostavne zadatke koje je trebalo obaviti više puta, kao što je vali-
dacija obrazaca. Nastale su dve opcije – Java apleti i LiveScript jezik, koji je osmislio Bren-
dan Eich u kompaniji Netscape 1995. godine, a koji je kasnije uveden u pregledač Netscape
2.0 pod nazivom JavaScript.

Apleti nisu masovno prihvaćeni, ali JavaScript jeste. Zajednica administratora veb sajtova je
prihvatila mogućnost upotrebe kratkih isečaka koda koji su ugrađeni u HTML dokumenta i
izmenu statičkih elemenata veb stranice. Zatim je konkurentski dobavljač pregledača „Micro-
soft“ objavio pregledač Internet Explorer (IE) 3.0 sa JScript jezikom, koji je bio obrnuta
inženjerska verzija JavaScripta sa nekim IE funkcijama. Na kraju, uložen je trud da se stan-
dardizuju različite implementacije jezika i tako je nastao jezik ECMAScript. Evropska soci-
jacija proizvođača računara (ECMA) je kreirala standard ECMA-262, u kome su opisani
osnovni delovi JavaScript programskog jezika, bez pregledača i funkcije za veb stranice.

JavaScript sadrži dva glavna dela:

- ECMAScript: osnovni jezik – promenljive, funkcije, petlje i tako dalje.
ECMAScript jezik nije povezan sa pregledačem i može da se koristi u mnogim
drugim okruženjima.

- objektni model dokumenta (DOM) - Ovaj model obezbeđuje načine za
korišćenje HTML i XML dokumenata. Na početku je JavaScript omogućavao
ograničeni pristup onim elementima koji se mogu skriptovati na stranici,
uglavnom obrascima, linkovima i slikama. Kasnije je JavaScript jezik proširen da
bi svi elementi mogli da se skriptuju. Zbog toga je World Wide Web
konzorcijum (W3C) kreirao jezički nezavisan (koji više nije povezan sa
JavaScriptom) DOM standard za manipulisanje strukturiranim dokumentima.

## Moderni JS

U današnje vreme možete da koristite JavaScript da biste:

● kreirali bogate i moćne veb aplikacije (vrste aplikacija koje funkcionišu u veb
pregledaču). Zahvaljujući dodacima za jezik HTML5, kao što su keš memorija
aplikacije, klijentska memorija i baze podataka, programiranje pregledača postaje
sve moćnije, kako za aplikacije na mreži, tako i za aplikacije van mreže. Moćni
dodaci za Chrome WebKit, takođe, sadrže podršku za radne skriptove i prosleđena
obaveštenja pregledača.

● napisali kod na strani klijenta pomoću alatke Node.js, kao i kod koji može da
funkcioniše pomoću Rhinoa (JavaScript virtuelne mašine koja je napisana u Java
jeziku)
● napravili mobilne aplikacije. Možete da kreirate aplikacije za iPhone, Android i
druge telefone i tablične računare u JavaScriptu pomoću alatke PhoneGap ili
Titanium. Osim toga, aplikacije za Firefox OS za mobilne telefone su u
potpunosti napisane u JavaScriptu, HTML-u i CSS-u. React Native kompanije
„Fejsbuk“ predstavlja novi, uzbudljivi način za razvoj izvornih iOS, Android i
Windows (Experimental) aplikacija pomoću JavaScripta.
● kreirali bogate multimedijalne aplikacije, kao što su Flash ili Flex, pomoću
ActionScripta koji se zasniva na ECMAScriptu
● napisali alatke za komandnu liniju i skriptove koji automatizuju administrativne
zadatke na vašem desktopu pomoću okruženja Windows Scripting Host (WSH)
ili WebKit JavaScriptCore, koje je dostupno na svim Mac računarima
● napisali ekstenzije i pluginove za veliki broj desktop aplikacija, kao što su
Dreamweaver i Photoshop, i za mnoge druge pregledače
● kreirali višeplatformske desktop aplikacije pomoću Mozilla alatki XULRunner i
Electron. Electron se koristi za izradu nekih najpopularnijih aplikacija na
desktopu, kao što su Slack, Atom i Visual Studio Code. Sa druge strane,
kompajler Emscripten omogućava da se kod koji je napisan u jeziku C/C++
kompajlira u format asm.js da bi, zatim, mogao da se koristi u pregledaču.
● testirali okruženja, kao što je PhantomJS, koja su programirana pomoću
JavaScripta.
● Korišćenje JavaScript jezika je započeto unutar veb stranica, ali danas možemo
sigurno reći da je on prisutan svuda. Osim toga, kompanije koje su razvile
pregledače sada koriste brzinu kao konkurentsku prednost i utrkuju se u kreiranju
najbržih JavaScript virtuelnih mašina, što je dobro i za korisnike i programere, jer
se time otvaraju „vrata“ čak i još moćnijoj upotrebi JavaScripta u novim
oblastima, kao što su obrada slika, obrada audio i video zapisa i razvoj igara.
