HTML je nastao kada je Tim Berneres Lee izabrao mali skup oznaka iz SGML
skupa koji je korišćen na CERN-u sa ciljem formatiranja dokumenata. Tako je
softver koji je ovo znao da protumači nazvan HTML pregledač.

Istorijski razvoj HTML-a
Prva verzija HTML-a, označena sa HTML 1, pojavila se tek 1991. godine i trajala
samo još u toku 1992. godine. Već tada je bilo jasno da je to vrlo „siromašna“
verzija jezika sa mnogo manjkavosti. Na primer, nije se mogao definisati željeni
font stranice, pozadinska boja, kreirati tabele, forme, itd.
Iz tog razloga, već 1993. godine nastaje HTML 2, koji takođe traje samo dve
godine. U ovoj verziji pojavile su se „primitivne“ forme (neka polja su mogla da
se kreiraju, ali nije moglo da se izvrši submit-ovanje forme), mogla je da se podesi
pozadinska boja ili slika, i mogle su da se kreiraju tabele. Napredak koji je kreiran
za te dve godine od verzije HTML 1 se smatra vrlo velikim, ali svakako
nedovoljnim.
U naredne dve godine (1995-1996.), pojavljuje se HTML 3.2. Interesantno je da
ne postoji verzija HTML 3. Ovo je posledica toga što World Wide Web
Consortium - W3C (Internacionalna organizacija za standardizaciju) nije na
vreme dobila zahtev za standardizaciju. U ovoj verziji podržan je rad sa stilovima
(prvi oblik CSS-a) i povećan broj atributa kojima se lakše uređuje stranica. Rad
sa frame-ovima još nije bio podržan, iako su ga tadašnji browser-i već podržavali.
Sa druge strane CSS je bio podržan u verziji HTML 3.2 ali ne i u tadašnjim
browser-ima. Treba naglasiti da se u tom periodu, pored početka razvoja CSS 1,
razvija i klijentski skript jezik Java Script.
U toku 1997. godine, zvanično se pojavljuje i HTML 4. Ova verzija HTML-a je
imala vrlo dobre karakteristike, jer je realizovana sa dosta promena i poboljšanja
u odnosu na ranije verzije, pa je uz svoje manje modifikacije trajala do 2009.
godine. Ključna stvar je što je sve formatiranje pojedinih elemenata i cele strane
„izmešteno“ u CSS. U ovom periodu kompletno se standardizuje i CSS 2.
Paralelno sa tim pojavljuje se i XHTML 1.0 kojim se omogućava razmena i
prikaz podataka iz XML-a. Razvija se DOM i DOM 2 čime se omogućava
interakcija sa objektima u HTML-u , XHTML-u i XML dokumentima. Dodatna
novina je što se objektima u DOM strukturi počinje pristupati korišć enjem
metoda. U ovom vrlo produktivnom periodu, 2003. godine, pojavljuje se i Web
2.0. a već 2005. godine i AJAX. Sve ove tehnologije kreiraju dinamički i
interaktivni Web kakvim ga mi danas poznajemo. Kvalitet HTML 4 je time bio
dodatno potvrđen obzirom da je mogao da podrži i implementira sve promene u
drugim jezicima i tehnologijama.
Periodu od 12 godina, koliko je HTML 4 bio aktivno u upotrebi, logično je morao
doći kraj obzirom na popularnost Web-a i sve veće korisničke zahteve. Tako se
2009. godine pojavljuje HTML 5 i CSS 3, koji se smatraju revolucijom u smislu
uvedenih promena i načina rada.

