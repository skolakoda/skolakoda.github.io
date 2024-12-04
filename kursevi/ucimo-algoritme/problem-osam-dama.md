---
title: Problem osam dama
layout: lekcija-algoritmi
permalink: /problem-osam-dama
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/8queensminconflict.gif/400px-8queensminconflict.gif)

**Problem osam dama glasi: potrebno je na šahovsku tablu postaviti osam dama tako da se one međusobno ne napadaju, to jest da se dve dame ne nalaze u istom redu, istoj koloni ili na istoj dijagonali**. 

Početna pozicija je prazna tabla, jedan potez je dodavanje jedne dame na tablu, a završna pozicija je bilo koja pozicija sa osam dama na tabli, tako da se one ne napadaju.

Da bismo pojednostavili pretragu, primetimo da tih osam dama moraju da se nalaze u različitim kolonama table. Zbog toga možemo i-tu damu uvek dodavati u i-tu kolonu. Dodavanje vršimo tako što probamo svako polje kolone redom i proveravamo da li dama sa tog polja napada neku od ranije postavljenih dama. Ako napada, vraćamo se i pokušavamo sledeće polje, a ako ne napada, nastavljamo pretragu prelaskom na sledeću damu i sledeću kolonu. Kada uspemo da načinimo osam koraka u dubinu, tada je na tabli osam dama i došli smo do jednog rešenja koje prikazujemo.

### Primer u pseudokodu

Niz `pos` sadrži pozicije dama po kolonama, petlja po `i` isprobava sve pozicije dama u tekućoj koloni, a petlja po `j` proverava da li se novopostavljena dama napada sa nekom od prethodno postavljenih.

```c
Search(depth)
  if (depth == 8)
    OutputSolution;
    return true;

  ++depth;

  for i = 1 to 8
    pos[depth] = i;
    valid = true;
    for j = 1 to depth-1
      if (pos[j] == pos[depth] or
        j + pos[j] == depth + pos[depth] or
        j - pos[j] == depth - pos[depth])
          valid = false;
    if (valid && Search(depth))
      return true;

  return false;
```


### Primer u JS-U

Ovaj kod pravi graf, dodaje čvorove i ivice, i izvodi DFS pretragu od čvora 1:

{:.ulaz}
```js
function isValid(board, row, col) {
  for (let i = 0; i < col; i++)
    if (board[row][i] === 1) return false

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
    if (board[i][j] === 1) return false

  for (let i = row, j = col; i < board.length && j >= 0; i++, j--)
    if (board[i][j] === 1) return false

  return true
}

function solveQueensRecursive(board, col = 0) {
  if (col >= board.length) return true

  for (let i = 0; i < board.length; i++) {
    if (isValid(board, i, col)) {
      board[i][col] = 1
      if (solveQueensRecursive(board, col + 1)) return true
      board[i][col] = 0
    }
  }

  return false
}

// upotreba
const board = Array.from({ length: 8 }, () => Array(8).fill(0))

const isSolved = solveQueensRecursive(board)
console.log(isSolved ? board : 'Nema rešenja.')
```

## Trivia

Zanimljivo da je pre pojave računara bio potreban genije i upornost veličine Gausa (jedan od najvećih matematičara svih vremena) za potpuno rešavanje ovog problema (nalaženje svih 92 rešenja). Danas je to običan školski zadatak do čijeg rešenja može doći svako ko ume da programira.

## Izvori

- Petlja.org: [*Pretraga "najpre u dubinu" i "najpre u širinu"*](https://petlja.org/BubbleBee/r/Lectures/algoritmi-pretrage-najpre-u-dubinu-i-najpre-u-sirinu)
