---
title: Model–View–ViewModel
layout: lekcija-razvoj
permalink: /mvvm
image: /images/koncepti/Model-View-ViewModel.jpg
---

![]({{page.image}})

**Model–prikaz–model prikaza (*model–view–viewmodel*, skraćeno MVVM) je arhitektonski obrazac koji služi za organizaciju koda u aplikacijama sa bogatim korisničkim interfejsom.** 

*Model–View–ViewModel* je nastao evolucijom starije [MVC arhitekture](/mvc), kako bi se omogućio lakši razvoj aplikacija sa interaktivnim korisničkim interfejsom. MVVM arhitektura rešava neke nedostatke MVC-a zahvaljujući većoj modularnosti, boljoj razdvojenosti funkcija i testabilnosti.

*Model–prikaz–prikazni model* su kreirali arhitekti Microsofta, kako bi pojednostavili programiranje korisničkog interfejsa zasnovanog na događajima. Ovaj obrazac je uključen u Windows Presentation Foundation (WPF). MVVM je varijacija prezentacionog modela Martina Faulera. 

> Model prikaza se može smatrati specijalizovanim kontrolerom koji deluje kao pretvarač podataka. On menja informacije modela u informacije prikaza, prosleđujući komande iz prikaza u model.
>
> -- <cite>Addy Osmani</cite>

MVVM se koristi u tehnologijama kao što su WPF, Xamarin, i Angular. *Model–view–viewmodel* se takođe naziva i *model–view–binder*. 

## Komponente

Osnovne komponente *model–view–view model* arhitekture su:

- **Model** predstavlja strukturu podataka i poslovnu logiku aplikacije. On je odgovoran za pristup podacima, njihovu obradu i pravila koja se primenjuju na te podatke. Model ne zna ništa o korisničkom interfejsu ili načinu na koji se podaci prikazuju.
- **Prikaz (*View*)** je korisnički interfejs aplikacije. On prikazuje reprezentaciju modela korisniku i prima korisnikovu interakciju (klikovi mišem, unos putem tastature, dodirivanje ekrana itd.). Prikaz se povezuje sa *ViewModel*-om putem *data binding*-a. Prikaz je obično implementiran u deklarativnim jezicima kao što su XAML (u Windows Presentation Foundation-u) ili HTML (u web aplikacijama). 
- **Model prikaza (*ViewModel*)** je komponenta koja povezuje model i prikaz. Koristi se za obradu podataka, izvršavanje logike aplikacije i ažuriranje prikaza. Prikazni model je odgovoran za konvertovanje podataka iz modela tako da se oni mogu prikazati. U objektno orijentisanom programiranju, prikazni model možemo nazvati i objektom za prenos podataka (DTO). Prikazni model predstavlja stanje podataka u modelu i upravlja gotovo celokupnom logikom prikaza. 

Umesto kontrolera u MVC obrascu, MVVM koristi *binder*, koji automatski vezuje prikaz za pripadajuća svojstva u modelu prikaza. 


## Literatura

- Addy Osmani, *Learning Javascript Design Patterns*, 2023.
