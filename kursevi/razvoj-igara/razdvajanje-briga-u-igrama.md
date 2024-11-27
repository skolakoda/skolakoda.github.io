---
title: Razdvajanje briga u igrama
layout: lekcija-razvoj-igara
permalink: /razdvajanje-briga-u-igrama
---

**Razdvajanje briga je jedan od osnovnih principa softverskog inženjerstva koji se primenjuje i u igrama. Suština je da svaka klasa ima svoju nadležnost.**

`Svet` ne treba da crta sebe, `Renderer` treba da crta `Svet`. `Igrač` ne treba da crta sebe, `Renderer` treba da crta `Igrača` u odnosu na `Svet`. 

## Primer podele nadležnosti

Jedan primer raspodele nadležnosti u razvoju igara. Nazivi klasa i implementacija naravno mogu varirati.

### Crtanje objekata i sveta (`Renderer` klasa)

Obično imamo `Renderer` klasu koja crta objekte. Ona jednostavno uzima objekat i crta ga na ekranu. Može imati metode poput `drawSprite(sprite)`, `drawLine(..)`, `drawModel(model)`, itd. Takođe može koristiti bilo koji API ispod, pa možemo imati jedan renderer koji koristi WebGL, a drugi koji koristi Canvas. Ako želimo da prenesemo igru na drugu platformu, jednostavno napišemo novi renderer i koristimo njega.


`Renderer` crta svet tako što prođe kroz stablo scene i nacrta svaki `SceneNode` na odgovarajućem mestu.

### Pomeranje objekata (`SceneNode` klasa)

U većini *game engine*-a, `Scena` je graf (stablo) komponenti. Svaki objekat u sceni je čvor u stablu. Svaki objekat je vezan za nešto što nazivamo `SceneNode`. `SceneNode` je kontejner za mesh objekte, sa svim transformacijama (pozicija, rotacija, skaliranje) objekta (obično u odnosu na drugi `SceneNode` klasa).

### Upravljanje objektima (`SceneManager` klasa)

`SceneManager` upravlja `SceneNode`-ovima. Ova klasa kreira i prati svaki `SceneNode` u našoj sceni. Možemo je pitati za određeni `SceneNode` (obično identifikovan imenom, kao što je "Player" ili "Table") ili za listu svih čvorova.

### Detekcija kolizije

Obično možemo upitati `Scenu` koji objekat se nalazi na određenoj tački, ili koji objekat seče neki zrak (*ray intersect*). Tada možemo odlučiti da premestimo igrača na novu poziciju ili da ga ne premestimo. Ove upite treba da obrađuju posebne klase, poput `CollisionDetector` klase, a `SceneManager` samo kreira i čuva čvorove.