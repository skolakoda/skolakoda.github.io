---
title: Softverski anti-obrasci
layout: lekcija-principi
permalink: /anti-obrasci
image: /images/koncepti/spaghetti-code.jpg
---

![]({{page.image}})

> Ako je debagovanje proces uklanjanja bagova, onda programiranje mora biti proces njihovog umetanja.
>
> -- <cite>Edsger W. Dijkstra</cite>

**Anti-obrazac ili anti-šablon (*anti-pattern*) je dokazano loša tehnika ili arhitektonska praksa koje gotovo izvesno stvara probleme u razvoju softvera.** Anti-obrazac je suprotan obrascu dizajna. 

Anti-obrazac može delovati kao rešenje za određeni problem, ali nanosi više štete nego koristi jer usporava razvoj, otežava održavanje, povećava složenost i uzrokuje druge probleme u sistemu.

Termin *anti-pattern* je skovao Andrew Koenig 1995. godine, koji ga je opisao na sledeći način: "*Anti-obrazac je isto kao obrazac, samo što umesto rešenja daje nešto što površno izgleda kao rešenje, ali to nije*."

Prepoznavanje anti-obrazaca je od suštinskog značaja za razvoj softvera, kao i poznavanje obrazaca. Indikator mogućeg problema u kodu naziva se **kodni zapah** (*code smell*).

## Uzroci javljanja

Anti-obrasci se često javljaju zbog neiskustva, brzopletosti ili nedostatka razumevanja posledica određenih odluka u razvoju softvera. Programeri nekad i svesno biraju lakša i privremena rešenja da bi ubrzali isporuku koda. Ona imaju tendenciju da postanu trajna i akumuliraju tehnički dug.

Neki antiobrasci su počeli kao legitimni obrasci dizajna, a kasnije proglašeni anti-obrascima.

## Poznati anti-obrasci

Poznati programerski anti-obrasci uključuju:  

- **Špageti kod** – Nepregledan, slabo struktuiran kod sa zavisnostima na sve strane.  
- **Božanski objekat** ili **božanska klasa** obrađuje previše stvari. Tipično, služi kao centralni entitet koji mnoge klase nasleđuju ili koriste unutar aplikacije. To je klasa koja sve zna i upravlja svime u sistemu. S druge strane, to je takođe klasa koju niko ne želi da ažurira, jer pokvari aplikaciju svaki put kada je dodirne.
- **Zlatni čekić** – Prekomerna upotreba jednog alata ili tehnike za svaki problem.  
- **Copy-paste programiranje** – Dupliranje koda umesto pravljenja generičkih rešenja.  
- **Magični brojevi** – Brojevi u kodu bez objašnjenja šta znače.  
- **Jo-jo problem** (*yo-yo problem*) – Previše slojeva apstrakcije koji otežavaju razumevanje koda.  
- **Poltergeist** – Objekti koji postoje samo da bi prosledili podatke drugima.  
- **Tok lave** (*lava flow*) – Stari, beskoristan kod ostavljen u aplikaciji, koji niko ne sme da ukloni. - **Mrtav kod** – Kod koji se nikada ne izvršava, ali nije uklonjen.  
- **Kod za bacanje** (*throwaway code*) - privremeni kod napravljen kao pokazno rešenje ili prototip, bez brige o kvalitetu ili efikasnosti, s namerom da se kasnije zameni. Međutim, takav kod često postane trajan. Kod prototipa, cilj je da se dokaže koncept, ali često završi preopterećen dodacima za impresivnu demonstraciju. 
- **Samo neka radi** (*keeping it working*) je nastojanje da se projekat održava u funkcionalnom stanju, bez razmišljanja o dugoročnom održavanju i arhitekturi. Ovo se redovno događa kada je fokus na kratkoročnim popravkama i dodavanju novih funkcija, zanemarujući refaktorisanje i tehnički dug. To dovodi do težeg održavanja, sporijeg razvoja i gomilanja grešaka u aplikaciji.

Svaki od anti-obrazaca komplikuje održavanje i čitanje koda, pa ih treba izbegavati.

## Velika lopta od blata

![](/images/koncepti/big-ball-of-mud.webp)

> Gradimo naše računarske sisteme kao što gradimo naše gradove: tokom vremena, bez plana, na vrhu ruševina.
>
> -- <cite>Ellen Ullman</cite>

**Velika lopta od blata** (*big ball of mud*) je arhitektonski anti-obrazac u kojem je softverski sistem neorganizovan, haotičan i bez jasne arhitekture. Ovaj antiobrazac odlikuju:  

- Loša modularnost i razdvajanje odgovornosti. 
- Isprepletene zavisnosti između delova koda. 
- Nepoštovanje osnovnih dizajnerskih principa.  

Razlozi nastanka velike blatnjave lopte u softveru su stihijski razvoj bez planiranja. Posledice uključuju otežano održavanje, produženo vreme za ispravljanje grešaka i dodavanje novih funkcionalnosti.

## Literatura

- Jeff Atwood, [*The Big Ball of Mud and Other Architectural Disasters*](https://blog.codinghorror.com/the-big-ball-of-mud-and-other-architectural-disasters/)
- Bruce M. Van Horn II, *Real-World Implementation of C# Design Patterns*, 2022
- Addy Osmani, *Learning Javascript Design Patterns*, 2023.
- Carl-Hugo Marcotte, *Architecting ASP.NET Core Applications*, 2024.