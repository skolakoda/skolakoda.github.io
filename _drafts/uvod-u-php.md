# Početak rada sa PHP-om

Prvi korak u kreiranju interkativnih Web strana je da se dobije pristup do Web servera na kome PHP radi. Vaš Internet Service Provider (ISP) verovatno već podržava PHP. To možete proveriti ako pitate osoblje za podršku koje radi za tog ISP provajdera ili možete da sami isprobate da li to radi. Postoje dva načina da sami probate podršku za PHP. Prvi način je da, ako možete, otvorite prozor za unos komandi i povežete se sa Web serverom preko nekog programa, kao što su Telnet, SSH ili SSH2 (nemojte brinuti ako ne znate kakve su to aplikacije, jer Vam u ovoj knjizi nije ni potrebno), otkucate php -v na komandnoj liniji (u knjizi ćemo kao oznaku za unos komande sa komandne linije koristiti znak za %). Ako je PHP instaliran, rezultat treba da izgleda ovako:

```
%php -v
PHP 5.0.0 (cli) (built: Jul 13 2004 21:39:58)
Copyright (c) 1997-2004 The PHP Group
Zend Engine v2.0.0, Copyright (c) 1998-2004 Zend Technologies
```

Drugi način da odredite da li je PHP instaliran je da probate neki PHP skript. To možete da uradite ako pročitate odeljak "Kreiranje prvog PHP skripta" u ovom poglavlju. Ako skript radi, PHP je instaliran i sve je podešeno.

## Lokalna instalacija PHP-a

Nije loše da na svom računaru instalirate PHP tako da prilikom razvoja možete da isprobate svoje skriptove. U tom slučaju nećete morati da trošite vreme na prebacivanje skriptova na računar provajdera, da ih onda isprobate preuzimanjem u svom pretraživaču, pa da u slučaju grešaka sve radite iz početka. Neki operativni sistemi, kao što su Linux i mnoge verzije Unixa, sada se isporučuju sa već instaliranim PHP-om. Kod drugih operativnih sistema, kao što su Windows ili Mac OSX, moraćete da sami preuzmete i instalirate PHP. Prvi korak je da proverite da li ste instalirali PHP u lokalu. Primenite komandu php -v (ovo se radi u prozoru za unos komandi - na primer, na Windowsu u DOS prozoru). Ako radi, onda je već sve podešeno. PHP možete sami instalirati. Postoje unapred pripremljene verzije za različite operativne sisteme, koje se mogu preuzeti. Postoje verzije za operativne sisteme Windows, Mac OSX, Novell NetWare, OS/2, RISC OS, SGI IRIX 6.5x i AS/400. Binarni paket sa instalacijom za Windows možete pronaći na adresi http://www.php.net/downloads.php. Tu su i linkovi na verzije za druge opera- tivne sisteme.

Instrukcije za instalaciju PHP možete pronaći u dokumentaciji za PHP, koja se nalazi na adresi http://www.php.net/docs.php (kompletnu dokumentaciju možete da pruzmete sa adrese http://www.php.net/download-docs.php). Instrukcije za instalaciju naći ćete i u datoteci za instalaciju (obično datoteka pod nazivom install.txt), koja se dobija kada se dekompresuje ono što ste preuzeli. Pošto se instrukcije menjaju svaki put kada se promeni PHP i pošto postoji puno operativnih sistema i Web servera, trebalo bi da koristite najnovije instrukcije i da po njima postupate. Prikazivanje svih instrukcija ovde bi oduzelo 20 strana, a one bi ionako zastarele do trenutka kada dođu do Vas.

Evo kako bi "stvari" mogle da izgledaju za Windows (detaljnije informacije se mogu naći u instrukcijama za intalaciju koje skidate sa Interneta). Prvo Vam je potreban Web server, kao što su Apache ili Microsoftov Internet Information Server (IIS). Program za instalaciju Apache servera na Windows može se preuzeti na adresi http://httpd.apache.org/dowload.cgi. Kada ovaj fajl preuzmete i dva puta ga brzo kliknete, instaliraće se Apache.

