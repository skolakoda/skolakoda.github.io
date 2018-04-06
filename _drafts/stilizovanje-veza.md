# Stilizovanje veza

Prosta veza do sidra (*anchor link*) temelj je World Wide Weba. To je mehanizam koji omogućuje međusobno povezivanje stranica, a korisnicima istraživanje i kretanje kroz njih. Podrazumijevano oblikovanje veza prilično je nenadahnuto, no s malo CSS-a možete učiniti zadivljujuće stvari.

## Jednostavno oblikovanje veza

Najlakši način oblikovanja veze je upotreba selektora tipa sidra. Na primjer, ovo će pravilo sva sidra obojati crveno:

```css
a {
  color: red;
}
```

Međutim, sidra mogu služiti kao unutarnje reference baš kao i vanjske veze pa upotreba selektora tipa nije uvijek idealna. Kao primjer uzmite ovu situaciju. Prvo sidro sadrži identifikator fragmenta pa kad korisnik pritisne to sidro, stranica će se pomaknuti do drugog imenovanog sidra:

```html
<p><a href="#mainContent">Skip to main content</a></p>
...
<h1><a name="mainContent">Welcome</a></h1>
```

Iako biste vjerojatno željeli da samo veza bude oblikovana crvenom bojom, sadržaj naslova također će biti oblikovan crvenom bojom. Da bi se to izbjeglo, CSS pruža dva posebna selektora koji se nazivaju selektorima pseudoklase veze. Selektor pseudoklase `:link` koristi se za ciljanje veza koje nisu bile posjećene, a selektor pseudoklase `:visited` za ciljanje posjećenih veza. Tako će u ovom primjeru sve neposjećene veze biti plave, a sve posjećene veze zelene:

```css
a:link {
  color: blue;  /* Neposjećene veze su plave */
}
a:visited {
  color: green; /* Posjećene veze su zelene */
}
```

Ostala dva selektora koja možete upotrijebiti za oblikovanje veza su dinamički selektori pseudoklasa `:hover` i `:active`. Dinamički selektor pseudoklase `:hover` služi za ciljanje elemenata kad se iznad njih nalazi pokazivač miša, a dinamički selektor pseudoklase `:active` cilja elemente kad su aktivirani. U slučaju veza, do aktiviranja dolazi kad se veza pritisne. Tako će u ovom primjeru veza postati crvena kada se iznad nje postavi pokazivač miša ili kada se pritisne:

```css
a:hover, a:active {
  color: red;
}
```

Jedna od prvih stvari za koju većina dizajnera nauči koristiti ove selektore jest isključivanje podvlačenja veza, a zatim njegovo ponovno uključivanje kada se iznad veze posatvi pokazivač miša ili kada se pritisnu. To se može učiniti postavljanjem svojstva `text-decoration` na none za neposjećene i posjećene veze, a na `underline` za veze iznad kojih je pokazivač i aktivne veze:

```css
a:link, a:visited {
  text-decoration: none;
}
a:hover, a:active {
  text-decoration: underline;
}
```

U prethodnom je primjeru redoslijed selektora vrlo važan. Ukoliko je redoslijed obrnut, stil za oblikovanje kada je pokazivač iznad veze i aktivni stil neće raditi:

```css
a:hover, a:active {
  text-decoration: underline;
}
a:link, a:visited {
  text-decoration: none;
}
```

Razlog tome je kaskada. Kada dva pravila imaju jednaku specifičnost, prednost ima pravilo koje je definirano posljednje. U ovoj situaciji oba pravila imaju jednaku specifičnost pa će stilovi `:link` i `:visited` premostiti stilove `:hover` i `:active`. Da biste bili sigurni kako se to neće dogoditi, preporučljivo je primjenjivati stilove veza sljedećim redoslijedom:

```css
a:link, a:visited, a:hover, a:active {

}
```

Ovaj redoslijed lako se može zapamtiti s pomoću mnemotehničkog izraza LoVe:HAte, gdje *L* znači link (veza), *V* visited (posjećena), *H* hover (kada je pokazivač miša iznad veze), a *A* active (aktivna).

## Zabava s podvlačenjem

S gledišta upotrebljivosti i pristupačnosti, važno je da se veze ne razlikuju samo po boji. Razlog je u tome što je mnogim ljudima s oslabljenim vidom teško razlikovati slabo kontrastne boje, posebice kod sitnog teksta. Na primjer, ljudi koji ne razaznaju boje ne mogu razlikovati određene kombinacije boja pri sličnim razinama svjetloće ili zasićenja. Zato su veze podrazumjevano podvučene.

Dizajnerima se obično ne sviđa podvlačenje veza jer ono stranici dodaje preveliku težinu i vizualnu zbrku. Odlučite li ukloniti podvlačenje veza, možda ćete umjesto njega odabrati podebljavanje veza. Na taj će način stranica izgledati manje natrpana, a veze će se i dalje isticati:

```css
a:link, a:visited {
  text-decoration: none;
  font-weight: bold;
}
```

Podvlačenje možete ponovno primijeniti kad se iznad veze postavi pokazivač miša ili se ona aktivira, što ističe njihovu mogućnost interakcije:

```css
a:hover, a:active {
  text-decoration: underline;
}
```

