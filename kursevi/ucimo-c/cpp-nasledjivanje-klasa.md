---
title: Nasleđivanje u programskom jeziku C++
layout: lekcija-c
permalink: /cpp-nasledjivanje-klasa
---

**Prilikom nasleđivanja, izvedena klasa (naslednica) preuzima sve osobine i metode roditeljske klase, nakon čega ih možemo redefinisati po potrebi.**

## Primer

Imamo osnovnu klasu Junak i izvedenu klasu Ork. U izvedenoj klasi je redefinisana metoda `zdravo`, tako da Ork sada ima drugačiji pozdrav:

{:.ulaz}
```cpp
#include <iostream>

class Junak {
  public:
    void zdravo() {
      std::cout << "Zdravo!" << std::endl;
    }
};

class Ork : public Junak {
  public:
    void zdravo() {
      std::cout << "Arghhh!" << std::endl;
    }
};

int main() {
  Junak igrac;
  igrac.zdravo();

  Ork neprijatelj;
  neprijatelj.zdravo();
}
```