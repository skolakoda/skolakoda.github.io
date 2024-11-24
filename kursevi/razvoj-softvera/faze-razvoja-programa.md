---
title: Proces razvoja softvera
layout: lekcija-razvoj
permalink: /faze-razvoja-programa
---

> Postoje dva načina izgradnje softvera: Jedan je napraviti ga toliko prostim da očigledno nema nedostataka, a drugi je napraviti ga toliko komplikovanim da nema očiglednih nedostataka. Prva metoda je puno teža.
>
> -- <cite>Tony Hoare</cite>

***Proces razvoja softvera je vremenom evoluirao. U početku, softver je bio vrlo jednostavan i programeri su mogli da ga generišu direktnim pisanjem koda. Nije bilo nikakvog planiranja, već se na osnovu nekoliko odluka formirao sistem.***

Kasnije, kada su zahtevi postali brojniji, softver je mogao da razvija samo veći broj programera koji su činili razvojni tim. Da bi proizveli željeni proizvod, članovi razvojnog tima su bili upućeni na međusobnu saradnju. Zbog povećanja složenosti softvera, dodavanje novih funkcionalnosti je postajalo sve teže, kao i pronalaženje i otklanjanje grešaka. Vremenom se došlo do ideje da bi ovaj problem najlakše mogao da se prevaziđe uvođenjem metodologije razvoja.

## Faze razvoja softvera

![](/images/koncepti/faze-razvoja-softvera.jpg)

Razvoj softvera je podeljen u nekoliko faza:

- **analiza i definisanje zahteva**. U ovoj fazi razvojni tim, u saradnji sa kupcem i korisnicima, utvrđuje zahteve koje sistem treba da zadovolji. Pri analizi zahteva moraju se uzeti u obzir svi entiteti, aktivnosti i ograničenja koji postoje u sistemu. Posebna pažnja se mora posvetiti interakciji sistema sa okruženjem. Razultat ove faze je lista korisničkih zahteva.

- **projektovanje sistema**. U cilju ispunjenja zahteva definisanih u prvoj fazi, u ovoj fazi se generiše projekat sistema koji daje plan rešenja. Plan uključuje komponente i algoritme koji će biti korišćeni, kao i arhitekturu sistema.

- **projektovanje programa**. U ovoj fazi se definišu podprojekti pogodni za programsku realizaciju. Svaki podprojekat predstavlja jedan modul sa datom funkcionalnošću. Definišu se veze između modula i načini razmene podataka između njih.

- **izrada programa**. Ovo je faza direktne izrade softvera u kojoj programeri pišu programski kôd prema urađenom projektu.

- **testiranje programa**. Ova faza se bavi nalaženjem i ispravljanjem grešaka u sistemu. Nakon pisanja programa, najpre se testiraju individualni delovi kôda, tj. pojedinačni moduli, što se naziva jediničnim testiranjem. Zatim se vrši integraciono testiranje tokom koga se moduli povezuju u jednu celinu.
Na kraju sledi završno testiranje u kome se proverava da li sistem ispunjava postavljene zahteve korisnika.

- **isporuka sistema**. U ovoj fazi, sistem se isporučuje naručiocu, softver se instalira u radnom okruženju i obavlja se obuka neposrednih korisnika.

- **održavanje**. Ovo je dugotrajna faza u kojoj se ispravljaju greške u sistemu koje se javljaju nakon njegove isporuke. Takođe se radi i na daljem unapređenju pojedinih delova sistema u skladu sa zahtevima korisnika ili promenama u okruženju.

## Literatura

- Violeta Tomašević, *Razvoj aplikativnog softvera*, Beograd, 2012.
