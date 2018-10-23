---
title: AJAX pozivi
layout: lekcija-js
permalink: /ajax-pozivi
---

## HTTP zahtev

{:.ulaz}
```js
const http = new XMLHttpRequest()

http.open("GET", "https://api.lyrics.ovh/v1/shakira/waka-waka")
http.send()

http.onload = () => console.log(http.responseText)
```

## Fetch metoda

{:.ulaz}
```js
fetch('https://api.lyrics.ovh/v1/shakira/waka-waka')
  .then(response => response.json())
  .then(text => console.log(text))
```