Struktura jezika HTML
Kao što je ranije napomenuto, osnovni gradivni element u HTML-u je tag. Tagovi
mogu biti “upareni” ili “neupareni” tj. “zatvarajući” i “samozatvarajući”. Ova
podela je izvršena u odnosu na oznake kojima se tagovi otvaraju odnosno
zatvaraju. Upareni tagovi imaju oznaku za otvaranje i oznaku za zatvaranje taga:
otvaranje taga: <ime_taga> tj. zatvaranje taga: </ime_taga >. Na primer <p> i
</p>.
Neupareni tagovi imaju samo jednu oznaku, kojom se tag istovremeno otvara i
zatvara: <ime_taga />. Na primer <br/> ili <img />.
HTML jezik nije case sensitive, što znači da se imena tagova mogu pisati i
velikim i malim i kombinovanim veličinama slova (title = Title = tiTLe), ali je
preporuka da se koriste mala slova.
Pri prikazivanju stranica browser-i se oslanjaju na imena tagova, jer se time
precizno definiše kako određeni sadržaj treba prikazati. Svaki tag, opisan svojim
imenom, ima precizno definisanu ulogu. Kod uparenih tagova funkcija koju tag
obavlja počinje od mesta gde je tag otvoren i završava se mestom gde je zatvoren,
a sadržaj na koji tag deluje je sadržaj između otvorene i zatvorene oznake taga.
Izvan zatvorenog taga efekat tog taga ne postoji. Tako se definiše i pojam HTML
elementa koji je skup otvorenog taga, njegovog sadržaja i zatvorenog taga:
<ime_taga> sadržaj_elementa </ime_taga>
Tako na primer, tag i, kojim se postiže da se tekst prikaže kao Italic, i koji deluje
na tekst Pera, u kodu se piše kao element
<i>Pera</i> a u browser-u prikazuje kao Pera
Kao što se vidi, oznake za otvaranje i zatvaranje tagova se u browser-u ne
prikazuju, ali je njihov efekat na sadržaj elementa (u ovom slučaju Italic)
postignut. U sklopu opštih pravila, važno je napomenuti da se napisani HTML
kod realizuje redosledom kojim je napisan, odozgo na dole, i s leva na desno.
Pored taga, HTML se strukturno opisuje i atributima. Atribut se piše unutar imena
taga, i služi da bliže definiše način delovanja taga ili opiše tag. Imena atributa su
precizno definisana, kao i to koji atribut se može koristiti sa kojim tagom. U
jednom tagu može biti više atributa. Sintaksa zahteva da nakon definisanja imena
atributa, postoji operator dodele =, i unutar znakova navoda vrednost atributa.
Tako na primer, atribut class, sa vrednošću proba, u tagu i, piše se kao: <i
class=”proba”>Pera</i>.

Svaki tag ima tačno definisan spisak atributa koji se mogu pisati unutar njega.
Spisak svih atributa, u HTML 4, po pripadnosti tagovima može se detaljno
pročitati na adresi: http://www.w3.org/TR/html4/index/attributes.html.

Već je naglašeno da svaki tag deluje na sadržaj koji se nalazi unutar tog elementa.
Taj sadržaj može biti tekst za korisnika, ali može biti i drugi tag. U slučaju da se
kao sadržaj elementa nalazi novi element, kaže se da imamo ugnježdene
elemente, i tada svaki od tagova deluje sa svojom funkcijom koju on realizuje.
Tekst na koji deluje više ugnježdenih tagova tj. elemenata se podvrgava uticaju
svih tih tagova. Treba voditi računa da se kod ugnježdenih elemenata prvo zatvara
poslednje otvoreni tag. Tako na primer, ako pored taga i, želimo da deluje i tag b
(boldovanje teksta), pišemo <i><b>Pera</b></i> u browser-u prikazuje kao
Pera. U opšte pojmove o strukturi jezika treba svrstati i komentare. Komentari
postoje u svakom programskom jeziku, i služe da pomognu programerima sa
opisima koji se napisani. Komentari su delovi web stranice koji se ne
interpretiraju, a samim tim i ne prikazuju korisniku. Uloga komentara je lakše
snalaženje i navođenje unutar koda. Komentari su skoro obavezni kada više ljudi
uređuje sajt, ili kada se koristi neki od skript jezika. Sintaksa komentara je
<! -- tekst komentara -->
Tekst komentara može biti u jednom ili više redova i može biti običan tekst ili
bilo koji kod.
