---
title: Boje u CSS-u
layout: lekcija-html
permalink: /css-boje
image: http://media02.hongkiat.com/thumbs/640x410/reset-default-css-colors-facebook.jpg
---

![]({{page.image}})

Tri osnovne boje na računarima su crvena, zelena i plava (*red*, *green*, *blue*, skraćeno **RGB**). Sve ostale boje se dobijaju njihovom kombinacijom.

Svim elementima možemo dodati dva ključna svojstva za boje, a to su `color` i `background-color`. Elementima sa ivicama takođe možemo zadati boju ivice (`border-color`).

## Različiti zapisi boja

Pored engleskih naziva (npr. `black`, `orange`, `crimson`), postoji još nekoliko načina zapisa boja u CSS-u:

- **heksadecimalni brojevi**, koji se sastoje od tri dela koji predstavljaju intenzitet crvene, zelene i plave boje na skali od 00 do FF (npr. `#00FF00`)
- **heksadecimalna skraćenica** od tri znaka, ako se brojevi dupliraju (npr. `#0F0` umesto `#00FF00`)
- **RGB brojevi** - tri broja koji predstavljaju intenzitet crvene, zelene i plave (***R**ed, **G**reen, **B**lue*) na skali od 0 do 255 (npr. `rgb(0, 255, 0)`)
- **RGB procenti** - tri procenta koji predstavljaju intenzitet crvene, zelene i plave (npr. `rgb(30%, 50%, 90%)`)
- **HSL** - tri broja koji predstavljaju: nijansu u stepenima (od 0 do 360), procenat zasićenosti i procenat svetline (npr. `hsl(290, 100%, 50%)`)
- **alfa kanal** - Dodaje četvrti broj u RGB i HSL bojama za određivanje neprovidnosti, u rasponu od 0 do 1. (npr. `rgba(170, 55, 100, 0.8)` ili `hsla(290, 100%, 50%, 0.2)`)

Pristupi se razlikuju zavisno od označavanja i preciznosti. Na primer, brojevi na skali od 0 do 255 su precizniji od procenata u rasponu od 0 do 100. 

U praksi, skoro svi koriste heksadeci­malne brojeve.

## Primeri

Postoji mnogo različitih načina da napišemo istu boju u CSS-u:

naziv | rgb | hex | hsl
------|------------|--------|----------
black | rgb(0,0,0) | #000000 | hsl(0,0,0)
white | rgb(255,255,255) | #FFFFFF | hsl(0,0,100)
red   | rgb(255,0,0) | #FF0000 | hsl(0,100,50)
yellow | rgb(255,255,0) | #FFFF00 | hsl(60,100,50)
coral | rgb(255,127,80) | #FF7F50 | hsl(16,100,66)

Kao što vidimo, crna se dobija postavljanjem tri osnovne boje na intenzitet „nula“, a bela postavljanjem na maksimalni intenzitet. U hsl zapisu, crvena boja ima nijansu crvene (0) na 100% zasićenosti i 50% svetline. Žuta je mešavina maksimalne crvene i zelene boje, bez plave. Koralna je mešavina sve tri boje, uz naglasak na crvenu. RGB brojevi i heksadecimalni brojevi su identični (FF je zapravo 255), a jedina razlika je u označavanju.

## Neprozirnost (*opacity*)

CSS je dodao mogućnost za prozirnost boja pomoću alfa kanala na RGB i HSL bojama. Podrazumevano je neprozirnost boja 100%. Međutim, ako promenite RGB ili HSL boje doda­vanjem broja od 0 do 1, možete napraviti prozirne boje. Na primer, crvena boja (rgb(255,0,0)) postaje ružičasta kada se prozirnost na beloj pozadini postavi na 50% (`rgba(255,0,0,0.5)`).

## Gde pronaći boje?

Ukoliko "nemate oko" za boje, na [Adobe Color](https://color.adobe.com) možete naći popularne palete boja koje su drugi napravili, kako biste ih iskoristili na svom sajtu.

Ako imate fotografije za sajt, ali još uvek niste izabrali boje, možete automatski generisati paletu boja na osnovu fotografije. Postoji mnoštvo online servisa koji to rade, na primer *[Color palette generator](https://www.canva.com/color-palette/)*.

### Izvori

* Ben Frain, *HTML5 i CSS3: Prilagodljiv web dizajn*, Beograd, 2014.
* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
