---
title: Klasa Scena
layout: lekcija-razvoj-igara
permalink: /klasa-scena
---

**U razvoju igara, klasa Scena upravlja hijerarhijom čvorova. Ona služi kao ulazna tačka za ažuriranje, renderovanje i dodavanje novih čvorova hijerarhiji scene.**

## Predmet igre

Predmet igre (`GameObject`, `Actor` ili `Entity`) predstavlja jedan entitet u svetu igre. Predmetu treba proslediti je li statičan ili dinamičan, npr. je li nepokretan zid ili kutija koja reaguje na fiziku.

## Scena kao graf

Graf scene je dinamička struktura podataka, slična višestrukom stablu. Svaki čvor predstavlja objekat u svetu igre ili možda instrukciju rendereru. Svaki čvor može imati nula ili više podčvorova.

**Graf scene se prolazi u svakom kadru da bi se nacrtao vidljivi svet.**

### Transformacione matrice

U 3D sceni, transformacije objekta (translacija, rotacija, skaliranje) predstavljamo matricama. Svaki objekat ima svoju transformacionu matricu, koja opisuje položaj i orijentaciju u odnosu na roditelja. Kada objekti imaju hijerarhiju, njihove transformacije se množe da bismo izračunali globalnu transformaciju objekta.

Na primer, imamo brod sa putnicima. Kada se brod kreće, putnici se kreću zajedno sa njim, ali njihov položaj i orijentacija ostaju isti u odnosu na brod. Da bi izračunali apsolutnu poziciju putnika u prostoru, množimo njegove matrice sa matricom broda:

```
matrica_broda = translacija_broda * rotacija_broda
matrica_putnika = matrica_broda * translacija_putnika * rotacija_putnika
```

Redosled množenja je bitan:

```
matrica_apsolutna = matrica_roditelj * matrica_dete
```

## Fizička scena

Klasa `Scena` deluje kao kontejner za sve što se tiče simulacije fizike. Ona sadrži sva čvrsta tela, pokreće provere sudara i poziva razrešenja.

### Primer

Primer scene koja upravlja fizičkom simulacijom u 2D prostoru:

```java
class Scene
{
private:
  float dt;
  LinkedList body_list;
  int body_count;
  Vec2 gravity;

public:
  void SetDT(real dt);
  float GetDT(void);

  Body *CreateBody(ShapeInterface *shape, BodyDef def);

  void AddBody(Body *body);     // dodaje telo u scenu i inicijalizuje ga (računa masu)
  void RemoveBody(Body *body);

  void Step(void);              // ažurira scenu za jedan vremenski korak

  LinkedList *GetBodyList(void);
  void QueryAABB(CallBackQuery cb, const AABB& aabb);
  void QueryPoint(CallBackQuery cb, const Point2& point);
};
```

Ideja je da se korisniku omogući da lako dodaje i uklanja čvrsta tela. 
* Struktura `BodyDef` sadrži sve informacije o čvrstom telu. 
* Funkcija `Step()` izvršava jednu rundu provera sudara, razrešenja i integracije. Poziva se iz glavne petlje. 
* Funkcija `QueryPoint` ili `QueryAABB` proverava koja objekti se zapravo sudaraju.
