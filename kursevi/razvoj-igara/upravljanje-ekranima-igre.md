---
title: Upravljanje ekranima igre
layout: lekcija-razvoj-igara
permalink: /upravljanje-ekranima-igre
---

![upravljanje-ekranima](/images/razvoj-igara/glavni-meni.avif)

**Gotovo svaka igra ima više ekrana, pa je pametno upravljati njima pomoću API-ja višeg nivoa. To je kao programiranje više aplikacija za isti prozor, pri čemu lako možemo menjati ekran.**

Takođe, mnoge igre koriste različite ekrane i za biranje likova ili misija.  

Ako ekrani igre ne zauzimaju puno memorije, možemo ih učitati unapred. Ili možemo prikazati mali prelazni ekran kako bi igračima dali nešto dok čekaju.

Upravljanje ekranima igre je donekle slično frontend rutiranju web aplikacija.

## Primer u C++

![upravljanje-ekranima](/images/razvoj-igara/upravljanje-ekranima.png)

`IScreenElement` definiše standardni interfejs za bilo koji ekran igre. Klase koje ga nasleđuju moraju implementirati sve funkcije kako bi pružile specifično ponašanje. Ovo olakšava upravljanje više ekrana.

```c++
class IScreenElement
{
  public:
  virtual HRESULT VOnRestore() = 0;
  virtual HRESULT VOnRender(double fTime, float fElapsedTime) = 0;
  virtual void VOnUpdate(int deltaMilliseconds) = 0;
  virtual int VGetZOrder() const = 0;
  virtual void VSetZOrder(int const zOrder) = 0;
  virtual bool VIsVisible() const = 0;
  virtual void VSetVisible(bool visible) = 0;
  virtual LRESULT CALLBACK VOnMsgProc( AppMsg msg )=0;
  virtual  ̃ IScreenElement() { };
  virtual bool const operator <(IScreenElement const &other)
  { return VGetZOrder() < other.VGetZOrder(); }
};
```
