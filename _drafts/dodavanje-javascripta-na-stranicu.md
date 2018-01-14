# Dodavanje JavaScript koda na web stranicu

Primarni na~in dodavanja JavaScript koda u web stranicu je kori{}enje <script/> elementa.
Ovaj element, koji je uvela kompanija Netscape, postao je deo HTML 3.2 specifikacije.

Vremenom je ovaj element detaljno razra|en,
uz dodavanje slede}ih atributa:
- src: opcioni atribut. Specificira eksternu datoteku sa skriptom koji }e se izvr{avati.
- type: obavezan atribut. Specificira jezik koji se koristi za definisanje sadr`aja
<script/> elementa, a obi~no se koristi vrednost "text/javascript" . Iako je ovaj
atribut obavezan na osnovu HTML specifikacije, svi ~ita~i pretpostavljaju da se koristi
JavaScript jezik ukoliko vrednost ovog atributa nije navedena.
- defer: opcioni atribut. Logi~ka vrednost ( true ili false ), kojom se defini{e da li web
~ita~ treba da sa~eka sa izvr{avanjem koda koji se nalazi u okviru <script/> elementa
sve dok ~ita~ ne u~ita celokupan HTML dokument.
- charset : opcioni atribut. Kodiranje karaktera eksterne datoteke sa kodom, koja je
definisana pomo}u src atributa. Ovaj atribut se retko koristi.

Postoje dva na~ina za kori{}enje <script/> elemenata: direktnim ugra|ivanjem JavaScript koda
u stranicu, kada se radi o inline kodu, ili kori{}enjem src atributa koji defini{e odgovaraju}u
eksternu datoteku.

Da biste dodali inline kod na web stranicu, postavite kod izme|u po~etnog i krajnjeg taga, {to je
prikazano u slede}em primeru:
<script type="text/javascript">
function inlineScript() {
var message = "Hello, World!";
alert(message);
}
inlineScript();
</script>
Ne razmi{ljajte trenutno o samom kodu - nau~i}ete uskoro {ta je rezultat izvr{avanja koda
prikazanog u prethodnom primeru. Iako web ~ita~ automatski pretpostavlja da je kod u okviru
<script/> elementa napisan kori{}enjem JavaScript jezika, smatra se da je dobra programerska
praksa da se uklju~i ovaj atribut. ^ita~ zaustavlja u~itavanje ostatka stranice kada pristupi
<script/> elementu; u~itava kod i interpretira ga pre obrade ostatka HTML stranice.

Dodavanje eksterne JavaScript datoteke na stranicu podrazumeva uklju~ivanje src atributa.
Mo`ete da iskopirate JavaScript kod iz prethodnog primera u novu datoteku, bez navo|enja
<script> tagova. Nakon toga, kori{}enjem src atributa, stranica mo`e da referencira eksternu
JavaScript datoteku, kao {to je prikazano u slede}em primeru:
<script type="text/javascript" src="sample.js"></script>
Ovaj <script/> element referencira eksternu JavaScript datoteku pod nazivom sample.js.
Kori{}enje .js ekstenzije je konvencija koju primenjuju svi JavaScript programeri. Nije bitan naziv
datoteke - ~ita~ }e preuzeti datoteku i interpretirati sadr`aj datoteke kao JavaScript kod.
Identi~no kao i kod izvr{avanja koda koji se direktno navodi na stranici, ~ita~ zaustavlja obradu
HTML stranice kada pristupi <script> tagu, ali je neophodno da preuzme datoteku sa kodom pre
nego {to po~ne da ga interpretira. Nakon {to ~ita~ u~ita JavaScript kod iz eksterne datoteke,
nastavlja obradu HTML stranice.

Da li }ete navoditi skript u kodu ili koristiti eksterne skriptove zavisi isklju~ivo od vas. Me|utim,
ve}ina programera koristi spolja{nje JavaScript datoteke iz nekoliko razloga:
u Eksterni skriptovi su mnogo jednostavniji za odr`avanje u odnosu na skriptove ~iji se
kod navodi u HTML datoteci, posebno ukoliko koristite isti kod na nekoliko stranica.
Zamislite koliko bi slo`eno bilo editovanje koda na vi{e HTML stranica da bi se
omogu}ilo izvr{avanje identi~nih promena blokova koda. To bi, svakako, bio
vremenski veoma zahtevan zadatak. Ukoliko koristite eksternu datoteku, neophodno
je da jednostavno promenite samo jednu datoteku.
u Eksterne skriptove ~ita~ ke{ira isto kao i slike i definicije stilova. ^ita~ preuzima skript
samo jednom i koristi ga na svim narednim stranicama koje zahtevaju ovu datoteku, sve
dok je ne budete izmenili. To garantuje odre|ene dobitke performansi, jer ~ita~ ne mora
da preuzme isti kod vi{e puta, a istovremeno se identi~an kod ugra|uje u HTML stranicu.
Kako i gde se postavljaju <script/> elementi na stranici veoma je va`no - kod se u~itava i inter-
pretira u redosledu u kome su postavljeni ovi elementi na stranici.
