---
title: Imperativno vs. funkcionalno programiranje
layout: lekcija-c
permalink: /imperativno-vs-funkcionalno-programiranje
---

***Paradigma određuje način koncipiranja, ali i izvršavanja programa. Na primjer u objektnom programiranju, programer promatra program kao skup objekata koji međusobno komuniciraju, dok u funkcijskom programiranju program možemo promatrati kao niz evaluacija funkcija.***

![](https://image.slidesharecdn.com/overviewofprogrammingparadigms-131230222050-phpapp02/95/overview-of-programming-paradigms-5-638.jpg)

Različiti programski jezici podržavaju različite paradigme programiranja. Većina jezika podržava samo jednu paradigmu, a ima i jezika koji mogu podržati i više paradigmi npr. C++, Common Lisp, Python i Oz. Npr. C++ podržava elemente proceduralnog programiranja, objektnog programiranja i generičkog programiranja. U jeziku C++ moguće je napisati "čisto" proceduralni program, "čisto" objektni program ili program koji sadrži elemente obje paradigme.

## Imperativno (proceduralno) programiranje

**Imperativno programiranje opisuje računalni proces u smislu stanja programa i naredbi koje mijenjaju stanje, odnosno programi su niz naredbi koje računalo treba izvesti**. Hardverska implementacija većine računala je imperativna, tj. većina hardvera konstruirana je da izvršava strojni jezik napisan u imperativnom stilu. Na toj razini, stanje programa je definirano sadržajem memorije i naredbama strojnog jezika. Viši imperativni programski jezici upotrebljavaju varijable i kompleksnije naredbe, ali i oni slijede istu paradigmu. Pošto su temeljne ideje imperativnog programiranja "ugrađene" u hardver, većina programskih jezika je imperativna.

![Imperativno programiranje](https://cdn-images-1.medium.com/max/600/1*MTUk6ZzoBT6dLREixC6cKA.png)

Imperativni jezici postižu funkcionalnost dodjeljivanjem vrijednosti varijablama i ispitivanjem vrijednosti varijabli. Naredba dodjeljivanja zapravo izvodi operaciju na informaciji u memoriji. Viši jezici omogućuju izračunavanje složenih mješovitih izraza koji su kombinacija aritmetičkih, relacijskih i logičkih operatora, te poziva funkcija. Nakon izračunavanja, vrijednost izraza dodjeljuje se memorijskoj lokaciji. Petlje ponavljaju niz naredbi određeni broj puta ili do promjene uvjeta. Uvjetno grananje omogućuje izvođenje bloka naredbi samo pod određenim uvjetima. Naredbe bezuvjetnog grananja uključuju tzv. bezuvjetni skok i poziv procedure odnosno potprograma.

**Imperativno (proceduralno) programiranje najčešće se upotrebljava za rješavanje većine problema u inženjerskoj praksi.**

## Funkcionalno programiranje

**Funkcijsko programiranje vrsta je paradigme koja tretira računalni proces kao evaluaciju matematičkih funkcija.** Za razliku od imperativnog programiranja, funkcijsko programiranje naglašava evaluaciju funkcijskih izraza umjesto izvođenja niza naredbi.

Neki mehanizmi karakteristični za imperativno programiranje u funkcijskom programiranju ne postoje ili su riješeni na drugi način. Na primjer u striktnom funkcijskom programiranju nema eksplicitne alokacije memorije, niti eksplicitnog dodjeljivanja vrijednosti varijablama. Te operacije izvode se automatski prilikom poziva funkcije, što ima za posljedicu da se eliminira tzv. popratni efekt poziva funkcije (eng. *side effect*), karakterističan za imperativne jezike. Na taj način eliminiraju se i negativne posljedice popratnih efekata poziva funkcije koje postoje u imperativnim jezicima.

![Funkcionalno programiranje](https://cdn-images-1.medium.com/max/256/1*FqUSf96rhnS-38hDNvKxZQ.png)

**Za određeni skup parametara, rezultat poziva funkcije u funkcijskom jeziku biti će uvijek isti bez obzira gdje ili kada je poziv funkcije izvršen.** Na taj način osigurava se tzv. referencijalna transparentnost koja uvelike olakšava dokazivanje ispravnosti programa i omogućuje automatsko određivanje dijelova programa koji se mogu nezavisno izvršavati u paralelnim procesima. Ponavljanje dijelova programskog koda u smislu petlji ne postoji u funkcijskim jezicima, nego se takvi procesi rješavaju rekurzijom. Rekurzija može poprimiti mnoge oblike u funkcijskim jezicima i općenito se smatra da je efikasnija od mehanizama petlji u imperativnim jezicima. To je i jedan od razloga da i većina imperativnih jezika podržava rekurziju.

Predstavnici "čistih" funkcijskih jezika su Haskell i ML. Jezik LISP pripada funkcijskoj paradigmi, ali nije "čisti" funkcijski jezik, iako je najrašireniji u uporabi.

## Poređenje

Funkcijski jezici specificiraju ŠTO treba napraviti, ostavljajući detalje organizacije podataka i redoslijeda izvođenja interpreteru, dakle naglasak je na tome što će biti izračunato, a ne kako će biti izračunato. Imperativni jezici detaljno opisuju KAKO treba doći do rezultata, i to korištenjem postojeće arhitekture računala (hardvera).

<table>
  <thead>
    <tr>
      <th>IMPERATIVNO</th>
      <th>FUNKCIONALNO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Program: niz naredbi za von Neumann-ovu arhitekturu računala</td>
      <td>Program: skup definicija funkcija (neovisan o strojnom kodu računala)</td>
    </tr>
    <tr>
      <td>Izvršava se niz naredbi</td>
      <td>Izvršavanje evaluacijom izraza</td>
    </tr>
    <tr>
      <td>Iteracija</td>
      <td>Rekurzija</td>
    </tr>
    <tr>
      <td>Varijable se mijenjaju tijekom izvršavanja</td>
      <td>Varijablama se samo jednom pridružuje vrijednost</td>
    </tr>
    <tr>
      <td>Primjer:
<div class="language-pascal highlighter-rouge"><pre class="highlight"><code><span class="n">i</span> <span class="p">:=</span> <span class="m">0</span><span class="p">;</span>
<span class="n">sum</span> <span class="p">:=</span> <span class="m">0</span><span class="p">;</span>
<span class="k">while</span> <span class="p">(</span><span class="n">i</span> <span class="p">&lt;</span> <span class="n">n</span><span class="p">)</span> <span class="k">do</span>
  <span class="n">i</span> <span class="p">:=</span> <span class="n">i</span> <span class="p">+</span> <span class="m">1</span><span class="p">;</span>
  <span class="n">sum</span> <span class="p">:=</span> <span class="n">sum</span> <span class="p">+</span> <span class="n">i</span>
<span class="k">end</span><span class="p">;</span>
</code></pre>
</div></td>
      <td>Primjer:
<div class="language-pascal highlighter-rouge"><pre class="highlight"><code><span class="n">func</span> <span class="n">sum</span><span class="p">(</span><span class="n">n</span><span class="p">:</span><span class="n">int</span><span class="p">)</span> <span class="p">:</span> <span class="n">int</span><span class="p">;</span>
  <span class="k">if</span> <span class="n">n</span> <span class="p">=</span> <span class="m">0</span>
    <span class="k">then</span> <span class="m">0</span>
  <span class="k">else</span> <span class="n">n</span> <span class="p">+</span> <span class="n">sum</span><span class="p">(</span><span class="n">n</span><span class="p">-</span><span class="m">1</span><span class="p">)</span>
<span class="k">end</span><span class="p">;</span>
</code></pre>
</div></td>
    </tr>
  </tbody>
</table>


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi 2*, Zagreb, 2005.
