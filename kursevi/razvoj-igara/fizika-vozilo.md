---
title: Fizika vozila  
layout: lekcija-razvoj-igara  
permalink: /fizika-vozilo  
---

Dok se automobil kreće, suočava se sa dva glavna otpora koji ga usporavaju: aerodinamički otpor i otpor kotrljanja. Ukupan otpor kretanju automobila predstavlja zbir ta dva: 

```
R total = R air + R rolling
```

## Proklizavanje pri kočenju

![](/images/razvoj-igara/proklizavanje.jpg)

U normalnim uslovima, zaustavni put (*stopping distance*) zavisi od kočionog sistema: što su jače kočnice, kraći je zaustavni put. Međutim, to nije slučaj kada gume proklizaju. U uslovima proklizavanja, zaustavni put zavisi od sile trenja između guma i puta, kao i od nagiba kolovoza.  

Postoji formula za izračunavanje dužine proklizavanja: 

```
ds = V² / [2 * g * (μ * cos φ + sin φ)]
```

gde je
- `ds`: dužina klizanja
- `g`: gravitaciono ubrzanje (9.81 m/s²)
- `μ`: koeficijent trenja guma i puta
- `V`: brzina u trenutku proklizavanja
- `φ`: nagib puta (pozitivan uzbrdica, negativan nizbrdica)

Koeficijent trenja zavisi od guma i puta, ali okvirno je oko 0.4. 

## Skretanje  

![skretanje-kola](/images/razvoj-igara/skretanje-kola.png)  

Da bi automobil održao zakrivljenu putanju, mora postojati centripetalna sila („sila ka centru“) koja deluje na automobil. Kada ulećemo u krivinu osećamo centrifugalno ubrzanje, usmereno od centra. To je zapravo rezultat inercije predmeta da nastave pravolinijsku putanju. Bez centripetalne sile bi automobil nastavio pravo.  

Kada vozač okrene volan, gume proizvode silu ka centru preko trenja sa površinom puta. Jedna od najvažnijih stvari u trkama je skretanje što brže moguće, bez gubitka kontrole.

Proklizavanje prednjih točkova se obično dešava zbog prebrzog ulaska u krivinu i prenaglog skretanja. Tada, ako vozač naglo zakoči ili samo pusti gas, dolazi do prenosa težine napred. To uzrokuje da se automobil više okrene nego što je vozač nameravao, što može rezultirati čak i vrtenjem. 