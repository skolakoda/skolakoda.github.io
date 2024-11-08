---
title: Princip podele interfejsa
layout: lekcija-razvoj
permalink: /princip-podele-interfejsa
---

**Princip podele interfejsa** (*Interface segregation principle*) kaže da klase ne treba primoravati da implementiraju metode koje im nisu potrebne. Umesto glomaznog interfejsa sa mnogo metoda treba praviti manje interfejse, relevantne za različite klase.

## Primer

Pretpostavimo da imamo veliki interfejs koji obuhvata različite vrste uređaja:

```cs
public interface IDevice {
    void TurnOn();
    void TurnOff();
    void PrintDocument();
    void ScanDocument();
}

public class Printer : IDevice {
    public void TurnOn() {
        Console.WriteLine("Printer is on");
    }

    public void TurnOff() {
        Console.WriteLine("Printer is off");
    }

    public void PrintDocument() {
        Console.WriteLine("Printing document...");
    }

    public void ScanDocument() {
        // Nema smisla za Printer, ali mora da implementira
        throw new NotImplementedException();
    }
}

public class Scanner : IDevice {
    public void TurnOn() {
        Console.WriteLine("Scanner is on");
    }

    public void TurnOff() {
        Console.WriteLine("Scanner is off");
    }

    public void PrintDocument() {
        // Nema smisla za Scanner, ali mora da implementira
        throw new NotImplementedException();
    }

    public void ScanDocument() {
        Console.WriteLine("Scanning document...");
    }
}
```

U ovom primeru, `Printer` i `Scanner` su primorani da implementiraju metode koje nisu relevantne za njih.

### Rešenje podelom interfejsa

```cs
public interface IPrintable {
    void PrintDocument();
}

public interface IScannable {
    void ScanDocument();
}

public interface IDevice {
    void TurnOn();
    void TurnOff();
}

public class Printer : IDevice, IPrintable {
    public void TurnOn() {
        Console.WriteLine("Printer is on");
    }

    public void TurnOff() {
        Console.WriteLine("Printer is off");
    }

    public void PrintDocument() {
        Console.WriteLine("Printing document...");
    }
}

public class Scanner : IDevice, IScannable {
    public void TurnOn() {
        Console.WriteLine("Scanner is on");
    }

    public void TurnOff() {
        Console.WriteLine("Scanner is off");
    }

    public void ScanDocument() {
        Console.WriteLine("Scanning document...");
    }
}
```

Sada Printer implementira interfejse `IDevice` i `IPrintable`, dok Scanner implementira `IDevice` i `IScannable`. Svaka klasa implementira samo metode koje su relevantne za njen specifičan tip.

U jezicima koji ne podržavaju višestruko nasleđivanje možemo koristiti kompoziciju. Kompozicija znači da klasa sadrži instancu drugih klasa umesto da nasleđuje njihove funkcionalnosti. 