Naredni korak je da instalaciju PHP-a povežete sa Web serverom. Ako koristite Apache, trebalo bi da promenite i datoteku http.cong.

## Podešavanje razvojnog okruženja

Da biste mogli da pravite PHP strane, potrebanVam je neki editor teksta. Postoje različiti editori, koji se koriste na različitim operativnim sistemima, kao što su, na primer, vi, emacs, pico, BBEdit ili SimpleText za Macintosh ili Notepad i WordPAd za Windows.

PHP datoteke su često mešavina HTML-a i PHP koda. Podrazumevana ekstenzija PHP datoteka je .php. PHP deo je skripta koja se nalazi između oznaka <?php i ?> .

Za kreiranje PHP datoteka možete da koristite i neko integrisano razvojno okruženje za PHP (IDE). U ovakvim okruženjima imate na raspolaganju alate kojih nema kod običnih tekstualnih editora. Tu mislim na automatsku proveru onog što ste napisali da biste bili sigurni da je PHP kod ispravan i automatsko isticanje sintaktičkih elemenata (na primer, ključne reči PHP-a se prikazuju u drugoj boji, tako da lako možete da vidite šta ste uradili). Tu je i automatsko postavljanje, jer IDE može da prebaci Vaše PHP strane kod Vašeg ISP provajdera ako kliknete odgovarajuće dugme ili iz menija izaberete odgovarajuću stavku.

Ako radite sa nekim ISP provajderom, potreban Vam je i neki način za transport PHP strana na njegov računar. Isto je važi i za obične HTML strane. Možete koristiti FTP (File Transfer Protocol) program ili Web interface, ako takav postoji. Ako ranije niste prebacivali Web strane na računar provajdera, konsultujte se sa provajderovim osobljem za podršku. Ti ljudi će Vas verovatno uputiti na neki FTP program ili Web interfejs koji su napravili. PHP strane se prebacuju i pokreću isto kao i obične HTML strane, naravno ako server podržava PHP.

## Kreiranje prvog PHP skripta

Sve počinje kreiranjem PHP skripta. Sa PHP-om koji radi na serveru možete da radite mnogo štošta što ranije niste mogli: da vadite podatke iz baze podataka, da proverite nečiju lozinku, da odštampate tekst dobrodošlice, da koristite "kolačiće", da pravite knjigu posetilaca, da pravite interaktivne strane, da računate porez, ili čak da pravite svoje aplikacije za rad sa potrošačkom korpom. Sve to može da radi nezavisno 24 časa dnevno, čak i kada Vi mirno spavate u svom krevetu.

Vaša prva PHP strana će biti jednostavna, sa jednostavnim PHP skriptom. Na istoj Web strani možete da mešate PHP i HTMO, ali morate da imate na raspolaganju neki način da ih držite odvojeno. Ovo se radi tako što se PHP kod piše u okviru specijalnih tagova <?php i ?> :

```
<?php
.
. Your PHP goes here....
.
?>
```

NAPOMENA
Ovo se još može skratiti ako u datoteci php.ini uključite opciju short tags (skraćene oznake). To je datoteka koju PHP koristi za konfiguraciju. U tom slučaju možete da koristite samo oznake <? i ?>. Ja to ne bih preporučio, pošto će Vaši skriptovi često biti upotrebljavani i na drugim serverima, pored onog koji ste Vi podesili, tako da može doći do konflikta sa drugim skript jezicima.

