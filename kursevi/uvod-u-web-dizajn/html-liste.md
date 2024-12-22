---
title: Liste u HTML-u
layout: lekcija-html
permalink: /html-liste
---

**HTML liste mogu da se koriste za različite namene, kao što su spiskovi za podsetnik ili liste nabrajanja. Takođe se koriste i za navigaciju veb sajtova.**

Uređene liste (*ordered list*) su numerisane i korisne za predstavljanje stavki, poput top 10 omiljenih pesama ili koraka nekog tutorijala. Neuređene liste (*unordered list*) nisu numerisane i koriste se za nabraja­nje predstavljeno kružićima, ali takođe za navigaciju i padajući meni.

## Uređene liste (`<ol>`)

Pri prikazivanju numerisane liste pregledač numeriše i uvlači svaku stavku. Ne morate sami vršiti numerisanje, a ako dodate ili izbrišete stavke, pregledač će ih sam numerisati.

Uređene liste koristimo kada je red stavki važan. Uređene liste su dobre za praćenje koraka ili uputstava. Na primer, u sledećem primeru imamo listu koraka pomoću kojih objašnjavamo kako se pravi HTML fajl:

{:.html-ulaz}
```html
<p>Pravljenje HTML fajla</p>
<ol>
  <li>Otvori editor</li>
  <li>Napravi novi .html fajl</li>
  <li>Unesi tagove</li>
  <li>Sačuvaj fajl</li>
</ol>
```

Postoje dva prilagođavanja specifična za uređene liste: prvo omogućava da promenimo stil numerisanja, a drugo da promenimo numerisanje.

### Stilovi uređene liste

Svojstvo `list-style-type` na `<ol>` elementu može imati sledeće vrednosti:

- `decimal` (podrazumevano): standardni arapski brojevi (1,2,3 4, itd)
- `lower-alpha`: mala slova (a, b, c, d, itd)
- `uppper-alpha`: velika slova (A, B, C, D, itd)
- `lower-roman`: mali rimski brojevi (i, ii, iv, itd)
- `upper-roman`: veliki rimski brojevi (I, II, II, IV, itd)

Ako ste podesili tip stila uređene liste na `upper-roman`:

{:.html-ulaz}
```html
<p>Dani sedmice na francuskom:</p>
<ol style="list-style-type: upper-roman;">
  <li>Lundi</li>
  <li>Mardi</li>
  <li>Mercredi</li>
  <li>Jeudi</li>
  <li>Vendredi</li>
  <li>Samedi</li>
  <li>Dimanche</li>
</ol>
```

## Neuređene liste (`<ul>`)

Ako lista sadrži stavke kod kojih redosled nije bitan, koristimo neuređenu listu.

{:.html-ulaz}
```html
<p>Uraditi:</p>
<ul>
  <li>Srediti dizajn sajta</li>
  <li>Ažurirati blog</li>
  <li>Dodati nove kurseve</li>
  <li>Organizovati Arduino radionicu</li>
</ul>
```

### Stilovi neuređene liste

Svojstvo `list-style-type` na `<ul>` elementu može imati sledeće vrednosti:

- `disc` - kružić; ovaj stil je podrazumevani
- `square` - kvadratić, umesto kružića
- `circle` - prazan kružić.

Takođe, možemo koristiti sliku po izboru, preko svojstva `list-style-image`. Na primer:

```css
ul {
  list-style-image: uri(/bullet.gif);
}
```
