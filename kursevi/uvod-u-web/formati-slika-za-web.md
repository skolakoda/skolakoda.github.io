---
title: Formati slika za web
layout: lekcija-html
permalink: /formati-slika-za-web
---

**Slike za web treba pretvoriti u jedan od formata koji podržava većina pregledača: gif, jpg, png ili svg. Neki pregledači podržavaju i druge formate, ali ne svi.**

Da bismo uspešno koristili slike, moramo znati koji format je prikladan za koju upotrebu. Format JPEG je najbolji za fotografije, zbog svoje kompresije. GIF možemo koristiti za animacije.

## GIF

*Format za razmenu grafičkih datoteka*, poznat kao GIF, nekada je bio najviše korišćen for­mat slika. GIF je dobar za logotipe, ikone, crteže i druge jednostavne slike. Međutim, nije dobar za visoko detaljne slike, zato što slika može koristiti maksimum 256 boja. Foto­grafije u formatu GIF izgledaju tačkasto i zamrljano.

Format GIF podržava providnost, što olakšava integrisanje slike u dizajn, ali ne podržava alfa providnost. Alfa providnost, koju podržava PNG, spaja sliku sa pozadinom i mnogo je bolja od jednostavne providnosti.

Mogućnost formata GIF koja je jedinstvena u odnosu na druge formate je podrška za proste animacije.

## JPEG

JPEG, što znači *Udruženje fotografskih eksperata* (ono koje je razvilo ovaj format), najpopu­larniji je format za slike na webu. JPEG (izgovara se džej-peg) je, u stvari, metoda za kompresiju slika koju mogu da koriste drugi formati. Format datoteke po kome je JPEG takođe poznat zove se JPG.

Format JPEG je napravljen za skladištenje fotografija. Za razliku od GIF-a, JPEG može sadržati bilo koji broj boja. Algoritam kompresije koji koristi JPEG format je posebno dobar za fotografije, pa su fotografije znatno manje od onih koje su kompresovane formatom GIF ili PNG. 

Format JPEG koristi algoritam kompresije sa gubicima, što znači da se neki podaci korišćeni na slici odba­cuju da bi bila smanjena datoteka. To čini format JPEG nepogodnim za slike koje sadrže elemente sa oštrim ivicama, kao što su logotipi, crteži i slova.

## PNG

Format PNG (izgovara se ping) je prvobitno dizajniran kao zamena za GIF. Skraćenica PNG znači *Prenosiva mrežna grafika*. Kao i kod formata GIF, podaci se ne gube kada se konvertuju.

Ako kreiramo nove slike koje nisu fotografije, koristi se format PNG. 

## SVG

*Skalabilna vektorska grafika* (SVG) je grafički format napravljen za web, koji se koristi za dodavanje vektorskih slika stranicama. W3C je uveo SVG format kao standard 2001. godine. Glavna prednost je što se može beskrajno uvećavati, a da se ne izgubi kvalitet. To čini ovaj format veoma pogodnim za prilagodljivi veb dizajn.

SVG je napravljen u proširivom jeziku za označavanje (XML) i može se pisati direktno u HTML-u. Tako se SVG slike brže učitavaju. Ako pogledamo SVG sliku koju stavimo u HTML, ona će umnogome ličiti na druge HTML oznake. SVG je jezički srodnik HTML-a i takođe koristi tagove i atribute. 

Uglavnom nije potrebno da ručno pišemo SVG oznake, zato što su dostupne mnoge alatke za kreiranje slika. Većina vektorskih grafičkih programa, kao što su [Adobe Illustrator](http://www.adobe.com/products/illustrator.html) i [Inkscape](https://inkscape.org/en/), sačuvaće slike u formatu SVG.

## Literatura

* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
