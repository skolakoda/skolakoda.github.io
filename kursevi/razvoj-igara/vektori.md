---
title: Vektori za game developere
layout: lekcija-razvoj-igara
permalink: /vektori
---

![vektori](/images/koncepti/vektori/vectori.png)

**Vektor je zapravo samo format zapisa, poput niza. Vektori su ušli u nauku u 19. veku, kada su matematičari i fizičari nastojali da opišu kretanje, umesto statičnog sveta.**

Vektor možemo vizuelizovati kao duž koja ima glavu i rep. U kodu, vektor je niz brojeva kojima zapisujemo dužinu i smer, ili pomeraj po osama. Dužina vektora se naziva intenzitet.

Vektore i matrice proučava linearna algebra.

## Zapisivanje vektora

Vektore možemo zapisati u polarnim ili Dekartovim koordinatama. **Polarnim načinom** zapisujemo dužinu i smer (ugao) vektora, na primer `[5, 0.93]`:

```
duzina = 5
smer = 0.93 (~53.3 stepena)
```

**Kartezijanskim načinom** zapisujemo pomeraj vektora po osama (x, y, i eventualno z), na primer `[4, 3]`:

```
pomeraj_x = 4
pomeraj_y = 3
```

## Prevođenje polarnog u kartezijanski zapis

Iz polarnog zapisa lako možemo dobiti `x` i `y` komponentu vektora. Za računanje `x` komponente koristimo `kosinus`, a za `y` `sinus` funkciju. Obe funkcije primaju ugao, a vraćaju broj između -1 i 1. Kada pomnožimo taj broj sa dužinom vektora, dobijemo odgovarajuću osu:

```
pomeraj_x = duzina * cos(ugao)
pomeraj_y = duzina * sin(ugao)
```

U našem primeru, dobijamo sledeće brojeve:
```
5 * cos(0.93) = 3
5 * sin(0.93) = 4
```

## Računanje dužine vektora

![vector](/images/koncepti/vektori/vektori-pitagora.jpg)

Ako imamo x i y komponentu vektora u kartezijanskom zapisu, dužinu možemo računati Pitagorinom teoremom. Ako se nepoznati leteći objekat pomera 4 nadesno i 3 nagore, ovako ćemo saznati njegovu brzinu:

```
brzina² = 3² + 4²
brzina² = 9 + 16
brzina² = 25
brzina = 5
```


## Vektori u igrama

![vektori](/images/koncepti/vektori/vektori-u-igrama.jpg)

U programiranju igara, vektori su nezaobilazni. **Koriste se za čuvanje položaja, brzine, smera**. Ovo su 2D primeri sa slike:

- **Vektor položaja** znači da čikica stoji 2 metra istočno i jedan metar severno od ishodišta. 
- **Vektor brzine** pokazuje da u jednom minutu avion ide 3 kilometra gore i 2 levo. 
- **Vektor smera** pokazuje da je pištolj uperen udesno. 

Kao što vidimo, vektor je samo skup brojeva, čije značenje zavisi od konteksta. Zbog toga je bitno da vodimo računa o jedinicama. Na primer, da položaj uvek bude u metrima, a brzina u metrima po sekund.

## Predstavljanje vektora

U programskim jezicima uglavnom ne postoji ugrađeni tip za čuvanje vektora. Vektori se čuvaju u strukturama poput niza ili specijalizovane klase. Ovo je prost primer Vektor klase, koja prime dve (`x, y`) i opciono treću (`z`) dimenziju:

```js
class Vektor {
  constructor(x, y, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }
}
```

Da bismo počeli da radimo sa vektorima, prvo što treba napraviti je prosta vektor klasa koja radi vektorsko sabiranje, oduzimanje, razne vrste množenja i rotaciju. Ostatak naše fizike će biti izgrađen na vektorima.

## Vektori vs skalari

U kontekstu vektora, obične brojeve zovemo skalarima. Skalar je svaka veličina koja može biti izražena pomoću jednog broja (temperatura, dužina, masa...). Zove se skalar jer skalira vektor.

Razlika između vektora i skalara je u smeru. Ako kažeš prijatelju da te pokupi kolima, jer se nalaziš 2 km od njega, po svoj prilici te neće naći. Ali, ako mu kažeš da si 2 km južno, onda ima šanse da te pokupi. To je jedina razlika.
