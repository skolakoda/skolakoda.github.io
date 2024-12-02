---
title: Perspektivna projekcija
layout: lekcija-razvoj-igara
permalink: /perspektivna-projekcija
---

<!-- ![](/images/razvoj-igara/perspektiva.gif) -->

<!-- ![perspektiva](/images/razvoj-igara/perspektiva.png) -->

![](/images/razvoj-igara/ViewFrustum.svg)

**3D svet se najbolje prikazuje projekcijom na 2D ravan uz očuvanje izgleda dubine. Što je predmet dalje od kamere, to izgleda manji na slici, slično kao što oči prirodno vide.**

Za razliku od paralelne projekcije, perspektivna projekcija se oslanja na koncept **fokalne tačke**.

Oblik 3D perspektivne projekcije se naziva **frustum**, odnosno piramida čiji je vrh odsečen pomoću ravni koja je paralelna njenoj osnovi.

## Matrica projekcije

Najjednostavnija perspektivna matrica:

```
[ 1  0  0  0
  0  1  0  0
  0  0  1  0
  0  0 -1  0 ]
```

## Računanje perspektive

Napravimo nekoliko pojednostavljujućih pretpostavki:

* Ravan projekcije je usklađena sa osama i okrenuta niz -Z osu (-Z je dalje).
* Tačka oka je fiksirana u ishodištu (0, 0, 0).
* Veličina ravni projekcije je [-1, 1]. Sve tačke koje se projektuju izvan ovog opsega neće biti prikazane.

Perspektivna projekcija suštinski pomera vrhove prema oku, na osnovu lokacije svakog vrha. Vrhovi koji su dalje u Z pomeraju se manje nego oni koji su bliži oku. Takođe, pomeranje zavisi od toga koliko su vrhovi udaljeni od centra ravni projekcije po X i Y osi.

### 2D projekcija

![](/images/razvoj-igara/PerspDiagram.svg)

Na slici imamo primer 2D projekcije tačke P na projekcijsku (zelenu) ravan.

- R je projektovana tačka. 
- ravan je na odstojanju Ez u odnosu na tačku oka, koja se nalazi u ishodištu.
- imamo dva slična pravougaona trougla: manji (E, R i Ez) i veći (E, P i Pz). 
- imamo poziciju oka i poziciju neprojektovane tačke P. 

Da bismo našli položaj R, koristimo formulu:

```
R = P * (Ez / Pz)
```

Ova formula se jednako primenjuje na 2D i 3D. Perspektivna projekcija je samo primena ove formule na svaki vrh.

## Transformacija perspektivne projekcije

Transformacija perspektivne projekcije zahteva da navedemo 4 parametra:

* Odnos širine i visine (*aspect ratio*) - odnos širine i visine pravougaone površine na koju projektujemo.
* Vertikalno vidno polje: vertikalni ugao kamere kroz koji gledamo svet.
* Položaj bliže Z ravni: omogućava da isečemo predmete previše blizu kamere.
* Položaj dalje Z ravni: omogućava da isečemo predmete previše udaljene od kamere.

Odnos širine i visine je neophodan jer koordinate predstavljamo u normalizovanom prostoru čija je širina jednaka visini.

Vertikalno vidno polje nam omogućava da zumiramo ili odzumiramo svet.

Na slici levo ugao je širi, što čini da predmet izgleda manji, dok je desno ugao uži, što čini da isti predmet deluje veći. Ovaj ugao utiče na položaj kamere.

![](/images/razvoj-igara/FOV.png)

## Primer u kodu

Implementacija perspektivna projekcije u kodu:

```cpp
void Pipeline::InitPerspectiveProj(Matrix4f& m) const>
{
    const float ar = m_persProj.Width / m_persProj.Height;
    const float zNear = m_persProj.zNear;
    const float zFar = m_persProj.zFar;
    const float zRange = zNear - zFar;
    const float tanHalfFOV = tanf(ToRadian(m_persProj.FOV / 2.0));

    m.m[0][0] = 1.0f / (tanHalfFOV * ar);
    m.m[0][1] = 0.0f;
    m.m[0][2] = 0.0f;
    m.m[0][3] = 0.0f;

    m.m[1][0] = 0.0f;
    m.m[1][1] = 1.0f / tanHalfFOV;
    m.m[1][2] = 0.0f;
    m.m[1][3] = 0.0f;

    m.m[2][0] = 0.0f;
    m.m[2][1] = 0.0f;
    m.m[2][2] = (-zNear - zFar) / zRange;
    m.m[2][3] = 2.0f * zFar * zNear / zRange;

    m.m[3][0] = 0.0f;
    m.m[3][1] = 0.0f;
    m.m[3][2] = 1.0f;
    m.m[3][3] = 0.0f;
}
```

## Literatura

- Etay Meiri, [*Perspective projection*](https://ogldev.org/www/tutorial12/tutorial12.html)