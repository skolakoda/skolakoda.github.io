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
