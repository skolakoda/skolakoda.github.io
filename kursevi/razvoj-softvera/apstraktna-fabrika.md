---
title: Apstraktna fabrika
layout: lekcija-razvoj
permalink: /apstraktna-fabrika
image: /images/koncepti/oop/Abstract-Factory.webp
---

![]({{page.image}})

**Apstraktna fabrika (*abstract factory*) je tvorbeni obrazac koji omogućava kreiranje porodica srodnih objekata.** Apstraktna fabrika kreira različite konkretne fabrike, koje potom kreiraju specifične objekte.

Apstraktna fabrika definiše interfejs za stvaranje objekata, dok konkretne fabrike implementiraju funkcionalnost za stvaranje specifičnih tipova.

## Primer: struktura obrasca

Ovaj obrazac omogućava dodavanje novih tipova proizvoda bez modifikovanja postojećeg koda:

```csharp
// apstraktna fabrika
public interface IProductFactory
{
    IProduct CreateProduct();
}

// apstraktni proizvod
public interface IProduct
{
    void Use();
}

// konkretna fabrika
public class ConcreteProductFactory : IProductFactory
{
    public IProduct CreateProduct()
    {
        return new ConcreteProduct();
    }
}

// konkretni proizvod
public class ConcreteProduct : IProduct
{
    public void Use()
    {
        Console.WriteLine("Koristi konkretan proizvod");
    }
}
```

## Primer: fabrika računara

```csharp
// apstraktna fabrika
public interface IComputerFactory
{
    IComputer CreateComputer();
}

// apstraktni računar
public interface IComputer
{
    void Assemble();
}

// konkretna fabrika za laptop
public class LaptopFactory : IComputerFactory
{
    public IComputer CreateComputer()
    {
        return new Laptop();
    }
}

// konkretna fabrika za desktop
public class DesktopFactory : IComputerFactory
{
    public IComputer CreateComputer()
    {
        return new Desktop();
    }
}

// konkretan računar: laptop
public class Laptop : IComputer
{
    public void Assemble()
    {
        Console.WriteLine("Sklapam laptop");
    }
}

// konkretan računar: desktop
public class Desktop : IComputer
{
    public void Assemble()
    {
        Console.WriteLine("Sklapam desktop");
    }
}
```

## Literatura

- The Gang of Four, *Design Patterns: Elements of Reusable Object-Oriented Software*, 1994.
- Carl-Hugo Marcotte, *Architecting ASP.NET Core Applications*, 2024.