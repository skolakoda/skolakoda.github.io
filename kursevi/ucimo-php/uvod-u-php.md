---
title: ! 'Uvod u PHP: instalacija i pokretanje programa'
layout: lekcija-php
permalink: /uvod-u-php
image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/600px-Webysther_20160423_-_Elephpant.svg.png
---

![php]({{page.image}})

***Prvi korak u kreiranju dinamičkih web strana je dobijanje pristupa serveru na kome PHP radi. Vaš hosting provajder verovatno već podržava PHP. To možete proveriti ako pitate osoblje za podršku ili sami isprobate da li radi. Postoje dva načina da sami probate.***

Prvi način je da otvorite komandnu liniju, povežete se sa web serverom preko programa kao što su Telnet ili SSH, i otkucate `php -v`. Ako je PHP instaliran, rezultat treba da izgleda otprilike ovako (`%` koristimo kao oznaku za unos sa komandne linije):

```
%php -v
PHP 7.0.18-0ubuntu0.16.10.1 (cli) ( NTS )
Copyright (c) 1997-2017 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
```

Drugi način da odredite da li je PHP instaliran je da probate neki PHP skript. Ako skript radi, PHP je instaliran i sve je podešeno.

## Instalacija PHP-a

**Preporučljivo je da na svom računaru instalirate PHP da možete tokom razvoja isprobati skripte. U tom slučaju nećete morati da trošite vreme na prebacivanje skripti na računar provajdera, da ih onda isprobate u pretraživaču.**

Neki operativni sistemi, kao što su Linux i mnoge verzije Unixa, se isporučuju sa već instaliranim PHP-om. Kod drugih operativnih sistema, kao što su Windows ili Mac OSX, moraćete da sami instalirate PHP. Prvo proverite da li već imate PHP. Ukucajte komandu `php -v` u prozoru za unos komandi. Ako radi, onda je već sve podešeno.