Unutar ovih oznaka se nalaze PHP skriptovi, koji se sastoje od PHP iskaza, koji završavaju znakom tačka-zarez. Taj znak je bitan, pošto on "saopštava" PHP-u da je tekući red završen. Možda ste radili sa drugim skript jezicima, kao što je JavaScript, kod kojih je upotreba znaka tačka-zarez opciona, kod PHP-a ona je obavezna. Naš prvi PHP skript je bio standardan. Koristili samo samo jedan iskaz - phpinfo() . Kao što ćete videti, PHP iskazi mogu da rade različite stvari. Ovaj koristi funkciju phpinfo , koja prikazuje informacije o verziji PHP-a koja se koristi. Kada takvu funkciju pozovete po nazivu, izvršavaju se svi iskazi koji se u njoj nalaze. Funkcija phpinfo je jedna od mnogih funkcija koje su ugrađene u PHP i koje su spremne za upotrebu. Funkcije mogu da sadrže stotine redova koda, a sve što mi treba da uradimo je da tu funkciju pozovemo preko njenog naziva.

U ovom slučaju će funkcija phpinfo kreirati HTML tabelu u kojoj se nalaze informacije o Vašoj instalaciji PHP-a. Evo kako se funkcija poziva preko jednog iskaza:

```
<?php
phpinfo();
?>
```

Unesite ovaj skript u svom editoru teksta, i upamtite datoteku pod nazivom phpinfo.php.

Čestitamo! Upravo ste kreirali svoj prvi PHP skript. Nije loše. Nakon što ste kreirali datoteku phpinfo.php, sledeći korak je da je upamtite na Web serveru, na mestu dakle server može da je pročita. Ako radite sa nekim ISP provajderom, prebacite datoteku phpinfo.php na mesto gde se smeštaju standardne Web strane. To ćete uraditi isto kao što prebacujete i obične HTML strane pomoću FTP programa ili Web interfejsa.

Ako radite u lokalu i ako ste na svom računaru instalirali PHP i Web server, datoteku phpinfo.php stavite na mesto gde server može da je pronađe. Kod Apache servera to je fascikla htdocs, koja se nalazi ispod fascikle na kojoj je instaliran Apache. Kod IIS servera to je fascikla inetpub/wwwroot. Na Linuxu to može biti fascikla /var/www/html. Nakon što ste proverili da li je Vaš Web server konfigurisan da radi sa PHP-om (prema instrukcijama za instalaciju koje ste preuzeli sa sajta www.php.net ), pokrenite Web server.

## Izvršenje prvog PHP skripta

Da biste izvršili datoteku phpinfo.php, treba samo da je otvorite u svom pretraživaču, kao i bilo koju drugu Web stranu. To znači da je potrebno da pretraživač usmerite na URL adresu za phpinfo.php. Ako PHP koristite lokalno, potražite adresu http:/localhost/phpinfo.php.

Ako je sve u redu, trebalo bi da se prikaže tabela sa informacijama o PHP-u. Čestitamo - postali ste PHP programer :) Ako krenete naniže, možete da pronađete informacije o Vašoj konfiguraciji PHP-a. Ako ste se ikad pitali koja je verzija PHP-a kod Vas instalirana, sada je trenutak da to proverite.

## [ta učiniti ako ovo ne radi?

Nažalost, štošta može da "pođe naopako" kada prvi put pokušavate da pokrenete PHP. Ako ne ide sve po planu, nemojte paničiti. Potrebno je samo da utrošite malo dodatnog vremena. Možda ste dobili praznu stranu, ili ili poruku da datoteka nije pronađena, ili se pojavila neka druga greška. Bez obzira šta se desilo, problem se može rešiti. Prvo što treba da proverite, ako PHP radi u lokalu, je da vidite da li je PHP podignut. Na komandnoj liniji u fascikli sa instalacijom PHP-a i otkucajte php -v. Ako se prikaže verzija PHP-a, onda on radi. Ako možete da komandnu liniju otvorite i na računaru svog ISP provajdera, na primer, preko Telneta ili SSH2 aplikacije, možete da izvršite isti test. Sledeće što treba da proverite je da li je PHP instaliran na pravi način. Ovo je problem koji dovodi do prikazivanja prazne strane i, kada u svom pretraživaču izaberete opciju view source, moći ćete da vidite PHP skript. To znači da Web server nije prosledio skript do PHP-a koji treba da ga izvrši. Ovo može biti problematično i to je razlog što su instrukcije na sajtu www.php.net tako obimne. Najbolja ideja je da sve pročitate još jednom, red po red, i tako proverite da li ste uradili sve što je tamo navedeno.

