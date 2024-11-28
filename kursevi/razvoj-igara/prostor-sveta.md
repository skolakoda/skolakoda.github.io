---
title: Prostor sveta
layout: lekcija-razvoj-igara
permalink: /prostor-sveta
---

U 3D grafici, prostor sveta se odnosi na celokupni koordinatni sistem u koji se objekti postavljaju. To je trodimenzionalni prostor u kojem se položaji objekata mere duž tri ose: x, y i z.

## Ishodište sveta

**Ishodište sveta** (*world origin*) je početna tačka u 3D koordinatnom sistemu. Označava se kao `(0, 0, 0)` i služi kao ishodišna tačka iz koje se meri udaljenost predmeta duž sve tri ose (x, y, z). 

Ishodište sveta je početak svih koordinata i omogućava određenje položaja predmeta. Sve transformacije, kao što su pomeranje, rotacija i skaliranje objekata, obavljaju se u odnosu na ovo ishodište. 

## Koordinate sveta i koordinate kamere

![svet-i-kamera-koordinati](/images/razvoj-igara/svet-i-kamera-koordinati.png)

Koordinate sveta predstavljaju globalnu poziciju objekata u 3D prostoru, dok koordinate kamere definišu položaj i orijentaciju objekata u odnosu na kameru. Svaki objekat ima svoje koordinate u svetu, koje se zatim transformišu u koordinate kamere kako bi se odredilo šta kamera vidi na ekranu. 

Ova transformacija omogućava prikazivanje scene iz željenog ugla.

## Normalizovane koordinate uređaja 

Normalizovane koordinate uređaja (*Normalized Device Coordinates*, skraćeno NDC) mogu biti u rasponu od [-1, 1] za obe ose, x i y. Programer dizajnira čitav ekran koristeći NDC. NDC skriva od nas tri stvarnosti hardvera:

- Stvarni broj piksela na x i y osi.
- Neravnomerno raspoređivanje piksela na x i y osi.
- Pravac Y ose - gore ili dole. Transformacija NDC-a u piksele će obrnuti Y osu ako je potrebno.

Ako direktno mapiramo koordinatni sistem sveta (WCS) na koordinatni sistem uređaja (DCS), promena uređaja zahtevala bi novo mapiranje. Umesto toga, koristimo normalizovane koordinate uređaja kao posredni sloj.

![](/images/razvoj-igara/ndc.gif)
