```js
const obecaj = () => new Promise(vrati => setTimeout(() => vrati('ispunjeno'), 800))

const obecajOpet = async () => 'kazem opet: ' + await obecaj()

obecaj().then(x => console.log(x))
obecajOpet().then(x => console.log(x))
```