Nakon toga, treba da proverite da li je datoteka phpinfo.php tamo gde Web server očekuje da bude. Kao što sam pomenuo, kod Apache servera lokacija je fascikla htdocs, koja se nalazi u fascikli gde je Apache nstaliran. Kod IIS-a to je fascikla inetpub/www- root. Na Linuxu to može biti /var/www/html. Prava fascikla može biti različita u zavisnosti od servera koji se koristi. Na PH serveru koji ja koristim prava fascikla je /httpdocs/ROOT. Ako ste phpinfo.php prebacili na uobičajeni direktorijum na računaru provajdera (tamo gde se stavljaju HTML strane) i ako to ne radi, pitajte ISP provajdera. Ponekad je potrebno da on definiše podršku za određene fasickle. Neki ISP provajderi traže da za svoje PHP skriptove koristite drugu ekstenziju, kao što je, na primer, .php5, u slučaju verzije PHP5.

## Mešanje sa HTML kodom

PHP datoteke najčešće predstavljaju mešavinu HTML-a i PHP skriptova. Postavljanje HTML-a i PHP skriptova u isti dokument nije problem, pošto se PHP iskazi nalaze između oznaka <?php i ?> , što znači da server može lako da ih prepozna. Već znate kako HTML radi na Web stranama. Ako, na primer, ubacite neki HTML kod koji prikazuje tekst, tekst se prikazuje kada Web server stigne do reda na strani u kome se nalazi taj tekst. Slično tome, ako PHP skript kreira neki tekst koji treba da se ubaci na Web stranu i pošalje nazad do pretraživača, tekst se na stranu ubacuje na mestu gde je bio skript.

Pogledajte primer 1.1, phphtml.php. U datoteci se nalazi mešavina HTML-a i PHP-a. Kao što vidite, HTML definiše naslov dokumenta (koji se prikazuje u zaglavlju pretraživača), pri čemu se preko oznake <H1> prikazuje tekst Mixing HTML and PHP, i to velikim masnim slovima.

```
<HTML>
<HEAD>
<TITLE>
Mixing HTML and PHP!
</TITLE>
</HEAD>
<BODY>
<H1>
Mixing HTML and PHP!
</H1>
<?php
phpinfo();
?>
</BODY>
</HTML>
```

Nakon HTML elementa <H1> server nailazi na PHP skript, što znači da se izlaz iz funkcije phpinfo ubacuje na Web stranu, koja se šalje nazad do pretraživača. Izlaz se ubacuje baš na tom mestu. Kao što znate, funkcija phpinfo kreira HTML tabelu sa informacijama o instalaciji PHP-a, tako da rezultat treba da izgleda kao na slici 1.1. Prvo se prikazuje HTML zaglavlje, a onda sledi tabela sa informacijama o PHP-u.

## Kako ćete odštampati neki tekst?

Iskaz echo, koji na Web stranu ubacuje tekst, predstavlja jedan od iskaza koji se u PHP-u najviše koriste. Mi ćemo taj iskaz koristiti za prikazivanje nečeg što je urađeno u PHP-u. Počećemo odmah. Iskaz echo se koristi jednostavno pomoću ključne reši echo, iza čega pod navodnicima sledi tekst koji treba da se prikaže. U sledećem skriptu možete videti kako se prikazuje tekst "Hello from PHP".

```
<H1>some text</H1>
<?php
echo “Hello from PHP.”;
?>
```

