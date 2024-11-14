---
title: Model-View-ViewModel
layout: lekcija-razvoj
permalink: /mvvm
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MVVMPattern.svg/640px-MVVMPattern.svg.png)

**Model-View-ViewModel (MVVM) je arhitektonski obrazac koji služi za organizaciju koda u aplikacijama, posebno onim sa složenim korisničkim interfejsom.** Predstavlja varijaciju starije MVC arhitekture.

MVVM arhitektura olakšava razdvajanje korisničkog interfejsa od poslovnog modela, čime se omogućuje nezavisan razvoj delova aplikacije. MVVM arhitektonski obrazac su kreirali arhitekti Microsofta kako bi pojednostavili programiranje korisničkog interfejsa zasnovanog na događajima. Ovaj obrazac je uključen u Windows Presentation Foundation (WPF). MVVM je varijacija prezentacionog modela Martina Faulera. 

*Model–view–viewmodel* se takođe naziva i *model–view–binder*. MVVM se koristi u tehnologijama kao što su WPF, Xamarin, i Angular.

## Arhitektura

Osnovne komponente arhitekture *model - view - view model* su:
- **Model** predstavlja strukturu podataka i poslovnu logiku aplikacije. On je odgovoran za pristup podacima, njihovu obradu i pravila koja se primenjuju na te podatke. Model ne zna ništa o korisničkom interfejsu ili načinu na koji se podaci prikazuju.
- **Prikaz (*View*)** je korisnički interfejs aplikacije. On prikazuje reprezentaciju modela korisniku i prima korisnikovu interakciju (klikovi mišem, unos putem tastature, dodirivanje ekrana itd.). Prikaz se povezuje sa *ViewModel*-om putem *data binding*-a. Prikaz je obično implementiran u deklarativnim jezicima kao što su XAML (u Windows Presentation Foundation-u) ili HTML (u web aplikacijama). 
- **Model prikaza (*ViewModel*)** je apstrakcija prikaza koja izlaže javna svojstva i komande. Prikazni model je odgovoran za konvertovanje podataka iz modela tako da se oni mogu lako prikazati. U objektno orijentisanom programiranju, prikazni model možemo nazvati objektom za prenos podataka (DTO). Prikazni model predstavlja stanje podataka u modelu i upravlja gotovo celokupnom logikom prikaza. 

Umesto kontrolera u MVC obrascu, MVVM koristi *binder*, koji automatski vezuje prikaz za pripadajuća svojstva u modelu prikaza. 
