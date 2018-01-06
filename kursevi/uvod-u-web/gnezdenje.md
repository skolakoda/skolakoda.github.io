---
layout: lekcija-html
permalink: /ucimo-html/gnezdenje
---

# Gneždenje HTML elemenata

HTML elementi koji imaju dva taga (početni i završni) mogu sadržati druge elemente unutar sebe. Elementi koji nemaju završni tag ne mogu sadržati druge elemente.

U sledećem primeru, neki od HTML elemenata su ugnježdeni jedni unutar drugih. Ugnježdene elemente uvek poravnavamo pomoću `tab`a ili razmaka.

{:.ulaz}
```html
<h1>Zdravo svete</h1>

<div>
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gibson-sg.svg/48px-Gibson-sg.svg.png" alt="gitara" />

    <p>Ja sam prvi pasus u prvom odeljku i sadržim <b>podebljan tekst</b>.</p>

    <p>Ja sam drugi pasus u prvom odeljku i sadržim <i>iskošen tekst</i>.</p>
</div>

<section>
    <h2>Ja sam podnaslov</h2>

    <p>Ja sam prvi pasus u drugom odeljku i sadržim unos <input />.</p>

    <p>Ja sam drugi pasus u drugom odeljku i sadržim <a href="https://sh.wikipedia.org">link ka Wikipediji</a>.</p>
</section>
```

Ne prepoznaješ sve tagove? Slobodno koristi pretragu da saznaš čemu služe.
