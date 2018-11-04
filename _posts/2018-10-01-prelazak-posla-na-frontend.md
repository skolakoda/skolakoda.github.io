---
title: Prelazak posla na frontend
author: damjan
layout: post
image: https://www.myamcat.com/blog/wp-content/uploads/2017/02/front-end-developer-wanted-illustration-e1487757289647.jpg
---

![]({{page.image}})

**Trend koji se kontinuirano nastavlja poslednjih pola decenije je prelazak poslovne logike na front-end. To znači da se na frontendu danas obavljaju mnoge stvari koje su tradicionalno bile u nadležnosti serverske strane, odnosno backend programiranja.**

U arhitekturi jednostraničnih aplikacija, veći deo poslovne logike je na frontendu (mrežna komunikacija, renderovanje interfejsa, rutiranje, pretraga..), dok se zadatak bekenda često svodi na to da inicijalno posluži fajlove i eventualno prihvati korisničke podatke. 

Ovaj trend se naravno odražava na oglase za posao u vidu rastuće potražnje za specijalizovanim JS developerima.

## Web nekad

![](/images/jezici/js-istorija.gif)

U početku, na web stranama bejahu male skripte, koje su služile da se nešto mrdne ili promeni boju. Izgledale su otprilike ovako:

```html
<p onclick="style.color='red'">
```

Pisane su uglavnom u HTML-u, jer nije bilo potrebe da se zbog par komandi pravi zaseban fajl. Od tada su prošle decenije, a sa svakom godinom skripte na frontendu su neprekidno rasle.

## Front-end danas

**Danas više niko ozbiljan ne misli da se frontend developeri uglavnom bave web dizajnom.** Pokušaću da nabrojim neke od stvari koje se u novije vreme rade na frontendu, a nisu bile deo tradicionalnog opisa posla.

### Projektovanje softvera

Danas se frontend developeri, a posebno posvećeni JS programeri, u potpunosti bave razvojem softvera. Kao i u drugim domenima (npr. desktop), primenjuju se objektno orjentisana metodologija, oprobani projektni obrasci i tome slično.

Javascript developeri najčešće samostalno, ili u saradnji sa backend programerima (osim ako se u potpunosti ne oslanjaju na API) projektuju aplikacije koje se najčešće izvršavaju na webu, ali i na mobilnim uređajima, desktop računarima i drugim okruženjima.

### Poslovna logika

**Tradicionalno se na backendu obavljalo 90% poslovne logike, ali se već godinama ovaj odnos pomera u korist frontenda.** Zajedno sa projektovanjem i razvojem softvera, dobar deo poslovne logike je prešao na frontend. Zavisno od arhitekture, na nekim aplikacijama je podela 50%-50%, negde 90%-10%, a negde negde 10%-90% u korist frontenda.

Rana procena obima posla za backend i za frontend ključni su za uspeh u razvoju aplikacije. Oslanjajući se na stara rešenja, u nekim firmama ne uviđaju blagovremeno ovu tendenciju, alocirajući previše resursa za backend, odnosno premalo za frontend deo aplikacije. Do kobnog uvida da na frontendu ima mnogo više posla od "ulepšavanja stranica" najčešće dolazi prekasno, te dodavanje ljudstva na projekat koji kasni samo izaziva dodatnu konfuziju, što se očekivano završava probijanjem svih rokova, a u najgorem slučaju propašću čitavog projekta.

Jedan od simptoma prelaska poslovne logike na frontend je bujanje frontend framework-a, koji implementiraju MVC ili druge arhitektonske obrasce.

### Rutiranje

Jedna od stvari koja se tradicionalno radila na serverskoj strani je rutiranje. No, **kod jednostraničnih aplikacija**, koje su sve rasprostranjenije, rutiranje je gotovo u potpunosti prešlo u nadležnost JS aplikacije u pregledaču. Postoji gomila specijalizovanih biblioteka koje se bave frontend rutiranjem, među kojima su Navigo, Angular Router, React Router i mnoge druge.

Ovo je definitivno jedna od stvari koje se moraju uzeti u obzir pri planiranju i raspodeli posla.

### Validacija korisničkog unosa

Kada korisnik unese nešto u polje za unos, to je po pravilu potrebno validirati. Na primer, ustanoviti da li u mejl adresi ima znak `@`, da li je format telefona ispravan i slično. Ako uneti sadržaj nije u skladu sa očekivanim formatom, o tome putem crvenih `error` poruka obaveštavamo korisnika. Nekad su se, po pravilu, poruke o greškama vraćale sa servera. Te provere se danas uglavnom vrše na frontendu, nakon čega se generišu odgovarajuće poruke. 

Jedan od razloga za prelazak validacija unosa na frontend je brzina, odnosno na taj način možemo obavestiti korisnika o eventualnim greškama istog trenutka čim ih otkuca, nije potrebno čekati da pošalje formular na server.

