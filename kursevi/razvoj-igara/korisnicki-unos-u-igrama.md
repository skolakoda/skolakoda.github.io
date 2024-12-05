---
title: Upravljanje korisničkim unosom
layout: lekcija-razvoj-igara
permalink: /korisnicki-unos-u-igrama
---

**U razvoju igara, na input nadražaje ne odgovaramo odmah, već ih samo beležimo, da bismo kasnije odgovorili na njih. Tako kontrolišemo u kojoj će se fazi njihova obrada vršiti.** 

Ovo predstavlja bitnu razliku u odnosu na razvoj aplikacija, gde ulazni događaji okidaju funkcije odmah.

Korisničkim unosima u igri obično upravlja `InputManager` klasa.

## Primer

Prost primer input menadžera bio bi objekat koji beleži pritisnute tipke:

```js
const pressed = {}

window.addEventListener("keydown", event => {
  pressed[event.key] = true
})
```

Korisnički inputi se obično obrađuju na početku *game loop*-a:

```js
function mainLoop() {
  handleInput()
  update()
  render()
}
```

U `handleInput` fazi odgovaramo na zabeležene inpute. Primetite da ovde samo registrujemo da igrač hoće skakanje, ali ono još uvek nije izvršeno:

```js
function handleInput() {
  if (pressed['ArrowUp']) {
    player.jumping = true
    pressed['ArrowUp'] = false
  }
};
```

Nakon što smo registrovali i obradili korisnički unos, možemo ga upotrebiti u igri:

```js
function update() {
  if (player.jumping && player.canJump())
    player.jump()
}
```
