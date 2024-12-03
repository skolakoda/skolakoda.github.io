---
title: Matrica inverzije
layout: lekcija-razvoj-igara
permalink: /matrica-inverzije
---

Matrica inverzije se koristi za poništavanje efekta određene transformacije, kao što je rotacija, skaliranje, translacija itd. Matrica koja poništava efekt originalne matrice **A** naziva se **A⁻¹** i zadovoljava:

**A * A⁻¹ = I**

Gde je **I** identična matrica.

Evo nekoliko primera matrica inverzije za osnovne transformacije:

### 1. Inverzija rotacije (2D):
Za rotaciju u 2D, rotaciona matrica je:

```
R(θ) = [cos(θ), -sin(θ)]
       [sin(θ), cos(θ)]
```

Inverzija rotacije je jednostavno rotacija u suprotnom smeru, što znači da se zamenjuju znakovi u matrici:

```
R⁻¹(θ) = [cos(θ), sin(θ)]
         [-sin(θ), cos(θ)]
```

### 2. Inverzija skaliranja (2D):
Za skaliranje u 2D, skalirajuća matrica je:

```
S(kx, ky) = [kx, 0]
            [0, ky]
```

Inverzija ove matrice je jednostavno recipročna vrednost skaliranja:

```
S⁻¹(kx, ky) = [1/kx, 0]
              [0, 1/ky]
```

### 3. Inverzija translacije (2D):
Za translaciju u 2D, translaciona matrica je:

```
T(dx, dy) = [1, 0, dx]
            [0, 1, dy]
            [0, 0, 1]
```

Inverzija translacije je translacija u suprotnom smeru:

```
T⁻¹(dx, dy) = [1, 0, -dx]
              [0, 1, -dy]
              [0, 0, 1]
```

### 4. Inverzija refleksije (2D):
Za refleksiju u 2D (npr. refleksija u odnosu na osu x), refleksiona matrica može izgledati ovako:

```
F = [1, 0]
    [0, -1]
```

Inverzija refleksije je ista matrica jer dvostruka refleksija daje originalnu poziciju, što znači da je **F⁻¹ = F**.

### 5. Inverzija 3D skaliranja:
Za 3D skaliranje, skalirajuća matrica je:

```
S(kx, ky, kz) = [kx, 0, 0]
                [0, ky, 0]
                [0, 0, kz]
```

Inverzija ove matrice je:

```
S⁻¹(kx, ky, kz) = [1/kx, 0, 0]
                  [0, 1/ky, 0]
                  [0, 0, 1/kz]
```

### Zakon inverzije:
Generalno, da bi se našla inverzna matrica za transformaciju, koristi se formula za inverziju matrica koja zavisi od dimenzionalnosti. Za matricu **A** dimenzije 2x2, inverzija se može izračunati pomoću sledeće formule:

```
A⁻¹ = 1/det(A) * [d, -b]
                 [-c, a]
```

Gde je **det(A)** determinanta matrice **A**, a **a**, **b**, **c**, i **d** su elementi matrice.

Za veće matrice (3x3 i više), proces je složeniji i zahteva korišćenje metoda kao što su Gauss-Jordan eliminacija ili korišćenje kofaktora i determinanti.