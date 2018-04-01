# Rad s podacima u formatu JSON

Format JSON temelji se na sintaksi doslovnih vrijednosti JavaScript objekata. Svi Web
preglednici znaju kako parsirati JSON bez potrebe za korištenjem bilo kakvih program-
skih dodataka ili proširenja. Budući da većina današnjih Web aplikacija koristi JavaScript
s klijentske strane, nije ni čudo da je JSON postao de facto standardan način za obliko-
vanje podataka na Webu, zamjenjujući XML, koji je bio popularan devedesetih godina.

Evo primjera kako se instanca entiteta Stock može predstaviti u XML-u:

```xml
<stock>
  <country>USA</country>
  <currency>USD</currency>
  <price>43.12</price>
  <symbol>IBM</symbol>
</stock>
```

U JSON formatu, isti resurs izgledao bi ovako:

```json
"stock": {
  "country": "USA",
  "currency": "USD",
  "price": 43.12,
  "symbol": "IBM"
}
```

## Usporedba formata XML i JSON

{:.uokvireno}
Domen javne službe `www.geonames.org` omogućava da pretražujete geografske i statističke informacije o zemljama, gradovima i tako dalje. Najvećim dijelom ova lokacija koristi RESTful web usluge. Da biste usporedili kako su isti podaci predstavljeni u formatima XML i JSON, posjetite web stranicu `www.geonames.org/export/ws-overview.html`.

Razvoj takozvanih jednostraničnih web aplikacija (*Single Page Web Applications*, SPA) je trend u današnjem HTML5 svijetu. SPA se odnosi na aplikacije koje ne osvježavaju cijelu web stranicu već samo neke njene dijelove preuzimanjem svježih podataka upućivanjem AJAX zahtjeva. Googleov klijent Gmail je dobar primjer SPA aplikacije. Kad stigne nova poruka, dodaje se samo jedan novi red na web stranicu koja prikazuje sadržaj prijemnog poštanskog sandučića. Poslužitelj šalje samo unaprijed oblikovane podatke koje preglednik smješta na zaslon koristeći HTML, JavaScript i CSS. Nikakav HTML se ne generira na poslužitelju.


Izvor: Yakov Fain, *Programiranje Java* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.d0d155cbd2ce41fab575d00763bbf669.programiranje-java.aspx)), Zagreb 2015.
