---
title: Matrica skaliranja
layout: lekcija-razvoj-igara
permalink: /matrica-skaliranja
---

![](/images/razvoj-igara/scaling-2D.png)

**Matrica skaliranja služi za promenu veličine predmeta ili čitavog prostora, povećanjem ili smanjenjem njegovih dimenzija.**

## 2D matrica skaliranja

Potrebno je uneti koeficijent skaliranja za svaku osu:

```
kx 0
0  ky
```

Na primer, skaliranje koeficijentom 3 po obe ose:

```
3 0
0 3
```

### Stiskanje ili neujednačeno skaliranje

<!-- ![](/images/razvoj-igara/squeeze.png) -->

Stiskanje (*squeeze*) je neujednačeno skaliranje po osama. Na primer:

```
3  0
0  2
```

### Istezanje

Istezanje (*stretching*) je skaliranje samo jedne ose. Matrica za istezanje koeficijentom `k` duž x ose:

```
k 0
0 1
```

Matrica za istezanje koeficijentom `k` duž y ose:

```
1 0
0 k
```

## 3D matrica skaliranja

```
kx 0  0
0  ky 0
0  0  kz
```

Homogeni zapis:

```
kx   0   0   0  
0    ky  0   0  
0    0   kz  0  
0    0   0   1
```

Homogeni zapis proširuje matricu na 4x4 i omogućava kombinovanje različitih vrsta transformacija, dok klasična 3x3 matrica ne može direktno obuhvatiti translaciju ili druge transformacije.