Sa aspekta bezbednosti, front-end validacija, međutim, ne isključuje potrebu za back-end validacijom. Na frontendu svako ima pristup našem kodu i može ga relativno lako hakovati. Jedina prava bezbednosna validacija vrši se na bekendu, dok na frontendu više služi kao pomoć i navođenje korisnika.

### Živa pretraga

![](https://1.bp.blogspot.com/-KfQabJKiXds/WPiJQvZCbxI/AAAAAAAAAe4/y3cguXDMjBgw1hQAubBIKWea9LQz1_6BACLcB/s1600/autocomplete-textbox-using-bootstrap-typehead-with-ajax-php-small.jpg)

Nekada se pretraga podataka vršila uglavnom na serveru, odnosno u bazi, a rezultati pretrage su isporučivani na web stranicu. Da biste dobili rezultate pretrage, bilo je potrebeno da pošaljete (*submit*) formu sa parametrima pretrage na server, nakon čega se stranica ponovo učitavala sa novim podacima.

Danas je prilično zastupljena tzv. živa pretraga, gde se rezultati pretrage ažuriraju u trenutku dok kucamo. To se izvodi na dva načina: ili podaci manjeg obima bivaju isporučeni na frontend, gde se vrši njihova pretraga uživo, bez ikakvog slanja zahteva serveru, ili se parametri pretrage šalju serveru putem *ajax*-a, a rezultati prikazuju bez ponovnog učitavanja stranice.

Količina podataka koja se obrađuje na frontendu se neprestano uvećava, i već se regularno filtiraju nizovi sa desetinama hiljada članova. Na taj način se veliki deo posla raspodeljuje na mašine naših korisnika, rasterećujući centralni server.

### Komunikacija sa servisima

Tradicionalno je bekend komunicirao sa raznim servisima, obrađivao dobijene podatke i servirao ih korisnicima u vidu statičnih web stranica. Danas, osim ako nisu i pitanju tajni podaci, nema potrebe za tim dodatnim korakom. JS direktno komunicira sa servisima (npr. vremenska prognoza ili Wikipedija), dobavlja podatke koji su mu potrebni, obrađuje ih i prikazuje na stranici.

Takođe, korisničke podatke prosleđuje direktno servisima treće strane, bez potrebe za prolaskom preko bekenda.

### Dinamičke web stranice

Nekada su se dinamičke web stranice pravile isljučivo na serveru, na osnovu podataka dobijenih iz baze. Danas se sve češće dinamičke stranice grade direktno u našem pregledaču, na osnovu podataka dobijenih sa servera ili API-ja u JSON formatu. 

Glavna mana ovog pristupa je značajno usporavanje weba (neke dinamičke stranice, kao što je npr. Facebook, uzimaju prilično računarskih resursa korisnika), kao i generalna nevidljivost u pretrazi. Iako je Google još 2014. najavio da će njegovi botovi pokušavati da renderuju JavaScript pre nego što indeksiraju sadržaj, to do dana današnjeg nije u potpunosti sprovedeno.

U svetu JS frejmvorka, kao što su Angular, React i VueJS, dinamički render stranica na frontendu je podrazumevana opcija.

### Čuvanje stanja aplikacije

Ako korisnik prolazi kroz proces registracije koji ima nekoliko koraka, i dođe do pucanja browsera, svaka aplikacija koja drži do sebe će sačuvati popunjena polja. U serverskim aplikacijama se to uglavnom radilo preko kukija, odnosno sesija na serveru, a u jednostraničnim JS aplikacijama u samom browseru, unutar `localStorage`-a.

Dakle, ako sistem padne iz bilo kod razloga, na frontend developeru je da prilikom razvoja i taj slučaj uzme u obzir, što svakako povećava obim posla. Pošto je čuvanje stanja aplikacija sve složenije, postoje specijalizovane biblioteke, poput Redux-a, koje se samo ovim bave.

### Login

Nekada se o prijavi korisnika brinuo isključivo server, dok je web stranica trebalo samo jednom da pošalje ime i lozinku bekendu. Danas je standardna procedura autentifikacija pomoću tokena, tako da na frontendu opet imamo dodatnog posla oko čuvanja tokena i njegovog slanja na server svaki put, sa `http` zahtevom.

Pored toga, postoji i scenario da token sačuvamo u `localStorage`-u kako bi korisnik sledeći put ostao ulogovan.

## Zaključak

![](http://www.quytech.com/img/reactnativeapp.jpg)

U toku poslednje decenije, došlo je do naglog povećanja obima posla na frontendu. Danas se frontend aplikacije mogu porediti sa samostalnim mobilnim aplikacijama. Jedina bitna razlika je što frontend aplikacije nemaju ovlašćenja izvan pregledača, dok mobilne aplikacije mogu pristupati raznim delovima uređaja. Usled ove sličnosti, front-end developeri se sa svojim tehnologijama mogu prilično lako prešaltati na razvoj mobilnih aplikacija, uz pomoć biblioteka kao što su React Native.
