---
title: Izvršavanje PHP-a sa komandne linije
layout: lekcija-php
permalink: /php-komandna-linija
---

**Pored toga što PHP možete da povežete sa serverom da čita skripte i izvršava ih, PHP može da se pokrene i sa komandne linije.**

PHP je jezik koji se interpretira. To znači da u trenutku izvršenja PHP interpreter čita skript i interpretira svaki iskaz, prevodeći ga u kod koji računar može da izvrši. Program koji interpretira komandnu liniju zove se *Command Line Interpreter* (CLI).

PHP možete da sa komandne linije pozovete komandom `php` (na serveru je `php-cgi`). Morate biti sigurni da računar može da pronađe php, što znači da je php (folder `bin` PHP-a) u putanji na računaru. Na primer, pod pretpostavkom da imate fajl `index.php`, ako je php u vašoj putanji, onda ovo možete da pokrenete sa komandne linije na sledeći način (podrazumeva se da se nalazite u fascikli u kojoj je `index.php`):

```
php index.php
```

Ako ovo ne radi, možete da zadate tačnu lokaciju php-a, koji bi na Unixu mogla biti:

```
/usr/bin/php index.php
```

PHP CLI ima puno opcija. PHP će vam izlistati sve opcije ako unesete `php -h` (h kao help).

![php](https://i.stack.imgur.com/RfxVi.gif)

Ako, na primer, želite da dobijete info preko komande linije, možete ukucati `php -i`.

## Štampanje u komandnoj liniji i štampanje na stranici

Između štampanja teksta na komandnoj liniji i u pretraživaču ima razlike. U pretraživaču za formatiranje možete da koristite HTML elemente, kao što su `<br>` ili `<p>`. Kada štampate sa komandne linije, za formatiranje teksta možete da koristite specijalne karaktere:

```
\n Novi red
\r Return
\t Tab
\\ Prikazuje se \
\$ Prikazuje se $
\" Prikazuje se "
\0 do \777 Prikazuje se karakter koji odgovara oktalnom kodu (sa osnovnom 8)
\x0 do \xFF Prikazuje se karakter koji odgovara heksadecimalnom kodu (sa osnovom 16)
```

Na primer, sledeća skripta:

{:.ulaz}
```php
<?php
echo "Line 1\nLine 2";
?>
```

U komandnoj liniji prikazuje tekst "Line 1" u jednom redu, a "Line 2" u sledećem. U pretraživaču karakter `\n` ne znači ništa, pa morate pisati `Line 1 <br> Line 2`.

Ako želite, možete da dugačku strunu pod navodnicima razložite na nekoliko redova. Novi redovi će se prikazati ako štampate sa komandne linije. Ako štampate sa web strane, prekidi redova će biti zanemareni.

{:.ulaz}
```php
<?php
echo "This text
spans
multiple
lines.";
?>
```


Izvor: Steven Holzner, *PHP 5*, Beograd, 2006.