Pošto na HTML strani možete da imate više razbacanih skriptova, tekst možete da prikazujete na više mesta.

Tekst koji želite da prikažete možete da stavite pod jednostruke ili dvostruke navodnike.

## Dodatna snaga kod štampanja

Između prikazivanja teksta na komandnoj liniji i u pretraživaču postoji razlika. U pretraživaču možete da koristite HTML elemente, kao što su <BR> ili <P> i da tako formatirate svoj tekst. Kada tekst štampate sa komandne linije, za formatiranje možete da koristite specijalne karaktere (ako tekst stavite pod dvostruke navodnike). Evo koji su karakteri specijalni:

```
\n Novi red
\r Return
\t Tab
\\ Prikazuje se \
\$ Prikazuje se $.
\" Prikazuje se " .
\0 do \777 Prikazuje se karakter koji odgovara heksadecimalnom (sa
osnovnom 8) kodu.
\x0 do \xFF Prikazuje se karakter koji odgovara heksadecimalnom (sa
osnovom 16) kodu.
```

Na primer, iskaz echo "Line 1\nLine 2" prikazuje tekst "Line 1" u jednom redu i "Line 2" u sledećem (ako PHP radi na komandnoj liniji). U pretraživaču karakter \n ne znači ništa. Isti rezultat biste dobili ako biste napisali "Line 1 <BR> Line 2".

Ako želite, možete da dugačak string koji je pod navodnicima u Vašem skriptu razložite na nekoliko redova. Ti novi redovi će se prikazati ako štampate sa komandne linije. Ako štampate sa Web strane, prekidi redova će se zanemariti.

```
<?php
echo "This text
spans
multiple
lines.";
?>
```

Stavke koje štampate možete i da odvojite zarezima. Evo kako se to radi:

```
echo "Hello", "this", "is", "PHP.";
```

Sve stavke koje ste na ovaj način odštampali štampaju se jedna iza druge:
```
HellothisisPHP.
```

Ako želite da između reči ubacite razmake, možete da uradite sledeće:
```
echo "Hello ", "this ", "is ", "PHP.";
```

Tada ćete dobiti:
```
Hello this is PHP.
```

Ako želite da odštamapte neki specijalni karakter (kao što je "), a da pri tome ne naredite PHP-u da prekine tekst (pošto je " oznaka za kraj teksta), možete da koristite \" . Evo kako se to radi:

```
echo "He said, \"I like ice cream.\"";
```

Ovo se naziva izvlačenje (escape) navodnika, tako da PHP prikazuje njega, a ne tretira ga kao oznaku kraja teksta.

Više posebnih nizova karaktera možete da u PHP-u spojite pomoću tačke (.). Evo primera:

```
echo "Hello " . "this " . "is " . "PHP.";
```

U ovom slučaju PHP uzima izraz "Hello " . "this " . "is " . "PHP." i sklapa reči zajedno (ovo se naziva konkatenacija) u jedan niz karaktera.

Pored iskaza echo, možete da koristite i PHP iskaz print. On ima istu sintaksu: print "Hello from PHP." ;. Koja je razlika između iskaza echo i print ? Nije velika. Print je više PHP funkcija (pogledajte Poglavlje 4 o funkcijama), tako da on vraća vrednost koja je uvek 1. Kao i kod drugih funkcija, i ovde možete da tu vrednost pročitate, ali u ovom slučaju sa njom ne možete mnogo da radite. U većini praktičnih primera echo i print rade isto, tako da možete da koristite bilo koji od njih.

## Izvršavanje PHP-a sa komandne linije

Pored toga što PHP možete da povežete sa Web serverom tako da taj server čita skriptove i izvršava ih, PHP može da se pokrene i sa komandne linije. To može biti dobro za testiranje pre nego što pređete na prebacivanje datoteka na računar ISP provajdera. PHP je jezik koji se interpretira. To znači da u trenutku izvršenja PHP interpreter čita skript i interpretira svaki iskaz, konvertujući ga u kod koji računar može da izvrši. U verziji PHP 5.0 program koji interpretira komandnu liniju zove se Command Line Interpreter (CLI) i dato mu je ime php. Program koji radi na Web serveru zove se php-cgi.

