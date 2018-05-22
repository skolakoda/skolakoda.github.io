---
title: Zdravo C++
layout: lekcija-c
permalink: /zdravo-cpp
---

Program Zdravo Svete u programskom jeziku C++ je veoma sličan programu [Zdravo Svete](/zdravo-c) u programskom jeziku C.

## Zdravo Svete

{:.ulaz}
```cpp
#include <iostream>
using namespace std;

int main(){
    cout << "Zdravo C++!" << endl;
    return 0;
}
```

## Objašnjenje

Čak i ovako jednostavan program ima dosta delova koje treba objasniti.

```cpp
#include <iostream>
```

Program zahtjeva od prevoditelja da u program uključi biblioteku `iostream`, standardnu ulazno/izlaznu biblioteku koja omogućuje ispis na ekranu. Napomena: `#include` nije naredba jezika nego se radi o pretprocesorskoj naredbi.

```cpp
using namespace std;
```

Svi elementi standardne C++ biblioteke su deklarirani u ovome što piše `namespace` sa imenom `std`.

```cpp
int main ()
```

Svaki program mora imati jednu `main` funkciju. Sav kod unutar main zagrada se izvršava. `int` pretstavlja *integer* (cijeli broj) što govori da će program pri završetku izvođenja programa vratiti cijeli broj.

```cpp
cout << "Hello World";
```

Ovo ispisuje Hello World! na ekran. `cout` pretstavlja standardni ispisni tok. Možemo taj red napisati i ovako:

```cpp
cout << "Hello World" << endl;
```

`endl` pretstavlja *End Line* (kraj linije) odnosno ispis u novi red. Tako bi naredna rečenica bila u redu ispod.

```cpp
return 0;
```

Tom naredbom glavni program javlja operacijskom sustavu da je program uspješno završen. 


Izvor: [Uvod u C++ programiranje ](http://www.tutorijali.net/cpp/uvod)