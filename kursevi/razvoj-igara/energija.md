---
title: Energija
layout: lekcija-razvoj-igara
permalink: /energija
---

**Energija je alternativni pristup modelovanju kretanja (pored sile).**

## Rad

U fizici, rad je prenos energije iz jednog sistema u drugi, koji se vrši delovanjem sile. Rad se vrši kada sila pomera predmet. Predmet se mora pomeriti da bi se rad obavio. Rad je jednak proizvodu sile i pomaka, ako sila deluje u pravcu pomeranja tela:

```
W = F * s
```

Sila se meri u Njutnima, a pomak u metrima, što znači da se rad meri u Njutn-metrima (N*m). Ova jedinica je preimenovana u džul (J), tako da je `1 J = 1 N * m`.

## Primer: računanje rada

Računanje rada je prilično jednostavno. Evo funkcije koja vraća količinu obavljenog rada, obzirom na datu silu, trenje i pomak:

```java
float calculateWork(float force, float friction, float displacement)
{
  float netForce = force - friction;
  float temp = displacement * netForce;
  return temp;
}
```

Ova funkcija će vratiti količinu obavljenog rada s obzirom na ugaonu silu:

```java
float calculateAngledWork(vector2D vect, float friction,float displacement)
{
  float temp;
  temp = cos(DegreesToRads(vect.y));
  float horizForce = vect.x * temp;
  float work = calculateWork(horizForce, friction, displacement);
  return work;
}
```

## Kinetička energija (energija kretanja)

Kinetička energija je količina energije koju predmet ima usled kretanja. Što se brže kreće, ima više kinetičke energije. To je slično impulsu, koji je masa pomnožena sa brzinom. 

Kinetička energija (skalarna veličina) je polovina mase puta brzina na kvadrat:

```
KE = 1/2m * v^2
```

Ova funkcija izračunava kinetičku energiju za datu masu u kilogramima i brzinu u metrima po sekundi:

```java
float calculateKineticEnergy(float mass, float speed)
{
  float KE;
  KE = (mass/2) * (pow(speed,2));
  return KE;
}
```

Teorema rada i energije kaže da je ukupan rad učinjen na objektu jednak promeni njegove kinetičke energije.

```
W = DKE = KE f – KE i
```

## Potencijalna (nagomilana) energija

**Potencijalna energija** je energija koju telo ima u vezi sa položajem ili oblikom, spremna da se pretvori u kinetičku energiju. Na primer, elastična potencijalna energija je povezana sa elastičnim silama koja deluju na elastičnost deformisanog tela. Energija navijene opruge pokreće dečje igračke. Kada se naduvan balon pusti on leti usled nagomilane energije u sabijenom vazduhu.

**Gravitaciona potencijalna energija** nastaje usled gravitacione sile koja deluje na masu tela. To je energija smeštena u predmetu usled njegove visine od tla. Ako podignete kamen i držite ga u vazduhu, on će imati gravitacionu potencijalnu energiju. Potencijalna energija je pohranjena u kamenu dok nije pušten. Isto tako, peščanik koristi potencijalnu energiju peska koji polako pada iz gornje pregrade u donju.

```
GPE = masa * gravitacija * visina
```

## Zakon očuvanja energije

![](/images/razvoj-igara/roler-koster.gif)

Roler koster na dnu svoje putanje dostiže maksimum energije kretanja. Kada krene naviše, energija kretanja se pretvara u gravitacionu nagomilanu energiju. Zbir kinetičke i potencijalne energije uvek ostaje stalan, ako ignorišemo gubitak usled trenja. Cela vožnja je vođena zakonom očuvanja energije. 

Zakon očuvanja energije kaže da energija ne može biti stvorena niti uništena. Može samo menjati oblik:

```
KE_i + PE_i = KE_f + PE_f
```

gde je:

- `KE_i`: početna kinetička energija
- `PE_i`: početna potencijalna energija
- `KE_f`: konačna kinetička energija
- `PE_f`: konačna potencijalna energija

Što se predmet brže kreće, to ima više kinetičke energije, a što je viši od tla, ima više potencijalne. Ukupna količina energije uvek ostaje ista.

U stvarnosti, deo energije se gubi u vidu toplote i zvuka, usled trenja i otpora vazduha. Na primer, kinetička energija ljuljaške se polako pretvara u toplotnu, usled trenja. Zato se ljuljaška usporava i zaustavlja.
