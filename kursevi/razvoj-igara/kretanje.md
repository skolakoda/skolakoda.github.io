---
title: Kretanje
layout: lekcija-razvoj-igara
permalink: /kretanje
---

![](/images/razvoj-igara/translatorno-kretanje.png)

U igri, možemo menjati položaj predmeta kako god želimo. U stvarnom svetu je drugačije. **Telo ima svoj položaj, pomera se pomoću kretanja, a kretanje se postiže dodavanjem sile.** Kada računamo kretanje, interesuju nas položaj, brzina i ubrzanje tela. Položaj (x, y) se uvek odnosi na centar mase.

Svako telo se sastoji od mnoštva tačaka. Prema načinu kretanja tačaka u telu, kretanje delimo na:
* obično ili translatorno kretanje (sve tačke tela se kreću na isti način i opisuju iste putanje)
* rotaciono kretanje (različite tačke tela prelaze različite kružne putanje)

Nauka o kretanju se zove kintetika.

## Pređeni put (*distance*) i pomeraj (*displacement*)

U jednoj dimenziji (npr. kretanje po liniji), pređeni put je uvek jednak pomeraju. Čim imamo kretanje u više dimenzija, pređeni put je po pravilu duži od putanje vazdušnom linijom, koja zovemo pomeraj ili pomak.

Kada računamo pomeraj, jedino nas zanima odakle predmet kreće i gde završava. Kada vozimo automobil, nikad ne stižemo na odredište vazdušnom linijom, već postojećim putevima koji su više ili manje zaobilazni. Razmak na mapi koji smo prešli je pomeraj, a naše stvarno putovanje je pređeni put.

![distance-vs-displacement](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Distancedisplacement-sr.svg/640px-Distancedisplacement-sr.svg.png)

## Brzina (*speed*) i vektorska brzina (*velocity*)

Obična brzina (*speed*) je skalar, na primer 50km/h. Usmerena brzina (en. *velocity*, `v`) je vektor, na primer 50km/h istočno. Obična brzina se računa iz pređenog puta u odnosu na vreme:

```
prosečna brzina = pređeni put / vreme
```

Vektorska brzina se izvodi iz pomeraja u odnosu na vreme:

```
v = Δs / Δt
usmerena brzina = pomeraj / vreme
```

Vektorska brzina je zapravo promena položaja kroz vreme:

```java
Vec3 CalcVelocity(Vec3 pos0, Vec3 pos1, float time)
{
  return (pos1 - pos0) / time;
}
```

Ako nas zanima samo koliko brzo predmet ide, koristimo brzinu. Ako hoćemo da usmerimo kretanje predmeta, koristimo vektorsku brzinu. Pod brzinom ćemo nadalje podrazumevati vektorsku brzinu.

## Ubrzanje (*acceleration*)

Ubrzanje (en. *acceleration*, `a`) je promena brzine u jedinici vremena:
```
a = Δv / Δt
```

U kodu:
```cpp
Vec3 CalcAcceleration(Vec3 vel0, Vec3 vel1, float time)
{
  return (vel1 - vel0) / time;
}
```

Negativno ubrzanje se naziva usporavanje ili kočenje. Svaki put kada dodamo gas, automobil ubrzava. Čim pustimo gas, automobil počinje da usporava. Ako se brzina ne menja, ubrzanje je 0. 

### Opasnost brzine

Ako čovek padne sa bicikla na nizbrdici, neznatno veća brzina čini znatno veću štetu, jer kinetička energija raste s kvadratom brzine:

```
KE = 1/2 m * v²
```

To znači da i neznatno povećanje brzine značajno povećava energiju koja se oslobađa pri sudaru. Masa ima linearni uticaj, ali brzina je dominantan faktor jer njen efekat eksponencijalno raste.

Isto pravilo važi i za sudar automobila. Na primer, ako se brzina udvostruči, kinetička energija postaje četiri puta veća, što dramatično povećava štetu.

## Momentum

Momentum ili impuls se definiše kao proizvod mase i brzine:

```
p = m * v
```

Pošto je zasnovan na brzini, koja se stalno menja, možemo govoriti o trenutnom momentu ili o promeni momenta tokom vremena.

{:.uokvireno}
**Savet:** Dodajte u svakom kadru mali vektor sile u smeru kretanja vozila, kako biste simulirali momentum. Važno je da taj vektor sile bude procenat brzine, a ne doslovna vrednost.

## Inercija

Kada želimo da promenimo brzinu, telo pokazuje izvestan otpor prema takvim promenama. Taj otpor, nazvan inercija, rezultat je mase tela. Što je masa tela veća, promena brzine će biti manja.

## Jednačine kretanja

Ovih pet jednačina će nam rešiti svaki problem vezan za kretanje sa konstantnim ubrzanjem:

* krajnja brzina = pocetna brzina + ubrzanje * vreme
* prosecna brzina = (pocetna brzina + krajnja brzina) / 2
* pomeraj = 1/2 (pocetna brzina + krajnja brzina) * vreme
* pomeraj = pocetna brzina * vreme + 1/2 ubrzanje * vreme²
* krajnja brzina² = pocetna brzina² + 2 * ubrzanje * pomeraj

U 3D svetu koristimo ove formule ali sa 3D vektorima. Vektori rade isto kao i skalari u ovim jednačinama.

{:.uokvireno}
Jednačine kretanja važe samo za konstantno ubrzanje. Ako se ubrzanje u igri menja, podeli ga u manje vremenske intervale konstantnog ubrzanja. Ovo radi savršeno, jer se računanje vrši svakog kadra.
