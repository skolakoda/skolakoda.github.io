---
title: Tipovi podataka u PHP-u
layout: post
tags: php, uvod, podaci
---

Vi ne možete da odlučujete o načinu na koji se vaši podaci interno skladište. O tome odlučuje PHP. Iza scene, on podržava osam internih tipova podataka:
- boolean. Sadrži vrednosti true/false (tačno/netačno).
- integer. Sadrži cele brojeve, kao što su -1, 0, 5, itd.
- float. Sadrži brojeve sa pokretnim zarezom (tip double), kao što su 3.14159 ili
2.7218.
- string (struna). Sadrži tekst, kao što je "Zdravo iz PHP-a".
- array (niz). Sadrži niz sa podacima.
- object. Sadrži objekte iz programa.
- resource. Sadrži resurse sa podacima.
- NULL. Sadrži vrednost NULL.

Obično ne morate da brinete o ovim tipovima podataka, pošto PHP određuje tip promenljive na osnovu podataka koje joj dodelite. Na primer, sledeći iskaz će promenljivoj `$varijabla` dodeliti tip string:
```
$varijabla = "No worries.";
```
Sledeći iskaz će napraviti promenljivu tipa float:
```
$varijabla = 1.2345;
```
Sledeći iskaz će napraviti promenljivu tipa boolean:
```
$varijabla = TRUE;
```

Pošto PHP bira tip podatka na osnovu podatka koji dodelite promenljivoj, ovde nema problema.

## Konverzija tipa podatka

Problemi počinju kada počnete da mešate tipove - na primer, kada promenljivoj `$varijabla` dodate vrednost pomoću operatora `+`. Evo nekoliko primera:

{:.ulaz}
```php
<?php
$varijabla = "0";              // $varijabla je struna podešena na 0.
echo $varijabla, "\n";

$varijabla = $varijabla + 2;   // $varijabla je sada ceo broj sa vrednošću 2.
echo $varijabla, "\n";

$varijabla = $varijabla + 1.1;  // $varijabla je sada tipa float sa vrednošću 3.1.
echo $varijabla, "\n";

$varijabla = 2 + "8 apples";    // $varijabla je sada ceo broj sa vrednošću 10
echo $varijabla, "\n";
```

Ako želite da izbegnete potencijalne probleme sa tipovima podataka, nemojte mešati tipove. Čak i ako to uradite, PHP će skoro uvek "uraditi pravu stvar" (na primer, rezultat sabiranja celog i decimalnog broja će pretvoriti u decimalni broj, što je upravo ono što treba da se uradi), ali ako je potrebno da eksplicitno zadate tip promenljive, uvek možete koristiti pretvaranje tipa (*type cast*). Novi tip se stavlja u zagrade ispred naziva promenljive čiji tip želite da zadate. Evo nekoliko primera:

```php
<?php
$int_varijabla = (integer) $varijabla;
$float_varijabla = (float) $varijabla;
$string_varijabla = (string) $varijabla;
```

### Konverzija u bulov tip

Kada konvertujete u tip boolean, smatra se da su vrednosti tipa `FALSE`:

- integer 0
- float 0.0
- prazan string i string "0"
- Niz sa nula elemenata
- Objekat bez članova
- Specijalni tip NULL (uključujući i promenljive koje nemaju vrednost)

Svaki drugi tip se smatra da je `TRUE` (ukučujući i resource).

### Konverzija u broj

Kada konvertujete u tip integer:
- Boolean FALSE će dati 0 (nula), a Boolean TRUE će dati 1 (jedan).
- Vrednosti tipa float se zaokružuju prema nuli.

Kada konvertujete tip float, konverzija je ista kao kad je vrednost konvertovana u integer, a onda u float. Konverziju možete da vršite i iz integera u numeričke tipove, ali to ponekad može biti komplikovano.


Izvor: Steven Holzner, *PHP 5*, Beograd, 2006.


<script>
  {% include js/jezici.js %}
  {% include js/editor-api.js %}
</script>
