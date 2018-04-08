---
title: Održavanje softvera
layout: lekcija-razvoj
permalink: /odrzavanje-softvera
---

![](https://www.tutorialspoint.com/software_engineering/images/maintenance_cost_chart.png)

**Nakon puštanja u upotrebu, softverski sustav mora se i dalje mijenjati. Promjene softvera nužne su da bi se držao korak s novim korisničkim zahtjevima, promjenama poslovnog okruženja, napretkom hardvera i tako dalje. Proces mijenjanja softvera nazivamo održavanje odnosno evolucija.**

## Cijena održavanja softvera

Ukupna cijena održavanja softvera dostiže i prelazi cijenu njegovog polaznog razvoja. Cijenu održavanja možemo smanjiti opet tako da povećamo kvalitetu originalnog razvojnog procesa. Uz veću kvalitetu cijena razvoja će biti veća, ali će se stvoriti softver koji je jeftiniji za kasnije održavanje. Ova ideja ilustrirana je slikom 5.1.

![](/images/koncepti/odrzavanje-softvera.png)

U nastavku nastojimo popisati osnovne faktore koji utječu na cijenu održavanja:

1. **Cjelovitost specifikacije**. Ukoliko odmah uključimo sve zahtjeve, kasnije će biti manje perfekcijskog održavanja.
2. **Kvalitet oblikovanja**. Dobar dizajn je jeftiniji za održavanje. Smatra se da su sa stanovišta održavanja najbolji objektno-oblikovani sustavi, koji se sastoje od malih modula s jakom unutrašnjom kohezijom i labavim vezama prema van.
3. **Način implementacije**. Kod u „strožem“ programskom jeziku poput Jave lakše se održava nego kod u jeziku poput C-a. Strukturirani kod (if, while) sa smisleno imenovanim varijablama razumljiviji je od kompaktnog koda s mnogo goto naredbi.
4. **Stupanj verificiranosti**. Dobro verificirani softver ima manje grešaka pa će zahtijevati manje korekcijskog održavanja.
5. **Stupanj dokumentiranosti**. Uredna, dobro strukturirana i cjelovita dokumentacija olakšava razumijevanje softvera, te na taj način pojeftinjuje održavanje.
6. **Način upravljanja konfiguracijom**. Ukoliko se primjenjuju metode, alati i organizacijska pravila upravljanja konfiguracijom, tada je održavanje na dugi rok jeftinije.
7. **Starost softvera**. Što je softver stariji, to je skuplji za održavanje, budući da mu se građa degradirala, ovisan je o zastarjelim razvojnim alatima, a dokumentacija mu je postala neažurna.
8. **Svojstva aplikacijske domene**. Ako je riječ o stabilnoj domeni gdje se poslovna pravila rijetko mijenjaju, tada će se rijetko pojavljivati potreba za perfekcijskim održavanjem u svrhu usklađivanja s novim pravilima.
9. **Stabilnost razvojnog tima**. Održavanje je jeftinije ako se njime bave originalni razvijači softvera, jer oni ne moraju trošiti vrijeme na upoznavanje sa softverom.
10. **Stabilnost platforme**. Ako smo softver implementirali na platformi koja će još dugo biti suvremena, tada neće trebati adaptacijsko održavanje.

Na prvih šest faktora moguće je utjecati tijekom originalnog razvojnog procesa.


Izvor: Robert Manger, *Softversko inženjerstvo (skripta)*, Zagreb, 2012.