PHP možete da sa komandne linije pozovete komandom php. Morate biti sigurni da računar može da pronađe php, što znači da morate biti sigurni da je php (fascikla bin PHP-a) u putanji na računaru na kojem php radi. Na primer, pod pretpostavkom da imate skript echo.php:

```
<?php
echo “Hello from PHP.”;
?>
```

Ako je php u Vašoj putanji, onda ovo možete da pokrenete sa komandne linije na sledeći način (% je oznaka za odziv na svim računarima, a u konkretnom primeru se podrazumeva da se nalazite u fascikli na kojoj je i program echo.php):
```
%php echo.php
```

Ako ovo funkcioniše, prikazaće se tekst
```
Hello from PHP.
```

Ako ne funkcioniše, možete da zadate tačnu lokaciju php-a, koji bi na Unixu ili
Linuxu mogla biti:
$/usr/local/bin/php echo.php

Program CLI ima puno opcija koje se koriste na komandnoj liniji, koje možete koristiti za podešavanja njegovog rada. Php će Vam "reći" sve o opcijama koje postoje ako unesete `php -h`. Dobićete punu listu opcija.

Ako, na primer, želite da dobijete jednostavnu tekstualnu verziju informacija koje štampa funkcija phpinfo, možete koristiti opciju -i. To se radi ovako: `php -i`.

## Rukovanje podacima: promenljive

Sve poruke koje smo do sada prikazivali bile su fiksne i nepromenljive.
```
<?php
echo “Hello from PHP.”;
?>
```

Ovim se samo prikazuje tekst i ništa više. Ako bi to bilo sve, PHP ne bi ni bio potreban - isti efekat bi mogao da se postigne korišćenjem HTML-a. Suština PHP-a je u dinamičkom rukovanju podacima. Za tu svrhu se koriste promenljive.

Promenljive su kontejneri podataka. Recimo, na primer, da prodajete šešire preko Weba i da želite da proverite ukupne zalihe u sva tri magacina, koji se nalaze u čikagu, Tokiju i Parizu. Da biste to uradili, morate da zajedno ubacite tri posebne vrednosti. PHP ima ugrađenu podršku za matematičke operacije nad podacima, uključujući i sabiranje. Prema tome, da biste sabirali vrednosti, možete da koristite operator +. Sledeći skript, na primer, štampa "I have 6 tomatoes" (Imam šest paradajza).

```
<?php
echo “I have “ , 1 + 2 + 3 , “ tomatoes”;
?>
```

Primetićete da smo ovde koristili brojeve, što je različito od običnog teksta. Pošto brojevi nisu tekst, nisu pod navodnicima. Rezultat je dobar, ali je još uvek statički, pošto smo u skript jednostavno stavili 1+2+3. Kako ćemo sabrati brojeve koji pokazuju količine šešira u čikagu, Tokiju i Parizu? To je trenutak kada "u igru" ulaze promenljive. U PHP-u one počinju oznakom za dolar $. Promenljive mogu da sadrže podatke; ako u promenljivim pod nazivima $čikago, #tokyo i $paris smestite broj šešira, evo kako biste mogli da to sabirate u vreme izvršenja:

```
<?php
echo “I have “ , $chicago + $tokyo + $paris , “ party hats!”;
?>
```

Ispravan naziv promenljive u PHP-u počinje slovom ili podvlakom, iza čega sledi proizvoljan broj slova, broja ili podvlaka. Naziv može imati proizvoljnu dužinu. Evo nekih ispravnih naziva promenljivih: `$pizza_temperature, $_number_of_tigers, $planet_number_9`.

Kao što vidite, promenljive se ponašaju kao skladište za podatke. Kako ćete te podatke smestiti u promenljive?

