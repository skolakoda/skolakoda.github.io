Budući da je JavaScript slabo tipiziran jezik, ista funkcija može primati različite tipove podataka. Na primer, naredna funkcija se može legitimno pozivati sa brojevima i sa znacima:

```js
const saberi = (x, y) => x + y

saberi(3, 4)
saberi('Zdravo', 'Svete')
```

Jedini zahtev je da operacija ima smisla za odabrani tip podataka.

No, možemo dobiti i neočekivane rezultate. Ako upotrebimo funkciju za sabiranje korisničkog unosa, dobićemo neočekivani rezultat, jer JavaScript interpretira ulazne podatke kao strune te ih ulančava:

```js
x = prompt('Unesi prvi broj')
y = prompt('Unesi drugi broj')
saberi(x, y)
// rezultat je 23
```

Da bismo osigurali očekivani rezultat, možemo primeniti eksplicitnu konverziju:

```js
saberi(parseInt(x), parseInt(y))
```
