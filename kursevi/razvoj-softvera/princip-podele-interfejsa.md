---
title: Princip podele interfejsa
layout: lekcija-razvoj
permalink: /princip-podele-interfejsa
---

Cilj **principa podele interfejsa** (*Interface segregation principle*) je dodeljivanje novog interfejsa grupama metoda koje imaju isti fokus, kako bi se izbeglo da klijent mora da implementira jedan veliki interfejs i veliki broj metoda koje mu nisu potrebne. Prednost ovog principa se ogleda u tome da klase koje žele da koriste iste interfejse, treba da implementiraju samo određen skup metoda.

## Primer

Da bi se demonstrirao principa podele interfejsa, biće kreirana mala aplikacija čiji je domen katalog proizvoda. Katalog proizvoda čine filmovi u obliku DVD ili Blu-Ray diskova. Za svaki podtip proizvoda postoji odgovarajuća klasa. Obe klase implementiraju `IProduct` interfejs kao što se može videti:


```cs
public interface IProduct
{
  decimal Price { get; set; }
  int WeightInKg { get; set; }
  int RunningTime { get; set; }
}

public class DVD : IProduct
{
  public decimal Price { get; set; }
  public int WeightInKg { get; set; }
  public int RunningTime { get; set; }
}

public class BluRayDisc : IProduct
{
  public decimal Price { get; set; }
  public int WeightInKg { get; set; }
  public int RunningTime { get; set; }
}
```

Sada ćemo u aplikaciju dodati novi tip proizvoda koji nije film. Dodajemo klasu `TShirt`. Pošto je i ona proizvod, mora da implementira `IProduct` interfejs. Problem sa tim što klasa `TShirt` implementira `IProduct` interfejs je u tome što svojstvo `RunningTime` nema nikavo značenje za majicu i ne bi trebao tu da se nalazi. Rešenje je u uočavanju razlika između proizvoda kao što su filmovi i majice i prebacivanje tih razlika u specifične interfejse.

Dodaćemo novi interfejs `IMovie`:

```cs
public interface IMovie
{
  int RunningTime { get; set; }
}

public interface IProduct
{
  decimal Price { get; set; }
  int WeightInKg { get; set; }
}

public class DVD : IProduct, IMovie
{
  public decimal Price { get; set; }
  public int WeightInKg { get; set; }
  public int RunningTime { get; set; }
}

public class BluRayDisc : IProduct, IMovie
{
  public decimal Price { get; set; }
  public int WeightInKg { get; set; }
  public int RunningTime { get; set; }
}

public class TShirt : IProduct
{
  public decimal Price { get; set; }
  public int WeightInKg { get; set; }
}
```

Ovo je suština principa podele interfejsa. Razdvajanjem interfejsa, povećava se mogućnost ponovne upotrebe i razumevanja koda.


Izvor: Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