## Dodeljivanje vrednosti promenljivim

Kada u PHP-u želite da kreirate promenljivu, podatke joj dodeljujete pomoću operatora dodele. Operatore dodele koji postoje u PHP-u ćemo detaljnije predstaviti u Poglavlju 2, a sada ćemo objasniti samo onaj koji se najviše koristi - operator jednako =. Evo jednog primera u kojem se koristi operator jednako za dodeljivanje vrednosti novim promenljivim (nakon što se ovaj program izvrši, promenljiva $temperature će imati vrednost 69, vrednost $pi iznosiće 3.14159265, itd).

```
$temperature = 69;
$number_of_earths = 1;
$pi = 3.1415926535;
$reassurance = "No worries.";
```

Primetićete da smo nekim promenljivim dodelili brojčane, a nekim tekstualne vrednosti. U pojedinim jezicima morate da zadate tip promenljive (na primer, string ili integer), ali u PHP-u to ne važi, pa je sve mnogo lakše.

U ovom slučaju smo promenljivoj $apples dodelili vrednost 1, a zatim smo prikazali vrednost koja je u toj promenljivoj.

```
echo “Setting number of apples to 1.<BR>”;
$apples = 1;
echo “Number of apples: “, $apples, “<BR>”;
```

Recimo da sada želite da povećate broj jabuka za tri. To možete uraditi ako vrednosti $apples dodelite trenutnu vrednost $apples , uvećanu za 3, nakon čega novi rezultat treba da se prikaže.

```
echo “Setting number of apples to 1.<BR>”;
$apples = 1;
echo “Number of apples: “, $apples, “<BR>”;
echo “Adding 3 more apples.<BR>”;
$apples = $apples + 3;
echo “Number of apples now: “, $apples, “<BR>”;
```

## Ubacivanje promenljivih u strune

Vrednosti promenljivih možete prikazati na sledeći način:

```
$apples = 1;
echo "Number of apples: ", $apples, ".";
```

Postoji i lakši način. Vrednosti promenljivih mogu da se ubace u niz karaktera ako ih stavite u niz karaktera omeđen dvostrukim (ne jednostrukim) navodnicima, što znači da se njihove vrednosti ubacuju direktno u string. Primenom ove tehnike naš prethodni primer izgleda ovako:

```
$apples = 1;
echo "Number of apples: $apples.";
```

Ovaj primer će odštampati Number of apples: 1. U primeru 1.5, phpinterpolation.php, dali smo kompletan prethodni primer. U njemu se posle dodeljivanja prikazuju vrednosti promenljivih, a koristi se i umetanje promenljivih u string.

Ovo ubacivanje je brz način za prikazivanje sadržaja promenljive, ali šta učiniti ako promenljiva $text sadrži tekst "news" , a Vi želite da na izlazu dobijete reč " newspaper "? Mogli biste da probate sledeće:

```
<?php
$text = “news”;
?>
echo “Where’s the $textpaper <BR>”;
```

PHP ovo neće razumeti, pošto izgleda kao da se koristi promenljiva pod nazivom $textpaper.

Ispravan način da se ovo uradi je da se promenljive čiji se sadržaj ubacuje ograde velikim zagradama.

```
$text = “news”;
echo “Where’s the š$textćpaper.”;
```

## Kreiranje konstanti

Ponekad nećete želeti da promenljiva može da se menja - želećete da njena vrednost bude fiksna. Pretpostavimo, na primer, da imate promenljivu pod nazivom $pip koja sadrži vrednost broja pi . Može se desiti da se takva vrednost nenamerno promeni, što nije dobro. Rešenje je da se napravi konstanta, čija vrednost ne može da se menja. Konstante se kreiraju pomoću funkcije define. Konstanti se daju naziv i vrednost koju želite da joj dodelite: define ( "pi", 3.14159265 );. Naziv konstante je uvek pod navodnicima, dok je vrednost koja se dodeljuje pod navodnicima samo ako je reč o stringu.

