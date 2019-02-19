Do sada sam naišao na nekoliko opasnih slučajeva, koji su mi prilično zagorčali život (teški za debagovanje)

Na primer:

```js
p.innerHTML = `
<img src=${pice.slika}>
<span>${pice.naziv}</span>: <span>${pice.cena}</span>
`
p.onclick = () => sto.dodaj(pice)
```

Kada se minifikuje postane:

```js
p.innerHTML=`<img src="${pice.slika}"><span>${pice.naziv}</span>:<span>${pice.cena}</span>`p.onclick=()=>sto.dodaj(pice)
```

Slično:

```js
izlaz.innerHTML = `
  <h1>${this.ime}</h1>
  <p>DUG: ${this.dug}</p>
  <ul>
`
for (const naziv in presek) {
  const komada = presek[naziv]
  izlaz.innerHTML += `<li>${naziv} x ${komada}</li>`
}
```

Kada se minifikuje postane:

```js
izlaz.innerHTML=`<h1>${this.ime}</h1><p>DUG:${this.dug}</p><ul>`for(const naziv in presek){const komada=presek[naziv]
```

## Kockaste zagrade posle funkcije 

```js
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    const j = getMinIndex(arr, i)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
```

## Niz posle niza

```js
arr1 = [...str1]
;[...str2].map(a = > a)
```

Ili 

```js
[arr[i], arr[i-1]] = [arr[i-1], arr[i]]
;[arr[i], arr[i-2]] = [arr[i-2], arr[i]]
```

## Concatenating IIFEs

When you concatenate IIFEs, you must be careful not to forget semicolons:

    (function () {}())
    (function () {}())
    // TypeError: undefined is not a function

This code produces an error, because JavaScript thinks that the second line is an attempt to call the result of the first line as a function. The fix is to add a semicolon:

    (function () {}());
    (function () {}())
    // OK

With operators that are only unary (plus is both unary and binary), you can omit the semicolon, because automatic semicolon insertion kicks in.

    void function () {}()
    void function () {}()
    // OK

JavaScript inserts a semicolon after the first line, because void is not a valid way of continuing this statement [3]. 

http://2ality.com/2012/09/expressions-vs-statements.html