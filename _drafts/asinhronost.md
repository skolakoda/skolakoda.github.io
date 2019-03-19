```js
console.log(1)

fetch('https://baza-filmova.herokuapp.com/filmovi/')
  .then(res => res.json())
  .then(data => {
    console.log(3)
  })

console.log(2)
```