```
define (“pi”, 3.1415926535);
echo “The constant pi holds “ , pi, “<BR>”;
```

Ako probate da promenite vrednost ove konstante (na primer, pi = 3.14; ), PHP neće to prihvatiti.

Pošto se ispred konstanti ne stavlja prefiks $ , PHP može da se "zbuni" ako za naziv konstante upotrebite neku od rezervisanih reči.

## Rukovanje tipovima podataka

Vi ne možete da odlučujete o načinu na koji se Vaši podaci interno skladište. O tome odlučuje PHP. Iza scene, on podržava osam internih tipova podataka:
- boolean. Sadrži vrednosti true/false (tačno/netačno).
- integer. Sadrži cele brojeve, kao što su -1, 0, 5, itd.
- float. Sadrži brojeve sa pokretnim zarezom (tip double), kao što su 3.14159 ili
2.7218.
- string. Sadrži tekst, kao što je "Zdravo iz PHP-a".
- array (niz), Sadrži niz sa podacima.
- object. Sadrži objekte iz programa.
- resource. Sadrži resurse sa podacima.
- NULL. Sadrži vrednost NULL.

Obično ne morate da brinete o ovim tipovima podataka, pošto PHP određuje tip promenljive na osnovu podataka koje joj dodelite. Na primer, sledeći iskaz će promenljivoj $variable dodeliti tip string:
```
$variable = "No worries.";
Sledeći iskaz će napraviti promenljivu tipa float:
$variable = 1.2345;
Sledeći iskaz će napraviti promenljivu tipa boolean:
$variable = TRUE;
```

Pošto PHP bira tip podatka na osnovu podatka koji dodelite promenljivoj, ovde nema problema. Problemi počinju kada počnete da mešate tipove - na primer, kada promenljivoj $variable dodate vrednost pomoću operatora + (o njemu će biti reči u Poglavlju 3). Evo nekoliko primera:

```
<?php
$variable = "0"; // $variable je string podešen na 0.
$variable = $variable + 2; // $variable je sada ceo broj sa vrednošću 2.
$variable = $variable + 1.1; // $variable je sada tipa float sa vrednošću 3.1.
$variable = 2 + "8 apples"; // $variable je sada ceo broj sa vrednošću 10
?>.
```

Ako želite da izbegnete potencijalne probleme sa tipovima podataka, nemojte mešati tipove. Čak i ako to uradite, PHP će skoro uvek "uraditi pravu stvar" (na primer, rezultat sabiranja celog i realnog broja će konvertovati u realni broj, što je upravo ono što treba da se uradi), ali, ako je potrebno da eksplicitno zadate tip promenljive, uvek možete koristiti iskaz type cast. Novi tip se stavlja između zagrada odmah ispred naziva promenljive čiji tip želite da zadate. Evo nekoliko primera:

```
$int_variable = (integer) $variable;
$float_variable = (float) $variable;
$string_variable = (string) $variable;
```

Evo nekoliko saveta u vezi sa mešanjem tipova podataka. Kada konvertujete u tip boolean, smatra se da su vrednosti tipa FALSE:

- integer 0
- float 0.0
- prazan string i string "0"
- Niz sa nula elemenata
- Objekat bez članova
- Specijalni tip NULL (uključujući i promenljive koje nemaju vrednost)

Svaki drugi tip se smatra da je TRUE (ukučujući i resource). Kada konvertujete u tip integer:
- Boolean FALSE će dati 0 (nula), a Boolean TRUE će dati 1 (jedan).
- Vrednosti tipa float se zaokružuju prema nuli.

Kada konvertujete tip float, konverzija je ista kao kad je vrednost konvertovana u integer, a onda u float. Konverziju možete da vršite i iz integera u numeričke tipove, ali to ponekad može biti komplikovano.