PHP možete sami instalirati. Verzije za razne operativne sisteme možete pronaći na adresi [php.net/downloads.php](http://www.php.net/downloads.php). Instrukcije za instalaciju možete pronaći u PHP dokumentaciji, koja se nalazi na adresi [php.net/docs.php](http://www.php.net/docs.php). Pošto se instrukcije često menjaju i postoji puno operativnih sistema, trebalo bi da pratite najnovije instrukcije.

{:.uokvireno}
Uz novije verzije PHP-a dolazi [ugrađeni web server](http://php.net/manual/en/features.commandline.webserver.php), koji možete koristiti za lokalni razvoj. Pokreće se iz komandne linije: `php -S localhost:8000`.

Ako želite zaseban server, možete instalirati *Apache* ili Microsoftov *IIS*. Instalaciju Apache servera može se preuzeti na adresi [httpd.apache.org/dowload.cgi](http://httpd.apache.org/dowload.cgi). Naredni korak je da PHP povežete sa serverom. Ako koristite Apache, trebalo bi da promenite fajl `http.cong`.

## Podešavanje razvojnog okruženja

Da biste mogli da pravite PHP strane, potreban vam je neki editor teksta. Postoje različiti editori, koji se koriste na različitim operativnim sistemima.

Za kreiranje PHP fajlova možete da koristite i neko integrisano razvojno okruženje (IDE). U ovakvim okruženjima imate na raspolaganju alate kojih nema kod običnih tekstualnih editora. Tu mislim na automatsku proveru onog što ste napisali i automatsko isticanje sintaktičkih elemenata (na primer, ključne reči PHP-a se prikazuju u drugoj boji). Tu je i automatsko postavljanje, jer IDE može da prebaci vaše PHP strane na vaš hosting.

Ako radite sa nekim provajderom, potreban vam je i neki način za transport PHP strana na njegov računar. Isto važi i za obične HTML strane. Možete koristiti neki FTP (*File Transfer Protocol*) program ili web interface, ako postoji. Ako ranije niste prebacivali web strane na računar provajdera, konsultujte se sa provajderom za podršku. PHP strane se prebacuju i pokreću isto kao i obične HTML strane, naravno ako server podržava PHP.

## Kreiranje prve PHP skripte

Sve počinje kreiranjem `.php` fajla. Sa PHP-om na serveru možete da radite mnogo štošta što ranije niste mogli: da vadite podatke iz baze, da proverite nečiju lozinku, da odštampate tekst dobrodošlice, da koristite "kolačiće", da pravite knjigu posetilaca, da pravite interaktivne strane ili čak aplikacije za rad sa potrošačkom korpom. Sve to može da radi 24 časa dnevno, čak i dok mirno spavate u svom krevetu.

PHP fajlovi su često mešavina HTML-a i PHP koda. Podrazumevana ekstenzija fajlova je `.php`. PHP kod se nalazi između oznaka `<?php` i `?>`:

```
<?php

// Your PHP goes here....

?>
```

{:.uokvireno}
Oznake se mogu skratiti ako u konfiguracionom fajlu `php.ini` uključite opciju *short tags*. Tada možete koristiti samo `<?` i `?>`. Ja to ne bih preporučio, pošto će vaše skripte biti upotrebljavane i na drugim serverima, pored onog koji ste vi podesili.

Unutar ovih oznaka se nalaze PHP skripte, koji se sastoje od naredbi koje se završavaju tačkom-zarez (`;`). Možda ste radili sa drugim skriptnim jezicima, kao što je [JavaScript](/kursevi/ucimo-javascript), kod kojih je upotreba znaka tačka-zarez opciona, kod PHP-a ona je obavezna.

Naš prvi PHP skript je standardan, koristimo samo funkciju `phpinfo()`, koja prikazuje informacije o verziji PHP-a. Funkcija `phpinfo` je jedna od mnogih koje su ugrađene u PHP. Funkcije mogu da sadrže stotine redova koda, a sve što mi treba da uradimo je da tu funkciju pozovemo preko njenog naziva. Funkcija `phpinfo` će kreirati tabelu u kojoj se nalaze informacije o vašoj instalaciji PHP-a. Evo kako se ona poziva:

{:.ulaz}
```php
<?php
phpinfo();
?>
```

Unesite ovu skriptu u svoj editor, i sačuvajte fajl pod nazivom `phpinfo.php`.

Čestitamo! Upravo ste kreirali prvu PHP skriptu. Nije loše. Sledeći korak je da je prebacite na server. To ćete uraditi isto kao što prebacujete i obične HTML strane, pomoću FTP programa ili web interfejsa.

Ako radite u lokalu, datoteku `phpinfo.php` možete otvoriti preko lokalnog servera. Kod Apache-a to je folder `htdocs`, unutar foldera u kojem je instaliran Apache. Kod IIS servera to je folder `inetpub/wwwroot`. Na Linuxu to može biti folder `/var/www/html`. Nakon što ste proverili da li je vaš server konfigurisan da radi sa PHP-om, pokrenite server.

## Izvršenje prve PHP skripte

Da biste izvršili fajl `phpinfo.php`, treba samo da ga otvorite u svom pretraživaču, kao i bilo koju drugu web stranu. To znači da je potrebno da pretraživač usmerite na odgovarajuću URL adresu. Ako PHP koristite lokalno, potražite adresu `http:/localhost/phpinfo.php`.

Ako je sve u redu, prikazaće se tabela sa informacijama o PHP-u. Čestitamo - postajete PHP programer :) Ako krenete naniže, možete pronaći informacije o vašoj konfiguraciji PHP-a. Ako ste se pitali koja je verzija PHP-a instalirana, sada je trenutak da to proverite.

## Šta učiniti ako ovo ne radi?

![php bez panike](/images/fore/panika.jpg)

Nažalost, štošta može da "pođe naopako" kada prvi put pokušavate da pokrenete PHP. Ako ne ide sve po planu, nemojte paničiti. Potrebno je samo da utrošite malo dodatnog vremena. Možda ste dobili praznu stranu ili poruku da datoteka nije pronađena ili neku drugu grešku. Bez obzira šta se desilo, problem se može rešiti.

Prvo što treba da proverite, ako radite u lokalu, je da vidite da li je PHP podignut. Na komandnoj liniji otkucajte `php -v`. Ako se prikaže verzija PHP-a, onda on radi. Ako možete da komandnu liniju otvorite i na računaru provajdera, možete da izvršite isti test.

Sledeće što treba da proverite je da li je PHP instaliran na pravi način. Ovo je problem koji dovodi do prikazivanja prazne strane i, kada u svom pretraživaču izaberete opciju `view source`, moći ćete da vidite PHP skript. To znači da web server nije prosledio skript do PHP-a koji treba da ga izvrši. Ovo može biti problematično i to je razlog što su instrukcije na sajtu www.php.net tako obimne. Najbolja ideja je da sve pročitate još jednom, red po red, i tako proverite da li ste uradili sve što je tamo navedeno.

Nakon toga, treba da proverite da li je datoteka `phpinfo.php` tamo gde server očekuje da bude. Kao što sam pomenuo, kod Apache servera lokacija je folder `htdocs`, koja se nalazi u fascikli gde je Apache nstaliran. Kod IIS-a to je folder inetpub/www- root. Na Linuxu to može biti `/var/www/html`. Fascikla može biti različita u zavisnosti od servera koji se koristi. Ako ste phpinfo.php prebacili na uobičajeni direktorijum na računaru provajdera (tamo gde se stavljaju HTML strane) i ako to ne radi, pitajte provajdera. Ponekad je potrebno da on definiše podršku za određene foldere. Neki provajderi traže da za PHP skripte koristite drugu ekstenziju, kao što je, na primer, `.php5`, u slučaju verzije PHP5.

## Mešanje PHP i HTML koda

PHP fajlovi najčešće predstavljaju mešavinu HTML-a i PHP skripti. PHP se uvek nalazi između oznaka `<?php` i `?>`, na primer:

{:.ulaz}
```php
<html>
<head>
  <title>Mixing HTML and PHP!</title>
</head>
<body>
  <h1>Mixing HTML and PHP!</h1>
  <?php
    phpinfo();
  ?>
</body>
</html>
```

Kao što vidite, HTML definiše `<title>` koji se prikazuje u zaglavlju pretraživača i `<h1>` koji se prikazuje velikim masnim slovima. Nakon toga, server nailazi na PHP skript, što znači da se izlaz iz funkcije `phpinfo` ubacuje na stranicu, baš na tom mestu. Kao što znate, funkcija `phpinfo` kreira tabelu sa informacijama o instalaciji PHP-a.

## Štampanje teksta

Naredba `echo`, koja na web stranu ubacuje tekst, predstavlja jednu od najviše korišćenih naredbi. Naredba `echo` se koristi tako što iza nje pod navodnicima sledi tekst koji treba da se prikaže. U sledećoj skripti možete videti kako se prikazuje tekst "Zdravo PHP":

{:.ulaz}
```php
<h1>Neki naslov</h1>
<?php
echo "Zdravo PHP.";
?>
```

Pošto na HTML strani možete imati više razbacanih skripti, tekst možete štampati na više mesta. Tekst koji štampate možete staviti pod jednostruke ili dvostruke navodnike. Stavke koje štampate možete i da odvojite zarezima. Evo kako se to radi:

{:.ulaz}
```php
<?php
echo "Zdravo", "ovo", "je", "PHP.";
```

Sve stavke se na ovaj način štampaju se jedna iza druge:
```
ZdravoovojePHP.
```

Ako želite da između reči ubacite razmake, možete da uradite sledeće:

{:.ulaz}
```php
<?php
echo "Zdravo ", "ovo ", "je ", "PHP.";
```

Tada ćete dobiti:
```
Zdravo ovo je PHP.
```

Više odvojenih reči možete spojiti pomoću tačke, što se naziva **konkatenacija**:

{:.ulaz}
```php
<?php
echo "Zdravo " . "ovo " . "je " . "PHP.";
```

### Štampanje navodnika

Ako želite da odštamapte neki specijalni karakter (kao što je `"`), a da pri tome ne naredite PHP-u da prekine tekst (pošto je `"` oznaka za kraj teksta), možete da koristite `\"` . Evo kako:

{:.ulaz}
```php
<?php
echo "He said, \"I like ice cream.\"";
```

Ovo se naziva izvlačenje (*escape*) navodnika, tako da PHP prikazuje znak, a ne tretira ga kao oznaku kraja teksta.

### Print naredba

Pored naredbe `echo`, možete da koristite i `print`, koji ima istu sintaksu:

{:.ulaz}
```php
<?php
print "Zdravo PHP.";
```

Koja je razlika između naredbi `echo` i `print`? Nije velika. Print je više funkcija (pogledajte poglavlje o funkcijama), tako da vraća vrednost koja je uvek 1. Možete tu vrednost pročitati, ali u ovom slučaju sa njom ne možete mnogo da uradite. U većini praktičnih primera `echo` i `print` rade isto, tako da možete koristiti bilo koju od njih.


Izvor: Steven Holzner, *PHP 5*, Beograd, 2006.

*Napomena: izvorni tutorijal je redigovan je 2017. godine.*