Moguće je i manje upadljivo podvući veze zadavanjem rubova. U sljedećem je primjeru podrazumijevana crta uklonjena i zamijenjena manje upadljivom isprekidanom crtom. Kada se iznad veze postavi pokazivač miša ili kada je posjetitelj pritisne, ona se pretvori u punu crtu da bi se korisniku pružila vizualna informacija da se nešto dogodilo:

```css
a:link, a:visited {
  text-decoration: none;
  border-bottom: 1px dotted #000;
}
a:hover, a:active {
  border-bottom-style: solid;
}
```

## Izrada gumba i prijelaza

Ima slučajeva kad ćete poželjeti izraditi efekt koji više nalikuje gumbu s većim područjem za pritiskanje. To možete učiniti postavljanjem svojstva sidra `display` na `block` i nakon toga mijenjanjem `width`, `height` i ostalih svojstava da izradite stil i aktivno područje kakvo želite.

```css
a {
  display: block;
  width: 6em;
  padding: 0.2em;
  line-height: 1.4;
  background-color: #94B8E9;
  border: 1px solid black;
  color: #000;
  text-decoration: none;
  text-align: center;
}
```

Kad se veza prikazuje kao element na razini bloka, pritiskanje bilo gdje unutar bloka aktivirat će vezu. Po svojoj prirodi, blok elementi se šire da popune raspoloživu širinu, pa ako je širina njihovih roditelja prevelika, na vezu morate primijeniti željenu širinu.

Možda se pitate zašto umjesto `height` koristim `line-height` za kontroliranje visine gumba. Pa, to je zapravo koristan mali trik za okomito centriranje teksta. Kad biste postavili `height`, vjerojatno biste morali upotrijebiti popunu da potisnete tekst na dolje i imitirate okomito centriranje. Međutim, tekst je uvijek okomito centriran u okviru reda pa će se upotrebom `line-height` tekst uvijek nalaziti u sredini okvira. Ipak, postoji jedan nedostatak. Ako se tekst u okviru prelama u dva reda, gumb će biti dvostruko viši nego što biste željeli. Jedini način da to izbjegnete je da zadate veličinu gumba i teksta tako da se tekst ne prelama, ili se barem ne prelama sve dok se veličina teksta prekomjerno ne uveća.

## Jednostavni prijelazi

U lošim starim vremenima, za izradu efekata prijelaza koristile su se velike i pretjerano komplicirane JavaScript funkcije. Srećom, upotreba pseudoklase `:hover` omogućuje izradu efekata prijelaza bez potrebe za JavaScriptom. Prethodni primjer možete proširiti zadavanjem boje pozadine i teksta veze kad se iznad postavi pokazivač miša:

```css
a:hover {
  background-color: #369;
  color: #fff;
}
```

## Stilovi posjećenih veza

Dizajneri i programeri često zaborave na stil posjećene veze, pa posjećene veze oblikuju jednako kao i neposjećene. Međutim, poseban stil posjećene veze korisnicima može pomoći pri snalaženju, pokazujući im koje su stranice ili lokacije već posjetili da bi izbjegli nepotrebno vraćanje na stranice koje su već posjetili. Stilovi posjećenih veza mogu pretrpati glavno područje za sadržaj stranice pa ih razumno koristite. Međutim, one dolaze do izražaja kad se koriste u bočnom stupcu ili u sporednom izborniku za kretanje.

Vrlo jednostavan stil posjećenih veza možete izraditi dodavanjem okvira za potvrdu svakoj posjećenoj vezi:

```css
a:visited {
  padding-right: 20px;
  background: url(check.gif) right middle;
}
```

Nadalje, recimo da u bočnom stupcu imate popis veza prema vanjskim lokacijama:

```html
<ul>
  <li><a href="http://www.andybudd.com/">Andy Budd's Blogography</a></li>
  <li><a href="http://allthatmalarkey.co.uk/">Stuff and Nonsense</a></li>
  <li><a href="http://www.hicksdesign.co.uk/">Hicks Design</a></li>
  <li><a href="http://www.clagnut.com/">Clagnut</a></li>
  <li><a href="http://www.htmldog.com/">HTML Dog</a></li>
  <li><a href="http://adactio.com/journal/">Adactio</a></li>
  <li><a href="http://www.allinthehead.com/">All In The Head</a></li>
  <li><a href="http://www.markboulton.co.uk/">Mark Boulton</a></li>
  <li><a href="http://www.ian-lloyd.com/">Ian Lloyd</a></li>
</ul>
```

Mogli biste izraditi jednu sliku za neposjećeno i posjećeno stanje. Zatim biste primijenili pozadinsku sliku na isti način kao i prije. Najvažnije stvari na koje treba obratiti pažnju su oblikovanje pozadinske slike na sidru i posjećeno stanje.

```css
ul {
  list-style:none;
}
li {
  margin: 5px 0;
}
li a {
  display: block;
  width: 300px;
  height: 30px;
  line-height: 30px;
  color: #000;
  text-decoration: none;
  background: #94B8E9 url(images/visited.gif) no-repeat left top;
  text-indent: 10px;
}
li a:visited {
  background-position: right top;
}
```

Svaka lokacija koju ste posjetili imat će oznaku potvrde pored imena, pružajući vrijednu informaciju da ste tamo već bili.


Izvor: CSS Mastery: napredna Web rješenja