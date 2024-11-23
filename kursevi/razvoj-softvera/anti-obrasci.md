---
title: Softverski anti-obrasci
layout: lekcija-razvoj
permalink: /anti-obrasci
image: /images/koncepti/spaghetti-code.jpg
---

![]({{page.image}})

**Anti-obrazac ili anti-šablon (*anti-pattern*) je rešenje koje na prvi pogled deluje kao efikasno ili uobičajeno za određeni problem, ali u praksi dovodi do loših rezultata, otežava održavanje, povećava složenost ili uzrokuje druge probleme u sistemu.** 

Anti-obrasci se često javljaju zbog neiskustva, brzopletosti ili nedostatka razumevanja posledica određenih odluka u razvoju softvera. Programeri nekad i svesno biraju lakša i privremena rešenja da bi ubrzali isporuku koda. Ona imaju tendenciju da postanu trajna i akumuliraju tehnički dug.

Termin *anti-pattern* je skovao Andrew Koenig 1995. godine. On je opisao anti-obrase na sledeći način:

> Anti-obrazac je isto kao obrazac, samo što umesto rešenja daje nešto što površno izgleda kao rešenje, ali to nije.

Prepoznavanje anti-obrazaca je od suštinskog značaja za razvoj softvera, isto kao i poznavanje obrazaca. 

## Poznati anti-obrasci

Poznati programerski anti-obrasci uključuju:  

- **Špageti kod** (*spaghetti code*) – Nepregledan, slabo struktuiran kod sa zavisnostima na sve strane.  
- **Božanski objekat** (*God object*) – Jedan objekat preuzima previše odgovornosti, što otežava održavanje.  
- **Zlatni čekić** (*golden hammer*) – Prekomerna upotreba jednog alata ili tehnike za svaki problem.  
- **Copy-paste programiranje** – Dupliranje koda umesto pravljenja generičkih rešenja.  
- **Magični brojevi** (*magic numbers*) – Brojevi u kodu bez objašnjenja šta znače.  
- **Jo-jo problem** (*yo-yo problem*) – Previše slojeva apstrakcije koji otežavaju razumevanje koda.  
- **Poltergeist** – Objekti koji postoje samo da bi prosledili podatke drugima.  
- **Tok lave** (*lava flow*) – Stari, beskoristan kod ostavljen u aplikaciji, koji niko ne sme da ukloni. - **Mrtav kod** (*dead code*) – Kod koji se nikada ne izvršava, ali nije uklonjen.  
- **Kod za bacanje** (*throwaway code*) - privremeni kod napravljen kao pokazno rešenje ili prototip, bez brige o kvalitetu ili efikasnosti, s namerom da se kasnije zameni. Međutim, takav kod često postane trajan. Kod prototipa, cilj je da se dokaže koncept, ali često završi preopterećen dodacima za impresivnu demonstraciju. 
- **Samo neka radi** (*keeping it working*) je nastojanje da se projekat održava u funkcionalnom stanju, bez razmišljanja o dugoročnom održavanju i arhitekturi. Ovo se redovno događa kada je fokus na kratkoročnim popravkama i dodavanju novih funkcija, zanemarujući refaktorisanje i tehnički dug. To dovodi do težeg održavanja, sporijeg razvoja i gomilanja grešaka u aplikaciji.

Svaki od anti-obrazaca komplikuje održavanje i čitanje koda, pa ih treba izbegavati.

## Velika lopta od blata

![](/images/koncepti/big-ball-of-mud.webp)

**Velika lopta od blata** (*big ball of mud*) je arhitektonski anti-obrazac u kojem je softverski sistem neorganizovan, haotičan i bez jasne arhitekture. Ovaj antiobrazac odlikuju:  

- Loša modularnost i razdvajanje odgovornosti. 
- Isprepletene zavisnosti između delova koda. 
- Nepoštovanje osnovnih dizajnerskih principa.  

Razlozi nastanka velike blatnjave lopte u softveru su stihijski razvoj bez planiranja. Posledice uključuju otežano održavanje, produženo vreme za ispravljanje grešaka i dodavanje novih funkcionalnosti.

## Literatura

- Jeff Atwood, [*The Big Ball of Mud and Other Architectural Disasters*](https://blog.codinghorror.com/the-big-ball-of-mud-and-other-architectural-disasters/)
- Bruce M. Van Horn II, *Real-World Implementation of C# Design Patterns*, 2022
- Addy Osmani, *Learning Javascript Design Patterns*, 2023.