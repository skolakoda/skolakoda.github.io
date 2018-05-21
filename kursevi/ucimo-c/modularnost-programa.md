---
title: Modularnost programa
layout: lekcija-c
permalink: /modularnost-programa
---

**Veliki program je teško ili nemoguće razmatrati ako nije podeljen na celine.** Podela programa na celine (na primer, datoteke i funkcije) neophodna je za razumevanje programa i nametnula se veoma rano u istoriji programiranja. Svi savremeni programski jezici su dizajnirani tako da je podela na manje celine ne samo moguća već tipičan način podele određuje sam stil programiranja (na primer, u objektno orijentisanim jezicima neki podaci i metode za njihovu obradu se grupišu u takozvane klase). Podela programa na module treba da omogući:

***Razumljivost:*** podela programa na celine popravlja njegovu čitljivost i omogućava onome ko piše i onome ko čita program da se usredsredi na ključna pitanja jednog modula, zanemarujući u tom trenutku i iz te perspektive sporedne funkcionalnosti podržane drugim modulima.

***Upotrebljivost:*** ukoliko je kôd kvalitetno podeljen na celine, pojedine celine biće moguće upotrebiti u nekom drugom kontekstu. Na primer, proveravanje da li neki trinaestocifreni kôd predstavlja mogući JMBG (jedinstveni matični broj građana) može se izdvojiti u zasebnu funkciju koja je onda upotrebljiva u različitim programima.

Obično se program ne deli u funkcije i onda u datoteke tek onda kada je kompletno završen. Naprotiv, podela programa u dodatke i funkcije vrši se u fazi pisanja programa i predstavlja jedan od njegovih najvažnijih aspekata.

## Modularnost i podela na funkcije

Za većinu jezika osnovna je funkcionalna dekompozicija ili podela na funkcije. U principu, funkcije treba da obavljaju samo jedan zadatak i da budu kratke. Tekst jedne funkcije treba da staje na jedan ili dva ekrana (tj. da ima manje od pedesetak redova), radi dobre preglednosti. Duge funkcije poželjno je podeliti na manje, na primer, one koje obrađuju specijalne slučajeve. Ukoliko je brzina izvršavanja kritična, kompilatoru se može naložiti da inlajnuje funkcije (da prilikom kompilacije umetne kôd kratkih funkcija na pozicije gde su pozvane).

Da li funkcija ima razuman obim često govori broj lokalnih promenljivih: ako ih ima više od, na primer, 10, verovatno je funkciju poželjno podeliti na nekoliko manjih. Slično važi i za broj parametara funkcije.

## Modularnost i podela na datoteke (fajlove)

Veliki programi sastoje se od velikog broja datoteka koje bi trebalo da budu organizovane na razuman način u direktorijume. Jednu datoteku treba da čine definicije funkcija koje su međusobno povezane i predstavljaju nekakvu celinu.

Organizacija u datoteke treba da bude takva da izoluje delove koji se trenutno menjaju i razdvoji ih od delova koji su stabilne, zaokružene celine. U fazi razvoja, često je preporučljivo čak i napraviti privremeni deo organizacije kako bi modul koji se trenutno razvija bio izolovan i razdvojen od drugih delova.

Program treba deliti na datoteke imajući u vidu delom suprotstavljene zahteve. Jedna datoteka ne treba da bude duža od nekoliko, na primer - dve ili tri, stotine linija. Ukoliko logička struktura programa nameće dužu datoteku, onda vredi preispitati postojeću organizaciju podataka i funkcija. S druge strane, datoteke ne treba da budu prekratke i treba da predstavljaju zaokružene celine. Preterana usitnjenost (u preveliki broj datoteka) može da oteža upravljanje programom i njegovu razumljivost.

Rad sa programima organizovanih u više datoteka olakšavaju integrisana razvojna okruženja.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
