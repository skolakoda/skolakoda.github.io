---
title: Promenljive i nepromenljive u PHP-u
layout: lekcija-php
permalink: /php-promenljive-i-nepromenljive
---

Sve poruke koje smo do sada prikazivali bile su fiksne i nepromenljive, poput:

{:.ulaz}
```php
<?php
echo "Hello from PHP.";
?>
```

Ovim se samo prikazuje tekst i ništa više. Ako bi to bilo sve, PHP ne bi ni bio potreban - isti efekat bi mogao da se postigne korišćenjem HTML-a. Suština PHP-a je u dinamičkom rukovanju podacima. Za tu svrhu se koriste promenljive.

## Promenljive (varijable)

![varijabla](/images/koncepti/varijable/varijabla.png)

**Promenljive su skladišta podataka.** Recimo, na primer, da prodajete šešire preko weba i da želite da proverite ukupne zalihe u sva tri magacina, koji se nalaze u Čikagu, Tokiju i Parizu. Kako ćemo sabrati brojeve koji pokazuju količine šešira u čikagu, Tokiju i Parizu? To je trenutak kada "u igru" ulaze promenljive. U PHP-u one počinju oznakom za dolar `$`. Promenljive mogu da sadrže podatke; ako pod nazivima `$chikago`, `$tokyo` i `$paris` smestite brojeve, evo kako biste mogli da to sabirate:

```php
<?php
echo "I have " , $chicago + $tokyo + $paris , " party hats!";
?>
```

PHP ima ugrađenu podršku za matematičke operacije nad podacima, uključujući i sabiranje. Prema tome, da biste sabirali vrednosti, možete da koristite operator `+`.

Ispravan naziv promenljive u PHP-u počinje slovom ili podvlakom, iza čega sledi proizvoljan broj slova, broja ili podvlaka. Naziv može imati proizvoljnu dužinu. Evo nekih ispravnih naziva promenljivih: `$pizza_temperature, $_number_of_tigers, $planet_number_9`.

Kao što vidite, promenljive se ponašaju kao skladište za podatke. Kako ćete te podatke smestiti u promenljive?

## Dodela vrednosti

Kada u PHP-u želite da kreirate promenljivu, podatke joj dodeljujete pomoću operatora dodele (`=`). Evo jednog primera dodele vrednosti promenljivim (nakon što se program izvrši, promenljiva `$temperature` će imati vrednost 69, vrednost `$pi` iznosiće 3.14159265, itd).

```php
$temperature = 69;
$number_of_earths = 1;
$pi = 3.1415926535;
$reassurance = "No worries.";
```

Primetićete da smo nekim promenljivim dodelili brojčane, a nekim tekstualne vrednosti. Pošto brojevi nisu tekst, nisu pod navodnicima. U pojedinim jezicima morate da zadate tip promenljive (na primer, string ili integer), ali u PHP-u to ne važi, pa je sve mnogo lakše.

U ovom slučaju smo promenljivoj `$apples` dodelili vrednost 1, a zatim smo prikazali vrednost koja je u toj promenljivoj.

{:.ulaz}
```php
<?php
$apples = 1;
echo "Number of apples: ", $apples, "<br>";
```

Recimo da sada želite da povećate broj jabuka za tri. To možete uraditi ako vrednosti `$apples` dodelite trenutnu vrednost `$apples` , uvećanu za 3:

{:.ulaz}
```php
<?php
$apples = 1;
echo "Number of apples: ", $apples, "<br>";
$apples = $apples + 3;
echo "Number of apples now: ", $apples, "<br>";
```

## Ubacivanje promenljivih u tekst

Vrednosti promenljivih možete prikazati na sledeći način:

{:.ulaz}
```php
<?php
$apples = 1;
echo "Number of apples: ", $apples, ".";
```

Postoji i lakši način. Vrednosti promenljivih mogu da se ubace direktno u tekst ako ih omeđite dvostrukim (ne jednostrukim) navodnicima, što se zove **interpolacija**:

{:.ulaz}
```php
<?php
$apples = 1;
echo "Number of apples: $apples.";
```

Ovaj primer će odštampati `Number of apples: 1.` Ovo ubacivanje je brz način za prikazivanje sadržaja promenljive, ali šta učiniti ako promenljiva `$text` sadrži tekst "news" , a vi želite da na izlazu dobijete reč "newspaper"? Mogli biste da probate sledeće:

{:.ulaz}
```php
<?php
$text = "news";
echo "Where's the $textpaper <br>";
```

PHP ovo neće razumeti, pošto izgleda kao da se koristi promenljiva `$textpaper`, koja ne postoji. Ispravan način je da promenljivu oivičite vitičastim zagradama:

{:.ulaz}
```php
<?php
$text = "news";
echo "Where's the {$text}paper.";
```

## Nepromenljive (konstante)

![konstante](/images/koncepti/varijable/php-constant.png)

Ponekad nećete želeti da promenljiva može da se menja - želećete da njena vrednost bude nepromenljiva. Pretpostavimo, na primer, da imate promenljivu pod nazivom `$pi` koja sadrži vrednost broja pi. Može se desiti da se takva vrednost nenamerno promeni, što nije dobro. Rešenje je da se napravi konstanta, čija vrednost ne može da se menja.

Konstante se kreiraju pomoću funkcije `define`. Konstanti se daju naziv i vrednost koju želite da joj dodelite: `define ("pi", 3.14159265);` Naziv konstante je uvek pod navodnicima, dok je vrednost koja se dodeljuje pod navodnicima samo ako je reč o struni.

{:.ulaz}
```php
<?php
define ("pi", 3.1415926535);
echo "The constant pi holds " , pi, "<br>";
```

Ako probate da promenite vrednost ove konstante (na primer, `pi = 3.14;`), PHP neće to prihvatiti. Pošto se ispred konstanti ne stavlja prefiks `$`, PHP može da se "zbuni" ako za naziv konstante upotrebite neku od rezervisanih reči.


Izvor: Steven Holzner, *PHP 5*, Beograd, 2006.


<script>
  {% include js/jezici.js %}
  {% include js/editor-api.js %}
</script>
